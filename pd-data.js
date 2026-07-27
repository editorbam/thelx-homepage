/* THE LX 제품 모달 데이터 — index.html · pricing.html 공용 단일 소스.
   카피·스펙 수정은 이 파일 한 곳만. (이전엔 두 파일에 복붙되어 어긋남 반복)
   ⚠️ 예외: recommend.html의 농도별 스펙표와 index.html VLT 밴드 라벨은 정적 HTML 사본 —
   LX 농도별 VLT/TSER 수정 시 그 두 곳도 함께 고칠 것.
   ⚠️ 예외: 특허 번호(WO2004042435 · US7709095)도 정적 사본 5곳 존재 —
   index.html 마퀴 2곳·제품카드(product-patent), technology.html 메타 description·tech-proof 칩.
   특허 표기 수정 시 이 파일과 그 5곳을 항상 함께 고칠 것.
   ⚠️ 예외: UV 스펙 문구(99%+ · PA+++ · SPF 285)는 recommend.html 그래프 캡션 c1·스펙표에도 정적 사본 —
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
    /* 모달 제품 소개 본문(브로슈어 이식, 2026-07-24) — 있으면 tagline·recommend 박스 대신 렌더.
       ⚠️ 특허번호는 브로슈어의 사망 번호(W0961339A1·551304)가 아니라 7/14 확정 실재 번호로 교체함 */
    intro: [
      { h: '최고급 명성을 지닌 혁신적 기술의 결정체',
        p: '프리미엄의 최상급 제품이자 생고뱅 솔라가드의 최첨단 기술력이 담겨 있는 LX는 업계 최고의 시인성과 태양 에너지 컨트롤 성능을 발휘하는 더 엘엑스 윈도우 필름의 정수입니다.' },
      { h: '세계 특허(WO2004042435)와 미국 특허(US7709095)',
        p: 'LX는 최첨단 진공 마그네트론 스퍼터링 공법으로 적층된 다층의 금속 막이 유해한 특정 솔라 스펙트럼을 선별적으로 차단하는 지능형 필름으로, 세계 특허(WO2004042435)와 미국 특허(US7709095)까지 획득하였습니다.' },
      { list: [
        '최고의 광학적 투명도',
        '빛 투과율 대비 높은 열 차단 성능 (VLT 72% : TSER 55%)',
        '창유리 보강 및 안전 기능 강화',
        '겨울철 창유리의 단열 성능 개선',
        '에너지 효율 증진 및 탄소 배출 저감 능력을 인정받은 업계 유일의 친환경 차량용 윈도우 필름',
      ]},
    ],
    /* 모달 우측 픽토그램 7종(브로슈어 이식) — i=렌더러 PD_ICONS 키(선화 SVG, index·pricing 사본) */
    introSide: [
      { i: 'eye',      h: '가시성',            p: '최고의 광학적 투명도와 가시성' },
      { i: 'heat',     h: '열차단',            p: '가시광선 투과율(VLT) 대비 업계 최고의 열 차단 성능(TSER)' },
      { i: 'spectrum', h: '스펙트럼 차단',      p: '금속 산화물을 이용한 100% 스퍼터링 기술로 특정 솔라 스펙트럼을 선택적으로 차단 (Spectrally Selective)' },
      { i: 'medal',    h: '기술상 연속 2회 수상', p: 'AIMCAL Technology of the Year 올해의 기술상 연속 2회 수상' },
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
    /* 모달 VLT 비주얼 — vltImage가 있으면 하늘 밴드 시뮬레이션 대신 이 이미지(라벨 포함 공식 비교컷)를 사용.
       vltTint는 이미지 제거 시 폴백용 보관. ⚠️ 틴트 교훈: 노랑 비중 크면 하늘 파랑과 섞여 카키로 탁해짐(1차 46,64,26/104,88,30 폐기) */
    vltImage: 'vogue-vlt-scene.jpg',
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
    /* 모달 VLT 비주얼 — 공식 비교컷(팔마 대성당, XENITH IR 15/30 라벨 포함) */
    vltImage: 'xenith-vlt-scene.jpg',
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
    /* 모달 VLT 비주얼 — 공식 비교컷(토론토, QUANTUM BLACK 8~37 라벨 포함) */
    vltImage: 'quantum-vlt-scene.jpg',
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
    /* 모달 VLT 비주얼 — 공식 비교컷(하바나 거리, TITANIUM 6/16/26 라벨 포함) */
    vltImage: 'titanium-vlt-scene.jpg',
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
    /* 모달 VLT 비주얼 — 공식 비교컷(베네치아 골목, G-LINE 10/30 라벨 포함) */
    vltImage: 'gline-vlt-scene.jpg',
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
    /* 모달 VLT 비주얼 — 공식 비교컷(산토리니, S-LINE 10/30 라벨 포함) */
    vltImage: 'sline-vlt-scene.jpg',
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
    /* 모달 VLT 비주얼 — 공식 비교컷(뮌헨 마리엔광장, GALAXIE 12/35/50 라벨 포함) */
    vltImage: 'galaxie-vlt-scene.jpg',
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
    /* 모달 제품 소개 본문(브로슈어 이식, 2026-07-27) — 픽토그램은 사용자 결정으로 제외, VLT 비교컷 없음(PPF) */
    intro: [
      { h: '상온 셀프 힐링 PPF',
        p: '솔라가드 PPF 연구개발팀은 자가복원성 초고분자 물질에 독자 기술을 접목하여, 가역적 공유결합을 통해 내구성이 뛰어난 LX SHIELD를 개발했습니다.' },
      { p: 'LX SHIELD는 일상 생활에서 접하는 스크래치 발생 시, 뜨거운 물을 붓거나 드라이기를 사용할 필요 없이 상온에서 즉시 자가 복원되는 혁신적인 PPF입니다. 이 성능은 언제든지 깔끔하게 차를 유지하며 관리하는 분들을 위해 일상의 다양한 환경에서 소중한 차량을 보호해 줍니다.' },
      { p: '스트레스 없이 차량을 보호하기 위해 강력한 셀프 힐링, 스톤칩 및 오염 방지, 일상 발수 기능까지 더해져 최적화된 LX SHIELD로 즐거운 드라이빙 생활을 즐기세요.' },
      { list: [
        '상온에서 즉시 셀프 힐링 (스크래치)',
        '오렌지필 최소화로 외관 선명도 향상',
        '뛰어난 내화학성',
        '스톤칩 방지 및 얼룩 저항성 탁월',
        '우수한 발수성능',
      ]},
      { h: '구조소개', img: 'shield-structure.jpg', alt: 'LX SHIELD 필름 구조 — 탑코팅 · 폴리우레탄 · 접착제 · 도장면 4층 다이어그램' },
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
