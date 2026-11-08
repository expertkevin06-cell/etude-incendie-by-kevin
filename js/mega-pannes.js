// ================================================================
// MEGA-BASE PANNES CONNUES + IA LOCALE + VOLET JURISTE — v26
// Fusion : auto-diagnostic / my-tech / aide-redactionnelle / autodiag-formation
// ================================================================
var B2="https://image.qwenlm.ai/public_source/cf785bab-295b-41b7-b135-c32bc2c7d2ed/";
function P2(a,b){return B2+a+"-1fcb-4aab-867a-73f78120a3c2"+b+".png";}
Object.assign(PHOTOS,{
oil_drip:{url:P2("3c9cfd728","5415"),caption:"Fuite d'huile moteur : goutte active au point bas (joint/bouchon)",credit:"Fiches-auto"},
oil_cover:{url:P2("2c9cfd728","4966"),caption:"Joint de cache-culbuteurs : suintement caractéristique (flèche)",credit:"Pelican Parts"},
oil_seep:{url:P2("1c9cfd728","3289"),caption:"Suintement d'huile sur carter/pipe : zone d'origine de fuite",credit:"BMWist"},
engine_teardown:{url:P2("5c9cfd728","6305"),caption:"Moteur déposé M9R : inspection interne après grippage/surchauffe",credit:"France Moteurs"},
dpf_cut:{url:P2("5c9cfd728","2336"),caption:"FAP coupé : monolithe encrassé (suies) — colmatage avancé",credit:"L'Argus"},
dpf_psa:{url:P2("6c9cfd728","8021"),caption:"Schéma PSA : FAP + additif + AdBlue — fonctionnement",credit:"PSA"},
dpf_regen_psa:{url:P2("0c9cfd728","3566"),caption:"Régénération automatique du FAP par combustion des suies (600-650°C)",credit:"PSA"},
dpf_under:{url:P2("7c9cfd728","9715"),caption:"FAP/catalyseur au banc : dépose pour analyse encrassement",credit:"Girardia"},
belt_puretech:{url:P2("3c9cfd728","2357"),caption:"Courroie humide PureTech : délaminage, effilochage, fissures (dégradation)",credit:"Reddit r/peugeot"},
belt_port:{url:P2("2c9cfd728","7591"),caption:"Trappe d'inspection : courroie bain d'huile dégradée visible",credit:"Reddit r/peugeot"},
belt_pulley:{url:P2("1c9cfd728","4652"),caption:"Poulie/crepine : débris de courroie dans l'huile (pression chute)",credit:"Caradisiac"},
cyl_score:{url:P2("0c9cfd728","4283"),caption:"Cylindre rayé/grippé : stries verticales = surchauffe/lubrification",credit:"Scooter System"},
piston_m9r:{url:P2("3c9cfd728","2750"),caption:"Piston M9R : contrôle usure, calamine, segments après surchauffe",credit:"France Moteurs"},
thermal_fluke:{url:P2("8c9cfd728","6505"),caption:"Caméra thermique Fluke : pic thermique localisé (diagnostic sans contact)",credit:"Fluke"},
thermal_panel:{url:P2("6c9cfd728","7515"),caption:"Thermographie tableau électrique : point chaud = résistance de contact",credit:"LEADER"},
exhaust_blued:{url:P2("2c9cfd728","5067"),caption:"Collecteur bleui/violet : coloration thermique = surchauffe chronique",credit:"Forum Yamaha"},
alt_schema:{url:P2("8c9cfd728","7288"),caption:"Schéma 12V : batterie, démarreur, B+ , masses — arc mapping",credit:"AudiPassion"},
alt_photo:{url:P2("0c9cfd728","3082"),caption:"Alternateur : borne B+ et faisceau — point de chauffe Joule",credit:"Smarins"},
car_burnt_street:{url:P2("2c9cfd728","6771"),caption:"Véhicule incendié voie publique : lecture des traces post-feu",credit:"Républicain Lorrain"}});
var THEMES=[["all","🌐 Tous thèmes"],["engine-oil","🛢️ Moteur / fuites huile"],["timing-belt","⛓️ Distribution / courroie humide"],["exhaust-dpf","🌫️ Échappement / FAP / cata"],["cooling","🌡️ Refroidissement / surchauffe"],["fuel-lpg","⛽ Carburant / GPL"],["elec-12-48","⚡ Électrique 12V/48V"],["hv-charge","🔋 HT / charge"],["range","🔋 Autonomie / 12V"],["adas","📡 ADAS / caméras"],["gearbox","⚙️ Boîte / transmission"],["brakes","🛑 Freins / pneus"],["cabin","🛋️ Habitacle"],["fire-origin","🔥 Origine incendie / indices"]];
function M(a){return{id:a[0],theme:a[1],system:a[2],comp:a[3],dtc:a[4],type:a[5],sev:a[6],brands:a[7],models:a[8],motors:a[9],cause:a[10],sym:a[11],fix:a[12],src:a[13],fire:a[14],photos:a[15]};}
var MEGA=[
M(["mp01","timing-belt","Moteur","Chaîne distribution","P0010","Mécanique","🔴 Critique","Toutes","Tous","Tous","Décalage arbre à cames (chaîne tendeur usé)","Claquement froid, ratés, voyant","Remplacer chaîne+tendeur+calage (TSB)","https://expertkevin06-cell.github.io/autodiag-formation-auto/","→ Saut de chaîne = casse moteur = huile sur chaud (fiche th1)",["belt_port","engine_teardown"]]),
M(["mp02","timing-belt","Moteur","Courroie humide PureTech","-","Mécanique","🔴 Critique","Peugeot, Citroën, Opel, DS","208/2008/308/C3/C4/Corsa","1.2 PureTech 55-107 kW","Délamination/effilochage courroie bain d'huile → débris crépine","Perte pression huile, voyant, bruit","Campagne rappel 2023-24 : courroie+crépine+vidange","https://expertkevin06-cell.github.io/auto-diagnostic/","→ Serrage moteur = fuite huile sur échappement = FEU (th1/L08)",["belt_puretech","belt_port","belt_pulley","cyl_score"]]),
M(["mp03","engine-oil","Moteur","Joint cache-culbuteurs","-","Mécanique","🟡 Important","Toutes","Tous","Tous","Suintement puis fuite huile haut moteur","Odeur huile chaude, fumée à l'accélération","Joint + couple de serrage","https://expertkevin06-cell.github.io/my-tech-by-kevin/","→ Huile sur collecteur 400-800°C = auto-inflammation 300-350°C (th1)",["oil_drip","oil_cover"]]),
M(["mp04","engine-oil","Moteur","Joints turbo / retour huile","-","Mécanique","🔴 Critique","VAG, BMW, PSA, Renault","Diesel & essence turbo","Tous turbo","Fuite huile sur carter turbo chaud","Fumée bleue, turbo sifflant, huile bas","Joints/retour turbo","https://expertkevin06-cell.github.io/my-tech-by-kevin/","→ Huile pulvérisée 600-1000°C = flamme immédiate (th1/L02)",["oil_seep","exhaust_hot"]]),
M(["mp05","exhaust-dpf","Échappement","FAP / DPF","P2463","Mécanique","🟡 Important","Toutes diesel","Tous","Diesel","Colmatage suies : différentiel pression élevé","Perte puissance, régénérations longues","Nettoyage/remplacement + usage route","https://expertkevin06-cell.github.io/autodiag-formation-auto/","→ Régénérations 600-1200°C = charge thermique soubassement (th4)",["dpf_cut","dpf_psa","dpf_under"]]),
M(["mp06","exhaust-dpf","Échappement","Régénération FAP","-","Mécanique","🔴 Critique","Toutes diesel","Tous","Diesel","Regen en cours au stationnement sur végétation","Odeur herbe brûlée, fumée sous caisse","Ne pas stationner herbe/paille","https://expertkevin06-cell.github.io/auto-diagnostic/","→ Herbe sèche 250-300°C = inflammation sous caisse (th4/r20)",["dpf_regen_psa","dpf_cat","origin_pool"]]),
M(["mp07","exhaust-dpf","Échappement","Collecteur / ligne","-","Mécanique","🟡 Important","Toutes","Tous","Tous","Bleuissement/violet = surchauffe chronique mélange pauvre ou regen","Coloration anormale, perfo","Contrôle mélange/soupapes","https://expertkevin06-cell.github.io/aide-redactionnelle-technique/","→ Colorations = lecture T° max (cartographie fusion)",["exhaust_blued","heat_colors"]]),
M(["mp08","cooling","Refroidissement","Pompe à eau EA888/EA211","-","Mécanique","🔴 Critique","VW, Audi, Seat, Skoda","Golf, Passat, A3, Octavia","1.0-2.0 TSI/TDI","Boîtier plastique fissuré → perte LDR","Surchauffe, niveau bas, fuite rose","Campagne KBA 2019-21 : pompe","https://expertkevin06-cell.github.io/auto-diagnostic/","→ Surchauffe = grippage = huile sur chaud (O01)",["coolant_leak","thermal_fluke"]]),
M(["mp09","cooling","Moteur","Cylindre / piston","P0217","Mécanique","🔴 Critique","Toutes","Tous","Tous","Surchauffe : cylindre rayé, piston grippé","Puissance basse, cliquetis, LDR bouillonne","Moteur ouvert : chemises/pistons","https://expertkevin06-cell.github.io/my-tech-by-kevin/","→ Grippage = projection huile = FEU baie (th1/L08)",["cyl_score","piston_m9r","thermal_fluke","engine_teardown"]]),
M(["mp10","fuel-lpg","Carburant","Pompe HP GDI","P0087","Mécanique","🔴 Critique","VAG, BMW, PSA, Hyundai","Essence directe","GDI/THP/TSI","Fuite HP 150-350 bar = aérosol","Odeur essence, flash","Pompe/rampe HP","https://expertkevin06-cell.github.io/auto-diagnostic/","→ Aérosol inflammable instantané sur turbo (L13)",["gdi_pump","car_fire_road"]]),
M(["mp11","fuel-lpg","GPL","Multivalve / réservoir","-","Mécanique","🔴 Critique","Dacia, Renault, Fiat","Sandero, Clio, Duster ECO-G","1.0 TCe GPL","Fuite GPL phase vapeur/liquide","Odeur GPL, givre vanne","Campagne Rappel Conso 2021-22","https://rappel.conso.gouv.fr","→ Nappe lourde = flash retour réservoir (r44)",["car_fire_road","car_burnt_street"]]),
M(["mp12","elec-12-48","Électrique","Borne B+ / cosses","-","Électrique","🔴 Critique","Toutes","Tous","Tous","Cosse/écrou B+ sous-couple → Joule → arc","Fusion borne, odeur chaud, panne totale","Couple + graisse contact","https://expertkevin06-cell.github.io/autodiag-formation-auto/","→ Arc franc >2000°C = départ baie (s08/g03)",["alt_photo","alt_schema","arc_beads"]]),
M(["mp13","elec-12-48","Électrique","Alternateur / diodes","P0562","Électrique","🟡 Important","Toutes","Tous","Tous","Redresseur HS → ondulation, décharge 12V","Voyant batterie, phares faibles","Alternateur/redresseur","https://expertkevin06-cell.github.io/my-tech-by-kevin/","→ Échauffement faisceau charge = risque feu (M24)",["alt_photo","alt_schema"]]),
M(["mp14","elec-12-48","Électrique","Boîte à fusibles","-","Électrique","🔴 Critique","Toutes","Tous","Tous","Infiltration eau (pare-brise/auvent) → court électrolytique","Fusibles grillés en série, odeur","Étanchéité + boîte neuve","https://expertkevin06-cell.github.io/auto-diagnostic/","→ Fusion lente lames = feu isolants (g01)",["fuse_box","panel_burnt"]]),
M(["mp15","hv-charge","HT","Pompe LDR batterie MEB","-","Électrique","🔴 Critique","VW, Audi, Skoda","ID.3/4/5, Q4, Enyaq, Elroq","BEV MEB","Humidité pompe → court-circuit interne","Codes BMS, charge limitée","Campagne KBA/NHTSA 2021-22","https://expertkevin06-cell.github.io/auto-diagnostic/","→ RISQUE FEU pack + perte thermique (v03/elq14)",["pack_teardown","coolant_leak"]]),
M(["mp16","hv-charge","HT","Connecteur CCS/Type2","-","Électrique","🔴 Critique","Toutes VE","Tous","BEV/PHEV","Tracking/arc broches (humidité, sel)","Marques noires, chauffe en charge","Connecteur/broches","https://expertkevin06-cell.github.io/my-tech-by-kevin/","→ Arc DC 1000°C = flamme trappe (B22)",["ccs_connector","melted_plugs"]]),
M(["mp17","range","12V/autonomie","Décharge parasite","-","Électronique","🟡 Important","Tesla, VW, Renault VE","Model 3/Y, ID., Zoe","BEV","Veille software + consommateurs → 12V/HT à plat","Autonomie -2 à -5%/jour, immobilisation","MàJ software + 12V","https://expertkevin06-cell.github.io/autodiag-formation-auto/","→ 12V faible = contacteurs ouverts = panne totale (A01)",["terminal_glow","fuse_box"]]),
M(["mp18","adas","ADAS","Caméra pare-brise","C1234","Électronique","🟡 Important","Toutes","Tous","Tous","Buée/désalignement après remplacement vitrage","Perte lane-keep/AEB, recalibrations","Calibration + étanchéité","https://expertkevin06-cell.github.io/autodiag-formation-auto/","→ Sécurité active dégradée (pas incendie)",["investigation_kit"]]),
M(["mp19","gearbox","Transmission","Mécatronique DQ200","P0730","Mécanique","🟡 Important","VW, Audi, Seat, Skoda","Golf, Polo, Octavia","1.0-1.6 TSI/TDI","Embrayage sec + mécatronique : broutage","À-coups, limp, surchauffe boîte","Extension garantie constructeur","https://expertkevin06-cell.github.io/my-tech-by-kevin/","→ Surchauffe embrayage = fumée habitacle rare (M05)",["oil_puddle","engine_burnt"]]),
M(["mp20","brakes","Freinage","Disques/plaquettes","-","Mécanique","🟢 Modéré","Toutes VE/thermiques","Tous","Tous","Rouille/broutage (régénération freine peu)","Vibrations freinage","Nettoyage/remplacement","https://expertkevin06-cell.github.io/autodiag-formation-auto/","→ Disque 600-900°C si grippage = feu roue (vt_brakes)",["tire_burn"]]),
M(["mp21","cabin","Habitacle","Résistance siège chauffant","B1234","Électrique","🟡 Important","Toutes","Tous","Tous","Élément sectionné sous coussin","Point chaud localisé, odeur mousse","Siège/remplacement résistance","https://expertkevin06-cell.github.io/my-tech-by-kevin/","→ Pyrolyse PU = couvaison puis flamme habitacle (g15)",["seat_foam","smoker_car"]]),
M(["mp22","fire-origin","Incendie","Perles de fusion","-","Électrique","🔴 Critique","Toutes","Tous","Tous","Court-circuit : perles primaires sphériques","Traces métalliques fondues brillantes","Arc mapping + métallographie ASTM E2929","https://expertkevin06-cell.github.io/aide-redactionnelle-technique/","→ PREUVE d'origine électrique (cause vs conséquence)",["elec_beads","arc_primary_secondary"]]),
M(["mp23","fire-origin","Incendie","V-pattern carrosserie","-","Mécanique","🔴 Critique","Toutes","Tous","Tous","Lecture apex = zone d'origine","Traces en V sur panneaux","Photogrammétrie + relevés NFPA 921","https://expertkevin06-cell.github.io/aide-redactionnelle-technique/","→ Détermine le foyer (fo01)",["origin_v_body","v_pattern"]]),
M(["mp24","fire-origin","Incendie","Végétation sous caisse","-","Mécanique","🔴 Critique","Toutes diesel","Tous","Diesel","Herbe/paille en contact FAP/cata","Carbonisation alignée sous véhicule","Relevé + log ECU regen","https://expertkevin06-cell.github.io/auto-diagnostic/","→ Origine externe sous caisse (th4)",["dpf_cat","origin_pool","car_burnt_street"]]),
M(["mp25","elec-12-48","Moteur","Ratés d'allumage","P0300","Électronique","🟡 Important","Toutes","Tous","Essence","Ratés → carburant imbrûlé au cata","Exothermie cata 900-1200°C, odeur","Bougies/bobines/injecteurs","https://expertkevin06-cell.github.io/autodiag-formation-auto/","→ Cata surchauffé = source d'inflammation (mp07)",["catalyst_glow","exhaust_blued"]]),
M(["mp26","exhaust-dpf","Échappement","Vanne EGR","P0401","Électronique","🟡 Important","Toutes diesel","Tous","Diesel","Flux EGR insuffisant (coke)","Fumée, perte puissance, NOx haut","Nettoyage/remplacement EGR","https://expertkevin06-cell.github.io/autodiag-formation-auto/","→ EGR + refroidisseur = couvaison glycol (r02)",["dpf_regen","coolant_leak"]]),
M(["mp27","hv-charge","Logiciel","Système multimédia/charge","TSB-ID","Électronique","🟢 Modéré","Volkswagen","ID.3/ID.4","BEV MEB","Bugs software charge/conso","Reboots, charge interrompue","MàJ OTA/atelier","https://expertkevin06-cell.github.io/my-tech-by-kevin/","→ Indirect : sessions charge prolongées = chauffe (v02)",["investigation_kit","ccs_connector"]]),
M(["mp28","timing-belt","Moteur","Chaîne N47/B47","TSB-N47","Mécanique","🔴 Critique","BMW","Série 1/3/5, X1/X3","2.0 D N47/B47","Chaîne côté boîte : tendeur/guides","Claquement, casse chaîne","TSB : chaîne complète préventif","https://expertkevin06-cell.github.io/my-tech-by-kevin/","→ Casse = huile projetée = FEU baie (M25)",["engine_teardown","engine_burnt"]])];
// ---- Volet JURISTE (analyse croisée technique ↔ droit) ----
function legalNote(theme,seller){var base="";
 if(theme==="timing-belt"||theme==="exhaust-dpf"||theme==="hv-charge"||theme==="elec-12-48")base+="Campagne de rappel/TSB : remise en état GRATUITE par le constructeur (obligation de sécurité, Code conso. art. L421-3 et s. ; responsabilité du fait des produits défectueux, Code civ. art. 1245 et s., déchéance 10 ans). ";
 base+="Vente : garantie de conformité (Code conso. L217-3 et s., 2 ans vendeur pro) et vice caché (Code civ. 1641-1648, 2 ans découverte) ; vendeur particulier : vice caché seul. ";
 if(theme==="fire-origin")base+="Incendie : expertise contradictoire indispensable (CPC art. 16 & 1643), méthode NFPA 921 opposable ; conservation du véhicule et des pièces (scellés) ; déclaration assureur sous 5 jours ouvrés (Code ass. L113-2). ";
 base+="Objectifs possibles : remboursement, prise en charge réparation, indemnisation, annulation — selon statut vendeur (pro/particulier) et ancienneté.";
 return base;}
