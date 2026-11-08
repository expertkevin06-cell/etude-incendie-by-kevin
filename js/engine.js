// ================================================================
// ETUDE INCENDIE BY KEVIN — engine.js : recherches, accès, MAJ, partage
// ================================================================
function seNorm(s){return String(s==null?'':s).toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g,'');}
var SE_SYN={huile:['oil','lubrifiant'],oil:['huile'],carburant:['fuel','essence','gazole','diesel'],fuel:['carburant'],fuite:['leak'],leak:['fuite'],batterie:['battery'],battery:['batterie'],court:['court-circuit','short','arc'],short:['court-circuit'],incendie:['fire','feu'],fire:['incendie'],faisceau:['harness','cablage'],harness:['faisceau'],fusible:['fuse'],fuse:['fusible'],embrasement:['runaway'],runaway:['embrasement'],perle:['bead','perlage'],bead:['perle'],echappement:['exhaust','collecteur'],catalyseur:['cata'],charge:['charging','ccs'],cosse:['borne','terminal']};
function fuzzy16(t,q){var i=0;for(var j=0;j<t.length;j++){if(t[j]===q[i])i++;if(i>=q.length)return true;}return false;}
function tmModel(rm,t){if(rm.indexOf(t)>=0)return true;var m=t.match(/^([a-z]{1,3})(\d{1,3})$/);if(m){var fw=rm.split(' ')[0]||'';if(fw.indexOf(m[1])===0&&rm.indexOf(m[2])>=0)return true;}if(t.length>=4&&fuzzy16(rm,t))return true;return false;}
function seExpand(q){var t=seNorm(q).split(/[\s,;]+/).filter(Boolean);var out={};t.forEach(function(w){out[w]=1;(SE_SYN[w]||[]).forEach(function(s){out[seNorm(s)]=1;});});return Object.keys(out);}
function seLev(a,b){if(Math.abs(a.length-b.length)>2)return 9;var p=[],i,j;for(j=0;j<=b.length;j++)p[j]=j;for(i=1;i<=a.length;i++){var c=[i];for(j=1;j<=b.length;j++)c[j]=Math.min(p[j]+1,c[j-1]+1,p[j-1]+(a[i-1]===b[j-1]?0:1));p=c;}return p[b.length];}
function seScore(text,toks){var t=seNorm(text);var s=0;toks.forEach(function(w){if(t.indexOf(w)>=0)s+=w.length>3?2:1;else{var ws=t.split(/[^a-z0-9]+/);for(var i=0;i<ws.length;i++){if(ws[i].length>4&&seLev(ws[i],w)<=1){s+=1;break;}}}});return s;}
function seSearch(q,facets){var toks=seExpand(q);if(!toks.length)return{recalls:[],cases:[],wires:[],metals:[]};var F=facets||{};
 var recs=[];RECALLS.forEach(function(r){if(F.energy&&r.energy!==F.energy)return;if(F.sub&&seNorm((r.subsys||'')+(r.motor||'')).indexOf(seNorm(F.sub))<0)return;
  var s=seScore((r.brand||'')+' '+(r.models||''),toks)*3+seScore(r.cause||'',toks)*2+seScore(r.mech||'',toks)*2+seScore(r.motor||'',toks)*2+seScore(r.idx||'',toks);if(s>0)recs.push({r:r,s:s});});
 recs.sort(function(a,b){return b.s-a.s;});
 var cases=[];FIRE_DATABASE.fireCauses.forEach(function(c){var s=seScore(c.title+' '+c.description+' '+c.causes.join(' '),toks);if(s>0)cases.push({c:c,s:s});});cases.sort(function(a,b){return b.s-a.s;});
 var wires=[];Object.keys(FIRE_DATABASE.wireAnalysis).forEach(function(k){var w=FIRE_DATABASE.wireAnalysis[k];var s=seScore(w.title+' '+w.identification+w.characteristics.join(' '),toks);if(s>0)wires.push({w:w,s:s});});wires.sort(function(a,b){return b.s-a.s;});
 var metals=[];FIRE_DATABASE.metals.forEach(function(m){var s=seScore(m.name+' '+m.appearance,toks);if(s>0)metals.push({m:m,s:s});});metals.sort(function(a,b){return b.s-a.s;});
 return{recalls:recs.slice(0,20),cases:cases.slice(0,8),wires:wires.slice(0,6),metals:metals.slice(0,6)};}
