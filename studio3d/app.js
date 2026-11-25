import * as THREE from './vendor/three.module.js'; // 'three' 별칭(importmap) 대신 파일 주소로: 옛 Safari(16.4 미만)는 별칭을 몰라 통째로 안 열린다
import { OrbitControls } from './vendor/OrbitControls.js';
import { GLTFLoader } from './vendor/GLTFLoader.js';
import { DRACOLoader } from './vendor/DRACOLoader.js';
import { RoomEnvironment } from './vendor/RoomEnvironment.js';
import { FILMS, DEFAULTS } from './film-data.js?v=1125j';

// 화면 부품 id는 전부 lx3d- 로 시작한다(홈페이지 안에 끼워 넣어도 그 페이지의 id와 겹치지 않게)
const $ = id => document.getElementById('lx3d-' + id);
const here = path => new URL(path, import.meta.url).href; // 이 파일 옆의 파일 주소(끼워 넣은 페이지가 어느 폴더에 있든 맞게)
const ZONES = { windshield: '전면 유리', front: '1열 좌우', rear: '2열 좌우', back: '후면 유리', roof: '글라스 루프' };
// 화면에서 고르는 단위는 세 묶음(2026-11-25 시안 A 확정): 전면·측후면·루프 — 홈페이지 테슬라 페이지가 쓰는 말 그대로. 유리 부품은 다섯이지만 1열·2열·후면은 '측후면' 한 줄로 같이 바뀐다
const GROUPS = [
  { key: 'windshield', label: '전면', name: '전면 유리', zones: ['windshield'] },
  { key: 'side', label: '측후면', name: '측후면 유리', zones: ['front', 'rear', 'back'] },
  { key: 'roof', label: '루프', name: '글라스 루프', zones: ['roof'] },
];
const groupOf = zone => GROUPS.find(g => g.zones.includes(zone));
// 홈페이지 테슬라 페이지(tesla.html '테슬라 오너가 사랑하는 조합')의 조합 두 가지. 필름 구성과 문구는 그 페이지 그대로. 농도는 그 페이지에 없어 임의로 넣은 값(전면 30 안팎·나머지 15)
const COMBOS = [ // 2026-11-25 사용자: 조합은 'LX + 루프 제니스' 하나만, 패널 아래쪽에. 문구는 테슬라 페이지 조합 1의 것 그대로
  { name: '전면 LX · 측후면 LX · 루프 제니스IR', text: '전면과 측후면으로 들어오는 복사열을 반사하고, 루프는 세라믹으로.', zones: { windshield: ['lx', '25'], front: ['lx', '15'], rear: ['lx', '15'], back: ['lx', '15'], roof: ['xenith', '15'] } },
];
const PAINTS_DEFAULT = [
  ['펄 화이트 멀티코트', '#e9eaee'], ['스텔스 그레이', '#44474c'], ['퀵실버', '#a9adb1'],
  ['딥 블루 메탈릭', '#17305c'], ['울트라 레드', '#a3121f'], ['블랙', '#0b0c0e'],
];
const VIEWS = { '전측면': [5.5, 1.9, 4.8], '측면': [0, 1.2, 8], '후측면': [-5.5, 2, 4.8], '위': [0, 11.5, 0.02], '정면': [8, 1.3, 0] };
// 차종. length=전장(m), rotate=파일 속 차 방향을 화면 기준(앞이 +x)으로 돌리는 값, paint=차체 도장 재질 이름
const CARS = {
  m3: { title: 'Model 3 Highland', year: 'Tesla Model 3', short: 'Model 3', file: 'model3-film-zones.draco.glb', length: 4.72, rotate: 0, paint: n => n === 'Geohoodsub00021Mtl',
        // 색 구성·순서는 테슬라 주문 화면 캡처(2026-11-25 사용자 제공, Model 3 RWD) 기준 3색. 스텔스 그레이는 그 캡처의 차(짙은 숯색)에 눈대중으로 맞춰 Model Y 값보다 어둡게, 나머지는 Model Y와 같은 표현값
        // 트렁크 오른쪽 아래 DUAL MOTOR 배지: 검정 장식 부품에 합쳐져 있어 통째로 숨길 수 없다 → 이 상자(화면 좌표, m) 안에 든 면만 지운다
        // 번호판 부품이 없는 파일이라 앞뒤에 THE LX 판을 새로 붙인다(Model Y와 같은 크기 442×142mm). [향하는 쪽, x, y, 뒤로 기운 각도]. 자리는 범퍼·트렁크 표면에 광선을 쏴서 잰 값(2026-11-25)
        plateAt: [[1, 2.362, .44, 0], [-1, -2.268, .722, .274]],
        noOffset: true, // 도장을 앞으로 당겨 그리는 보정을 끈다: 켜 두면 뒷문 손잡이 테두리와 뒤 기둥 위쪽에 깨진 선이 생긴다(2026-11-25 확인)
        erase: { meshes: ['Object_13', 'Object_14'], min: [-2.32, .49, .11], max: [-2.08, .70, .53] },
        paints: [['스텔스 그레이', '#25262b'], ['펄 화이트 멀티 코트', '#e9eaee'], ['다이아몬드 블랙', '#0b0c0e']], paintDefault: 1,
        credit: '<a href="https://sketchfab.com/3d-models/2024-tesla-model-3-fd22be415215453693d67e33aa7812d0">2024 Tesla Model 3</a> by RBLXSupercars' },
  my: { title: 'Model Y Juniper', year: 'Tesla Model Y', short: 'Model Y', file: 'modely-juniper-film.draco.glb', length: 4.79, rotate: -Math.PI / 2, paint: (n, o) => n.startsWith('WrapPaint') || o.name.startsWith('Y25_133_'),
        // 색 구성·순서는 테슬라 주문 화면 캡처(2026-11-23 사용자 제공) 기준. 헥스 값은 눈대중 표현값
        paints: [['스텔스 그레이', '#44474c'], ['펄 화이트 멀티 코트', '#e9eaee'], ['다이아몬드 블랙', '#0b0c0e'], ['글래시어 블루', '#445670'], ['울트라 레드', '#a3121f'], ['퀵실버', '#a9adb1']], paintDefault: 1,
        // 원본 파일이 중국 사양이라 손본 곳: 트렁크 왼쪽 아래 한자 배지 숨김, 흰색 고정이던 뒤 가로 패널을 차체 색으로(붉은 램프 빛은 사용자 요청으로 뺌), TESLA 글자를 크롬으로
        fix: o => {
          if (o.name.startsWith('Y25_123_') || o.name.startsWith('Y25_201_')) { o.visible = false; return true; } // 한자 배지, 앞 T 로고
          if (o.name.startsWith('Y25_168_')) { o.material = o.material.clone(); o.material.color.set('#f4f5f6'); plates.push([o, 1]); return true; } // 앞 번호판: 아래 addPlate가 THE LX 판을 덧댄다
          if (o.name.startsWith('Y25_169_')) { o.material = o.material.clone(); o.material.color.set('#f4f5f6'); plates.push([o, -1]); return true; } // 뒤 번호판
          if (o.name.startsWith('Y25_152_')) { o.material = o.material.clone(); o.material.color.set('#8a0f14'); return true; } // 범퍼 아래 반사판: 흰색 → 붉은 반사판
          if (o.name.startsWith('Y25_127_')) { o.material = o.material.clone(); o.material.color.set('#8d9196'); o.material.metalness = 1; o.material.roughness = .25; return true; }
        },
        credit: '<a href="https://sketchfab.com/3d-models/tesla-model-y-2025-a66f7673a09d4fcb84d37111433f05a9">Tesla Model Y 2025</a> by joyemeng (브라우저용 수정본 AIWrapLab)' },
};
// 처음 띄울 차: 주소의 ?car= → 페이지가 정해 둔 값(data-car) → Model 3
const ROOT = $('root');
let carKey = [new URLSearchParams(location.search).get('car'), ROOT?.dataset.car, 'm3'].find(k => CARS[k]);
let CAR = CARS[carKey], PAINTS = CAR.paints ?? PAINTS_DEFAULT;
let carRoot = null, loadSeq = 0, draco = null; const extras = []; // extras=차에 덧댄 것(번호판)
const ROOF_FACTORY = .25; // 글라스 루프는 출고 때부터 짙은 유리라 그만큼 더 어둡게 그린다(표현용 값, 측정값 아님)
const BARE_VLT = 78; // 필름 없는 유리의 표현용 값(측정값 아님)

