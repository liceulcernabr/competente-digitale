/* Afișe recapitulative – câte unul pentru fiecare subiect al Probei D.
   Fiecare afiș are secțiuni de tipul:
     list  – listă numerotată          terms – termen – explicație (colorate ca markerul)
     keys  – taste și scurtături        chips – valori scurte, una lângă alta
   „theory” leagă afișul de capitolul de teorie cu același subiect. */
window.POSTERS = [
{ id:"proba", theory:"examen", tag:"Proba D", color:"#1e3a8a", title:"Proba D", sub:"pe scurt",
  intro:"Proba de evaluare a competențelor digitale durează <b>90 de minute</b> și are <b>100 de puncte</b>, fără puncte din oficiu.",
  sections:[
    {t:"list", h:"Structura probei", items:[
      "<b>Fișa A</b> – 15 minute, <b>cu</b> Internet: Subiectul I (10 p).",
      "<b>Fișa B</b> – 75 de minute, <b>fără</b> Internet.",
      "Subiectul al II-lea: 3 întrebări de teorie, cu răspuns scris (15 p).",
      "Subiectul al III-lea: 15 cerințe practice (75 p)."]},
    {t:"chips", h:"Niveluri de competență", items:["0–30 · începător","31–55 · mediu","56–74 · avansat","75–100 · experimentat"]},
    {t:"terms", h:"Fișierele din directorul examen", items:[
      ["comp_w","documentul Word / Writer"],["comp_n","documentul gol pentru Fișa A și capturi"],
      ["comp_p","prezentarea PowerPoint / Impress"],["comp_x","foaia de calcul Excel / Calc"],
      ["comp_h","pagina web – se editează în Word sau Writer/Web"],["comp_a","baza de date Access"],
      ["comp_i, comp_d","resurse: o imagine și un text"]]}],
  tip:"Salvează după fiecare cerință (Ctrl+S) și păstrează formatul și locul fișierului!"},

{ id:"web", theory:"web", tag:"Subiectul I · Fișa A · 10 p", color:"#1e3a8a", title:"Căutare pe web", sub:"Subiectul I",
  intro:"Ai <b>15 minute</b> și ai voie pe Internet. Cauți informații, salvezi pagini web și copiezi conținut în <b>comp_n</b>.",
  sections:[
    {t:"list", h:"Pașii, în ordine", items:[
      "Scrie pe foaia de examen răspunsurile cerute.",
      "Caută cu cuvinte cheie precise.",
      "Salvează pagina: Ctrl+S → <b>Pagină web, numai HTML</b> → directorul examen, cu numele implicit.",
      "Copiază paragraful cerut în comp_n.",
      "Imaginea: clic dreapta → Copiere imagine → lipește în comp_n.",
      "Copiază adresa paginii sub elementul lipit, apoi salvează comp_n."]},
    {t:"keys", h:"Scurtături utile", items:[["Ctrl+S","salvează pagina"],["Ctrl+F","caută în pagină"],["Ctrl+L","selectează adresa"],["Ctrl+C","copiază"],["Ctrl+V","lipește"]]},
    {t:"terms", h:"Atenție la termeni", items:[
      ["Numai HTML","doar fișierul .html – asta se cere"],["Pagină completă","creează și un folder – NU se cere"],
      ["Nume implicit","nu redenumești fișierul propus"],["URL","adresa din bara de adrese"]]}],
  tip:"Wikipedia în limba română este de obicei suficientă. Nu uita să salvezi comp_n!"},

{ id:"hardware", theory:"hardware", tag:"Subiectul al II-lea · teorie", color:"#5b3a9e", title:"Echipamente și software", sub:"Subiectul al II-lea",
  intro:"Întrebări scurte despre componentele calculatorului, periferice, unități de măsură și tipuri de programe.",
  sections:[
    {t:"terms", h:"Componente hardware", items:[
      ["Procesor (CPU)","execută instrucțiunile; GHz, nuclee, cache"],["RAM","memorie volatilă pentru programele în lucru"],
      ["ROM","nevolatilă, conține BIOS/UEFI"],["HDD","disc magnetic: ieftin, mai lent, sensibil la șocuri"],
      ["SSD","memorie flash: rapid, silențios, fără piese mobile"],["Placa de bază","conectează toate componentele"],
      ["Placa video (GPU)","procesează imaginea pentru monitor"]]},
    {t:"list", h:"Periferice", items:[
      "<b>Intrare:</b> tastatură, mouse, scanner, microfon, cameră web.",
      "<b>Ieșire:</b> monitor, imprimantă, boxe, căști, videoproiector.",
      "<b>Intrare-ieșire:</b> ecran tactil, stick USB, multifuncțională, placă de rețea."]},
    {t:"chips", h:"Unități de măsură", items:["1 byte = 8 biți","1 KB = 1024 B","1 MB = 1024 KB","1 GB = 1024 MB","1 TB = 1024 GB","procesor: GHz","conexiune: Mbps"]},
    {t:"terms", h:"Software", items:[
      ["De sistem","sistemul de operare, drivere, utilitare"],["De aplicație","editoare de text, browsere, jocuri"],
      ["Freeware","gratuit"],["Shareware","gratuit o perioadă"],["Open source","cod sursă disponibil: Linux, LibreOffice"],["Comercial","se plătește licența"]]}],
  tip:"Răspunde scurt și precis: o definiție și un exemplu."},

{ id:"internet", theory:"internet", tag:"Subiectul al II-lea · teorie", color:"#5b3a9e", title:"Internet, e-mail, securitate", sub:"Subiectul al II-lea",
  intro:"Noțiuni despre rețele, navigare, poșta electronică și protecția datelor.",
  sections:[
    {t:"terms", h:"Internet", items:[
      ["LAN","rețea locală (școală, casă)"],["WAN","rețea pe arie largă – ex. Internetul"],
      ["Browser","afișează pagini web: Chrome, Firefox, Edge"],["Motor de căutare","Google, Bing, DuckDuckGo"],
      ["URL","adresa unei resurse: protocol, domeniu, cale"],["HTTPS","conexiune criptată (lacătul)"],
      ["Cookie","fișier mic salvat de site în browser"],["Cloud","stocare pe servere: Drive, OneDrive"]]},
    {t:"terms", h:"E-mail", items:[
      ["Reply","răspuns către expeditor, „Re:”, fără atașamente"],["Reply all","răspuns către toți destinatarii"],
      ["Forward","trimite mai departe, cu atașamente, „Fw:”"],["CC","copie vizibilă tuturor"],
      ["BCC","copie ascunsă"],["Spam","mesaje nesolicitate, trimise în masă"]]},
    {t:"terms", h:"Programe periculoase (malware)", items:[
      ["Virus","se atașează fișierelor"],["Vierme","se răspândește singur în rețea"],
      ["Troian","se deghizează în program util"],["Ransomware","criptează fișierele, cere bani"],["Spyware","spionează utilizatorul"]]},
    {t:"list", h:"Cum te protejezi", items:[
      "Antivirus actualizat și firewall.","Actualizările sistemului.","Parole puternice, diferite + autentificare în doi pași (2FA).",
      "Copii de siguranță (backup).","Atenție la phishing: nu deschide linkuri suspecte."]}],
  tip:"Dreptul de autor: citezi sursa. GDPR: protejează datele personale."},

{ id:"word", theory:"word", tag:"Subiectul al III-lea · comp_w", color:"#2b579a", title:"Word / Writer", sub:"Procesare de text",
  intro:"Cerințele din <b>comp_w</b>: formatarea textului și a paginii, tabele, imagini, antet și subsol.",
  sections:[
    {t:"keys", h:"Scurtături", items:[["Ctrl+B","aldin"],["Ctrl+I","cursiv"],["Ctrl+U","subliniat"],["Ctrl+E","centrat"],["Ctrl+J","aliniere stânga-dreapta"],["Ctrl+D","fereastra Font"],["Ctrl+H","înlocuire"],["Ctrl+Enter","pagină nouă"],["Ctrl+End","finalul documentului"]]},
    {t:"terms", h:"Unde găsești (Word)", items:[
      ["Paragraf","Pornire → Paragraf: indentare, spațiere"],["Orientare, margini, coloane","fila Aspect"],
      ["Antet, subsol, nr. pagină","fila Inserare"],["Letrină","Inserare → Letrină"],
      ["Bordură pagină, filigran","fila Proiectare"],["SmartArt","Inserare → SmartArt"],
      ["Notă de subsol, cuprins","fila Referințe"],["Comentariu","Revizuire → Comentariu nou"]]},
    {t:"list", h:"Capcane frecvente", items:[
      "„În tot documentul” = <b>Înlocuire totală</b>.",
      "Paragrafele se numără fără rândurile goale.",
      "„La final” = Ctrl+End înainte de lipire."]}],
  tip:"Writer: aproape totul e în meniul Format (Caracter, Paragraf, Stil pagină)."},

{ id:"ppt", theory:"ppt", tag:"Subiectul al III-lea · comp_p", color:"#b7472a", title:"PowerPoint / Impress", sub:"Prezentări",
  intro:"Cerințele din <b>comp_p</b>: diapozitive, fundal, tranziții, animații, legături și expuneri.",
  sections:[
    {t:"terms", h:"Unde găsești (PowerPoint)", items:[
      ["Diapozitiv nou, aspect","fila Pornire"],["Fundal","Proiectare → Formatare fundal"],
      ["Tranziții","fila Tranziții; Avansare: După"],["Animații","fila Animații → Opțiuni efect"],
      ["Antet, subsol, numerotare","Inserare → Antet și subsol"],["Expunere particularizată","Expunere diapozitive → Nou"],
      ["Note","panoul Note, sub diapozitiv"],["PDF","Fișier → Salvare ca → PDF"]]},
    {t:"chips", h:"Animații", items:["Intrare","Evidențiere","Ieșire","La clic","Cu anteriorul","După anteriorul"]},
    {t:"keys", h:"Scurtături", items:[["Ctrl+M","diapozitiv nou"],["Ctrl+D","dublare"],["Ctrl+K","hyperlink"],["F5","expunere de la început"],["Shift+F5","de la diapozitivul curent"]]}],
  tip:"„Pe toate diapozitivele” = butonul Se aplică la toate. Numărătoarea urmează panoul din stânga."},

{ id:"excel", theory:"excel", tag:"Subiectul al III-lea · comp_x", color:"#1d6f42", title:"Excel / Calc", sub:"Calcul tabelar",
  intro:"Cerințele din <b>comp_x</b>: formule, funcții, formatare, sortare, filtrare și diagrame.",
  sections:[
    {t:"list", h:"Regulile formulelor", items:[
      "Orice formulă începe cu <code>=</code>.",
      "Referința <b>relativă</b> <code>B2</code> se schimbă la copiere.",
      "Referința <b>absolută</b> <code>$B$2</code> rămâne fixă (tasta F4).",
      "Separatorul poate fi <code>,</code> sau <code>;</code> (setări românești)."]},
    {t:"terms", h:"Funcții de bază", items:[
      ["SUM","suma: <code>=SUM(B2:B9)</code>"],["AVERAGE","media: <code>=AVERAGE(B2:B9)</code>"],
      ["MIN / MAX","minimul / maximul"],["COUNT","câte celule au numere"],
      ["COUNTA","câte celule nu sunt goale"],["COUNTBLANK","câte celule sunt goale"],
      ["COUNTIF","numără cu condiție: <code>=COUNTIF(D2:D9,\"X\")</code>"],["SUMIF","adună cu condiție"],
      ["IF","<code>=IF(C2&gt;100,\"da\",\"nu\")</code>"],["ROUND","rotunjire: <code>=ROUND(B10,2)</code>"]]},
    {t:"terms", h:"Unde găsești (Excel)", items:[
      ["Format numeric","Ctrl+1 → Număr"],["Îmbinare și centrare","fila Pornire"],
      ["Sortare, filtru","fila Date"],["Formatare condiționată","fila Pornire"],
      ["Diagramă","fila Inserare"],["Înghețare panouri","fila Vizualizare"]]}],
  tip:"Verifică rezultatul: copiază formula în jos și urmărește dacă referințele se schimbă corect."},

{ id:"html", theory:"html", tag:"Subiectul al III-lea · comp_h", color:"#b8401c", title:"Pagini web", sub:"comp_h.html",
  intro:"<b>comp_h.html</b> se deschide cu <b>Word</b> (clic dreapta → Deschidere cu) sau <b>LibreOffice Writer/Web</b> – nu cu browserul. La salvare rămâne HTML.",
  sections:[
    {t:"terms", h:"Ce se întâmplă în cod", items:[
      ["Paragraf","<code>&lt;p&gt;…&lt;/p&gt;</code>"],["Titlu de nivel 1","<code>&lt;h1&gt;…&lt;/h1&gt;</code>"],
      ["Aldin, cursiv, subliniat","<code>&lt;b&gt;</code> <code>&lt;i&gt;</code> <code>&lt;u&gt;</code>"],["Legătură","<code>&lt;a href=\"comp_x.xlsx\"&gt;</code>"],
      ["Imagine","<code>&lt;img src=\"comp_i.jpg\"&gt;</code>"],["Liste","<code>&lt;ul&gt;</code> / <code>&lt;ol&gt;</code> cu <code>&lt;li&gt;</code>"],
      ["Tabel","<code>&lt;table&gt;&lt;tr&gt;&lt;td&gt;</code>"],["Titlul paginii","<code>&lt;title&gt;</code>, în <code>&lt;head&gt;</code>"],
      ["Culoare text","<code>style=\"color:green\"</code>"],["Fundal pagină","<code>background-color</code> pe <code>&lt;body&gt;</code>"]]},
    {t:"list", h:"Pașii", items:[
      "Deschide comp_h cu Word sau Writer/Web.","Formatează ca într-un document obișnuit.",
      "Legătura spre un fișier din același director: doar numele lui.","Salvează în format HTML, apoi verifică pagina în browser."]}],
  tip:"Nu transforma comp_h în .docx – pierzi punctajul!"},

{ id:"access", theory:"access", tag:"Subiectul al III-lea · comp_a", color:"#a4373a", title:"Access", sub:"Baze de date",
  intro:"Cerințele din <b>comp_a</b>: înregistrări, câmpuri, interogări, formulare și rapoarte.",
  sections:[
    {t:"terms", h:"Termeni", items:[
      ["Tabel","păstrează datele pe rânduri și coloane"],["Înregistrare","un rând"],["Câmp","o coloană"],
      ["Cheie primară","identifică unic fiecare înregistrare"],["Interogare","selectează, sortează, calculează"],
      ["Formular","pentru introducerea datelor"],["Raport","prezentare pentru tipărire"]]},
    {t:"terms", h:"Unde găsești", items:[
      ["Câmp nou, tip, dimensiune","clic dreapta pe tabel → Vizualizare proiect"],["Interogare","Creare → Proiectare interogare"],
      ["Câmp calculat","<code>Total: [Glucoză]+[Fructoză]</code>"],["Formular, raport","Creare → Expert"],
      ["Orientare raport","Inițializare pagină → Vedere"]]},
    {t:"chips", h:"Criterii în interogări", items:["\"Magazin 1\"","&gt;2","Between 1 And 3","Like \"p*\""]}],
  tip:"Salvează fiecare obiect cu numele exact din cerință (de exemplu comp_ved)."},

{ id:"fisiere", theory:"fisiere", tag:"Subiectul al III-lea · sistem", color:"#7a5c00", title:"Fișiere, arhive, capturi", sub:"Sistemul de operare",
  intro:"Cerințe despre directoare, fișiere, arhive și capturi de ecran.",
  sections:[
    {t:"keys", h:"Scurtături", items:[["Ctrl+Shift+N","director nou"],["F2","redenumire"],["Ctrl+X","mutare"],["Ctrl+clic","selecție separată"],["Shift+clic","selecție interval"],["Alt+PrtScn","captura ferestrei active"],["Win+Shift+S","captură decupată"]]},
    {t:"terms", h:"Unde găsești (Windows)", items:[
      ["Arhivă .zip","clic dreapta → Comprimare în fișier ZIP"],["Comandă rapidă","clic dreapta → Creare comandă rapidă"],
      ["Atribute","Proprietăți → Doar în citire / Ascuns"],["Moduri de afișare","Vizualizare → Listă / Detalii"],
      ["Sortare","clic pe antetul coloanei (Detalii)"],["Căutare","caseta Căutare: <code>*.docx</code>"]]},
    {t:"list", h:"Captura de ecran", items:[
      "Pregătește fereastra exact cum se cere.","Apasă Alt+PrtScn.","Deschide documentul cerut și apasă Ctrl+End.","Ctrl+V, apoi Ctrl+S."]}],
  tip:"Nu da clic în altă parte după selecție, înainte de captură!"}
];

