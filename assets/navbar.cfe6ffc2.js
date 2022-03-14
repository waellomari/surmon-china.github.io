import{a as R,b as $,c as w,T as k,C as I}from"./index.b0acc615.js";import{_ as P}from"./plugin-vue_export-helper.21dcd24c.js";import{i as G,y as N,D as M,G as i,E as l,O as s,F as u,Q as c,R as r,S as y,T as S,U as T,M as U,N as H,V as C,W as p,X as b}from"./vendor.89b6fb73.js";function ke(e){return`${e} | Homepage`}function Ne(e){return`${e} GitHub homepage`}function ye(e){return[`${e} examples`,`How to use ${e}`]}function F(e){return e>1e3?`${parseFloat((e/1e3).toFixed(2))}k`:String(e)}function L(e){return String(e).replace(/.{1,3}(?=(.{3})+$)/g,"$&,")}function B(e){return`https://www.npmjs.com/package/${e}`}function D(e){return`https://github.com/${R}/${e}`}function be(e,n){return`https://github.com/${R}/${e}/tree/source${n}`}const O=G({name:"homepage-header",props:{repository:{type:String,required:!0}},setup(){const e=$(),n=w(),_=N(()=>n.githubOwnRepositories),h=d=>Boolean(n.getRepositoryNPMPackage(d)),g=d=>{const f=n.getRepositoryNPMPackage(d);if(!f)return"-";const v=n.npmPackagesDownloadsMap.get(f.package.name);return v?L(v):"-"},m=e.theme,a=e.toggle,t=N(()=>({[k.Light]:"icon-sun",[k.Dark]:"icon-moon"})[m.value]);return{CONFIG:I,themeIcon:t,toggleTheme:a,ownRepositories:_,isNPMPackage:h,getNPMDownloads:g,getNPMHomepageURL:B,getGitHubRepositoryURL:D,countToK:F}}}),o=e=>(U("data-v-1ae25ec1"),e=e(),H(),e),V={class:"navbar"},j={class:"container"},z={class:"left"},E=o(()=>s("i",{class:"iconfont icon-github"},null,-1)),K={class:"text"},q=o(()=>s("span",{class:"dot"},"\u2022",-1)),x=o(()=>s("span",{class:"text"},"Sponsor",-1)),A={class:"right"},Q={class:"item project"},W=o(()=>s("span",{class:"text"},"Projects",-1)),X=o(()=>s("i",{class:"iconfont icon-arrow-down"},null,-1)),J={class:"projects"},Y={class:"container"},Z={class:"list"},ee={class:"title"},se=o(()=>s("i",{class:"iconfont icon-link-external"},null,-1)),te={key:0,class:"archived",title:"This repository has been archived. It is now read-only."},oe=o(()=>s("span",{class:"icon"},"\u26A0\uFE0F",-1)),ne=o(()=>s("span",{class:"text"},"archived",-1)),ae=[oe,ne],ie=["title"],ce={class:"meta"},re={class:"left"},le=o(()=>s("i",{class:"iconfont icon-star"},null,-1)),de=o(()=>s("i",{class:"iconfont icon-npm"},null,-1)),ue={key:1,class:"item"},pe={class:"right"},_e=o(()=>s("span",{class:"text"},"HP",-1)),he=o(()=>s("i",{class:"iconfont icon-link-external"},null,-1));function ge(e,n,_,h,g,m){const a=M("ulink");return i(),l("header",V,[s("div",j,[s("div",z,[u(a,{class:"item",href:e.CONFIG.GITHUB_USER_URL},{default:c(()=>[E,s("span",K,r(e.CONFIG.GITHUB_UID),1)]),_:1},8,["href"]),q,u(a,{class:"item",href:e.CONFIG.GITHUB_SPONSORS_URL},{default:c(()=>[x]),_:1},8,["href"])]),s("div",A,[s("button",{class:"item theme",onClick:n[0]||(n[0]=(...t)=>e.toggleTheme&&e.toggleTheme(...t))},[s("i",{class:y(["iconfont",e.themeIcon])},null,2)]),s("div",Q,[W,X,s("div",J,[s("div",Y,[s("ul",Z,[(i(!0),l(S,null,T(e.ownRepositories,t=>(i(),l("li",{class:y(["item",{activated:t.name===e.repository}]),key:t.name},[s("div",ee,[u(a,{class:"link",href:e.getGitHubRepositoryURL(t.name),title:t.name},{default:c(()=>[C(r(t.name),1)]),_:2},1032,["href","title"]),se,t.archived?(i(),l("span",te,ae)):p("",!0)]),s("div",{class:"description",title:t.description},r(t.description||"-"),9,ie),s("div",ce,[s("div",re,[u(a,{class:"item",href:e.getGitHubRepositoryURL(t.name),title:`GitHub stars: ${t.stargazers_count}`},{default:c(()=>[le,s("span",null,r(e.countToK(t.stargazers_count)),1)]),_:2},1032,["href","title"]),e.isNPMPackage(t.name)?(i(),b(a,{key:0,class:"item npm",href:e.getNPMHomepageURL(t.name),title:`NPM downloads: ${t.stargazers_count}`},{default:c(()=>[de,s("span",null,r(e.getNPMDownloads(t.name)),1)]),_:2},1032,["href","title"])):p("",!0),t.language?(i(),l("span",ue,r(t.language),1)):p("",!0)]),s("div",pe,[t.homepage?(i(),b(a,{key:0,class:"homepage",href:t.homepage},{default:c(()=>[_e,he]),_:2},1032,["href"])):p("",!0)])])],2))),128))])])])])])])])}var Re=P(O,[["render",ge],["__scopeId","data-v-1ae25ec1"]]);export{Re as N,ye as a,Ne as b,be as c,D as d,F as e,B as f,ke as g,L as n};
