/* THE LX 제품 모달 데이터 — index.html · pricing.html 공용 단일 소스.
   카피·스펙 수정은 이 파일 한 곳만. (이전엔 두 파일에 복붙되어 어긋남 반복)
   ⚠️ 예외: recommend.html의 농도별 스펙표와 index.html VLT 밴드 라벨은 정적 HTML 사본 —
   LX 농도별 VLT/TSER 수정 시 그 두 곳도 함께 고칠 것.
   ⚠️ 예외: 특허 번호(WO2015102923 · US7709095)도 정적 사본 5곳 존재 —
   index.html 마퀴 2곳·제품카드(product-patent), technology.html 메타 description·tech-proof 칩.
   특허 표기 수정 시 이 파일과 그 5곳을 항상 함께 고칠 것.
   ⚠️ 예외: UV 스펙 문구(99%+ · PA+++ SPF 285)는 recommend.html 그래프 캡션 c1·스펙표에도 정적 사본 —
   UV 표기 수정 시 그 두 곳도 함께 고칠 것.
   ⚠️ 카피 금지어 (전 페이지 공통 — 새 카피 작성·수정 후 grep로 0건 확인):
   '되돌리-'('되-' 계열 열 표현) · '머금-' · '쌓아두-' · '가두-/가둔/가둬' → 반사/차단·흡수하다·열이 남다·받다로.
   '틴팅'·'썬팅'·'필름 시공'은 노출 카피 전면 금지 (유일 예외: meta keywords 태그). */