// ---- Filtres pavé PANNES CONNUES ----
var PK={theme:'all',brand:'',model:'',motor:'',power:''};
function pkFilter(){return MEGA.filter(function(x){
 if(PK.theme!=='all'&&x.theme!==PK.theme)return false;
 if(PK.brand&&!brandMatch(x.brands,PK.brand)&&x.brands!=='Toutes')return false;
 if(PK.model){var rm=seNorm(x.models);var t=seNorm(PK.model).split(/\s+/)[0];if(x.models!=='Tous'&&rm.indexOf(t)<0&&!tmModel(rm,t))return false;}
 if(PK.motor){var mo=seNorm(x.motors);var t2=seNorm(PK.motor).split(/\s+/)[0];if(x.motors!=='Tous'&&mo.indexOf(t2)<0)return false;}
 if(PK.power&&x.motors.indexOf(PK.power)<0&&x.motors!=='Tous')return false;
 return true;});}
function pkCard(x){return '<div class="cause-card"><span class="category-badge">'+x.sev+'</span><span class="badge-src">'+esc15(x.type)+' • '+esc15(x.dtc)+'</span><h3>'+esc15(x.comp)+'</h3><p class="cause-type">'+esc15(x.brands)+' • '+esc15(x.models)+' • '+esc15(x.motors)+'</p><p class="cause-desc"><strong>Panne :</strong> '+esc15(x.cause)+'</p><p class="cause-desc"><strong>Symptômes :</strong> '+esc15(x.sym)+'</p><p class="cause-desc"><strong>Remède :</strong> '+esc15(x.fix)+'</p><p class="identification">🔥 Lien incendie : '+esc15(x.fire)+'</p>'+veRow(x.photos)+'<p style="margin-top:.5rem"><a href="'+x.src+'" target="_blank" rel="noopener" style="color:#1976d2;font-size:.8rem">🔗 Source : '+esc15(x.src.replace('https://',''))+'</a></p></div>';}
function renderPk(){var g=document.getElementById('pkGrid');if(!g)return;var l=pkFilter();
 g.innerHTML=l.map(pkCard).join('')||'<p class="no-results">Aucune panne pour ce thème/filtres</p>';
 var n=document.getElementById('pkCount');if(n)n.textContent=l.length+' fiche(s) MEGA + '+RECALLS.length+' pannes base locale + feed mensuel';
 var lg=document.getElementById('pkLegal');if(lg)lg.innerHTML='<strong>⚖️ Volet juriste :</strong> '+legalNote(PK.theme);}