// zones: 처음엔 전부 필름 없는 유리. null = 필름 없음
const state = { zones: Object.fromEntries(Object.keys(ZONES).map(z => [z, null])), zf: Object.fromEntries(Object.keys(ZONES).map(z => [z, 'xenith'])), selected: 'windshield', paint: CAR.paintDefault ?? 0, compare: false };
const glass = {}; // zone -> material
const plates = []; // [번호판 부품, 향하는 쪽(앞 1, 뒤 -1)]
// 번호판 자리에 흰 판 + THE LX 로고를 덧댄다
// spot=번호판 부품(그 자리에 덧댐) 또는 [x, y, 뒤로 기운 각도(rad)](번호판 부품이 없는 차: 그 자리에 새로 붙임)
async function addPlate(spot, dir) {
  const seq = loadSeq; const img = new Image(); img.src = here('./assets/thelx-logo-large.png'); await img.decode(); if (seq !== loadSeq) return;
  const made = Array.isArray(spot), box = made ? null : new THREE.Box3().setFromObject(spot);
  const size = made ? new THREE.Vector3(0, .142, .442) : box.getSize(new THREE.Vector3()), mid = made ? new THREE.Vector3(spot[0], spot[1], 0) : box.getCenter(new THREE.Vector3());
  const c = document.createElement('canvas'); c.width = 1100; c.height = Math.round(1100 * size.y / size.z); const g = c.getContext('2d');
  // 로고 파일이 흰색이라 검정으로 바꿔 그린다
  const ink = document.createElement('canvas'); ink.width = img.width; ink.height = img.height; const k = ink.getContext('2d');
  k.drawImage(img, 0, 0); k.globalCompositeOperation = 'source-in'; k.fillStyle = '#0a0a0a'; k.fillRect(0, 0, ink.width, ink.height);
  g.fillStyle = '#f4f5f6'; g.fillRect(0, 0, c.width, c.height);
  g.strokeStyle = '#0a0a0a'; g.lineWidth = 6; g.strokeRect(14, 14, c.width - 28, c.height - 28);
  const h = c.height * .8, w = h * img.width / img.height; g.drawImage(ink, (c.width - w) / 2, (c.height - h) / 2, w, h);
  const tex = new THREE.CanvasTexture(c); tex.colorSpace = THREE.SRGBColorSpace; tex.anisotropy = 8;
  const plate = new THREE.Mesh(new THREE.PlaneGeometry(size.z, size.y), new THREE.MeshStandardMaterial({ map: tex, roughness: .6, metalness: 0 }));
  plate.rotation.y = dir * Math.PI / 2; if (made) plate.rotateOnWorldAxis(new THREE.Vector3(0, 0, 1), dir * spot[2]);
  plate.position.set(made ? mid.x : dir > 0 ? box.max.x + .003 : box.min.x - .003, mid.y, mid.z); scene.add(plate); extras.push(plate);
}
let paintMaterial, camera, controls, renderer, scene, camGoal = null, skyEnv = null;
const SKY = [[0, '#a9bfcc'], [.36, '#cfdcdc'], [.5, '#f1f3ee'], [.56, '#bfc2bd'], [1, '#858784']]; // 표현용 값

