import{d as f,r as p,a as s,c as t,m as o,e as u,w as c,x as _,T as g,n as v,s as l}from"./index.a5a57b00.js";import{N as y,L as I}from"./navbar.f834c4f1.js";import{_ as h}from"./plugin-vue_export-helper.21dcd24c.js";const E=f({name:"iframe-renderer",components:{Navbar:y,Loading:I},props:{src:{type:String,required:!0},repository:{type:String,required:!0},legacy:{type:Boolean,default:!1},fullnav:{type:Boolean,default:!1}},setup(){const e=p({loading:!0,error:null}),r=()=>{e.loading=!1};return{state:e,handleIframeLoaded:r,handleIframeError:n=>{r(),e.error=n.message}}}}),L=["src"],B={key:0,class:"loading-box"};function C(e,r,d,n,N,b){const i=l("navbar"),m=l("loading");return s(),t("div",{class:v(["iframe-renderer",{legacy:e.legacy}])},[o(i,{class:"header",repository:e.repository,full:e.fullnav},null,8,["repository","full"]),u("iframe",{class:"iframe",src:e.src,onLoad:r[0]||(r[0]=(...a)=>e.handleIframeLoaded&&e.handleIframeLoaded(...a)),onError:r[1]||(r[1]=(...a)=>e.handleIframeError&&e.handleIframeError(...a))},null,40,L),o(g,{name:"module"},{default:c(()=>[e.state.loading?(s(),t("div",B,[o(m)])):_("",!0)]),_:1})],2)}var q=h(E,[["render",C],["__scopeId","data-v-2a98f215"]]);export{q as I};