// ---- IA LOCALE (système expert pondéré, 100 % hors-ligne) ----
var IA_EV=[["bleuissement","exhaust-dpf","Collecteur bleui/violet"],["herbe brulee","exhaust-dpf","Herbe/végétation carbonisée sous caisse"],["courroie","timing-belt","Courroie délaminée/effilochée/débris"],["huile","engine-oil","Goutte/suintement/vernis d'huile"],["pic thermique","cooling","Point chaud caméra thermique"],["perles","elec-12-48","Perles de fusion sur câbles"],["gonflement","hv-charge","Pack/batterie gonflé, évent"],["fumee blanche","hv-charge","Fumée blanche + odeur âcre (Li-ion)"],["dtc","elec-12-48","Code défaut OBD mémorisé"]];
function iaRun(){var out=document.getElementById('iaOut');if(!out)return;
 var theme=(document.getElementById('iaTheme')||{}).value||'all';
 var brand=(document.getElementById('iaBrand')||{}).value||'';
 var sym=seNorm((document.getElementById('iaSym')||{}).value||'');
 var dtc=seNorm((document.getElementById('iaDtc')||{}).value||'');
 var evs=[];document.querySelectorAll('#iaEv input:checked').forEach(function(c){evs.push(c.value);});
 var cands=MEGA.map(function(x){var s=0;
  if(theme!=='all'&&x.theme===theme)s+=4;
  if(brand&&brandMatch(x.brands,brand))s+=3;
  evs.forEach(function(e){if(x.theme===e)s+=4;});
  if(sym){var ws=sym.split(/[\s,]+/).filter(function(t){return t.length>2;});ws.forEach(function(w){if(seNorm(x.cause+' '+x.sym+' '+x.comp).indexOf(w)>=0)s+=2;});}
  if(dtc&&x.dtc.toLowerCase().indexOf(dtc)>=0)s+=5;
  return{x:x,s:s};}).filter(function(y){return y.s>0;}).sort(function(a,b){return b.s-a.s;}).slice(0,6);
 var max=cands.length?cands[0].s:1;
 if(!cands.length){out.innerHTML='<p class="no-results">IA locale : renseignez symptôme, indice ou thème</p>';return;}
 out.innerHTML='<div class="search-results-header">🤖 IA LOCALE (hors-ligne) — '+cands.length+' hypothèse(s) classée(s)</div>'+
 cands.map(function(y){var conf=Math.min(95,Math.round(y.s/max*100));
  return '<div class="cause-card"><span class="category-badge">Confiance '+conf+' %</span><span class="badge-src">'+y.x.sev+' • '+esc15(y.x.dtc)+'</span><h3>'+esc15(y.x.comp)+' — '+esc15(y.x.cause)+'</h3>'+
  '<p class="cause-desc"><strong>Origine probable :</strong> '+esc15(y.x.cause)+'</p>'+
  '<p class="cause-desc"><strong>Mécanisme :</strong> '+esc15(y.x.sym)+'</p>'+
  '<p class="cause-desc"><strong>Conséquences / propagation :</strong> '+esc15(y.x.fire)+'</p>'+
  '<p class="identification">⚖️ '+esc15(legalNote(y.x.theme))+'</p>'+
  veRow(y.x.photos)+
  '<p style="margin-top:.5rem;font-size:.8rem">🔗 <a href="'+y.x.src+'" target="_blank" rel="noopener">Base technique</a> • 🔥 <a href="#section-fo-zone">Méthode foyer</a> • DTC '+esc15(y.x.dtc)+'</p></div>';}).join('');}
