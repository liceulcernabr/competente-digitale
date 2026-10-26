(function(){
"use strict";
const $ = (s,r=document)=>r.querySelector(s), $$=(s,r=document)=>[...r.querySelectorAll(s)];
const esc = s => String(s??"").replace(/[&<>"]/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]));
const main = $("#main");
const APPS = {word:"Word",ppt:"PowerPoint",excel:"Excel",html:"HTML",access:"Access",sistem:"Fișiere și arhive",web:"Fișa A – web",teorie:"Subiectul II"};
const LEVEL = p => p<=30?"Utilizator începător":p<=55?"Utilizator de nivel mediu":p<=74?"Utilizator avansat":"Utilizator experimentat";

/* ---------- stocare locală ---------- */
const KEY="probaD26";
let S={done:{},known:{},hist:[],theme:"auto"};
try{ const raw=localStorage.getItem(KEY); if(raw) S=Object.assign(S,JSON.parse(raw)); }catch(e){}
const save=()=>{ try{ localStorage.setItem(KEY,JSON.stringify(S)); }catch(e){} };

/* ---------- temă ---------- */
const themeBtn=$("#themeBtn");
function applyTheme(){ const r=document.documentElement; if(S.theme==="auto") r.removeAttribute("data-theme"); else r.setAttribute("data-theme",S.theme);
  themeBtn.textContent="Temă: "+({auto:"automată",light:"luminoasă",dark:"întunecată"}[S.theme]); }
themeBtn.onclick=()=>{ S.theme={auto:"light",light:"dark",dark:"auto"}[S.theme]; save(); applyTheme(); };
applyTheme();

/* ---------- meniu mobil ---------- */
const side=$("#side"), menuBtn=$("#menuBtn");
menuBtn.onclick=()=>{ const o=side.classList.toggle("open"); menuBtn.setAttribute("aria-expanded",o); };

/* ---------- toate sarcinile ---------- */
const ALL=[]; VARIANTS.forEach(v=>["A","B"].forEach(f=>v[f].forEach(t=>ALL.push(Object.assign({vid:v.id,vtitle:v.title,kit:v.kit,key:v.id+"|"+t.id},t)))));
(window.EXTRA_TASKS||[]).forEach(t=>ALL.push(Object.assign({vid:"banca",vtitle:"Banca de exerciții Access",kit:"resurse/kit_varianta4_oficial.zip",key:"banca|"+t.id},t)));
const sumPts = t => t.pts.reduce((s,p)=>s+p[0],0);

function solHTML(t){
  if(t.answer) return `<dl><dt>Model de răspuns</dt><dd>${esc(t.answer)}</dd></dl>`;
  return `<dl><dt>Microsoft Office / Windows</dt><dd>${esc(t.sol.ms)}</dd><dt>LibreOffice / Linux</dt><dd>${esc(t.sol.lo)}</dd></dl>
  <div class="meta">Barem: ${t.pts.map(p=>esc(p[1])+" – "+p[0]+"p").join(" · ")}</div>`;
}
function taskHTML(t,opts={}){
  const done=S.done[t.key];
  return `<div class="task" data-key="${esc(t.key)}">
    <span class="pts">${sumPts(t)}p</span>
    <div>${opts.showVar?`<span class="badge">${esc(APPS[t.app])}</span><span class="meta">${esc(t.vtitle)}</span><br>`:""}<span class="id">${esc(t.id)}</span>${esc(t.text)}</div>
    <div class="row noprint" style="margin-top:10px">
      <button class="btn small ghost" data-sol>Arată rezolvarea</button>
      ${t.app!=="teorie"&&t.app!=="web"?`<a class="btn small ghost" href="${esc(t.kit)}" download>Fișierele de lucru</a>`:""}
      ${opts.check!==false?`<label class="meta"><input type="checkbox" class="done-mark" data-done ${done?"checked":""}> Am rezolvat</label>`:""}
    </div>
    <div class="sol">${solHTML(t)}</div></div>`;
}
function wireTasks(root){
  $$("[data-sol]",root).forEach(b=>b.onclick=()=>{ const s=b.closest(".task").querySelector(".sol"); const o=s.classList.toggle("open"); b.textContent=o?"Ascunde rezolvarea":"Arată rezolvarea"; });
  $$("[data-done]",root).forEach(c=>c.onchange=()=>{ const k=c.closest(".task").dataset.key; if(c.checked) S.done[k]=1; else delete S.done[k]; save(); const pc=$("#pcount"); if(pc) pc.textContent=Object.keys(S.done).length; });
}

/* ---------- pagini ---------- */
const V={};

V.acasa=()=>{
  const practical=ALL.filter(t=>t.app!=="teorie").length, done=Object.keys(S.done).length;
  const last=S.hist[S.hist.length-1];
  main.innerHTML=`
  <section class="hero">
    <h1>Proba D, pas cu pas, pe fișierele adevărate</h1>
    <p>Teorie pe capitole, întrebări cu răspuns direct, exerciții pentru fiecare aplicație și simulări cronometrate cu barem. Lucrezi pe calculator, cu fișierele descărcate de aici, iar pe site îți verifici rezolvarea.</p>
    <div class="timeline" aria-label="Structura probei"><div><b>15 min</b><span>Fișa A · cu Internet</span></div><div><b>75 min</b><span>Fișa B · fără Internet · teorie + 15 cerințe practice</span></div></div>
  </section>
  <div class="grid">
    <a class="tile" href="#teorie"><h3>Teorie</h3><p>${THEORY.length} capitole, cu pașii pentru Microsoft Office și LibreOffice.</p></a>
    <a class="tile" href="#afise"><h3>Afișe recapitulative</h3><p>${POSTERS.length} afișe cu ce trebuie reținut la fiecare subiect. Se pot tipări.</p></a>
    <a class="tile" href="#intrebari"><h3>Subiectul II</h3><p>${OPEN_Q.length} întrebări cu model de răspuns.</p></a>
    <a class="tile" href="#grile"><h3>Grile rapide</h3><p>${MCQ.length} întrebări cu verificare automată.</p></a>
    <a class="tile" href="#exercitii"><h3>Exerciții practice</h3><p>${practical} cerințe pe aplicații. Rezolvate: <b id="pcount">${done}</b>.</p></a>
    <a class="tile" href="#lab"><h3>Laborator</h3><p>Scrii formule Excel și cod HTML direct pe site, cu verificare pe loc.</p></a>
    <a class="tile" href="#simulare"><h3>Simulare examen</h3><p>${VARIANTS.length} variante cu cronometru și autoevaluare după barem.${last?`<br>Ultima: <b>${last.score}p</b>`:""}</p></a>
  </div>
  <div class="sheet plain" style="margin-top:26px">
    <h2>Cum lucrezi</h2>
    <p>1. Descarcă arhiva unei variante din <a href="#descarcari">Descărcări</a> și dezarhiveaz-o: obții directorul <code>examen</code> cu fișierele <code>comp_w</code>, <code>comp_p</code>, <code>comp_x</code>, <code>comp_h</code>, <code>comp_a</code>, <code>comp_n</code>, <code>comp_i</code>, <code>comp_d</code>.</p>
    <p>2. Pornește <a href="#simulare">simularea</a> sau alege exerciții pe o aplicație. Rezolvă în Word/Excel/PowerPoint/Access sau LibreOffice.</p>
    <p>3. Deschide rezolvarea și bifează criteriile din barem pe care le-ai îndeplinit. Punctajul și nivelul se calculează automat.</p>
  </div>`;
};

V.teorie=(id)=>{
  const ch=THEORY.find(c=>c.id===id);
  if(!ch){
    main.innerHTML=`<h1>Teorie</h1><p class="muted">Alege un capitol. Fiecare tabel arată unde găsești comanda în Microsoft Office și în LibreOffice.</p>
    <div class="grid">${THEORY.map(c=>`<a class="tile" href="#teorie/${c.id}"><h3>${esc(c.title)}</h3><p>${esc(APPS[c.app]||"Informații generale")}</p></a>`).join("")}</div>`;
    return;
  }
  const i=THEORY.indexOf(ch), prev=THEORY[i-1], next=THEORY[i+1];
  const rel=ALL.filter(t=>t.app===ch.app).length, af=POSTERS.find(p=>p.theory===ch.id);
  main.innerHTML=`<p class="noprint"><a href="#teorie">← Toate capitolele</a>${af?` · <a href="#afise/${af.id}">Afișul capitolului</a>`:""}</p><div class="sheet plain"><h1>${esc(ch.title)}</h1><div class="tablewrap">${ch.html}</div></div>
  <div class="row noprint">${rel?`<a class="btn" href="#exercitii/${ch.app}">Exersează: ${rel} cerințe ${esc(APPS[ch.app])}</a>`:""}${af?`<a class="btn ghost" href="#afise/${af.id}">Afișul capitolului</a>`:""}
  ${prev?`<a class="btn ghost" href="#teorie/${prev.id}">← ${esc(prev.title)}</a>`:""}${next?`<a class="btn ghost" href="#teorie/${next.id}">${esc(next.title)} →</a>`:""}</div>`;
};

V.afise=(id)=>{
  const p=POSTERS.find(x=>x.id===id)||POSTERS[0], i=POSTERS.indexOf(p), prev=POSTERS[i-1], next=POSTERS[i+1];
  const grupe=[["Proba D",x=>x.id==="proba"],["Subiectul I",x=>x.tag.startsWith("Subiectul I ")],["Subiectul al II-lea",x=>x.tag.startsWith("Subiectul al II-lea")],["Subiectul al III-lea",x=>x.tag.startsWith("Subiectul al III-lea")]];
  main.innerHTML=`<h1 class="noprint">Afișe recapitulative</h1><p class="muted noprint">Ce trebuie să reții la fiecare subiect, pe o singură pagină. Alege un afiș; îl poți și tipări.</p>
  <div class="af-pick">${grupe.map(([n,f])=>`<div class="grp"><b>${n}</b>${POSTERS.filter(f).map(x=>`<a class="chip ${x===p?"on":""}" href="#afise/${x.id}">${esc(x.title)}</a>`).join("")}</div>`).join("")}</div>
  ${posterHTML(p)}
  <div class="row noprint"><button class="btn" type="button" onclick="print()">Tipărește afișul</button>
  <a class="btn ghost" href="#teorie/${p.theory}">Teoria completă</a>
  ${prev?`<a class="btn ghost" href="#afise/${prev.id}">← ${esc(prev.title)}</a>`:""}${next?`<a class="btn ghost" href="#afise/${next.id}">${esc(next.title)} →</a>`:""}</div>`;
};

V.intrebari=()=>{
  const cats=["Toate",...new Set(OPEN_Q.map(q=>q[0]))];
  let cat="Toate", idx=0, list=OPEN_Q.map((q,i)=>i);
  main.innerHTML=`<h1>Subiectul al II-lea</h1><p class="muted">Formulează răspunsul cu voce tare sau pe hârtie, apoi compară-l cu modelul. La examen se cer răspunsuri scurte, precise, cu exemplu unde se cere.</p>
  <div class="chips" id="cats">${cats.map(c=>`<button class="chip ${c===cat?"on":""}" data-c="${esc(c)}">${esc(c)}</button>`).join("")}</div>
  <div class="progress"><i id="bar"></i></div><div id="fc"></div>
  <h2 style="margin-top:34px">Toate întrebările</h2><div class="sheet plain" id="allq"></div>`;
  const render=()=>{
    const known=list.filter(i=>S.known[i]).length;
    $("#bar").style.width=(list.length?known/list.length*100:0)+"%";
    const i=list[idx], q=OPEN_Q[i];
    $("#fc").innerHTML=`<div class="sheet card-q"><span class="mlabel" style="top:28px">${idx+1}/${list.length}</span>
      <div><span class="badge">${esc(q[0])}</span><p class="q">${esc(q[1])}</p><div class="answer" id="ans"><b>Model de răspuns:</b> ${esc(q[2])}</div></div>
      <div class="row" style="margin-top:16px"><button class="btn" id="show">Arată răspunsul</button>
      <button class="btn ghost" id="knew">${S.known[i]?"✓ Știu":"Știu răspunsul"}</button>
      <button class="btn ghost" id="prev">← Anterioara</button><button class="btn ghost" id="next">Următoarea →</button>
      <span class="meta">Știute: ${known} din ${list.length}</span></div></div>`;
    $("#show").onclick=()=>$("#ans").classList.toggle("open");
    $("#knew").onclick=()=>{ if(S.known[i]) delete S.known[i]; else S.known[i]=1; save(); render(); };
    $("#prev").onclick=()=>{ idx=(idx-1+list.length)%list.length; render(); };
    $("#next").onclick=()=>{ idx=(idx+1)%list.length; render(); };
    $("#allq").innerHTML=list.map((i,n)=>`<details style="padding:8px 0;border-bottom:1px dashed var(--line)"><summary><b>${n+1}.</b> ${esc(OPEN_Q[i][1])}</summary><p>${esc(OPEN_Q[i][2])}</p></details>`).join("");
  };
  $$("#cats .chip").forEach(b=>b.onclick=()=>{ cat=b.dataset.c; idx=0; list=OPEN_Q.map((q,i)=>i).filter(i=>cat==="Toate"||OPEN_Q[i][0]===cat); $$("#cats .chip").forEach(x=>x.classList.toggle("on",x===b)); render(); });
  render();
};

V.grile=()=>{
  const order=MCQ.map((q,i)=>i).sort(()=>Math.random()-.5).slice(0,15);
  let pos=0, good=0;
  main.innerHTML=`<h1>Grile rapide</h1><p class="muted">15 întrebări alese la întâmplare din ${MCQ.length}. Reîncarcă pagina pentru un set nou.</p><div class="progress"><i id="bar"></i></div><div id="qz"></div>`;
  const render=()=>{
    $("#bar").style.width=(pos/order.length*100)+"%";
    if(pos>=order.length){
      $("#qz").innerHTML=`<div class="sheet plain"><div class="score">${good}/${order.length}</div><p>${good>=12?"Foarte bine – ești pregătit pentru Subiectul al II-lea.":good>=8?"Bine. Recitește capitolele de teorie la care ai greșit.":"Parcurge capitolele de teorie și reia testul."}</p><button class="btn" id="again">Set nou</button> <a class="btn ghost" href="#teorie/hardware">Teorie</a></div>`;
      $("#again").onclick=()=>V.grile(); return;
    }
    const q=MCQ[order[pos]];
    $("#qz").innerHTML=`<div class="sheet"><span class="mlabel" style="top:28px">${pos+1}</span><p style="font-family:var(--serif);font-size:1.25rem;font-weight:700;color:var(--ink)">${esc(q[0])}</p>
      ${q[1].map((o,i)=>`<button class="opt" data-i="${i}">${esc(o)}</button>`).join("")}<div class="row" style="margin-top:12px"><span class="msg" id="m"></span><button class="btn" id="nx" hidden>Următoarea →</button></div></div>`;
    $$(".opt").forEach(b=>b.onclick=()=>{
      if($("#nx").hidden===false) return;
      const i=+b.dataset.i; $$(".opt")[q[2]].classList.add("good");
      if(i===q[2]){ good++; $("#m").textContent="Corect"; $("#m").className="msg ok"; } else { b.classList.add("bad"); $("#m").textContent="Răspunsul corect este marcat cu verde"; $("#m").className="msg no"; }
      $("#nx").hidden=false; $("#nx").focus();
    });
    $("#nx").onclick=()=>{ pos++; render(); };
  };
  render();
};

V.exercitii=(app)=>{
  app = APPS[app]?app:"word";
  const counts=a=>ALL.filter(t=>t.app===a); 
  main.innerHTML=`<h1>Exerciții practice</h1><p class="muted">Cerințe grupate pe aplicații, din toate variantele. Fiecare are rezolvarea în Microsoft Office și LibreOffice și baremul de punctare. Descarcă fișierele variantei din care face parte cerința.</p>
  <div class="chips">${Object.keys(APPS).map(a=>{const c=counts(a), d=c.filter(t=>S.done[t.key]).length; return `<a class="chip ${a===app?"on":""}" href="#exercitii/${a}" style="text-decoration:none">${esc(APPS[a])} · ${d}/${c.length}</a>`;}).join("")}</div>
  <div class="sheet plain">
  ${app==="access"?`<p class="meta">Toate cerințele Access folosesc aceeași bază de date <code>comp_a.accdb</code> (tabela comp_t și interogarea comp_q), care se află în oricare dintre arhive. Lucrați de fiecare dată pe o copie nouă, dezarhivată din nou.</p>`:""}
  <p class="row noprint"><a class="btn small ghost" href="#teorie/${THEORY.find(c=>c.app===app)?.id||"examen"}">Teoria capitolului</a> <button class="btn small ghost" onclick="window.print()">Tipărește fișa</button></p>
  ${counts(app).map(t=>taskHTML(t,{showVar:true})).join("")}</div>`;
  wireTasks(main);
};

V.lab=(tab)=>{
  tab = tab==="html"?"html":"excel";
  main.innerHTML=`<h1>Laborator</h1><div class="chips"><a class="chip ${tab==="excel"?"on":""}" href="#lab/excel" style="text-decoration:none">Formule Excel</a><a class="chip ${tab==="html"?"on":""}" href="#lab/html" style="text-decoration:none">Cod HTML</a></div><div id="labbox"></div>`;
  tab==="excel"?labExcel():labHtml();
};

function labExcel(){
  const data=Object.assign({},XL_DATA); let ti=0; const solved={};
  const box=$("#labbox");
  box.innerHTML=`<p class="muted">Foaia este cea din <code>comp_x</code> (Varianta 4). Scrie formula în bara de formule; se acceptă atât <code>,</code> cât și <code>;</code> ca separator.</p>
  <div class="chips" id="xt"></div>
  <div class="sheet plain"><p id="xtask" style="font-weight:700"></p>
  <div class="fbar"><span id="xcell">C10</span><input id="xf" aria-label="Formula" placeholder="=..." autocomplete="off" spellcheck="false"><button class="btn" id="xgo">Verifică</button></div>
  <div class="row"><span class="msg" id="xmsg"></span><button class="btn small ghost" id="xhint">Indiciu</button></div>
  <div class="tablewrap" style="margin-top:12px"><table class="xl" id="xgrid"></table></div></div>`;
  const get=ref=>data[ref];
  const drawGrid=()=>{
    const cur=XL_TASKS[ti].cell; let h="<tr><th></th>"+"ABCDE".split("").map(c=>`<th>${c}</th>`).join("")+"</tr>";
    for(let r=1;r<=12;r++){ h+=`<tr><th>${r}</th>`; "ABCDE".split("").forEach(c=>{ const k=c+r, v=data[k]; const isF=XL_TASKS.some(t=>t.cell===k&&solved[k]!==undefined);
      h+=`<td class="${typeof v==="number"?"num":""} ${k===cur?"target":""} ${isF?"filled":""}" title="${k}">${v===undefined||v===null?"":esc(typeof v==="number"?+v.toFixed(2):v)}</td>`; }); h+="</tr>"; }
    $("#xgrid").innerHTML=h;
  };
  const drawTabs=()=>{ $("#xt").innerHTML=XL_TASKS.map((t,i)=>`<button class="chip ${i===ti?"on":""}" data-i="${i}">${solved[t.cell]!==undefined?"✓ ":""}${t.cell}</button>`).join("");
    $$("#xt .chip").forEach(b=>b.onclick=()=>{ ti=+b.dataset.i; show(); }); };
  const show=()=>{ const t=XL_TASKS[ti]; $("#xtask").textContent=t.cell+": "+t.text; $("#xcell").textContent=t.cell; $("#xf").value=""; $("#xmsg").textContent=""; drawTabs(); drawGrid(); $("#xf").focus(); };
  const run=()=>{
    const t=XL_TASKS[ti], f=$("#xf").value.trim(), m=$("#xmsg");
    try{
      const saved=data[t.cell]; delete data[t.cell];
      const r=Formula.evaluate(f,get);
      const okVal = typeof t.expect==="number" ? typeof r==="number" && Math.abs(r-t.expect)<0.005 : String(r)===t.expect;
      const okFn = !t.fn || new RegExp("\\b"+t.fn+"\\s*\\(","i").test(f);
      const noLit = /[A-Z]+\d+/i.test(f);
      if(okVal && okFn && noLit){ data[t.cell]=r; solved[t.cell]=f; m.textContent="Corect: "+(typeof r==="number"?+r.toFixed(2):r)+". Formula se actualizează automat dacă se schimbă datele."; m.className="msg ok"; drawTabs(); drawGrid(); }
      else { if(saved!==undefined) data[t.cell]=saved; m.className="msg no";
        m.textContent = !noLit ? "Ai scris o valoare, nu o formulă cu referințe la celule." : !okFn ? "Rezultat "+(typeof r==="number"?+r.toFixed(2):r)+" – folosește funcția "+t.fn+"." : "Rezultatul obținut este "+(typeof r==="number"?+r.toFixed(2):r)+". Verifică domeniul de celule."; }
    }catch(e){ m.textContent="Eroare: "+e; m.className="msg no"; }
  };
  $("#xgo").onclick=run; $("#xf").onkeydown=e=>{ if(e.key==="Enter") run(); };
  $("#xhint").onclick=()=>{ $("#xmsg").textContent="Indiciu: "+XL_TASKS[ti].hint; $("#xmsg").className="msg"; };
  show();
}

function labHtml(){
  const box=$("#labbox");
  box.innerHTML=`<p class="muted">Așa arată în cod ce faci în Word sau Writer/Web pe <code>comp_h</code>. Modifică codul; previzualizarea și lista de verificare se actualizează pe loc.</p>
  <div class="labsplit"><div><textarea class="code" id="hc" spellcheck="false" aria-label="Cod HTML"></textarea><div class="row" style="margin-top:8px"><button class="btn small ghost" id="hreset">Cod inițial</button></div></div>
  <div><iframe class="preview" id="hp" title="Previzualizare" sandbox="allow-same-origin"></iframe></div></div>
  <div class="sheet plain" style="margin-top:16px"><h3 style="margin-top:0">Cerințe (<span id="hscore">0</span>/${HTML_TASKS.length})</h3><ul class="checklist" id="hl"></ul></div>`;
  const ta=$("#hc"), fr=$("#hp");
  ta.value=HTML_START;
  const check=()=>{ const d=fr.contentDocument; if(!d||!d.body) return; let n=0;
    $("#hl").innerHTML=HTML_TASKS.map(t=>{ let ok=false; try{ ok=t.check(d); }catch(e){} if(ok) n++;
      return `<li class="${ok?"ok":""}"><span class="st">${ok?"✓":"○"}</span><span>${esc(t.text)}<br><span class="meta">Indiciu: <code>${esc(t.hint)}</code></span></span></li>`; }).join("");
    $("#hscore").textContent=n; };
  let tm; const upd=()=>{ clearTimeout(tm); tm=setTimeout(()=>{ fr.srcdoc=ta.value.replace("<head>",'<head><base target="_blank"><style>img{max-width:100%}</style>'); },250); };
  fr.onload=check; ta.oninput=upd; $("#hreset").onclick=()=>{ ta.value=HTML_START; upd(); }; upd();
}

/* ---------- simulare ---------- */
let SIM=null;
V.simulare=(id)=>{
  if(SIM&&SIM.timer){ clearInterval(SIM.timer); }
  const v=VARIANTS.find(x=>x.id===id);
  if(!v){
    main.innerHTML=`<h1>Simulare examen</h1><p class="muted">Alege o variantă. Descarcă mai întâi fișierele, dezarhivează-le și deschide directorul <code>examen</code>. Cronometrul pornește la apăsarea butonului.</p>
    <div class="grid">${VARIANTS.map(x=>`<div class="tile"><span class="badge ${x.official?"off":""}">${x.official?"Oficial CNCE":"Antrenament"}</span><h3 style="margin-top:8px">${esc(x.title)}</h3><p>${esc(x.theme)}</p>
      <div class="row" style="margin-top:12px"><a class="btn small" href="#simulare/${x.id}">Începe</a><a class="btn small ghost" href="${esc(x.kit)}" download>Fișierele</a></div></div>`).join("")}</div>
    ${S.hist.length?`<h2 style="margin-top:30px">Rezultatele tale</h2><div class="tablewrap"><table class="hist"><thead><tr><th>Data</th><th>Varianta</th><th>Punctaj</th><th>Nivel</th></tr></thead><tbody>${S.hist.slice().reverse().map(h=>`<tr><td>${esc(h.date)}</td><td>${esc(h.title)}</td><td><b>${h.score}</b></td><td>${esc(LEVEL(h.score))}</td></tr>`).join("")}</tbody></table></div><button class="btn small ghost" id="clr">Șterge istoricul</button>`:""}`;
    const c=$("#clr"); if(c) c.onclick=()=>{ S.hist=[]; save(); V.simulare(); };
    return;
  }
  SIM={v,phase:"start",left:0,timer:null};
  main.innerHTML=`<p><a href="#simulare">← Toate variantele</a></p><div class="sheet plain"><span class="badge ${v.official?"off":""}">${v.official?"Oficial CNCE":"Antrenament"}</span><h1 style="margin-top:8px">${esc(v.title)}</h1>
    <p>Timp de lucru: <b>15 minute</b> pentru fișa A (cu Internet) și <b>75 de minute</b> pentru fișa B (fără Internet). Salvează fișierele după fiecare cerință.</p>
    ${v.pdf?`<p>Documentele oficiale: <a href="${v.pdf.A}" target="_blank">Fișa A</a> · <a href="${v.pdf.B}" target="_blank">Fișa B</a> · <a href="${v.pdf.barem}" target="_blank">Barem</a></p>`:""}
    <div class="row"><a class="btn ghost" href="${esc(v.kit)}" download>1. Descarcă fișierele</a><button class="btn" id="go">2. Pornește fișa A</button><button class="btn ghost" id="skip">Doar evaluare, fără cronometru</button></div></div>`;
  $("#go").onclick=()=>phase("A"); $("#skip").onclick=()=>phase("eval");
};
function fmt(s){ return String(Math.floor(s/60)).padStart(2,"0")+":"+String(s%60).padStart(2,"0"); }
function phase(p){
  const v=SIM.v; SIM.phase=p; clearInterval(SIM.timer);
  if(p==="eval") return evalView();
  SIM.left = p==="A"?15*60:75*60;
  const tasks=v[p];
  main.innerHTML=`<div class="simhead"><div><b>${esc(v.title)}</b><br><span class="muted">Fișa ${p} · ${p==="A"?"Internetul este permis":"Internetul NU este permis"}</span></div>
    <div class="clock" id="clk" aria-live="off">${fmt(SIM.left)}</div>
    <div class="row">${p==="A"?`<button class="btn" id="nextP">Trec la fișa B</button>`:`<button class="btn" id="nextP">Am terminat – evaluez</button>`}</div></div>
  <div class="sheet"><span class="mlabel" style="top:28px">${p}</span>
    ${p==="A"?"<h2>Subiectul I (10 puncte)</h2>":"<h2>Subiectul al II-lea (15 puncte)</h2><p class=\"meta\">Scrie răspunsurile pe foaia de examen.</p>"}
    ${tasks.map((t,i)=>(p==="B"&&t.id==="III.1.a"?"<h2 style=\"margin-top:26px\">Subiectul al III-lea (75 de puncte)</h2>":"")+`<div class="task"><span class="pts">${sumPts(t)}p</span><span class="id">${esc(t.id)}</span>${esc(t.text)}</div>`).join("")}
  </div>`;
  $("#nextP").onclick=()=>phase(p==="A"?"B":"eval");
  SIM.timer=setInterval(()=>{ SIM.left--; const c=$("#clk"); if(!c){ clearInterval(SIM.timer); return; }
    c.textContent=fmt(Math.max(0,SIM.left)); c.classList.toggle("low",SIM.left<=(p==="A"?120:600));
    if(SIM.left<=0){ clearInterval(SIM.timer); phase(p==="A"?"B":"eval"); } },1000);
}
function evalView(){
  const v=SIM.v, tasks=[...v.A.map(t=>Object.assign({kit:v.kit,key:v.id+"|"+t.id},t)),...v.B.map(t=>Object.assign({kit:v.kit,key:v.id+"|"+t.id},t))];
  main.innerHTML=`<div class="simhead"><div><b>Autoevaluare – ${esc(v.title)}</b><br><span class="muted">Deschide fiecare fișier și bifează doar ce este îndeplinit exact.</span></div>
    <div><span class="score" id="sc">0</span><span class="muted"> / 100</span><div class="level" id="lv">${LEVEL(0)}</div></div>
    <button class="btn" id="saveR">Salvează rezultatul</button></div>
  <div class="sheet">${tasks.map((t,ti)=>`<div class="task" data-key="${esc(t.key)}"><span class="mlabel">${esc(t.id)}</span><span class="pts">${sumPts(t)}p</span><div>${esc(t.text)}</div>
    <div style="margin-top:8px">${t.pts.map((p,pi)=>`<label class="crit"><input type="checkbox" data-p="${p[0]}"><span>${esc(p[1])} <b>(${p[0]}p)</b></span></label>`).join("")}</div>
    <button class="btn small ghost" data-sol style="margin-top:6px">Arată rezolvarea</button><div class="sol">${solHTML(t)}</div></div>`).join("")}</div>`;
  const recalc=()=>{ const s=$$(".crit input:checked").reduce((a,c)=>a+ +c.dataset.p,0); $("#sc").textContent=s; $("#lv").textContent=LEVEL(s); return s; };
  $$(".crit input").forEach(c=>c.onchange=recalc);
  wireTasks(main);
  $("#saveR").onclick=()=>{ const s=recalc(); S.hist.push({date:new Date().toLocaleDateString("ro-RO"),title:v.title,score:s}); save(); $("#saveR").textContent="Salvat ✓"; $("#saveR").disabled=true; };
}

V.descarcari=()=>{
  main.innerHTML=`<h1>Descărcări</h1><p class="muted">Fiecare arhivă conține directorul <code>examen</code>, exact ca la probă. Dezarhivează pe Desktop și lucrează direct în el.</p>
  <div class="sheet plain"><div class="tablewrap"><table><thead><tr><th>Variantă</th><th>Temă</th><th>Fișiere</th></tr></thead><tbody>
  ${VARIANTS.map(v=>`<tr><td><b>${esc(v.title)}</b></td><td>${esc(v.theme)}</td><td><a class="btn small" href="${esc(v.kit)}" download>Descarcă .zip</a>${v.pdf?` <a class="btn small ghost" href="${v.pdf.A}" target="_blank">Fișa A</a> <a class="btn small ghost" href="${v.pdf.B}" target="_blank">Fișa B</a> <a class="btn small ghost" href="${v.pdf.barem}" target="_blank">Barem</a>`:""}</td></tr>`).join("")}
  </tbody></table></div>
  <h3>Pentru LibreOffice Base</h3><p>Fișierul <code>comp_a.accdb</code> se deschide cu Microsoft Access. Dacă lucrezi în LibreOffice Base, importă tabela din <a href="resurse/comp_t_pentru_Base.csv" download>comp_t_pentru_Base.csv</a> (separator punct și virgulă).</p>
  <h3>Tot site-ul, pentru lucru fără Internet</h3><p>Arhiva <a href="resurse/site_complet_offline.zip" download>site_complet_offline.zip</a> conține tot site-ul și toate fișierele. Dezarhiveaz-o și deschide <code>index.html</code> în browser.</p></div>`;
};

/* ---------- router ---------- */
function route(){
  const [page,arg]=(location.hash.slice(1)||"acasa").split("/");
  const fn=V[page]||V.acasa;
  $$("#nav a").forEach(a=>a.classList.toggle("on",a.getAttribute("href")==="#"+(V[page]?page:"acasa")));
  if(SIM&&SIM.timer&&page!=="simulare"){ clearInterval(SIM.timer); SIM=null; }
  fn(arg); side.classList.remove("open"); menuBtn.setAttribute("aria-expanded","false");
  window.scrollTo(0,0); main.focus({preventScroll:true});
}
window.addEventListener("hashchange",route); route();
})();
