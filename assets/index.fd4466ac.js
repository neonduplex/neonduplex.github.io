import{d,r as h,o as a,c,w as m,v as f,a as r,F as v,b as k,e as S,f as _,g as L,h as x,i as g,j as $,n as T,t as w,k as b,u as C,l as D,m as N,p as B,q as R,s as j}from"./vendor.c82e8f6c.js";const P=function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))s(t);new MutationObserver(t=>{for(const e of t)if(e.type==="childList")for(const o of e.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function n(t){const e={};return t.integrity&&(e.integrity=t.integrity),t.referrerpolicy&&(e.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?e.credentials="include":t.crossorigin==="anonymous"?e.credentials="omit":e.credentials="same-origin",e}function s(t){if(t.ep)return;t.ep=!0;const e=n(t);fetch(t.href,e)}};P();const A=r("br",null,null,-1),I=r("br",null,null,-1),M=d({emits:["login"],setup(l,{emit:i}){const n=h(),s=h();function t(e){return e.every(o=>o.split("x").length===5&&o.split("x").every(u=>u.startsWith("#^")))}return(e,o)=>(a(),c(v,null,[m(r("input",{"onUpdate:modelValue":o[0]||(o[0]=u=>n.value=u),type:"text"},null,512),[[f,n.value]]),A,m(r("input",{"onUpdate:modelValue":o[1]||(o[1]=u=>s.value=u),type:"password"},null,512),[[f,s.value]]),I,r("button",{onClick:o[2]||(o[2]=u=>e.$emit("login",t([n.value,s.value])))}," Log in ")],64))}});const O={id:"app"},z=d({setup(l){const i=h(!1);function n(s){i.value=s}return(s,t)=>{const e=S("router-view");return a(),c("main",O,[i.value?(a(),k(e,{key:0})):(a(),k(M,{key:1,onLogin:n}))])}}});const q={class:"accordion"},V={class:"accordion__content"},E=d({props:{open:{type:Boolean,default:!1}},emits:["update:open"],setup(l,{emit:i}){return(n,s)=>(a(),c("div",q,[r("div",{class:"accordion__header",onClick:s[0]||(s[0]=t=>n.$emit("update:open",!l.open))},[_(n.$slots,"title")]),m(r("div",V,[_(n.$slots,"default")],512),[[L,l.open]])]))}});const Q={class:"chunk__inner"},U={class:"chunk__cover"},W=["src","alt"],F={class:"chunk__title"},G={class:"chunk__bookmarks"},K=["href"],H=d({props:{chunk:{type:Object,required:!0},open:{type:Boolean,default:!1}},setup(l){return(i,n)=>(a(),c("div",{class:T(["chunk",{"chunk--open":l.open}])},[x(E,{open:l.open,"onUpdate:open":n[0]||(n[0]=s=>$(open)?open.value=s:null)},{title:g(()=>[r("div",Q,[r("div",U,[r("img",{src:l.chunk.coverSrc,alt:l.chunk.title},null,8,W)]),r("div",F,w(l.chunk.title),1)])]),default:g(()=>[r("div",G,[r("ul",null,[(a(!0),c(v,null,b(l.chunk.bookmarks,s=>(a(),c("li",{key:s.url},[r("a",{href:s.url,target:"_blank"},w(s.title),9,K)]))),128))])])]),_:1},8,["open"])],2))}});var Y="/assets/nintendo.1a2f3baf.jpg",X="/assets/bookmark.b526197a.gif",Z="/assets/dev.d5d51016.png",J="/assets/draw.6f3ee8ab.png",ee="/assets/ikea.c0e70d04.jpg",te="/assets/kepler452b.4bc9559c.jpeg",se="/assets/nothing.be806d9f.jpg",oe="/assets/pride.7a7b95fb.gif",ne="/assets/snippets.2434038d.png",re="/assets/twitter.572f4a80.gif",p=[{coverSrc:re,title:"Twitter",bookmarks:[{title:"Dev",url:"https://twitter.com/i/lists/1272198298359775232"},{title:"Bielefeld, NRW",url:"https://twitter.com/i/lists/1274347046481334272"},{title:"LGBTQA+",url:"https://twitter.com/i/lists/1274339386168168448"},{title:"Peers",url:"https://twitter.com/i/lists/1274340185401147394"},{title:"Politik",url:"https://twitter.com/i/lists/1274345272005537794"},{title:"Queer+Dev",url:"https://twitter.com/i/lists/1482788411522129922"},{title:"Sonstige",url:"https://twitter.com/i/lists/1274348269607571457"}]},{coverSrc:te,title:"Astronomie",bookmarks:[{title:"Astronomy Picture of the Day",url:"https://apod.nasa.gov/apod/"},{title:"Spektrum der Wissenschaft",url:"https://www.spektrum.de/news/astronomie/"},{title:"Tagesschau",url:"https://www.tagesschau.de/thema/raumfahrt/"},{title:"SciTechDaily",url:"https://scitechdaily.com/news/space/"},{title:"Space.com",url:"https://space.com"}]},{coverSrc:oe,title:"LGBTQIA+",bookmarks:[{title:"LSVD Pressespiegel",url:"https://www.lsvd.de/de/presse/pressestelle/pressespiegel"},{title:"Queer.de",url:"https://www.queer.de/"},{title:"YouTuber",url:"https://en.m.wikipedia.org/wiki/List_of_LGBT_YouTubers"}]},{coverSrc:Y,title:"Nintendo",bookmarks:[{title:" 30min",url:"nintendo 30min"}]},{coverSrc:ee,title:"Ikea",bookmarks:[{title:"Neue Produkte",url:"https://www.ikea.com/de/de/new/new-products/"}]},{coverSrc:X,title:"Lesezeichen",bookmarks:[{title:"root",url:"bookmarks root"},{title:"mobile lesezeichen",url:"mobile lesezeichen"}]},{coverSrc:ne,title:"Snippets",bookmarks:[{title:"Trello Snippets",url:"https://trello.com/b/6RKOr3E6/snppts"},{title:"Trello HDNET",url:"https://trello.com/b/uniIpqce/hdnet"},{title:"Trello Mindboard",url:"https://trello.com/b/emXZj2kn/mindboard"},{title:"Projektbezogene trennen",url:"snippets projektbezogene"},{title:"Casher",url:"snippets casher"}]},{coverSrc:se,title:"do nothing",bookmarks:[{title:"Do Nothing for Two Minutes",url:"http://www.donothingfor2minutes.com/"}]},{coverSrc:Z,title:"Dev",bookmarks:[{title:"chunks timer",url:"dev chunks timer"},{title:"chunks text link",url:"dev chunks textlink"},{title:"chunks vuex",url:"dev chunks vuex"},{title:"chunks interface for edit",url:"dev chunks editinterface"},{title:"chunks accordion click-outside",url:"dev chunks clickoutside"},{title:"chunks accordion close others",url:"dev chunks closeothers"},{title:"chunks design",url:"dev chunks design"},{title:"chunks migrate to svelte",url:"dev chunks svelte"}]},{coverSrc:J,title:"draw",bookmarks:[{title:"Mac Color",url:"http://cloudpaint.com/color"},{title:"erma fiend",url:"https://www.ermafiend.com/stickers"}]}];const ie={class:"chunks"},le=d({setup(l){const i=h([]);function n(e){return Math.floor(Math.random()*e)}function s(){const{length:e}=p;i.value=[];for(var o=0;o<e;o++)i.value.push(!1);i.value[n(e)]=!0}function t(){var o;const e=[];p[n(p.length)].bookmarks.map(u=>{e.push(u.url)}),(o=window.open(e[n(e.length)],"_blank"))==null||o.focus()}return(e,o)=>(a(),c("section",ie,[r("div",{class:"chunks__menu"},[r("button",{onClick:s},"Random chunk"),r("button",{onClick:t},"Random url")]),(a(!0),c(v,null,b(C(p),(u,y)=>(a(),k(H,{key:u.title,chunk:u,open:i.value[y]},null,8,["chunk","open"]))),128))]))}}),ue=[{path:"/",name:"Chunks",component:le}];var ae=D({history:N(),routes:ue});B(z).use(R,j).use(ae).mount("#app");