const variant = zone => { if (!state.zones[zone]) return null; const [f, s] = state.zones[zone]; return FILMS[f].variants.find(x => x.id === s); };
// 필름이 없던 부위에 처음 필름을 넣을 때 기준으로 삼는 어둡기(전면은 밝게, 나머지는 짙게)
const defaultVlt = zone => { const [f, s] = DEFAULTS[zone] ?? DEFAULTS.rear; return FILMS[f].variants.find(x => x.id === s).vlt; };
// 투과율이 낮을수록 불투명하게. 시각적 근사이며 광학 계산이 아님.
const opacityFor = vlt => 1 - THREE.MathUtils.clamp(vlt / 100, .02, .95) * .9;

function applyGlass() {
  for (const zone of Object.keys(ZONES)) {
    const m = glass[zone]; if (!m) continue;
    if (state.compare || !state.zones[zone]) {
      m.color.set(zone === 'roof' ? '#07090b' : '#0c1114'); m.opacity = opacityFor(BARE_VLT * (zone === 'roof' ? ROOF_FACTORY : 1)); m.metalness = 0; m.roughness = .05; m.envMapIntensity = .6; m.specularColor.set('#ffffff');
    } else {
      const film = FILMS[state.zones[zone][0]];
      m.color.set(film.color); m.opacity = Math.max(opacityFor(variant(zone).vlt * (zone === 'roof' ? ROOF_FACTORY : 1)), film.mirror ? film.mirror - variant(zone).vlt / 100 * .45 : 0);
      m.metalness = film.metalness; m.roughness = film.roughness; m.envMapIntensity = film.env; m.specularColor.set(film.spec);
    }
    const env = !state.compare && state.zones[zone] && FILMS[state.zones[zone][0]].mirror ? skyEnv : null;
    if (m.envMap !== env) { m.envMap = env; m.needsUpdate = true; }
  }
}

