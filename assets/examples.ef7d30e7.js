import{M as A,a as P,u as E}from"./index.76c31aae.js";import{d as M,a as n,f as x,m as c,w as d,c as m,e as t,t as V,B as b,x as y,T as N,W as q,p as B,b as I,s as u,X as H,z as D,l as k,r as T,o as U,F as C,i as j,Y as z,Z as F}from"./index.5bbbf6dc.js";import{_ as S}from"./plugin-vue_export-helper.21dcd24c.js";const R=M({name:"modal",props:{visible:{type:Boolean,default:!1},title:{type:String,required:!0},titleUrl:{type:String,required:!0}},emits:["close"]}),w=e=>(B("data-v-d46b4910"),e=e(),I(),e),Y={key:0,class:"modal"},G={class:"wrapper"},K={class:"title"},L=w(()=>t("i",{class:"iconfont icon-link-external"},null,-1)),O=w(()=>t("i",{class:"iconfont icon-close"},null,-1)),W=[O],X={class:"content"};function Z(e,s,h,f,g,$){const p=u("ulink");return n(),x(q,{to:"body"},[c(N,{name:"module"},{default:d(()=>[e.visible?(n(),m("div",Y,[t("div",G,[t("p",K,[c(p,{class:"link",href:e.titleUrl},{default:d(()=>[t("span",null,V(e.title),1),L]),_:1},8,["href"]),t("button",{class:"close",onClick:s[0]||(s[0]=l=>e.$emit("close"))},W)]),t("div",X,[b(e.$slots,"content",{},void 0,!0)])])])):y("",!0)]),_:3})])}var J=S(R,[["render",Z],["__scopeId","data-v-d46b4910"]]);const Q=M({name:"homepage-examples",components:{Mammon:A,HomepageCard:P,Modal:J},props:{examples:{type:Array,required:!0},disabledAutoAd:{type:Boolean,default:!1},contentClass:{type:String,required:!1}},setup(e){H();const s=D(null),h=k(()=>Number.isInteger(s.value)),f=k(()=>e.examples[s.value]||null),g=a=>{s.value=a},$=()=>{s.value=null},p=6,l=T(e.examples.map(()=>null));return U(()=>{const a=e.examples.length;if(a<=p){const i=Math.ceil(a/2);l[i-1]=E[0]}else{const i=E,_=a/(i.length+1);i.forEach((v,o)=>{l[Math.ceil(_*(o+1))-1]=v})}}),{adProviders:l,isVisibleExampleModal:h,activeExample:f,openExampleModal:g,closeExampleModal:$}}}),ee=e=>(B("data-v-747627b0"),e=e(),I(),e),te={class:"examples"},oe={class:"actions"},se=["onClick"],ae=ee(()=>t("i",{class:"iconfont icon-code"},null,-1)),ne=[ae];function le(e,s,h,f,g,$){var _,v;const p=u("highlightjs"),l=u("modal"),a=u("homepage-card"),i=u("mammon");return n(),m("div",te,[c(l,{visible:e.isVisibleExampleModal,title:`${(_=e.activeExample)==null?void 0:_.title} (Edit on GitHub)`,"title-url":((v=e.activeExample)==null?void 0:v.url)||"",onClose:e.closeExampleModal},{content:d(()=>{var o,r;return[c(p,{class:"highlight",contenteditable:"true",onkeydown:"if(event.metaKey) return true; return false;",code:(o=e.activeExample)==null?void 0:o.raw,language:(r=e.activeExample)==null?void 0:r.language},null,8,["code","language"])]}),_:1},8,["visible","title","title-url","onClose"]),(n(!0),m(C,null,j(e.examples,(o,r)=>(n(),m("div",{class:"example-item",key:o.name},[c(a,{title:o.title||o.name,"content-class":e.contentClass},{actions:d(()=>[t("div",oe,[b(e.$slots,"actions",{},void 0,!0),t("button",{class:"code-button",onClick:ie=>e.openExampleModal(r)},ne,8,se)])]),default:d(()=>[b(e.$slots,"component",z(F(o)),void 0,!0)]),_:2},1032,["title","content-class"]),e.disabledAutoAd?y("",!0):(n(),m(C,{key:0},[e.adProviders[r]?(n(),x(a,{key:0,class:"example-mammon"},{default:d(()=>[c(i,{provider:e.adProviders[r]||void 0},null,8,["provider"])]),_:2},1024)):y("",!0)],64))]))),128))])}var pe=S(Q,[["render",le],["__scopeId","data-v-747627b0"]]);export{pe as H};
