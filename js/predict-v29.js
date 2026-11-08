// ================================================================
// PREDICT v29 (__p29) — recherche prédictive par marque / modèle / motorisation
// Champs indépendants, suggestions dès 1 lettre, résultats temps réel
// ================================================================
var __p29=true;
var P29={brand:'',model:'',motor:'',fam:'all'};
function p29AllModels(){var set={};Object.keys(VEHICLE_CATALOG||{}).forEach(function(br){Object.keys(VEHICLE_CATALOG[br]||{}).forEach(function(m){set[m]=1;});});
 RECALLS.forEach(function(r){String(r.models||'').split(',').forEach(function(m){var c=cleanModel(m);if(c&&c.length<45&&!/tous|multi/i.test(c))set[c]=1;});});
 return Object.keys(set).sort();}
function p29AllMotors(){var set={};Object.keys(VEHICLE_CATALOG||{}).forEach(function(br){Object.keys(VEHICLE_CATALOG[br]||{}).forEach(function(m){(VEHICLE_CATALOG[br][m]||[]).forEach(function(s){set[String(s).split('|')[0].trim()]=1;});});});
 RECALLS.forEach(function(r){var m=String(r.motor||'').split('(')[0].trim();if(m&&m!=='-'&&!/tous/i.test(m))set[m]=1;});
 return Object.keys(set).sort();}
function p29MotorMatch(r,t){var mot=seNorm(String(r.motor||'')+' '+String(r.models||''));var ws=seNorm(t).split(/[\s/]+/).filter(Boolean);
 if(!ws.length)return true;return ws.every(function(w){return mot.indexOf(w)>=0;});}
function p29ModelMatch(r,t){var rm=seNorm(cleanModel(r.models||''));var toks=modelTokens(t);if(!toks.length)return true;
 return toks.every(function(tk){return tmModel(rm,tk);});}
function p29Filter(){var list=RECALLS;
 if(P29.brand)list=list.filter(function(r){return brandMatch(r.brand||'',P29.brand);});
 if(P29.model)list=list.filter(function(r){return p29ModelMatch(r,P29.model);});
 if(P29.motor)list=list.filter(function(r){return p29MotorMatch(r,P29.motor);});
 if(P29.fam!=='all'){var f=FAM.find(function(x){return x.key===P29.fam;});
  if(f)list=list.filter(function(r){return (r.subsys||'')===f.sub&&(r.cause||'').indexOf('['+f.label+']')>=0||((r.subsys||'')===f.sub&&String(r.ref||'').indexOf('XB-'+f.key)>=0);});}
 return list;}
function p29Render(){var d=document.getElementById('pResults');if(!d)return;var list=p29Filter();
 var crit=[P29.brand?'marque : '+P29.brand:'',P29.model?'modèle : '+P29.model:'',P29.motor?'motorisation : '+P29.motor:'',P29.fam!=='all'?'famille : '+P29.fam:''].filter(Boolean).join(' • ');
 var h='<div class="search-results-header">🔎 '+list.length+' résultat(s)'+(crit?' — '+esc15(crit):' — tous critères vides')+'</div>';
 h+='<div class="causes-grid">'+list.slice(0,80).map(function(r){return recallCard(r);}).join('')+'</div>';
 if(!list.length)h+='<p class="no-results">Aucun résultat — tapez « ren », « clio », « 1.5 », « bev »…</p>';
 d.innerHTML=h;
 var c=document.getElementById('pCount');if(c)c.textContent=list.length+' pannes/rapels trouvés (base '+RECALLS.length+')';}
