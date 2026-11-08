// ================================================================
// MATRICE TOUTES MARQUES × 9 FAMILLES - v27
// Génère les fiches doctrine par modèle + campagnes réelles ajoutées
// ================================================================
var FAM=[
{key:'elec',label:'ÉLECTRIQUE',sub:'elec',en:['thermal','hybrid','ev','lpg'],cause:'Cosses 12V, faisceaux, connecteurs, relais, masses : oxydation/desserrage',mech:'Résistance de contact → Joule 100-300 W locaux → fusion cosse → arc',idx:'Cosses fondues/sulfatées, vert-de-gris, fusible du circuit grillé',photos:['terminal_glow','fuse_box','harness_chafe']},
{key:'short',label:'COURT-CIRCUIT',sub:'elec',en:['thermal','hybrid','ev','lpg'],cause:'Frottement faisceau, épissures accessoires, infiltration eau boîtiers/fusibles',mech:'Arc franc >2000°C ou arc série 3000-5000°C non protégé → flamme gaines',idx:'Perles PRIMAIRES sphériques, œillets fondus, cartographie fusibles',photos:['arc_beads','harness_chafe','fuse_box']},
{key:'fire',label:'INCENDIE',sub:'fire',en:['thermal','hybrid','ev','lpg'],cause:'Combinaison combustible (gaines, PU, fluides) + source (élec/fluide/organe chaud)',mech:'Pyrolyse → croissance 2-6 min → embrasement volume 8-15 min',idx:'V-patterns, gradients profondeur, cartographie fusion Zn420/Al660/Cu1084',photos:['origin_v_body','engine_burnt','v_pattern']},
{key:'charge',label:'DÉFAUT DE CHARGE',sub:'charge',en:['ev','hybrid'],cause:'Broches/connecteur, OBC/ICCU, câble EVSE, wallbox, software borne',mech:'Résistance contact → arc AC/DC répété → carbonisation ; ou rupture communication',idx:'Broches picotées/fondues, logs session borne, codes OBC/ICCU',photos:['ccs_connector','melted_plugs','pack_teardown']},
{key:'range',label:'DÉFAUT D’AUTONOMIE',sub:'range',en:['ev','hybrid'],cause:'Vieillissement/déséquilibre cellules, décharge parasite veille, froid/chaud, BMS',mech:'Capacité réduite, conso occulte, dérating → autonomie chutée',idx:'ΔV/ΔT cellules, conso kWh/100, logs veille, SOC sautant',photos:['battery_runaway','liion_cell','terminal_glow']},
{key:'ovhe',label:'SURCHAUFFE ÉLECTRIQUE',sub:'overheat',en:['ev','hybrid'],cause:'DC-DC, onduleur, contacteurs, busbars, pompe LDR pack',mech:'Joule/arcs internes → échauffement → dérating voire runaway',idx:'Codes dérating, busbars bleuis, glycol sur HT, pompe fondue',photos:['pack_teardown','fuse_box','coolant_leak']},
{key:'ovht',label:'SURCHAUFFE THERMIQUE',sub:'overheat',en:['thermal','hybrid','lpg'],cause:'Pompe à eau, radiateur, thermostat, ventilateur, EGR/DPF chauds',mech:'Perte LDR ou débit d’air → T° moteur → joints/fuites sur organes chauds',idx:'Vapeur LDR, durites dures, codes T°, FAP/cata colorés',photos:['coolant_leak','engine_burnt','dpf_regen']},
{key:'fuel',label:'FUITE CARBURANT',sub:'fuel',en:['thermal','hybrid','lpg'],cause:'Durites, raccords, pompe HP/BP, réservoir, injecteurs/rampe',mech:'Essence ~280°C / diesel ~210°C auto-inflammation sur point chaud ; HP = aérosol',idx:'Flaque brûlée AU CENTRE, irisations, vernis, GC-MS hydrocarbures',photos:['oil_puddle','gdi_pump','car_fire_road']},
{key:'cool',label:'FUITE LDR',sub:'leak',en:['thermal','hybrid','ev','lpg'],cause:'Pompe, radiateur, durites, calorstat, refroidisseur EGR (diesel), plaque froide (VE)',mech:'Perte LDR → surchauffe ; glycol ~400°C sur échappement ; glycol sur HT = arc',idx:'Traces roses/vertes, niveau bas, vapeur blanche sucrée',photos:['coolant_leak','exhaust_hot','pack_teardown']}];
function motorEnergy(code){var c=seNorm(code||'');if(/bev|ev\b|[eé]lectrique|e-208|e-2008|corsa-e|mokka-e|zoe|spring|id\.|enyaq|elroq|eq|e-tron|megane e/.test(c))return 'ev';
 if(/phev|plug-in|rechargeable|4xe|phev/.test(c))return 'hybrid';
 if(/hybrid|e-tech|mhev|hev|48v|bsg|isg/.test(c))return 'hybrid';
 if(/gpl|lpg|eco-g/.test(c))return 'lpg';
 return 'thermal';}
