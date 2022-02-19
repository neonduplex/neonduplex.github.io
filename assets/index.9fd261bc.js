import{d,o as c,c as a,a as n,r as h,w,v as b,b as m,e as k,i as y,n as S,t as v,F as f,f as _,g as T,u as x,h as D,j as L,p as N,k as B}from"./vendor.d72690c1.js";const C=function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))r(t);new MutationObserver(t=>{for(const e of t)if(e.type==="childList")for(const l of e.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&r(l)}).observe(document,{childList:!0,subtree:!0});function s(t){const e={};return t.integrity&&(e.integrity=t.integrity),t.referrerpolicy&&(e.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?e.credentials="include":t.crossorigin==="anonymous"?e.credentials="omit":e.credentials="same-origin",e}function r(t){if(t.ep)return;t.ep=!0;const e=s(t);fetch(t.href,e)}};C();const j={class:"accordion"},$={class:"accordion__content"},P=d({props:{open:{type:Boolean,default:!1}},emits:["update:open"],setup(o,{emit:i}){return(s,r)=>(c(),a("div",j,[n("div",{class:"accordion__header",onClick:r[0]||(r[0]=t=>s.$emit("update:open",!o.open))},[h(s.$slots,"title")]),w(n("div",$,[h(s.$slots,"default")],512),[[b,o.open]])]))}});const A={class:"chunk__inner"},R={class:"chunk__cover"},O=["src","alt"],z={class:"chunk__title"},I={class:"chunk__bookmarks"},M=["href"],q=d({props:{chunk:{type:Object,required:!0},open:{type:Boolean,default:!1}},setup(o){return(i,s)=>(c(),a("div",{class:S(["chunk",{"chunk--open":o.open}])},[m(P,{open:o.open,"onUpdate:open":s[0]||(s[0]=r=>y(open)?open.value=r:null)},{title:k(()=>[n("div",A,[n("div",R,[n("img",{src:o.chunk.coverSrc,alt:o.chunk.title},null,8,O)]),n("div",z,v(o.chunk.title),1)])]),default:k(()=>[n("div",I,[n("ul",null,[(c(!0),a(f,null,_(o.chunk.bookmarks,r=>(c(),a("li",{key:r.url},[n("a",{href:r.url,target:"_blank"},v(r.title),9,M)]))),128))])])]),_:1},8,["open"])],2))}});var E="/assets/nintendo.1a2f3baf.jpg",Q="/assets/bookmark.b526197a.gif",F="/assets/dev.d5d51016.png",G="/assets/draw.6f3ee8ab.png",K="/assets/ikea.c0e70d04.jpg",V="/assets/kepler452b.4bc9559c.jpeg",U="/assets/nothing.be806d9f.jpg",W="/assets/pride.7a7b95fb.gif",Y="/assets/snippets.2434038d.png",H="/assets/twitter.572f4a80.gif",p=[{coverSrc:H,title:"Twitter",bookmarks:[{title:"Dev",url:"https://twitter.com/i/lists/1272198298359775232"},{title:"Bielefeld, NRW",url:"https://twitter.com/i/lists/1274347046481334272"},{title:"LGBTQA+",url:"https://twitter.com/i/lists/1274339386168168448"},{title:"Peers",url:"https://twitter.com/i/lists/1274340185401147394"},{title:"Politik",url:"https://twitter.com/i/lists/1274345272005537794"},{title:"Queer+Dev",url:"https://twitter.com/i/lists/1482788411522129922"},{title:"Sonstige",url:"https://twitter.com/i/lists/1274348269607571457"}]},{coverSrc:V,title:"Astronomie",bookmarks:[{title:"Astronomy Picture of the Day",url:"https://apod.nasa.gov/apod/"},{title:"Spektrum der Wissenschaft",url:"https://www.spektrum.de/news/astronomie/"},{title:"Tagesschau",url:"https://www.tagesschau.de/thema/raumfahrt/"},{title:"SciTechDaily",url:"https://scitechdaily.com/news/space/"},{title:"Space.com",url:"https://space.com"}]},{coverSrc:W,title:"LGBTQIA+",bookmarks:[{title:"LSVD Pressespiegel",url:"https://www.lsvd.de/de/presse/pressestelle/pressespiegel"},{title:"Queer.de",url:"https://www.queer.de/"},{title:"YouTuber",url:"https://en.m.wikipedia.org/wiki/List_of_LGBT_YouTubers"}]},{coverSrc:E,title:"Nintendo",bookmarks:[{title:" 30min",url:"nintendo 30min"}]},{coverSrc:K,title:"Ikea",bookmarks:[{title:"Neue Produkte",url:"https://www.ikea.com/de/de/new/new-products/"}]},{coverSrc:Q,title:"Lesezeichen",bookmarks:[{title:"root",url:"bookmarks root"},{title:"mobile lesezeichen",url:"mobile lesezeichen"}]},{coverSrc:Y,title:"Snippets",bookmarks:[{title:"Trello Snippets",url:"https://trello.com/b/6RKOr3E6/snppts"},{title:"Trello HDNET",url:"https://trello.com/b/uniIpqce/hdnet"},{title:"Trello Mindboard",url:"https://trello.com/b/emXZj2kn/mindboard"},{title:"Projektbezogene trennen",url:"snippets projektbezogene"},{title:"Casher",url:"snippets casher"}]},{coverSrc:U,title:"do nothing",bookmarks:[{title:"Do Nothing for Two Minutes",url:"http://www.donothingfor2minutes.com/"}]},{coverSrc:F,title:"Dev",bookmarks:[{title:"chunks timer",url:"dev chunks timer"},{title:"chunks text link",url:"dev chunks textlink"},{title:"chunks vuex",url:"dev chunks vuex"},{title:"chunks interface for edit",url:"dev chunks editinterface"},{title:"chunks accordion click-outside",url:"dev chunks clickoutside"},{title:"chunks accordion close others",url:"dev chunks closeothers"},{title:"chunks design",url:"dev chunks design"},{title:"chunks migrate to svelte",url:"dev chunks svelte"}]},{coverSrc:G,title:"draw",bookmarks:[{title:"Mac Color",url:"http://cloudpaint.com/color"},{title:"erma fiend",url:"https://www.ermafiend.com/stickers"}]}];const X={class:"chunks"},Z=d({setup(o){const i=T([]);function s(e){return Math.floor(Math.random()*e)}function r(){const{length:e}=p;i.value=[];for(var l=0;l<e;l++)i.value.push(!1);i.value[s(e)]=!0}function t(){var l;const e=[];p[s(p.length)].bookmarks.map(u=>{e.push(u.url)}),(l=window.open(e[s(e.length)],"_blank"))==null||l.focus()}return(e,l)=>(c(),a("section",X,[n("div",{class:"chunks__menu"},[n("button",{onClick:r},"Random chunk"),n("button",{onClick:t},"Random url")]),(c(!0),a(f,null,_(x(p),(u,g)=>(c(),D(q,{key:u.title,chunk:u,open:i.value[g]},null,8,["chunk","open"]))),128))]))}});const J=d({setup(o){return(i,s)=>(c(),a("main",null,[m(Z)]))}});L(J).use(N,B).mount("#app");
