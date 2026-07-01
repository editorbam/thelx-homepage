/* THE LX 제품 모달 데이터 — index.html · pricing.html 공용 단일 소스.
   카피·스펙 수정은 이 파일 한 곳만. (이전엔 두 파일에 복붙되어 어긋남 반복) */
const PD_DATA = {
  lx: {
    name: 'LX',
    tagline: '유리처럼 맑은 시야. 빛은 통과시키고 열만 반사합니다. 색을 입힌 필름과 달리 금속막이라 햇빛에 변색되지 않습니다.',
    recommend: '몇 년 뒤 보라색으로 바랜 필름을 본 적 있는 분. 차를 오래 타고, 매일 땡볕에 세우는 분.',
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
        { label: '세계특허',   value: 'WO0961339A1 / 미국특허 551304', pct: null },
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
    tagline: '반사가 곧 외관, 반사가 곧 시원함. 빛을 되쏘아 가장 강하게 막고, 밖에선 거울이 됩니다.',
    recommend: '남들과 같은 검정이 싫은 분. 밖에선 안 보이고, 안에선 트인 시야를 원하는 분.',
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
    tagline: '열은 막고, 신호는 통과시킨다. 금속 없이 열을 막아, 신호를 건드리지 않습니다.',
    recommend: '내비·하이패스·스마트키가 먹통이 된 적 있는 분. 전기차·커넥티드카일수록 차이가 큽니다.',
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
    recommend: '밖에선 색이 살고, 운전석에선 비치지 않길 바라는 분. 어떤 차에도 무난히 어울리는 색을 찾는 분.',
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
    recommend: '합리적인 가격으로 깊은 검정을 원하는 분. 시공이 깔끔하게 끝나길 바라는 분.',
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
    recommend: '빛마다 다르게 피는 색을 원하는 분. 튀지 않으면서 개성을 더하고 싶은 분.',
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
    recommend: 'VLT에 상관없이 쾌적한 주행 환경을 원하는 분. 전파 방해 없는 선명한 시야를 원하는 분.',
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
  shield: {
    name: 'LX SHIELD',
    tagline: '긁히면 스스로 메우는 PPF. 자가복원 초고분자 도막.',
    recommend: '차량 외부 도장을 장기 보호하고 싶은 분. 스크래치 자가 복원 기능을 원하는 분.',
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
