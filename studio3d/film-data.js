// 출처: THE LX 홈페이지 공식 제품 데이터 isolargard.com/pd-data.js?v=37 (2026-11-20 확인)
// 수치는 3mm 투명 유리 기준 공식 스펙. 테슬라 유리에 붙였을 때의 실측값이 아님.
// color·metalness 등 화면 색감은 임의로 잡은 표현값(측정값 아님).
const v = rows => rows.map(([id, label, vlt, tser]) => ({ id, label, vlt, tser }));
export const FILMS = {
  lx:      { name: 'LX',        type: '풀메탈 스퍼터', color: '#12171a', spec: '#dfe6ea', metalness: .2, roughness: .12, env: .9,
             variants: v([['15','15',12,71],['25','25',23,67],['40','40',42,63],['55','55',59,57],['70','70',72,55]]) },
  xenith:  { name: 'Xenith IR', type: '나노 세라믹', color: '#090b0f', spec: '#ffffff', metalness: 0,   roughness: .2,  env: .3,
             variants: v([['5','5',8,68],['15','15',16,66],['30','30',31,61],['50','50',56,51]]) },
};
// 화면에서 뺀 필름(2026-11-25 사용자 결정: 홈페이지 테슬라 페이지처럼 LX·Xenith IR만 보여 준다). 다시 넣으려면 FILMS 안으로 옮긴다
export const FILMS_OFF = {
  // Vogue만 실차 사진(2026-11-25 사용자 제공 '이 표현이 정확해': 검정 SUV 옆 유리가 하늘을 옅은 민트빛으로 되비춤 + 흰 SUV 옆 유리가 짙은 청록 거울)에 눈대중으로 맞춤. mirror=밖에서 안이 안 비치는 정도(0~1)
  vogue:   { name: 'Vogue',     type: '메탈 스퍼터', color: '#93c7a9', spec: '#e8f6ee', metalness: 1, roughness: .13, env: 1, mirror: .99,
             variants: v([['10','10',10,80],['20','20',21,71],['30','30',31,61],['40','40',43,52]]) },
  quantum: { name: 'Quantum',   type: '메탈 스퍼터', color: '#0f1a16', spec: '#a9d2bd', metalness: .22, roughness: .15, env: .9,
             variants: v([['black','Black',8,72],['plus8','Plus 8',9,72],['14','14',13,61],['19','19',19,57],['28','28',32,50],['37','37',37,48]]) },
};
export const DEFAULTS = { windshield: ['xenith','30'], front: ['xenith','15'], rear: ['xenith','15'], back: ['xenith','15'], roof: ['xenith','15'] };