const PD_DATA = {
  lx: {
    name: 'LX',
    tagline: '유리처럼 맑은 시야. 빛은 통과시키고 열만 반사합니다. 색이 아니라 금속 스퍼터. 변하지 않는 LX.',
    recommendLabel: '왜 LX인가',
    recommend: '타협 없는 나만의 공간. 맑은 시야, 흔들리지 않는 온도, 변하지 않는 10년. LX는 그 무엇도 포기하지 않습니다.',
    flagship: true,
    /* 모달 VLT 비주얼 — 공식 비교컷(밀라노 두오모, LX 15~70 라벨 포함). 렌더 규칙=Vogue vltImage 주석 참조 */
    vltImage: 'lx-vlt-scene.jpg',
    /* 모달 히어로 무대(2026-08-03) — 두오모 비교컷이 카드 배너와 중복이라 교체. 차 사진+픽토그램 오버레이(구본사 Key Point 문법).
       사진=나노바나나 생성(무로고 EV·밝은 하늘)+필름 그레인 로컬 보정. stage가 있으면 vltImage 대신 렌더(vltImage=롤백 폴백) */
    stage: { img: 'lx-stage.jpg', alt: 'THE LX — 해안 도로에 선 흰 스포츠카, 짙게 마감된 창유리', icons: [
      { i: 'eye',    t: '가시성' },
      { i: 'heat',   t: '열차단' },
      { i: 'safety', t: '세이프티' },
      { i: 'orbit',  t: '반영구적' },
    ]},
    /* 모달 제품 소개 본문(브로슈어 이식, 2026-07-24) — 있으면 tagline·recommend 박스 대신 렌더.
       ⚠️ 특허번호 경위: 브로슈어 사망 번호(W0961339A1·551304) → 7/14 WO2004042435(구글 특허 404, 실존 확인 불가로 판명)
       → 7/30 본사(solargard.co.kr) 표기 + 구글 특허 원문 확인으로 WO2015102923 확정
       (Saint-Gobain Performance Plastics 2013 가족, 미국 등록 US10081570·US11214514 유효.
        US7709095=실존하나 만료(Expired-Lifetime) — '획득하였습니다' 과거형 서술이라 유지 가능) */
    intro: [
      { h: '최고급 명성을 지닌 혁신적 기술의 결정체',
        p: '프리미엄의 최상급 제품이자 생고뱅 솔라가드의 최첨단 기술력이 담겨 있는 LX는 업계 최고의 시인성과 태양 에너지 컨트롤 성능을 발휘하는 더 엘엑스 윈도우 필름의 정수입니다.' },
      { h: '세계 특허(WO2015102923)와 미국 특허(US7709095)',
        p: 'LX는 최첨단 진공 마그네트론 스퍼터링 공법으로 적층된 다층의 금속 막이 유해한 특정 솔라 스펙트럼을 선별적으로 차단하는 지능형 필름으로, 세계 특허(WO2015102923)와 미국 특허(US7709095)까지 획득하였습니다.' },
      { list: [
        '최고의 광학적 투명도',
        '빛 투과율 대비 높은 열 차단 성능 (VLT 72% : TSER 55%)',
        '창유리 보강 및 안전 기능 강화',
        '겨울철 창유리의 단열 성능 개선',
        '에너지 효율 증진 및 탄소 배출 저감 능력을 인정받은 업계 유일의 친환경 차량용 윈도우 필름',
      ]},
    ],
    /* 모달 우측 픽토그램 7종(브로슈어 이식) — i=PD_ICONS 키(선화 SVG, 본 파일 하단 공용 렌더러) */
    introSide: [
      { i: 'eye',      h: '가시성',            p: '최고의 광학적 투명도와 가시성' },
      { i: 'heat',     h: '열차단',            p: '가시광선 투과율(VLT) 대비 업계 최고의 열 차단 성능(TSER)' },
      { i: 'spectrum', h: '스펙트럼 차단',      p: '금속 산화물을 이용한 100% 스퍼터링 기술로 특정 솔라 스펙트럼을 선택적으로 차단 (Spectrally Selective)' },
      /* [보류 2026-08-03: 수상 표기 사용 가능 확인 전까지 비노출 — 복원=주석 해제]
      { i: 'medal',    h: '기술상 연속 2회 수상', p: 'AIMCAL Technology of the Year 올해의 기술상 연속 2회 수상' }, */
      { i: 'safety',   h: '세이프티',          p: '차량 충돌 사고 시 안전필름의 기능 (2mil, 0.05mm 두께)' },
      { i: 'orbit',    h: '반영구적',          p: '탈색, 변형 및 열 차단 성능이 저하되는 일반 필름과 달리 반영구적 성능 유지' },
      { i: 'badge',    h: '전 세계 특허 제품',   p: '100% Full 금속 스퍼터 박막 접합 구조, 미국 및 전 세계 특허 제품' },
    ],
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
        { label: '필름 타입',  value: '풀 메탈 스퍼터 (반사형) · 5-Layer', pct: null },
        { label: '제조원',     value: 'USA 생고뱅', pct: null },
        { label: '세계특허',   value: 'WO2015102923 / 미국특허 US7709095', pct: null },
      ]},
      { title: '보증', rows: [
        { label: '내구성 보증',    value: '10년', pct: null },
      ]},
    ],
  },
  vogue: {
    name: 'Vogue',
    tagline: '반사가 곧 외관, 반사가 곧 시원함. 밖에선 강렬한 그린 골드로 빛나고, 열은 가장 강하게 막습니다.',
    recommendLabel: '왜 Vogue인가',
    recommend: '같은 검정은 거부합니다. 거울처럼 빛나는 그린 골드, 가장 강한 열 차단. 그게 Vogue입니다.',
    flagship: false,
    /* 모달 VLT 비주얼 — vltImage가 있으면 하늘 밴드 시뮬레이션 대신 이 이미지(라벨 포함 공식 비교컷)를 사용.
       vltTint는 이미지 제거 시 폴백용 보관. ⚠️ 틴트 교훈: 노랑 비중 크면 하늘 파랑과 섞여 카키로 탁해짐(1차 46,64,26/104,88,30 폐기) */
    vltImage: 'vogue-vlt-scene-2.jpg',
    /* 모달 히어로 무대(2026-08-03 확장) — LX와 동일 문법: 나노바나나 무로고 차+필름 그레인, stage 우선·vltImage=폴백 */
    stage: { img: 'vogue-stage-3.jpg', alt: 'Vogue — 유리 빌딩 사이 광장에 선 검정 세단, 빛을 반사하는 창유리', icons: [
      { i: 'reflect', t: '내부 반사 저감' },
      { i: 'gold', t: '그린골드 색상' },
      { i: 'privacy', t: '프라이버시' },
      { i: 'clarity', t: '광학적 선명도' },
    ]},
    vltTint: ['12,52,38', '74,84,30'],
    /* 모달 제품 소개 본문(브로슈어 이식, 2026-07-27) — h 없는 블록=이어지는 문단(렌더러 pd-intro-cont) */
    intro: [
      { h: '최고의 열 차단 성능과 광학적 선명도를 위한 혁신 기술',
        p: '보그는 반사 타입 필름 중 최고 등급의 제품으로 강렬하고 아름다운 색상과 경이로운 열 차단 성능, 광학적으로 선명한 시인성을 자랑합니다.' },
      { p: '보그는 여러분의 차량을 가장 다이나믹하고 쾌적한 장소로 만들어 줍니다.' },
      { p: '짜릿한 드라이빙 경험을 선사하는 보그와 함께 매일 멋진 여행을 떠나세요.' },
      { list: [
        '풀 메탈 스퍼터 필름의 그린 골드 컬러',
        '내부 반사 저감 코팅, 스크래치 방지 코팅',
        '프라이버시 및 드레스업 기능 강화',
        '광학적 선명도, 눈부심 방지(섬광 효과 저감)',
      ]},
    ],
    /* 모달 픽토그램 5종(브로슈어 이식) — i=렌더러 PD_ICONS 키 */
    introSide: [
      { i: 'reflect', h: '내부 반사 저감', p: '내부 반사 저감 코팅, 스크래치 방지 코팅' },
      { i: 'gold',    h: '그린골드 색상',  p: '풀메탈 스퍼터링 필름의 그린골드 컬러' },
      { i: 'privacy', h: '프라이버시',     p: 'VLT 대비 프라이버시 기능 강화' },
      { i: 'clarity', h: '광학적 선명도',  p: '본드층 레이어 강화, 광학적 선명도, 눈부심 방지(섬광 축소)' },
      { i: 'sputter', h: '스퍼터링 기술',  p: 'VLT 10%, 20%, 30%, 40% 4가지 농도 — 각각 TSER 80%, 71%, 61%, 52%' },
    ],
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
        { label: '제조원',     value: 'USA 생고뱅', pct: null },
      ]},
      { title: '보증', rows: [
        { label: '내구성 보증',    value: '7년', pct: null },
      ]},
    ],
  },
  xenith: {
    name: 'Xenith IR',
    tagline: '열은 차단하고, 전파에서 자유롭다. 가장 진보된 세라믹 소재. 어떤 차에도 어울리는 비크 블랙.',
    recommendLabel: '왜 Xenith인가',
    recommend: '전기차 오너에게 사랑받는 이유. 확실한 열 차단, 방해받지 않는 신호, 선명한 시야, 눈부심 없는 주행. 그게 Xenith입니다.',
    flagship: false,
    /* 모달 VLT 비주얼 — 공식 비교컷(팔마 대성당, XENITH IR 15/30 라벨 포함) */
    vltImage: 'xenith-vlt-scene.jpg',
    /* 모달 히어로 무대(2026-08-03 확장) — LX와 동일 문법: 나노바나나 무로고 차+필름 그레인, stage 우선·vltImage=폴백 */
    stage: { img: 'xenith-stage.jpg', alt: 'Xenith IR — 도심 건물 사이에 선 검정 전기 SUV, 짙은 창유리', icons: [
      { i: 'heat', t: '열 차단' },
      { i: 'signal', t: '전파 친화적' },
      { i: 'reflect', t: '내부 반사율' },
      { i: 'car', t: '조화로운 컬러' },
    ]},
    /* 모달 제품 소개 본문(브로슈어 이식, 2026-07-27) */
    intro: [
      { h: '차세대 세라믹 기술로 탄생한 업계 최정상급 IR 필름',
        p: '현재 사용 가능한 가장 진보된 세라믹 소재와 생고뱅 솔라가드의 독점 기술로 만들어진 이 새로운 IR 라인은 최대 68%의 총 태양에너지 차단 성능 제공, 셀룰러 및 GPS 데이터 신호의 명확한 전송, 모든 바디 컬러에 어울리는 비크 블랙 컬러의 멋진 외관 드레스업 기능 등을 제공합니다.' },
      { list: [
        '최대 68%의 업계 최정상급 TSER(총 태양 에너지 차단율)',
        'GPS 수신 장애가 없는 전파 친화적 구조',
        '사고시 유리 비산 방지로 2차 사고 예방',
        '모든 외관을 보완하는 풍부한 블랙 컬러',
        '눈부심 감소 및 유해 자외선 99% 차단',
      ]},
    ],
    /* 모달 픽토그램 5종(브로슈어 이식) — ⚠️ 열차단 수치: 브로슈어 픽토그램 원문 "최대 65%"는
       같은 화면 intro·스펙표의 최대 68%와 충돌 → 스펙표 기준 68로 통일(72.5→71 단일화와 같은 원칙) */
    introSide: [
      { i: 'reflect', h: '내부 반사율',     p: '5% 이하의 낮은 내부 반사율로 야간 시야 확보에 유리' },
      { i: 'heat',    h: '열 차단',        p: '세라믹 계열 IR 제품군 중 가장 뛰어난 열 차단 성능 제공 (최대 TSER 68%)' },
      { i: 'signal',  h: '전파 친화적',     p: 'GPS 수신 장애가 없는 전파 친화적 구조' },
      { i: 'car',     h: '조화로운 컬러',   p: '차량의 모든 바디 컬러에 어울리는 비크 블랙 컬러의 필름으로 조화롭고 고전적인 외관 완성' },
      { i: 'install', h: '시공 작업 편의성', p: '높은 작업 편의성으로 시공 실패율을 줄이는 동시에 시공 완성도 극대화' },
    ],
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
        { label: '필름 타입',  value: '세라믹 IR (열흡수 타입)', pct: null },
        { label: '컬러',       value: 'Vic Black',         pct: null },
        { label: '전파 방해',  value: '없음 (GPS·셀룰러 정상)', pct: null },
        { label: '제조원',     value: 'USA 생고뱅', pct: null },
      ]},
      { title: '보증', rows: [
        { label: '내구성 보증',    value: '5년', pct: null },
      ]},
    ],
  },
  quantum: {
    name: 'Quantum',
    tagline: '밖에선 에메랄드, 안에선 맑은 시야.',
    recommendLabel: '왜 Quantum인가',
    recommend: '햇빛에 피어나는 에메랄드 그린, 안에선 맑은 시야, 차의 수명까지 가는 색과 성능. 글로벌 베스트셀러 Quantum.',
    flagship: false,
    /* 모달 VLT 비주얼 — 공식 비교컷(토론토, QUANTUM BLACK 8~37 라벨 포함) */
    vltImage: 'quantum-vlt-scene-4.jpg',
    /* 모달 히어로 무대(2026-08-03 확장) — LX와 동일 문법: 나노바나나 무로고 차+필름 그레인, stage 우선·vltImage=폴백 */
    stage: { img: 'quantum-stage-6.jpg', alt: 'Quantum — 바다 옆 고속도로를 달리는 은색 세단', icons: [
      { i: 'spectrum', t: '스펙트럼 차단' },
      { i: 'sun', t: '태양 에너지 차단' },
      { i: 'orbit', t: '반영구적' },
      { i: 'warrant', t: '보증된 색상과 성능' },
    ]},
    /* 모달 제품 소개 본문(브로슈어 이식, 2026-07-27) */
    intro: [
      { h: '우수한 성능, 내구성, 인상적인 스타일을 위한 풀 메탈 스퍼터 필름',
        p: '퀀텀은 생고뱅 솔라가드의 최신 스퍼터링 기술을 이용해 금, 은, 니켈 등 각종 희귀 금속들을 독보적인 설계와 조합으로 개발된 프리미엄 라인의 글로벌 베스트셀러입니다.' },
      { h: '높은 열 차단 성능과 다채로운 컬러',
        p: '시선을 끌어당기는 세련된 컬러로 스타일리시한 외관을 완성해 주는 퀀텀은 개성 넘치는 차량용 고성능 아이템으로 자리 잡았습니다.' },
      { list: [
        '뛰어난 열 차단 성능 (시간이 지나도 동일한 성능 유지)',
        '비교할 수 없는 시인성 (두 겹을 시공하여도 타사 필름 한 겹보다 좋은 시인성)',
        '유리와 결합 시 아름다운 에메랄드 컬러',
      ]},
    ],
    /* 모달 픽토그램 5종(브로슈어 이식) — spectrum·orbit 재사용, gems·warrant·sun 신규 */
    introSide: [
      { i: 'spectrum', h: '스펙트럼 차단',     p: '금속 산화물을 이용한 100% 스퍼터링 기술로 특정 솔라 스펙트럼을 선택적으로 차단 (Spectrally Selective)' },
      { i: 'gems',     h: '이국적 색상의 금속', p: '마그네트론 스퍼터링 공법으로 조합된 다양한 Exotic Metal(이국적 색상의 금속)' },
      { i: 'orbit',    h: '반영구적',          p: '탈색, 변형 및 열 차단 성능이 저하되는 일반 필름과 달리 반영구적 성능 유지' },
      { i: 'warrant',  h: '보증된 색상과 성능', p: '자동차의 수명이 다하는 날까지 보증되는 색상과 성능' },
      { i: 'sun',      h: '태양 에너지 차단',   p: '동일 가시광선 투과율 대비 최고의 태양 에너지 차단 성능 보유' },
    ],
    perf: [
      { label: 'UV 차단', pct: 99 },
      { label: '최대 TSER', pct: 72 },
      { label: '보증', pct: 70 },
    ],
    specs: [
      { title: '모델별 성능 (VLT · TSER)', rows: [
        { label: 'Quantum Black — VLT 8%',  value: 'TSER 72%', pct: 72 },
        { label: 'Quantum Plus 8 — VLT 9%', value: 'TSER 72%', pct: 72 },
        { label: 'Quantum 14   — VLT 13%',  value: 'TSER 61%', pct: 61 },
        { label: 'Quantum 19   — VLT 19%',  value: 'TSER 57%', pct: 57 },
        { label: 'Quantum 28   — VLT 32%',  value: 'TSER 50%', pct: 50 },
        { label: 'Quantum 37   — VLT 37%',  value: 'TSER 48%', pct: 48 },
      ]},
      { title: 'UV 성능 · 특성', rows: [
        { label: 'UV 차단율',  value: '99%+',              pct: 99   },
        { label: 'UV 등급',    value: 'PA+++ SPF 285',      pct: null },
        { label: '필름 타입',  value: '풀 메탈 스퍼터 (반사형)', pct: null },
        { label: '소재',       value: '금 · 은 · 니켈 희귀 금속 합금', pct: null },
        { label: '컬러',       value: '에메랄드 (유리 결합 시 발색)', pct: null },
        { label: '제조원',     value: 'USA 생고뱅', pct: null },
      ]},
      { title: '보증', rows: [
        { label: '내구성 보증',    value: '7년', pct: null },
      ]},
    ],
  },
  titanium: {
    name: 'Titanium',
    tagline: '티타늄을 증착한 세계 유일의 딥 블랙. 어떤 차에도 내려앉는 검정.',
    recommendLabel: '왜 Titanium인가',
    recommend: '합리적인 가격, 깔끔한 마감의 Titanium.',
    flagship: false,
    /* 모달 VLT 비주얼 — 공식 비교컷(하바나 거리, TITANIUM 6/16/26 라벨 포함) */
    vltImage: 'titanium-vlt-scene.jpg',
    /* 모달 히어로 무대(2026-08-03 확장) — LX와 동일 문법: 나노바나나 무로고 차+필름 그레인, stage 우선·vltImage=폴백 */
    stage: { img: 'titanium-stage.jpg', alt: 'Titanium — 흰 단층 주택 앞에 선 은색 세단', icons: [
      { i: 'shield', t: '성능과 내구성' },
      { i: 'podium', t: '고성능 제품' },
      { i: 'heat', t: '태양열 차단' },
      { i: 'carTi', t: '미려한 외관' },
    ]},
    /* 모달 제품 소개 본문(브로슈어 이식, 2026-07-27) */
    intro: [
      { h: '모든 차량에 잘 어울리는 티타늄 계열의 필름',
        p: '티타늄은 세계에서 유일하게 티타늄이 증착된 딥 블랙 컬러의 윈도우 필름으로 차종에 상관없이 깊이 있고 멋진 외관을 만들어 줍니다.' },
      { p: '또한 합리적인 시공 가격 대비 높은 열 차단 성능, 내구성, 그리고 시공성 등으로 인기가 굉장히 높은 금속 필름이며, 시인성이 뛰어나 야간에도 안전하게 운전할 수 있도록 해줍니다.' },
      { list: [
        '높은 열 차단 성능',
        '대중적으로 선호하는 딥 블랙 컬러',
        '높은 시인성과 내구성',
      ]},
    ],
    /* 모달 픽토그램 5종(브로슈어 이식) — install·car·heat 재사용, shield·podium 신규 */
    introSide: [
      { i: 'shield',  h: '월등한 성능과 내구성', p: '일반적인 알루미늄 코팅의 윈도우 필름보다 월등한 성능과 내구성' },
      { i: 'podium',  h: '고성능 제품',        p: '솔라가드 프리미엄 제품 중 엔트리 등급임에도 불구하고 일반 윈도우 필름의 중상 등급의 고성능 제품' },
      { i: 'heat',    h: '우수한 태양열 차단 성능', p: '우수한 태양에너지 차단 성능과 시인성을 제공하고 고전적인 외관 완성' },
      { i: 'install', h: '시공 작업 편의성',    p: '시공 작업 편의성 최대화 — Fast dry-out time · Heat shrinking 최적화' },
      { i: 'carTi',   h: '미려한 외관',        p: '모든 차량에 어울리는 미려한 외관' },
    ],
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
        { label: '필름 타입',  value: '티타늄 증착 (메탈 · 반사형)', pct: null },
        { label: '컬러',       value: '딥 블랙 (세계 유일 티타늄 증착)', pct: null },
        { label: '제조원',     value: 'USA 생고뱅',     pct: null },
      ]},
      { title: '보증', rows: [
        { label: '내구성 보증',    value: '5년', pct: null },
      ]},
    ],
  },
  gline: {
    name: 'G-LINE',
    tagline: '빛에 따라 색이 달라지는 라미네이티드 블루.',
    recommendLabel: '왜 G-LINE인가',
    recommend: '빛마다 다르게 피는 라미네이티드 블루, 튀지 않는 개성, 균형 잡힌 하이브리드 G-LINE.',
    flagship: false,
    /* 모달 VLT 비주얼 — 공식 비교컷(베네치아 골목, G-LINE 10/30 라벨 포함) */
    vltImage: 'gline-vlt-scene.jpg',
    /* 모달 히어로 무대(2026-08-03 확장) — LX와 동일 문법: 나노바나나 무로고 차+필름 그레인, stage 우선·vltImage=폴백 */
    stage: { img: 'gline-stage.jpg', alt: 'G-LINE — 강변 공원 길에 선 흰 세단', icons: [
      { i: 'heat', t: '열 차단' },
      { i: 'carG', t: '다층 컬러 구현' },
      { i: 'clarity', t: '광학적 선명도' },
      { i: 'orbit', t: '최첨단 기술력' },
    ]},
    /* 모달 제품 소개 본문(브로슈어 이식, 2026-07-27) */
    intro: [
      { h: '라미네이티드 블루 컬러의 종합적 균형이 잘 잡힌 메탈반사 하이브리드 필름',
        p: '개성있는 라미네이티드 블루 컬러로 광원과 광량, 시공된 유리 타입에 따라 발색되는 색감이 달라져 농축된 와인처럼 매력적인 외관을 완성합니다. 탁월한 시인성으로 편안한 운전환경을 제공하면서 우수한 열차단 성능까지 갖추고 있어 종합적으로 균형 잡힌 메탈 반사 하이브리드 필름입니다.' },
      { list: [
        '스퍼터링과 나노 카본 세라믹 기술의 융합',
        'Multi color coating 공법을 통한 아름다운 다층 컬러 구현',
        '우수한 열차단 성능으로 편안함 향상',
        '광학적 선명도로 탁월한 시인성',
        '좋은 시공성으로 작업 완성도 증대',
      ]},
    ],
    /* 모달 픽토그램 5종(브로슈어 이식) — orbit·heat·clarity·install 재사용, carG(라미네이티드 블루 스파클) 신규 */
    introSide: [
      { i: 'orbit',   h: '최첨단 기술력',    p: '스퍼터링 기술과 나노 카본 세라믹 기술의 융합' },
      { i: 'carG',    h: '다층 컬러 구현',   p: 'Multi color coating 공법을 통한 아름다운 다층 컬러 구현' },
      { i: 'heat',    h: '열 차단',         p: '우수한 열차단 성능으로 편안함 향상' },
      { i: 'clarity', h: '광학적 선명도',    p: '광학적 선명도로 탁월한 시인성' },
      { i: 'install', h: '시공 작업 편의성', p: '좋은 시공성으로 작업 완성도 증대' },
    ],
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
        { label: '제조원',     value: 'USA 생고뱅', pct: null },
      ]},
      { title: '보증', rows: [
        { label: '내구성 보증',    value: '5년', pct: null },
      ]},
    ],
  },
  sline: {
    name: 'S-LINE',
    tagline: '신호를 막지 않는 비반사 필름. 합리적인 가격의 편안한 시야.',
    recommendLabel: '왜 S-LINE인가',
    recommend: '비반사로 편안한 시야, 방해받지 않는 신호, 농도와 상관없이 쾌적한 S-LINE.',
    flagship: false,
    /* 모달 VLT 비주얼 — 공식 비교컷(산토리니, S-LINE 10/30 라벨 포함) */
    vltImage: 'sline-vlt-scene.jpg',
    /* 모달 히어로 무대(2026-08-03 확장) — LX와 동일 문법: 나노바나나 무로고 차+필름 그레인, stage 우선·vltImage=폴백 */
    stage: { img: 'sline-stage.jpg', alt: 'S-LINE — 가로수 그늘이 드리운 주택가에 선 세단', icons: [
      { i: 'eye', t: '맑은 시야' },
      { i: 'signal', t: '전파 방해 최소화' },
      { i: 'shield', t: '뛰어난 내구성' },
      { i: 'orbit', t: '나노 세라믹' },
    ]},
    /* 모달 제품 소개 본문(브로슈어 이식, 2026-07-27) — 브로슈어 오타 2건 교정: '선명한시야를'→'선명한 시야를', 'Non-matal'→'Non-metal' */
    intro: [
      { h: '우수한 성능과 합리적인 가격을 갖춘 비반사 필름',
        p: 'S-LINE은 포멀한 스타일과 뛰어난 열차단 성능을 겸비하여 VLT(농도) 상관없이 언제나 쾌적한 주행 환경을 만들어 줍니다. 전파 방해 없이 뛰어난 열차단 성능을 제공하면서도, 실내 가시광선 반사율이 낮고, 선명한 시야를 제공하는 기능성 필름을 찾고 계신 분들에게 적합한 품목입니다.' },
      { list: [
        '순도 높은 고품질의 세라믹 소재 적용',
        '낮은 반사율로 눈부심을 최소화',
        '전파 방해 걱정 없는 비금속(Non-metal) 구조',
        '스크래치 방지 하드코팅으로 내구성 향상',
        '미러효과가 없는 선명한 시인성',
      ]},
    ],
    /* 모달 픽토그램 5종(브로슈어 이식) — 전부 기존 아이콘 재사용(orbit·eye·reflect·signal·shield) */
    introSide: [
      { i: 'orbit',   h: '나노 세라믹 테크놀로지', p: '극한의 방열 기술을 제공하는 IR 필름' },
      { i: 'signal',  h: '전파 방해 최소화',      p: '세라믹 소재로 어떠한 전파 방해도 받지 않음' },
      { i: 'eye',     h: '맑은 시야 확보',        p: 'SUPER CLEAR PET(광학급)만을 사용해 어떠한 환경에서도 깨끗한 시인성 제공' },
      { i: 'shield',  h: '뛰어난 내구성',         p: '세라믹 천연광물과 고품질 원단의 견고한 결합으로 필름 내구성을 한층 높임' },
      { i: 'reflect', h: '낮은 내부 반사율',      p: '눈의 피로를 유발하고 운전 시야를 방해하는 불필요한 내부 반사를 줄여줌' },
    ],
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
        { label: '필름 타입',  value: '나노 세라믹 (열흡수 타입 · 비반사)', pct: null },
        { label: '전파 방해',  value: '없음',              pct: null },
        { label: '제조원',     value: 'USA 생고뱅', pct: null },
      ]},
      { title: '보증', rows: [
        { label: '내구성 보증',    value: '5년', pct: null },
      ]},
    ],
  },
  galaxie: {
    name: 'Galaxie',
    tagline: '가격, 시야, 열 차단의 균형. 부담 없이 시작하는 THE LX의 기본형.',
    recommendLabel: '왜 Galaxie인가',
    recommend: 'GPS와 하이패스를 방해하지 않는 전파 친화, 눈부심을 줄인 편안한 시야, 부담 없이 시작하는 균형의 Galaxie.',
    flagship: false,
    /* 모달 VLT 비주얼 — 공식 비교컷(뮌헨 마리엔광장, GALAXIE 12/35/50 라벨 포함) */
    vltImage: 'galaxie-vlt-scene.jpg',
    /* 모달 히어로 무대(2026-08-03 확장) — LX와 동일 문법: 나노바나나 무로고 차+필름 그레인, stage 우선·vltImage=폴백 */
    stage: { img: 'galaxie-stage.jpg', alt: 'Galaxie — 야외 주차장에 선 흰 해치백', icons: [
      { i: 'signal', t: '전파&신호 친화적' },
      { i: 'glasses', t: '눈부심 감소' },
      { i: 'layers', t: '광학적 투명도' },
      { i: 'hammer', t: '스크래치 방지' },
    ]},
    /* 모달 제품 소개 본문(브로슈어 이식, 2026-07-27) */
    intro: [
      { h: '세련된 색상과 준수한 성능의 합리적인 제안',
        p: '갤럭시는 프리미엄 라인의 가장 기본 필름으로 고객들이 큰 비용 부담 없이 고기능성 필름을 접할 수 있도록 하기 위해 가격 진입 장벽을 최소화 한 품목입니다.' },
      { list: [
        '전파&신호 친화적',
        '눈부심 방지 효과',
        '높은 시인성과 내구성',
      ]},
    ],
    /* 모달 픽토그램 4종(브로슈어 이식, 원본도 4종) — signal 재사용, glasses·layers·hammer 신규.
       ⚠️ 브로슈어 오타 교정: '스크레치'→'스크래치' (사이트 표기 통일) */
    introSide: [
      { i: 'signal',  h: '전파&신호 친화적',  p: 'GPS, 하이패스 등 전파와 신호에 친화적인 필름' },
      { i: 'glasses', h: '눈부심 감소효과',   p: '눈부심 방지 효과로 안전한 운전 환경 조성' },
      { i: 'layers',  h: '광학적 투명도',     p: '매우 높은 광학적 투명도' },
      { i: 'hammer',  h: '스크래치 방지 코팅', p: '특허받은 스크래치 방지 효과' },
    ],
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
        { label: '제조원',     value: 'USA 생고뱅', pct: null },
      ]},
      { title: '보증', rows: [
        { label: '내구성 보증',    value: '5년', pct: null },
      ]},
    ],
  },
  shield: {
    name: 'LX SHIELD',
    tagline: '긁히면 스스로 메우는 PPF. 자가복원 초고분자 도막.',
    recommendLabel: '왜 LX SHIELD인가',
    recommend: '긁혀도 스스로 메우는 자가복원, 8mil 보호막, 도장을 오래 지키는 LX SHIELD.',
    flagship: false,
    /* 모달 제품 소개 본문(브로슈어 이식, 2026-07-27) — VLT 비교컷 없음(PPF), 셀프 힐링 Before/After=imgs 블록 */
    intro: [
      { h: '상온 셀프 힐링 PPF',
        p: '솔라가드 PPF 연구개발팀은 자가복원성 초고분자 물질에 독자 기술을 접목하여, 가역적 공유결합을 통해 내구성이 뛰어난 LX SHIELD를 개발했습니다.' },
      { h: '상온에서 즉시 자가복원 가능한 셀프 힐링에 특화된 고성능 PPF 필름',
        /* 이미지 항목=경로 문자열 또는 {src, width, height, alt}. width/height=모달 로딩 중 밀림 방지, alt=이미지별 개별 지정(스크린리더 Before/After 구분) */
        imgs: [
          { src: 'shield-heal-before.jpg', width: 902, height: 653, alt: 'LX SHIELD 셀프 힐링 Before — 브러시 스크래치 직후의 표면' },
          { src: 'shield-heal-after.jpg',  width: 906, height: 653, alt: 'LX SHIELD 셀프 힐링 After — 상온 자가복원 후 흔적 없는 표면' },
        ] },
      { p: 'LX SHIELD는 일상 생활에서 접하는 스크래치 발생 시, 뜨거운 물을 붓거나 드라이기를 사용할 필요 없이 상온에서 즉시 자가 복원되는 혁신적인 PPF입니다. 이 성능은 언제든지 깔끔하게 차를 유지하며 관리하는 분들을 위해 일상의 다양한 환경에서 소중한 차량을 보호해 줍니다.' },
      { p: '스트레스 없이 차량을 보호하기 위해 셀프 힐링, 스톤칩 및 오염 방지, 일상 발수 기능까지 더해져 최적화된 LX SHIELD로 즐거운 드라이빙 생활을 즐기세요.' },
      { list: [
        '상온에서 즉시 셀프 힐링 (스크래치)',
        '오렌지필 최소화로 외관 선명도 향상',
        '뛰어난 내화학성',
        '스톤칩 방지 및 얼룩 저항성 탁월',
        '우수한 발수성능',
      ]},
      { h: '구조소개', img: { src: 'shield-structure.jpg', width: 915, height: 746, alt: 'LX SHIELD 필름 구조 — 탑코팅 · 폴리우레탄 · 접착제 · 도장면 4층 다이어그램' } },
    ],
    /* 모달 픽토그램 6종(브로슈어 이식, 2026-07-27 추가) — heal·chem·uv·chip·water 신규, carG 재사용 */
    introSide: [
      { i: 'heal',  h: '상온 셀프 힐링',    p: '상온에서의 반영구적 자가복원성능을 통한 손쉬운 유지 관리' },
      { i: 'carG',  h: '외관 선명도 향상',   p: '빛의 반사와 굴절을 정밀하게 조절하여 차량 본연의 색상 깊이의 입체감 강화' },
      { i: 'chem',  h: '뛰어난 내화학성',    p: '정교한 설계와 견고한 내구력으로 변질·변형없는 매끈한 표면 유지' },
      { i: 'uv',    h: '자외선 차단',       p: 'PA+++ SPF 285 성능으로 유해한 자외선(UV)을 효과적으로 차단, 도장면 변색을 방지' },
      { i: 'chip',  h: '탁월한 스톤칩 방지', p: '극한의 환경에서도 유지되는 내구성과 표면 보호 성능으로 다발성 자갈·파편으로부터 차량의 손상을 방어' },
      { i: 'water', h: '우수한 발수 성능',   p: '발수 기능으로 오염 물질과의 접촉을 줄여 도장면 수명을 연장' },
    ],
    perf: [
      { label: 'UV 차단', pct: 99 },
      { label: '광택도', pct: 92 },
      { label: '셀프힐링', pct: 100 },
    ],
    specs: [
      { title: '구조 · 물리적 특성', rows: [
        { label: '필름 구조',   value: '탑코팅 · 폴리우레탄 · 접착제 (도장면 위 시공)', pct: null },
        { label: '두께',       value: '8 mil (200 μm)',    pct: null },
        { label: '광택도',     value: '92 GU',            pct: 92   },
        { label: '셀프힐링',   value: '상온 1분 이내 · 흔적 없음 (Brass Brush 시험)', pct: 100 },
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

/* ─────────────────────────────────────────────────────────────
   모달 공용 렌더러 — index.html · pricing.html 공용 (2026-07-28 통합).
   이전엔 PD_ICONS 맵과 intro 렌더 템플릿이 두 HTML에 복붙되어 어긋남 반복
   (pricing pdRecommendLabel 누락 사례). 아이콘·렌더 수정은 이 파일 한 곳만.
   ───────────────────────────────────────────────────────────── */

/* 차체 실루엣 공용 패스 — car·carTi·carG·chip 4종의 공통 보디(스파클·장식만 다름) */
const PD_CAR_BODY = '<path d="M9 30 L10.5 24.5 Q11 22.5 13.5 22 L19 21.5 L23.5 17.5 L31 17.5 Q33 17.5 34 20 L35.5 23.5 Q38.5 24 38.5 26.5 L38.5 30 L9 30 Z"/><circle cx="16.5" cy="32.5" r="2.8"/><circle cx="31.5" cy="32.5" r="2.8"/>';

/* 픽토그램 선화 SVG — KEY POINT 문법: 원형 배지 없이 볼드 선화 44px + LX 블루 액센트(.ac/.acf) */
const PD_ICONS = {
  eye:      '<ellipse cx="24" cy="24" rx="16" ry="9.5"/><circle cx="24" cy="24" r="5"/><circle class="acf" cx="24" cy="24" r="1.8" stroke="none"/>',
  heat:     '<path d="M10 32 L38 32 L33 24 L15 24 Z"/><path d="M14 12 L21.5 24"/><path class="ac" d="M21.5 24 L34 13"/><path class="ac" d="M34 13 L28.8 13.8 M34 13 L33 18"/><path d="M27 32 L30.5 38" stroke-dasharray="2.5 3"/>',
  spectrum: '<path d="M12 34 L28 26 L36 28.5 L20 36.5 Z"/><path class="ac" d="M21 28 L21 11"/><path class="ac" d="M21 11 L18 15.5 M21 11 L24 15.5"/><path d="M29 22.5 L36.5 18.5" stroke-dasharray="2.5 3"/><path d="M30 28 L38 31" stroke-dasharray="2.5 3"/>',
  medal:    '<path class="ac" d="M18.5 8 L24 19 L29.5 8"/><circle cx="24" cy="28" r="8.5"/><circle cx="24" cy="28" r="3.5" stroke-dasharray="2 2.4"/>',
  safety:   '<path d="M9 27 L34 27 L29.5 19.5 L13.5 19.5 Z"/><circle class="ac" cx="30.5" cy="29.5" r="7"/><path d="M27.2 32.3 L33 26.5 M30 34 L35 29 M26.5 29.5 L31 25"/>',
  orbit:    '<ellipse cx="24" cy="24" rx="15" ry="7" transform="rotate(-28 24 24)"/><ellipse cx="24" cy="24" rx="15" ry="7" transform="rotate(28 24 24)"/><circle class="acf" cx="24" cy="24" r="3" stroke="none"/>',
  badge:    '<circle cx="24" cy="20.5" r="9.5"/><path class="ac" d="M24 15.5 L25.9 19.4 L30.2 20 L27.1 23 L27.8 27.2 L24 25.2 L20.2 27.2 L20.9 23 L17.8 20 L22.1 19.4 Z"/><path d="M20 30 L18 39 L24 35.2 L30 39 L28 30"/>',
  reflect:  '<path d="M24 10 L24 18 M24 30 L24 38 M10 24 L18 24 M30 24 L38 24"/><path d="M14.5 14.5 L20 20 M28 28 L33.5 33.5 M33.5 14.5 L28 20 M20 28 L14.5 33.5" stroke-dasharray="2.5 3"/><circle class="acf" cx="24" cy="24" r="2.6" stroke="none"/>',
  gold:     '<path d="M10 33 L38 33 L33 25 L15 25 Z"/><path d="M29.5 11 L30.8 14.6 L34.4 15.9 L30.8 17.2 L29.5 20.8 L28.2 17.2 L24.6 15.9 L28.2 14.6 Z" stroke="#4a7c59"/><path d="M17 14 L17 19 M14.5 16.5 L19.5 16.5" stroke="#b8963e"/>', /* 그린골드 아이콘만 제품색 투톤(그린+골드) — 블루 액센트 예외 */
  privacy:  '<ellipse cx="24" cy="24" rx="16" ry="9.5"/><circle cx="24" cy="24" r="5"/><path class="ac" d="M13 36 L35 12"/>',
  clarity:  '<path d="M26 10 L38 10 L38 22"/><path d="M31 10 L38 17" stroke-dasharray="2.5 3"/><circle class="ac" cx="20" cy="26" r="8"/><path d="M26 32 L33 39"/>',
  sputter:  '<path d="M13 17 A 13.5 13.5 0 0 1 35 17" stroke-dasharray="1 4.2"/><circle cx="18.5" cy="30" r="6.5"/><circle cx="29.5" cy="30" r="6.5"/><circle class="acf" cx="24" cy="25" r="4.6" stroke="none"/>',
  signal:   '<path d="M12 24 A 15.5 15.5 0 0 1 36 24"/><path class="ac" d="M17.5 29 A 8.6 8.6 0 0 1 30.5 29"/><circle class="acf" cx="24" cy="34" r="2.4" stroke="none"/>',
  car:      PD_CAR_BODY + '<path d="M38 9.5 L39 12.1 L41.6 13.1 L39 14.1 L38 16.7 L37 14.1 L34.4 13.1 L37 12.1 Z" fill="#0a0a0a" stroke="#0a0a0a"/>', /* 비크 블랙 표현 — 보디는 라인 유지, 스파클만 솔리드 블랙 (제품색 예외) */
  install:  '<path d="M10 33 L38 33 L33 25 L15 25 Z"/><path class="ac" d="M19 15.5 L23 19.5 L30.5 10.5"/>',
  gems:     '<path d="M13 15 L17 11 L21 15 L17 21 Z"/><path d="M28 12.5 L32 9.5 L36 12.5 L32 18 Z"/><path class="ac" d="M17.5 30 L24 24.5 L30.5 30 L24 39 Z"/><path class="ac" d="M17.5 30 L30.5 30"/>',
  warrant:  '<path d="M15 10 L33 10 L33 38 L15 38 Z"/><path d="M19 30.5 L26 30.5 M19 34 L23.5 34"/><circle class="ac" cx="24" cy="19.5" r="5.5"/><path class="ac" d="M21.5 19.5 L23.5 21.5 L26.8 17.3"/>',
  sun:      '<circle cx="34" cy="11" r="4"/><path d="M34 3.5 L34 5.5 M41.5 11 L39.5 11 M39.3 5.7 L37.9 7.1 M28.7 5.7 L30.1 7.1 M26.5 11 L28.5 11"/><path d="M30.5 15.5 L20 32.5" stroke-dasharray="2.5 3"/><path class="ac" d="M20 33 L30 23"/><path class="ac" d="M30 23 L25.7 23.7 M30 23 L29.3 27.3"/><path d="M10 33 L38 33"/><path d="M13 38 L35 38" stroke-dasharray="2.5 3"/>',
  shield:   '<path d="M24 9.5 L35.5 13.5 L35.5 23 Q35.5 32 24 38 Q12.5 32 12.5 23 L12.5 13.5 Z"/><path class="ac" d="M20 20 L28 28 M28 20 L20 28"/><path class="ac" d="M28 28 L28 25.4 M28 28 L25.4 28 M20 20 L20 22.6 M20 20 L22.6 20 M28 20 L25.4 20 M28 20 L28 22.6 M20 28 L22.6 28 M20 28 L20 25.4"/>',
  podium:   '<path class="ac" d="M24 8 L25.6 11.6 L29.5 12 L26.6 14.6 L27.5 18.4 L24 16.4 L20.5 18.4 L21.4 14.6 L18.5 12 L22.4 11.6 Z"/><path d="M18 27 L30 27 L30 38 L18 38 Z"/><path d="M18 38 L10 38 L10 31 L18 31"/><path d="M30 38 L38 38 L38 33 L30 33"/>',
  carTi:    PD_CAR_BODY + '<path d="M38 9.5 L39 12.1 L41.6 13.1 L39 14.1 L38 16.7 L37 14.1 L34.4 13.1 L37 12.1 Z" fill="#9aa0a6" stroke="#9aa0a6"/><path d="M31.5 8 L31.5 12 M29.5 10 L33.5 10" stroke="#9aa0a6"/>', /* 티타늄 실버 스파클 — Xenith 비크블랙(car)과 구분 */
  carG:     PD_CAR_BODY + '<path class="acf" d="M38 9.5 L39 12.1 L41.6 13.1 L39 14.1 L38 16.7 L37 14.1 L34.4 13.1 L37 12.1 Z" stroke="none"/>', /* G-LINE 라미네이티드 블루 스파클 */
  glasses:  '<path d="M10 24 Q10 21 13 21 L19 21 Q22 21 22 24 L22 27 Q22 30 19 30 L13 30 Q10 30 10 27 Z"/><path d="M26 24 Q26 21 29 21 L35 21 Q38 21 38 24 L38 27 Q38 30 35 30 L29 30 Q26 30 26 27 Z"/><path d="M22 23.5 Q24 22 26 23.5"/><path class="ac" d="M18 15 L19.5 11.5 M24 14.5 L24 11 M30 15 L28.5 11.5"/>',
  layers:   '<path d="M10 19 L24 12 L38 19 L24 26 Z"/><path class="ac" d="M10 28 L24 21 L38 28 L24 35 Z"/>',
  hammer:   '<path d="M11 36 L35 36 L30.5 29 L15.5 29 Z"/><path class="ac" d="M34.1 16.8 L29.8 21.1 L19.9 11.2 L24.2 6.9 Z"/><path class="ac" d="M15 26 L24.8 16.2"/><path d="M30 4.5 L31.5 2.5 M34.5 8.5 L37 7.5 M36.5 12.5 L39 13"/>',
  heal:     '<path d="M21 9.5 L32 13.5 L32 23 Q32 32 21 38 Q10 32 10 23 L10 13.5 Z"/><path class="ac" d="M36 29.5 L36 37.5 M32 33.5 L40 33.5"/>',
  chem:     '<path d="M19.5 9 L27.5 9 M21.5 9 L21.5 16 L14 30 Q12.5 33.5 16 33.5 L26.5 33.5"/><path d="M16.5 26.5 L22 26.5 M15.5 30 L20.5 30"/><path class="ac" d="M32.5 24.5 L38.5 26.3 L38.5 30.5 Q38.5 34.8 32.5 37.8 Q26.5 34.8 26.5 30.5 L26.5 26.3 Z"/>',
  uv:       '<path d="M19 10 L21.2 16.8 L28 19 L21.2 21.2 L19 28 L16.8 21.2 L10 19 L16.8 16.8 Z"/><path class="ac" d="M31.5 19 L33 23 L37 24.5 L33 26 L31.5 30 L30 26 L26 24.5 L30 23 Z"/><circle class="acf" cx="25" cy="34.5" r="1.9" stroke="none"/>',
  chip:     PD_CAR_BODY + '<path class="ac" d="M10.5 7.5 L15 12 M16.5 6 L19 10.5 M22 6.5 L22.8 10.5" stroke-dasharray="2.5 2.5"/>',
  water:    '<path d="M18 11 Q23.5 18.5 23.5 22.8 A 5.6 5.6 0 0 1 12.4 22.8 Q12.4 18.5 18 11 Z"/><path d="M28.5 14 Q32 18.8 32 21.3 A 3.5 3.5 0 0 1 25 21.3 Q25 18.8 28.5 14 Z" stroke-dasharray="2 2.6"/><path class="ac" d="M21 33.5 L31 24.5 M31 24.5 L26.8 25.1 M31 24.5 L30.4 28.7"/><path d="M10 36.5 L38 36.5"/>',
};

/* 픽토그램 특장점(introSide) 렌더 */
function pdRenderIntroSide(p) {
  return (p.introSide || []).map(it =>
    `<div class="pd-is-row">
      <span class="pd-is-icon"><svg viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${PD_ICONS[it.i] || ''}</svg></span>
      <span class="pd-is-txt"><span class="pd-is-h">${it.h}</span><span class="pd-is-p">${it.p}</span></span>
    </div>`).join('');
}

/* intro 본문 렌더 — h 없는 블록=이어지는 문단(pd-intro-cont).
   이미지 블록: img(1장)·imgs(여러 장=비교 그리드 pd-intro-img2), 항목=경로 문자열 또는 {src, width, height, alt}.
   width/height 지정 시 로딩 중 모달 내 레이아웃 밀림 방지(VLT 이미지와 동일하게 eager+async). */
function pdRenderIntro(p) {
  return (p.intro || []).map(b => {
    if (b.list) return `<ul class="pd-intro-list">${b.list.map(li => `<li>${li}</li>`).join('')}</ul>`;
    const imgs = b.imgs || (b.img ? [b.img] : null);
    if (imgs) {
      const tags = imgs.map(im => {
        const o = typeof im === 'string' ? { src: im } : im;
        const size = o.width ? ` width="${o.width}" height="${o.height}"` : '';
        return `<img${imgs.length === 1 ? ' class="pd-intro-img"' : ''} src="${o.src}" alt="${o.alt || b.alt || ''}"${size} loading="eager" decoding="async">`;
      }).join('');
      return `<div class="pd-intro-block">${b.h ? `<h3 class="pd-intro-h">${b.h}</h3>` : ''}${imgs.length > 1 ? `<span class="pd-intro-img2">${tags}</span>` : tags}</div>`;
    }
    return `<div class="pd-intro-block${b.h ? '' : ' pd-intro-cont'}">${b.h ? `<h3 class="pd-intro-h">${b.h}</h3>` : ''}<p class="pd-intro-p">${b.p}</p></div>`;
  }).join('');
}

/* ─────────────────────────────────────────────────────────────
   스펙 렌더 공용 (2026-07-30 총판 피드백 — 구 홈페이지 격자 표 문법 복원).
   pdRenderSpecs: 농도별/모델별 섹션 → 격자 표(농도|VLT|TSER + UV·보증 병합 열),
   잔여 특성 rows → 기존 리스트 문법(pdRenderSpecList).
   농도별 섹션이 없는 제품(SHIELD)은 전부 리스트로 폴백.
   index·pricing 양쪽 #pdSpecs가 이 함수 하나를 호출 — 표 수정은 여기 한 곳만.
   ───────────────────────────────────────────────────────────── */

/* 홈 #products 비교표 '방식' 열 — 각 제품 스펙 '필름 타입' row의 축약 (양쪽 동기). */
const PD_FILM_TYPE = {
  lx: '풀 메탈 스퍼터 (반사형) · 5-Layer', vogue: '풀 메탈 스퍼터 (반사형)', xenith: '세라믹 IR (열흡수)',
  quantum: '풀 메탈 스퍼터 (반사형)', titanium: '티타늄 증착 (메탈 · 반사형)', gline: '메탈반사 하이브리드',
  sline: '나노 세라믹 (비반사)', galaxie: '기본형',
};

/* 농도별/모델별 스펙 rows 파싱 — 라벨 '농도 15 — VLT 12%' / 'Quantum Black — VLT 8%' 공통 */
function pdParseDens(p) {
  const sec = (p.specs || []).find(s => /^(농도별|모델별)/.test(s.title));
  if (!sec) return null;
  const rows = sec.rows.map(r => {
    const m = r.label.match(/^(.+?)\s*—\s*VLT\s*(\d+)%/);
    const t = (String(r.value).match(/TSER\s*(\d+)%/) || [])[1];
    return m && t ? { name: m[1].replace(/\s+/g, ' ').trim(), vlt: +m[2], tser: +t } : null;
  }).filter(Boolean);
  return rows.length ? { title: sec.title, model: sec.title.indexOf('모델별') === 0, rows, sec } : null;
}

/* 리스트형 스펙 섹션 렌더 — 격자 표 이전의 기존 문법(막대 포함), 특성·SHIELD용으로 유지.
   막대(pct) 있는 row가 하나도 없는 섹션은 td-bar 열 자체를 생략 — 빈 30% 여백 방지 */
function pdRenderSpecList(secs) {
  return secs.map(sec => {
    const hasBar = sec.rows.some(r => r.pct !== null);
    return `<div class="pd-spec-section">
      <p class="pd-spec-title">${sec.title}</p>
      <table class="pd-table">
        ${sec.rows.map(row => `
          <tr>
            <td class="td-label">${row.label}</td>
            <td class="td-value">${row.value}</td>
            ${hasBar ? `<td class="td-bar">${row.pct !== null
              ? `<div class="pd-bar-track"><div class="pd-bar-fill" data-w="${row.pct}"></div></div>`
              : ''}</td>` : ''}
          </tr>`).join('')}
      </table>
    </div>`;
  }).join('');
}

function pdRenderSpecs(p) {
  const secs = p.specs || [];
  const dens = pdParseDens(p);
  if (!dens) return pdRenderSpecList(secs);
  const uvSec = secs.find(s => s.title.indexOf('UV') === 0);
  const waSec = secs.find(s => s.title === '보증');
  const uvRows = uvSec ? uvSec.rows : [];
  const uvPct   = (uvRows.find(r => r.label === 'UV 차단율') || {}).value || '';
  const uvGrade = (uvRows.find(r => r.label === 'UV 등급')   || {}).value || '';
  const waRows = waSec ? waSec.rows : [];
  const waVals = [...new Set(waRows.map(r => r.value))];
  const waCell = waVals.length <= 1
    ? `<strong>${waVals[0] || '—'}</strong>`
    : waRows.map(r => `<span>${r.label.replace(' 보증', '')} <strong>${r.value}</strong></span>`).join('');
  const n = dens.rows.length;
  const body = dens.rows.map((r, i) => `
    <tr>
      <td class="g-dens">${dens.model ? r.name : r.name.replace(/^농도\s*/, '')}</td>
      <td>${r.vlt}%</td>
      <td class="g-tser">${r.tser}%</td>
      ${i === 0 ? `<td class="g-merge" rowspan="${n}">${uvPct
        ? `<strong>${uvPct}</strong>${uvGrade ? `<small>${uvGrade}</small>` : ''}`
        : (uvGrade ? `<strong>${uvGrade}</strong>` : '—')}</td>
      <td class="g-merge" rowspan="${n}">${waCell}</td>` : ''}
    </tr>`).join('');
  const grid = `<div class="pd-spec-section">
    <p class="pd-spec-title">${dens.title}</p>
    <div class="pd-grid-wrap"><table class="pd-grid">
      <thead><tr>
        <th>${dens.model ? '모델' : '농도'}</th>
        <th>VLT<small>가시광선 투과율</small></th>
        <th>TSER<small>총태양에너지 차단율</small></th>
        <th>UV<small>자외선 차단</small></th>
        <th>보증<small>Warranty</small></th>
      </tr></thead>
      <tbody>${body}</tbody>
    </table></div>
  </div>`;
  const rest = [];
  const restUv = uvRows.filter(r => r.label !== 'UV 차단율' && r.label !== 'UV 등급');
  if (restUv.length) rest.push({ title: '특성', rows: restUv });
  secs.forEach(s => { if (s !== dens.sec && s !== uvSec && s !== waSec) rest.push(s); });
  return grid + pdRenderSpecList(rest);
}