var p29Timer=null;
function p29Auto(){clearTimeout(p29Timer);p29Timer=setTimeout(p29Render,300);}
function p29Build(){
 var anchor=document.getElementById('section-overheat');if(!anchor||document.getElementById('section-predict'))return;
 var sec=document.createElement('section');sec.id='section-predict';sec.style.borderTop='4px solid #1565c0';
 sec.innerHTML='<h2>🔎 Recherche prédictive par critère (marque OU modèle OU motorisation)</h2>'+
 '<p class="ve-intro">Chaque champ propose des suggestions dès la 1ʳ lettre ; les résultats se mettent à jour en temps réel. Combinez librement.</p>'+
 '<div class="garage-form">'+
 '<div class="ac-wrap"><input id="pBrand" autocomplete="off" placeholder="Marque : « ren », « toy », « by »…"><div class="ac-box"></div></div>'+
 '<div class="ac-wrap"><input id="pModel" autocomplete="off" placeholder="Modèle : « clio », « elroq », « f-150 »…"><div class="ac-box"></div></div>'+
 '<div class="ac-wrap"><input id="pMotor" autocomplete="off" placeholder="Motorisation : « 1.5 », « tdi », « bev », « e-tech »…"><div class="ac-box"></div></div>'+
 '<button id="pBtn" class="btn-primary">🔎 Rechercher</button></div>'+
 '<div id="pFamChips" class="main-nav" style="box-shadow:none;padding:.5rem 0"></div>'+
 '<p id="pCount" class="ve-intro"></p><div id="pResults"></div>';
 anchor.parentNode.insertBefore(sec,anchor);
 attachAC(document.getElementById('pBrand'),function(){return catalogBrands().map(function(k){return{v:k,label:PRETTY_BRANDS[k]||cap15(k)};});},function(v){P29.brand=v;p29Auto();},null);
 attachAC(document.getElementById('pModel'),function(){var b=P29.brand||document.getElementById('pBrand').value;return b?modelsFor(b):p29AllModels();},function(v){P29.model=v;p29Auto();},null);
 attachAC(document.getElementById('pMotor'),function(){var b=document.getElementById('pBrand').value,m=document.getElementById('pModel').value;
   if(b&&m)return motorsFor(b,m);if(b){var set={};Object.keys(VEHICLE_CATALOG[catalogKey(b)]||{}).forEach(function(mm){(VEHICLE_CATALOG[catalogKey(b)][mm]||[]).forEach(function(s){set[String(s).split('|')[0].trim()]=1;});});return Object.keys(set).sort();}return p29AllMotors();},function(v){P29.motor=v;p29Auto();},null);
 ['pBrand','pModel','pMotor'].forEach(function(id){var el=document.getElementById(id);
  el.addEventListener('input',function(){P29[id==='pBrand'?'brand':id==='pModel'?'model':'motor']=el.value;p29Auto();});
  el.addEventListener('keypress',function(e){if(e.key==='Enter'){P29[id==='pBrand'?'brand':id==='pModel'?'model':'motor']=el.value;p29Render();}});});
 document.getElementById('pBtn').addEventListener('click',function(){P29.brand=document.getElementById('pBrand').value;P29.model=document.getElementById('pModel').value;P29.motor=document.getElementById('pMotor').value;p29Render();});
 var chips=document.getElementById('pFamChips');
 chips.innerHTML='<button class="nav-btn active" data-p29="all">Toutes familles</button>'+FAM.map(function(f){return '<button class="nav-btn" data-p29="'+f.key+'">'+f.label+'</button>';}).join('');
 chips.addEventListener('click',function(e){var b=e.target.closest('[data-p29]');if(!b)return;P29.fam=b.dataset.p29;
  chips.querySelectorAll('.nav-btn').forEach(function(x){x.classList.remove('active');});b.classList.add('active');p29Render();});
 p29Render();
 try{var t1=p29Filter.call(null);var s1=(P29.model='Elroq',p29Filter().length);P29.model='';
  var s2=(P29.motor='2.0 tdi',p29Filter().length);P29.motor='';
  var s3=(P29.brand='Renault',p29Filter().length);P29.brand='';
  localStorage.setItem('predictTest29',JSON.stringify({t:Date.now(),elroq:s1,tdi:s2,renault:s3}));
  console.log('[v29] AUTO-TEST prédictif : modèle Elroq='+s1+' | motor 2.0 tdi='+s2+' | marque Renault='+s3);}catch(e){}
 console.log('✅ predict-v29 actif : recherche prédictive marque/modèle/motorisation');}
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',p29Build);else p29Build();