// ---- Recherche unifiée prédictive ----
var PANNE_KEYWORDS={'courroie':'belt','belt':'belt','fap':'dpf','dpf':'dpf','gpf':'dpf','adblue':'adblue','scr':'adblue','turbo':'turbo','egr':'egr','carburant':'fuel','fuel':'fuel','lpg':'fuel','gpl':'fuel','puissance':'mech','court-circuit':'elec','short':'elec','electrique':'elec','incendie':'fire','feu':'fire','fire':'fire','charge':'charge','charging':'charge','batterie':'batt','battery':'batt','12v':'elec','48v':'elec','ht':'batt','hv':'batt','camera':'camera','adas':'adas','fuite':'leak','leak':'leak','eau':'leak','surchauffe':'overheat','overheat':'overheat','boite':'gearbox','gearbox':'gearbox','frein':'mech','pneu':'mech','logiciel':'software','ota':'software','foyer':'fire','origine':'fire'};
var ENERGY_KW={'thermique':'thermal','thermal':'thermal','essence':'thermal','diesel':'thermal','electrique':'ev','ev':'ev','bev':'ev','hybride':'hybrid','hybrid':'hybrid','phev':'hybrid','mhev':'hybrid','48v':'hybrid','gpl':'lpg','lpg':'lpg','eco-g':'lpg'};
function usTokenize(q){var toks=seNorm(q).split(/[\s,;]+/).filter(function(t){return t.length>0;});var res={brands:[],models:[],pannes:[],energies:[],free:[]};
 toks.forEach(function(t){var b=catalogBrands().find(function(x){return seNorm(PRETTY_BRANDS[x]||x).indexOf(t)>=0;});if(b){res.brands.push(b);return;}
  if(PANNE_KEYWORDS[t]){res.pannes.push(PANNE_KEYWORDS[t]);return;}
  if(ENERGY_KW[t]){res.energies.push(ENERGY_KW[t]);return;}
  var all=[];Object.keys(VEHICLE_CATALOG||{}).forEach(function(br){Object.keys(VEHICLE_CATALOG[br]||{}).forEach(function(m){all.push(m);});});
  var mm=all.find(function(m){return seNorm(m).indexOf(t)>=0;});if(mm){res.models.push(mm);return;}
  res.free.push(t);});
 return res;}
function usMatch(r,t){if(t.brands.length&&!t.brands.some(function(b){return brandMatch(r.brand||'',b);}))return false;
 if(t.models.length){var rm=seNorm(cleanModel(r.models||''));if(!t.models.some(function(m){var n=seNorm(m);return rm.indexOf(n)>=0||tmModel(rm,n);}))return false;}
 if(t.pannes.length&&!t.pannes.some(function(p){return (r.subsys||'')===p||(r.cause||'').toLowerCase().indexOf(p)>=0||(r.mech||'').toLowerCase().indexOf(p)>=0;}))return false;
 if(t.energies.length&&t.energies.indexOf(r.energy)<0)return false;
 if(t.free.length){var hay=seNorm([r.brand,r.models,r.motor,r.cause,r.mech,r.idx].join(' '));if(!t.free.every(function(f){return hay.indexOf(f)>=0||fuzzy16(hay,f);}))return false;}
 return true;}
function usScore(r,t){var s=0,hb=seNorm(r.brand||''),hm=seNorm(r.models||'');t.brands.forEach(function(b){if(hb.indexOf(seNorm(b))>=0)s+=3;});t.models.forEach(function(m){if(hm.indexOf(seNorm(m))>=0)s+=3;});t.pannes.forEach(function(p){if((r.subsys||'')===p)s+=2;});return s;}
function unifiedSearch(q){var t=usTokenize(q);if(!t.brands.length&&!t.models.length&&!t.pannes.length&&!t.free.length)return[];
 var out=[];RECALLS.forEach(function(r){if(usMatch(r,t))out.push({r:r,s:usScore(r,t)});});out.sort(function(a,b){return b.s-a.s;});return out.slice(0,50);}
