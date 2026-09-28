/* ---------- Laborator Excel: foaie de calcul + motor de formule ---------- */
window.XL_DATA = {
  A1:"Eveniment", B1:"An1", C1:"An2", D1:"Manual",
  A2:"Război civil", B2:1642, C2:1649, D2:"Manual 1",
  A3:"Restaurația Stuart", B3:1660, C3:1688, D3:"Manual 3",
  A4:"Dinastia Orania – Stuart", B4:1689, D4:"Manual 2",
  A5:"Dinastia de Hanovra", B5:1714, D5:"Manual 1",
  A6:"Republica", B6:1649, C6:1653, D6:"Manual 1",
  A7:"Protectoratul", B7:1653, C7:1660, D7:"Manual 2"
};
window.XL_TASKS = [
  {cell:"C10", text:"Afișează numărul de celule din C2:C9 care conțin valori numerice.", expect:4, fn:"COUNT", hint:"=COUNT(C2:C9)"},
  {cell:"B10", text:"Calculează suma valorilor din B2:B7.", expect:10007, fn:"SUM", hint:"=SUM(B2:B7)"},
  {cell:"C11", text:"Determină cel mai mare an din C2:C9.", expect:1688, fn:"MAX", hint:"=MAX(C2:C9)"},
  {cell:"B11", text:"Determină cel mai mic an din B2:B7.", expect:1642, fn:"MIN", hint:"=MIN(B2:B7)"},
  {cell:"B12", text:"Calculează media anilor din B2:B7, rotunjită la două zecimale.", expect:1667.83, fn:"ROUND", hint:"=ROUND(AVERAGE(B2:B7),2)"},
  {cell:"E2", text:"Calculează durata evenimentului din rândul 2 (An2 − An1).", expect:7, fn:"", hint:"=C2-B2"},
  {cell:"D10", text:"Numără de câte ori apare „Manual 1” în D2:D9.", expect:3, fn:"COUNTIF", hint:"=COUNTIF(D2:D9,\"Manual 1\")"},
  {cell:"E4", text:"Afișează textul „în curs” dacă C4 este goală, altfel diferența C4 − B4.", expect:"în curs", fn:"IF", hint:"=IF(C4=\"\",\"în curs\",C4-B4)"},
  {cell:"C12", text:"Numără celulele goale din C2:C9.", expect:4, fn:"COUNTBLANK", hint:"=COUNTBLANK(C2:C9)"},
  {cell:"D11", text:"Numără celulele nevide din A2:A9.", expect:6, fn:"COUNTA", hint:"=COUNTA(A2:A9)"},
  {cell:"D12", text:"Adună anii de început (B) doar pentru evenimentele din „Manual 1”.", expect:5005, fn:"SUMIF", hint:"=SUMIF(D2:D7,\"Manual 1\",B2:B7)"}
];

