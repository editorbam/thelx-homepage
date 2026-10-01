/* THE LX 예약 폼 — 희망 날짜·시간 선택 (시안 확정안, 2026-08-14)
   동작: #bDate 클릭 → 큰 달력+시간대 메가패널(#dtPanel). 지난 날짜 비활성, 일요일·공휴일 붉은 표기+점(선택은 가능. 단 #dtPanel에 data-block-red가 있으면 선택 불가 — event.html).
   공휴일: 2026·2027 정부 월력요항 기준(대체공휴일 포함, 2027 노동절·제헌절 신규 반영). 2028 도래 전 표 갱신 필요.
   전송값: "YYYY-MM-DD (요일) HH:00" 또는 "YYYY-MM-DD (요일) 시간미정" — 구글 시트 날짜 열에 그대로 저장 */
(function(){
var field = document.getElementById('bDate');
var host = document.getElementById('dtPanel');
if (!field || !host) return;
var BLOCK_RED = host.hasAttribute('data-block-red'); /* 2026-10-01 이벤트 페이지(event.html): 일요일·공휴일(빨간날) 예약 불가 — #dtPanel에 data-block-red 있을 때만 */

var css = [
'.dtp-panel{position:absolute;left:0;right:0;top:.4rem;z-index:60;background:#fff;',
'-webkit-backdrop-filter:blur(14px);backdrop-filter:blur(14px);border:.5px solid #e8e8ed;border-radius:18px;',
'box-shadow:0 24px 60px rgba(0,0,0,.10);padding:1.6rem 1.7rem 1.5rem;display:none;color:#0a0a0a;text-align:left;}',
'.dtp-panel.open{display:block;}',
'.dtp-cols{display:grid;grid-template-columns:1.35fr 1fr;gap:1.6rem;}',
'@media (max-width:640px){.dtp-cols{grid-template-columns:1fr;}}',
'.dtp-cal-head{display:flex;align-items:center;justify-content:space-between;margin-bottom:.9rem;}',
'.dtp-cal-title{font-size:15px;font-weight:700;letter-spacing:-.01em;}',
'.dtp-nav{display:flex;gap:.3rem;}',
'.dtp-nav button{font-family:inherit;border:none;background:none;color:#0a0a0a;font-size:14px;width:32px;height:32px;border-radius:10px;transition:background .15s;}',
'.dtp-nav button:hover{background:#f5f5f7;}.dtp-nav button:disabled{color:#c7c7cc;background:none;}',
'.dtp-grid{display:grid;grid-template-columns:repeat(7,1fr);gap:2px;}',
'.dtp-dow{font-size:10px;letter-spacing:.08em;color:#6e6e73;font-weight:500;text-align:center;padding:.45rem 0 .55rem;}',
'.dtp-dow.sun{color:#c0392b;}',
'.dtp-day{position:relative;font-family:inherit;border:none;background:none;color:#0a0a0a;font-size:14.5px;font-weight:500;',
'aspect-ratio:1;border-radius:12px;transition:background .15s;display:flex;align-items:center;justify-content:center;}',
'.dtp-day:hover{background:#f5f5f7;}',
'.dtp-day.out{color:#c7c7cc;}.dtp-day.past{color:#c7c7cc;pointer-events:none;}',
'.dtp-day.sun{color:#c0392b;}.dtp-day.sun.past,.dtp-day.sun.out{color:#e5b5b0;}',
'.dtp-day.today{box-shadow:inset 0 0 0 1px #d4dae1;}',
'.dtp-day.sel{background:#0a0a0a;color:#fff;}.dtp-day.sel:hover{background:#0a0a0a;}',
'.dtp-dot{position:absolute;left:50%;transform:translateX(-50%);bottom:4px;width:3px;height:3px;border-radius:50%;background:#c0392b;}',
'.dtp-day.sel .dtp-dot{background:#fff;}.dtp-day.past .dtp-dot,.dtp-day.out .dtp-dot{background:#e5b5b0;}',
'.dtp-slot-head{font-size:10px;letter-spacing:.14em;text-transform:uppercase;color:#6e6e73;font-weight:500;margin:.2rem 0 .6rem;}',
'.dtp-slots{display:grid;grid-template-columns:repeat(3,1fr);gap:.45rem;}',
'.dtp-slot{font-family:inherit;border:.5px solid #e8e8ed;background:#fff;color:#0a0a0a;font-size:13.5px;font-weight:500;',
'padding:.62rem 0;border-radius:11px;transition:background .15s,border-color .15s;text-align:center;}',
'.dtp-slot:hover{background:#f5f5f7;}',
'.dtp-slot.sel{background:#0a0a0a;color:#fff;border-color:#0a0a0a;}',
'.dtp-slot:disabled,.dtp-slot.gone{color:#c7c7cc;background:#fafafa;border-color:#eeeef0;cursor:default;text-decoration:line-through;}.dtp-slot:disabled:hover{background:#fafafa;}',
'.dtp-slot.tbd{grid-column:1/-1;color:#6e6e73;font-weight:400;}.dtp-slot.tbd.sel{color:#fff;}',
'.dtp-note{font-size:11px;color:#6e6e73;margin-top:.8rem;line-height:1.6;}',
'.dtp-foot{display:flex;align-items:center;justify-content:space-between;margin-top:1.3rem;padding-top:1.1rem;border-top:.5px solid #e8e8ed;}',
'.dtp-picked{font-size:13.5px;font-weight:500;color:#0a0a0a;min-height:1.2em;}.dtp-picked span{color:#6e6e73;font-weight:400;}',
'.dtp-done{font-family:inherit;border:none;background:#0a0a0a;color:#fff;font-size:13px;font-weight:500;padding:.65rem 1.5rem;border-radius:999px;}',
'.dtp-done:disabled{background:#e8e8ed;color:#a0a0a5;}'
].join('');
var st = document.createElement('style'); st.textContent = css; document.head.appendChild(st);

host.className = 'dtp-panel';
host.innerHTML =
'<div class="dtp-cols"><div>'+
'<div class="dtp-cal-head"><div class="dtp-cal-title" id="dtpTitle"></div>'+
'<div class="dtp-nav"><button type="button" id="dtpPrev" aria-label="이전 달">&#8249;</button>'+
'<button type="button" id="dtpNext" aria-label="다음 달">&#8250;</button></div></div>'+
'<div class="dtp-grid" id="dtpGrid"></div></div>'+
'<div><div class="dtp-slot-head">시간대</div><div class="dtp-slots" id="dtpSlots"></div>'+
'<p class="dtp-note">정확한 시공 시간은 상담 전화에서 최종 확정됩니다.</p></div></div>'+
'<div class="dtp-foot"><div class="dtp-picked" id="dtpPicked"><span>날짜를 먼저 선택해 주세요</span></div>'+
'<button type="button" class="dtp-done" id="dtpDone" disabled>선택 완료</button></div>';

var HOLIDAYS = {
'2026-01-01':'신정','2026-02-16':'설 연휴','2026-02-17':'설날','2026-02-18':'설 연휴',
'2026-03-01':'삼일절','2026-03-02':'대체공휴일 (삼일절)','2026-05-05':'어린이날',
'2026-05-24':'석가탄신일','2026-05-25':'대체공휴일 (석가탄신일)','2026-06-03':'지방선거일','2026-06-06':'현충일',
'2026-08-15':'광복절','2026-08-17':'대체공휴일 (광복절)',
'2026-09-24':'추석 연휴','2026-09-25':'추석','2026-09-26':'추석 연휴',
'2026-10-03':'개천절','2026-10-05':'대체공휴일 (개천절)','2026-10-09':'한글날','2026-12-25':'성탄절',
'2027-01-01':'신정','2027-02-06':'설 연휴','2027-02-07':'설날','2027-02-08':'설 연휴','2027-02-09':'대체공휴일 (설날)',
'2027-03-01':'삼일절','2027-05-01':'노동절','2027-05-03':'대체공휴일 (노동절)','2027-05-05':'어린이날',
'2027-05-13':'석가탄신일','2027-06-06':'현충일',
'2027-07-17':'제헌절','2027-07-19':'대체공휴일 (제헌절)',
'2027-08-15':'광복절','2027-08-16':'대체공휴일 (광복절)',
'2027-09-14':'추석 연휴','2027-09-15':'추석','2027-09-16':'추석 연휴',
'2027-10-03':'개천절','2027-10-04':'대체공휴일 (개천절)','2027-10-09':'한글날','2027-10-11':'대체공휴일 (한글날)',
'2027-12-25':'성탄절','2027-12-27':'대체공휴일 (성탄절)'
};

var DOW = ['일','월','화','수','목','금','토'];
var today = new Date(); today.setHours(0,0,0,0);
var LAST_HOUR = 20; /* 마지막 시간대. 이 시각이 지나면 오늘은 달력에서 지난 날 취급 */
var view = new Date(today.getFullYear(), today.getMonth(), 1);
var selDate = null, selTime = null;
var titleEl = document.getElementById('dtpTitle');
var gridEl = document.getElementById('dtpGrid');
var slotsEl = document.getElementById('dtpSlots');
var pickedEl = document.getElementById('dtpPicked');
var doneEl = document.getElementById('dtpDone');

function pad(n){ return String(n).length<2 ? '0'+n : String(n); }
function iso(d){ return d.getFullYear()+'-'+pad(d.getMonth()+1)+'-'+pad(d.getDate()); }
function human(d){ return (d.getMonth()+1)+'월 '+d.getDate()+'일 ('+DOW[d.getDay()]+')'; }

function renderCal(){
  titleEl.textContent = view.getFullYear()+'년 '+(view.getMonth()+1)+'월';
  document.getElementById('dtpPrev').disabled =
    (view.getFullYear()===today.getFullYear() && view.getMonth()===today.getMonth());
  var h='';
  for (var i=0;i<7;i++) h += '<div class="dtp-dow'+(i===0?' sun':'')+'">'+DOW[i]+'</div>';
  var first = new Date(view.getFullYear(), view.getMonth(), 1);
  var start = new Date(first); start.setDate(1 - first.getDay());
  for (var k=0;k<42;k++){
    var d = new Date(start); d.setDate(start.getDate()+k);
    var out = d.getMonth() !== view.getMonth();
    var past = d < today || (d.getTime()===today.getTime() && new Date().getHours() >= LAST_HOUR); /* 마지막 시간대 지나면 오늘도 선택 불가 */
    var hol = HOLIDAYS[iso(d)];
    var red = d.getDay()===0 || !!hol;
    if (BLOCK_RED && red) past = true; /* 빨간날 선택 불가 */
    var cls = ['dtp-day'];
    if (out) cls.push('out');
    if (past) cls.push('past');
    if (red) cls.push('sun');
    if (d.getTime()===today.getTime()) cls.push('today');
    if (selDate && d.getTime()===selDate.getTime()) cls.push('sel');
    h += '<button type="button" class="'+cls.join(' ')+'" data-ts="'+d.getTime()+'"'+(past?' disabled':'')+
         (hol?' title="'+hol+(BLOCK_RED?' · 휴무':'')+'"':(BLOCK_RED&&red?' title="휴무"':''))+'>'+d.getDate()+(hol?'<i class="dtp-dot"></i>':'')+'</button>';
  }
  gridEl.innerHTML = h;
}
function renderSlots(){
  /* 2026-10-01 오늘을 고른 경우 이미 지난 시간대(현재 시각의 '시' 이하)는 회색 비활성(사용자 요청) */
  var now = new Date(), isToday = !selDate || selDate.getTime()===today.getTime(); /* 날짜 미선택=오늘 기준(가장 이른 날이 오늘이므로) */
  var h='';
  for (var t=9;t<=LAST_HOUR;t++){ /* 2026-10-01 사용자: 20시까지 표기 */
    var label = pad(t)+':00', gone = isToday && t <= now.getHours();
    if (gone && selTime===label) selTime = null;
    h += '<button type="button" class="dtp-slot'+(selTime===label?' sel':'')+(gone?' gone':'')+'" data-t="'+label+'"'+(gone?' disabled':'')+'>'+label+'</button>';
  }
  /* 2026-09-30 「시간 미정 — 상담 후 확정」 버튼 제거(사용자 요청) */
  slotsEl.innerHTML = h;
}
function refreshFoot(){
  if (!selDate){ pickedEl.innerHTML='<span>날짜를 먼저 선택해 주세요</span>'; doneEl.disabled=true; return; }
  var hol = HOLIDAYS[iso(selDate)];
  var t = selTime ? (selTime==='시간미정' ? ' · 시간 미정' : ' · '+selTime) : ' · <span>시간대를 선택해 주세요</span>';
  pickedEl.innerHTML = human(selDate) + (hol ? ' <span>· '+hol+'</span>' : '') + t;
  doneEl.disabled = !selTime;
}
gridEl.addEventListener('click', function(e){
  var b = e.target.closest('.dtp-day'); if (!b || b.disabled) return;
  selDate = new Date(Number(b.getAttribute('data-ts')));
  if (selDate.getMonth() !== view.getMonth()) view = new Date(selDate.getFullYear(), selDate.getMonth(), 1);
  renderCal(); renderSlots(); refreshFoot();
});
slotsEl.addEventListener('click', function(e){
  var b = e.target.closest('.dtp-slot'); if (!b || b.disabled) return;
  selTime = b.getAttribute('data-t');
  renderSlots(); refreshFoot();
});
document.getElementById('dtpPrev').addEventListener('click', function(){ view.setMonth(view.getMonth()-1); renderCal(); });
document.getElementById('dtpNext').addEventListener('click', function(){ view.setMonth(view.getMonth()+1); renderCal(); });
doneEl.addEventListener('click', function(){
  field.value = iso(selDate)+' ('+DOW[selDate.getDay()]+') '+selTime;
  host.classList.remove('open');
});
field.addEventListener('click', function(){
  ['cpBrandPanel','cpModelPanel'].forEach(function(id){ var el=document.getElementById(id); if(el) el.classList.remove('open'); });
  host.classList.toggle('open');
});
/* 2026-10-01 버그 수정: 날짜·시간 클릭 시 달력이 다시 그려져 누른 버튼이 DOM에서 사라짐 → 아래 문서 클릭 검사에서 '바깥 클릭'으로 오인해 패널이 닫혔음(8/14부터). 그려지기 전(캡처 단계)에 안쪽 클릭을 기억 */
var inside=false;
host.addEventListener('click', function(){ inside=true; }, true);
document.addEventListener('click', function(e){
  var was=inside; inside=false;
  if (was || e.target === field) return;
  host.classList.remove('open');
});
document.addEventListener('keydown', function(e){ if (e.key==='Escape') host.classList.remove('open'); });

renderCal(); renderSlots(); refreshFoot();
})();
