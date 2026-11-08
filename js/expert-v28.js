// ================================================================
// EXPERT v28 (__v28) — surcharge/échauffement/fluide + causes&conséquences
// Matrice 12 familles × ~45 marques × modèles × motorisations × puissances
// ================================================================
var __v28=true;
// ---- 1) Catalogue étendu (US/ASIE/CN/EU) ----
Object.assign(VEHICLE_CATALOG,{
toyota:{"Yaris":["1.5 Hybrid|68-85 kW"],"Corolla":["1.8 Hybrid|72-90 kW","2.0|125 kW"],"RAV4":["2.5 Hybrid|160-225 kW","2.5 PHEV|225 kW"],"Hilux":["2.4/2.8 D-4D|110-150 kW"],"C-HR":["1.8/2.0 Hybrid|72-145 kW"]},
lexus:{"NX":["350h|179 kW","450h+|227 kW"],"RX":["350h|184 kW","500h|273 kW"],"UX":["300e|150 kW"]},
honda:{"Civic":["1.5 VTEC Turbo|134 kW","2.0 e:HEV|135 kW"],"CR-V":["2.0 e:HEV|135-150 kW"],"HR-V":["1.5 e:HEV|96 kW"],"Jazz":["1.5 e:HEV|80 kW"]},
nissan:{"Qashqai":["1.3 DIG-T MHEV|103-116 kW","e-POWER|140 kW"],"X-Trail":["1.5 e-POWER|150-157 kW"],"Leaf":["BEV|110-160 kW"],"Ariya":["BEV|150-290 kW"],"Juke":["1.0 DIG-T|84 kW"]},
mitsubishi:{"Outlander":["2.5|135 kW","PHEV|185 kW"],"ASX":["1.0/1.3 T|67-110 kW"],"Eclipse Cross":["PHEV|138 kW"]},
mazda:{"CX-5":["2.0/2.5 SkyActiv-G|110-143 kW","2.2 SkyActiv-D|135 kW"],"Mazda 3":["2.0 SkyActiv-X|132 kW"],"CX-60":["2.5 PHEV|241 kW","3.3 e-SkyActiv|187 kW"]},
subaru:{"Forester":["2.0 e-Boxer|110 kW"],"Outback":["2.5|124 kW"],"Solterra":["BEV|160 kW"]},
suzuki:{"Swift":["1.2 DualJet MHEV|61-66 kW"],"Vitara":["1.4 BoosterJet MHEV|95 kW"],"Swace":["1.8 Hybrid|72 kW"],"Across":["2.5 PHEV|225 kW"]},
hyundai:{"i20/i30":["1.0 T-GDI MHEV|74-88 kW"],"Tucson":["1.6 T-GDI HEV|169 kW","1.6 CRDi|100 kW"],"Ioniq 5":["BEV 800V|125-239 kW"],"Kona":["1.0 T-GDI|88 kW","BEV|115-160 kW"],"Santa Fe":["1.6 T-GDI PHEV|195 kW"]},
kia:{"Ceed":["1.0/1.5 T-GDI MHEV|74-118 kW"],"Sportage":["1.6 T-GDI HEV|169 kW","1.6 CRDi|100 kW"],"EV6":["BEV 800V|125-239 kW"],"Niro":["HEV|104 kW","BEV|150 kW"],"Sorento":["1.6 T-GDI PHEV|195 kW"]},
genesis:{"GV60":["BEV 800V|168-239 kW"],"G80 Electrified":["BEV|272 kW"]},
ssangyong:{"Korando":["1.5 T|120 kW","BEV|140 kW"],"Torres":["1.5 T|120 kW"]},
tata:{"Nexon":["1.2 T|88 kW","BEV|105 kW"],"Harrier":["2.0 D|125 kW"]},
mahindra:{"XUV700":["2.0 T-GDI|149 kW","2.2 D|136 kW"],"Scorpio-N":["2.0 T-GDI|149 kW"]},
byd:{"Atto 3":["BEV|150 kW"],"Dolphin":["BEV|70-150 kW"],"Seal":["BEV|150-390 kW"],"Han":["BEV/PHEV|180-380 kW"],"Tang":["BEV|180-380 kW"],"Song Plus":["PHEV|145-195 kW"]},
geely:{"Coolray":["1.5 T|130 kW"],"Monjaro":["2.0 T|175 kW"],"Galaxy L7":["PHEV|163 kW"]},
zeekr:{"001":["BEV 800V|200-400 kW"],"X":["BEV|200-315 kW"]},
lynkco:{"01":["PHEV|195 kW"],"02":["PHEV|195 kW"]},
nio:{"ET5":["BEV|360 kW"],"ES6":["BEV|360 kW"],"ET7":["BEV|480 kW"]},
xpeng:{"P7":["BEV|196-316 kW"],"G9":["BEV 800V|230-405 kW"],"G6":["BEV 800V|190-358 kW"]},
liauto:{"L7/L8/L9":["EREV|330 kW"]},
chery:{"Tiggo 7/8":["1.6 T|145 kW"],"Omoda 5":["1.6 T|145 kW","BEV|150 kW"]},
gwm:{"Haval H6":["1.5 T HEV|179 kW"],"Tank 300":["2.0 T|167 kW"],"Ora 03":["BEV|126 kW"]},
changan:{"Uni-K":["2.0 T|171 kW"],"Deepal S7":["EREV/BEV|160-190 kW"]},
deepal:{"S7":["BEV|190 kW"],"SL03":["BEV|160-190 kW"]},
voyah:{"Free":["EREV/BEV|360 kW"],"Dream":["BEV|320 kW"]},
leapmotor:{"C10":["BEV/EREV|170-200 kW"],"T03":["BEV|80 kW"]},
neta:{"U":["BEV|120-170 kW"],"S":["BEV|340 kW"]},
wuling:{"Bingo":["BEV|50 kW"],"Air EV":["BEV|30 kW"]},
gac:{"Aion Y/S":["BEV|100-180 kW"],"Aion V":["BEV|135-180 kW"]},
ford:{"Fiesta":["1.0 EcoBoost|70-114 kW"],"Focus":["1.0 EcoBoost|92-114 kW"],"Puma":["1.0 EcoBoost MHEV|92-114 kW"],"Kuga":["2.5 PHEV|165 kW","1.5 EcoBoost|110 kW"],"Mustang Mach-E":["BEV|198-358 kW"],"F-150":["2.7/3.5 EcoBoost|242-294 kW","Lightning BEV|318-420 kW"],"Transit":["2.0 EcoBlue|96-125 kW"]},
chevrolet:{"Equinox":["1.5 T|132 kW"],"Bolt EV/EUV":["BEV|150 kW"],"Silverado":["2.7 T|231 kW","6.2|313 kW"]},
gmc:{"Sierra":["2.7 T|231 kW"],"Hummer EV":["BEV|611 kW"]},
cadillac:{"Lyriq":["BEV|255-375 kW"]},
jeep:{"Wrangler":["2.0 T|195 kW","4xe PHEV|280 kW"],"Compass":["1.3 T|96-132 kW","4xe|176 kW"],"Avenger":["1.2|74 kW","BEV|115 kW"]},
dodge:{"Ram 1500":["3.0/5.7|182-295 kW"],"Hornet":["1.3 PHEV|213 kW"]},
tesla:{"Model 3":["BEV|195-375 kW"],"Model Y":["BEV|220-393 kW"],"Model S/X":["BEV|493-750 kW"]},
volvo:{"XC40":["B4 MHEV|155 kW","Recharge BEV|170-300 kW"],"XC60":["B5 MHEV|184 kW","T8 PHEV|335 kW"],"EX30":["BEV|200-315 kW"]},
porsche:{"Macan":["2.0/2.9|195-324 kW","Electric|265-470 kW"],"Cayenne":["3.0 T|260 kW","E-Hybrid|346 kW"],"Taycan":["BEV 800V|300-700 kW"]},
mini:{"Cooper":["1.5/2.0|75-170 kW","E BEV|135 kW"],"Countryman":["1.5/2.0 PHEV|100-233 kW"]},
smart:{"#1":["BEV|200 kW"],"#3":["BEV|200-315 kW"]},
seat:{"Ibiza":["1.0 TSI|70-81 kW"],"Ateca":["1.5 TSI|110 kW"],"Leon":["1.5 TSI|110 kW","PHEV|150 kW"]},
cupra:{"Born":["BEV|150-230 kW"],"Formentor":["1.5 TSI|110 kW","PHEV|180 kW"]},
alfa:{"Giulia":["2.0 T|147-206 kW"],"Tonale":["1.5 MHEV|118 kW","PHEV|208 kW"]},
lancia:{"Ypsilon":["1.2 Hybrid|74 kW","BEV|115 kW"]},
ds:{"DS 3":["1.2 PureTech|96 kW","E-Tense BEV|115 kW"],"DS 7":["1.6 PHEV|165-265 kW"]},
jaguar:{"I-Pace":["BEV|294 kW"],"E-Pace":["1.5 PHEV|227 kW"]},
landrover:{"Defender":["2.0 D/T|147-294 kW","PHEV|297 kW"],"Range Rover Evoque":["1.5 PHEV|227 kW"]}});
// ---- 2) Familles ajoutées ----
FAM.push(
{key:'over',label:'SURCHARGE ÉLECTRIQUE',sub:'elec',en:['thermal','hybrid','ev','lpg'],cause:'Surtension alternateur/DC-DC, régulateur HS, surcharge batterie VE (BMS/chargeur), fusible sur-calibré',mech:'12V : >14,8 V → échauffement + H2 + gonflement ; VE : plaquage lithium → dendrites → court interne',idx:'Batterie gonflée/bouchons fondus, tension >15 V mesurée, logs BMS surcharge',photos:['terminal_glow','battery_runaway','fuse_box']},
{key:'heat',label:'ÉCHAUFFEMENT',sub:'overheat',en:['thermal','hybrid','ev','lpg'],cause:'Roulements, freins, embrayage/DCT, connecteurs sous couple, busbars, pompes',mech:'Friction/Joule → 300-900°C locaux → inflammation graisses, poussières, gaines adjacentes',idx:'Bleuissement local, graisses carbonisées, odeur chaud, thermographie, codes dérating',photos:['exhaust_hot','terminal_glow','tire_burn']},
{key:'fluid',label:'FUITE FLUIDE',sub:'leak',en:['thermal','hybrid','ev','lpg'],cause:'Huile, LDR, DOT frein, DA, AdBlue : joints, durites, pompes, réservoirs, maîtres-cylindres',mech:'Fluides inflammables (huile/DA/DOT) sur points chauds ; LDR vapeur 400°C ; AdBlue NH3 ; perte fonction frein/DA',idx:'Traces colorées (brun/rose/jaune/blanc), niveaux bas, vapeur, GC-MS',photos:['oil_puddle','coolant_leak','exhaust_hot']});
// ---- 3) Génération matrice 12 familles × toutes marques ----
var XB28=[];
Object.keys(VEHICLE_CATALOG).forEach(function(br){
 Object.keys(VEHICLE_CATALOG[br]||{}).forEach(function(model){
  var motors=VEHICLE_CATALOG[br][model]||[];var ens={};
  motors.forEach(function(s){ens[motorEnergy(String(s).split('|')[0])]=1;});
  Object.keys(ens).forEach(function(en){
   FAM.forEach(function(f){
    var id='xb-'+br+'-'+slugM(model)+'-'+f.key;
    if(RECALLS.find(function(r){return r.id===id;}))return;
    var sheet={id:id,brand:cap15(br),models:model,years:'2018-2026',energy:en,
     motor:motors.map(function(s){return String(s).split('|')[0];}).join(' / ')||'-',
     power:motors.map(function(s){return String(s).split('|')[1]||'';}).filter(Boolean).join(' / ')||'-',
     subsys:f.sub,cause:'['+f.label+'] '+f.cause,mech:f.mech,idx:f.idx,src:'Doctrine par modèle (v28)',ref:'XB-'+f.key,photos:f.photos};
    XB28.push(sheet);RECALLS.push(sheet);});});});
// ---- 4) Campagnes doctrine/RETEX surcharge/échauffement/fluide ----
[
R(["oc01","Multi-marques","Tous (12V)","2018-2026","thermal","Alternateur/régulateur","over","Surtension alternateur (régulateur HS)","12V surchargée → H2 + chaleur → gonflement/explosion","Tension >15 V, batterie gonflée","Doctrine","-","",["terminal_glow","battery_runaway"]]),
R(["oc02","Multi-marques VE","Tous BEV","2018-2026","ev","BMS/chargeur","over","Surcharge cellules (paramétrage/chargeur)","Plaquage Li → dendrites → court interne différé","Cellules gonflées, logs BMS","Doctrine","-","",["battery_runaway","liion_cell"]]),
R(["oc03","Multi-marques","Tous","2018-2026","thermal","Fusibles","over","Fusible sur-calibré posé","Protection absente → surchauffe ligne complète","Isolation carbonisée uniforme","Doctrine","-","",["fuse_box","melted_plugs"]]),
R(["ht01","Multi-marques","Tous","2018-2026","thermal","Roulements roue","heat","Roulement sec/grippé","Friction → 300-600°C → inflammation graisse/poussière","Bleuissement moyeu, odeur","Doctrine","-","",["tire_burn","exhaust_hot"]]),
R(["ht02","Multi-marques DCT","DQ200/DPS6/EDC","2015-2026","thermal","Boîte double embrayage","heat","Glissement embrayage sec","Surchauffe → fumée → limp","Disques bleuis, odeur brûlé","Doctrine/NHTSA","-",  "",["engine_burnt"]]),
R(["ht03","Multi-marques","Tous","2018-2026","thermal","Freins","heat","Étrier grippé/piston bloqué","Friction continue → 600-900°C → pneu/garnitures","Disque bleui, plaquette vitrifiée","Doctrine","-","",["tire_burn","car_fire_road"]]),
R(["fl01","Multi-marques","Tous","2018-2026","thermal","Maître-cylindre frein","fluid","Fuite DOT (joints coupelles)","Perte freinage + glycol inflammable sur chaud","Niveau bas, traces jaunes","Doctrine","-","",["coolant_leak","exhaust_hot"]]),
R(["fl02","Multi-marques","DA hydraulique","2018-2026","thermal","Pompe/durite DA","fluid","Fuite huile DA HP","Minérale 250-300°C sur collecteur","Noir brillant","Doctrine","-","",["oil_puddle","exhaust_hot"]]),
R(["fl03","Multi-marques diesel","SCR","2018-2026","thermal","AdBlue","fluid","Fuite/cristallisation circuit DEF","NH3 à chaud + corrosion connectiques","Cristaux blancs","Doctrine","-","",["coolant_leak"]]),
R(["fl04","Multi-marques turbo","Tous","2018-2026","thermal","Retour huile turbo","fluid","Durite retour turbo poreuse","Huile sur carter turbo 600-1000°C","Turbo gras","Doctrine","-","",["exhaust_hot","oil_puddle"]]),
R(["fl05","Multi-marques VE","Packs refroidis","2018-2026","ev","Plaque froide","fluid","Fuite glycol boucle batterie","Glycol sur busbars → arc HT","Traces roses pack","Doctrine","-","",["coolant_leak","pack_teardown"]]),
R(["fl06","Multi-marques","Boîtes auto","2018-2026","thermal","Convertisseur/ATF","fluid","Fuite ATF convertisseur","ATF 300-400°C sur échappement","Rouge-brun","Doctrine","-","",["oil_puddle","exhaust_hot"]])
].forEach(function(x){if(!RECALLS.find(function(r){return r.id===x.id;}))RECALLS.push(x);});
// ---- 5) Causes & conséquences sapiteur (injectées dans chaque modale) ----
var CAUSES_CONSQ={
elec:{causes:["Oxydation/sulfatation cosses","Couple de serrage insuffisant","Infiltration d'eau (auvent, lave-glace, gué)","Vibrations & fatigue de flexion","Rongeurs (fouines)","Épissures accessoires non OEM","Vieillissement isolation (chaleur/UV)"],conseq:["Arc local → incendie de gaine","Panne intermittente puis totale","Immobilisation véhicule","Propagation habitacle/baie","Fumées toxiques (PVC : HCl)"],aggr:["Humidité + salage hivernal","Kilométrage élevé","Accessoires ajoutés"],secur:["Contrôle couple & étanchéité","Fusibles au calibre d'origine","Inspection gaines/œillets"]},
short:{causes:["Frottement mécanique contre tôle","Pincement après réparation carrosserie","Isolation craquelée (âge/chaleur)","Eau conductrice dans boîtiers","Contact franc à la masse (B+ toujours énergisé)"],conseq:["Arc >2000°C instantané","Fusion/projections de cuivre","Incendie rapide localisé","Perte fonctions sécurité (ABS, airbags, eCall)"],aggr:["Absence de protection fusible proche","Gaine absente ou déplacée"],secur:["Arc mapping depuis B+","Remplacement du tronçon + protection calibrée"]},
charge:{causes:["Broches contaminées (humidité, sel, limaille)","Relais/contacteurs soudés","OBC / ICCU défaillant","Câble EVSE sous-dimensionné ou endommagé","Software borne/vehicle incompatibilité"],conseq:["Immobilisation (non-charge)","Surchauffe connecteur → feu de trappe","Dégradation batterie par charges incomplètes répétées"],aggr:["Charges DC répétées","Températures extrêmes"],secur:["Câbles/bornes certifiés","Contrôle visuel broches","MàJ software"]},
over:{causes:["Régulateur d'alternateur HS","DC-DC défaillant (48V/HT→12V)","BMS/chargeur VE défaillant","Fusible sur-calibré posé par erreur","Paramétrage de charge erroné"],conseq:["Batterie 12V gonflée + H2 → explosion","Gonflement/plaquage Li cellules VE → runaway différé","Grillage de calculateurs sensibles"],aggr:["Ambiante chaude","Batterie âgée"],secur:["Mesure tension en charge (13,8-14,6 V)","MàJ BMS/chargeur","Fusibles strictement d'origine"]},
heat:{causes:["Roulements/plaquettes/embrayage en friction anormale","Glissement DCT/CVT","Joule sur connecteurs sous-couplés ou busbars","Refroidissement insuffisant (radiateur, pompe)"],conseq:["Dégradation lubrifiants → saisie","Inflammation graisses/poussières adjacentes","Feu local (roue, baie, boîte)","Dérating/performance réduite"],aggr:["Traction/charge","Conduite soutenue","Ambiante chaude"],secur:["Entretien lubrifiants/plaquettes","Thermographie préventive","Couples de serrage connecteurs"]},
range:{causes:["Vieillissement/déséquilibre cellules","Décharge parasite (veille, OTA)","Thermique froid/chaud non compensé","Calibration SOC dérivante"],conseq:["Autonomie réduite (-20 à -40%)","Immobilisation « panne sèche » électrique","Perte de valeur résiduelle"],aggr:["Charges 100% quotidiennes","Stationnement prolongé chaud/froid"],secur:["Charge 20-80% usuelle","Préconditionnement","Contrôle ΔV/ΔT périodique"]},
fuel:{causes:["Durites/joints âgés ou poreux","Vibrations & flexions","Impacts gravillons/corrosion réservoir","Montage/réparation non conforme","Raccords HP fatigués (GDI/CR)"],conseq:["Inflammation sur point chaud (210-280°C)","Flash immédiat si fuite HP (aérosol)","Nappe au sol → inflammation retour","Perte de carburant/pollution"],aggr:["Pression HP","Ligne échappement chaude"],secur:["Contrôle durites/colliers","Raccords d'origine","Détection odeur/traces"]},
leak:{causes:["Joints/durites/pompes âgés","Corrosion radiateurs/échangeurs","Colliers desserrés","Plaque froide/échangeur VE fissuré"],conseq:["Surchauffe moteur (LDR)","Glycol ~400°C sur échappement → vapeur puis flamme","Glycol sur HT → arc (VE)","Perte freinage/DA si DOT/DA"],aggr:["Cycles thermiques","Vibrations"],secur:["Contrôle niveaux/traces","Purge & LDR spec","Inspection échangeurs"]},
fluid:{causes:["Coupelles/joints maîtres-cylindres","Durites DA/ATF poreuses","Cristallisation AdBlue","Retours huile turbo/boîte"],conseq:["Perte de fonction (frein/DA)","Inflammation sur organes chauds","NH3 (AdBlue) à chaud","Surchauffe boîte"],aggr:["Pression circuit","Température ligne"],secur:["Contrôles visuels niveaux","Remplacement durites datées"]},
fire:{causes:["Combinaison combustible + source d'énergie","Défaut électrique (arc/Joule)","Fuite fluide inflammable","Organe chaud (échappement, turbo, FAP)"],conseq:["Embrasement du volume (8-15 min habitacle)","Propagation véhicules/bâtiment voisins","Fumées toxiques mortelles (CO, HCN, HF)","Perte totale du véhicule"],aggr:["Ventilation/ouvrants","Combustibles chargés","Confinement parking"],secur:["Détection précoce fumées","Extinction adaptée (VE : refroidir pack)"]},
dpf:{causes:["Cycles urbains courts","Régénérations interrompues","Huile/combustible dilué"],conseq:["Surchauffe soubassement 600-1200°C","Inflammation végétation/fluide sous caisse","Colmatage → contre-pression"],aggr:["Stationnement herbes","Charge remorque"],secur:["Trajets régénération","Contrôle boucliers"]},
egr:{causes:["Coke/suies vanne","Fuite refroidisseur EGR"],conseq:["Couvaison glycol+suies → feu baie","Perte puissance, fumées"],aggr:["Usage urbain"],secur:["Campagnes rappel refroidisseur"]},
adblue:{causes:["Cristallisation injecteur/pompe","Capteur NOx défaillant"],conseq:["Défaut NOx → dérivation","NH3 à chaud","Immobilisation (dérivation bloquée)"],aggr:["AdBlue non conforme"],secur:["AdBlue certifié","Purge circuit"]},
turbo:{causes:["Lubrification insuffisante (coking)","Débris courroie/limaille","Wastegate grippé"],conseq:["Fuite huile sur turbo 600-1000°C → FEU","Perte puissance","Surchauffe échappement"],aggr:["Vidanges espacées"],secur:["Vidanges spec","Contrôle jeu/wastegate"]},
belt:{causes:["Courroie humide dégradée dans l'huile","Intervalle dépassé","Tensionneur HS"],conseq:["Rupture → casse moteur","Débris → crépine → pression huile → serrage + fuite sur chaud"],aggr:["Huile vieillie"],secur:["Remplacement intervalle strict"]},
gearbox:{causes:["Mécatronique/électrovanne","Huile dégradée","Glissement embrayage"],conseq:["Surchauffe huile → limp","À-coups/perte propulsion"],aggr:["Traction"],secur:["Vidange boîte spec"]},
adas:{causes:["Désalignement caméra/radar (pare-brise, choc)","Capteurs encrassés","Software"],conseq:["Perte AEB/ACC/lane-keep","Freinages intempestifs"],aggr:["Remplacement pare-brise non calibré"],secur:["Calibration après vitrage"]},
camera:{causes:["Buée/condensation optique","Connecteur oxydé"],conseq:["Perte vision/recul"],aggr:["Lavages HP"],secur:["Contrôle étanchéité"]},
mech:{causes:["Usure normale/non entretien","Défaut fabrication"],conseq:["Perte fonction","Surchauffe locale","Fuite fluides"],aggr:["Usage intensif"],secur:["Entretien constructeur"]},
batt:{causes:["Défaut cellule/isolement","Choc/immersion","Surcharge"],conseq:["Runaway + jet-fire","Ré-ignition 24 h-3 sem.","Immobilisation"],aggr:["Charges DC répétées","Chaleur"],secur:["Contrôle isolement","Stockage extérieur"]}};
function familyOf(r){var t=seNorm((r.subsys||'')+' '+(r.id||'')+' '+(r.cause||''));
 if(/surcharge|surtension|over/.test(t))return 'over';
 if(/echauffement|heat|roulement|frein|embrayage/.test(t)&&!/egr/.test(t))return 'heat';
 if(/fluide|dot|da\b|adblue|atf/.test(t))return 'fluid';
 if(/carburant|fuel|essence|diesel|gpl/.test(t))return 'fuel';
 if(/ldr|glycol|coolant|eau/.test(t))return 'leak';
 if(/court|arc|perle/.test(t))return 'short';
 if(/charge|ccs|obc|iccu|evse/.test(t))return 'charge';
 if(/autonomie|range|soc/.test(t))return 'range';
 if(/dpf|fap|gpf/.test(t))return 'dpf';
 if(/egr/.test(t))return 'egr';
 if(/adblue|scr/.test(t))return 'adblue';
 if(/turbo/.test(t))return 'turbo';
 if(/courroie|belt/.test(t))return 'belt';
 if(/bo[îi]te|gearbox|dsg|dct|cvt/.test(t))return 'gearbox';
 if(/adas|aeb|acc/.test(t))return 'adas';
 if(/camera|cam[eé]ra/.test(t))return 'camera';
 if(/batterie|battery|pack|runaway/.test(t))return 'batt';
 if(/faisceau|cosse|relais|fusible|alternateur|12v|48v|[eé]lectrique/.test(t))return 'elec';
 return 'fire';}
function ccHTML(r){var cc=CAUSES_CONSQ[familyOf(r)]||CAUSES_CONSQ.fire;
 return '<div class="modal-section"><h3>5. Causes possibles (sapiteur)</h3><ul>'+cc.causes.map(function(x){return '<li>'+esc15(x)+'</li>';}).join('')+'</ul></div>'+
 '<div class="modal-section"><h3>6. Conséquences de l’avarie</h3><ul>'+cc.conseq.map(function(x){return '<li>'+esc15(x)+'</li>';}).join('')+'</ul></div>'+
 '<div class="modal-section"><h3>7. Facteurs aggravants</h3><ul>'+cc.aggr.map(function(x){return '<li>'+esc15(x)+'</li>';}).join('')+'</ul></div>'+
 '<div class="modal-section"><h3>8. Sécurité & prévention</h3><ul>'+cc.secur.map(function(x){return '<li>'+esc15(x)+'</li>';}).join('')+'</ul></div>';}
// ---- 6) Enrichissement automatique de TOUTES les modales ----
var _erPrev28=window.expandRecall;
window.expandRecall=function(id){if(_erPrev28)_erPrev28(id);
 var r=RECALLS.find(function(x){return x.id===id;});if(!r)return;
 var ms=document.querySelectorAll('.modal-overlay .modal-content');var mc=ms[ms.length-1];if(mc)mc.insertAdjacentHTML('beforeend',ccHTML(r));};
var _efPrev28=window.expandFiche;
window.expandFiche=function(id){if(_efPrev28)_efPrev28(id);
 var f=(window.FICHES||[]).find(function(x){return x.id===id;});if(!f)return;
 var ms=document.querySelectorAll('.modal-overlay .modal-content');var mc=ms[ms.length-1];if(!mc)return;
 var fake={subsys:'',id:'',cause:f.title+' '+f.defauts.join(' ')};
 mc.insertAdjacentHTML('beforeend',ccHTML(fake));};
// ---- 7) Synonymes & familles de recherche ----
Object.assign(PANNE_KEYWORDS,{surcharge:'over',overcharge:'over',surtension:'over','echauffement':'heat',heat:'heat',fluide:'fluid',fluid:'fluid',ldr:'leak','liquide':'leak',dot:'fluid',da:'fluid',atf:'fluid'});
if(window.FAMKW){FAMKW.over=['over'];FAMKW.heat=['heat'];FAMKW.fluid=['fluid','leak','fuel'];FAMKW.surcharge=['over'];FAMKW.echauffement=['heat'];}
// ---- 8) Rafraîchir la section matrice (chips 12 familles) ----
setTimeout(function(){if(typeof renderXB==='function'){try{renderXB();}catch(e){}}},0);
// ---- 9) Auto-test ----
document.addEventListener('DOMContentLoaded',function(){try{
 var t1=unifiedSearch('renault clio surcharge').length;
 var t2=unifiedSearch('byd han fuite fluide').length;
 var t3=unifiedSearch('ford f-150 échauffement').length;
 var t4=unifiedSearch('skoda octavia court-circuit').length;
 localStorage.setItem('searchTest28',JSON.stringify({t:Date.now(),surcharge:t1,fluide:t2,heat:t3,short:t4}));
 console.log('[v28] AUTO-TEST : surcharge='+t1+' fluide='+t2+' échauffement='+t3+' court='+t4+' | XB28='+XB28.length+' fiches doctrine générées | RECALLS='+RECALLS.length);
}catch(e){console.warn('[v28] selftest',e);}});