window.Formula = (function(){
  const colN = c => c.split("").reduce((a,ch)=>a*26+ch.charCodeAt(0)-64,0);
  const colL = n => { let s=""; while(n>0){ const m=(n-1)%26; s=String.fromCharCode(65+m)+s; n=Math.floor((n-1)/26);} return s; };
  function tokenize(s){
    const t=[]; let i=0;
    while(i<s.length){
      const ch=s[i];
      if(/\s/.test(ch)){i++;continue;}
      if(ch==='"'){ let j=i+1, v=""; while(j<s.length && s[j]!=='"'){v+=s[j];j++;} if(j>=s.length) throw "Ghilimele neînchise"; t.push({k:"str",v}); i=j+1; continue; }
      const m = s.slice(i).match(/^\$?([A-Za-z]{1,2})\$?(\d+)(:\$?([A-Za-z]{1,2})\$?(\d+))?/);
      const f = s.slice(i).match(/^[A-Za-zĂÂÎȘȚăâîșț_.]+(?=\s*\()/);
      if(f){ t.push({k:"fn",v:f[0].toUpperCase()}); i+=f[0].length; continue; }
      if(m){ t.push(m[3]?{k:"rng",a:(m[1]+m[2]).toUpperCase(),b:(m[4]+m[5]).toUpperCase()}:{k:"ref",v:(m[1]+m[2]).toUpperCase()}); i+=m[0].length; continue; }
      const n = s.slice(i).match(/^\d+(\.\d+)?/);
      if(n && !(t.length && t[t.length-1].k==="num")){ t.push({k:"num",v:parseFloat(n[0])}); i+=n[0].length; continue; }
      const op = s.slice(i).match(/^(<>|<=|>=|[+\-*/^&=<>(),;%])/);
      if(op){ t.push({k:"op",v:op[0]===";"?",":op[0]}); i+=op[0].length; continue; }
      throw "Caracter neașteptat: "+ch;
    }
    return t;
  }
  function evaluate(src, get){
    if(!src.startsWith("=")) throw "Formula trebuie să înceapă cu =";
    const t=tokenize(src.slice(1)); let p=0;
    const peek=()=>t[p], take=()=>t[p++];
    const expectOp=v=>{ const x=take(); if(!x||x.v!==v) throw "Lipsește „"+v+"”"; };
    const num=v=>{ if(v===null||v===undefined||v==="") return 0; if(typeof v==="boolean") return v?1:0; const n=Number(v); if(isNaN(n)) throw "#VALOARE! – text folosit în calcul"; return n; };
    const range=(a,b)=>{ const ma=a.match(/([A-Z]+)(\d+)/), mb=b.match(/([A-Z]+)(\d+)/); const out=[];
      for(let r=Math.min(+ma[2],+mb[2]); r<=Math.max(+ma[2],+mb[2]); r++) for(let c=Math.min(colN(ma[1]),colN(mb[1])); c<=Math.max(colN(ma[1]),colN(mb[1])); c++) out.push(get(colL(c)+r));
      return out; };
    function cmp(){ let a=cat(); while(peek()&&["=","<>","<",">","<=",">="].includes(peek().v)){ const o=take().v, b=cat();
      const x=(typeof a==="string"||typeof b==="string")?String(a??"").toLowerCase():num(a), y=(typeof a==="string"||typeof b==="string")?String(b??"").toLowerCase():num(b);
      a = o==="="?x===y:o==="<>"?x!==y:o==="<"?x<y:o===">"?x>y:o==="<="?x<=y:x>=y; } return a; }
    function cat(){ let a=add(); while(peek()&&peek().v==="&"){ take(); a=String(a??"")+String(add()??""); } return a; }
    function add(){ let a=mul(); while(peek()&&(peek().v==="+"||peek().v==="-")){ const o=take().v, b=mul(); a=o==="+"?num(a)+num(b):num(a)-num(b);} return a; }
    function mul(){ let a=pw(); while(peek()&&(peek().v==="*"||peek().v==="/")){ const o=take().v, b=pw(); if(o==="/"&&num(b)===0) throw "#DIV/0!"; a=o==="*"?num(a)*num(b):num(a)/num(b);} return a; }
    function pw(){ let a=un(); while(peek()&&peek().v==="^"){ take(); a=Math.pow(num(a),num(un())); } return a; }
    function un(){ if(peek()&&peek().v==="-"){ take(); return -num(un()); } if(peek()&&peek().v==="+"){ take(); return num(un()); } let v=prim(); if(peek()&&peek().v==="%"){take(); v=num(v)/100;} return v; }
    function args(){ expectOp("("); const a=[]; if(peek()&&peek().v===")"){take();return a;}
      while(true){ const x=peek(); if(x&&x.k==="rng"){ take(); a.push({rng:range(x.a,x.b)}); } else a.push(cmp()); const s=take(); if(!s) throw "Lipsește „)”"; if(s.v===")") break; if(s.v!==",") throw "Separator greșit între argumente"; }
      return a; }
    const flat=a=>a.flatMap(x=>x&&x.rng?x.rng:[x]);
    const crit=(val,c)=>{ let s=String(c), o="="; const m=s.match(/^(<>|<=|>=|=|<|>)(.*)$/); if(m){o=m[1];s=m[2];}
      const nv=Number(s), isN=s!==""&&!isNaN(nv);
      if(isN && typeof val==="number") return o==="="?val===nv:o==="<>"?val!==nv:o==="<"?val<nv:o===">"?val>nv:o==="<="?val<=nv:val>=nv;
      const a=String(val??"").toLowerCase(), b=s.toLowerCase(); return o==="<>"?a!==b:o==="="?a===b:false; };
    const F={
      SUM:a=>flat(a).filter(v=>typeof v==="number"||(!a.some(x=>x&&x.rng)&&v!=="")).reduce((s,v)=>s+num(v),0),
      AVERAGE:a=>{ const v=flat(a).filter(x=>typeof x==="number"); if(!v.length) throw "#DIV/0!"; return v.reduce((s,x)=>s+x,0)/v.length; },
      MIN:a=>{ const v=flat(a).filter(x=>typeof x==="number"); return v.length?Math.min(...v):0; },
      MAX:a=>{ const v=flat(a).filter(x=>typeof x==="number"); return v.length?Math.max(...v):0; },
      COUNT:a=>flat(a).filter(x=>typeof x==="number").length,
      COUNTA:a=>flat(a).filter(x=>x!==null&&x!==undefined&&x!=="").length,
      COUNTBLANK:a=>flat(a).filter(x=>x===null||x===undefined||x==="").length,
      COUNTIF:a=>{ if(!a[0]||!a[0].rng) throw "COUNTIF cere un domeniu"; return a[0].rng.filter(v=>crit(v,a[1])).length; },
      SUMIF:a=>{ if(!a[0]||!a[0].rng) throw "SUMIF cere un domeniu"; const s=a[2]&&a[2].rng?a[2].rng:a[0].rng; return a[0].rng.reduce((t,v,i)=>t+(crit(v,a[1])&&typeof s[i]==="number"?s[i]:0),0); },
      IF:a=>{ const c=a[0]; return (c===true||(typeof c==="number"&&c!==0)) ? (a[1]??true) : (a.length>2?a[2]:false); },
      ROUND:a=>{ const f=Math.pow(10,num(a[1]||0)); return Math.round(num(a[0])*f)/f; },
      ABS:a=>Math.abs(num(a[0])),
      AND:a=>flat(a).every(Boolean), OR:a=>flat(a).some(Boolean),
      LEN:a=>String(a[0]??"").length
    };
    function prim(){ const x=take(); if(!x) throw "Formulă incompletă";
      if(x.k==="num"||x.k==="str") return x.v;
      if(x.k==="ref") { const v=get(x.v); return v===undefined?null:v; }
      if(x.k==="rng") throw "Un domeniu (ex. B2:B9) se folosește doar într-o funcție";
      if(x.k==="fn"){ if(!F[x.v]) throw "Funcție necunoscută: "+x.v; return F[x.v](args()); }
      if(x.v==="("){ const v=cmp(); expectOp(")"); return v; }
      throw "Simbol neașteptat: "+x.v; }
    const r=cmp(); if(p<t.length) throw "Simbol în plus: "+t[p].v; return r;
  }
  return {evaluate, colL, colN};
})();

/* ---------- Laborator HTML ---------- */
window.HTML_START = `<html>
  <head>
    <title>Document de lucru</title>
  </head>
  <body>
    <p>Brăila este unul dintre cele mai importante porturi dunărene.</p>
    <p>Faleza oferă o priveliște largă asupra fluviului.</p>
    <p>Insula Mare a Brăilei este o zonă agricolă întinsă.</p>
    <p>Mai multe date găsiți în tabelul de lucru.</p>
  </body>
</html>`;
window.HTML_TASKS = [
  {text:"Colorează textul primelor două paragrafe cu verde (green).", hint:'<p style="color:green">…</p>',
   check:d=>{ const p=d.querySelectorAll("body p"); return p.length>=2 && [0,1].every(i=>getComputedStyle(p[i]).color==="rgb(0, 128, 0)"); }},
  {text:"Adaugă pe textul ultimului paragraf o legătură către fișierul comp_x.xlsx.", hint:'<p><a href="comp_x.xlsx">…</a></p>',
   check:d=>{ const p=d.querySelectorAll("body p"); const l=p[p.length-1]; return !!(l && l.querySelector('a[href*="comp_x"]')); }},
  {text:"Transformă primul paragraf în titlu de nivel 1.", hint:"<h1>Brăila este …</h1>",
   check:d=>{ const h=d.querySelector("body h1"); return !!(h && /Brăila/.test(h.textContent)); }},
  {text:"Aplică paragrafului „Faleza…” stilul aldin și alinierea centrată.", hint:'<p style="text-align:center"><b>Faleza…</b></p>',
   check:d=>{ const p=[...d.querySelectorAll("body p, body h1, body div")].find(x=>/Faleza/.test(x.textContent)); if(!p) return false; const cs=getComputedStyle(p); const b=p.querySelector("b,strong")||(+cs.fontWeight>=600?p:null); return !!b && cs.textAlign==="center"; }},
  {text:"Inserează la finalul paginii imaginea comp_i.jpg.", hint:'<img src="comp_i.jpg">',
   check:d=>{ const im=d.querySelectorAll('body img[src*="comp_i"]'); if(!im.length) return false; const all=d.body.querySelectorAll("*"); return all[all.length-1]===im[im.length-1] || all[all.length-1].contains(im[im.length-1]); }},
  {text:"Inserează după al doilea paragraf o listă marcată cu trei elemente.", hint:"<ul><li>soare</li><li>vânt</li><li>apă</li></ul>",
   check:d=>{ const u=d.querySelector("body ul"); return !!u && u.querySelectorAll("li").length===3; }},
  {text:"Stabilește fundalul paginii galben deschis (lightyellow).", hint:'<body style="background-color:lightyellow">',
   check:d=>getComputedStyle(d.body).backgroundColor==="rgb(255, 255, 224)"},
  {text:"Inserează un tabel cu 2 rânduri și 2 coloane.", hint:"<table border=\"1\"><tr><td>…</td><td>…</td></tr><tr>…</tr></table>",
   check:d=>{ const t=d.querySelector("body table"); if(!t) return false; const r=t.querySelectorAll("tr"); return r.length===2 && [...r].every(x=>x.querySelectorAll("td,th").length===2); }},
  {text:"Schimbă titlul paginii (fila browserului) în „Dunărea la Brăila”.", hint:"<title>Dunărea la Brăila</title>",
   check:d=>d.title.trim()==="Dunărea la Brăila"}
];
