// ================================================================
// SEARCH v25 (__v25) — matching strict par champ + prédictions riches
// + fiches traduites Safety Gate/RAPEX/KBA + liens sources officiels
// Chargé APRÈS engine.js, AVANT app.js (surcharge propre)
// ================================================================
var __v25=true;
// ---- Fiches traduites FR (sources officielles EU) ----
[
R(["sg01","Volkswagen","Transporter T6.1","2020-2022","thermal","2.0 TDI","fuel","Safety Gate/RAPEX : durite carburant frottant châssis","Fuite gazole sur ligne échappement → inflammation","Vernis brun soubassement, durite percée orientée","Safety Gate / RAPEX (traduit FR)","2021","",["oil_puddle","exhaust_hot","car_fire_road"]]),
R(["sg02","Ford","Transit Custom","2016-2019","thermal","2.0 EcoBlue","fuel","Safety Gate/RAPEX : conduite carburant poreuse","Fuite essence/diesel sur point chaud","Flaque brûlée au centre","Safety Gate / RAPEX (traduit FR)","2019","",["oil_puddle","car_fire_road"]]),
R(["sg03","Opel","Vivaro B","2016-2020","thermal","1.6/2.0 D","fuel","Safety Gate/RAPEX : durite gazole frottée","Fuite sur échappement","Vernis, suies grasses","Safety Gate / RAPEX (traduit FR)","2020","",["oil_puddle","exhaust_hot"]]),
R(["sg04","Toyota","Proace","2016-2021","thermal","1.6/2.0 D","fuel","Safety Gate/RAPEX : conduite carburant","Fuite → inflammation","Flaque centre","Safety Gate / RAPEX (traduit FR)","2021","",["car_fire_road"]]),
R(["sg05","Iveco","Daily","2018-2022","thermal","3.0 HPI","elec","Safety Gate/RAPEX : faisceau châssis frotté","Arc à la masse → flamme gaine","Perles primaires, tôle percée","Safety Gate / RAPEX (traduit FR)","2022","",["harness_chafe","arc_beads"]]),
R(["sg06","Fiat","Talento","2016-2021","thermal","1.6/2.0 MultiJet","fuel","Safety Gate/RAPEX : raccord rampe carburant","Fuite HP → aérosol inflammable","Résidus rampe","Safety Gate / RAPEX (traduit FR)","2021","",["gdi_pump","car_fire_road"]]),
R(["sg07","Nissan","NV300","2016-2020","thermal","1.6 dCi","fuel","Safety Gate/RAPEX : durite essence","Fuite sur chaud","Vernis","Safety Gate / RAPEX (traduit FR)","2020","",["oil_puddle"]]),
R(["sg08","Renault","Trafic III","2016-2020","thermal","1.6 dCi","fuel","Safety Gate/RAPEX : raccord carburant","Fuite → inflammation","Flaque centre","Safety Gate / RAPEX (traduit FR)","2020","",["oil_puddle","car_fire_road"]]),
R(["k251","Volkswagen","ID.3","2020-2021","ev","BEV MEB","batt","KBA : surveillance isolation batterie (logiciel)","Défaut détection isolement → risque arc","Codes isolement BMS","KBA (traduit FR)","2021","",["pack_teardown"]]),
R(["k252","Smart","EQ Fortwo/Forfour","2017-2020","ev","BEV","charge","KBA : connecteur de charge surchauffe","Arc broches → flamme trappe","Broches picotées","KBA (traduit FR)","2020","",["ccs_connector","melted_plugs"]]),
R(["k253","BMW","i3","2013-2019","ev","BEV","batt","KBA : chauffage batterie court-circuit","Court interne → runaway local","Module chauffant fondu","KBA (traduit FR)","2021","",["battery_runaway","pack_teardown"]]),
R(["k254","Mercedes","EQB","2021-2023","ev","BEV","batt","KBA : défaut cellule batterie (campagne)","Court interne → runaway","Logs BMS pré-feu","KBA (traduit FR)","2023","",["battery_runaway","liion_cell"]])
].forEach(function(x){if(!RECALLS.find(function(r){return r.id===x.id;}))RECALLS.push(x);});
// ---- Classification stricte ----
function s25Brand(t){var bs=catalogBrands();for(var i=0;i<bs.length;i++){var lbl=seNorm(PRETTY_BRANDS[bs[i]]||bs[i]);if(lbl===t||lbl.indexOf(t)===0||(t.length>=4&&lbl.indexOf(t)>=0))return bs[i];}return null;}
function s25IsEnergy(t){return ENERGY_KW[t]||null;}
function s25IsPanne(t){return PANNE_KEYWORDS[t]||null;}
function s25ModelMatch(rm,t){var words=rm.split(/[^a-z0-9.]+/).filter(Boolean);
 if(rm.indexOf(t)>=0)return true;
 for(var i=0;i<words.length;i++){var w=words[i];if(w.indexOf(t)===0&&t.length>=3)return true;if(t.length>=5&&w.length>=5&&seLev(w,t)<=1)return true;}
 return tmModel(rm,t);}
