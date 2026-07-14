#!/usr/bin/env python3
"""
THE LX 시공점 LocalBusiness 스키마 빌더
─────────────────────────────────────────
stores.html 안의 STORE_DATA(JS 변수)를 단일 진실 소스로 읽어
schema.org ItemList(AutomotiveBusiness 437건) JSON-LD를 생성하고
stores.html의 BUILD 마커 사이에 삽입한다.

실행:
    cd "홈페이지 최종 수정판"
    python3 build-store-schema.py

마커:
    <!-- BUILD:STORE_SCHEMA:START -->
    ...자동 생성된 JSON-LD...
    <!-- BUILD:STORE_SCHEMA:END -->

시공점 추가/삭제/변경 시 STORE_DATA만 수정하고 이 스크립트 한 번 실행.
"""

import re
import json
import sys
from pathlib import Path

HTML_FILE = Path(__file__).parent / "stores.html"  # 2026-07-14 시공점 목록 페이지 분리로 대상 이동
BASE_URL = "https://isolargard.com/"
MARKER_START = "<!-- BUILD:STORE_SCHEMA:START -->"
MARKER_END = "<!-- BUILD:STORE_SCHEMA:END -->"


def extract_store_data(html: str) -> list[dict]:
    """stores.html에서 STORE_DATA JS 배열 추출 → Python list."""
    m = re.search(r"const\s+STORE_DATA\s*=\s*(\[.*?\]);", html, re.DOTALL)
    if not m:
        sys.exit("ERROR: STORE_DATA를 index.html에서 찾을 수 없습니다.")
    return json.loads(m.group(1))


LOCALITY_SUFFIXES = ("구", "군", "시")


def extract_locality(address: str) -> str:
    """한국 주소에서 addressLocality(시/군/구) 추출.
    우선순위: '~구' > '~군' > '~시' (광역시/도 표기 토큰은 제외)"""
    tokens = address.split()
    EXCLUDE = {"서울", "부산", "대구", "인천", "광주", "대전", "울산",
               "세종", "경기", "강원", "충북", "충남", "전북", "전남",
               "경북", "경남", "제주",
               "서울특별시", "부산광역시", "대구광역시", "인천광역시",
               "광주광역시", "대전광역시", "울산광역시",
               "세종특별자치시", "경기도", "강원도", "충청북도", "충청남도",
               "전라북도", "전라남도", "경상북도", "경상남도",
               "제주특별자치도", "제주도"}
    for suffix in LOCALITY_SUFFIXES:
        for tok in tokens:
            if tok in EXCLUDE:
                continue
            if tok.endswith(suffix):
                return tok
    return tokens[1] if len(tokens) >= 2 else ""


def build_schema(stores: list[dict]) -> dict:
    """437개 지점을 ItemList + AutomotiveBusiness로 변환."""
    items = []
    for i, s in enumerate(stores, start=1):
        locality = extract_locality(s["a"])

        items.append({
            "@type": "ListItem",
            "position": i,
            "item": {
                "@type": "AutomotiveBusiness",
                "name": s["n"],
                "address": {
                    "@type": "PostalAddress",
                    "addressCountry": "KR",
                    "addressRegion": s["r"],
                    "addressLocality": locality,
                    "streetAddress": s["a"],
                },
                "telephone": s["p"],
                "areaServed": s["r"],
                "branchOf": {
                    "@type": "Organization",
                    "name": "THE LX",
                    "url": BASE_URL,
                },
            },
        })

    return {
        "@context": "https://schema.org",
        "@type": "ItemList",
        "name": "THE LX 공식 인증 시공점 네트워크",
        "description": f"전국 {len(stores)}개 공식 인증 시공점. 자동차 윈도우 필름 시공.",
        "numberOfItems": len(stores),
        "itemListOrder": "Unordered",
        "itemListElement": items,
    }


def render_block(schema: dict) -> str:
    """JSON-LD <script> 블록 — 압축 형태(공백 최소화)로 직렬화."""
    # ensure_ascii=False로 한글 그대로, separators로 공백 제거 → 파일 크기 절감
    payload = json.dumps(schema, ensure_ascii=False, separators=(",", ":"))
    return (
        f"{MARKER_START}\n"
        f'<script type="application/ld+json">\n'
        f"{payload}\n"
        f"</script>\n"
        f"{MARKER_END}"
    )


def inject(html: str, block: str) -> str:
    """마커 사이를 교체. 마커가 없으면 첫 </head> 직전에 마커 + 블록 삽입."""
    pattern = re.compile(
        re.escape(MARKER_START) + r".*?" + re.escape(MARKER_END),
        re.DOTALL,
    )
    if pattern.search(html):
        return pattern.sub(block, html)

    # 첫 실행: </head> 직전에 삽입
    if "</head>" not in html:
        sys.exit("ERROR: </head> 태그를 찾을 수 없습니다.")
    return html.replace("</head>", f"\n{block}\n</head>", 1)


def main():
    html = HTML_FILE.read_text(encoding="utf-8")
    stores = extract_store_data(html)
    schema = build_schema(stores)
    block = render_block(schema)
    new_html = inject(html, block)

    before = len(html.encode("utf-8"))
    after = len(new_html.encode("utf-8"))

    HTML_FILE.write_text(new_html, encoding="utf-8")

    print(f"✓ {len(stores)}개 시공점 스키마 생성 완료")
    print(f"  파일 크기: {before:,} → {after:,} bytes (+{after-before:,})")
    print(f"  마커: {MARKER_START} ... {MARKER_END}")


if __name__ == "__main__":
    main()