// ---- Fusion méga-base externe (vos 4 sites, JSON si exposé) ----
var EXT_JSON=['https://expertkevin06-cell.github.io/auto-diagnostic/apk-base.json','https://expertkevin06-cell.github.io/auto-diagnostic/data/apk-base.json','https://expertkevin06-cell.github.io/aide-redactionnelle-technique/apk-base.json','https://expertkevin06-cell.github.io/aide-redactionnelle-technique/data/apk-base.json'];
async function mergeExternal(){var st=document.getElementById('pkMergeStatus');if(st)st.textContent='⏳ Fusion des bases externes…';var added=0;
 for(var i=0;i<EXT_JSON.length;i++){try{var r=await fetch(EXT_JSON[i],{cache:'no-store'});if(!r.ok)continue;var j=await r.json();
  var arr=j.pannes||j.faults||j.recalls||j.fiches||(Array.isArray(j)?j:[]);
  (arr||[]).forEach(function(p){var id='ext-'+(p.id||p.code||Math.random().toString(36).slice(2,8));if(MEGA.find(function(x){return x.id===id;}))return;
   MEGA.push(M([id,p.theme||'fire-origin',p.system||p.systeme||'-',p.component||p.composant||p.titre||'-',p.dtc||p.code||'-',p.type||'Mécanique',p.severity||p.sev||'🟡 Important',p.brands||p.marque||'Toutes',p.models||p.modele||'Tous',p.motors||p.motorisation||'Tous',p.cause||p.libelle||'-',p.symptoms||p.symptomes||'-',p.fix||p.solution||'-',p.src||EXT_JSON[i].replace('/apk-base.json','/'),p.fire||'→ Analyse incendie : voir fiches foyer',['investigation_kit']));added++;});
  if(added)break;}catch(e){}}
 if(st)st.textContent=added?('✅ '+added+' fiche(s) externe(s) fusionnée(s)'):'⚠️ Aucun JSON exposé — liens directs ci-dessous actifs';
 renderPk();return added;}
// ---- Bootstrap : injection pavé + IA ----
(function boot(){function go(){
 var anchor=document.getElementById('section-overheat');if(!anchor||document.getElementById('section-pannes'))return;
 var sec=document.createElement('section');sec.id='section-pannes';sec.style.borderTop='4px solid #ff6f00';
 sec.innerHTML='<h2>🧰 PANNES CONNUES — méga-base par thème, marque, modèle, motorisation, puissance</h2>'+
 '<div class="garage-form"><select id="pkTheme" class="rs-btn">'+THEMES.map(function(t){return '<option value="'+t[0]+'">'+t[1]+'</option>';}).join('')+'</select>'+
 '<select id="pkBrand" class="rs-btn"><option value="">Marque…</option></select><select id="pkModel" class="rs-btn"><option value="">Modèle…</option></select><select id="pkMotor" class="rs-btn"><option value="">Motorisation…</option></select><select id="pkPower" class="rs-btn"><option value="">Puissance…</option></select>'+
 '<button id="pkBtn" class="btn-primary">🧰 Filtrer les pannes connues</button></div>'+
 '<p id="pkCount" class="ve-intro"></p><button id="pkMerge" class="btn-offline" style="color:#ff6f00">🔄 Fusionner les 4 bases externes (en ligne)</button> <span id="pkMergeStatus"></span>'+
 '<div class="photo-row" style="margin:.6rem 0"><a class="rs-btn" style="display:inline-block;width:auto;padding:.5rem .8rem;text-decoration:none" target="_blank" href="https://expertkevin06-cell.github.io/auto-diagnostic/">🛠️ auto-diagnostic</a><a class="rs-btn" style="display:inline-block;width:auto;padding:.5rem .8rem;text-decoration:none" target="_blank" href="https://expertkevin06-cell.github.io/my-tech-by-kevin/">⚙️ my-tech</a><a class="rs-btn" style="display:inline-block;width:auto;padding:.5rem .8rem;text-decoration:none" target="_blank" href="https://expertkevin06-cell.github.io/aide-redactionnelle-technique/">⚖️ aide-rédactionnelle</a><a class="rs-btn" style="display:inline-block;width:auto;padding:.5rem .8rem;text-decoration:none" target="_blank" href="https://expertkevin06-cell.github.io/autodiag-formation-auto/">🎓 formation-auto</a></div>'+
 '<div id="pkLegal" class="identification"></div><div class="causes-grid" id="pkGrid"></div>';
 anchor.parentNode.insertBefore(sec,anchor);
 var ia=document.createElement('section');ia.id='section-ia';ia.style.borderTop='4px solid #7c4dff';
 ia.innerHTML='<h2>🤖 IA LOCALE gratuite — analyse origine → conséquences (hors-ligne)</h2>'+
 '<div class="garage-form"><select id="iaTheme" class="rs-btn">'+THEMES.map(function(t){return '<option value="'+t[0]+'">'+t[1]+'</option>';}).join('')+'</select>'+
 '<input id="iaBrand" placeholder="Marque (ex : Peugeot)"><input id="iaDtc" placeholder="Code DTC (ex : P0401)">'+
 '<textarea id="iaSym" placeholder="Symptômes observés : claquement froid, fuite huile, fumée blanche, odeur herbe brûlée…" style="grid-column:1/-1;min-height:70px;padding:.7rem;border:2px solid var(--border);border-radius:8px"></textarea></div>'+
 '<div id="iaEv" style="margin:.6rem 0">'+IA_EV.map(function(e){return '<label style="display:inline-block;margin:.2rem .6rem .2rem 0;font-size:.85rem"><input type="checkbox" value="'+e[0]+'"> '+e[2]+'</label>';}).join('')+'</div>'+
 '<button id="iaBtn" class="btn-secondary">🤖 Analyser (IA locale)</button><div id="iaOut" style="margin-top:1rem"></div>';
 sec.parentNode.insertBefore(ia,sec.nextSibling);
 // cascades pavé
 var b=document.getElementById('pkBrand'),mo=document.getElementById('pkModel'),mt=document.getElementById('pkMotor'),pw=document.getElementById('pkPower');
 fillSelect(b,catalogBrands().map(function(k){return PRETTY_BRANDS[k]||cap15(k);}),'Marque…');
 b.addEventListener('change',function(){PK.brand=b.value;fillSelect(mo,modelsFor(b.value),'Modèle…');PK.model='';PK.motor='';PK.power='';});
 mo.addEventListener('change',function(){PK.model=mo.value;fillSelect(mt,motorsFor(b.value,mo.value),'Motorisation…');PK.motor='';PK.power='';});
 mt.addEventListener('change',function(){PK.motor=mt.value;fillSelect(pw,powersFor(b.value,mo.value,mt.value),'Puissance…');PK.power='';});
 pw.addEventListener('change',function(){PK.power=pw.value;});
 document.getElementById('pkTheme').addEventListener('change',function(){PK.theme=this.value;renderPk();});
 document.getElementById('pkBtn').addEventListener('click',renderPk);
 document.getElementById('pkMerge').addEventListener('click',mergeExternal);
 document.getElementById('iaBtn').addEventListener('click',iaRun);
 renderPk();
 console.log('✅ mega-pannes v26 : pavé PANNES CONNUES + IA locale + juriste + fusion externe');}
 if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',go);else go();})();
