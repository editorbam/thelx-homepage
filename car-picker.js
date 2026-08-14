/* THE LX 예약 폼 — 차량 브랜드·차종 선택 (시안 C-2 확정안, 2026-08-14)
   데이터: sgp CMS mkw_car_category (제조사 50 · 모델 513, 르노삼성→르노 표기 갱신)
   동작: 브랜드 칸 클릭=가로 메가패널(네비 제품소개 문법)로 브랜드 펼침, 선택 시 닫히고 차종 패널로.
         타이핑=즉시 검색. 차종부터 검색하면 브랜드 자동 채움. 목록에 없는 값=자유 입력 그대로 접수.
   갱신: CMS 차종 추가 시 CAR_TREE에 반영 후 ?v= 올릴 것 */
(function(){
const CAR_TREE={"국산": {"현대": ["그렌져", "쏘나타", "스타렉스", "아반떼", "싼타페", "포터", "i30", "i40", "갤로퍼", "넥쏘", "맥스크루즈", "베뉴", "베라크루즈", "베르나", "벨로스터", "아슬란", "아이오닉", "에쿠스", "엑센트", "카운티", "투스카니", "투싼", "티뷰론", "펠리세이드", "코나", "스타리아", "아이오닉5", "쏠라티", "카운티", "캐스퍼", "아이오닉6", "다이너스티", "마이티", "ST1", "파비스", "아이오닉9"], "기아": ["K3", "K5", "K7", "K8", "K9", "니로", "레이", "로체", "모닝", "모하비", "봉고", "셀토스", "스토닉", "스팅어", "스포티지", "쎼라토", "쏘렌토", "쏘울", "카니발", "포르테", "프라이드", "EV6", "카렌스", "EV9", "스펙트라", "EV3", "타스만", "EV4", "PV5", "ev5", "오피러스"], "제네시스": ["G70", "G80", "G90", "GV70", "GV80", "EQ900", "GV60", "제네시스BH", "제네시스 쿠페", "제네시스 DH"], "쉐보레/대우": ["말리부", "볼트", "스파크", "아베오", "올란도", "아쿼녹스", "임팔라", "카마로", "콜로라도", "콜벳", "캡티바", "크루즈", "트래버스", "트레일블레이저", "트랙스", "다마스", "라보", "마티즈", "알페온", "타호", "더쎈"], "르노": ["SM3", "SM5", "SM6", "SM7", "QM3", "QM5", "QM6", "XM3", "마스터", "캡쳐", "클리오", "트위지", "그랑 콜레오스", "세닉", "필랑트"], "쌍용(KG모빌리티)": ["렉스턴", "로디우스", "무쏘", "액티언", "체어맨", "코란도", "티볼리", "토레스"]}, "수입": {"벤츠": ["A class", "B class", "C class", "E class", "CLA class", "CLK class", "CLS class", "S class", "Maybach S class", "Maybach GLS class", "GLA class", "GLB class", "GLC class", "GLE class", "GLK class", "GLS class", "GL class", "G class[G바겐]", "AMG GT", "R class", "V class", "스프린터", "EQC", "SLK class", "SL class", "CL class", "SLC class", "SLS AMG", "SLR 맥라렌", "EQA", "EQB", "EQC", "EQE", "EQS", "GTR", "CLE class", "스프린터"], "BMW": ["ix", "ix3", "XM", "1series", "2series", "3series", "4series", "5series", "6series", "7series", "8series", "그란투리스모[GT]", "1M", "M2", "M3", "M4", "M5", "M6", "M8", "M쿠페/로드스터", "X3 M", "X4 M", "X5 M", "X6 M", "X1", "X2", "X3", "X4", "X5", "X6", "X7", "Z3", "Z4", "Z8", "i3", "i4", "i7", "i8", "i5", "ix1", "액티브투어러"], "포르쉐": ["718", "911", "마칸", "박스터", "카이맨", "카이엔", "카레라GT", "타이칸", "파나메라", "타르가", "카이엔 cupe"], "랜드로버": ["디스커버리", "디스커버리 스포츠", "디펜더", "레인지로버", "레인지로버 스포츠", "레인지로버 벨라", "레인지로버 이보크", "프리랜더"], "아우디": ["A1", "A3", "A4", "A5", "A6", "A7", "A8", "E-트론", "Q2", "Q3", "Q4", "Q5", "Q7", "Q8", "SQ5", "SQ8", "RS Q8", "TT", "R8", "S3", "S4", "S5", "S6", "S7", "S8", "RS3", "RS4", "RS5", "RS6", "RS7", "E-트론 GT", "RS e-트론 GT", "Q6 e-트론"], "벤틀리": ["뮬산", "벤테이가", "아르나지", "컨티넨탈GT", "컨티넨탈 플라잉스퍼", "터보R"], "도요타": ["프리우스", "캠리", "라브4", "시에나", "FJ크루져", "툰드라", "아발론", "GR 86", "크라운", "하이랜더", "알파드"], "포드": ["익스플로러", "퓨전", "머스탱", "E-series", "F-series", "쿠가", "익스페디션", "레인저", "브롱코", "트랜짓", "레인저 랩터"], "폭스바겐": ["골프", "시로코", "비틀", "제타", "파사트", "CC", "아테온", "페이톤", "티구안", "투아렉", "EOS", "T-ROC ", "폴로", "ID.4", "멀티벤", "ID.5", "아틀라스"], "닷지": ["니트로", "다코타", "듀랑고", "램밴", "램픽업", "챌린저", "캘리버"], "렉서스": ["CT", "ES", "GS", "IS", "LC", "LS", "NX", "RX", "SC", "UX", "RZ", "LM", "LX"], "미니": ["로드스터", "로버 미니", "컨트리맨", "쿠퍼", "쿠퍼 컨버터블", "쿠페", "클럽맨", "페이스맨", "에이스맨", "일렉트릭"], "람보르기니": ["가야르도", "무르시엘라고", "아벤타도르", "우라칸", "우르스"], "롤스로이스": ["고스트", "던", "팬텀", "컬리넌", "스펙터"], "링컨": ["MKC", "MKS", "MKS", "MKZ", "노틸러스", "에비에이터", "컨티넨탈", "코세어", "MKX", "네비게이터"], "마세라티": ["그란카브리오", "그란투리스모", "기블리", "르반떼", "콰트로포르테", "그레칼레"], "볼보": ["S40", "S60", "S80", "S90", "V40", "V50", "V60", "V90", "XC40", "XC60", "XC70", "XC90", "트럭", "폴스타2", "C40", "폴스타4", "EX30"], "쉐보레": ["서버밴", "실버라도", "아발란치", "익스프레스밴", "체피밴", "카마로", "콜로라도", "콜벳", "트랙스 크로스오버", "볼트", "트래버스"], "애스턴마틴": ["DB", "DBS", "DBX", "밴티지", "뱅퀴시", "라피드"], "인피니티": ["EX", "FX", "G", "JX", "M", "Q", "QX"], "재규어": ["E-PACE", "F-PACE ", "F-TYPE", "I-PACE", "S-TYPE", "X-TYPE", "XE", "XF", "XJ", "XJR", "XKR"], "지프": ["글래디에이터", "랭글러", "레니게이드", "체로키", "커맨더", "컴패스", "어벤저 EV"], "캐딜락": ["ATS", "ATS-V", "CT6", "CTS", "CTS-V", "DTS", "SRX", "STS", "XT5", "XT6", "XTS", "에스컬레이드", "XT4", "리릭"], "크라이슬러": ["200", "300C", "300M", "PT크루저", "그랜드 보이저"], "페라리": ["458", "488", "599", "812", "F8", "F12", "F430", "FF", "GTC4", "SF90", "로마", "캘리포니아", "포르토피노", "296GTB", "360", "296GTS", "푸로산게"], "테슬라": ["모델S", "모델X", "모델Y", "모델3", "사이버트럭", "주니퍼YL"], "피아트": ["피아트500"], "혼다": ["CR-V", "CR-Z", "HR-V", "N Box", "시빅", "어코드", "오딧세이", "파일럿"], "닛산": ["알티마", "큐브", "무라노", "맥시마", "쥬크", "350Z 컨버터블"], "맥라렌": ["540C", "570GT", "570S", "600LT", "650S", "675LT", "720S", "GT", "MP4-12C", "765LT", "750s"], "푸조": ["3008", "2008", "308", "508", "208", "5008", "408", "RCZ"], "시트로엥": ["C", "DS", "잔티아"], "마쯔다": ["MX", "RX"], "GMC": ["시에라", "허머EV"], "스즈키": ["허슬러", "짐니"], "EV KMC": ["마사다 2밴", "마사다 4밴"], "다이하쓰": ["비전 코펜 콘셉트", "코펜"], "쎄보모빌리티": ["CEVO-C SE"], "로터스": ["에미라"], "알파로메오": ["줄리아"], "이네오스": ["그레나디어"], "이베코": ["데일리", "스트라리스", "트래커", "S웨이", "X웨이", "T웨이", "유로카고"], "피아트 두카토": ["E-두카토"], "BYD": ["ATTO3", "E6", "SEAL", "SEALION7", "DOLPHIN"]}};

var brand = document.getElementById('bBrand');
var model = document.getElementById('bCar');
var brandPanel = document.getElementById('cpBrandPanel');
var modelPanel = document.getElementById('cpModelPanel');
if (!brand || !model || !brandPanel || !modelPanel) return;

/* ── 스타일 주입 (네비 .nav-drop-panel 문법 상속) ── */
var css = [
'.cp-panel{position:absolute;left:0;right:0;top:.4rem;z-index:60;background:rgba(255,255,255,.97);',
'-webkit-backdrop-filter:blur(14px);backdrop-filter:blur(14px);border:.5px solid #e8e8ed;border-radius:18px;',
'box-shadow:0 24px 60px rgba(0,0,0,.10);padding:1.5rem 1.6rem 1.3rem;max-height:340px;overflow-y:auto;display:none;}',
'.cp-panel.open{display:block;}',
'.cp-panel::-webkit-scrollbar{width:5px;}.cp-panel::-webkit-scrollbar-thumb{background:rgba(10,10,10,.18);}',
'.cp-grp{grid-column:1/-1;font-size:9px;letter-spacing:.14em;text-transform:uppercase;color:#6e6e73;font-weight:500;padding:10px 6px 4px;}',
'.cp-grid{display:grid;grid-template-columns:repeat(5,1fr);gap:.2rem .8rem;}',
'.cp-grid button{font-family:inherit;font-weight:500;border:none;background:none;color:#0a0a0a;font-size:14px;',
'letter-spacing:-.01em;text-align:left;padding:.6rem .65rem;border-radius:10px;transition:background .15s;white-space:nowrap;}',
'.cp-grid button:hover{background:#f5f5f7;}.cp-grid button b{font-weight:700;}',
'.cp-hint{font-size:11px;color:#6e6e73;padding:6px 6px 2px;letter-spacing:.04em;}',
'.cp-empty{font-size:12.5px;color:#6e6e73;padding:10px 6px;line-height:1.7;}',
'@media (max-width:640px){.cp-grid{grid-template-columns:repeat(2,1fr);}.cp-panel{max-height:300px;}}'
].join('');
var st = document.createElement('style'); st.textContent = css; document.head.appendChild(st);

var MAKERS = [], FLAT = [];
Object.keys(CAR_TREE).forEach(function(cat){
  Object.keys(CAR_TREE[cat]).forEach(function(mk){
    MAKERS.push({cat:cat, maker:mk});
    CAR_TREE[cat][mk].forEach(function(m){ FLAT.push({cat:cat, maker:mk, model:m}); });
  });
});

function closeAll(){ brandPanel.classList.remove('open'); modelPanel.classList.remove('open'); }
function closeDt(){ var d=document.getElementById('dtPanel'); if(d) d.classList.remove('open'); }
document.addEventListener('click', function(e){ if (!e.target.closest('.cp-zone') && !e.target.closest('.cp-panel')) closeAll(); });
document.addEventListener('keydown', function(e){ if (e.key === 'Escape') closeAll(); });

function escRe(s){ return s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'); }
function mark(label, q){ return q ? label.replace(new RegExp('('+escRe(q)+')','i'), '<b>$1</b>') : label; }

/* ── 브랜드 패널 ── */
function showBrands(q){
  q = (q||'').trim().toLowerCase();
  var h = '', found = 0;
  Object.keys(CAR_TREE).forEach(function(cat){
    var hits = Object.keys(CAR_TREE[cat]).filter(function(mk){ return !q || mk.toLowerCase().indexOf(q) !== -1; });
    if (!hits.length) return;
    h += '<div class="cp-grid"><div class="cp-grp">'+cat+'</div>';
    hits.forEach(function(mk){ h += '<button type="button" data-maker="'+mk+'" data-cat="'+cat+'">'+mark(mk,q)+'</button>'; found++; });
    h += '</div>';
  });
  if (!found) h = '<div class="cp-empty">목록에 없는 브랜드입니다.<br>그대로 입력하셔도 접수됩니다.</div>';
  brandPanel.innerHTML = h; brandPanel.classList.add('open'); modelPanel.classList.remove('open'); closeDt();
}
function brandOpen(){
  var exact = MAKERS.some(function(x){ return x.maker === brand.value.trim(); });
  showBrands(exact ? '' : brand.value);
}
brand.addEventListener('focus', brandOpen);
brand.addEventListener('click', brandOpen);
brand.addEventListener('input', function(){ showBrands(brand.value); });
brandPanel.addEventListener('click', function(e){
  var b = e.target.closest('button'); if (!b) return;
  brand.value = b.getAttribute('data-maker');
  var cat = b.getAttribute('data-cat');
  if (model.value.trim() && CAR_TREE[cat][brand.value].indexOf(model.value.trim()) === -1) model.value = '';
  closeAll();
  model.focus();
});

/* ── 차종 패널 ── */
function currentBrand(){
  var v = brand.value.trim();
  for (var i=0;i<MAKERS.length;i++) if (MAKERS[i].maker === v) return MAKERS[i];
  return null;
}
function showModels(q){
  q = (q||'').trim().toLowerCase();
  var sel = currentBrand();
  var h = '', found = 0;
  if (sel) {
    var hits = CAR_TREE[sel.cat][sel.maker].filter(function(m){ return !q || m.toLowerCase().indexOf(q) !== -1; });
    if (hits.length) {
      h += '<div class="cp-grid"><div class="cp-grp">'+sel.maker+'</div>';
      hits.forEach(function(m){ h += '<button type="button" data-model="'+m+'" data-maker="'+sel.maker+'">'+mark(m,q)+'</button>'; found++; });
      h += '</div>';
    }
  } else {
    if (!q) h += '<div class="cp-hint">브랜드를 먼저 고르면 좁혀서 보여드립니다. 바로 검색하셔도 됩니다.</div>';
    if (q) {
      var hits2 = FLAT.filter(function(x){
        return x.model.toLowerCase().indexOf(q) !== -1 || (x.maker+' '+x.model).toLowerCase().indexOf(q) !== -1;
      }).slice(0, 40);
      var lastMaker = null, inner = '';
      hits2.forEach(function(x){
        if (x.maker !== lastMaker) { inner += '<div class="cp-grp">'+x.maker+'</div>'; lastMaker = x.maker; }
        inner += '<button type="button" style="grid-column:1/-1" data-model="'+x.model+'" data-maker="'+x.maker+'">'+mark(x.model,q)+'</button>';
        found++;
      });
      if (found) h += '<div class="cp-grid">'+inner+'</div>';
    }
  }
  if (!found && q) h = '<div class="cp-empty">목록에 없는 차종입니다.<br>지금 쓰신 이름 그대로 접수됩니다 — 계속 입력하셔도 됩니다.</div>';
  modelPanel.innerHTML = h; modelPanel.classList.add('open'); brandPanel.classList.remove('open'); closeDt();
}
function modelOpen(){
  var sel = currentBrand();
  var exact = sel && CAR_TREE[sel.cat][sel.maker].indexOf(model.value.trim()) !== -1;
  showModels(exact ? '' : model.value);
}
model.addEventListener('focus', modelOpen);
model.addEventListener('click', modelOpen);
model.addEventListener('input', function(){ showModels(model.value); });
modelPanel.addEventListener('click', function(e){
  var b = e.target.closest('button'); if (!b) return;
  model.value = b.getAttribute('data-model');
  if (b.getAttribute('data-maker')) brand.value = b.getAttribute('data-maker');
  closeAll();
});
})();