function renderPanel() {
  // 부위마다 필름(state.zf)과 농도(state.zones)를 따로 가진다. 필름 카드=전 부위를 그 필름으로, 조합 카드=홈페이지 테슬라 페이지의 오너 조합, 줄 이름 아래 필름 이름을 누르면 그 줄만 필름을 바꾼다
  const zs = Object.keys(ZONES);
  const near = (film, vlt) => FILMS[film].variants.reduce((a, c) => Math.abs(c.vlt - vlt) < Math.abs(a.vlt - vlt) ? c : a).id;
  const setFilm = (z, film) => { if (state.zones[z] && state.zf[z] !== film) state.zones[z] = [film, near(film, variant(z).vlt)]; state.zf[z] = film; };
  $('reset').disabled = Object.values(state.zones).every(z => !z);
  $('films').replaceChildren(...Object.entries(FILMS).map(([key, film]) => {
    const b = document.createElement('button'); b.innerHTML = `<b>${film.name}</b><span>${film.type}</span>`; b.setAttribute('aria-pressed', zs.every(z => state.zf[z] === key));
    b.onclick = () => { for (const z of zs) setFilm(z, key); update(); };
    return b;
  }));
  $('combos').replaceChildren(...COMBOS.map(c => {
    const b = document.createElement('button'); b.innerHTML = `<b>${c.name}</b><span>${c.text}</span>`;
    b.setAttribute('aria-pressed', zs.every(z => state.zones[z]?.[0] === c.zones[z][0] && state.zones[z][1] === c.zones[z][1])); // 필름과 농도가 조합 그대로일 때만 고른 표시
    b.onclick = () => { for (const z of zs) { state.zf[z] = c.zones[z][0]; state.zones[z] = [...c.zones[z]]; } update(); };
    return b;
  }));
  const mixed = !zs.every(z => state.zf[z] === state.zf[zs[0]]);
  const row = g => {
    const film = state.zf[g.zones[0]], shades = FILMS[film].variants, on = id => g.zones.every(z => (state.zones[z]?.[1] ?? null) === id);
    const r = document.createElement('div'); r.className = 'row' + (g.key === state.selected ? ' on' : '') + (shades.length > 4 ? ' dense' : '');
    r.style.setProperty('--n', shades.length + 1);
    if (mixed) { // 필름이 섞여 있을 때만 줄 이름 아래에 필름 이름을 적고, 누르면 그 줄만 필름을 바꾼다
      const other = Object.keys(FILMS).find(f => f !== film);
      const name = document.createElement('button'); name.className = 'zf'; name.innerHTML = `<b>${g.label}</b><small>${FILMS[film].name}</small>`;
      name.setAttribute('aria-label', `${g.name} 필름 바꾸기, 지금 ${FILMS[film].name}`);
      name.onclick = () => { for (const z of g.zones) setFilm(z, other); state.selected = g.key; update(); };
      r.append(name);
    } else { const name = document.createElement('b'); name.textContent = g.label; r.append(name); }
    const cell = (text, id) => {
      const b = document.createElement('button'); b.className = 'd' + (id ? '' : ' off'); b.textContent = text; b.setAttribute('aria-label', `${g.name} ${id ? text : '필름 없음'}`); b.setAttribute('aria-pressed', on(id));
      b.onclick = () => { for (const z of g.zones) state.zones[z] = id ? [film, id] : null; state.selected = g.key; update(); };
      return b;
    };
    r.append(cell('없음', null), ...shades.map(x => cell(x.label, x.id)));
    return r;
  };
  $('grid').replaceChildren(...GROUPS.map(row));
  const selG = GROUPS.find(g => g.key === state.selected), selZ = selG.zones[0], cur = variant(selZ);
  $('specname').textContent = selG.name + ' · ' + (cur ? `${FILMS[state.zones[selZ][0]].name} ${cur.label}` : '필름 없음');
  $('vlt').innerHTML = cur ? `${cur.vlt}<small>%</small>` : '–'; $('tser').innerHTML = cur ? `${cur.tser}<small>%</small>` : '–';
  $('paints').replaceChildren(...PAINTS.map(([name, hex], i) => {
    const b = document.createElement('button'); b.style.setProperty('--c', hex); b.title = name; b.setAttribute('aria-label', name);
    b.setAttribute('aria-pressed', i === state.paint);
    b.onclick = () => { state.paint = i; update(true); };
    return b;
  }));
  $('paintname').textContent = PAINTS[state.paint][0];
}