function usPredictions(q){var n=seNorm(q);if(!n)return[];var sug=[];
 catalogBrands().forEach(function(b){var lbl=PRETTY_BRANDS[b]||cap15(b);if(seNorm(lbl).indexOf(n)>=0)sug.push({type:'marque',val:lbl});});
 Object.keys(VEHICLE_CATALOG||{}).forEach(function(br){Object.keys(VEHICLE_CATALOG[br]||{}).forEach(function(m){if(seNorm(m).indexOf(n)>=0)sug.push({type:'modèle',val:m+' ('+cap15(br)+')'});});});
 Object.keys(PANNE_KEYWORDS).forEach(function(k){if(k.indexOf(n)>=0)sug.push({type:'panne',val:k});});
 return sug.slice(0,12);}
// ---- Multi-sources live ----
var MS_LINKS=[{l:'Rappel Conso',u:'https://rappel.conso.gouv.fr/#/recherche?search=%Q%'},{l:'Safety Gate EU',u:'https://ec.europa.eu/safety-gate-alerts/screen/webReport?search=%Q%'},{l:'NHTSA',u:'https://www.nhtsa.gov/recalls?keyword=%Q%'},{l:'CarComplaints',u:'https://www.google.com/search?q=site:carcomplaints.com+%Q%+fire'},{l:'Consumer Reports',u:'https://www.google.com/search?q=site:consumerreports.org+%Q%+fire'},{l:'IIHS',u:'https://www.google.com/search?q=site:iihs.org+%Q%+fire'},{l:'Which? UK',u:'https://www.google.com/search?q=site:which.co.uk+%Q%+fire'},{l:'ADAC DE',u:'https://www.google.com/search?q=site:adac.de+%Q%+Brand'},{l:'AutoBild DE',u:'https://www.google.com/search?q=site:autobild.de+%Q%+Brand'},{l:'Transport Canada',u:'https://www.google.com/search?q=site:canada.ca+recall+fire+%Q%'},{l:'SafeCar AU',u:'https://www.google.com/search?q=site:safecar.gov.au+fire+%Q%'},{l:'L’Argus',u:'https://www.google.com/search?q=site:largus.fr+%Q%+incendie'},{l:'Caradisiac',u:'https://www.google.com/search?q=site:caradisiac.com+%Q%+incendie'},{l:'Auto-Journal',u:'https://www.google.com/search?q=site:autojournal.fr+%Q%+incendie'},{l:'Turbo.fr',u:'https://www.google.com/search?q=site:turbo.fr+%Q%+incendie'},{l:'Auto-Moto',u:'https://www.google.com/search?q=site:auto-moto.com+%Q%+incendie'},{l:'60 Millions',u:'https://www.google.com/search?q=site:60millions-mag.com+%Q%+incendie'},{l:'Que Choisir',u:'https://www.google.com/search?q=site:quechoisir.org+%Q%+incendie'},{l:'UFC forum',u:'https://www.google.com/search?q=site:forum.quechoisir.org+%Q%+incendie'},{l:'Automobile Mag',u:'https://www.google.com/search?q=site:automobile-magazine.fr+%Q%+incendie'},{l:'Reddit Mechanic',u:'https://www.google.com/search?q=site:reddit.com+r/MechanicAdvice+%Q%+fire'},{l:'NFPA forensique',u:'https://www.google.com/search?q=%Q%+vehicle+fire+investigation'},{l:'Google tous sites',u:'https://www.google.com/search?q=%Q%+rappel+incendie+vehicule'},{l:'Forum mécanique',u:'https://www.google.com/search?q=site:forum-mecanique.com+%Q%+incendie'}];
var MS_FIRE=/incendie|feu|fire|smoke|fum[eé]e|burn|melt|fondu|runaway|embrasement/i;
function lsAbort(ms){var c=new AbortController();setTimeout(function(){c.abort();},ms||8000);return c.signal;}
async function msNhtsa(q){var out=[];var mk=(q.match(/[a-z]+/i)||[''])[0].toUpperCase();var map={VW:'VOLKSWAGEN',MERCEDES:'MERCEDES-BENZ',CHEVY:'CHEVROLET'};mk=map[mk]||mk;if(!mk)return out;
 try{var r=await fetch('https://api.nhtsa.gov/recalls?make='+mk,{signal:lsAbort()});if(r.ok){var j=await r.json();(j.results||[]).forEach(function(rec){var t=(rec.Component||'')+' '+(rec.Summary||'');if(MS_FIRE.test(t))out.push({src:'NHTSA',title:rec.Make+' '+(rec.Model||'')+' '+(rec.ModelYear||''),desc:(rec.Component||'')+' — '+String(rec.Summary||'').slice(0,160),link:'https://www.nhtsa.gov/recalls?keyword='+encodeURIComponent(q)});});}}catch(e){}
 try{var r2=await fetch('https://api.nhtsa.gov/complaints?make='+mk,{signal:lsAbort()});if(r2.ok){var j2=await r2.json();var n=0;(j2.results||[]).forEach(function(c){if(n<8&&MS_FIRE.test(c.Summary||'')){n++;out.push({src:'NHTSA-plaintes',title:c.Make+' '+(c.Model||'')+' '+(c.Year||''),desc:(c.Component||'')+' — '+String(c.Summary||'').slice(0,160),link:'https://www.nhtsa.gov/recalls'});}});}}catch(e){}
 return out.slice(0,20);}
