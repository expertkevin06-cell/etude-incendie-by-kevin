// ================================================================
// PREDICT v30 (__p30) — prédictif marque/modèle/motorisation + DOSSIER technique
// Matching normalisé robuste (variantes, majuscules, espaces) + dossier modèle
// ================================================================
var __p30=true;
var P30={brand:'',model:'',motor:'',fam:'all'};
function p30Compact(s){return seNorm(s).replace(/[^a-z0-9]+/g,'');}
function p30ModelMatch(r,t){var q=p30Compact(t);if(!q)return true;
 var hm=p30Compact(r.models||'');if(hm.indexOf(q)>=0)return true;
 var words=seNorm(cleanModel(r.models||'')).split(/[^a-z0-9.]+/).filter(Boolean);
 for(var i=0;i<words.length;i++){var w=words[i];if(q.length>=3&&w.indexOf(q)===0)return true;if(q.length>=5&&w.length>=5&&seLev(w,q)<=1)return true;}
 return tmModel(seNorm(cleanModel(r.models||'')),seNorm(t));}
function p30MotorMatch(r,t){var q=p30Compact(t);if(!q)return true;
 var mot=p30Compact((r.motor||'')+' '+(r.power||''));if(mot.indexOf(q)>=0)return true;
 var ws=seNorm(t).split(/[\s/]+/).filter(Boolean);
 return ws.every(function(w){return seNorm(r.motor||'').indexOf(w)>=0||seNorm(r.power||'').indexOf(w)>=0||seNorm(r.models||'').indexOf(w)>=0;});}
function p30Filter(){var list=RECALLS.slice();
 if(P30.brand)list=list.filter(function(r){return brandMatch(r.brand||'',P30.brand);});
 if(P30.model)list=list.filter(function(r){return p30ModelMatch(r,P30.model);});
 if(P30.motor)list=list.filter(function(r){return p30MotorMatch(r,P30.motor);});
 if(P30.fam!=='all'){var f=FAM.find(function(x){return x.key===P30.fam;});if(f)list=list.filter(function(r){return (r.subsys||'')===f.sub;});}
 return list;}
function p30Dossier(){var m=P30.model||P30.brand;if(!m||m.length<2)return '';
 var list=p30Filter();if(!list.length)return '';
 var years={},ens={},fams={},photos=[],motors={};
 list.forEach(function(r){String(r.years||'').split(/[,–-]/).forEach(function(y){var d=y.trim().slice(0,4);if(/^(19|20)\d\d$/.test(d))years[d]=1;});
  ens[r.energy]=1;var f=r.subsys||'fire';fams[f]=(fams[f]||0)+1;
  (r.photos||[]).slice(0,2).forEach(function(p){if(photos.length<6&&photos.indexOf(p)<0)photos.push(p);});
  String(r.motor||'').split('/').forEach(function(x){var c=x.split('(')[0].trim();if(c&&c!=='-'&&c.length<28)motors[c]=1;});});
 var cat=[];Object.keys(VEHICLE_CATALOG||{}).forEach(function(br){Object.keys(VEHICLE_CATALOG[br]||{}).forEach(function(mn){
  if(p30ModelMatch({models:mn},m))cat.push(cap15(br)+' '+mn+' : '+(VEHICLE_CATALOG[br][mn]||[]).map(function(s){var p=s.split('|');return p[0]+(p[1]?' ('+p[1]+')':'');}).join(', '));});});
 var EN={thermal:'thermique',ev:'électrique',hybrid:'hybride',lpg:'GPL'};
 var h='<div class="id-card" style="border-left:5px solid #1565c0"><h3>📇 DOSSIER TECHNIQUE : '+esc15(m.toUpperCase())+'</h3>'+
 '<p><strong>Périodes couvertes :</strong> '+Object.keys(years).sort().join(' • ')+'</p>'+
 '<p><strong>Énergies :</strong> '+Object.keys(ens).map(function(e){return EN[e]||e;}).join(', ')+'</p>'+
 '<p><strong>Motorisations rencontrées :</strong> '+Object.keys(motors).slice(0,14).join(' • ')+'</p>'+
 (cat.length?'<p><strong>Catalogue (motorisations & puissances) :</strong> '+cat.slice(0,8).join(' | ')+'</p>':'')+
 '<p><strong>Répartition des '+list.length+' fiches par famille :</strong> '+Object.keys(fams).sort().map(function(f){return f+' ('+fams[f]+')';}).join(' • ')+'</p>'+
 (photos.length?veRow(photos):'')+
 (p30Compact(m).indexOf('elroq')>=0?'<button class="btn-expand" onclick="document.getElementById(\'section-elroq\').scrollIntoView({behavior:\'smooth\'})">🟢 Ouvrir la section dédiée Skoda Elroq (36 fiches)</button>':'')+
 '</div>';
 return h;}
