import{d as v,r as l,o as x,c as u,w as g,v as _,a as s,u as y,F as f,b as D,e as F,f as P,g as j,t as G,h as C,i as w,n as $,j as E,k as A,l as B,_ as L,m as N,p as M,q as R,s as I,x as U}from"./vendor.79b07b42.js";const O=function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))r(t);new MutationObserver(t=>{for(const a of t)if(a.type==="childList")for(const k of a.addedNodes)k.tagName==="LINK"&&k.rel==="modulepreload"&&r(k)}).observe(document,{childList:!0,subtree:!0});function e(t){const a={};return t.integrity&&(a.integrity=t.integrity),t.referrerpolicy&&(a.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?a.credentials="include":t.crossorigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function r(t){if(t.ep)return;t.ep=!0;const a=e(t);fetch(t.href,a)}};O();function W(o){return o.every(i=>i.split("x").length===5&&i.split("x").every(e=>e.length===5&&e.startsWith("#^")))}const z=s("br",null,null,-1),q=s("br",null,null,-1),Q=v({emits:["login"],setup(o){const i=l(),e=l();return(r,t)=>(x(),u(f,null,[g(s("input",{"onUpdate:modelValue":t[0]||(t[0]=a=>i.value=a),type:"text"},null,512),[[_,i.value]]),z,g(s("input",{"onUpdate:modelValue":t[1]||(t[1]=a=>e.value=a),type:"password"},null,512),[[_,e.value]]),q,s("button",{onClick:t[2]||(t[2]=a=>r.$emit("login",y(W)([i.value,e.value])))},"Log in")],64))}});const K={id:"app"},H=v({setup(o){const i=l(!1);function e(r){i.value=r}return(r,t)=>{const a=F("router-view");return x(),u("main",K,[i.value?(x(),D(a,{key:0})):(x(),D(Q,{key:1,onLogin:e}))])}}});var Y="/assets/nintendo.1a2f3baf.jpg",X="/assets/bookmark.b526197a.gif",Z="/assets/dev.7b8f1609.jpg",J="/assets/draw.6f3ee8ab.png",t0="/assets/ikea.c0e70d04.jpg",i0="/assets/kepler452b.2dbc46b0.jpg",a0="/assets/nothing.be806d9f.jpg",e0="/assets/pride.7a7b95fb.gif",s0="/assets/snippets.2434038d.png",o0="/assets/twitter.572f4a80.gif",b=[{coverSrc:o0,title:"Twitter",bookmarks:[{title:"Dev",url:"https://twitter.com/i/lists/1272198298359775232"},{title:"Bielefeld, NRW",url:"https://twitter.com/i/lists/1274347046481334272"},{title:"LGBTQA+",url:"https://twitter.com/i/lists/1274339386168168448"},{title:"Peers",url:"https://twitter.com/i/lists/1274340185401147394"},{title:"Politik",url:"https://twitter.com/i/lists/1274345272005537794"},{title:"Queer+Dev",url:"https://twitter.com/i/lists/1482788411522129922"},{title:"Sonstige",url:"https://twitter.com/i/lists/1274348269607571457"}]},{coverSrc:i0,title:"Astronomie",bookmarks:[{title:"Astronomy Picture of the Day",url:"https://apod.nasa.gov/apod/"},{title:"Spektrum der Wissenschaft",url:"https://www.spektrum.de/news/astronomie/"},{title:"Tagesschau",url:"https://www.tagesschau.de/thema/raumfahrt/"},{title:"SciTechDaily",url:"https://scitechdaily.com/news/space/"},{title:"Space.com",url:"https://space.com"}]},{coverSrc:e0,title:"LGBTQIA+",bookmarks:[{title:"LSVD Pressespiegel",url:"https://www.lsvd.de/de/presse/pressestelle/pressespiegel"},{title:"Queer.de",url:"https://www.queer.de/"},{title:"YouTuber",url:"https://en.m.wikipedia.org/wiki/List_of_LGBT_YouTubers"}]},{coverSrc:Y,title:"Nintendo",bookmarks:[{title:" 30min",url:"nintendo 30min"}]},{coverSrc:t0,title:"Ikea",bookmarks:[{title:"Neue Produkte",url:"https://www.ikea.com/de/de/new/new-products/"}]},{coverSrc:X,title:"Lesezeichen",bookmarks:[{title:"root",url:"bookmarks root"},{title:"mobile lesezeichen",url:"mobile lesezeichen"}]},{coverSrc:s0,title:"Snippets",bookmarks:[{title:"Trello Snippets",url:"https://trello.com/b/6RKOr3E6/snppts"},{title:"Trello HDNET",url:"https://trello.com/b/uniIpqce/hdnet"},{title:"Trello Mindboard",url:"https://trello.com/b/emXZj2kn/mindboard"},{title:"Projektbezogene trennen",url:"snippets projektbezogene"},{title:"Casher",url:"snippets casher"}]},{coverSrc:a0,title:"do nothing",bookmarks:[{title:"Do Nothing for Two Minutes",url:"http://www.donothingfor2minutes.com/"}]},{coverSrc:Z,title:"Dev",bookmarks:[{title:"chunks close accordion on click-outside",url:"dev chunks clickoutside"},{title:"chunks interface for edit",url:"dev chunks editinterface"},{title:"chunks serviceWorker",url:"dev chunks sw for timer with push notification"},{title:"chunks vuex",url:"dev chunks vuex"},{title:"chunks design",url:"dev chunks design"},{title:"chunks migrate to svelte",url:"dev chunks svelte"}]},{coverSrc:J,title:"draw",bookmarks:[{title:"Mac Color",url:"http://cloudpaint.com/color"},{title:"erma fiend",url:"https://www.ermafiend.com/stickers"}]}],r0=o=>o;const n0={class:"modal__dialog"},S=v({props:{visible:{type:Boolean,default:!1}},emits:["update:visible"],setup(o){return(i,e)=>o.visible?(x(),u("div",{key:0,class:"modal",onClick:e[0]||(e[0]=r=>i.$emit("update:visible",!1))},[s("div",n0,[P(i.$slots,"default")])])):j("",!0)}});const k0={class:"chunk__inner"},l0={class:"chunk__cover"},x0=["src","alt"],c0={class:"chunk__title"},m0={class:"chunk__bookmarks"},p0=["onClick"],d0=v({props:{chunk:{type:Object,required:!0},open:{type:Boolean,default:!1}},setup(o,{expose:i}){const e=l(!1),r=l(),t=l();function a(k){k.startsWith("http")?window.open(k,"_blank"):(r.value=k,e.value=!0)}return i({chunkElement:t}),(k,m)=>(x(),u(f,null,[s("div",{class:$(["chunk",{"chunk--open":o.open}]),ref_key:"chunkElement",ref:t},[s("div",{onClick:m[0]||(m[0]=p=>k.$emit("update:open",!o.open))},[s("div",k0,[s("div",l0,[s("img",{src:o.chunk.coverSrc,alt:o.chunk.title},null,8,x0)]),s("div",c0,G(o.chunk.title),1)]),g(s("ul",m0,[(x(!0),u(f,null,w(o.chunk.bookmarks,p=>(x(),u("li",{key:p.url,class:"chunk__bookmark"},[s("a",{onClick:V=>a(p.url)},G(p.title),9,p0)]))),128))],512),[[C,o.open]])])],2),E(S,{visible:e.value,"onUpdate:visible":m[1]||(m[1]=p=>e.value=p)},{default:A(()=>[B(G(r.value),1)]),_:1},8,["visible"])],64))}}),u0="5.5.7",h0={g:"LottieFiles AE 0.1.21",a:"",k:"",d:"",tc:""},y0=23.9759979248047,f0=0,v0=53.9999953261367,b0=500,G0=500,g0="Free",D0=0,E0=[],B0=[{ddd:0,ind:1,ty:4,nm:"flower 1",sr:1,ks:{o:{a:1,k:[{i:{x:[.833],y:[.833]},o:{x:[.167],y:[.167]},t:43,s:[100]},{t:52.9999954126897,s:[0]}],ix:11},r:{a:1,k:[{i:{x:[0],y:[1]},o:{x:[0],y:[0]},t:1,s:[0]},{t:52.9999954126897,s:[360]}],ix:10},p:{a:1,k:[{i:{x:0,y:1},o:{x:0,y:0},t:1,s:[249.563,257.829,0],to:[-9.001,-19.523,0],ti:[9.001,19.523,0]},{t:52.9999954126897,s:[195.559,140.693,0]}],ix:2},a:{a:0,k:[33.483,33.483,0],ix:1},s:{a:0,k:[100,100,100],ix:6}},ao:0,shapes:[{ty:"gr",it:[{ind:0,ty:"sh",ix:1,ks:{a:0,k:{i:[[3.77,0],[0,0],[0,0],[3.77,0],[0,-3.77],[0,0],[0,0],[0,-3.77],[-3.77,0],[0,0],[0,0],[-3.77,0],[0,3.77],[0,0],[0,0],[0,3.77]],o:[[0,0],[0,0],[0,-3.77],[-3.77,0],[0,0],[0,0],[-3.77,0],[0,3.77],[0,0],[0,0],[0,3.77],[3.77,0],[0,0],[0,0],[3.77,0],[0,-3.77]],v:[[9.157,-6.826],[6.826,-6.826],[6.826,-9.157],[0,-15.983],[-6.826,-9.157],[-6.826,-6.826],[-9.156,-6.826],[-15.983,0],[-9.156,6.826],[-6.826,6.826],[-6.826,9.157],[0,15.983],[6.826,9.157],[6.826,6.826],[9.157,6.826],[15.983,0]],c:!0},ix:2},nm:"Path 1",mn:"ADBE Vector Shape - Group",hd:!1},{ty:"st",c:{a:0,k:[.192156877705,.129411764706,.270588235294,1],ix:3},o:{a:0,k:100,ix:4},w:{a:0,k:7,ix:5},lc:2,lj:2,bm:0,nm:"Stroke 1",mn:"ADBE Vector Graphic - Stroke",hd:!1},{ty:"fl",c:{a:0,k:[1,.482352971096,.674509803922,1],ix:4},o:{a:0,k:100,ix:5},r:1,bm:0,nm:"Fill 1",mn:"ADBE Vector Graphic - Fill",hd:!1},{ty:"tr",p:{a:0,k:[33.483,33.483],ix:2},a:{a:0,k:[0,0],ix:1},s:{a:0,k:[100,100],ix:3},r:{a:0,k:0,ix:6},o:{a:0,k:100,ix:7},sk:{a:0,k:0,ix:4},sa:{a:0,k:0,ix:5},nm:"Transform"}],nm:"Group 1",np:3,cix:2,bm:0,ix:1,mn:"ADBE Vector Group",hd:!1}],ip:.99999991344698,op:119.999989613637,st:0,bm:0},{ddd:0,ind:3,ty:4,nm:"flower 2",sr:1,ks:{o:{a:1,k:[{i:{x:[.833],y:[.833]},o:{x:[.167],y:[.167]},t:43,s:[100]},{t:52.9999954126897,s:[0]}],ix:11},r:{a:1,k:[{i:{x:[0],y:[1]},o:{x:[0],y:[0]},t:1,s:[0]},{t:52.9999954126897,s:[-360]}],ix:10},p:{a:1,k:[{i:{x:0,y:1},o:{x:0,y:0},t:1,s:[249.562,257.829,0],to:[6.114,-9.768,0],ti:[-6.114,9.768,0]},{t:52.9999954126897,s:[286.244,199.22,0]}],ix:2},a:{a:0,k:[35.815,35.815,0],ix:1},s:{a:0,k:[100,100,100],ix:6}},ao:0,shapes:[{ty:"gr",it:[{ind:0,ty:"sh",ix:1,ks:{a:0,k:{i:[[3.687,1.512],[0,0],[0,0],[3.686,1.513],[0,0],[1.513,-3.685],[0,0],[0,0],[1.512,-3.686],[-3.686,-1.512],[0,0],[0,0],[-3.685,-1.512],[-1.511,3.685],[0,0],[0,0],[-1.512,3.686]],o:[[0,0],[0,0],[1.512,-3.685],[0,0],[-3.685,-1.511],[0,0],[0,0],[-3.685,-1.512],[-1.512,3.686],[0,0],[0,0],[-1.512,3.686],[3.686,1.511],[0,0],[0,0],[3.686,1.512],[1.511,-3.685]],v:[[12.868,-2.518],[9.411,-3.936],[10.829,-7.393],[6.893,-16.804],[6.893,-16.804],[-2.519,-12.868],[-3.937,-9.411],[-7.393,-10.829],[-16.804,-6.893],[-12.868,2.518],[-9.411,3.936],[-10.829,7.392],[-6.894,16.804],[2.518,12.868],[3.936,9.411],[7.393,10.829],[16.804,6.893]],c:!0},ix:2},nm:"Path 1",mn:"ADBE Vector Shape - Group",hd:!1},{ty:"st",c:{a:0,k:[.192156877705,.129411764706,.270588235294,1],ix:3},o:{a:0,k:100,ix:4},w:{a:0,k:7,ix:5},lc:2,lj:2,bm:0,nm:"Stroke 1",mn:"ADBE Vector Graphic - Stroke",hd:!1},{ty:"fl",c:{a:0,k:[1,.968627510819,.290196078431,1],ix:4},o:{a:0,k:100,ix:5},r:1,bm:0,nm:"Fill 1",mn:"ADBE Vector Graphic - Fill",hd:!1},{ty:"tr",p:{a:0,k:[35.815,35.815],ix:2},a:{a:0,k:[0,0],ix:1},s:{a:0,k:[100,100],ix:3},r:{a:0,k:0,ix:6},o:{a:0,k:100,ix:7},sk:{a:0,k:0,ix:4},sa:{a:0,k:0,ix:5},nm:"Transform"}],nm:"Group 1",np:3,cix:2,bm:0,ix:1,mn:"ADBE Vector Group",hd:!1}],ip:.99999991344698,op:119.999989613637,st:0,bm:0},{ddd:0,ind:5,ty:4,nm:"flower 3",sr:1,ks:{o:{a:1,k:[{i:{x:[.833],y:[.833]},o:{x:[.167],y:[.167]},t:43,s:[100]},{t:52.9999954126897,s:[0]}],ix:11},r:{a:1,k:[{i:{x:[0],y:[1]},o:{x:[0],y:[0]},t:1,s:[0]},{t:52.9999954126897,s:[360]}],ix:10},p:{a:1,k:[{i:{x:0,y:1},o:{x:0,y:0},t:1,s:[249.563,257.829,0],to:[15.225,4.48,0],ti:[-15.225,-4.48,0]},{t:52.9999954126897,s:[340.911,284.711,0]}],ix:2},a:{a:0,k:[37.761,37.76,0],ix:1},s:{a:0,k:[100,100,100],ix:6}},ao:0,shapes:[{ty:"gr",it:[{ind:0,ty:"sh",ix:1,ks:{a:0,k:{i:[[3.229,-2.024],[0,0],[0,0],[0,0],[3.229,-2.023],[-2.024,-3.23],[0,0],[0,0],[0,0],[-2.024,-3.23],[-3.23,2.024],[0,0],[0,0],[0,0],[-3.229,2.024],[2.024,3.229],[0,0],[0,0],[0,0],[2.024,3.228]],o:[[0,0],[0,0],[0,0],[-2.024,-3.23],[-3.23,2.024],[0,0],[0,0],[0,0],[-3.23,2.025],[2.024,3.229],[0,0],[0,0],[0,0],[2.025,3.229],[3.23,-2.024],[0,0],[0,0],[0,0],[3.23,-2.023],[-2.024,-3.23]],v:[[8.725,-13.613],[2.182,-9.512],[.953,-11.474],[-1.918,-16.054],[-11.431,-18.237],[-13.612,-8.724],[-10.741,-4.144],[-9.512,-2.182],[-16.053,1.917],[-18.237,11.43],[-8.724,13.613],[-2.181,9.512],[-.953,11.474],[1.918,16.054],[11.431,18.236],[13.613,8.724],[10.742,4.143],[9.513,2.182],[16.055,-1.919],[18.237,-11.43]],c:!0},ix:2},nm:"Path 1",mn:"ADBE Vector Shape - Group",hd:!1},{ty:"st",c:{a:0,k:[.192156877705,.129411764706,.270588235294,1],ix:3},o:{a:0,k:100,ix:4},w:{a:0,k:7,ix:5},lc:2,lj:2,bm:0,nm:"Stroke 1",mn:"ADBE Vector Graphic - Stroke",hd:!1},{ty:"fl",c:{a:0,k:[.333333333333,.611764705882,.898039275525,1],ix:4},o:{a:0,k:100,ix:5},r:1,bm:0,nm:"Fill 1",mn:"ADBE Vector Graphic - Fill",hd:!1},{ty:"tr",p:{a:0,k:[37.76,37.76],ix:2},a:{a:0,k:[0,0],ix:1},s:{a:0,k:[100,100],ix:3},r:{a:0,k:0,ix:6},o:{a:0,k:100,ix:7},sk:{a:0,k:0,ix:4},sa:{a:0,k:0,ix:5},nm:"Transform"}],nm:"Group 1",np:3,cix:2,bm:0,ix:1,mn:"ADBE Vector Group",hd:!1}],ip:.99999991344698,op:119.999989613637,st:0,bm:0},{ddd:0,ind:7,ty:4,nm:"flower 4",sr:1,ks:{o:{a:1,k:[{i:{x:[.833],y:[.833]},o:{x:[.167],y:[.167]},t:43,s:[100]},{t:52.9999954126897,s:[0]}],ix:11},r:{a:1,k:[{i:{x:[0],y:[1]},o:{x:[0],y:[0]},t:1,s:[0]},{t:52.9999954126897,s:[-360]}],ix:10},p:{a:1,k:[{i:{x:0,y:1},o:{x:0,y:0},t:1,s:[249.562,257.829,0],to:[6.105,20.05,0],ti:[-6.105,-20.05,0]},{t:52.9999954126897,s:[286.191,378.128,0]}],ix:2},a:{a:0,k:[35.41,35.41,0],ix:1},s:{a:0,k:[100,100,100],ix:6}},ao:0,shapes:[{ty:"gr",it:[{ind:0,ty:"sh",ix:1,ks:{a:0,k:{i:[[2.924,1.398],[0,0],[0,0],[0,0],[2.924,1.398],[1.399,-2.924],[0,0],[0,0],[0,0],[1.399,-2.924],[-2.923,-1.398],[0,0],[0,0],[0,0],[-2.924,-1.398],[-1.399,2.924],[0,0],[0,0],[0,0],[-1.399,2.924]],o:[[0,0],[0,0],[0,0],[1.399,-2.924],[-2.923,-1.399],[0,0],[0,0],[0,0],[-2.923,-1.399],[-1.399,2.924],[0,0],[0,0],[0,0],[-1.399,2.924],[2.923,1.399],[0,0],[0,0],[0,0],[2.923,1.398],[1.398,-2.924]],v:[[13.75,.071],[7.827,-2.762],[8.676,-4.536],[10.66,-8.685],[7.898,-16.511],[.072,-13.749],[-1.911,-9.603],[-2.762,-7.827],[-8.684,-10.66],[-16.51,-7.898],[-13.749,-.073],[-7.826,2.761],[-8.676,4.537],[-10.66,8.684],[-7.897,16.51],[-.072,13.749],[1.913,9.602],[2.762,7.826],[8.685,10.66],[16.512,7.897]],c:!0},ix:2},nm:"Path 1",mn:"ADBE Vector Shape - Group",hd:!1},{ty:"st",c:{a:0,k:[.192156877705,.129411764706,.270588235294,1],ix:3},o:{a:0,k:100,ix:4},w:{a:0,k:7,ix:5},lc:2,lj:2,bm:0,nm:"Stroke 1",mn:"ADBE Vector Graphic - Stroke",hd:!1},{ty:"fl",c:{a:0,k:[1,.666666666667,.227450995352,1],ix:4},o:{a:0,k:100,ix:5},r:1,bm:0,nm:"Fill 1",mn:"ADBE Vector Graphic - Fill",hd:!1},{ty:"tr",p:{a:0,k:[35.409,35.41],ix:2},a:{a:0,k:[0,0],ix:1},s:{a:0,k:[100,100],ix:3},r:{a:0,k:0,ix:6},o:{a:0,k:100,ix:7},sk:{a:0,k:0,ix:4},sa:{a:0,k:0,ix:5},nm:"Transform"}],nm:"Group 1",np:3,cix:2,bm:0,ix:1,mn:"ADBE Vector Group",hd:!1}],ip:.99999991344698,op:119.999989613637,st:0,bm:0},{ddd:0,ind:9,ty:4,nm:"rec 5",sr:1,ks:{o:{a:1,k:[{i:{x:[.833],y:[.833]},o:{x:[.167],y:[.167]},t:43,s:[100]},{t:52.9999954126897,s:[0]}],ix:11},r:{a:1,k:[{i:{x:[0],y:[1]},o:{x:[0],y:[0]},t:1,s:[0]},{t:52.9999954126897,s:[360]}],ix:10},p:{a:1,k:[{i:{x:0,y:1},o:{x:0,y:0},t:1,s:[249.563,257.829,0],to:[-17.906,10.497,0],ti:[17.906,-10.497,0]},{t:52.9999954126897,s:[142.128,320.811,0]}],ix:2},a:{a:0,k:[36.333,35.744,0],ix:1},s:{a:0,k:[100,100,100],ix:6}},ao:0,shapes:[{ty:"gr",it:[{ind:0,ty:"sh",ix:1,ks:{a:0,k:{i:[[0,0],[0,0],[0,0],[0,0]],o:[[0,0],[0,0],[0,0],[0,0]],v:[[-18.833,-5.691],[-7.363,-18.245],[18.833,5.689],[7.362,18.245]],c:!0},ix:2},nm:"Path 1",mn:"ADBE Vector Shape - Group",hd:!1},{ty:"st",c:{a:0,k:[.192156877705,.129411764706,.270588235294,1],ix:3},o:{a:0,k:100,ix:4},w:{a:0,k:7,ix:5},lc:2,lj:2,bm:0,nm:"Stroke 1",mn:"ADBE Vector Graphic - Stroke",hd:!1},{ty:"fl",c:{a:0,k:[1,.968627510819,.290196078431,1],ix:4},o:{a:0,k:100,ix:5},r:1,bm:0,nm:"Fill 1",mn:"ADBE Vector Graphic - Fill",hd:!1},{ty:"tr",p:{a:0,k:[36.333,35.745],ix:2},a:{a:0,k:[0,0],ix:1},s:{a:0,k:[100,100],ix:3},r:{a:0,k:0,ix:6},o:{a:0,k:100,ix:7},sk:{a:0,k:0,ix:4},sa:{a:0,k:0,ix:5},nm:"Transform"}],nm:"Group 1",np:3,cix:2,bm:0,ix:1,mn:"ADBE Vector Group",hd:!1}],ip:.99999991344698,op:119.999989613637,st:0,bm:0},{ddd:0,ind:11,ty:4,nm:"rec 4",sr:1,ks:{o:{a:1,k:[{i:{x:[.833],y:[.833]},o:{x:[.167],y:[.167]},t:43,s:[100]},{t:52.9999954126897,s:[0]}],ix:11},r:{a:1,k:[{i:{x:[0],y:[1]},o:{x:[0],y:[0]},t:1,s:[0]},{t:52.9999954126897,s:[-316]}],ix:10},p:{a:1,k:[{i:{x:0,y:1},o:{x:0,y:0},t:1,s:[249.563,257.829,0],to:[1.373,11.229,0],ti:[-1.373,-11.229,0]},{t:52.9999954126897,s:[257.804,325.205,0]}],ix:2},a:{a:0,k:[29.047,33.285,0],ix:1},s:{a:0,k:[100,100,100],ix:6}},ao:0,shapes:[{ty:"gr",it:[{ind:0,ty:"sh",ix:1,ks:{a:0,k:{i:[[0,0],[0,0],[0,0],[0,0]],o:[[0,0],[0,0],[0,0],[0,0]],v:[[11.547,10.968],[-2.116,15.785],[-11.547,-10.969],[2.115,-15.785]],c:!0},ix:2},nm:"Path 1",mn:"ADBE Vector Shape - Group",hd:!1},{ty:"st",c:{a:0,k:[.192156877705,.129411764706,.270588235294,1],ix:3},o:{a:0,k:100,ix:4},w:{a:0,k:7,ix:5},lc:2,lj:2,bm:0,nm:"Stroke 1",mn:"ADBE Vector Graphic - Stroke",hd:!1},{ty:"fl",c:{a:0,k:[1,.482352971096,.674509803922,1],ix:4},o:{a:0,k:100,ix:5},r:1,bm:0,nm:"Fill 1",mn:"ADBE Vector Graphic - Fill",hd:!1},{ty:"tr",p:{a:0,k:[29.047,33.285],ix:2},a:{a:0,k:[0,0],ix:1},s:{a:0,k:[100,100],ix:3},r:{a:0,k:0,ix:6},o:{a:0,k:100,ix:7},sk:{a:0,k:0,ix:4},sa:{a:0,k:0,ix:5},nm:"Transform"}],nm:"Group 1",np:3,cix:2,bm:0,ix:1,mn:"ADBE Vector Group",hd:!1}],ip:.99999991344698,op:119.999989613637,st:0,bm:0},{ddd:0,ind:13,ty:4,nm:"rec 3",sr:1,ks:{o:{a:1,k:[{i:{x:[.833],y:[.833]},o:{x:[.167],y:[.167]},t:43,s:[100]},{t:52.9999954126897,s:[0]}],ix:11},r:{a:1,k:[{i:{x:[0],y:[1]},o:{x:[0],y:[0]},t:1,s:[0]},{t:52.9999954126897,s:[360]}],ix:10},p:{a:1,k:[{i:{x:0,y:1},o:{x:0,y:0},t:1,s:[249.563,257.829,0],to:[20.868,14.322,0],ti:[-20.868,-14.322,0]},{t:52.9999954126897,s:[374.771,343.762,0]}],ix:2},a:{a:0,k:[36.09,36.09,0],ix:1},s:{a:0,k:[100,100,100],ix:6}},ao:0,shapes:[{ty:"gr",it:[{ind:0,ty:"sh",ix:1,ks:{a:0,k:{i:[[0,0],[0,0],[0,0],[0,0]],o:[[0,0],[0,0],[0,0],[0,0]],v:[[-8.765,18.59],[18.59,-8.765],[8.765,-18.59],[-18.59,8.766]],c:!0},ix:2},nm:"Path 1",mn:"ADBE Vector Shape - Group",hd:!1},{ty:"st",c:{a:0,k:[.192156877705,.129411764706,.270588235294,1],ix:3},o:{a:0,k:100,ix:4},w:{a:0,k:7,ix:5},lc:2,lj:2,bm:0,nm:"Stroke 1",mn:"ADBE Vector Graphic - Stroke",hd:!1},{ty:"fl",c:{a:0,k:[1,.968627510819,.290196078431,1],ix:4},o:{a:0,k:100,ix:5},r:1,bm:0,nm:"Fill 1",mn:"ADBE Vector Graphic - Fill",hd:!1},{ty:"tr",p:{a:0,k:[36.09,36.09],ix:2},a:{a:0,k:[0,0],ix:1},s:{a:0,k:[100,100],ix:3},r:{a:0,k:0,ix:6},o:{a:0,k:100,ix:7},sk:{a:0,k:0,ix:4},sa:{a:0,k:0,ix:5},nm:"Transform"}],nm:"Group 1",np:3,cix:2,bm:0,ix:1,mn:"ADBE Vector Group",hd:!1}],ip:.99999991344698,op:119.999989613637,st:0,bm:0},{ddd:0,ind:15,ty:4,nm:"rec 2",sr:1,ks:{o:{a:1,k:[{i:{x:[.833],y:[.833]},o:{x:[.167],y:[.167]},t:43,s:[100]},{t:52.9999954126897,s:[0]}],ix:11},r:{a:1,k:[{i:{x:[0],y:[1]},o:{x:[0],y:[0]},t:1,s:[0]},{t:52.9999954126897,s:[-360]}],ix:10},p:{a:1,k:[{i:{x:0,y:1},o:{x:0,y:0},t:1,s:[249.563,257.829,0],to:[18.951,-12.337,0],ti:[-18.951,12.337,0]},{t:52.9999954126897,s:[363.271,183.808,0]}],ix:2},a:{a:0,k:[36.399,32.513,0],ix:1},s:{a:0,k:[100,100,100],ix:6}},ao:0,shapes:[{ty:"gr",it:[{ind:0,ty:"sh",ix:1,ks:{a:0,k:{i:[[0,0],[0,0],[0,0],[0,0]],o:[[0,0],[0,0],[0,0],[0,0]],v:[[11.482,-15.014],[-18.9,-.242],[-11.483,15.014],[18.9,.242]],c:!0},ix:2},nm:"Path 1",mn:"ADBE Vector Shape - Group",hd:!1},{ty:"st",c:{a:0,k:[.192156877705,.129411764706,.270588235294,1],ix:3},o:{a:0,k:100,ix:4},w:{a:0,k:7,ix:5},lc:2,lj:2,bm:0,nm:"Stroke 1",mn:"ADBE Vector Graphic - Stroke",hd:!1},{ty:"fl",c:{a:0,k:[1,.666666666667,.227450995352,1],ix:4},o:{a:0,k:100,ix:5},r:1,bm:0,nm:"Fill 1",mn:"ADBE Vector Graphic - Fill",hd:!1},{ty:"tr",p:{a:0,k:[36.399,32.513],ix:2},a:{a:0,k:[0,0],ix:1},s:{a:0,k:[100,100],ix:3},r:{a:0,k:0,ix:6},o:{a:0,k:100,ix:7},sk:{a:0,k:0,ix:4},sa:{a:0,k:0,ix:5},nm:"Transform"}],nm:"Group 1",np:3,cix:2,bm:0,ix:1,mn:"ADBE Vector Group",hd:!1}],ip:.99999991344698,op:119.999989613637,st:0,bm:0},{ddd:0,ind:17,ty:4,nm:"rec 1",sr:1,ks:{o:{a:1,k:[{i:{x:[.833],y:[.833]},o:{x:[.167],y:[.167]},t:43,s:[100]},{t:52.9999954126897,s:[0]}],ix:11},r:{a:1,k:[{i:{x:[0],y:[1]},o:{x:[0],y:[0]},t:1,s:[0]},{t:52.9999954126897,s:[360]}],ix:10},p:{a:1,k:[{i:{x:0,y:1},o:{x:0,y:0},t:1,s:[249.563,257.829,0],to:[-7.862,-7.914,0],ti:[7.862,7.914,0]},{t:52.9999954126897,s:[202.388,210.344,0]}],ix:2},a:{a:0,k:[27.597,35.415,0],ix:1},s:{a:0,k:[100,100,100],ix:6}},ao:0,shapes:[{ty:"gr",it:[{ind:0,ty:"sh",ix:1,ks:{a:0,k:{i:[[0,0],[0,0],[0,0],[0,0]],o:[[0,0],[0,0],[0,0],[0,0]],v:[[-10.097,15.259],[-3.72,-17.915],[10.097,-15.259],[3.72,17.915]],c:!0},ix:2},nm:"Path 1",mn:"ADBE Vector Shape - Group",hd:!1},{ty:"st",c:{a:0,k:[.192156877705,.129411764706,.270588235294,1],ix:3},o:{a:0,k:100,ix:4},w:{a:0,k:7,ix:5},lc:2,lj:2,bm:0,nm:"Stroke 1",mn:"ADBE Vector Graphic - Stroke",hd:!1},{ty:"fl",c:{a:0,k:[.360784313725,.709803921569,.384313755409,1],ix:4},o:{a:0,k:100,ix:5},r:1,bm:0,nm:"Fill 1",mn:"ADBE Vector Graphic - Fill",hd:!1},{ty:"tr",p:{a:0,k:[27.597,35.416],ix:2},a:{a:0,k:[0,0],ix:1},s:{a:0,k:[100,100],ix:3},r:{a:0,k:0,ix:6},o:{a:0,k:100,ix:7},sk:{a:0,k:0,ix:4},sa:{a:0,k:0,ix:5},nm:"Transform"}],nm:"Group 1",np:3,cix:2,bm:0,ix:1,mn:"ADBE Vector Group",hd:!1}],ip:.99999991344698,op:119.999989613637,st:0,bm:0},{ddd:0,ind:19,ty:4,nm:"circle 4",sr:1,ks:{o:{a:1,k:[{i:{x:[.833],y:[.833]},o:{x:[.167],y:[.167]},t:43,s:[100]},{t:52.9999954126897,s:[0]}],ix:11},r:{a:0,k:0,ix:10},p:{a:1,k:[{i:{x:0,y:1},o:{x:0,y:0},t:1,s:[249.563,257.829,0],to:[-11.831,3.601,0],ti:[11.831,-3.601,0]},{t:52.9999954126897,s:[178.576,279.433,0]}],ix:2},a:{a:0,k:[27.853,27.854,0],ix:1},s:{a:0,k:[100,100,100],ix:6}},ao:0,shapes:[{ty:"gr",it:[{ind:0,ty:"sh",ix:1,ks:{a:0,k:{i:[[0,-5.718],[5.718,0],[0,5.717],[-5.717,0]],o:[[0,5.717],[-5.717,0],[0,-5.718],[5.718,0]],v:[[10.353,0],[-.001,10.354],[-10.353,0],[-.001,-10.354]],c:!0},ix:2},nm:"Path 1",mn:"ADBE Vector Shape - Group",hd:!1},{ty:"st",c:{a:0,k:[.192156877705,.129411764706,.270588235294,1],ix:3},o:{a:0,k:100,ix:4},w:{a:0,k:7,ix:5},lc:2,lj:2,bm:0,nm:"Stroke 1",mn:"ADBE Vector Graphic - Stroke",hd:!1},{ty:"fl",c:{a:0,k:[1,.666666666667,.227450995352,1],ix:4},o:{a:0,k:100,ix:5},r:1,bm:0,nm:"Fill 1",mn:"ADBE Vector Graphic - Fill",hd:!1},{ty:"tr",p:{a:0,k:[27.853,27.854],ix:2},a:{a:0,k:[0,0],ix:1},s:{a:0,k:[100,100],ix:3},r:{a:0,k:0,ix:6},o:{a:0,k:100,ix:7},sk:{a:0,k:0,ix:4},sa:{a:0,k:0,ix:5},nm:"Transform"}],nm:"Group 1",np:3,cix:2,bm:0,ix:1,mn:"ADBE Vector Group",hd:!1}],ip:.99999991344698,op:119.999989613637,st:0,bm:0},{ddd:0,ind:21,ty:4,nm:"circle 3",sr:1,ks:{o:{a:1,k:[{i:{x:[.833],y:[.833]},o:{x:[.167],y:[.167]},t:43,s:[100]},{t:52.9999954126897,s:[0]}],ix:11},r:{a:0,k:0,ix:10},p:{a:1,k:[{i:{x:0,y:1},o:{x:0,y:0},t:1,s:[249.563,257.829,0],to:[-6.639,19.883,0],ti:[6.639,-19.883,0]},{t:52.9999954126897,s:[209.726,377.127,0]}],ix:2},a:{a:0,k:[26.371,26.37,0],ix:1},s:{a:0,k:[100,100,100],ix:6}},ao:0,shapes:[{ty:"gr",it:[{ind:0,ty:"sh",ix:1,ks:{a:0,k:{i:[[0,-4.899],[4.9,0],[0,4.899],[-4.899,0]],o:[[0,4.899],[-4.899,0],[0,-4.899],[4.9,0]],v:[[8.871,0],[-.001,8.87],[-8.871,0],[-.001,-8.87]],c:!0},ix:2},nm:"Path 1",mn:"ADBE Vector Shape - Group",hd:!1},{ty:"st",c:{a:0,k:[.192156877705,.129411764706,.270588235294,1],ix:3},o:{a:0,k:100,ix:4},w:{a:0,k:7,ix:5},lc:2,lj:2,bm:0,nm:"Stroke 1",mn:"ADBE Vector Graphic - Stroke",hd:!1},{ty:"fl",c:{a:0,k:[.360784313725,.709803921569,.384313755409,1],ix:4},o:{a:0,k:100,ix:5},r:1,bm:0,nm:"Fill 1",mn:"ADBE Vector Graphic - Fill",hd:!1},{ty:"tr",p:{a:0,k:[26.371,26.371],ix:2},a:{a:0,k:[0,0],ix:1},s:{a:0,k:[100,100],ix:3},r:{a:0,k:0,ix:6},o:{a:0,k:100,ix:7},sk:{a:0,k:0,ix:4},sa:{a:0,k:0,ix:5},nm:"Transform"}],nm:"Group 1",np:3,cix:2,bm:0,ix:1,mn:"ADBE Vector Group",hd:!1}],ip:.99999991344698,op:119.999989613637,st:0,bm:0},{ddd:0,ind:23,ty:4,nm:"circle 2",sr:1,ks:{o:{a:1,k:[{i:{x:[.833],y:[.833]},o:{x:[.167],y:[.167]},t:43,s:[100]},{t:52.9999954126897,s:[0]}],ix:11},r:{a:0,k:0,ix:10},p:{a:1,k:[{i:{x:0,y:1},o:{x:0,y:0},t:1,s:[249.563,257.829,0],to:[7.843,-21.252,0],ti:[-7.843,21.252,0]},{t:52.9999954126897,s:[296.618,130.319,0]}],ix:2},a:{a:0,k:[27.873,27.874,0],ix:1},s:{a:0,k:[100,100,100],ix:6}},ao:0,shapes:[{ty:"gr",it:[{ind:0,ty:"sh",ix:1,ks:{a:0,k:{i:[[0,-5.729],[5.728,0],[0,5.729],[-5.73,0]],o:[[0,5.729],[-5.73,0],[0,-5.729],[5.728,0]],v:[[10.374,0],[0,10.374],[-10.374,0],[0,-10.374]],c:!0},ix:2},nm:"Path 1",mn:"ADBE Vector Shape - Group",hd:!1},{ty:"st",c:{a:0,k:[.192156877705,.129411764706,.270588235294,1],ix:3},o:{a:0,k:100,ix:4},w:{a:0,k:7,ix:5},lc:2,lj:2,bm:0,nm:"Stroke 1",mn:"ADBE Vector Graphic - Stroke",hd:!1},{ty:"fl",c:{a:0,k:[.360784313725,.709803921569,.384313755409,1],ix:4},o:{a:0,k:100,ix:5},r:1,bm:0,nm:"Fill 1",mn:"ADBE Vector Graphic - Fill",hd:!1},{ty:"tr",p:{a:0,k:[27.874,27.874],ix:2},a:{a:0,k:[0,0],ix:1},s:{a:0,k:[100,100],ix:3},r:{a:0,k:0,ix:6},o:{a:0,k:100,ix:7},sk:{a:0,k:0,ix:4},sa:{a:0,k:0,ix:5},nm:"Transform"}],nm:"Group 1",np:3,cix:2,bm:0,ix:1,mn:"ADBE Vector Group",hd:!1}],ip:.99999991344698,op:119.999989613637,st:0,bm:0},{ddd:0,ind:25,ty:4,nm:"circle 1",sr:1,ks:{o:{a:1,k:[{i:{x:[.833],y:[.833]},o:{x:[.167],y:[.167]},t:43,s:[100]},{t:52.9999954126897,s:[0]}],ix:11},r:{a:0,k:0,ix:10},p:{a:1,k:[{i:{x:0,y:1},o:{x:0,y:0},t:1,s:[249.563,257.829,0],to:[-17.906,-11.519,0],ti:[17.906,11.519,0]},{t:52.9999954126897,s:[142.128,188.716,0]}],ix:2},a:{a:0,k:[26.218,26.218,0],ix:1},s:{a:0,k:[100,100,100],ix:6}},ao:0,shapes:[{ty:"gr",it:[{ind:0,ty:"sh",ix:1,ks:{a:0,k:{i:[[0,-4.814],[4.815,0],[0,4.815],[-4.815,0]],o:[[0,4.815],[-4.815,0],[0,-4.814],[4.815,0]],v:[[8.718,0],[0,8.718],[-8.718,0],[0,-8.718]],c:!0},ix:2},nm:"Path 1",mn:"ADBE Vector Shape - Group",hd:!1},{ty:"st",c:{a:0,k:[.192156877705,.129411764706,.270588235294,1],ix:3},o:{a:0,k:100,ix:4},w:{a:0,k:7,ix:5},lc:2,lj:2,bm:0,nm:"Stroke 1",mn:"ADBE Vector Graphic - Stroke",hd:!1},{ty:"fl",c:{a:0,k:[.333333333333,.611764705882,.898039275525,1],ix:4},o:{a:0,k:100,ix:5},r:1,bm:0,nm:"Fill 1",mn:"ADBE Vector Graphic - Fill",hd:!1},{ty:"tr",p:{a:0,k:[26.218,26.218],ix:2},a:{a:0,k:[0,0],ix:1},s:{a:0,k:[100,100],ix:3},r:{a:0,k:0,ix:6},o:{a:0,k:100,ix:7},sk:{a:0,k:0,ix:4},sa:{a:0,k:0,ix:5},nm:"Transform"}],nm:"Group 1",np:3,cix:2,bm:0,ix:1,mn:"ADBE Vector Group",hd:!1}],ip:.99999991344698,op:119.999989613637,st:0,bm:0},{ddd:0,ind:32,ty:4,nm:"path 10",sr:1,ks:{o:{a:0,k:100,ix:11},r:{a:0,k:0,ix:10},p:{a:0,k:[174.571,239.533,0],ix:2},a:{a:0,k:[79.449,46.04,0],ix:1},s:{a:0,k:[100,100,100],ix:6}},ao:0,shapes:[{ty:"gr",it:[{ind:0,ty:"sh",ix:1,ks:{a:0,k:{i:[[0,0],[12.886,4.187],[12.885,4.188],[12.884,4.186],[12.884,4.186],[12.883,4.186]],o:[[-12.885,-4.186],[-12.885,-4.187],[-12.884,-4.186],[-12.884,-4.186],[-12.883,-4.186],[0,0]],v:[[61.949,28.54],[41.122,4.95],[10.408,11.793],[-10.416,-11.796],[-41.127,-4.951],[-61.949,-28.54]],c:!1},ix:2},nm:"Path 1",mn:"ADBE Vector Shape - Group",hd:!1},{ty:"st",c:{a:0,k:[.192156877705,.129411764706,.270588235294,1],ix:3},o:{a:0,k:100,ix:4},w:{a:0,k:7,ix:5},lc:2,lj:2,bm:0,nm:"Stroke 1",mn:"ADBE Vector Graphic - Stroke",hd:!1},{ty:"tr",p:{a:0,k:[79.449,46.04],ix:2},a:{a:0,k:[0,0],ix:1},s:{a:0,k:[100,100],ix:3},r:{a:0,k:0,ix:6},o:{a:0,k:100,ix:7},sk:{a:0,k:0,ix:4},sa:{a:0,k:0,ix:5},nm:"Transform"}],nm:"Group 1",np:2,cix:2,bm:0,ix:1,mn:"ADBE Vector Group",hd:!1},{ty:"tm",s:{a:1,k:[{i:{x:[0],y:[1]},o:{x:[0],y:[0]},t:6,s:[0]},{t:35.9999968840911,s:[100]}],ix:1},e:{a:1,k:[{i:{x:[0],y:[1]},o:{x:[0],y:[0]},t:1,s:[0]},{t:30.9999973168562,s:[100]}],ix:2},o:{a:0,k:0,ix:3},m:1,ix:2,nm:"Trim Paths 1",mn:"ADBE Vector Filter - Trim",hd:!1}],ip:.99999991344698,op:31.9999972303032,st:0,bm:0},{ddd:0,ind:33,ty:4,nm:"path 9",sr:1,ks:{o:{a:0,k:100,ix:11},r:{a:0,k:0,ix:10},p:{a:0,k:[203.382,328.206,0],ix:2},a:{a:0,k:[63.786,67.597,0],ix:1},s:{a:0,k:[100,100,100],ix:6}},ao:0,shapes:[{ty:"gr",it:[{ind:0,ty:"sh",ix:1,ks:{a:0,k:{i:[[0,0],[7.963,-10.962],[7.964,-10.961],[7.963,-10.96],[7.962,-10.959],[7.962,-10.959]],o:[[-7.964,10.961],[-7.964,10.961],[-7.962,10.96],[-7.962,10.959],[-7.962,10.959],[0,0]],v:[[46.286,-50.097],[17.415,-37.58],[14.431,-6.254],[-14.438,6.261],[-17.418,37.583],[-46.286,50.097]],c:!1},ix:2},nm:"Path 1",mn:"ADBE Vector Shape - Group",hd:!1},{ty:"st",c:{a:0,k:[.192156877705,.129411764706,.270588235294,1],ix:3},o:{a:0,k:100,ix:4},w:{a:0,k:7,ix:5},lc:2,lj:2,bm:0,nm:"Stroke 1",mn:"ADBE Vector Graphic - Stroke",hd:!1},{ty:"tr",p:{a:0,k:[63.786,67.597],ix:2},a:{a:0,k:[0,0],ix:1},s:{a:0,k:[100,100],ix:3},r:{a:0,k:0,ix:6},o:{a:0,k:100,ix:7},sk:{a:0,k:0,ix:4},sa:{a:0,k:0,ix:5},nm:"Transform"}],nm:"Group 1",np:2,cix:2,bm:0,ix:1,mn:"ADBE Vector Group",hd:!1},{ty:"tm",s:{a:1,k:[{i:{x:[0],y:[1]},o:{x:[0],y:[0]},t:6,s:[0]},{t:35.9999968840911,s:[100]}],ix:1},e:{a:1,k:[{i:{x:[0],y:[1]},o:{x:[0],y:[0]},t:1,s:[0]},{t:30.9999973168562,s:[100]}],ix:2},o:{a:0,k:0,ix:3},m:1,ix:2,nm:"Trim Paths 1",mn:"ADBE Vector Filter - Trim",hd:!1}],ip:.99999991344698,op:31.9999972303032,st:0,bm:0},{ddd:0,ind:34,ty:4,nm:"path 8",sr:1,ks:{o:{a:0,k:100,ix:11},r:{a:0,k:0,ix:10},p:{a:0,k:[296.618,328.205,0],ix:2},a:{a:0,k:[55.823,77.002,0],ix:1},s:{a:0,k:[100,100,100],ix:6}},ao:0,shapes:[{ty:"gr",it:[{ind:0,ty:"sh",ix:1,ks:{a:0,k:{i:[[0,0],[-7.964,-10.961],[-7.964,-10.961],[-7.963,-10.959],[-7.962,-10.959],[-7.962,-10.959]],o:[[7.964,10.961],[7.964,10.961],[7.963,10.959],[7.962,10.959],[7.961,10.959],[0,0]],v:[[-33.343,-59.502],[-30.359,-28.175],[-1.488,-15.657],[1.493,15.666],[30.362,28.18],[33.342,59.502]],c:!1},ix:2},nm:"Path 1",mn:"ADBE Vector Shape - Group",hd:!1},{ty:"st",c:{a:0,k:[.192156877705,.129411764706,.270588235294,1],ix:3},o:{a:0,k:100,ix:4},w:{a:0,k:7,ix:5},lc:2,lj:2,bm:0,nm:"Stroke 1",mn:"ADBE Vector Graphic - Stroke",hd:!1},{ty:"tr",p:{a:0,k:[55.823,77.002],ix:2},a:{a:0,k:[0,0],ix:1},s:{a:0,k:[100,100],ix:3},r:{a:0,k:0,ix:6},o:{a:0,k:100,ix:7},sk:{a:0,k:0,ix:4},sa:{a:0,k:0,ix:5},nm:"Transform"}],nm:"Group 1",np:2,cix:2,bm:0,ix:1,mn:"ADBE Vector Group",hd:!1},{ty:"tm",s:{a:1,k:[{i:{x:[0],y:[1]},o:{x:[0],y:[0]},t:6,s:[0]},{t:35.9999968840911,s:[100]}],ix:1},e:{a:1,k:[{i:{x:[0],y:[1]},o:{x:[0],y:[0]},t:1,s:[0]},{t:30.9999973168562,s:[100]}],ix:2},o:{a:0,k:0,ix:3},m:1,ix:2,nm:"Trim Paths 1",mn:"ADBE Vector Filter - Trim",hd:!1}],ip:.99999991344698,op:31.9999972303032,st:0,bm:0},{ddd:0,ind:35,ty:4,nm:"path 7",sr:1,ks:{o:{a:0,k:100,ix:11},r:{a:0,k:0,ix:10},p:{a:0,k:[325.429,239.533,0],ix:2},a:{a:0,k:[84.393,41.854,0],ix:1},s:{a:0,k:[100,100,100],ix:6}},ao:0,shapes:[{ty:"gr",it:[{ind:0,ty:"sh",ix:1,ks:{a:0,k:{i:[[0,0],[-12.886,4.187],[-12.886,4.187],[-12.883,4.186],[-12.883,4.186],[-12.884,4.186]],o:[[12.886,-4.186],[12.885,-4.186],[12.884,-4.186],[12.884,-4.186],[12.883,-4.186],[0,0]],v:[[-66.893,13.323],[-36.178,20.167],[-15.351,-3.424],[15.36,3.421],[36.182,-20.168],[66.893,-13.323]],c:!1},ix:2},nm:"Path 1",mn:"ADBE Vector Shape - Group",hd:!1},{ty:"st",c:{a:0,k:[.192156877705,.129411764706,.270588235294,1],ix:3},o:{a:0,k:100,ix:4},w:{a:0,k:7,ix:5},lc:2,lj:2,bm:0,nm:"Stroke 1",mn:"ADBE Vector Graphic - Stroke",hd:!1},{ty:"tr",p:{a:0,k:[84.393,41.854],ix:2},a:{a:0,k:[0,0],ix:1},s:{a:0,k:[100,100],ix:3},r:{a:0,k:0,ix:6},o:{a:0,k:100,ix:7},sk:{a:0,k:0,ix:4},sa:{a:0,k:0,ix:5},nm:"Transform"}],nm:"Group 1",np:2,cix:2,bm:0,ix:1,mn:"ADBE Vector Group",hd:!1},{ty:"tm",s:{a:1,k:[{i:{x:[0],y:[1]},o:{x:[0],y:[0]},t:6,s:[0]},{t:35.9999968840911,s:[100]}],ix:1},e:{a:1,k:[{i:{x:[0],y:[1]},o:{x:[0],y:[0]},t:1,s:[0]},{t:30.9999973168562,s:[100]}],ix:2},o:{a:0,k:0,ix:3},m:1,ix:2,nm:"Trim Paths 1",mn:"ADBE Vector Filter - Trim",hd:!1}],ip:.99999991344698,op:31.9999972303032,st:0,bm:0},{ddd:0,ind:36,ty:4,nm:"path 6",sr:1,ks:{o:{a:0,k:100,ix:11},r:{a:0,k:0,ix:10},p:{a:0,k:[250,184.731,0],ix:2},a:{a:0,k:[25.5,85.236,0],ix:1},s:{a:0,k:[100,100,100],ix:6}},ao:0,shapes:[{ty:"gr",it:[{ind:0,ty:"sh",ix:1,ks:{a:0,k:{i:[[0,0],[0,13.549],[0,13.549],[0,13.546],[0,13.546],[0,13.546]],o:[[0,-13.548],[0,-13.548],[0,-13.547],[0,-13.546],[0,-13.547],[0,0]],v:[[-8,67.736],[8,40.639],[-8,13.542],[8,-13.551],[-8,-40.643],[8,-67.736]],c:!1},ix:2},nm:"Path 1",mn:"ADBE Vector Shape - Group",hd:!1},{ty:"st",c:{a:0,k:[.192156877705,.129411764706,.270588235294,1],ix:3},o:{a:0,k:100,ix:4},w:{a:0,k:7,ix:5},lc:2,lj:2,bm:0,nm:"Stroke 1",mn:"ADBE Vector Graphic - Stroke",hd:!1},{ty:"tr",p:{a:0,k:[25.5,85.236],ix:2},a:{a:0,k:[0,0],ix:1},s:{a:0,k:[100,100],ix:3},r:{a:0,k:0,ix:6},o:{a:0,k:100,ix:7},sk:{a:0,k:0,ix:4},sa:{a:0,k:0,ix:5},nm:"Transform"}],nm:"Group 1",np:2,cix:2,bm:0,ix:1,mn:"ADBE Vector Group",hd:!1},{ty:"tm",s:{a:1,k:[{i:{x:[0],y:[1]},o:{x:[0],y:[0]},t:6,s:[0]},{t:35.9999968840911,s:[100]}],ix:1},e:{a:1,k:[{i:{x:[0],y:[1]},o:{x:[0],y:[0]},t:1,s:[0]},{t:30.9999973168562,s:[100]}],ix:2},o:{a:0,k:0,ix:3},m:1,ix:2,nm:"Trim Paths 1",mn:"ADBE Vector Filter - Trim",hd:!1}],ip:.99999991344698,op:31.9999972303032,st:0,bm:0}],V0=[];var _0={v:u0,meta:h0,fr:y0,ip:f0,op:v0,w:b0,h:G0,nm:g0,ddd:D0,assets:E0,layers:B0,markers:V0};const w0={class:"chunks"},A0={class:"chunks__menu"},S0=B(" Random url "),T0=v({setup(o){const i=l([]),e=l([]),r=l(!1),t=l(),a=l();function k(n){n&&e.value.push(n)}function m(n){return Math.floor(Math.random()*n)}function p(){const{length:n}=b,c=m(n),d=e.value[c].chunkElement;i.value=[];for(var h=0;h<n;h++)i.value.push(!1);i.value[c]=!0,d.scrollIntoView()}function V(){a.value.play(),setTimeout(()=>{const n=[];b[m(b.length)].bookmarks.map(d=>{n.push(d.url)});const c=n[m(n.length)];c.startsWith("http")?window.open(c,"_blank"):(t.value=c,r.value=!0),a.value.stop()},400)}return(n,c)=>(x(),u(f,null,[s("section",w0,[s("div",A0,[s("button",{onClick:p},"Random chunk"),s("button",{onClick:V},[S0,E(y(L),{ref_key:"confettiPopElement",ref:a,class:"chunks__confettiPop","animation-data":y(_0),"auto-play":!1,loop:!1,speed:8},null,8,["animation-data"])])]),(x(!0),u(f,null,w(y(b),(d,h)=>(x(),D(d0,{key:d.title,chunk:d,open:i.value[h],"onUpdate:open":T=>i.value[h]=T,ref_for:!0,ref:y(r0)(k)},null,8,["chunk","open","onUpdate:open"]))),128))]),E(S,{visible:r.value,"onUpdate:visible":c[0]||(c[0]=d=>r.value=d)},{default:A(()=>[B(G(t.value),1)]),_:1},8,["visible"])],64))}}),F0=[{path:"/",name:"Chunks",component:T0}];var P0=N({history:M(),routes:F0});R(H).use(I,U).use(P0).mount("#app");
