import{d as p,o as u,c as a,a as n,r as m,w as b,v as y,b as k,e as _,i as S,n as $,t as f,F as v,f as g,g as T,u as x,h as L,j as C,p as B,k as D}from"./vendor.d72690c1.js";const N=function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))o(t);new MutationObserver(t=>{for(const e of t)if(e.type==="childList")for(const l of e.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&o(l)}).observe(document,{childList:!0,subtree:!0});function s(t){const e={};return t.integrity&&(e.integrity=t.integrity),t.referrerpolicy&&(e.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?e.credentials="include":t.crossorigin==="anonymous"?e.credentials="omit":e.credentials="same-origin",e}function o(t){if(t.ep)return;t.ep=!0;const e=s(t);fetch(t.href,e)}};N();const j={class:"accordion"},P={class:"accordion__content"},A=p({props:{open:{type:Boolean,default:!1}},emits:["update:open"],setup(r,{emit:i}){return(s,o)=>(u(),a("div",j,[n("div",{class:"accordion__header",onClick:o[0]||(o[0]=t=>s.$emit("update:open",!r.open))},[m(s.$slots,"title")]),b(n("div",P,[m(s.$slots,"default")],512),[[y,r.open]])]))}});const R={class:"chunk__inner"},O={class:"chunk__cover"},z=["src","alt"],M={class:"chunk__title"},I={class:"chunk__bookmarks"},q=["href"],E=p({props:{chunk:{type:Object,required:!0},open:{type:Boolean,default:!1}},setup(r){return(i,s)=>(u(),a("div",{class:$(["chunk",{"chunk--open":r.open}])},[k(A,{open:r.open,"onUpdate:open":s[0]||(s[0]=o=>S(open)?open.value=o:null)},{title:_(()=>[n("div",R,[n("div",O,[n("img",{src:r.chunk.coverSrc,alt:r.chunk.title},null,8,z)]),n("div",M,f(r.chunk.title),1)])]),default:_(()=>[n("div",I,[n("ul",null,[(u(!0),a(v,null,g(r.chunk.bookmarks,o=>(u(),a("li",{key:o.url},[n("a",{href:o.url,target:"_blank"},f(o.title),9,q)]))),128))])])]),_:1},8,["open"])],2))}}),c="/src/assets/img";var h=[{coverSrc:`${c}/twitter.gif`,title:"Twitter",bookmarks:[{title:"Dev",url:"https://twitter.com/i/lists/1272198298359775232"},{title:"Bielefeld, NRW",url:"https://twitter.com/i/lists/1274347046481334272"},{title:"LGBTQA+",url:"https://twitter.com/i/lists/1274339386168168448"},{title:"Peers",url:"https://twitter.com/i/lists/1274340185401147394"},{title:"Politik",url:"https://twitter.com/i/lists/1274345272005537794"},{title:"Queer+Dev",url:"https://twitter.com/i/lists/1482788411522129922"},{title:"Sonstige",url:"https://twitter.com/i/lists/1274348269607571457"}]},{coverSrc:`${c}/pride.gif`,title:"Astronomie",bookmarks:[{title:"Astronomy Picture of the Day",url:"https://apod.nasa.gov/apod/"},{title:"Spektrum der Wissenschaft",url:"https://www.spektrum.de/news/astronomie/"},{title:"Tagesschau",url:"https://www.tagesschau.de/thema/raumfahrt/"},{title:"SciTechDaily",url:"https://scitechdaily.com/news/space/"},{title:"Space.com",url:"https://space.com"}]},{coverSrc:`${c}/pride.gif`,title:"LGBTQIA+",bookmarks:[{title:"LSVD Pressespiegel",url:"https://www.lsvd.de/de/presse/pressestelle/pressespiegel"},{title:"Queer.de",url:"https://www.queer.de/"},{title:"YouTuber",url:"https://en.m.wikipedia.org/wiki/List_of_LGBT_YouTubers"}]},{coverSrc:`${c}/nintendo.jpg`,title:"Nintendo",bookmarks:[{title:" 30min",url:"nintendo 30min"}]},{coverSrc:`${c}/ikea.jpg`,title:"Ikea",bookmarks:[{title:"Neue Produkte",url:"https://www.ikea.com/de/de/new/new-products/"}]},{coverSrc:`${c}/bookmark.gif`,title:"Lesezeichen",bookmarks:[{title:"root",url:"bookmarks root"},{title:"mobile lesezeichen",url:"mobile lesezeichen"}]},{coverSrc:`${c}/snippets.png`,title:"Snippets",bookmarks:[{title:"Trello Snippets",url:"https://trello.com/b/6RKOr3E6/snppts"},{title:"Trello HDNET",url:"https://trello.com/b/uniIpqce/hdnet"},{title:"Trello Mindboard",url:"https://trello.com/b/emXZj2kn/mindboard"},{title:"Projektbezogene trennen",url:"snippets projektbezogene"},{title:"Casher",url:"snippets casher"}]},{coverSrc:`${c}/nothing.jpg`,title:"do nothing",bookmarks:[{title:"Do Nothing for Two Minutes",url:"http://www.donothingfor2minutes.com/"}]},{coverSrc:`${c}/dev.png`,title:"Dev",bookmarks:[{title:"chunks timer",url:"dev chunks timer"},{title:"chunks text link",url:"dev chunks textlink"},{title:"chunks vuex",url:"dev chunks vuex"},{title:"chunks interface for edit",url:"dev chunks editinterface"},{title:"chunks accordion click-outside",url:"dev chunks clickoutside"},{title:"chunks accordion close others",url:"dev chunks closeothers"},{title:"chunks design",url:"dev chunks design"},{title:"chunks migrate to svelte",url:"dev chunks svelte"}]},{coverSrc:`${c}/draw.png`,title:"draw",bookmarks:[{title:"Mac Color",url:"http://cloudpaint.com/color"},{title:"erma fiend",url:"https://www.ermafiend.com/stickers"}]}];const Q={class:"chunks"},F=p({setup(r){const i=T([]);function s(e){return Math.floor(Math.random()*e)}function o(){const{length:e}=h;i.value=[];for(var l=0;l<e;l++)i.value.push(!1);i.value[s(e)]=!0}function t(){var l;const e=[];h[s(h.length)].bookmarks.map(d=>{e.push(d.url)}),(l=window.open(e[s(e.length)],"_blank"))==null||l.focus()}return(e,l)=>(u(),a("section",Q,[n("div",{class:"chunks__menu"},[n("button",{onClick:o},"Random chunk"),n("button",{onClick:t},"Random url")]),(u(!0),a(v,null,g(x(h),(d,w)=>(u(),L(E,{key:d.title,chunk:d,open:i.value[w]},null,8,["chunk","open"]))),128))]))}});const G=p({setup(r){return(i,s)=>(u(),a("main",null,[k(F)]))}});C(G).use(B,D).mount("#app");
