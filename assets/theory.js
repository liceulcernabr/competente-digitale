/* Capitole de teorie – Proba D, competențe digitale */
window.THEORY = [
{ id:"examen", app:"general", title:"Cum arată proba", html:`
<p>Proba D durează <b>90 de minute</b>: <b>15 minute pentru fișa A</b> (cu Internet) și <b>75 de minute pentru fișa B</b> (fără Internet). Punctajul maxim este 100, fără puncte din oficiu.</p>
<table><thead><tr><th>Parte</th><th>Ce conține</th><th>Puncte</th></tr></thead><tbody>
<tr><td>Fișa A – Subiectul I</td><td>Căutare pe web, salvare pagină „numai HTML”, copiere paragraf + imagine + adrese în <code>comp_n</code></td><td>10</td></tr>
<tr><td>Fișa B – Subiectul al II-lea</td><td>3 întrebări cu răspuns scris pe foaia de examen (hardware, software, Internet, e-mail, securitate)</td><td>15</td></tr>
<tr><td>Fișa B – Subiectul al III-lea</td><td>15 cerințe practice: Word, PowerPoint, Excel, HTML, Access, fișiere/arhive/captură</td><td>75</td></tr></tbody></table>
<h3>Fișierele din directorul examen</h3>
<table><thead><tr><th>Fișier</th><th>Se deschide cu</th></tr></thead><tbody>
<tr><td><code>comp_w.docx</code></td><td>Word / LibreOffice Writer</td></tr>
<tr><td><code>comp_n.docx</code></td><td>Word / Writer – documentul gol pentru fișa A sau pentru capturi</td></tr>
<tr><td><code>comp_p.pptx</code></td><td>PowerPoint / LibreOffice Impress</td></tr>
<tr><td><code>comp_x.xlsx</code></td><td>Excel / LibreOffice Calc</td></tr>
<tr><td><code>comp_h.html</code></td><td>Word („Deschidere cu”) / LibreOffice Writer/Web – <b>nu</b> cu browserul, acolo nu se poate edita</td></tr>
<tr><td><code>comp_a.accdb</code></td><td>Access (LibreOffice Base nu deschide direct fișiere .accdb)</td></tr>
<tr><td><code>comp_i.jpg</code>, <code>comp_d.txt</code></td><td>Resurse: imagine, text</td></tr></tbody></table>
<h3>Niveluri de competență</h3>
<table><thead><tr><th>Punctaj</th><th>Nivel</th></tr></thead><tbody>
<tr><td>0–30</td><td>Utilizator începător</td></tr><tr><td>31–55</td><td>Utilizator de nivel mediu</td></tr>
<tr><td>56–74</td><td>Utilizator avansat</td></tr><tr><td>75–100</td><td>Utilizator experimentat</td></tr></tbody></table>
<div class="tip"><b>Regula de aur:</b> salvați după fiecare cerință (Ctrl+S) și păstrați formatul original al fișierului. Un fișier salvat în alt format sau în alt director poate duce la pierderea punctajului.</div>`},

{ id:"hardware", app:"teorie", title:"Echipamente și software", html:`
<h3>Componente hardware</h3>
<table><tbody>
<tr><td><b>Procesor (CPU)</b></td><td>Execută instrucțiunile. Performanța: frecvență (GHz), număr de nuclee, cache.</td></tr>
<tr><td><b>Memoria RAM</b></td><td>Volatilă, citire/scriere, păstrează programele și datele în lucru.</td></tr>
<tr><td><b>Memoria ROM</b></td><td>Nevolatilă, conține firmware-ul de pornire (BIOS/UEFI).</td></tr>
<tr><td><b>HDD</b></td><td>Platane magnetice rotative + cap de citire. Ieftin la capacitate mare, mai lent, sensibil la șocuri.</td></tr>
<tr><td><b>SSD</b></td><td>Memorie flash, fără piese mobile. Rapid, silențios, rezistent la șocuri, consum mic; mai scump pe GB.</td></tr>
<tr><td><b>Placa de bază</b></td><td>Conectează toate componentele (procesor, memorii, plăci de extensie).</td></tr>
<tr><td><b>Placa video (GPU)</b></td><td>Procesează imaginea trimisă către monitor.</td></tr></tbody></table>
<h3>Periferice</h3>
<p><b>Intrare:</b> tastatură, mouse, scanner, microfon, cameră web, touchpad. <b>Ieșire:</b> monitor, imprimantă, boxe, căști, videoproiector. <b>Intrare-ieșire:</b> ecran tactil, stick USB, imprimantă multifuncțională, placă de rețea.</p>
<h3>Unități de măsură</h3>
<p>1 byte (octet) = 8 biți · 1 KB = 1024 B · 1 MB = 1024 KB · 1 GB = 1024 MB · 1 TB = 1024 GB. Frecvența procesorului se măsoară în Hz (GHz), rezoluția ecranului în pixeli, viteza conexiunii în biți pe secundă (Mbps).</p>
<h3>Software</h3>
<table><tbody>
<tr><td><b>De sistem</b></td><td>Sistemul de operare (Windows, Linux, macOS, Android), driverele, utilitarele.</td></tr>
<tr><td><b>De aplicație</b></td><td>Procesoare de text, calcul tabelar, browsere, jocuri, editoare grafice.</td></tr>
<tr><td><b>Licențe</b></td><td>Comercial (se plătește), freeware (gratuit), shareware (gratuit o perioadă), open source (cod sursă disponibil – ex. LibreOffice, Linux).</td></tr></tbody></table>
<h3>Fereastra unei aplicații</h3>
<p>Bara de titlu (numele fișierului + butoanele Minimizare / Maximizare / Închidere), bara de meniuri sau panglica (ribbon), bara de instrumente, bara de stare (jos: pagina, zoom, limba), barele de derulare verticală și orizontală.</p>`},

{ id:"internet", app:"teorie", title:"Internet, e-mail, securitate", html:`
<h3>Noțiuni de bază</h3>
<table><tbody>
<tr><td><b>LAN / WAN</b></td><td>LAN – rețea locală (școală, casă). WAN – rețea pe arie largă; Internetul este cea mai mare rețea WAN.</td></tr>
<tr><td><b>Browser</b></td><td>Aplicația care afișează pagini web: Chrome, Firefox, Edge, Safari.</td></tr>
<tr><td><b>Motor de căutare</b></td><td>Serviciu care găsește pagini după cuvinte cheie: Google, Bing, DuckDuckGo.</td></tr>
<tr><td><b>URL</b></td><td>Adresa unei resurse: <code>https://www.edu.ro/pagina</code> – protocol, domeniu, cale.</td></tr>
<tr><td><b>HTTPS</b></td><td>Conexiune criptată (lacătul din bara de adrese).</td></tr>
<tr><td><b>Cookie</b></td><td>Fișier mic salvat de site în browser (preferințe, autentificare).</td></tr>
<tr><td><b>Cloud</b></td><td>Stocare și aplicații pe servere accesate prin Internet: Google Drive, OneDrive.</td></tr></tbody></table>
<h3>E-mail</h3>
<table><tbody>
<tr><td><b>Reply / Răspuns</b></td><td>Mesaj nou către expeditor, subiect „Re: …”, fără atașamentele primite.</td></tr>
<tr><td><b>Reply all</b></td><td>Răspuns către expeditor și toți destinatarii mesajului.</td></tr>
<tr><td><b>Forward / Redirecționare</b></td><td>Trimite mesajul primit, cu atașamente, către o adresă nouă; subiect „Fw: …”.</td></tr>
<tr><td><b>CC</b></td><td>Copie vizibilă tuturor destinatarilor.</td></tr>
<tr><td><b>BCC</b></td><td>Copie ascunsă – ceilalți nu văd aceste adrese.</td></tr>
<tr><td><b>Atașament</b></td><td>Fișier trimis împreună cu mesajul.</td></tr>
<tr><td><b>Spam</b></td><td>Mesaje nesolicitate, trimise în masă.</td></tr></tbody></table>
<h3>Securitate</h3>
<p><b>Malware:</b> virus (se atașează fișierelor), vierme (se răspândește singur în rețea), troian (se deghizează în program util), ransomware (criptează fișierele și cere răscumpărare), spyware (spionează).</p>
<p><b>Protecție:</b> antivirus actualizat, firewall (filtrează traficul de rețea), actualizări ale sistemului, parole puternice și diferite, autentificare în doi pași (2FA), copii de siguranță (backup), atenție la phishing.</p>
<p><b>Drepturi și date personale:</b> dreptul de autor protejează conținutul (nu se preia fără citarea sursei); GDPR reglementează prelucrarea datelor personale.</p>`},

{ id:"fisiere", app:"sistem", title:"Fișiere, directoare, arhive, capturi", html:`
<table><thead><tr><th>Operație</th><th>Windows</th><th>Linux (Ubuntu / Mint)</th></tr></thead><tbody>
<tr><td>Director nou</td><td>Clic dreapta → Nou → Folder (Ctrl+Shift+N)</td><td>Clic dreapta → Dosar nou</td></tr>
<tr><td>Redenumire</td><td>F2</td><td>F2</td></tr>
<tr><td>Copiere / mutare</td><td>Ctrl+C / Ctrl+X, apoi Ctrl+V</td><td>idem</td></tr>
<tr><td>Selecție multiplă</td><td>Ctrl+clic (elemente separate), Shift+clic (interval)</td><td>idem</td></tr>
<tr><td>Moduri de afișare</td><td>Vizualizare → Pictograme mari / Listă / Detalii / Dale</td><td>Vizualizare → Pictograme / Listă</td></tr>
<tr><td>Sortare</td><td>Clic pe antetul coloanei în modul Detalii</td><td>Clic pe coloană</td></tr>
<tr><td>Proprietăți, atribute</td><td>Clic dreapta → Proprietăți → Doar în citire / Ascuns</td><td>Proprietăți → Permisiuni</td></tr>
<tr><td>Arhivă .zip</td><td>Clic dreapta → Trimitere la → Folder comprimat (zip); Windows 11: Comprimare în fișier ZIP</td><td>Clic dreapta → Comprimare…</td></tr>
<tr><td>Comandă rapidă</td><td>Clic dreapta → Creare comandă rapidă</td><td>Clic dreapta → Creează legătură</td></tr>
<tr><td>Căutare fișiere</td><td>Caseta Căutare din Explorer: <code>*.docx</code></td><td>Ctrl+F în managerul de fișiere</td></tr></tbody></table>
<h3>Captura de ecran</h3>
<p><b>PrtScn</b> – tot ecranul; <b>Alt+PrtScn</b> – doar fereastra activă (recomandat la examen); <b>Win+Shift+S</b> – decupare. Imaginea ajunge în clipboard: deschideți documentul cerut, <b>Ctrl+End</b> (finalul documentului), <b>Ctrl+V</b>, apoi salvați.</p>
<div class="tip">Captura trebuie să arate exact ce se cere: fereastra corectă, modul de afișare cerut și selecția vizibilă. Nu dați clic în altă parte după selecție înainte de captură.</div>`},

{ id:"web", app:"web", title:"Fișa A – căutare pe web", html:`
<p>Ai 15 minute. Scrie întâi datele pe foaia de examen, apoi salvează paginile.</p>
<h3>Salvarea paginii „numai HTML”</h3>
<table><thead><tr><th>Browser</th><th>Pași</th></tr></thead><tbody>
<tr><td>Chrome / Edge</td><td>Ctrl+S → Tip: <b>Pagină web, numai HTML</b> → directorul examen → Salvare, fără a modifica numele</td></tr>
<tr><td>Firefox</td><td>Ctrl+S → Tip: <b>Pagină web, doar HTML</b></td></tr></tbody></table>
<p>„Cu numele implicit” înseamnă să nu redenumești fișierul propus de browser. „Pagină web completă” creează și un folder cu resurse – <b>nu</b> este ce se cere.</p>
<h3>Copierea în comp_n</h3>
<p>Paragraful: selectare → Ctrl+C → comp_n → Ctrl+V. Imaginea: clic dreapta → Copiere imagine → Ctrl+V. Adresa: clic în bara de adrese → Ctrl+C → lipire sub elementul copiat. Salvează comp_n.</p>
<div class="tip">Caută cu cuvinte cheie precise: „Fermat marea teoremă an”, „spirala lui Fermat imagine”. Wikipedia în limba română este de obicei suficientă.</div>`},

{ id:"word", app:"word", title:"Procesare de text (Word / Writer)", html:`
<table><thead><tr><th>Operație</th><th>Microsoft Word</th><th>LibreOffice Writer</th></tr></thead><tbody>
<tr><td>Font, dimensiune, aldin, cursiv, subliniat</td><td>Pornire → Font; Ctrl+B / I / U; Ctrl+D (fereastra Font)</td><td>Format → Caracter</td></tr>
<tr><td>Majuscule mici, spațiere caractere</td><td>Ctrl+D → Efecte / Complex</td><td>Format → Caracter → Efecte de font / Poziție</td></tr>
<tr><td>Aliniere</td><td>Ctrl+L / E / R / J</td><td>idem</td></tr>
<tr><td>Indentare, spațiere rânduri/paragrafe</td><td>Pornire → Paragraf (săgeata mică)</td><td>Format → Paragraf → Indentări și spațiere</td></tr>
<tr><td>Marcatori, numerotare</td><td>Pornire → Marcatori / Numerotare</td><td>Format → Marcatori și numerotare</td></tr>
<tr><td>Căutare și înlocuire (cu format)</td><td>Ctrl+H → Mai multe → Format</td><td>Ctrl+H → Alte opțiuni → Atribute / Format</td></tr>
<tr><td>Orientare, margini, dimensiune</td><td>Aspect → Orientare / Margini</td><td>Format → Stil pagină → Pagină</td></tr>
<tr><td>Coloane</td><td>Aspect → Coloane → Mai multe coloane</td><td>Format → Coloane</td></tr>
<tr><td>Antet, subsol, numere de pagină</td><td>Inserare → Antet / Subsol / Număr de pagină</td><td>Inserare → Antet și subsol; Inserare → Câmp → Număr de pagină</td></tr>
<tr><td>Letrină (drop cap)</td><td>Inserare → Letrină</td><td>Format → Paragraf → Majuscule încorporate</td></tr>
<tr><td>Umbrire, bordură paragraf</td><td>Pornire → Umbrire / Borduri</td><td>Format → Paragraf → Zonă / Borduri</td></tr>
<tr><td>Bordură de pagină, culoare pagină, filigran</td><td>Proiectare → Borduri de pagină / Culoare pagină / Filigran</td><td>Format → Stil pagină → Borduri / Zonă; Format → Filigran</td></tr>
<tr><td>Tabel</td><td>Inserare → Tabel</td><td>Tabel → Inserare tabel (Ctrl+F12)</td></tr>
<tr><td>Imagine, formă, casetă text</td><td>Inserare → Imagini / Forme / Casetă text</td><td>Inserare → Imagine / Formă / Casetă text</td></tr>
<tr><td>SmartArt (piramidă, ciclu)</td><td>Inserare → SmartArt</td><td>Nu există – se desenează din forme</td></tr>
<tr><td>Notă de subsol, comentariu</td><td>Referințe → Notă de subsol; Revizuire → Comentariu nou</td><td>Inserare → Notă de subsol; Inserare → Comentariu</td></tr>
<tr><td>Întrerupere de pagină</td><td>Ctrl+Enter</td><td>Ctrl+Enter</td></tr>
<tr><td>Stiluri (Titlu 1), cuprins</td><td>Pornire → Stiluri; Referințe → Cuprins</td><td>Stiluri (F11); Inserare → Cuprins și index</td></tr></tbody></table>
<div class="tip"><b>Capcane frecvente:</b> „în tot documentul” înseamnă Înlocuire totală, nu doar prima apariție; „paragraful 2” se numără fără rândurile goale; „la finalul documentului” – Ctrl+End înainte de lipire.</div>`},

{ id:"ppt", app:"ppt", title:"Prezentări (PowerPoint / Impress)", html:`
<table><thead><tr><th>Operație</th><th>PowerPoint</th><th>LibreOffice Impress</th></tr></thead><tbody>
<tr><td>Diapozitiv nou, aspect (layout)</td><td>Pornire → Diapozitiv nou / Aspect</td><td>Diapozitiv → Diapozitiv nou; panoul Aspecte</td></tr>
<tr><td>Dublare, ascundere, mutare</td><td>Clic dreapta pe miniatură</td><td>Clic dreapta pe miniatură / meniul Diapozitiv</td></tr>
<tr><td>Fundal</td><td>Proiectare → Formatare fundal → Se aplică la toate</td><td>Diapozitiv → Proprietăți diapozitiv → Fundal</td></tr>
<tr><td>Tranziții, avans automat</td><td>Tranziții → efect; Avansare diapozitiv: După</td><td>Diapozitiv → Tranziție diapozitiv</td></tr>
<tr><td>Animații (intrare / evidențiere / ieșire)</td><td>Animații → efect → Opțiuni efect; Pornire: La clic / Cu anteriorul / După anteriorul</td><td>Format → Animație → +</td></tr>
<tr><td>Umbră, contur imagine</td><td>Format imagine → Efecte → Umbră; Bordură imagine</td><td>Format → Umbră / Linie</td></tr>
<tr><td>Antet și subsol, număr diapozitiv</td><td>Inserare → Antet și subsol</td><td>Inserare → Antet și subsol</td></tr>
<tr><td>Hyperlink</td><td>Ctrl+K → Locație în document / Fișier / Adresă</td><td>Ctrl+K → Document / Internet</td></tr>
<tr><td>Expunere particularizată</td><td>Expunere diapozitive → Expunere particularizată → Nou</td><td>Expunere → Expunere particularizată → Nou</td></tr>
<tr><td>Note ale vorbitorului</td><td>Panoul Note, sub diapozitiv</td><td>Vizualizare → Note</td></tr>
<tr><td>Export PDF</td><td>Fișier → Salvare ca → PDF</td><td>Fișier → Export în PDF</td></tr></tbody></table>
<div class="tip">Numerotarea diapozitivelor se face după ordinea din panoul din stânga. „Pe toate diapozitivele” = butonul <i>Se aplică la toate</i>.</div>`},

{ id:"excel", app:"excel", title:"Calcul tabelar (Excel / Calc)", html:`
<h3>Formule</h3>
<p>Orice formulă începe cu <code>=</code>. Referințele <b>relative</b> (<code>B2</code>) se modifică la copiere; cele <b>absolute</b> (<code>$B$2</code>) rămân fixe. În LibreOffice și în Office cu setări regionale românești separatorul de argumente poate fi <code>;</code> în loc de <code>,</code>.</p>
<table><thead><tr><th>Funcție</th><th>Ce face</th><th>Exemplu</th></tr></thead><tbody>
<tr><td>SUM</td><td>Suma</td><td><code>=SUM(B2:B9)</code></td></tr>
<tr><td>AVERAGE</td><td>Media aritmetică</td><td><code>=AVERAGE(B2:B9)</code></td></tr>
<tr><td>MIN / MAX</td><td>Minimul / maximul</td><td><code>=MAX(C2:C9)</code></td></tr>
<tr><td>COUNT</td><td>Numărul celulelor cu valori numerice</td><td><code>=COUNT(C2:C9)</code></td></tr>
<tr><td>COUNTA</td><td>Numărul celulelor nevide</td><td><code>=COUNTA(A2:A9)</code></td></tr>
<tr><td>COUNTBLANK</td><td>Numărul celulelor goale</td><td><code>=COUNTBLANK(C2:C9)</code></td></tr>
<tr><td>COUNTIF</td><td>Numără celulele care respectă o condiție</td><td><code>=COUNTIF(D2:D9,"Manual 1")</code></td></tr>
<tr><td>SUMIF</td><td>Adună valorile care respectă o condiție</td><td><code>=SUMIF(D2:D9,"Manual 1",B2:B9)</code></td></tr>
<tr><td>IF</td><td>Valoare în funcție de o condiție</td><td><code>=IF(C2&gt;100,"lungă","scurtă")</code></td></tr>
<tr><td>ROUND</td><td>Rotunjire</td><td><code>=ROUND(B10,2)</code></td></tr></tbody></table>
<h3>Operații</h3>
<table><thead><tr><th>Operație</th><th>Excel</th><th>LibreOffice Calc</th></tr></thead><tbody>
<tr><td>Înălțime rând / lățime coloană</td><td>Clic dreapta pe antet → Înălțime rând</td><td>Clic dreapta → Înălțime rând</td></tr>
<tr><td>Orientare text, încadrare, îmbinare</td><td>Pornire → Orientare / Încadrare text / Îmbinare și centrare</td><td>Format celule → Aliniere; Format → Îmbinare celule</td></tr>
<tr><td>Format numeric (zecimale, %, dată)</td><td>Ctrl+1 → Număr</td><td>Format celule → Numere</td></tr>
<tr><td>Borduri, umplere</td><td>Pornire → Borduri / Culoare umplere</td><td>Format celule → Borduri / Fundal</td></tr>
<tr><td>Sortare, filtrare</td><td>Date → Sortare / Filtru</td><td>Date → Sortare / Filtru automat</td></tr>
<tr><td>Formatare condiționată</td><td>Pornire → Formatare condiționată</td><td>Format → Condițional</td></tr>
<tr><td>Diagramă</td><td>Inserare → Diagrame; Proiectare → Mutare diagramă</td><td>Inserare → Diagramă</td></tr>
<tr><td>Zoom, înghețare</td><td>Vizualizare → Panoramare / Înghețare panouri</td><td>Vizualizare → Transfocare / Îngheață celule</td></tr>
<tr><td>Foi: redenumire, mutare, inserare</td><td>Dublu-clic pe filă; tragere</td><td>Clic dreapta pe filă</td></tr>
<tr><td>Inițializare pagină, zonă imprimare</td><td>Aspect pagină</td><td>Format → Stil pagină; Format → Zone de imprimare</td></tr></tbody></table>
<p>Exersează formulele în <a href="#lab/excel">Laboratorul Excel</a>.</p>`},

{ id:"html", app:"html", title:"Pagini web (comp_h)", html:`
<p>Fișierul <code>comp_h.html</code> se deschide cu <b>Word</b> (clic dreapta → Deschidere cu) sau cu <b>LibreOffice Writer/Web</b> și se formatează ca un document obișnuit. La salvare, păstrați formatul HTML (nu îl transformați în .docx).</p>
<h3>Ce se întâmplă „în spate”</h3>
<table><thead><tr><th>Element</th><th>Cod HTML</th></tr></thead><tbody>
<tr><td>Paragraf</td><td><code>&lt;p&gt;text&lt;/p&gt;</code></td></tr>
<tr><td>Titlu de nivel 1</td><td><code>&lt;h1&gt;text&lt;/h1&gt;</code></td></tr>
<tr><td>Aldin, cursiv, subliniat</td><td><code>&lt;b&gt;</code>, <code>&lt;i&gt;</code>, <code>&lt;u&gt;</code></td></tr>
<tr><td>Culoare text</td><td><code>&lt;p style="color:green"&gt;</code> sau <code>&lt;font color="green"&gt;</code></td></tr>
<tr><td>Aliniere</td><td><code>&lt;p style="text-align:center"&gt;</code></td></tr>
<tr><td>Legătură</td><td><code>&lt;a href="comp_x.xlsx"&gt;text&lt;/a&gt;</code></td></tr>
<tr><td>Imagine</td><td><code>&lt;img src="comp_i.jpg"&gt;</code></td></tr>
<tr><td>Listă marcată / numerotată</td><td><code>&lt;ul&gt;&lt;li&gt;…&lt;/li&gt;&lt;/ul&gt;</code> / <code>&lt;ol&gt;</code></td></tr>
<tr><td>Tabel</td><td><code>&lt;table&gt;&lt;tr&gt;&lt;td&gt;…&lt;/td&gt;&lt;/tr&gt;&lt;/table&gt;</code></td></tr>
<tr><td>Fundal pagină</td><td><code>&lt;body style="background-color:lightyellow"&gt;</code></td></tr>
<tr><td>Titlul paginii (fila browserului)</td><td><code>&lt;title&gt;…&lt;/title&gt;</code> în <code>&lt;head&gt;</code></td></tr></tbody></table>
<div class="tip">Legătura către un fișier din același director se face cu calea relativă (doar numele fișierului). Verificați la final deschizând comp_h în browser.</div>
<p>Exersează codul direct în <a href="#lab/html">Laboratorul HTML</a>.</p>`},

{ id:"access", app:"access", title:"Baze de date (Access)", html:`
<p>O bază de date conține <b>tabele</b> (datele), <b>interogări</b> (selecții, sortări, calcule), <b>formulare</b> (introducere date) și <b>rapoarte</b> (prezentare pentru tipărire). Fiecare rând este o <b>înregistrare</b>, fiecare coloană un <b>câmp</b>.</p>
<table><thead><tr><th>Operație</th><th>Microsoft Access</th></tr></thead><tbody>
<tr><td>Adăugare înregistrare</td><td>Deschideți tabela → ultimul rând (*)</td></tr>
<tr><td>Câmp nou, tip de date, dimensiune</td><td>Clic dreapta pe tabelă → Vizualizare proiect</td></tr>
<tr><td>Cheie primară</td><td>Vizualizare proiect → selectare câmp → Cheie primară</td></tr>
<tr><td>Sortare în tabelă</td><td>Pornire → Ascendent / Descendent → Ctrl+S</td></tr>
<tr><td>Interogare nouă</td><td>Creare → Proiectare interogare → adăugare tabelă → dublu-clic pe câmpuri</td></tr>
<tr><td>Criterii</td><td>Rândul Criterii: <code>"Magazin 1"</code>, <code>&gt;2</code>, <code>Between 1 And 3</code>, <code>Like "p*"</code></td></tr>
<tr><td>Sortare în interogare</td><td>Rândul Sortare: Ascendent / Descendent (contează ordinea coloanelor, de la stânga la dreapta)</td></tr>
<tr><td>Câmp calculat</td><td>Coloană nouă: <code>Total: [Glucoză]+[Fructoză]</code></td></tr>
<tr><td>Formular / raport</td><td>Creare → Expert formular / Expert raport → aspect, grupare, orientare</td></tr>
<tr><td>Orientare raport</td><td>Vizualizare aspect → Inițializare pagină → Vedere</td></tr></tbody></table>
<div class="tip">Salvați fiecare obiect cu numele exact din cerință (de exemplu <code>comp_ved</code>). În LibreOffice Base puteți exersa importând <a href="resurse/comp_t_pentru_Base.csv">tabela comp_t în format CSV</a>.</div>`}
];