// 필름·농도를 고르면 '필름 없이 보기'는 저절로 꺼진다(켜 둔 걸 잊으면 필름이 안 입혀진 것처럼 보임). 차 색만 바꿀 땐 그대로(keep)
function update(keep) { if (!keep && state.compare) { state.compare = false; $('compare').setAttribute('aria-pressed', false); $('badge').hidden = true; } applyGlass(); if (paintMaterial) paintMaterial.color.set(PAINTS[state.paint][1]); renderPanel(); }

$('reset').onclick = () => { for (const z of Object.keys(ZONES)) state.zones[z] = null; update(); };
$('compare').onclick = () => { state.compare = !state.compare; $('compare').setAttribute('aria-pressed', state.compare); $('badge').hidden = !state.compare; applyGlass(); };
// 자동 회전과 각도 버튼은 둘 다 카메라를 움직여 서로 끌어당긴다 → 하나를 켜면 다른 하나를 끈다
$('spin').onclick = () => { controls.autoRotate = !controls.autoRotate; $('spin').setAttribute('aria-pressed', controls.autoRotate); if (controls.autoRotate) { camGoal = null; for (const b of $('views').children) b.setAttribute('aria-pressed', false); } };

// 화면이 세로로 좁을수록 카메라를 뒤로 물려 차 전체가 들어오게 한다
const fit = () => { const el = $('viewer'); return Math.min(1.9, Math.max(el.clientWidth < 600 ? .8 : 1, 1.3 / (el.clientWidth / el.clientHeight))); }; // 좁은 화면(휴대폰)은 차 화면이 낮고 넓어서 더 가까이 당겨 차를 크게
let lastView = '전측면';

function setView(name) {
  lastView = name;
  if (controls?.autoRotate) { controls.autoRotate = false; $('spin').setAttribute('aria-pressed', false); }
  camGoal = new THREE.Vector3(...VIEWS[name]).multiplyScalar(fit());
  for (const b of $('views').children) b.setAttribute('aria-pressed', b.textContent === name);
}