function s25Model(t){var all=[];Object.keys(VEHICLE_CATALOG||{}).forEach(function(br){Object.keys(VEHICLE_CATALOG[br]||{}).forEach(function(m){all.push(m);});});
 for(var i=0;i<all.length;i++){var n=seNorm(cleanModel(all[i]));if(n===t||n.indexOf(t)===0||(t.length>=4&&n.indexOf(t)>=0))return all[i];}return null;}
function s25MotorMatch(mot,t){return mot.indexOf(t)>=0||t.indexOf(mot.split(' ')[0])>=0&&mot.length<=t.length;}
function s25Classify(toks){var c={brand:null,energy:null,pannes:[],model:null,motors:[],free:[]};
 toks.forEach(function(t){
  if(!c.brand){var b=s25Brand(t);if(b){c.brand=b;return;}}
  var en=s25IsEnergy(t);if(en){c.energy=en;return;}
  var pk=s25IsPanne(t);if(pk){c.pannes.push(pk);return;}
  if(!c.model){var m=s25Model(t);if(m){c.model=m;return;}}
  if(/^[0-9]+[.,]?[0-9]*$/.test(t)||/tdi|tsi|tci|dci|tce|puretech|bluehdi|ecoboost|e-tech|etech|bev|phev|hev|gpf|dpf|thp|multijet|skyactiv/i.test(t)){c.motors.push(t);return;}
  c.free.push(t);});
 return c;}
function usMatch25(r,c){
 if(c.brand&&!brandMatch(r.brand||'',c.brand))return false;
 if(c.energy&&r.energy!==c.energy)return false;
 if(c.pannes.length){var okp=c.pannes.some(function(p){return (r.subsys||'')===p||(r.cause||'').toLowerCase().indexOf(p)>=0||(r.mech||'').toLowerCase().indexOf(p)>=0;});if(!okp)return false;}
 if(c.model){var rm=seNorm(cleanModel(r.models||''));if(!s25ModelMatch(rm,seNorm(c.model)))return false;}
 if(c.motors.length){var mot=seNorm(r.motor||'');var okm=c.motors.some(function(t){return mot.indexOf(t)>=0||seNorm(r.models||'').indexOf(t)>=0;});if(!okm)return false;}
 if(c.free.length){var hay=seNorm([r.brand,r.models,r.motor,r.cause,r.mech,r.idx].join(' '));
  var okf=c.free.every(function(t){if(hay.indexOf(t)>=0)return true;var ws=hay.split(/[^a-z0-9.]+/).filter(Boolean);
   for(var i=0;i<ws.length;i++){if(ws[i].length>=4&&t.length>=4&&seLev(ws[i],t)<=1)return true;}return false;});
  if(!okf)return false;}
 return true;}
function usScore25(r,c){var s=0;
 if(c.brand&&brandMatch(r.brand||'',c.brand))s+=5;
 if(c.model&&seNorm(r.models||'').indexOf(seNorm(c.model))>=0)s+=5;
 if(c.motors.length&&seNorm(r.motor||'').indexOf(c.motors[0])>=0)s+=3;
 if(c.pannes.length&&(r.subsys||'')===c.pannes[0])s+=2;
 s+=c.free.length;return s;}
function unifiedSearch(q){var toks=seNorm(q||'').split(/[\s,;]+/).filter(function(t){return t.length>0;});
 if(!toks.length)return[];var c=s25Classify(toks);
 if(!c.brand&&!c.model&&!c.pannes.length&&!c.energy&&!c.motors.length&&!c.free.length)return[];
 var out=[];RECALLS.forEach(function(r){if(usMatch25(r,c))out.push({r:r,s:usScore25(r,c)});});
 out.sort(function(a,b){return b.s-a.s;});return out.slice(0,60);}