async function msConso(q){var out=[];try{var d=await fetch('https://www.data.gouv.fr/api/1/datasets/rappels-de-produits-de-consommation/',{signal:lsAbort()});if(!d.ok)return out;
 var j=await d.json();var res=(j.resources||[]).find(function(x){return x.format==='csv';});if(!res)return out;
 var csv=await (await fetch(res.url,{signal:lsAbort(12000)})).text();var L=csv.split(/\r?\n/);var H=L[0].split(';');
 var iC=H.findIndex(function(h){return /cat/i.test(h);}),iM=H.findIndex(function(h){return /marque/i.test(h);}),iT=H.findIndex(function(h){return /titre|nom/i.test(h);}),iR=H.findIndex(function(h){return /motif|risque/i.test(h);});
 var ql=seNorm(q).split(' ')[0];var n=0;
 for(var i=1;i<L.length&&n<15;i++){var c=L[i].split(';');var line=seNorm(c.join(' '));if(c[iC]&&/v[eé]hicule|automobile/i.test(c[iC])&&line.indexOf(ql)>=0&&MS_FIRE.test(line)){n++;out.push({src:'Rappel Conso',title:(c[iM]||'')+' '+(c[iT]||''),desc:String(c[iR]||'').slice(0,160),link:'https://rappel.conso.gouv.fr'});}}}catch(e){}
 return out;}
async function msRun(q,render){if(!q)return;var local=unifiedSearch(q);var apis=await Promise.all([msNhtsa(q),msConso(q)]);
 render({q:q,local:local,api:apis[0].concat(apis[1]),sites:MS_LINKS.map(function(s){return{l:s.l,u:s.u.replace('%Q%',encodeURIComponent(q))};})});}
// ---- IndexedDB helpers ----
function idbGet(db,s,k){return new Promise(function(res){try{var t=db.transaction([s],'readonly');var q=t.objectStore(s).get(k);q.onsuccess=function(){res(q.result);};q.onerror=function(){res(null);};}catch(e){res(null);}});}
function idbPut(db,s,v){return new Promise(function(res){try{var t=db.transaction([s],'readwrite');t.objectStore(s).put(v);t.oncomplete=function(){res(true);};t.onerror=function(){res(false);};}catch(e){res(false);}});}
function idbDel(db,s,k){return new Promise(function(res){try{var t=db.transaction([s],'readwrite');t.objectStore(s).delete(k);t.oncomplete=function(){res(true);};}catch(e){res(false);}});}
// ---- MAJ mensuelle feed ----
var FEED_URL='data/recalls-feed.json',MONTH_MS=30*24*3600*1000;
function normFeed(c){return{id:c.id,brand:c.brand||'-',models:c.models||'-',years:c.years||'-',energy:['thermal','ev','hybrid','lpg'].indexOf(c.energy)>=0?c.energy:'thermal',motor:c.motor||'-',region:c.region||'-',src:c.src||'Feed',ref:c.ref||'-',cause:c.cause||'-',mech:c.mech||'Mécanisme à documenter',idx:c.idx||'Cartographie fusion + perles',subsys:c.subsys||'',power:c.power||'',photos:(c.photos&&c.photos.length?c.photos:['engine_burnt'])};}
function dedupeKey(c){return String(c.brand+'|'+c.cause).toLowerCase().slice(0,80);}
async function loadPersistedFeed(db){try{var rec=await idbGet(db,'userData','feedCases');if(rec&&rec.cases){var keys={};RECALLS.forEach(function(r){keys[dedupeKey(r)]=1;});var n=0;
 rec.cases.forEach(function(c){if(!RECALLS.find(function(r){return r.id===c.id;})&&!keys[dedupeKey(c)]){RECALLS.push(normFeed(c));keys[dedupeKey(c)]=1;n++;}});
 console.log('✅ Feed persisté fusionné : '+n);}}catch(e){}}