window.posterHTML = function(p){
  const sec = s => {
    let body = "";
    if(s.t==="list") body = `<ol class="af-list">${s.items.map((x,i)=>`<li><span class="af-n">${i+1}</span><span>${x}</span></li>`).join("")}</ol>`;
    if(s.t==="terms") body = `<dl class="af-tl">${s.items.map(([t,d],i)=>`<div><dt class="mk${i%6}">${t}</dt><dd><span class="mk${i%6} soft">${d}</span></dd></div>`).join("")}</dl>`;
    if(s.t==="keys") body = `<div class="af-keys">${s.items.map(([k,d])=>`<span>${k.split("+").map(x=>`<kbd>${x}</kbd>`).join("+")} <em>${d}</em></span>`).join("")}</div>`;
    if(s.t==="chips") body = `<div class="af-chips">${s.items.map(x=>`<span>${x}</span>`).join("")}</div>`;
    return `<section class="af-sec af-${s.t}"><h3 class="af-h">${s.h}</h3>${body}</section>`;
  };
  return `<article class="afis" style="--af-c:${p.color}" aria-labelledby="af-${p.id}">
    <div class="af-holes" aria-hidden="true"><i></i><i></i><i></i></div>
    <div class="af-in">
      <div class="af-top"><span>Liceul Teoretic „Panait Cerna” Brăila · Proba D</span><span class="af-tag">${p.tag}</span></div>
      <h2 class="af-title" id="af-${p.id}">${p.title} <span>– ${p.sub}</span></h2>
      <p class="af-intro">${p.intro}</p>
      <div class="af-grid">${p.sections.map(sec).join("")}</div>
      <p class="af-ribbon">${p.tip} <span aria-hidden="true">★</span></p>
    </div></article>`;
};