function p30Render(){var d=document.getElementById('pResults');if(!d)return;var list=p30Filter();
 var crit=[P30.brand?'marque : '+P30.brand:'',P30.model?'modèle : '+P30.model:'',P30.motor?'motorisation : '+P30.motor:'',P30.fam!=='all'?'famille : '+P30.fam:''].filter(Boolean).join(' • ');
 var h='<div class="search-results-header">🔎 '+list.length+' résultat(s)'+(crit?' — '+esc15(crit):' — saisie libre')+'</div>';
 h+=p30Dossier();
 h+='<div class="causes-grid">'+list.slice(0,100).map(function(r){return recallCard(r);}).join('')+'</div>';
 if(!list.length)h+='<p class="no-results">Aucun résultat — essayez « elroq », « clio », « 2.0 tdi », « bev », « f-150 »</p>';
 d.innerHTML=h;
 var c=document.getElementById('pCount');if(c)c.textContent=list.length+' fiche(s) présentée(s) sur '+RECALLS.length+' en base';}
var p30Timer=null;function p30Auto(){clearTimeout(p30Timer);p30Timer=setTimeout(p30Render,300);}
// ---- Override recherche unifiée : ajoute le DOSSIER ----
window.runUnifiedNow=function(){var inp=document.getElementById('unifiedInput');var d=document.getElementById('unifiedResults');if(!inp||!d)return;
 var q=inp.value.trim();if(!q){d.innerHTML='';return;}
 var toks=seNorm(q).split(/[\s,;]+/).filter(Boolean);
 P30.brand='';P30.model='';P30.motor='';P30.fam='all';
 var b=catalogBrands().find(function(x){var lb=p30Compact(PRETTY_BRANDS[x]||x);return toks.some(function(t){return lb.indexOf(t)===0||lb===t;});});
 if(b)P30.brand=b;
 var modelTok=null;Object.keys(VEHICLE_CATALOG||{}).forEach(function(br){Object.keys(VEHICLE_CATALOG[br]||{}).forEach(function(mn){var cm=p30Compact(mn);toks.forEach(function(t){if(t.length>=3&&!modelTok&&(cm.indexOf(t)>=0||t.indexOf(cm)>=0&&cm.length>=4))modelTok=mn;});});});
 if(modelTok)P30.model=modelTok;
 var res=unifiedSearch(q);
 var h='<div class="search-results-header">🔎 '+res.length+' résultat(s) pour « '+esc15(q)+' »</div>'+sourceLinks(q);
 h+=p30Dossier();
 h+=res.map(function(x){return '<div class="search-result-item" onclick="expandRecall(\''+x.r.id+'\')"><h4>[score '+x.s+'] '+esc15(x.r.brand)+' — '+esc15(x.r.models)+' <span class="badge-src">'+esc15(x.r.src)+'</span></h4><p>'+esc15(x.r.cause)+'</p></div>';}).join('');
 if(!res.length&&!P30.model)h+='<p class="no-results">Aucun résultat</p>';
 d.innerHTML=h;};