function slugM(m){return seNorm(m).replace(/[^a-z0-9]+/g,'-');}
var XB=[];
Object.keys(VEHICLE_CATALOG||{}).forEach(function(br){
 Object.keys(VEHICLE_CATALOG[br]||{}).forEach(function(model){
  var motors=VEHICLE_CATALOG[br][model]||[];var ens={};
  motors.forEach(function(s){ens[motorEnergy(String(s).split('|')[0])]=1;});
  Object.keys(ens).forEach(function(en){
   FAM.forEach(function(f){if(f.en.indexOf(en)<0)return;
    XB.push({id:'xb-'+br+'-'+slugM(model)+'-'+f.key,brand:cap15(br),models:model,years:'2018-2026',energy:en,
     motor:motors.map(function(s){return String(s).split('|')[0];}).join(' / ')||'-',
     power:motors.map(function(s){return String(s).split('|')[1]||'';}).filter(Boolean).join(' / ')||'-',
     subsys:f.sub,cause:'['+f.label+'] '+f.cause,mech:f.mech,idx:f.idx,src:'Doctrine par modèle (v27)',ref:'XB-'+f.key,photos:f.photos});});});});
// ---- Campagnes réelles ajoutées (Dacia/Skoda/Renault + autres) ----
var REAL_XB=[
R(["xb01","Renault","Clio 4, Clio 5","2012-2024","thermal","12V","elec","Cosse 12V desserrée/sulfatée","Joule → fusion cosse → arc local","Cosse fondue, sulfate blanc","RETEX FR","2019-2024","",["terminal_glow","fuse_box"]]),
R(["xb02","Renault","Master, Trafic","2016-2023","thermal","2.0/2.3 dCi","short","Faisceau châssis frottant","Arc à la masse → flamme gaine","Perles primaires, gaine percée","Rappel Conso","2020","",["harness_chafe","arc_beads"]]),
R(["xb03","Renault","Zoe","2013-2022","ev","BEV","range","Vieillissement batterie + charge lente","Capacité réduite, dérating","ΔV cellules, conso élevée","RETEX FR","2020-2022","",["battery_runaway","liion_cell"]]),
R(["xb04","Renault","Megane E-Tech","2022-2026","ev","BEV","charge","Dération DC + pompe à chaleur","Surchauffe pack en charge","Courbe plate, ΔT","RETEX FR","2023-2025","",["ccs_connector","battery_runaway"]]),
R(["xb05","Renault","Austral, Symbioz, Rafale","2022-2026","hybrid","12V/DC-DC","overheat","Surchauffe DC-DC 12V","Joule interne → échauffement boîtier","Boîtier DC-DC chaud/fondu","RETEX FR","2023-2025","",["fuse_box","pack_teardown"]]),
R(["xb06","Renault","Trafic, Master","2016-2023","thermal","2.0/2.3 dCi","leak","Fuite LDR pompe/durites","Perte LDR → surchauffe ; glycol sur échappement","Traces roses, vapeur","RETEX FR","2019-2022","",["coolant_leak","exhaust_hot"]]),
R(["xb07","Renault","Clio 5 1.0 TCe","2019-2024","thermal","1.0 TCe","fuel","Durite essence poreuse/collier","Fuite BP → vapeurs → flash","Flaque centre, odeur","Rappel Conso","2020","",["oil_puddle","car_fire_road"]]),
R(["xb08","Dacia","Duster I/II 1.5 dCi","2010-2024","thermal","1.5 dCi","leak","Fuite LDR durite radiateur","Surchauffe + glycol sur chaud","Traces roses avants","RETEX FR","2018-2022","",["coolant_leak","engine_burnt"]]),
R(["xb09","Dacia","Sandero 3, Logan","2019-2024","thermal","12V","short","Court cosse-masse / faisceau","Arc franc → flamme gaine","Perles, cosse fondue","RETEX FR","2020-2024","",["arc_beads","terminal_glow"]]),
R(["xb10","Dacia","Spring","2021-2026","ev","BEV","charge","Charge AC lente + connecteur chaud","Arc broches répété","Broches picotées","RETEX FR","2022-2025","",["ccs_connector","melted_plugs"]]),
R(["xb11","Dacia","Duster III, Bigster 48V","2024-2026","hybrid","DC-DC 48V","overheat","Surchauffe DC-DC/BSG 48V","Joule interne → échauffement","Codes 48V, boîtier chaud","Doctrine FR","2025","",["fuse_box","alternator_burnt"]]),
R(["xb12","Skoda","Octavia, Superb 2.0 TDI/TSI","2015-2023","thermal","2.0 TDI/TSI","leak","Fuite LDR pompe à eau (EA288/EA888)","Perte LDR → surchauffe","Boîtier pompe fendu","KBA","2019-2021","",["coolant_leak","engine_burnt"]]),
R(["xb13","Skoda","Enyaq","2021-2026","ev","BEV MEB","charge","Charge DC instable + software","Arrêts session, échauffement connecteur","Logs borne","RETEX EU","2022-2025","",["ccs_connector","pack_teardown"]]),
R(["xb14","Skoda","Enyaq, Elroq","2021-2026","ev","12V","range","Décharge 12V veille/OTA","Immobilisation + autonomie perçue","12V basse, logs veille","RETEX EU","2022-2025","",["terminal_glow","fuse_box"]]),
R(["xb15","Skoda","Fabia, Scala, Octavia","2017-2024","thermal","Faisceau porte","short","Arc série soufflet de porte","Arc non protégé → garniture","Soufflet fondu, perles fines","RETEX EU","2020-2024","",["harness_chafe","arc_sparks"]]),
R(["xb16","Skoda","Kodiaq, Superb diesel","2017-2023","thermal","2.0 TDI","fuel","Fuite rampe/injecteur HP","Aérosol diesel sur turbo","Résidus rampe","RETEX EU","2019-2023","",["gdi_pump","exhaust_hot"]]),
R(["xb17","Volkswagen","ID.3, ID.4","2020-2026","ev","DC-DC","overheat","Surchauffe DC-DC HT→12V","Joule interne → dérating/immobilisation","Codes DC-DC","RETEX EU","2021-2024","",["pack_teardown","fuse_box"]]),
R(["xb18","Peugeot","208 II, 2008 II 1.2","2019-2024","thermal","1.2 PureTech","leak","Fuite LDR pompe à eau","Surchauffe locale","Traces roses","RETEX FR","2020-2024","",["coolant_leak"]]),
R(["xb19","Citroën","C3 III, C3 Aircross","2017-2024","thermal","Boîte fusibles","short","Infiltration eau boîte à fusibles","Court électrolytique lames","Lames soudées, corrosion","RETEX FR","2019-2023","",["fuse_box","panel_burnt"]]),
R(["xb20","Opel","Corsa-e, Mokka-e","2020-2026","ev","OBC","charge","Surchauffe OBC en charge AC","Arc interne → arrêt + risque","Codes OBC, boîtier chaud","RETEX EU","2021-2025","",["pack_teardown","ccs_connector"]]),
R(["xb21","Fiat","500e","2020-2026","ev","BEV","range","Autonomie hiver + décharge 12V","Conso chauffage + veille","Conso élevée, 12V basse","RETEX EU","2021-2025","",["battery_runaway","terminal_glow"]]),
R(["xb22","Mercedes","C W206, E W214, GLC 48V","2019-2026","hybrid","ISG 48V","overheat","Surchauffe ISG/DC-DC 48V","Joule interne → échauffement baie","Codes 48V","KBA","2021-2023","",["alternator_burnt","fuse_box"]]),
R(["xb23","Toyota","Yaris, Corolla Hybrid","2019-2026","hybrid","NiMH/Li-ion","range","Vieillissement batterie HV","Capacité réduite → autonomie/consommation","ΔV modules","RETEX EU","2020-2025","",["battery_runaway","liion_cell"]]),
R(["xb24","Hyundai","Tucson 1.6 T-GDI","2018-2024","thermal","1.6 T-GDI","fuel","Fuite HP essence (pompe/rampe)","Aérosol → inflammation turbo","Résidus rampe","NHTSA","2021-2023","",["gdi_pump","car_fire_road"]]),
R(["xb25","Kia","Sportage 1.6 T-GDI","2018-2024","thermal","1.6 T-GDI","fuel","Fuite HP essence","Aérosol → inflammation","Résidus","NHTSA","2021-2023","",["gdi_pump","oil_puddle"]]),
R(["xb26","Tesla","Model Y","2020-2026","ev","Inverter","overheat","Surchauffe onduleur arrière","Dérating + vieillissement isolation","Codes dérating","RETEX US","2021-2025","",["pack_teardown"]]),
R(["xb27","BYD","Atto 3","2022-2026","ev","BEV","charge","Dération DC thermique","Puissance bridée, échauffement","Courbe plate","RETEX CN","2023-2025","",["ccs_connector","battery_runaway"]]),
R(["xb28","MG","ZS EV","2019-2026","ev","BEV","charge","Connecteur AC surchauffe","Arc broches répété","Broches picotées","RETEX EU","2021-2025","",["ccs_connector","melted_plugs"]]),
R(["xb29","Volvo","XC40 Recharge","2020-2026","ev","Pompe LDR pack","leak","Fuite glycol boucle batterie","Glycol sur HT → arc","Traces roses pack","RETEX EU","2021-2024","",["coolant_leak","pack_teardown"]]),
R(["xb30","Ford","Puma, Kuga 1.0/1.5","2019-2024","thermal","1.0/1.5 EcoBoost","leak","Fuite LDR (culasse/pompe)","Surchauffe + glycol sur chaud","Traces roses","NHTSA","2020-2023","",["coolant_leak","engine_burnt"]])];
REAL_XB.forEach(function(x){if(!RECALLS.find(function(r){return r.id===x.id;}))RECALLS.push(x);});
XB.forEach(function(x){if(!RECALLS.find(function(r){return r.id===x.id;}))RECALLS.push(x);});
// ---- Augmentation recherche unifiée (doctrine ciblée, plafonnée) ----
var FAMKW={elec:['elec','short'],short:['elec','short'],charge:['charge'],range:['range','batt'],overheat:['ovhe','ovht'],fuel:['fuel'],leak:['cool','fuel'],fire:['fire'],batt:['range','ovhe']};
var _usPrev=window.unifiedSearch;
window.unifiedSearch=function(q){var base=_usPrev?_usPrev(q):[];var t=usTokenize(q);
 if(!t.brands.length&&!t.models.length)return base;
 var fams=[];t.pannes.forEach(function(p){(FAMKW[p]||[]).forEach(function(f){if(fams.indexOf(f)<0)fams.push(f);});});
 var extra=XB.filter(function(x){
  if(t.brands.length&&!t.brands.some(function(b){return brandMatch(x.brand,b);}))return false;
  if(t.models.length&&!t.models.some(function(m){return seNorm(x.models).indexOf(seNorm(m))>=0;}))return false;
  if(fams.length&&fams.indexOf(x.id.split('-').pop())<0)return false;
  return true;}).slice(0,12).map(function(x){return{r:x,s:0.5};});
 return base.concat(extra);};
// ---- Augmentation rapport véhicule ----
var _gdPrev=window.garageDiag2;
window.garageDiag2=function(){if(_gdPrev)_gdPrev();
 var s=garageSel();var d=document.getElementById('garageReport2');if(!d||!s.brand)return;
 var ens={};var k=catalogKey(s.brand);
 if(k&&s.model&&VEHICLE_CATALOG[k]&&VEHICLE_CATALOG[k][s.model])VEHICLE_CATALOG[k][s.model].forEach(function(m){ens[motorEnergy(String(m).split('|')[0])]=1;});
 if(!Object.keys(ens).length)ens[s.motor&&/bev|ev|électrique/i.test(s.motor)?'ev':(s.motor&&/hybrid|48v|e-tech/i.test(s.motor)?'hybrid':'thermal')]=1;
 var sheets=XB.filter(function(x){return brandMatch(x.brand,s.brand)&&(!s.model||seNorm(x.models).indexOf(seNorm(s.model).split(' ')[0])>=0);}).slice(0,9);
 if(!sheets.length)return;
 d.innerHTML+='<h3>🧭 Doctrine applicable à ce modèle (toutes motorisations/puissances)</h3><div class="causes-grid">'+sheets.map(function(x){return recallCard(x);}).join('')+'</div>';};
// ---- Section matrice ----
var XB_FAM='all',XB_BRAND='';
function renderXB(){var sec=document.getElementById('xbGrid');if(!sec)return;
 var list=RECALLS.filter(function(r){return r.id.indexOf('xb')===0;});
 if(XB_BRAND)list=list.filter(function(r){return brandMatch(r.brand,XB_BRAND);});
 if(XB_FAM!=='all')list=list.filter(function(r){return (r.ref||'').indexOf('XB-'+XB_FAM)>=0||FAM.some(function(f){return f.key===XB_FAM&&(r.subsys===f.sub)&&(r.cause||'').indexOf('['+f.label+']')>=0;});});
 var real=list.filter(function(r){return r.src.indexOf('Doctrine par modèle')<0;});
 var doc=list.filter(function(r){return r.src.indexOf('Doctrine par modèle')>=0;}).slice(0,24);
 sec.innerHTML='<p class="ve-intro">'+real.length+' campagne(s) réelle(s) + '+doc.length+' fiche(s) doctrine affichées (matrice complète : '+XB.length+' combinaisons marque×modèle×famille)</p><div class="causes-grid">'+real.map(recallCard).join('')+doc.map(recallCard).join('')+'</div>';
 var ch=document.getElementById('xbChips');if(ch)ch.innerHTML='<button class="nav-btn '+(XB_FAM==='all'?'active':'')+'" data-xb="all">Toutes</button>'+FAM.map(function(f){return '<button class="nav-btn '+(XB_FAM===f.key?'active':'')+'" data-xb="'+f.key+'">'+f.label+'</button>';}).join('');}
(function boot(){function go(){
 var anchor=document.getElementById('section-overheat');if(!anchor||document.getElementById('section-xb'))return;
 var sec=document.createElement('section');sec.id='section-xb';sec.style.borderTop='4px solid #00695c';
 sec.innerHTML='<h2>🧭 Matrice toutes marques — 9 familles de pannes</h2><div class="garage-form" style="margin-bottom:.8rem"><input id="xbBrand" placeholder="Marque (tapez : ren, ska, dac…) — vide = toutes" autocomplete="off"></div><div id="xbChips" class="main-nav" style="box-shadow:none;padding:.5rem 0"></div><div id="xbGrid"></div>';
 anchor.parentNode.insertBefore(sec,anchor);
 var bi=document.getElementById('xbBrand');
 if(bi&&window.attachAC)attachAC(bi,function(){return catalogBrands().map(function(k){return{v:k,label:PRETTY_BRANDS[k]||cap15(k)};});},function(v){XB_BRAND=v;renderXB();},null);
 if(bi)bi.addEventListener('input',function(){if(!bi.value){XB_BRAND='';renderXB();}});
 document.addEventListener('click',function(e){var b=e.target.closest('[data-xb]');if(b){XB_FAM=b.dataset.xb;renderXB();}});
 renderXB();
 console.log('✅ cross-brand v27 : matrice '+XB.length+' fiches doctrine + '+REAL_XB.length+' campagnes réelles');}
 if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',go);else go();})();
