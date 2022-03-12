import{d as m,r as p,o as a,c as d,w as g,v as S,a as n,u as $,F as h,b,e as N,f as w,g as B,h as D,i as y,j as _,t as f,k as C,l as M,n as R,m as x,p as j,q as P,s as V,x as A,y as I}from"./vendor.072d6c1d.js";const O=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))l(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const r of s.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&l(r)}).observe(document,{childList:!0,subtree:!0});function o(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerpolicy&&(s.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?s.credentials="include":e.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function l(e){if(e.ep)return;e.ep=!0;const s=o(e);fetch(e.href,s)}};O();function U(i){return i.every(t=>t.split("x").length===5&&t.split("x").every(o=>o.length===5&&o.startsWith("#^")))}const W=n("br",null,null,-1),z=n("br",null,null,-1),q=m({emits:["login"],setup(i){const t=p(),o=p();return(l,e)=>(a(),d(h,null,[g(n("input",{"onUpdate:modelValue":e[0]||(e[0]=s=>t.value=s),type:"text"},null,512),[[S,t.value]]),W,g(n("input",{"onUpdate:modelValue":e[1]||(e[1]=s=>o.value=s),type:"password"},null,512),[[S,o.value]]),z,n("button",{onClick:e[2]||(e[2]=s=>l.$emit("login",$(U)([t.value,o.value])))},"Log in")],64))}});const E={id:"app"},Q=m({setup(i){const t=p(!1);function o(l){t.value=l}return(l,e)=>{const s=N("router-view");return a(),d("main",E,[t.value?(a(),b(s,{key:0})):(a(),b(q,{key:1,onLogin:o}))])}}});const F={class:"accordion__header"},G={class:"accordion__content"},K=m({props:{open:{type:Boolean,default:!1}},emits:["update:open"],setup(i){return(t,o)=>(a(),d("div",{class:"accordion",onClick:o[0]||(o[0]=l=>t.$emit("update:open",!0))},[n("div",F,[w(t.$slots,"title")]),g(n("div",G,[w(t.$slots,"default")],512),[[B,i.open]])]))}});const H={class:"modal__dialog"},L=m({props:{visible:{type:Boolean,default:!1}},emits:["update:visible"],setup(i){return(t,o)=>i.visible?(a(),d("div",{key:0,class:"modal",onClick:o[0]||(o[0]=l=>t.$emit("update:visible",!1))},[n("div",H,[w(t.$slots,"default")])])):D("",!0)}});const Y={class:"chunk__inner"},X={class:"chunk__cover"},Z=["src","alt"],J={class:"chunk__title"},ee={class:"chunk__bookmarks"},te=["onClick"],se=m({props:{chunk:{type:Object,required:!0},open:{type:Boolean,default:!1}},setup(i){const t=p(!1),o=p();function l(e){e.startsWith("http")?window.open(e,"_blank"):(o.value=e,t.value=!0)}return(e,s)=>(a(),d(h,null,[n("div",{class:R(["chunk",{"chunk--open":i.open}])},[y(K,{open:i.open,"onUpdate:open":s[0]||(s[0]=r=>M(open)?open.value=r:null)},{title:_(()=>[n("div",Y,[n("div",X,[n("img",{src:i.chunk.coverSrc,alt:i.chunk.title},null,8,Z)]),n("div",J,f(i.chunk.title),1)])]),default:_(()=>[n("ul",ee,[(a(!0),d(h,null,C(i.chunk.bookmarks,r=>(a(),d("li",{key:r.url,class:"chunk__bookmark"},[n("a",{onClick:u=>l(r.url)},f(r.title),9,te)]))),128))])]),_:1},8,["open"])],2),y(L,{visible:t.value,"onUpdate:visible":s[1]||(s[1]=r=>t.value=r)},{default:_(()=>[x(f(o.value),1)]),_:1},8,["visible"])],64))}});var oe="/assets/nintendo.1a2f3baf.jpg",ne="/assets/bookmark.b526197a.gif",ie="/assets/dev.d5d51016.png",le="/assets/draw.6f3ee8ab.png",re="/assets/ikea.c0e70d04.jpg",ae="/assets/kepler452b.4bc9559c.jpeg",ue="/assets/nothing.be806d9f.jpg",ce="/assets/pride.7a7b95fb.gif",de="/assets/snippets.2434038d.png",pe="/assets/twitter.572f4a80.gif",k=[{coverSrc:pe,title:"Twitter",bookmarks:[{title:"Dev",url:"https://twitter.com/i/lists/1272198298359775232"},{title:"Bielefeld, NRW",url:"https://twitter.com/i/lists/1274347046481334272"},{title:"LGBTQA+",url:"https://twitter.com/i/lists/1274339386168168448"},{title:"Peers",url:"https://twitter.com/i/lists/1274340185401147394"},{title:"Politik",url:"https://twitter.com/i/lists/1274345272005537794"},{title:"Queer+Dev",url:"https://twitter.com/i/lists/1482788411522129922"},{title:"Sonstige",url:"https://twitter.com/i/lists/1274348269607571457"}]},{coverSrc:ae,title:"Astronomie",bookmarks:[{title:"Astronomy Picture of the Day",url:"https://apod.nasa.gov/apod/"},{title:"Spektrum der Wissenschaft",url:"https://www.spektrum.de/news/astronomie/"},{title:"Tagesschau",url:"https://www.tagesschau.de/thema/raumfahrt/"},{title:"SciTechDaily",url:"https://scitechdaily.com/news/space/"},{title:"Space.com",url:"https://space.com"}]},{coverSrc:ce,title:"LGBTQIA+",bookmarks:[{title:"LSVD Pressespiegel",url:"https://www.lsvd.de/de/presse/pressestelle/pressespiegel"},{title:"Queer.de",url:"https://www.queer.de/"},{title:"YouTuber",url:"https://en.m.wikipedia.org/wiki/List_of_LGBT_YouTubers"}]},{coverSrc:oe,title:"Nintendo",bookmarks:[{title:" 30min",url:"nintendo 30min"}]},{coverSrc:re,title:"Ikea",bookmarks:[{title:"Neue Produkte",url:"https://www.ikea.com/de/de/new/new-products/"}]},{coverSrc:ne,title:"Lesezeichen",bookmarks:[{title:"root",url:"bookmarks root"},{title:"mobile lesezeichen",url:"mobile lesezeichen"}]},{coverSrc:de,title:"Snippets",bookmarks:[{title:"Trello Snippets",url:"https://trello.com/b/6RKOr3E6/snppts"},{title:"Trello HDNET",url:"https://trello.com/b/uniIpqce/hdnet"},{title:"Trello Mindboard",url:"https://trello.com/b/emXZj2kn/mindboard"},{title:"Projektbezogene trennen",url:"snippets projektbezogene"},{title:"Casher",url:"snippets casher"}]},{coverSrc:ue,title:"do nothing",bookmarks:[{title:"Do Nothing for Two Minutes",url:"http://www.donothingfor2minutes.com/"}]},{coverSrc:ie,title:"Dev",bookmarks:[{title:"chunks serviceWorker",url:"dev chunks sw for timer with push notification"},{title:"chunks vuex",url:"dev chunks vuex"},{title:"chunks interface for edit",url:"dev chunks editinterface"},{title:"chunks accordion close others",url:"dev chunks closeothers"},{title:"chunks accordion click-outside",url:"dev chunks clickoutside"},{title:"chunks design",url:"dev chunks design"},{title:"chunks migrate to svelte",url:"dev chunks svelte"}]},{coverSrc:le,title:"draw",bookmarks:[{title:"Mac Color",url:"http://cloudpaint.com/color"},{title:"erma fiend",url:"https://www.ermafiend.com/stickers"}]}];const ve={class:"chunks"},me=m({setup(i){const t=p([]),o=p(!1),l=p("");function e(u){return Math.floor(Math.random()*u)}function s(){const{length:u}=k;t.value=[];for(var c=0;c<u;c++)t.value.push(!1);t.value[e(u)]=!0}function r(){const u=[];k[e(k.length)].bookmarks.map(v=>{u.push(v.url)});const c=u[e(u.length)];c.startsWith("http")?window.open(c,"_blank"):(l.value=c,o.value=!0)}return(u,c)=>(a(),d(h,null,[n("section",ve,[n("div",{class:"chunks__menu"},[n("button",{onClick:s},"Random chunk"),n("button",{onClick:r},"Random url")]),(a(!0),d(h,null,C($(k),(v,T)=>(a(),b(se,{key:v.title,chunk:v,open:t.value[T]},null,8,["chunk","open"]))),128))]),y(L,{visible:o.value,"onUpdate:visible":c[0]||(c[0]=v=>o.value=v)},{default:_(()=>[x(f(l.value),1)]),_:1},8,["visible"])],64))}}),he=[{path:"/",name:"Chunks",component:me}];var ke=j({history:P(),routes:he});V(Q).use(A,I).use(ke).mount("#app");
