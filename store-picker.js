/* THE LX 예약 폼 — 지역·시공점 선택 (2026-09-28, car-picker 문법 상속)
   데이터: stores-list.js(window.STORE_LIST) — stores.html STORE_DATA에서 build-store-schema.py가 생성
   동작: 지역 칸 클릭=시·도 패널, 선택 시 시공점 패널로. 시공점 칸 타이핑=매장명·주소 즉시 검색(예: 강남, 논현). 목록에 없는 값도 그대로 접수. */
(function(){
var LIST = window.STORE_LIST || [];
var region = document.getElementById('bRegion');
var store = document.getElementById('bStore');
var regionPanel = document.getElementById('spRegionPanel');
var storePanel = document.getElementById('spStorePanel');
if (!region || !store || !regionPanel || !storePanel || !LIST.length) return;

var REGIONS = [
  ['서울특별시','서울'],['경기도','경기'],['인천광역시','인천'],['부산광역시','부산'],['대구광역시','대구'],
  ['대전광역시','대전'],['광주광역시','광주'],['울산광역시','울산'],['경상남도','경남'],['경상북도','경북'],
  ['전라남도','전남'],['전라북도','전북'],['충청남도','충남'],['충청북도','충북'],['강원도','강원'],
  ['제주도','제주'],['세종특별자치시','세종']
];
var COUNT = {};
LIST.forEach(function(s){ COUNT[s.r] = (COUNT[s.r]||0) + 1; });
function fullOf(short){ for (var i=0;i<REGIONS.length;i++) if (REGIONS[i][1] === short) return REGIONS[i][0]; return null; }

/* car-picker의 .cp-panel·.cp-grid 스타일을 그대로 씀. 시공점 줄에 주소 한 줄만 추가 */
var css = [
'.sp-grid button{display:flex;flex-direction:column;gap:2px;white-space:normal;}',
'.sp-grid button small{font-size:11px;font-weight:400;color:#6e6e73;letter-spacing:0;}',
'.sp-grid{grid-template-columns:repeat(3,1fr);}',
'.cp-grid button .sp-c{font-weight:400;color:#6e6e73;font-size:12px;margin-left:.3rem;}',
'@media (max-width:640px){.sp-grid{grid-template-columns:1fr;}}'
].join('');
var st = document.createElement('style'); st.textContent = css; document.head.appendChild(st);

function closeAll(){ regionPanel.classList.remove('open'); storePanel.classList.remove('open'); }
function closeOthers(){
  ['cpBrandPanel','cpModelPanel','dtPanel'].forEach(function(id){ var el=document.getElementById(id); if (el) el.classList.remove('open'); });
}
document.addEventListener('click', function(e){ if (!e.target.closest('.sp-zone') && !e.target.closest('#spRegionPanel') && !e.target.closest('#spStorePanel')) closeAll(); });
document.addEventListener('keydown', function(e){ if (e.key === 'Escape') closeAll(); });

function escRe(s){ return s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'); }
function mark(label, q){ return q ? label.replace(new RegExp('('+escRe(q)+')','i'), '<b>$1</b>') : label; }

/* ── 지역 패널 ── */
function showRegions(){
  var h = '<div class="cp-grid">';
  REGIONS.forEach(function(r){
    if (!COUNT[r[0]]) return;
    h += '<button type="button" data-region="'+r[1]+'">'+r[1]+'<span class="sp-c">'+COUNT[r[0]]+'</span></button>';
  });
  h += '</div>';
  regionPanel.innerHTML = h; regionPanel.classList.add('open'); storePanel.classList.remove('open'); closeOthers();
}
region.addEventListener('focus', showRegions);
region.addEventListener('click', showRegions);
regionPanel.addEventListener('click', function(e){
  var b = e.target.closest('button'); if (!b) return;
  var prev = region.value;
  region.value = b.getAttribute('data-region');
  if (prev !== region.value) store.value = '';
  closeAll();
  store.focus();
});

/* ── 시공점 패널 ── */
function showStores(q){
  q = (q||'').trim().toLowerCase();
  var full = fullOf(region.value.trim());
  var pool = LIST.filter(function(s){ return !full || s.r === full; });
  var hits = pool.filter(function(s){ return !q || s.n.toLowerCase().indexOf(q) !== -1 || s.a.toLowerCase().indexOf(q) !== -1; });
  var h = '';
  if (!full && !q) {
    h = '<div class="cp-hint">지역을 먼저 고르면 좁혀서 보여드립니다. 동네 이름으로 바로 검색하셔도 됩니다 (예: 강남, 논현).</div>';
  } else if (hits.length) {
    h = '<div class="cp-grid sp-grid">';
    if (full) h += '<div class="cp-grp">'+region.value+' · '+hits.length+'곳</div>';
    hits.slice(0, 80).forEach(function(s){
      h += '<button type="button" data-store="'+s.n+'" data-r="'+s.r+'"><span>'+mark(s.n,q)+'</span><small>'+mark(s.a,q)+'</small></button>';
    });
    h += '</div>';
  } else {
    h = '<div class="cp-empty">찾는 시공점이 없습니다.<br>지금 쓰신 이름 그대로 접수됩니다 — 연락드려 확인하겠습니다.</div>';
  }
  storePanel.innerHTML = h; storePanel.classList.add('open'); regionPanel.classList.remove('open'); closeOthers();
}
store.addEventListener('focus', function(){ showStores(''); });
store.addEventListener('click', function(){ showStores(''); });
store.addEventListener('input', function(){ showStores(store.value); });
storePanel.addEventListener('click', function(e){
  var b = e.target.closest('button'); if (!b) return;
  store.value = b.getAttribute('data-store');
  var r = b.getAttribute('data-r');
  if (r) REGIONS.forEach(function(x){ if (x[0] === r) region.value = x[1]; });
  closeAll();
});
})();