function init() {
  const el = $('viewer');
  renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
  renderer.setPixelRatio(Math.min(devicePixelRatio, 2));
  renderer.outputColorSpace = THREE.SRGBColorSpace;
  renderer.toneMapping = THREE.ACESFilmicToneMapping; renderer.toneMappingExposure = 1.05;
  renderer.shadowMap.enabled = true; renderer.shadowMap.type = THREE.PCFSoftShadowMap;
  el.appendChild(renderer.domElement);

  scene = new THREE.Scene();
  camera = new THREE.PerspectiveCamera(32, 1, .1, 100); camera.position.set(...VIEWS['전측면']).multiplyScalar(fit());
  controls = new OrbitControls(camera, renderer.domElement);
  renderer.domElement.style.touchAction = ''; // OrbitControls가 캔버스에 박아 둔 '세로 스크롤 금지'를 걷어 낸다 → embed.css 값(휴대폰은 세로로 밀면 페이지가 넘어감)이 먹게
  controls.target.set(0, .62, 0); controls.enableDamping = true; controls.enablePan = false;
  controls.minDistance = 3.2; controls.maxDistance = 16; controls.maxPolarAngle = Math.PI * .495; controls.autoRotateSpeed = .8;
  // 직접 돌리면 각도 버튼 표시를 지운다 (유리를 누르기만 한 경우는 그대로 둔다)
  const before = new THREE.Vector3();
  controls.addEventListener('start', () => { camGoal = null; before.copy(camera.position); });
  controls.addEventListener('end', () => { if (before.distanceTo(camera.position) > .01) for (const b of $('views').children) b.setAttribute('aria-pressed', false); });

  // 가상 스튜디오: 차체와 유리에 비치는 반사광
  const pmrem = new THREE.PMREMGenerator(renderer);
  scene.environment = pmrem.fromScene(new RoomEnvironment(), .05).texture; scene.environmentIntensity = .75;
  // 되비추는 필름 전용 하늘: 실차 사진처럼 유리에 옅은 하늘과 밝은 지평선이 비치게 한다(위 하늘색 → 지평선 흰빛 → 바닥 회색)
  const sky = document.createElement('canvas'); sky.width = 1024; sky.height = 512; const sg = sky.getContext('2d'), gr = sg.createLinearGradient(0, 0, 0, 512);
  for (const [t, c] of SKY) gr.addColorStop(t, c);
  sg.fillStyle = gr; sg.fillRect(0, 0, 1024, 512);
  // 하늘에 조명을 단다: 해(장면의 해와 같은 방향)와 반대편 보조광, 옆으로 긴 조명판. 유리에 밝은 빛 자국이 맺히게 한다
  const glow = (x, y, rx, ry, a) => { for (const dx of [-1024, 0, 1024]) { sg.save(); sg.translate(x + dx, y); sg.scale(rx, ry); const g = sg.createRadialGradient(0, 0, 0, 0, 0, 1); g.addColorStop(0, `rgba(255,255,255,${a})`); g.addColorStop(.35, `rgba(255,255,255,${a * .75})`); g.addColorStop(1, 'rgba(255,255,255,0)'); sg.fillStyle = g; sg.fillRect(-1, -1, 2, 2); sg.restore(); } };
  glow(908, 95, 150, 95, 1); glow(380, 110, 120, 70, .8); glow(650, 190, 170, 28, .85); glow(130, 200, 150, 24, .7);
  const skyTex = new THREE.CanvasTexture(sky); skyTex.mapping = THREE.EquirectangularReflectionMapping; skyTex.colorSpace = THREE.SRGBColorSpace;
  skyEnv = pmrem.fromEquirectangular(skyTex).texture; skyTex.dispose(); pmrem.dispose();
  scene.add(new THREE.HemisphereLight(0xffffff, 0xd8dade, .5));
  const sun = new THREE.DirectionalLight(0xffffff, 2.4); sun.position.set(-3.5, 7, 3); sun.castShadow = true;
  sun.shadow.mapSize.set(2048, 2048); sun.shadow.radius = 6; sun.shadow.bias = -.0004;
  Object.assign(sun.shadow.camera, { left: -4, right: 4, top: 4, bottom: -4, near: 1, far: 20 }); scene.add(sun);
  const floor = new THREE.Mesh(new THREE.PlaneGeometry(60, 60), new THREE.ShadowMaterial({ opacity: .3 }));
  floor.rotation.x = -Math.PI / 2; floor.receiveShadow = true; scene.add(floor);

  // 창 크기가 바뀌면 화면비에 맞춰 거리도 다시 잡는다(각도 버튼이 켜져 있을 때만: 직접 돌려 둔 각도는 건드리지 않는다)
  const resize = () => { const w = el.clientWidth, h = el.clientHeight; if (!w || !h) return; renderer.setSize(w, h); camera.aspect = w / h; camera.updateProjectionMatrix(); if ([...$('views').children].some(b => b.getAttribute('aria-pressed') === 'true')) setView(lastView); };
  new ResizeObserver(resize).observe(el); resize();
  // 휴대폰을 돌리면 그 화면에 맞게 다시 잡는다
  matchMedia('(orientation: portrait)').addEventListener('change', () => setTimeout(() => setView(lastView), 200));
  const touch = matchMedia('(pointer: coarse)').matches;
  const embed = !!ROOT?.dataset.embed;
  if (touch) $('hint').textContent = embed ? '옆으로 밀어 회전 · 두 손가락으로 확대 · 유리를 누르면 부위 선택' : '한 손가락으로 회전 · 두 손가락으로 확대 · 유리를 누르면 부위 선택';
  // 다른 페이지 안에 끼워 넣었을 땐 마우스 휠이 차 확대가 아니라 페이지 스크롤이 되게 한다(차 위에서 스크롤이 막히지 않게)
  if (embed) el.addEventListener('wheel', e => e.stopImmediatePropagation(), { capture: true });

  // 유리를 눌러 부위 선택 (끌기와 구분)
  const ray = new THREE.Raycaster(); let down = null;
  renderer.domElement.addEventListener('pointerdown', e => { down = e.isPrimary ? [e.clientX, e.clientY] : null; }); // 두 번째 손가락이 닿으면(확대) 누르기로 치지 않는다
  renderer.domElement.addEventListener('pointerup', e => {
    const d = down; down = null;
    if (!d || Math.hypot(e.clientX - d[0], e.clientY - d[1]) > (touch ? 12 : 5)) return;
    const r = renderer.domElement.getBoundingClientRect();
    ray.setFromCamera(new THREE.Vector2((e.clientX - r.left) / r.width * 2 - 1, -(e.clientY - r.top) / r.height * 2 + 1), camera);
    const hit = ray.intersectObjects(scene.children, true).find(h => h.object.isMesh && h.object.visible && !h.object.material.isShadowMaterial);
    const zone = hit?.object.userData.zone;
    if (zone && ZONES[zone]) { state.selected = groupOf(zone).key; renderPanel(); }
  });

  if (new URLSearchParams(location.search).has('debug')) window.__s = { scene, camera, controls, THREE }; // 부품 찾기용
  const tick = () => {
    if (camGoal) { camera.position.lerp(camGoal, .09); if (camera.position.distanceTo(camGoal) < .02) camGoal = null; }
    controls.update(); renderer.render(scene, camera);
  };
  renderer.setAnimationLoop(tick);
  // 차 화면이 화면 밖에 있을 땐 그리기를 멈춘다(페이지 나머지를 읽는 동안 배터리·발열을 쓰지 않게)
  if ('IntersectionObserver' in window) new IntersectionObserver(es => renderer.setAnimationLoop(es[es.length - 1].isIntersecting ? tick : null)).observe(el);
}