// ---- Construction UI ----
function p30Build(){
 if(document.getElementById('section-predict'))return;
 var anchor=document.getElementById('section-overheat');if(!anchor)return;
 var sec=document.createElement('section');sec.id='section-predict';sec.style.borderTop='4px solid #1565c0';
 sec.innerHTML='<h2>🔎 Recherche prédictive par critère — marque OU modèle OU motorisation</h2>'+
 '<p class="ve-intro">Suggestions dès la 1ʳ lettre • résultats + DOSSIER technique en temps réel • valable toutes marques/modèles/motorisations.</p>'+
 '<div class="garage-form">'+
 '<div class="ac-wrap"><input id="pBrand" autocomplete="off" placeholder="Marque : « ren », « toy », « by », « sk »…"><div class="ac-box"></div></div>'+
 '<div class="ac-wrap"><input id="pModel" autocomplete="off" placeholder="Modèle : « elroq », « clio », « f-150 », « id.4 »…"><div class="ac-box"></div></div>'+
 '<div class="ac-wrap"><input id="pMotor" autocomplete="off" placeholder="Motorisation : « 1.5 », « tdi », « bev », « e-tech », « 210 »…"><div class="ac-box"></div></div>'+
 '<button id="pBtn" class="btn-primary">🔎 Rechercher</button></div>'+
 '<div id="pFamChips" class="main-nav" style="box-shadow:none;padding:.5rem 0"></div>'+
 '<p id="pCount" class="ve-intro"></p><div id="pResults"></div>';
 anchor.parentNode.insertBefore(sec,anchor);
 attachAC(document.getElementById('pBrand'),function(){return catalogBrands().map(function(k){return{v:k,label:PRETTY_BRANDS[k]||cap15(k)};});},function(v){P30.brand=v;p30Auto();},null);
 attachAC(document.getElementById('pModel'),function(){var b=P30.brand||document.getElementById('pBrand').value;return b?modelsFor(b):p30AllModels();},function(v){P30.model=v;p30Auto();},null);
 attachAC(document.getElementById('pMotor'),function(){var b=document.getElementById('pBrand').value,m=document.getElementById('pModel').value;
  if(b&&m)return motorsFor(b,m);
  if(b){var k=catalogKey(b),set={};Object.keys(VEHICLE_CATALOG[k]||{}).forEach(function(mm){(VEHICLE_CATALOG[k][mm]||[]).forEach(function(s){set[String(s).split('|')[0].trim()]=1;});});return Object.keys(set).sort();}
  return p30AllMotors();},function(v){P30.motor=v;p30Auto();},null);
 [['pBrand','brand'],['pModel','model'],['pMotor','motor']].forEach(function(pair){var el=document.getElementById(pair[0]);
  el.addEventListener('input',function(){P30[pair[1]]=el.value;p30Auto();});
  el.addEventListener('keypress',function(e){if(e.key==='Enter'){P30[pair[1]]=el.value;p30Render();}});});
 document.getElementById('pBtn').addEventListener('click',function(){P30.brand=document.getElementById('pBrand').value;P30.model=document.getElementById('pModel').value;P30.motor=document.getElementById('pMotor').value;p30Render();});
 var chips=document.getElementById('pFamChips');
 chips.innerHTML='<button class="nav-btn active" data-p30="all">Toutes familles</button>'+FAM.map(function(f){return '<button class="nav-btn" data-p30="'+f.key+'">'+f.label+'</button>';}).join('');
 chips.addEventListener('click',function(e){var b=e.target.closest('[data-p30]');if(!b)return;P30.fam=b.dataset.p30;
  chips.querySelectorAll('.nav-btn').forEach(function(x){x.classList.remove('active');});b.classList.add('active');p30Render();});
 p30Render();
 try{P30.model='Elroq';var n1=p30Filter().length;var d1=p30Dossier().length>200;P30.model='';
  P30.motor='2.0 tdi';var n2=p30Filter().length;P30.motor='';
  P30.brand='Renault';var n3=p30Filter().length;P30.brand='';
  P30.model='f-150';var n4=p30Filter().length;P30.model='';
  localStorage.setItem('predictTest30',JSON.stringify({t:Date.now(),elroq:n1,dossier:d1,tdi:n2,renault:n3,f150:n4}));
  console.log('[v30] AUTO-TEST : Elroq='+n1+' (dossier='+d1+') | 2.0 tdi='+n2+' | Renault='+n3+' | f-150='+n4);}catch(e){}
 console.log('✅ predict-v30 actif : prédictif + dossier technique toutes marques');}
function p30AllModels(){var set={};Object.keys(VEHICLE_CATALOG||{}).forEach(function(br){Object.keys(VEHICLE_CATALOG[br]||{}).forEach(function(m){set[m]=1;});});
 RECALLS.forEach(function(r){String(r.models||'').split(',').forEach(function(m){var c=cleanModel(m);if(c&&c.length<45&&!/tous|multi/i.test(c))set[c]=1;});});
 return Object.keys(set).sort();}
function p30AllMotors(){var set={};Object.keys(VEHICLE_CATALOG||{}).forEach(function(br){Object.keys(VEHICLE_CATALOG[br]||{}).forEach(function(m){(VEHICLE_CATALOG[br][m]||[]).forEach(function(s){set[String(s).split('|')[0].trim()]=1;});});});
 RECALLS.forEach(function(r){var m=String(r.motor||'').split('(')[0].trim();if(m&&m!=='-'&&!/tous/i.test(m))set[m]=1;});
 return Object.keys(set).sort();}
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',p30Build);else p30Build();
