/* THE LX 제품 모달 데이터 — index.html · pricing.html 공용 단일 소스.
   카피·스펙 수정은 이 파일 한 곳만. (이전엔 두 파일에 복붙되어 어긋남 반복)
   ⚠️ 예외: recommend.html의 농도별 스펙표와 index.html VLT 밴드 라벨은 정적 HTML 사본 —
   LX 농도별 VLT/TSER 수정 시 그 두 곳도 함께 고칠 것.
   ⚠️ 예외: 특허 번호(WO2004042435 · US7709095)도 정적 사본 5곳 존재 —
   index.html 마퀴 2곳·제품카드(product-patent), technology.html 메타 description·tech-proof 칩.
   특허 표기 수정 시 이 파일과 그 5곳을 항상 함께 고칠 것. */
const PD_DATA = {
  lx: {
    name: 'LX',
    tagline: '유리처럼 맑은 시야. 빛은 통과시키고 열만 반사합니다. 색이 아니라 금속 스퍼터. 변하지 않는 LX.',
    recommendLabel: '왜 LX인가',
    recommend: '타협 없는 나만의 공간. 맑은 시야, 흔들리지 않는 온도, 변하지 않는 10년. LX는 그 무엇도 포기하지 않습니다.',
    flagship: true,
    perf: [
      { label: 'UV 차단', pct: 99 },
      { label: '최대 TSER', pct: 71 },
      { label: '보증', pct: 100 },
    ],
    specs: [
      { title: '농도별 성능 (VLT · TSER)', rows: [
        { label: '농도 15 — VLT 12%', value: 'TSER 71%', pct: 71 },
        { label: '농도 25 — VLT 23%', value: 'TSER 67%', pct: 67 },
        { label: '농도 40 — VLT 42%', value: 'TSER 63%', pct: 63 },
        { label: '농도 55 — VLT 59%', value: 'TSER 57%', pct: 57 },
        { label: '농도 70 — VLT 72%', value: 'TSER 55%', pct: 55 },
      ]},
      { title: 'UV 성능', rows: [
        { label: 'UV 차단율',  value: '99%+',          pct: 99   },
        { label: 'UV 등급',    value: 'PA+++ SPF 285',  pct: null },
        { label: '원산지',     value: 'USA (Saint-Gobain)', pct: null },
        { label: '세계특허',   value: 'WO2004042435 / 미국특허 US7709095', pct: null },
      ]},
      { title: '보증', rows: [
        { label: '내구성 보증',    value: '10년', pct: null },
        { label: '변색 보증',      value: '7년',  pct: null },
        { label: '기포·박리 보증', value: '10년', pct: null },
      ]},
    ],
  },
  vogue: {
    name: 'Vogue',
    tagline: '반사가 곧 외관, 반사가 곧 시원함. 밖에선 강렬한 그린 골드로 빛나고, 열은 가장 강하게 막습니다.',
    recommendLabel: '왜 Vogue인가',
    recommend: '같은 검정은 거부합니다. 거울처럼 빛나는 그린 골드, 가장 강한 열 차단. 그게 Vogue입니다.',
    flagship: false,
    perf: [
      { label: 'UV 차단', pct: 99 },
      { label: '최대 TSER', pct: 80 },
      { label: '보증', pct: 70 },
    ],
    specs: [
      { title: '농도별 성능 (VLT · TSER)', rows: [
        { label: '농도 10 — VLT 10%', value: 'TSER 80%', pct: 80 },
        { label: '농도 20 — VLT 21%', value: 'TSER 71%', pct: 71 },
        { label: '농도 30 — VLT 31%', value: 'TSER 61%', pct: 61 },
        { label: '농도 40 — VLT 43%', value: 'TSER 52%', pct: 52 },
      ]},
      { title: 'UV 성능 · 특성', rows: [
        { label: 'UV 차단율',  value: '99%+',              pct: 99   },
        { label: 'UV 등급',    value: 'PA+++ SPF 285',      pct: null },
        { label: '필름 타입',  value: '풀 메탈 스퍼터 (반사형)', pct: null },
        { label: '컬러',       value: '그린 골드',         pct: null },
        { label: '원산지',     value: 'USA (Saint-Gobain)', pct: null },
      ]},
      { title: '보증', rows: [
        { label: '내구성 보증',    value: '7년', pct: null },
        { label: '기포·박리 보증', value: '7년', pct: null },
      ]},
    ],
  },
  xenith: {
    name: 'Xenith IR',
    tagline: '열은 차단하고, 전파에서 자유롭다. 가장 진보된 세라믹 소재. 어떤 차에도 어울리는 비크 블랙.',
    recommendLabel: '왜 Xenith인가',
    recommend: '전기차 오너에게 사랑받는 이유. 확실한 열 차단, 방해받지 않는 신호, 선명한 시야, 눈부심 없는 주행. 그게 Xenith입니다.',
    flagship: false,
    perf: [
      { label: 'UV 차단', pct: 99 },
      { label: '최대 TSER', pct: 68 },
      { label: '보증', pct: 50 },
    ],
    specs: [
      { title: '농도별 성능 (VLT · TSER)', rows: [
        { label: '농도 5  — VLT 8%',  value: 'TSER 68%', pct: 68 },
        { label: '농도 15 — VLT 16%', value: 'TSER 66%', pct: 66 },
        { label: '농도 30 — VLT 31%', value: 'TSER 61%', pct: 61 },
        { label: '농도 50 — VLT 56%', value: 'TSER 51%', pct: 51 },
      ]},
      { title: 'UV 성능 · 특성', rows: [
        { label: 'UV 차단율',  value: '99%+',              pct: 99   },
        { label: 'UV 등급',    value: 'PA+++ SPF 285',      pct: null },
        { label: '필름 타입',  value: '세라믹 IR',         pct: null },
        { label: '컬러',       value: 'Vic Black',         pct: null },
        { label: '전파 방해',  value: '없음 (GPS·셀룰러 정상)', pct: null },
        { label: '원산지',     value: 'USA (Saint-Gobain)', pct: null },
      ]},
      { title: '보증', rows: [
        { label: '내구성 보증',    value: '5년', pct: null },
        { label: '기포·박리 보증', value: '5년', pct: null },
      ]},
    ],
  },
  quantum: {
    name: 'Quantum',
    tagline: '밖에선 에메랄드, 안에선 맑은 시야.',
    recommendLabel: '왜 Quantum인가',
    recommend: '햇빛에 피어나는 에메랄드 그린, 안에선 맑은 시야, 차의 수명까지 가는 색과 성능. 글로벌 베스트셀러 Quantum.',
    flagship: false,
    perf: [
      { label: 'UV 차단', pct: 99 },
      { label: '최대 TSER', pct: 72 },
      { label: '보증', pct: 70 },
    ],
    specs: [
      { title: '모델별 성능 (VLT · TSER)', rows: [
        { label: 'Quantum Black — VLT 8%',  value: 'TSER 72%', pct: 72 },
        { label: 'Quantum      — VLT 9%',   value: 'TSER 72%', pct: 72 },
        { label: 'Quantum 14   — VLT 13%',  value: 'TSER 61%', pct: 61 },
        { label: 'Quantum 19   — VLT 19%',  value: 'TSER 57%', pct: 57 },
        { label: 'Quantum 28   — VLT 32%',  value: 'TSER 50%', pct: 50 },
        { label: 'Quantum 37   — VLT 37%',  value: 'TSER 48%', pct: 48 },
        { label: 'Quantum 52   — VLT 50%',  value: 'TSER 41%', pct: 41 },
      ]},
      { title: 'UV 성능 · 특성', rows: [
        { label: 'UV 차단율',  value: '99%+',              pct: 99   },
        { label: 'UV 등급',    value: 'PA+++ SPF 285',      pct: null },
        { label: '필름 타입',  value: '풀 메탈 스퍼터',    pct: null },
        { label: '소재',       value: '금 · 은 · 니켈 희귀 금속 합금', pct: null },
        { label: '원산지',     value: 'USA (Saint-Gobain)', pct: null },
      ]},
      { title: '보증', rows: [
        { label: '내구성 보증',    value: '7년', pct: null },
        { label: '기포·박리 보증', value: '7년', pct: null },
      ]},
    ],
  },
  titanium: {
    name: 'Titanium',
    tagline: '티타늄을 증착한 세계 유일의 딥 블랙. 어떤 차에도 내려앉는 검정.',
    recommendLabel: '왜 Titanium인가',
    recommend: '합리적인 가격, 깔끔한 마감의 Titanium.',
    flagship: false,
    perf: [
      { label: 'UV 차단', pct: 99 },
      { label: '최대 TSER', pct: 57 },
      { label: '보증', pct: 50 },
    ],
    specs: [
      { title: '농도별 성능 (VLT · TSER)', rows: [
        { label: '농도 6  — VLT 6%',  value: 'TSER 57%', pct: 57 },
        { label: '농도 16 — VLT 16%', value: 'TSER 55%', pct: 55 },
        { label: '농도 26 — VLT 26%', value: 'TSER 54%', pct: 54 },
        { label: '농도 50 — VLT 50%', value: 'TSER 43%', pct: 43 },
      ]},
      { title: 'UV 성능 · 특성', rows: [
        { label: 'UV 차단율',  value: '99%+',                  pct: 99   },
        { label: 'UV 등급',    value: 'PA+++ SPF 285',          pct: null },
        { label: '필름 타입',  value: '티타늄 증착 (메탈)',    pct: null },
        { label: '컬러',       value: '딥 블랙 (세계 유일 티타늄 증착)', pct: null },
        { label: '원산지',     value: 'USA (Saint-Gobain)',     pct: null },
      ]},
      { title: '보증', rows: [
        { label: '내구성 보증',    value: '5년', pct: null },
        { label: '기포·박리 보증', value: '5년', pct: null },
      ]},
    ],
  },
  gline: {
    name: 'G-LINE',
    tagline: '빛에 따라 색이 달라지는 라미네이티드 블루.',
    recommendLabel: '왜 G-LINE인가',
    recommend: '빛마다 다르게 피는 라미네이티드 블루, 튀지 않는 개성, 균형 잡힌 하이브리드 G-LINE.',
    flagship: false,
    perf: [
      { label: 'UV 차단', pct: 99 },
      { label: '최대 TSER', pct: 67 },
      { label: '보증', pct: 50 },
    ],
    specs: [
      { title: '농도별 성능 (VLT · TSER)', rows: [
        { label: '농도 10 — VLT 10%', value: 'TSER 67%', pct: 67 },
        { label: '농도 30 — VLT 27%', value: 'TSER 55%', pct: 55 },
      ]},
      { title: 'UV 성능 · 특성', rows: [
        { label: 'UV 차단율',  value: '99%+',              pct: 99   },
        { label: 'UV 등급',    value: 'PA+++ SPF 285',      pct: null },
        { label: '필름 타입',  value: '메탈반사 하이브리드 (Balance & Hybrid)', pct: null },
        { label: '컬러',       value: '라미네이티드 블루',  pct: null },
        { label: '기술',       value: '스퍼터링 + 나노 카본 세라믹 융합', pct: null },
        { label: '원산지',     value: 'USA (Saint-Gobain)', pct: null },
      ]},
      { title: '보증', rows: [
        { label: '내구성 보증',    value: '5년', pct: null },
        { label: '기포·박리 보증', value: '5년', pct: null },
      ]},
    ],
  },
  sline: {
    name: 'S-LINE',
    tagline: '신호를 막지 않는 비반사 필름. 합리적인 가격의 편안한 시야.',
    recommendLabel: '왜 S-LINE인가',
    recommend: '비반사로 편안한 시야, 방해받지 않는 신호, 농도와 상관없이 쾌적한 S-LINE.',
    flagship: false,
    perf: [
      { label: 'UV 차단', pct: 99 },
      { label: '최대 TSER', pct: 60 },
      { label: '보증', pct: 50 },
    ],
    specs: [
      { title: '농도별 성능 (VLT · TSER)', rows: [
        { label: '농도 10 — VLT 10%', value: 'TSER 60%', pct: 60 },
        { label: '농도 30 — VLT 31%', value: 'TSER 55%', pct: 55 },
      ]},
      { title: 'UV 성능 · 특성', rows: [
        { label: 'UV 차단율',  value: '99%+',              pct: 99   },
        { label: 'UV 등급',    value: 'PA+++ SPF 285',      pct: null },
        { label: '필름 타입',  value: '비반사 (Comfort & Smart)', pct: null },
        { label: '전파 방해',  value: '없음',              pct: null },
        { label: '원산지',     value: 'USA (Saint-Gobain)', pct: null },
      ]},
      { title: '보증', rows: [
        { label: '내구성 보증',    value: '5년', pct: null },
        { label: '기포·박리 보증', value: '5년', pct: null },
      ]},
    ],
  },
  galaxie: {
    name: 'Galaxie',
    tagline: '가격, 시야, 열 차단의 균형. 부담 없이 시작하는 THE LX의 기본형.',
    recommendLabel: '왜 Galaxie인가',
    recommend: 'GPS와 하이패스를 방해하지 않는 전파 친화, 눈부심을 줄인 편안한 시야, 부담 없이 시작하는 균형의 Galaxie.',
    flagship: false,
    perf: [
      /* 갤럭시 공식 페이지는 UV %를 표기하지 않음(PA+++ SPF 285만) → 링 중앙 텍스트를 PA+++로 오버라이드.
         pct 99는 링 호(arc) 길이용 — SPF 285의 환산치(1-1/285 ≈ 99.6%), 화면에 %로 노출되지 않음 */
      { label: 'UV 등급', pct: 99, text: 'PA+++' },
      { label: '최대 TSER', pct: 50 },
      { label: '보증', pct: 50 },
    ],
    specs: [
      { title: '농도별 성능 (VLT · TSER)', rows: [
        { label: '농도 12 — VLT 13%', value: 'TSER 50%', pct: 50 },
        { label: '농도 35 — VLT 39%', value: 'TSER 41%', pct: 41 },
        { label: '농도 50 — VLT 54%', value: 'TSER 35%', pct: 35 },
      ]},
      { title: 'UV 성능 · 특성', rows: [
        { label: 'UV 등급',    value: 'PA+++ SPF 285',      pct: null },
        { label: '필름 타입',  value: '기본형 (Intelligent & Balance)', pct: null },
        { label: '전파 방해',  value: '없음',              pct: null },
        { label: '표면 코팅',  value: '스크래치 방지 특허 코팅', pct: null },
        { label: '원산지',     value: 'USA (Saint-Gobain)', pct: null },
      ]},
      { title: '보증', rows: [
        { label: '내구성 보증',    value: '5년', pct: null },
        { label: '기포·박리 보증', value: '5년', pct: null },
      ]},
    ],
  },
  shield: {
    name: 'LX SHIELD',
    tagline: '긁히면 스스로 메우는 PPF. 자가복원 초고분자 도막.',
    recommendLabel: '왜 LX SHIELD인가',
    recommend: '긁혀도 스스로 메우는 자가복원, 8mil 보호막, 도장을 오래 지키는 LX SHIELD.',
    flagship: false,
    perf: [
      { label: 'UV 차단', pct: 99 },
      { label: '광택도', pct: 92 },
      { label: '셀프힐링', pct: 100 },
    ],
    specs: [
      { title: '물리적 특성', rows: [
        { label: '두께',       value: '8 mil (200 μm)',    pct: null },
        { label: '광택도',     value: '92 GU',            pct: 92   },
        { label: '셀프힐링',   value: '상온 1분 이내',    pct: 100  },
      ]},
      { title: '기계적 강도 · 인증', rows: [
        { label: '파단 강도',   value: '>45 lbs/in (83 N/cm)',        pct: null },
        { label: '인장 응력',   value: '>2,200 lbs/in² (>15 MPa)',   pct: null },
        { label: '스톤칩 인증', value: 'Pass (SAE J400)',             pct: null },
        { label: '내후성 인증', value: 'Pass (ASTM G155, 3,000hrs)', pct: null },
      ]},
      { title: 'UV 성능', rows: [
        { label: 'UV 차단율', value: '99%+',          pct: 99   },
        { label: 'UV 등급',   value: 'PA+++ SPF 285', pct: null },
        { label: '적용 범위', value: '차량 외부 도장 보호 · PPF', pct: null },
      ]},
    ],
  },
};