async function fetchFeed(attempts){var last;for(var i=0;i<(attempts||3);i++){try{var r=await fetch(FEED_URL+'?v='+Date.now(),{cache:'no-store'});if(!r.ok)throw new Error('HTTP '+r.status);return await r.json();}catch(e){last=e;await new Promise(function(s){setTimeout(s,1500*(i+1));});}}throw last;}
async function syncRecallsFeed(db,force){var meta=(await idbGet(db,'userData','feedMeta'))||{};var now=Date.now();
 if(!force&&meta.lastSync&&(now-meta.lastSync)<MONTH_MS)return{skipped:true,meta:meta};
 if(!navigator.onLine)return{skipped:true,offline:true};
 var feed;try{feed=await fetchFeed(3);}catch(e){console.warn('Feed KO:',e.message);return{error:e.message};}
 var keys={};RECALLS.forEach(function(r){keys[dedupeKey(r)]=1;});var added=0;
 (feed.cases||[]).forEach(function(c){if(!RECALLS.find(function(r){return r.id===c.id;})&&!keys[dedupeKey(c)]){RECALLS.push(normFeed(c));keys[dedupeKey(c)]=1;added++;}});
 var hist=((await idbGet(db,'userData','feedHistory'))||{h:[]}).h;hist.unshift({t:now,v:feed.version||1,added:added});
 await idbPut(db,'userData',{key:'feedHistory',h:hist.slice(0,12)});
 await idbPut(db,'userData',{key:'feedCases',cases:feed.cases||[]});
 await idbPut(db,'userData',{key:'feedMeta',lastSync:now,version:feed.version||1,added:added});
 return{added:added,version:feed.version||1};}
async function registerPeriodicSync(){try{if(!('periodicSync' in navigator))return 'non supporté';
 var reg=await navigator.serviceWorker.ready;var p=await navigator.permissions.query({name:'periodic-background-sync'}).catch(function(){return{state:'denied'};});
 if(p.state!=='granted')return 'permission non accordée';
 await reg.periodicSync.register('monthly-recalls',{minInterval:MONTH_MS});return 'actif (30 j)';}catch(e){return 'erreur';}}
// ---- CONTRÔLE D'ACCÈS (admin hash-only + tiers ntfy) ----
var AC={REQ_TOPIC:'etude-incendie-req-83600',DEC_TOPIC:'etude-incendie-dec-83600',UPD_TOPIC:'etude-incendie-upd-83600',NTFY:'https://ntfy.sh',ADMIN_HASH:3615734019,state:null,requests:[],pollTimer:null,netTimer:null,tries:0,lockUntil:0};
function acHash(s){var h=5381;for(var i=0;i<s.length;i++){h=(Math.imul(h,33)+s.charCodeAt(i))|0;}return h>>>0;}
function acDevice(){var d=localStorage.getItem('acDevice');if(!d){d='dev-'+Math.random().toString(36).slice(2,10)+Date.now().toString(36);localStorage.setItem('acDevice',d);}return d;}
function acLoad(){try{AC.state=JSON.parse(localStorage.getItem('acState')||'null')||{role:'locked',name:''};}catch(e){AC.state={role:'locked',name:''};}return AC.state;}
function acSave(){localStorage.setItem('acState',JSON.stringify(AC.state));}
function acUnlocked(){return !!(AC.state&&(AC.state.role==='admin'||AC.state.role==='granted'));}
AC.banner=function(t){var b=document.getElementById('updateBanner');if(b){b.textContent=t;b.classList.add('show');setTimeout(function(){b.classList.remove('show');},9000);}};
function acNotify(title,body){AC.banner(title+' — '+body);try{if('Notification' in window&&Notification.permission==='granted')new Notification(title,{body:body});}catch(e){}}
function acAskNotif(){try{if('Notification' in window&&Notification.permission==='default')Notification.requestPermission();}catch(e){}}
async function acPub(topic,obj){try{await fetch(AC.NTFY+'/'+topic,{method:'POST',body:JSON.stringify(obj),headers:{'Content-Type':'text/plain'}});return true;}catch(e){return false;}}
async function acPoll(topic,since){try{var r=await fetch(AC.NTFY+'/'+topic+'/json?poll=1&since='+(since||'all'),{cache:'no-store'});if(!r.ok)return[];var j=await r.json();return Array.isArray(j)?j:[];}catch(e){return[];}}
function acParse(ev){try{return JSON.parse(ev.message);}catch(e){return null;}}
async function acRequest(name){if(!name||name.length<2){AC.banner('⚠️ Indiquez un nom ou prénom');return;}
 var dev=acDevice();var ok=await acPub(AC.REQ_TOPIC,{device:dev,name:name,ts:Date.now(),ua:(navigator.userAgent||'').slice(0,60)});
 AC.state={role:'pending',name:name,device:dev,since:Date.now()};acSave();acApplyGate();acStartPolling();
 AC.banner(ok?'📨 Demande envoyée à l’admin ('+name+')':'⚠️ Réseau indisponible — réessayez');}