async function loadCar() {
  const seq = loadSeq;
  // 차 파일은 형상을 압축해 둔 것(.draco.glb, 44.9MB→4.6MB·8.9MB→1.9MB)이라 푸는 도구(vendor/draco)를 붙여 읽는다
  draco ??= new DRACOLoader().setDecoderPath(here('./vendor/draco/'));
  const gltf = await new GLTFLoader().setDRACOLoader(draco).loadAsync(here('./models/' + CAR.file), e => {
    // 서버가 파일을 줄여 보내면 받은 양이 '전체 크기'보다 커져 100%를 넘는다 → 99에서 멈추고, 다 받으면 문구가 사라진다
    if (e.total && seq === loadSeq) $('loading').textContent = `차량을 불러오는 중 ${Math.min(99, Math.round(e.loaded / e.total * 100))}%`;
  });
  if (seq !== loadSeq) { dispose(gltf.scene); return; } // 불러오는 사이에 다른 차로 바꿨으면 버린다
  const car = carRoot = gltf.scene;
  // 실제 전장에 맞춰 크기를 잡고 바닥 가운데에 놓는다
  car.rotation.y += CAR.rotate; car.updateMatrixWorld(true);
  let box = new THREE.Box3().setFromObject(car), size = box.getSize(new THREE.Vector3());
  car.scale.multiplyScalar(CAR.length / size.x);
  box = new THREE.Box3().setFromObject(car); const c = box.getCenter(new THREE.Vector3());
  car.position.x -= c.x; car.position.z -= c.z; car.position.y -= box.min.y;

  car.traverse(o => {
    if (!o.isMesh) return;
    const name = o.material.name || '';
    o.castShadow = true;
    if (CAR.fix?.(o)) return;
    if (name.startsWith('film_')) {
      const zone = name.slice(5);
      glass[zone] ??= new THREE.MeshPhysicalMaterial({ name, transparent: true, side: THREE.DoubleSide, depthWrite: false, clearcoat: .15, clearcoatRoughness: .2 });
      o.material = glass[zone]; o.userData.zone = zone; o.castShadow = false; o.renderOrder = 2;
    } else if (CAR.paint(name, o)) {
      paintMaterial ??= new THREE.MeshPhysicalMaterial({ name: 'paint', side: o.material.side, polygonOffset: !CAR.noOffset, polygonOffsetFactor: -1, polygonOffsetUnits: -1, metalness: .4, roughness: .18, clearcoat: 1, clearcoatRoughness: .08 });
      o.material = paintMaterial;
    }
  });
  scene.add(car); car.updateMatrixWorld(true);
  if (CAR.erase) car.traverse(o => {
    if (!o.isMesh || !CAR.erase.meshes.includes(o.name) || !o.geometry.index) return;
    const pos = o.geometry.attributes.position, idx = o.geometry.index, v = new THREE.Vector3(), { min, max } = CAR.erase;
    const inside = i => { v.fromBufferAttribute(pos, i).applyMatrix4(o.matrixWorld); return v.x > min[0] && v.x < max[0] && v.y > min[1] && v.y < max[1] && v.z > min[2] && v.z < max[2]; };
    for (let t = 0; t < idx.count; t += 3) if (inside(idx.getX(t)) && inside(idx.getX(t + 1)) && inside(idx.getX(t + 2))) { idx.setX(t + 1, idx.getX(t)); idx.setX(t + 2, idx.getX(t)); }
    idx.needsUpdate = true;
  });
  for (const [mesh, dir] of plates) addPlate(mesh, dir).catch(console.error);
  for (const [dir, ...spot] of CAR.plateAt ?? []) addPlate(spot, dir).catch(console.error);
  $('loading').hidden = true;
  update(true);
}