// ---- Prédictions riches ----
function usPredictions(q){var n=seNorm(q);if(!n||n.length<2)return[];var sug=[];
 catalogBrands().forEach(function(b){var lbl=PRETTY_BRANDS[b]||cap15(b);var lb=seNorm(lbl);if(lb.indexOf(n)===0)sug.push({type:'marque',val:lbl});else if(lb.indexOf(n)>0&&sug.length<10)sug.push({type:'marque',val:lbl});});
 Object.keys(VEHICLE_CATALOG||{}).forEach(function(br){Object.keys(VEHICLE_CATALOG[br]||{}).forEach(function(m){var nm=seNorm(m);if(nm.indexOf(n)>=0&&sug.length<22)sug.push({type:'modèle',val:m+' ('+(PRETTY_BRANDS[br]||cap15(br))+')'});});});
 Object.keys(VEHICLE_CATALOG||{}).forEach(function(br){Object.keys(VEHICLE_CATALOG[br]||{}).forEach(function(m){(VEHICLE_CATALOG[br][m]||[]).forEach(function(s){var code=String(s).split('|')[0];if(seNorm(code).indexOf(n)>=0&&sug.length<30)sug.push({type:'motorisation',val:code+' ('+m+')'});});});});
 Object.keys(PANNE_KEYWORDS).forEach(function(k){if(k.indexOf(n)>=0&&sug.length<34)sug.push({type:'panne',val:k});});
 RECALLS.forEach(function(r){var cs=seNorm(r.cause||'');if(cs.indexOf(n)>=0&&sug.length<42)sug.push({type:'problème',val:r.cause.replace(/^\[[A-ZÀ-Ü]+\]\s*/,''),id:r.id});});
 return sug.slice(0,12);}
// ---- Rendu résultats + liens sources officiels ----
function sourceLinks(q){var e=encodeURIComponent(q);
 return '<div class="photo-row" style="margin:.6rem 0">'+
 '<a class="rs-btn" style="display:inline-block;width:auto;padding:.5rem .8rem;margin:.2rem;text-decoration:none" target="_blank" rel="noopener" href="https://rappel.conso.gouv.fr/#/recherche?search='+e+'">🇫🇷 Rappel Conso</a>'+
 '<a class="rs-btn" style="display:inline-block;width:auto;padding:.5rem .8rem;margin:.2rem;text-decoration:none" target="_blank" rel="noopener" href="https://www.nhtsa.gov/recalls?keyword='+e+'">🇺🇸 NHTSA</a>'+
 '<a class="rs-btn" style="display:inline-block;width:auto;padding:.5rem .8rem;margin:.2rem;text-decoration:none" target="_blank" rel="noopener" href="https://ec.europa.eu/safety-gate-alerts/screen/webReport?search='+e+'">🇪 Safety Gate / RAPEX</a>'+
 '<a class="rs-btn" style="display:inline-block;width:auto;padding:.5rem .8rem;margin:.2rem;text-decoration:none" target="_blank" rel="noopener" href="https://www.kba.de/DE/Home/home_node.html">🇩 KBA</a>'+
 '<a class="rs-btn" style="display:inline-block;width:auto;padding:.5rem .8rem;margin:.2rem;text-decoration:none" target="_blank" rel="noopener" href="https://www.google.com/search?q='+e+'+rappel+incendie+v%C3%A9hicule+site:largus.fr+OR+site:caradisiac.com+OR+site:autobild.de">📰 Presse auto</a></div>';}
function runUnifiedNow(){var inp=document.getElementById('unifiedInput');var d=document.getElementById('unifiedResults');if(!inp||!d)return;
 var q=inp.value.trim();if(!q){d.innerHTML='';return;}
 var res=unifiedSearch(q);
 var h='<div class="search-results-header">🔎 '+res.length+' résultat(s) pour « '+esc15(q)+' »</div>'+sourceLinks(q);
 h+=res.map(function(x){return '<div class="search-result-item" onclick="expandRecall(\''+x.r.id+'\')"><h4>[score '+x.s+'] '+esc15(x.r.brand)+' — '+esc15(x.r.models)+' <span class="badge-src">'+esc15(x.r.src)+'</span></h4><p>'+esc15(x.r.cause)+'</p></div>';}).join('');
 if(!res.length)h+='<p class="no-results">Aucun résultat — ex : « elroq », « clio 5 courroie », « q4 obc »</p>';
 d.innerHTML=h;}
document.addEventListener('DOMContentLoaded',function(){
 var inp=document.getElementById('unifiedInput');
 if(inp){inp.addEventListener('keypress',function(e){if(e.key==='Enter'){var p=document.getElementById('unifiedPredict');if(p)p.style.display='none';runUnifiedNow();}});
  document.addEventListener('click',function(e){var it=e.target.closest('#unifiedPredict .ac-item');if(!it)return;
   inp.value=it.getAttribute('data-val')||it.textContent;var p=document.getElementById('unifiedPredict');if(p)p.style.display='none';runUnifiedNow();});}
 // Auto-test pureté : « elroq » ne doit retourner QUE du Skoda Elroq
 try{var res=unifiedSearch('elroq');var bad=res.filter(function(x){return seNorm(x.r.brand).indexOf('skoda')<0&&seNorm(x.r.models).indexOf('elroq')<0;}).length;
  localStorage.setItem('purity25',JSON.stringify({t:Date.now(),n:res.length,bad:bad}));
  console.log('[v25] PURETÉ elroq : '+res.length+' résultats, '+bad+' hors-sujet');}catch(e){}
 console.log('✅ search-v25 actif : matching strict + prédictions + sources KBA/RAPEX/Safety Gate');});