async function acCheckDecisions(){var evs=await acPoll(AC.DEC_TOPIC,AC.state&&AC.state.since?Math.floor(AC.state.since/1000)-120:'all');
 evs.forEach(function(ev){var d=acParse(ev);if(!d||d.device!==acDevice())return;
  if(d.status==='approved'){AC.state={role:'granted',name:d.name||AC.state.name,device:acDevice(),since:Date.now()};acSave();acNotify('✅ Accès accordé','Bienvenue '+AC.state.name);acApplyGate();}
  else if(d.status==='refused'){AC.state={role:'locked',name:'',since:Date.now()};acSave();acNotify('❌ Accès refusé','Par l’administrateur');acApplyGate();}
  else if(d.status==='revoked'){AC.state={role:'locked',name:'',since:Date.now()};acSave();acNotify('⛔ Accès révoqué','Par l’administrateur');acApplyGate();}});}
async function acAdminLogin(pw){if(Date.now()<AC.lockUntil){AC.banner('⛔ Trop de tentatives — verrou actif');return false;}
 var ok=acHash(String(pw||''))===AC.ADMIN_HASH;var input=document.getElementById('gatePwd');if(input)input.value='';
 if(ok){AC.tries=0;AC.state={role:'admin',name:'Kevin',since:Date.now()};acSave();acAskNotif();acApplyGate();acStartPolling();return true;}
 AC.tries++;if(AC.tries>=5){AC.lockUntil=Date.now()+30000;AC.tries=0;AC.banner('⛔ 5 échecs — verrou 30 s');}return false;}
async function acAdminRefresh(){var evs=await acPoll(AC.REQ_TOPIC,'all');var map={};
 evs.forEach(function(ev){var d=acParse(ev);if(d&&d.device)map[d.device]=d;});
 var grants={};try{grants=JSON.parse(localStorage.getItem('acGrants')||'{}');}catch(e){}
 AC.requests=Object.keys(map).map(function(k){var d=map[k];d.status=grants[k]?grants[k].status:'new';return d;}).sort(function(a,b){return b.ts-a.ts;});
 var prev=localStorage.getItem('acReqCount')||'0';
 if(AC.requests.length>parseInt(prev,10)&&AC.requests.length)acNotify('🔔 Nouvelle demande d’accès',AC.requests[0].name);
 localStorage.setItem('acReqCount',String(AC.requests.length));
 if(typeof renderAdmin==='function')renderAdmin();}
async function acDecide(device,name,status){var ok=await acPub(AC.DEC_TOPIC,{device:device,name:name,status:status,ts:Date.now()});
 var g={};try{g=JSON.parse(localStorage.getItem('acGrants')||'{}');}catch(e){}
 g[device]={name:name,status:status,ts:Date.now()};localStorage.setItem('acGrants',JSON.stringify(g));
 acNotify(status==='approved'?'✅ Accordé à '+name:status==='revoked'?'⛔ Révoqué : '+name:'❌ Refusé : '+name,'Décision transmise sur l’APK du tiers');
 acAdminRefresh();return ok;}
async function acPublishUpdate(version,approved){var msg={version:version,approvedForTiers:!!approved,ts:Date.now(),by:'admin'};
 var ok=await acPub(AC.UPD_TOPIC,msg);localStorage.setItem('acLastUpdate',JSON.stringify(msg));
 acNotify('🔄 MAJ v'+version+' publiée',approved?'✅ Applicable aux tiers':'⏳ Admin uniquement');return ok;}