$('views').replaceChildren(...Object.keys(VIEWS).map(name => { const b = document.createElement('button'); b.textContent = name; b.onclick = () => setView(name); return b; }));
// 치운 차가 쓰던 그래픽 메모리(형상·재질·그림)를 돌려준다. 안 하면 차를 바꿀 때마다 쌓인다. 하늘 반사 그림(skyEnv)은 계속 쓰므로 남긴다
function dispose(root) {
  root.traverse(o => {
    if (!o.isMesh) return;
    o.geometry.dispose();
    for (const m of [].concat(o.material)) { for (const t of Object.values(m)) if (t?.isTexture && t !== skyEnv) t.dispose(); m.dispose(); }
  });
}
// 차를 바꾼다: 페이지를 다시 열지 않고 그 자리에서. 필름·농도는 그대로 두고 차 색만 그 차의 기본으로
function selectCar(key) {
  carKey = key; CAR = CARS[key]; PAINTS = CAR.paints ?? PAINTS_DEFAULT; state.paint = CAR.paintDefault ?? 0; loadSeq++;
  if (carRoot) { scene.remove(carRoot); dispose(carRoot); carRoot = null; }
  for (const e of extras.splice(0)) { scene.remove(e); dispose(e); }
  for (const z of Object.keys(glass)) delete glass[z]; paintMaterial = null; plates.length = 0;
  if ($('title')) { $('title').textContent = CAR.title; $('year').textContent = CAR.year; document.title = `THE LX · ${CAR.title} 3D 필름 스튜디오`; }
  $('credit').innerHTML = CAR.credit;
  for (const b of $('cars').children) b.setAttribute('aria-pressed', b.dataset.car === key);
  if (ROOT?.dataset.url) history.replaceState(null, '', `?car=${key}`);
  $('loading').textContent = '차량을 불러오는 중'; $('loading').hidden = false;
  renderPanel();
  const seq = loadSeq;
  loadCar().catch(err => { if (seq !== loadSeq) return; $('loading').textContent = '차량을 불러오지 못했습니다. 새로고침해 주세요.'; console.error(err); });
}
$('cars').replaceChildren(...Object.entries(CARS).map(([key, c]) => { const b = document.createElement('button'); b.textContent = c.short; b.dataset.car = key; b.onclick = () => key !== carKey && selectCar(key); return b; }));
// 3D를 못 여는 브라우저(WebGL 꺼짐 등)에선 '불러오는 중'에 멈춰 있지 않게 알린다
try { init(); setView('전측면'); selectCar(carKey); }
catch (err) { $('loading').textContent = '이 브라우저에서는 3D 화면을 표시할 수 없습니다.'; console.error(err); }