async function acCheckUpdate(){if(AC.state&&AC.state.role==='admin')return;
 var evs=await acPoll(AC.UPD_TOPIC,'all');if(!evs.length)return;var last=acParse(evs[evs.length-1]);if(!last)return;
 var cur=localStorage.getItem('acApprovedVersion')||'';if(last.version===cur)return;
 if(last.approvedForTiers){localStorage.setItem('acApprovedVersion',last.version);acNotify('🔄 MAJ v'+last.version,'Approuvée par l’admin — rechargement…');setTimeout(function(){window.location.reload(true);},3000);}
 else acNotify('🔄 MAJ v'+last.version+' disponible','En attente validation admin');}
function acApplyGate(){var g=document.getElementById('gateOverlay');if(!g)return;
 if(acUnlocked()){g.style.display='none';document.body.classList.remove('locked');
  var ap=document.getElementById('adminPanel');if(ap)ap.style.display=(AC.state.role==='admin')?'block':'none';
  if(AC.state.role==='admin')acAdminRefresh();}
 else{g.style.display='flex';document.body.classList.add('locked');
  var st=document.getElementById('gateStatus');if(st)st.textContent=(AC.state.role==='pending')?'⏳ Demande envoyée ('+AC.state.name+') — en attente…':'🔒 Application protégée';
  var p=document.getElementById('gatePwd');if(p){p.value='';p.placeholder='Mot de passe';}}}
function acStartPolling(){if(AC.pollTimer)return;AC.pollTimer=setInterval(function(){if(!navigator.onLine)return;
 if(AC.state&&AC.state.role==='admin')acAdminRefresh();
 else if(AC.state&&(AC.state.role==='pending'||AC.state.role==='granted')){acCheckDecisions();acCheckUpdate();}},15000);}
function acNetWatch(){if(AC.netTimer)return;AC.netTimer=setInterval(function(){var el=document.getElementById('connectionStatus');if(!el)return;
 if(!navigator.onLine){el.className='connection-status offline';el.innerHTML='<span class="status-text">Hors ligne — base locale</span>';return;}
 fetch('./',{method:'HEAD',cache:'no-store'}).then(function(r){el.className='connection-status online';el.innerHTML='<span class="status-text">📶 4G/5G/WiFi actif</span>';
  if(window.app&&app.db&&r.ok)syncRecallsFeed(app.db,false).then(function(x){if(x&&x.added){AC.banner('🔄 Feed : +'+x.added+' cas');if(typeof renderRecalls==='function')renderRecalls(RECALLS.slice(0,60));}});}).catch(function(){el.className='connection-status offline';el.innerHTML='<span class="status-text">Réseau instable — base locale</span>';});},15000);}
// ---- Partage APK par mail ----
function apkShareMail(){var url=location.origin+location.pathname.replace(/index\.html$/,'').replace(/tools\/$/,'');
 var subject=encodeURIComponent('📱 Etude incendie by Kevin — APK');
 var body=encodeURIComponent('Bonjour,\n\nApplication Etude incendie by Kevin :\n'+url+'\n\n📲 Android : ouvrir dans Chrome → Menu ⋮ → Installer l’application\n💻 Windows / iOS : même lien → bouton installer\n\n🔐 Accès : demande via l’app (notification admin) ou mot de passe admin.\nBase locale massive + MAJ mensuelle + 24 sources live.\n\n— Kevin');
 window.location.href='mailto:?subject='+subject+'&body='+body;}
// ---- Gemini ----
var GEMINI_API_KEY='VOTRE_CLE_API_GEMINI';
async function geminiSearch(query){var ctx='MÉTAUX : '+FIRE_DATABASE.metals.map(function(m){return m.name+' '+m.meltingPointC+'°C';}).join(', ')+' | CAS : '+RECALLS.slice(-15).map(function(r){return r.brand+' '+r.cause;}).join(' ; ');
 var r=await fetch('https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key='+GEMINI_API_KEY,{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({contents:[{parts:[{text:'Expert incendie véhicule/bâtiment. CONTEXTE : '+ctx+'\nQUESTION : '+query+'\nRéponds en français technique (T°, aspects, indices).'}]}]})});
 if(!r.ok)throw new Error('API '+r.status);var d=await r.json();return d.candidates[0].content.parts[0].text;}
console.log('✅ engine.js chargé');
