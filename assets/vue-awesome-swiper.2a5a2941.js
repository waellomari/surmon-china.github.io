var Us=Object.defineProperty,Ks=Object.defineProperties;var Zs=Object.getOwnPropertyDescriptors;var fs=Object.getOwnPropertySymbols;var Js=Object.prototype.hasOwnProperty,Qs=Object.prototype.propertyIsEnumerable;var ms=(s,e,t)=>e in s?Us(s,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):s[e]=t,ke=(s,e)=>{for(var t in e||(e={}))Js.call(e,t)&&ms(s,t,e[t]);if(fs)for(var t of fs(e))Qs.call(e,t)&&ms(s,t,e[t]);return s},hs=(s,e)=>Ks(s,Zs(e));import{d as et,e as is,S as st,I as ws,C as tt,c as it,f as rt,R as nt,u as lt}from"./index.b0acc615.js";import{c as at,d as rs,e as ot,N as dt,f as pt,n as ct,g as ut,a as ft,b as mt}from"./navbar.cfe6ffc2.js";import{i as G,D as P,G as I,X as W,S as Se,P as ce,k as ne,q as se,Y as Es,Z as Ts,_ as ht,$ as ss,a0 as ks,a1 as Ps,a2 as wt,y as pe,Q as f,E as V,U as le,T as ee,F as m,O as E,a3 as Ge,V as g,R as ie,M as fe,N as me,a4 as be,W as ue,a5 as De,a6 as gt,z as Re,C as _t,a7 as vt,a8 as St,a9 as bt,aa as yt}from"./vendor.89b6fb73.js";import{_ as R}from"./plugin-vue_export-helper.21dcd24c.js";const $t=s=>{const e=s.component,t=new URL(e.url).pathname;return{name:e.name,title:e.title||e.name,path:t,url:at(et,t),component:e,raw:s.raw,language:s.language}};const xt=G({props:{rootClass:{type:String,default:""}},setup(s){return(e,t)=>{const i=P("Adsense");return I(),W(i,{class:Se(`g-a-mammon ${s.rootClass}`),"data-ad-client":ce(is),"data-full-width-responsive":!0,"is-non-personalized-ads":!1,"data-ad-format":"auto","data-ad-slot":"8733527061"},null,8,["class","data-ad-client"])}}});var Ct=R(xt,[["__scopeId","data-v-2efa831a"]]);const Et=G({props:{rootClass:{type:String,default:""}},setup(s){return(e,t)=>{const i=P("Adsense");return I(),W(i,{class:Se(`g-a-mammon ${s.rootClass}`),"data-ad-client":ce(is),"data-full-width-responsive":!0,"is-non-personalized-ads":!1,"data-ad-format":"auto","data-ad-slot":"7455679385"},null,8,["class","data-ad-client"])}}});var Tt=R(Et,[["__scopeId","data-v-f310b040"]]);const kt=G({props:{rootClass:{type:String,default:""}},setup(s){return(e,t)=>{const i=P("Adsense");return I(),W(i,{class:Se(`g-a-mammon ${s.rootClass}`),"data-ad-client":ce(is),"data-full-width-responsive":!0,"is-non-personalized-ads":!1,"data-ad-format":"auto","data-ad-slot":"4010319351"},null,8,["class","data-ad-client"])}}});var Pt=R(kt,[["__scopeId","data-v-84f2ee0a"]]);function gs(s){return s!==null&&typeof s=="object"&&"constructor"in s&&s.constructor===Object}function ns(s={},e={}){Object.keys(e).forEach(t=>{typeof s[t]=="undefined"?s[t]=e[t]:gs(e[t])&&gs(s[t])&&Object.keys(e[t]).length>0&&ns(s[t],e[t])})}const Ms={body:{},addEventListener(){},removeEventListener(){},activeElement:{blur(){},nodeName:""},querySelector(){return null},querySelectorAll(){return[]},getElementById(){return null},createEvent(){return{initEvent(){}}},createElement(){return{children:[],childNodes:[],style:{},setAttribute(){},getElementsByTagName(){return[]}}},createElementNS(){return{}},importNode(){return null},location:{hash:"",host:"",hostname:"",href:"",origin:"",pathname:"",protocol:"",search:""}};function te(){const s=typeof document!="undefined"?document:{};return ns(s,Ms),s}const Mt={document:Ms,navigator:{userAgent:""},location:{hash:"",host:"",hostname:"",href:"",origin:"",pathname:"",protocol:"",search:""},history:{replaceState(){},pushState(){},go(){},back(){}},CustomEvent:function(){return this},addEventListener(){},removeEventListener(){},getComputedStyle(){return{getPropertyValue(){return""}}},Image(){},Date(){},screen:{},setTimeout(){},clearTimeout(){},matchMedia(){return{}},requestAnimationFrame(s){return typeof setTimeout=="undefined"?(s(),null):setTimeout(s,0)},cancelAnimationFrame(s){typeof setTimeout!="undefined"&&clearTimeout(s)}};function Q(){const s=typeof window!="undefined"?window:{};return ns(s,Mt),s}function zt(s){const e=s.__proto__;Object.defineProperty(s,"__proto__",{get(){return e},set(t){e.__proto__=t}})}class _e extends Array{constructor(e){if(typeof e=="number")super(e);else{super(...e||[]);zt(this)}}}function Ie(s=[]){const e=[];return s.forEach(t=>{Array.isArray(t)?e.push(...Ie(t)):e.push(t)}),e}function zs(s,e){return Array.prototype.filter.call(s,e)}function It(s){const e=[];for(let t=0;t<s.length;t+=1)e.indexOf(s[t])===-1&&e.push(s[t]);return e}function Ot(s,e){if(typeof s!="string")return[s];const t=[],i=e.querySelectorAll(s);for(let l=0;l<i.length;l+=1)t.push(i[l]);return t}function O(s,e){const t=Q(),i=te();let l=[];if(!e&&s instanceof _e)return s;if(!s)return new _e(l);if(typeof s=="string"){const n=s.trim();if(n.indexOf("<")>=0&&n.indexOf(">")>=0){let r="div";n.indexOf("<li")===0&&(r="ul"),n.indexOf("<tr")===0&&(r="tbody"),(n.indexOf("<td")===0||n.indexOf("<th")===0)&&(r="tr"),n.indexOf("<tbody")===0&&(r="table"),n.indexOf("<option")===0&&(r="select");const a=i.createElement(r);a.innerHTML=n;for(let d=0;d<a.childNodes.length;d+=1)l.push(a.childNodes[d])}else l=Ot(s.trim(),e||i)}else if(s.nodeType||s===t||s===i)l.push(s);else if(Array.isArray(s)){if(s instanceof _e)return s;l=s}return new _e(It(l))}O.fn=_e.prototype;function At(...s){const e=Ie(s.map(t=>t.split(" ")));return this.forEach(t=>{t.classList.add(...e)}),this}function Lt(...s){const e=Ie(s.map(t=>t.split(" ")));return this.forEach(t=>{t.classList.remove(...e)}),this}function Nt(...s){const e=Ie(s.map(t=>t.split(" ")));this.forEach(t=>{e.forEach(i=>{t.classList.toggle(i)})})}function jt(...s){const e=Ie(s.map(t=>t.split(" ")));return zs(this,t=>e.filter(i=>t.classList.contains(i)).length>0).length>0}function Bt(s,e){if(arguments.length===1&&typeof s=="string")return this[0]?this[0].getAttribute(s):void 0;for(let t=0;t<this.length;t+=1)if(arguments.length===2)this[t].setAttribute(s,e);else for(const i in s)this[t][i]=s[i],this[t].setAttribute(i,s[i]);return this}function Dt(s){for(let e=0;e<this.length;e+=1)this[e].removeAttribute(s);return this}function Gt(s){for(let e=0;e<this.length;e+=1)this[e].style.transform=s;return this}function Rt(s){for(let e=0;e<this.length;e+=1)this[e].style.transitionDuration=typeof s!="string"?`${s}ms`:s;return this}function Ht(...s){let[e,t,i,l]=s;typeof s[1]=="function"&&([e,i,l]=s,t=void 0),l||(l=!1);function n(u){const c=u.target;if(!c)return;const p=u.target.dom7EventData||[];if(p.indexOf(u)<0&&p.unshift(u),O(c).is(t))i.apply(c,p);else{const o=O(c).parents();for(let w=0;w<o.length;w+=1)O(o[w]).is(t)&&i.apply(o[w],p)}}function r(u){const c=u&&u.target?u.target.dom7EventData||[]:[];c.indexOf(u)<0&&c.unshift(u),i.apply(this,c)}const a=e.split(" ");let d;for(let u=0;u<this.length;u+=1){const c=this[u];if(t)for(d=0;d<a.length;d+=1){const p=a[d];c.dom7LiveListeners||(c.dom7LiveListeners={}),c.dom7LiveListeners[p]||(c.dom7LiveListeners[p]=[]),c.dom7LiveListeners[p].push({listener:i,proxyListener:n}),c.addEventListener(p,n,l)}else for(d=0;d<a.length;d+=1){const p=a[d];c.dom7Listeners||(c.dom7Listeners={}),c.dom7Listeners[p]||(c.dom7Listeners[p]=[]),c.dom7Listeners[p].push({listener:i,proxyListener:r}),c.addEventListener(p,r,l)}}return this}function Vt(...s){let[e,t,i,l]=s;typeof s[1]=="function"&&([e,i,l]=s,t=void 0),l||(l=!1);const n=e.split(" ");for(let r=0;r<n.length;r+=1){const a=n[r];for(let d=0;d<this.length;d+=1){const u=this[d];let c;if(!t&&u.dom7Listeners?c=u.dom7Listeners[a]:t&&u.dom7LiveListeners&&(c=u.dom7LiveListeners[a]),c&&c.length)for(let p=c.length-1;p>=0;p-=1){const o=c[p];i&&o.listener===i||i&&o.listener&&o.listener.dom7proxy&&o.listener.dom7proxy===i?(u.removeEventListener(a,o.proxyListener,l),c.splice(p,1)):i||(u.removeEventListener(a,o.proxyListener,l),c.splice(p,1))}}}return this}function Wt(...s){const e=Q(),t=s[0].split(" "),i=s[1];for(let l=0;l<t.length;l+=1){const n=t[l];for(let r=0;r<this.length;r+=1){const a=this[r];if(e.CustomEvent){const d=new e.CustomEvent(n,{detail:i,bubbles:!0,cancelable:!0});a.dom7EventData=s.filter((u,c)=>c>0),a.dispatchEvent(d),a.dom7EventData=[],delete a.dom7EventData}}}return this}function Ft(s){const e=this;function t(i){i.target===this&&(s.call(this,i),e.off("transitionend",t))}return s&&e.on("transitionend",t),this}function qt(s){if(this.length>0){if(s){const e=this.styles();return this[0].offsetWidth+parseFloat(e.getPropertyValue("margin-right"))+parseFloat(e.getPropertyValue("margin-left"))}return this[0].offsetWidth}return null}function Yt(s){if(this.length>0){if(s){const e=this.styles();return this[0].offsetHeight+parseFloat(e.getPropertyValue("margin-top"))+parseFloat(e.getPropertyValue("margin-bottom"))}return this[0].offsetHeight}return null}function Xt(){if(this.length>0){const s=Q(),e=te(),t=this[0],i=t.getBoundingClientRect(),l=e.body,n=t.clientTop||l.clientTop||0,r=t.clientLeft||l.clientLeft||0,a=t===s?s.scrollY:t.scrollTop,d=t===s?s.scrollX:t.scrollLeft;return{top:i.top+a-n,left:i.left+d-r}}return null}function Ut(){const s=Q();return this[0]?s.getComputedStyle(this[0],null):{}}function Kt(s,e){const t=Q();let i;if(arguments.length===1)if(typeof s=="string"){if(this[0])return t.getComputedStyle(this[0],null).getPropertyValue(s)}else{for(i=0;i<this.length;i+=1)for(const l in s)this[i].style[l]=s[l];return this}if(arguments.length===2&&typeof s=="string"){for(i=0;i<this.length;i+=1)this[i].style[s]=e;return this}return this}function Zt(s){return s?(this.forEach((e,t)=>{s.apply(e,[e,t])}),this):this}function Jt(s){const e=zs(this,s);return O(e)}function Qt(s){if(typeof s=="undefined")return this[0]?this[0].innerHTML:null;for(let e=0;e<this.length;e+=1)this[e].innerHTML=s;return this}function ei(s){if(typeof s=="undefined")return this[0]?this[0].textContent.trim():null;for(let e=0;e<this.length;e+=1)this[e].textContent=s;return this}function si(s){const e=Q(),t=te(),i=this[0];let l,n;if(!i||typeof s=="undefined")return!1;if(typeof s=="string"){if(i.matches)return i.matches(s);if(i.webkitMatchesSelector)return i.webkitMatchesSelector(s);if(i.msMatchesSelector)return i.msMatchesSelector(s);for(l=O(s),n=0;n<l.length;n+=1)if(l[n]===i)return!0;return!1}if(s===t)return i===t;if(s===e)return i===e;if(s.nodeType||s instanceof _e){for(l=s.nodeType?[s]:s,n=0;n<l.length;n+=1)if(l[n]===i)return!0;return!1}return!1}function ti(){let s=this[0],e;if(s){for(e=0;(s=s.previousSibling)!==null;)s.nodeType===1&&(e+=1);return e}}function ii(s){if(typeof s=="undefined")return this;const e=this.length;if(s>e-1)return O([]);if(s<0){const t=e+s;return t<0?O([]):O([this[t]])}return O([this[s]])}function ri(...s){let e;const t=te();for(let i=0;i<s.length;i+=1){e=s[i];for(let l=0;l<this.length;l+=1)if(typeof e=="string"){const n=t.createElement("div");for(n.innerHTML=e;n.firstChild;)this[l].appendChild(n.firstChild)}else if(e instanceof _e)for(let n=0;n<e.length;n+=1)this[l].appendChild(e[n]);else this[l].appendChild(e)}return this}function ni(s){const e=te();let t,i;for(t=0;t<this.length;t+=1)if(typeof s=="string"){const l=e.createElement("div");for(l.innerHTML=s,i=l.childNodes.length-1;i>=0;i-=1)this[t].insertBefore(l.childNodes[i],this[t].childNodes[0])}else if(s instanceof _e)for(i=0;i<s.length;i+=1)this[t].insertBefore(s[i],this[t].childNodes[0]);else this[t].insertBefore(s,this[t].childNodes[0]);return this}function li(s){return this.length>0?s?this[0].nextElementSibling&&O(this[0].nextElementSibling).is(s)?O([this[0].nextElementSibling]):O([]):this[0].nextElementSibling?O([this[0].nextElementSibling]):O([]):O([])}function ai(s){const e=[];let t=this[0];if(!t)return O([]);for(;t.nextElementSibling;){const i=t.nextElementSibling;s?O(i).is(s)&&e.push(i):e.push(i),t=i}return O(e)}function oi(s){if(this.length>0){const e=this[0];return s?e.previousElementSibling&&O(e.previousElementSibling).is(s)?O([e.previousElementSibling]):O([]):e.previousElementSibling?O([e.previousElementSibling]):O([])}return O([])}function di(s){const e=[];let t=this[0];if(!t)return O([]);for(;t.previousElementSibling;){const i=t.previousElementSibling;s?O(i).is(s)&&e.push(i):e.push(i),t=i}return O(e)}function pi(s){const e=[];for(let t=0;t<this.length;t+=1)this[t].parentNode!==null&&(s?O(this[t].parentNode).is(s)&&e.push(this[t].parentNode):e.push(this[t].parentNode));return O(e)}function ci(s){const e=[];for(let t=0;t<this.length;t+=1){let i=this[t].parentNode;for(;i;)s?O(i).is(s)&&e.push(i):e.push(i),i=i.parentNode}return O(e)}function ui(s){let e=this;return typeof s=="undefined"?O([]):(e.is(s)||(e=e.parents(s).eq(0)),e)}function fi(s){const e=[];for(let t=0;t<this.length;t+=1){const i=this[t].querySelectorAll(s);for(let l=0;l<i.length;l+=1)e.push(i[l])}return O(e)}function mi(s){const e=[];for(let t=0;t<this.length;t+=1){const i=this[t].children;for(let l=0;l<i.length;l+=1)(!s||O(i[l]).is(s))&&e.push(i[l])}return O(e)}function hi(){for(let s=0;s<this.length;s+=1)this[s].parentNode&&this[s].parentNode.removeChild(this[s]);return this}const _s={addClass:At,removeClass:Lt,hasClass:jt,toggleClass:Nt,attr:Bt,removeAttr:Dt,transform:Gt,transition:Rt,on:Ht,off:Vt,trigger:Wt,transitionEnd:Ft,outerWidth:qt,outerHeight:Yt,styles:Ut,offset:Xt,css:Kt,each:Zt,html:Qt,text:ei,is:si,index:ti,eq:ii,append:ri,prepend:ni,next:li,nextAll:ai,prev:oi,prevAll:di,parent:pi,parents:ci,closest:ui,find:fi,children:mi,filter:Jt,remove:hi};Object.keys(_s).forEach(s=>{Object.defineProperty(O.fn,s,{value:_s[s],writable:!0})});function wi(s){const e=s;Object.keys(e).forEach(t=>{try{e[t]=null}catch{}try{delete e[t]}catch{}})}function xe(s,e){return e===void 0&&(e=0),setTimeout(s,e)}function de(){return Date.now()}function gi(s){const e=Q();let t;return e.getComputedStyle&&(t=e.getComputedStyle(s,null)),!t&&s.currentStyle&&(t=s.currentStyle),t||(t=s.style),t}function ts(s,e){e===void 0&&(e="x");const t=Q();let i,l,n;const r=gi(s);return t.WebKitCSSMatrix?(l=r.transform||r.webkitTransform,l.split(",").length>6&&(l=l.split(", ").map(a=>a.replace(",",".")).join(", ")),n=new t.WebKitCSSMatrix(l==="none"?"":l)):(n=r.MozTransform||r.OTransform||r.MsTransform||r.msTransform||r.transform||r.getPropertyValue("transform").replace("translate(","matrix(1, 0, 0, 1,"),i=n.toString().split(",")),e==="x"&&(t.WebKitCSSMatrix?l=n.m41:i.length===16?l=parseFloat(i[12]):l=parseFloat(i[4])),e==="y"&&(t.WebKitCSSMatrix?l=n.m42:i.length===16?l=parseFloat(i[13]):l=parseFloat(i[5])),l||0}function Pe(s){return typeof s=="object"&&s!==null&&s.constructor&&Object.prototype.toString.call(s).slice(8,-1)==="Object"}function _i(s){return typeof window!="undefined"&&typeof window.HTMLElement!="undefined"?s instanceof HTMLElement:s&&(s.nodeType===1||s.nodeType===11)}function oe(){const s=Object(arguments.length<=0?void 0:arguments[0]),e=["__proto__","constructor","prototype"];for(let t=1;t<arguments.length;t+=1){const i=t<0||arguments.length<=t?void 0:arguments[t];if(i!=null&&!_i(i)){const l=Object.keys(Object(i)).filter(n=>e.indexOf(n)<0);for(let n=0,r=l.length;n<r;n+=1){const a=l[n],d=Object.getOwnPropertyDescriptor(i,a);d!==void 0&&d.enumerable&&(Pe(s[a])&&Pe(i[a])?i[a].__swiper__?s[a]=i[a]:oe(s[a],i[a]):!Pe(s[a])&&Pe(i[a])?(s[a]={},i[a].__swiper__?s[a]=i[a]:oe(s[a],i[a])):s[a]=i[a])}}}return s}function Me(s,e,t){s.style.setProperty(e,t)}function Is(s){let{swiper:e,targetPosition:t,side:i}=s;const l=Q(),n=-e.translate;let r=null,a;const d=e.params.speed;e.wrapperEl.style.scrollSnapType="none",l.cancelAnimationFrame(e.cssModeFrameID);const u=t>n?"next":"prev",c=(o,w)=>u==="next"&&o>=w||u==="prev"&&o<=w,p=()=>{a=new Date().getTime(),r===null&&(r=a);const o=Math.max(Math.min((a-r)/d,1),0),w=.5-Math.cos(o*Math.PI)/2;let h=n+w*(t-n);if(c(h,t)&&(h=t),e.wrapperEl.scrollTo({[i]:h}),c(h,t)){e.wrapperEl.style.overflow="hidden",e.wrapperEl.style.scrollSnapType="",setTimeout(()=>{e.wrapperEl.style.overflow="",e.wrapperEl.scrollTo({[i]:h})}),l.cancelAnimationFrame(e.cssModeFrameID);return}e.cssModeFrameID=l.requestAnimationFrame(p)};p()}let Ue;function vi(){const s=Q(),e=te();return{smoothScroll:e.documentElement&&"scrollBehavior"in e.documentElement.style,touch:!!("ontouchstart"in s||s.DocumentTouch&&e instanceof s.DocumentTouch),passiveListener:function(){let i=!1;try{const l=Object.defineProperty({},"passive",{get(){i=!0}});s.addEventListener("testPassiveListener",null,l)}catch{}return i}(),gestures:function(){return"ongesturestart"in s}()}}function Os(){return Ue||(Ue=vi()),Ue}let Ke;function Si(s){let{userAgent:e}=s===void 0?{}:s;const t=Os(),i=Q(),l=i.navigator.platform,n=e||i.navigator.userAgent,r={ios:!1,android:!1},a=i.screen.width,d=i.screen.height,u=n.match(/(Android);?[\s\/]+([\d.]+)?/);let c=n.match(/(iPad).*OS\s([\d_]+)/);const p=n.match(/(iPod)(.*OS\s([\d_]+))?/),o=!c&&n.match(/(iPhone\sOS|iOS)\s([\d_]+)/),w=l==="Win32";let h=l==="MacIntel";const _=["1024x1366","1366x1024","834x1194","1194x834","834x1112","1112x834","768x1024","1024x768","820x1180","1180x820","810x1080","1080x810"];return!c&&h&&t.touch&&_.indexOf(`${a}x${d}`)>=0&&(c=n.match(/(Version)\/([\d.]+)/),c||(c=[0,1,"13_0_0"]),h=!1),u&&!w&&(r.os="android",r.android=!0),(c||o||p)&&(r.os="ios",r.ios=!0),r}function bi(s){return s===void 0&&(s={}),Ke||(Ke=Si(s)),Ke}let Ze;function yi(){const s=Q();function e(){const t=s.navigator.userAgent.toLowerCase();return t.indexOf("safari")>=0&&t.indexOf("chrome")<0&&t.indexOf("android")<0}return{isSafari:e(),isWebView:/(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(s.navigator.userAgent)}}function $i(){return Ze||(Ze=yi()),Ze}function xi(s){let{swiper:e,on:t,emit:i}=s;const l=Q();let n=null,r=null;const a=()=>{!e||e.destroyed||!e.initialized||(i("beforeResize"),i("resize"))},d=()=>{!e||e.destroyed||!e.initialized||(n=new ResizeObserver(p=>{r=l.requestAnimationFrame(()=>{const{width:o,height:w}=e;let h=o,_=w;p.forEach(b=>{let{contentBoxSize:S,contentRect:y,target:v}=b;v&&v!==e.el||(h=y?y.width:(S[0]||S).inlineSize,_=y?y.height:(S[0]||S).blockSize)}),(h!==o||_!==w)&&a()})}),n.observe(e.el))},u=()=>{r&&l.cancelAnimationFrame(r),n&&n.unobserve&&e.el&&(n.unobserve(e.el),n=null)},c=()=>{!e||e.destroyed||!e.initialized||i("orientationchange")};t("init",()=>{if(e.params.resizeObserver&&typeof l.ResizeObserver!="undefined"){d();return}l.addEventListener("resize",a),l.addEventListener("orientationchange",c)}),t("destroy",()=>{u(),l.removeEventListener("resize",a),l.removeEventListener("orientationchange",c)})}function Ci(s){let{swiper:e,extendParams:t,on:i,emit:l}=s;const n=[],r=Q(),a=function(c,p){p===void 0&&(p={});const o=r.MutationObserver||r.WebkitMutationObserver,w=new o(h=>{if(h.length===1){l("observerUpdate",h[0]);return}const _=function(){l("observerUpdate",h[0])};r.requestAnimationFrame?r.requestAnimationFrame(_):r.setTimeout(_,0)});w.observe(c,{attributes:typeof p.attributes=="undefined"?!0:p.attributes,childList:typeof p.childList=="undefined"?!0:p.childList,characterData:typeof p.characterData=="undefined"?!0:p.characterData}),n.push(w)},d=()=>{if(!!e.params.observer){if(e.params.observeParents){const c=e.$el.parents();for(let p=0;p<c.length;p+=1)a(c[p])}a(e.$el[0],{childList:e.params.observeSlideChildren}),a(e.$wrapperEl[0],{attributes:!1})}},u=()=>{n.forEach(c=>{c.disconnect()}),n.splice(0,n.length)};t({observer:!1,observeParents:!1,observeSlideChildren:!1}),i("init",d),i("destroy",u)}var Ei={on(s,e,t){const i=this;if(typeof e!="function")return i;const l=t?"unshift":"push";return s.split(" ").forEach(n=>{i.eventsListeners[n]||(i.eventsListeners[n]=[]),i.eventsListeners[n][l](e)}),i},once(s,e,t){const i=this;if(typeof e!="function")return i;function l(){i.off(s,l),l.__emitterProxy&&delete l.__emitterProxy;for(var n=arguments.length,r=new Array(n),a=0;a<n;a++)r[a]=arguments[a];e.apply(i,r)}return l.__emitterProxy=e,i.on(s,l,t)},onAny(s,e){const t=this;if(typeof s!="function")return t;const i=e?"unshift":"push";return t.eventsAnyListeners.indexOf(s)<0&&t.eventsAnyListeners[i](s),t},offAny(s){const e=this;if(!e.eventsAnyListeners)return e;const t=e.eventsAnyListeners.indexOf(s);return t>=0&&e.eventsAnyListeners.splice(t,1),e},off(s,e){const t=this;return t.eventsListeners&&s.split(" ").forEach(i=>{typeof e=="undefined"?t.eventsListeners[i]=[]:t.eventsListeners[i]&&t.eventsListeners[i].forEach((l,n)=>{(l===e||l.__emitterProxy&&l.__emitterProxy===e)&&t.eventsListeners[i].splice(n,1)})}),t},emit(){const s=this;if(!s.eventsListeners)return s;let e,t,i;for(var l=arguments.length,n=new Array(l),r=0;r<l;r++)n[r]=arguments[r];return typeof n[0]=="string"||Array.isArray(n[0])?(e=n[0],t=n.slice(1,n.length),i=s):(e=n[0].events,t=n[0].data,i=n[0].context||s),t.unshift(i),(Array.isArray(e)?e:e.split(" ")).forEach(d=>{s.eventsAnyListeners&&s.eventsAnyListeners.length&&s.eventsAnyListeners.forEach(u=>{u.apply(i,[d,...t])}),s.eventsListeners&&s.eventsListeners[d]&&s.eventsListeners[d].forEach(u=>{u.apply(i,t)})}),s}};function Ti(){const s=this;let e,t;const i=s.$el;typeof s.params.width!="undefined"&&s.params.width!==null?e=s.params.width:e=i[0].clientWidth,typeof s.params.height!="undefined"&&s.params.height!==null?t=s.params.height:t=i[0].clientHeight,!(e===0&&s.isHorizontal()||t===0&&s.isVertical())&&(e=e-parseInt(i.css("padding-left")||0,10)-parseInt(i.css("padding-right")||0,10),t=t-parseInt(i.css("padding-top")||0,10)-parseInt(i.css("padding-bottom")||0,10),Number.isNaN(e)&&(e=0),Number.isNaN(t)&&(t=0),Object.assign(s,{width:e,height:t,size:s.isHorizontal()?e:t}))}function ki(){const s=this;function e(x){return s.isHorizontal()?x:{width:"height","margin-top":"margin-left","margin-bottom ":"margin-right","margin-left":"margin-top","margin-right":"margin-bottom","padding-left":"padding-top","padding-right":"padding-bottom",marginRight:"marginBottom"}[x]}function t(x,z){return parseFloat(x.getPropertyValue(e(z))||0)}const i=s.params,{$wrapperEl:l,size:n,rtlTranslate:r,wrongRTL:a}=s,d=s.virtual&&i.virtual.enabled,u=d?s.virtual.slides.length:s.slides.length,c=l.children(`.${s.params.slideClass}`),p=d?s.virtual.slides.length:c.length;let o=[];const w=[],h=[];let _=i.slidesOffsetBefore;typeof _=="function"&&(_=i.slidesOffsetBefore.call(s));let b=i.slidesOffsetAfter;typeof b=="function"&&(b=i.slidesOffsetAfter.call(s));const S=s.snapGrid.length,y=s.slidesGrid.length;let v=i.spaceBetween,$=-_,A=0,k=0;if(typeof n=="undefined")return;typeof v=="string"&&v.indexOf("%")>=0&&(v=parseFloat(v.replace("%",""))/100*n),s.virtualSize=-v,r?c.css({marginLeft:"",marginBottom:"",marginTop:""}):c.css({marginRight:"",marginBottom:"",marginTop:""}),i.centeredSlides&&i.cssMode&&(Me(s.wrapperEl,"--swiper-centered-offset-before",""),Me(s.wrapperEl,"--swiper-centered-offset-after",""));const L=i.grid&&i.grid.rows>1&&s.grid;L&&s.grid.initSlides(p);let T;const B=i.slidesPerView==="auto"&&i.breakpoints&&Object.keys(i.breakpoints).filter(x=>typeof i.breakpoints[x].slidesPerView!="undefined").length>0;for(let x=0;x<p;x+=1){T=0;const z=c.eq(x);if(L&&s.grid.updateSlide(x,z,p,e),z.css("display")!=="none"){if(i.slidesPerView==="auto"){B&&(c[x].style[e("width")]="");const M=getComputedStyle(z[0]),N=z[0].style.transform,j=z[0].style.webkitTransform;if(N&&(z[0].style.transform="none"),j&&(z[0].style.webkitTransform="none"),i.roundLengths)T=s.isHorizontal()?z.outerWidth(!0):z.outerHeight(!0);else{const U=t(M,"width"),J=t(M,"padding-left"),C=t(M,"padding-right"),D=t(M,"margin-left"),H=t(M,"margin-right"),Y=M.getPropertyValue("box-sizing");if(Y&&Y==="border-box")T=U+D+H;else{const{clientWidth:Z,offsetWidth:ye}=z[0];T=U+J+C+D+H+(ye-Z)}}N&&(z[0].style.transform=N),j&&(z[0].style.webkitTransform=j),i.roundLengths&&(T=Math.floor(T))}else T=(n-(i.slidesPerView-1)*v)/i.slidesPerView,i.roundLengths&&(T=Math.floor(T)),c[x]&&(c[x].style[e("width")]=`${T}px`);c[x]&&(c[x].swiperSlideSize=T),h.push(T),i.centeredSlides?($=$+T/2+A/2+v,A===0&&x!==0&&($=$-n/2-v),x===0&&($=$-n/2-v),Math.abs($)<1/1e3&&($=0),i.roundLengths&&($=Math.floor($)),k%i.slidesPerGroup===0&&o.push($),w.push($)):(i.roundLengths&&($=Math.floor($)),(k-Math.min(s.params.slidesPerGroupSkip,k))%s.params.slidesPerGroup===0&&o.push($),w.push($),$=$+T+v),s.virtualSize+=T+v,A=T,k+=1}}if(s.virtualSize=Math.max(s.virtualSize,n)+b,r&&a&&(i.effect==="slide"||i.effect==="coverflow")&&l.css({width:`${s.virtualSize+i.spaceBetween}px`}),i.setWrapperSize&&l.css({[e("width")]:`${s.virtualSize+i.spaceBetween}px`}),L&&s.grid.updateWrapperSize(T,o,e),!i.centeredSlides){const x=[];for(let z=0;z<o.length;z+=1){let M=o[z];i.roundLengths&&(M=Math.floor(M)),o[z]<=s.virtualSize-n&&x.push(M)}o=x,Math.floor(s.virtualSize-n)-Math.floor(o[o.length-1])>1&&o.push(s.virtualSize-n)}if(o.length===0&&(o=[0]),i.spaceBetween!==0){const x=s.isHorizontal()&&r?"marginLeft":e("marginRight");c.filter((z,M)=>i.cssMode?M!==c.length-1:!0).css({[x]:`${v}px`})}if(i.centeredSlides&&i.centeredSlidesBounds){let x=0;h.forEach(M=>{x+=M+(i.spaceBetween?i.spaceBetween:0)}),x-=i.spaceBetween;const z=x-n;o=o.map(M=>M<0?-_:M>z?z+b:M)}if(i.centerInsufficientSlides){let x=0;if(h.forEach(z=>{x+=z+(i.spaceBetween?i.spaceBetween:0)}),x-=i.spaceBetween,x<n){const z=(n-x)/2;o.forEach((M,N)=>{o[N]=M-z}),w.forEach((M,N)=>{w[N]=M+z})}}if(Object.assign(s,{slides:c,snapGrid:o,slidesGrid:w,slidesSizesGrid:h}),i.centeredSlides&&i.cssMode&&!i.centeredSlidesBounds){Me(s.wrapperEl,"--swiper-centered-offset-before",`${-o[0]}px`),Me(s.wrapperEl,"--swiper-centered-offset-after",`${s.size/2-h[h.length-1]/2}px`);const x=-s.snapGrid[0],z=-s.slidesGrid[0];s.snapGrid=s.snapGrid.map(M=>M+x),s.slidesGrid=s.slidesGrid.map(M=>M+z)}if(p!==u&&s.emit("slidesLengthChange"),o.length!==S&&(s.params.watchOverflow&&s.checkOverflow(),s.emit("snapGridLengthChange")),w.length!==y&&s.emit("slidesGridLengthChange"),i.watchSlidesProgress&&s.updateSlidesOffset(),!d&&!i.cssMode&&(i.effect==="slide"||i.effect==="fade")){const x=`${i.containerModifierClass}backface-hidden`,z=s.$el.hasClass(x);p<=i.maxBackfaceHiddenSlides?z||s.$el.addClass(x):z&&s.$el.removeClass(x)}}function Pi(s){const e=this,t=[],i=e.virtual&&e.params.virtual.enabled;let l=0,n;typeof s=="number"?e.setTransition(s):s===!0&&e.setTransition(e.params.speed);const r=a=>i?e.slides.filter(d=>parseInt(d.getAttribute("data-swiper-slide-index"),10)===a)[0]:e.slides.eq(a)[0];if(e.params.slidesPerView!=="auto"&&e.params.slidesPerView>1)if(e.params.centeredSlides)e.visibleSlides.each(a=>{t.push(a)});else for(n=0;n<Math.ceil(e.params.slidesPerView);n+=1){const a=e.activeIndex+n;if(a>e.slides.length&&!i)break;t.push(r(a))}else t.push(r(e.activeIndex));for(n=0;n<t.length;n+=1)if(typeof t[n]!="undefined"){const a=t[n].offsetHeight;l=a>l?a:l}(l||l===0)&&e.$wrapperEl.css("height",`${l}px`)}function Mi(){const s=this,e=s.slides;for(let t=0;t<e.length;t+=1)e[t].swiperSlideOffset=s.isHorizontal()?e[t].offsetLeft:e[t].offsetTop}function zi(s){s===void 0&&(s=this&&this.translate||0);const e=this,t=e.params,{slides:i,rtlTranslate:l,snapGrid:n}=e;if(i.length===0)return;typeof i[0].swiperSlideOffset=="undefined"&&e.updateSlidesOffset();let r=-s;l&&(r=s),i.removeClass(t.slideVisibleClass),e.visibleSlidesIndexes=[],e.visibleSlides=[];for(let a=0;a<i.length;a+=1){const d=i[a];let u=d.swiperSlideOffset;t.cssMode&&t.centeredSlides&&(u-=i[0].swiperSlideOffset);const c=(r+(t.centeredSlides?e.minTranslate():0)-u)/(d.swiperSlideSize+t.spaceBetween),p=(r-n[0]+(t.centeredSlides?e.minTranslate():0)-u)/(d.swiperSlideSize+t.spaceBetween),o=-(r-u),w=o+e.slidesSizesGrid[a];(o>=0&&o<e.size-1||w>1&&w<=e.size||o<=0&&w>=e.size)&&(e.visibleSlides.push(d),e.visibleSlidesIndexes.push(a),i.eq(a).addClass(t.slideVisibleClass)),d.progress=l?-c:c,d.originalProgress=l?-p:p}e.visibleSlides=O(e.visibleSlides)}function Ii(s){const e=this;if(typeof s=="undefined"){const u=e.rtlTranslate?-1:1;s=e&&e.translate&&e.translate*u||0}const t=e.params,i=e.maxTranslate()-e.minTranslate();let{progress:l,isBeginning:n,isEnd:r}=e;const a=n,d=r;i===0?(l=0,n=!0,r=!0):(l=(s-e.minTranslate())/i,n=l<=0,r=l>=1),Object.assign(e,{progress:l,isBeginning:n,isEnd:r}),(t.watchSlidesProgress||t.centeredSlides&&t.autoHeight)&&e.updateSlidesProgress(s),n&&!a&&e.emit("reachBeginning toEdge"),r&&!d&&e.emit("reachEnd toEdge"),(a&&!n||d&&!r)&&e.emit("fromEdge"),e.emit("progress",l)}function Oi(){const s=this,{slides:e,params:t,$wrapperEl:i,activeIndex:l,realIndex:n}=s,r=s.virtual&&t.virtual.enabled;e.removeClass(`${t.slideActiveClass} ${t.slideNextClass} ${t.slidePrevClass} ${t.slideDuplicateActiveClass} ${t.slideDuplicateNextClass} ${t.slideDuplicatePrevClass}`);let a;r?a=s.$wrapperEl.find(`.${t.slideClass}[data-swiper-slide-index="${l}"]`):a=e.eq(l),a.addClass(t.slideActiveClass),t.loop&&(a.hasClass(t.slideDuplicateClass)?i.children(`.${t.slideClass}:not(.${t.slideDuplicateClass})[data-swiper-slide-index="${n}"]`).addClass(t.slideDuplicateActiveClass):i.children(`.${t.slideClass}.${t.slideDuplicateClass}[data-swiper-slide-index="${n}"]`).addClass(t.slideDuplicateActiveClass));let d=a.nextAll(`.${t.slideClass}`).eq(0).addClass(t.slideNextClass);t.loop&&d.length===0&&(d=e.eq(0),d.addClass(t.slideNextClass));let u=a.prevAll(`.${t.slideClass}`).eq(0).addClass(t.slidePrevClass);t.loop&&u.length===0&&(u=e.eq(-1),u.addClass(t.slidePrevClass)),t.loop&&(d.hasClass(t.slideDuplicateClass)?i.children(`.${t.slideClass}:not(.${t.slideDuplicateClass})[data-swiper-slide-index="${d.attr("data-swiper-slide-index")}"]`).addClass(t.slideDuplicateNextClass):i.children(`.${t.slideClass}.${t.slideDuplicateClass}[data-swiper-slide-index="${d.attr("data-swiper-slide-index")}"]`).addClass(t.slideDuplicateNextClass),u.hasClass(t.slideDuplicateClass)?i.children(`.${t.slideClass}:not(.${t.slideDuplicateClass})[data-swiper-slide-index="${u.attr("data-swiper-slide-index")}"]`).addClass(t.slideDuplicatePrevClass):i.children(`.${t.slideClass}.${t.slideDuplicateClass}[data-swiper-slide-index="${u.attr("data-swiper-slide-index")}"]`).addClass(t.slideDuplicatePrevClass)),s.emitSlidesClasses()}function Ai(s){const e=this,t=e.rtlTranslate?e.translate:-e.translate,{slidesGrid:i,snapGrid:l,params:n,activeIndex:r,realIndex:a,snapIndex:d}=e;let u=s,c;if(typeof u=="undefined"){for(let o=0;o<i.length;o+=1)typeof i[o+1]!="undefined"?t>=i[o]&&t<i[o+1]-(i[o+1]-i[o])/2?u=o:t>=i[o]&&t<i[o+1]&&(u=o+1):t>=i[o]&&(u=o);n.normalizeSlideIndex&&(u<0||typeof u=="undefined")&&(u=0)}if(l.indexOf(t)>=0)c=l.indexOf(t);else{const o=Math.min(n.slidesPerGroupSkip,u);c=o+Math.floor((u-o)/n.slidesPerGroup)}if(c>=l.length&&(c=l.length-1),u===r){c!==d&&(e.snapIndex=c,e.emit("snapIndexChange"));return}const p=parseInt(e.slides.eq(u).attr("data-swiper-slide-index")||u,10);Object.assign(e,{snapIndex:c,realIndex:p,previousIndex:r,activeIndex:u}),e.emit("activeIndexChange"),e.emit("snapIndexChange"),a!==p&&e.emit("realIndexChange"),(e.initialized||e.params.runCallbacksOnInit)&&e.emit("slideChange")}function Li(s){const e=this,t=e.params,i=O(s).closest(`.${t.slideClass}`)[0];let l=!1,n;if(i){for(let r=0;r<e.slides.length;r+=1)if(e.slides[r]===i){l=!0,n=r;break}}if(i&&l)e.clickedSlide=i,e.virtual&&e.params.virtual.enabled?e.clickedIndex=parseInt(O(i).attr("data-swiper-slide-index"),10):e.clickedIndex=n;else{e.clickedSlide=void 0,e.clickedIndex=void 0;return}t.slideToClickedSlide&&e.clickedIndex!==void 0&&e.clickedIndex!==e.activeIndex&&e.slideToClickedSlide()}var Ni={updateSize:Ti,updateSlides:ki,updateAutoHeight:Pi,updateSlidesOffset:Mi,updateSlidesProgress:zi,updateProgress:Ii,updateSlidesClasses:Oi,updateActiveIndex:Ai,updateClickedSlide:Li};function ji(s){s===void 0&&(s=this.isHorizontal()?"x":"y");const e=this,{params:t,rtlTranslate:i,translate:l,$wrapperEl:n}=e;if(t.virtualTranslate)return i?-l:l;if(t.cssMode)return l;let r=ts(n[0],s);return i&&(r=-r),r||0}function Bi(s,e){const t=this,{rtlTranslate:i,params:l,$wrapperEl:n,wrapperEl:r,progress:a}=t;let d=0,u=0;const c=0;t.isHorizontal()?d=i?-s:s:u=s,l.roundLengths&&(d=Math.floor(d),u=Math.floor(u)),l.cssMode?r[t.isHorizontal()?"scrollLeft":"scrollTop"]=t.isHorizontal()?-d:-u:l.virtualTranslate||n.transform(`translate3d(${d}px, ${u}px, ${c}px)`),t.previousTranslate=t.translate,t.translate=t.isHorizontal()?d:u;let p;const o=t.maxTranslate()-t.minTranslate();o===0?p=0:p=(s-t.minTranslate())/o,p!==a&&t.updateProgress(s),t.emit("setTranslate",t.translate,e)}function Di(){return-this.snapGrid[0]}function Gi(){return-this.snapGrid[this.snapGrid.length-1]}function Ri(s,e,t,i,l){s===void 0&&(s=0),e===void 0&&(e=this.params.speed),t===void 0&&(t=!0),i===void 0&&(i=!0);const n=this,{params:r,wrapperEl:a}=n;if(n.animating&&r.preventInteractionOnTransition)return!1;const d=n.minTranslate(),u=n.maxTranslate();let c;if(i&&s>d?c=d:i&&s<u?c=u:c=s,n.updateProgress(c),r.cssMode){const p=n.isHorizontal();if(e===0)a[p?"scrollLeft":"scrollTop"]=-c;else{if(!n.support.smoothScroll)return Is({swiper:n,targetPosition:-c,side:p?"left":"top"}),!0;a.scrollTo({[p?"left":"top"]:-c,behavior:"smooth"})}return!0}return e===0?(n.setTransition(0),n.setTranslate(c),t&&(n.emit("beforeTransitionStart",e,l),n.emit("transitionEnd"))):(n.setTransition(e),n.setTranslate(c),t&&(n.emit("beforeTransitionStart",e,l),n.emit("transitionStart")),n.animating||(n.animating=!0,n.onTranslateToWrapperTransitionEnd||(n.onTranslateToWrapperTransitionEnd=function(o){!n||n.destroyed||o.target===this&&(n.$wrapperEl[0].removeEventListener("transitionend",n.onTranslateToWrapperTransitionEnd),n.$wrapperEl[0].removeEventListener("webkitTransitionEnd",n.onTranslateToWrapperTransitionEnd),n.onTranslateToWrapperTransitionEnd=null,delete n.onTranslateToWrapperTransitionEnd,t&&n.emit("transitionEnd"))}),n.$wrapperEl[0].addEventListener("transitionend",n.onTranslateToWrapperTransitionEnd),n.$wrapperEl[0].addEventListener("webkitTransitionEnd",n.onTranslateToWrapperTransitionEnd))),!0}var Hi={getTranslate:ji,setTranslate:Bi,minTranslate:Di,maxTranslate:Gi,translateTo:Ri};function Vi(s,e){const t=this;t.params.cssMode||t.$wrapperEl.transition(s),t.emit("setTransition",s,e)}function As(s){let{swiper:e,runCallbacks:t,direction:i,step:l}=s;const{activeIndex:n,previousIndex:r}=e;let a=i;if(a||(n>r?a="next":n<r?a="prev":a="reset"),e.emit(`transition${l}`),t&&n!==r){if(a==="reset"){e.emit(`slideResetTransition${l}`);return}e.emit(`slideChangeTransition${l}`),a==="next"?e.emit(`slideNextTransition${l}`):e.emit(`slidePrevTransition${l}`)}}function Wi(s,e){s===void 0&&(s=!0);const t=this,{params:i}=t;i.cssMode||(i.autoHeight&&t.updateAutoHeight(),As({swiper:t,runCallbacks:s,direction:e,step:"Start"}))}function Fi(s,e){s===void 0&&(s=!0);const t=this,{params:i}=t;t.animating=!1,!i.cssMode&&(t.setTransition(0),As({swiper:t,runCallbacks:s,direction:e,step:"End"}))}var qi={setTransition:Vi,transitionStart:Wi,transitionEnd:Fi};function Yi(s,e,t,i,l){if(s===void 0&&(s=0),e===void 0&&(e=this.params.speed),t===void 0&&(t=!0),typeof s!="number"&&typeof s!="string")throw new Error(`The 'index' argument cannot have type other than 'number' or 'string'. [${typeof s}] given.`);if(typeof s=="string"){const v=parseInt(s,10);if(!isFinite(v))throw new Error(`The passed-in 'index' (string) couldn't be converted to 'number'. [${s}] given.`);s=v}const n=this;let r=s;r<0&&(r=0);const{params:a,snapGrid:d,slidesGrid:u,previousIndex:c,activeIndex:p,rtlTranslate:o,wrapperEl:w,enabled:h}=n;if(n.animating&&a.preventInteractionOnTransition||!h&&!i&&!l)return!1;const _=Math.min(n.params.slidesPerGroupSkip,r);let b=_+Math.floor((r-_)/n.params.slidesPerGroup);b>=d.length&&(b=d.length-1),(p||a.initialSlide||0)===(c||0)&&t&&n.emit("beforeSlideChangeStart");const S=-d[b];if(n.updateProgress(S),a.normalizeSlideIndex)for(let v=0;v<u.length;v+=1){const $=-Math.floor(S*100),A=Math.floor(u[v]*100),k=Math.floor(u[v+1]*100);typeof u[v+1]!="undefined"?$>=A&&$<k-(k-A)/2?r=v:$>=A&&$<k&&(r=v+1):$>=A&&(r=v)}if(n.initialized&&r!==p&&(!n.allowSlideNext&&S<n.translate&&S<n.minTranslate()||!n.allowSlidePrev&&S>n.translate&&S>n.maxTranslate()&&(p||0)!==r))return!1;let y;if(r>p?y="next":r<p?y="prev":y="reset",o&&-S===n.translate||!o&&S===n.translate)return n.updateActiveIndex(r),a.autoHeight&&n.updateAutoHeight(),n.updateSlidesClasses(),a.effect!=="slide"&&n.setTranslate(S),y!=="reset"&&(n.transitionStart(t,y),n.transitionEnd(t,y)),!1;if(a.cssMode){const v=n.isHorizontal(),$=o?S:-S;if(e===0){const A=n.virtual&&n.params.virtual.enabled;A&&(n.wrapperEl.style.scrollSnapType="none",n._immediateVirtual=!0),w[v?"scrollLeft":"scrollTop"]=$,A&&requestAnimationFrame(()=>{n.wrapperEl.style.scrollSnapType="",n._swiperImmediateVirtual=!1})}else{if(!n.support.smoothScroll)return Is({swiper:n,targetPosition:$,side:v?"left":"top"}),!0;w.scrollTo({[v?"left":"top"]:$,behavior:"smooth"})}return!0}return n.setTransition(e),n.setTranslate(S),n.updateActiveIndex(r),n.updateSlidesClasses(),n.emit("beforeTransitionStart",e,i),n.transitionStart(t,y),e===0?n.transitionEnd(t,y):n.animating||(n.animating=!0,n.onSlideToWrapperTransitionEnd||(n.onSlideToWrapperTransitionEnd=function($){!n||n.destroyed||$.target===this&&(n.$wrapperEl[0].removeEventListener("transitionend",n.onSlideToWrapperTransitionEnd),n.$wrapperEl[0].removeEventListener("webkitTransitionEnd",n.onSlideToWrapperTransitionEnd),n.onSlideToWrapperTransitionEnd=null,delete n.onSlideToWrapperTransitionEnd,n.transitionEnd(t,y))}),n.$wrapperEl[0].addEventListener("transitionend",n.onSlideToWrapperTransitionEnd),n.$wrapperEl[0].addEventListener("webkitTransitionEnd",n.onSlideToWrapperTransitionEnd)),!0}function Xi(s,e,t,i){s===void 0&&(s=0),e===void 0&&(e=this.params.speed),t===void 0&&(t=!0);const l=this;let n=s;return l.params.loop&&(n+=l.loopedSlides),l.slideTo(n,e,t,i)}function Ui(s,e,t){s===void 0&&(s=this.params.speed),e===void 0&&(e=!0);const i=this,{animating:l,enabled:n,params:r}=i;if(!n)return i;let a=r.slidesPerGroup;r.slidesPerView==="auto"&&r.slidesPerGroup===1&&r.slidesPerGroupAuto&&(a=Math.max(i.slidesPerViewDynamic("current",!0),1));const d=i.activeIndex<r.slidesPerGroupSkip?1:a;if(r.loop){if(l&&r.loopPreventsSlide)return!1;i.loopFix(),i._clientLeft=i.$wrapperEl[0].clientLeft}return r.rewind&&i.isEnd?i.slideTo(0,s,e,t):i.slideTo(i.activeIndex+d,s,e,t)}function Ki(s,e,t){s===void 0&&(s=this.params.speed),e===void 0&&(e=!0);const i=this,{params:l,animating:n,snapGrid:r,slidesGrid:a,rtlTranslate:d,enabled:u}=i;if(!u)return i;if(l.loop){if(n&&l.loopPreventsSlide)return!1;i.loopFix(),i._clientLeft=i.$wrapperEl[0].clientLeft}const c=d?i.translate:-i.translate;function p(b){return b<0?-Math.floor(Math.abs(b)):Math.floor(b)}const o=p(c),w=r.map(b=>p(b));let h=r[w.indexOf(o)-1];if(typeof h=="undefined"&&l.cssMode){let b;r.forEach((S,y)=>{o>=S&&(b=y)}),typeof b!="undefined"&&(h=r[b>0?b-1:b])}let _=0;if(typeof h!="undefined"&&(_=a.indexOf(h),_<0&&(_=i.activeIndex-1),l.slidesPerView==="auto"&&l.slidesPerGroup===1&&l.slidesPerGroupAuto&&(_=_-i.slidesPerViewDynamic("previous",!0)+1,_=Math.max(_,0))),l.rewind&&i.isBeginning){const b=i.params.virtual&&i.params.virtual.enabled&&i.virtual?i.virtual.slides.length-1:i.slides.length-1;return i.slideTo(b,s,e,t)}return i.slideTo(_,s,e,t)}function Zi(s,e,t){s===void 0&&(s=this.params.speed),e===void 0&&(e=!0);const i=this;return i.slideTo(i.activeIndex,s,e,t)}function Ji(s,e,t,i){s===void 0&&(s=this.params.speed),e===void 0&&(e=!0),i===void 0&&(i=.5);const l=this;let n=l.activeIndex;const r=Math.min(l.params.slidesPerGroupSkip,n),a=r+Math.floor((n-r)/l.params.slidesPerGroup),d=l.rtlTranslate?l.translate:-l.translate;if(d>=l.snapGrid[a]){const u=l.snapGrid[a],c=l.snapGrid[a+1];d-u>(c-u)*i&&(n+=l.params.slidesPerGroup)}else{const u=l.snapGrid[a-1],c=l.snapGrid[a];d-u<=(c-u)*i&&(n-=l.params.slidesPerGroup)}return n=Math.max(n,0),n=Math.min(n,l.slidesGrid.length-1),l.slideTo(n,s,e,t)}function Qi(){const s=this,{params:e,$wrapperEl:t}=s,i=e.slidesPerView==="auto"?s.slidesPerViewDynamic():e.slidesPerView;let l=s.clickedIndex,n;if(e.loop){if(s.animating)return;n=parseInt(O(s.clickedSlide).attr("data-swiper-slide-index"),10),e.centeredSlides?l<s.loopedSlides-i/2||l>s.slides.length-s.loopedSlides+i/2?(s.loopFix(),l=t.children(`.${e.slideClass}[data-swiper-slide-index="${n}"]:not(.${e.slideDuplicateClass})`).eq(0).index(),xe(()=>{s.slideTo(l)})):s.slideTo(l):l>s.slides.length-i?(s.loopFix(),l=t.children(`.${e.slideClass}[data-swiper-slide-index="${n}"]:not(.${e.slideDuplicateClass})`).eq(0).index(),xe(()=>{s.slideTo(l)})):s.slideTo(l)}else s.slideTo(l)}var er={slideTo:Yi,slideToLoop:Xi,slideNext:Ui,slidePrev:Ki,slideReset:Zi,slideToClosest:Ji,slideToClickedSlide:Qi};function sr(){const s=this,e=te(),{params:t,$wrapperEl:i}=s,l=i.children().length>0?O(i.children()[0].parentNode):i;l.children(`.${t.slideClass}.${t.slideDuplicateClass}`).remove();let n=l.children(`.${t.slideClass}`);if(t.loopFillGroupWithBlank){const d=t.slidesPerGroup-n.length%t.slidesPerGroup;if(d!==t.slidesPerGroup){for(let u=0;u<d;u+=1){const c=O(e.createElement("div")).addClass(`${t.slideClass} ${t.slideBlankClass}`);l.append(c)}n=l.children(`.${t.slideClass}`)}}t.slidesPerView==="auto"&&!t.loopedSlides&&(t.loopedSlides=n.length),s.loopedSlides=Math.ceil(parseFloat(t.loopedSlides||t.slidesPerView,10)),s.loopedSlides+=t.loopAdditionalSlides,s.loopedSlides>n.length&&(s.loopedSlides=n.length);const r=[],a=[];n.each((d,u)=>{const c=O(d);u<s.loopedSlides&&a.push(d),u<n.length&&u>=n.length-s.loopedSlides&&r.push(d),c.attr("data-swiper-slide-index",u)});for(let d=0;d<a.length;d+=1)l.append(O(a[d].cloneNode(!0)).addClass(t.slideDuplicateClass));for(let d=r.length-1;d>=0;d-=1)l.prepend(O(r[d].cloneNode(!0)).addClass(t.slideDuplicateClass))}function tr(){const s=this;s.emit("beforeLoopFix");const{activeIndex:e,slides:t,loopedSlides:i,allowSlidePrev:l,allowSlideNext:n,snapGrid:r,rtlTranslate:a}=s;let d;s.allowSlidePrev=!0,s.allowSlideNext=!0;const c=-r[e]-s.getTranslate();e<i?(d=t.length-i*3+e,d+=i,s.slideTo(d,0,!1,!0)&&c!==0&&s.setTranslate((a?-s.translate:s.translate)-c)):e>=t.length-i&&(d=-t.length+e+i,d+=i,s.slideTo(d,0,!1,!0)&&c!==0&&s.setTranslate((a?-s.translate:s.translate)-c)),s.allowSlidePrev=l,s.allowSlideNext=n,s.emit("loopFix")}function ir(){const s=this,{$wrapperEl:e,params:t,slides:i}=s;e.children(`.${t.slideClass}.${t.slideDuplicateClass},.${t.slideClass}.${t.slideBlankClass}`).remove(),i.removeAttr("data-swiper-slide-index")}var rr={loopCreate:sr,loopFix:tr,loopDestroy:ir};function nr(s){const e=this;if(e.support.touch||!e.params.simulateTouch||e.params.watchOverflow&&e.isLocked||e.params.cssMode)return;const t=e.params.touchEventsTarget==="container"?e.el:e.wrapperEl;t.style.cursor="move",t.style.cursor=s?"-webkit-grabbing":"-webkit-grab",t.style.cursor=s?"-moz-grabbin":"-moz-grab",t.style.cursor=s?"grabbing":"grab"}function lr(){const s=this;s.support.touch||s.params.watchOverflow&&s.isLocked||s.params.cssMode||(s[s.params.touchEventsTarget==="container"?"el":"wrapperEl"].style.cursor="")}var ar={setGrabCursor:nr,unsetGrabCursor:lr};function or(s,e){e===void 0&&(e=this);function t(i){return!i||i===te()||i===Q()?null:(i.assignedSlot&&(i=i.assignedSlot),i.closest(s)||t(i.getRootNode().host))}return t(e)}function dr(s){const e=this,t=te(),i=Q(),l=e.touchEventsData,{params:n,touches:r,enabled:a}=e;if(!a||e.animating&&n.preventInteractionOnTransition)return;!e.animating&&n.cssMode&&n.loop&&e.loopFix();let d=s;d.originalEvent&&(d=d.originalEvent);let u=O(d.target);if(n.touchEventsTarget==="wrapper"&&!u.closest(e.wrapperEl).length||(l.isTouchEvent=d.type==="touchstart",!l.isTouchEvent&&"which"in d&&d.which===3)||!l.isTouchEvent&&"button"in d&&d.button>0||l.isTouched&&l.isMoved)return;!!n.noSwipingClass&&n.noSwipingClass!==""&&d.target&&d.target.shadowRoot&&s.path&&s.path[0]&&(u=O(s.path[0]));const p=n.noSwipingSelector?n.noSwipingSelector:`.${n.noSwipingClass}`,o=!!(d.target&&d.target.shadowRoot);if(n.noSwiping&&(o?or(p,d.target):u.closest(p)[0])){e.allowClick=!0;return}if(n.swipeHandler&&!u.closest(n.swipeHandler)[0])return;r.currentX=d.type==="touchstart"?d.targetTouches[0].pageX:d.pageX,r.currentY=d.type==="touchstart"?d.targetTouches[0].pageY:d.pageY;const w=r.currentX,h=r.currentY,_=n.edgeSwipeDetection||n.iOSEdgeSwipeDetection,b=n.edgeSwipeThreshold||n.iOSEdgeSwipeThreshold;if(_&&(w<=b||w>=i.innerWidth-b))if(_==="prevent")s.preventDefault();else return;if(Object.assign(l,{isTouched:!0,isMoved:!1,allowTouchCallbacks:!0,isScrolling:void 0,startMoving:void 0}),r.startX=w,r.startY=h,l.touchStartTime=de(),e.allowClick=!0,e.updateSize(),e.swipeDirection=void 0,n.threshold>0&&(l.allowThresholdMove=!1),d.type!=="touchstart"){let S=!0;u.is(l.focusableElements)&&(S=!1,u[0].nodeName==="SELECT"&&(l.isTouched=!1)),t.activeElement&&O(t.activeElement).is(l.focusableElements)&&t.activeElement!==u[0]&&t.activeElement.blur();const y=S&&e.allowTouchMove&&n.touchStartPreventDefault;(n.touchStartForcePreventDefault||y)&&!u[0].isContentEditable&&d.preventDefault()}e.params.freeMode&&e.params.freeMode.enabled&&e.freeMode&&e.animating&&!n.cssMode&&e.freeMode.onTouchStart(),e.emit("touchStart",d)}function pr(s){const e=te(),t=this,i=t.touchEventsData,{params:l,touches:n,rtlTranslate:r,enabled:a}=t;if(!a)return;let d=s;if(d.originalEvent&&(d=d.originalEvent),!i.isTouched){i.startMoving&&i.isScrolling&&t.emit("touchMoveOpposite",d);return}if(i.isTouchEvent&&d.type!=="touchmove")return;const u=d.type==="touchmove"&&d.targetTouches&&(d.targetTouches[0]||d.changedTouches[0]),c=d.type==="touchmove"?u.pageX:d.pageX,p=d.type==="touchmove"?u.pageY:d.pageY;if(d.preventedByNestedSwiper){n.startX=c,n.startY=p;return}if(!t.allowTouchMove){O(d.target).is(i.focusableElements)||(t.allowClick=!1),i.isTouched&&(Object.assign(n,{startX:c,startY:p,currentX:c,currentY:p}),i.touchStartTime=de());return}if(i.isTouchEvent&&l.touchReleaseOnEdges&&!l.loop){if(t.isVertical()){if(p<n.startY&&t.translate<=t.maxTranslate()||p>n.startY&&t.translate>=t.minTranslate()){i.isTouched=!1,i.isMoved=!1;return}}else if(c<n.startX&&t.translate<=t.maxTranslate()||c>n.startX&&t.translate>=t.minTranslate())return}if(i.isTouchEvent&&e.activeElement&&d.target===e.activeElement&&O(d.target).is(i.focusableElements)){i.isMoved=!0,t.allowClick=!1;return}if(i.allowTouchCallbacks&&t.emit("touchMove",d),d.targetTouches&&d.targetTouches.length>1)return;n.currentX=c,n.currentY=p;const o=n.currentX-n.startX,w=n.currentY-n.startY;if(t.params.threshold&&Math.sqrt(o**2+w**2)<t.params.threshold)return;if(typeof i.isScrolling=="undefined"){let S;t.isHorizontal()&&n.currentY===n.startY||t.isVertical()&&n.currentX===n.startX?i.isScrolling=!1:o*o+w*w>=25&&(S=Math.atan2(Math.abs(w),Math.abs(o))*180/Math.PI,i.isScrolling=t.isHorizontal()?S>l.touchAngle:90-S>l.touchAngle)}if(i.isScrolling&&t.emit("touchMoveOpposite",d),typeof i.startMoving=="undefined"&&(n.currentX!==n.startX||n.currentY!==n.startY)&&(i.startMoving=!0),i.isScrolling){i.isTouched=!1;return}if(!i.startMoving)return;t.allowClick=!1,!l.cssMode&&d.cancelable&&d.preventDefault(),l.touchMoveStopPropagation&&!l.nested&&d.stopPropagation(),i.isMoved||(l.loop&&!l.cssMode&&t.loopFix(),i.startTranslate=t.getTranslate(),t.setTransition(0),t.animating&&t.$wrapperEl.trigger("webkitTransitionEnd transitionend"),i.allowMomentumBounce=!1,l.grabCursor&&(t.allowSlideNext===!0||t.allowSlidePrev===!0)&&t.setGrabCursor(!0),t.emit("sliderFirstMove",d)),t.emit("sliderMove",d),i.isMoved=!0;let h=t.isHorizontal()?o:w;n.diff=h,h*=l.touchRatio,r&&(h=-h),t.swipeDirection=h>0?"prev":"next",i.currentTranslate=h+i.startTranslate;let _=!0,b=l.resistanceRatio;if(l.touchReleaseOnEdges&&(b=0),h>0&&i.currentTranslate>t.minTranslate()?(_=!1,l.resistance&&(i.currentTranslate=t.minTranslate()-1+(-t.minTranslate()+i.startTranslate+h)**b)):h<0&&i.currentTranslate<t.maxTranslate()&&(_=!1,l.resistance&&(i.currentTranslate=t.maxTranslate()+1-(t.maxTranslate()-i.startTranslate-h)**b)),_&&(d.preventedByNestedSwiper=!0),!t.allowSlideNext&&t.swipeDirection==="next"&&i.currentTranslate<i.startTranslate&&(i.currentTranslate=i.startTranslate),!t.allowSlidePrev&&t.swipeDirection==="prev"&&i.currentTranslate>i.startTranslate&&(i.currentTranslate=i.startTranslate),!t.allowSlidePrev&&!t.allowSlideNext&&(i.currentTranslate=i.startTranslate),l.threshold>0)if(Math.abs(h)>l.threshold||i.allowThresholdMove){if(!i.allowThresholdMove){i.allowThresholdMove=!0,n.startX=n.currentX,n.startY=n.currentY,i.currentTranslate=i.startTranslate,n.diff=t.isHorizontal()?n.currentX-n.startX:n.currentY-n.startY;return}}else{i.currentTranslate=i.startTranslate;return}!l.followFinger||l.cssMode||((l.freeMode&&l.freeMode.enabled&&t.freeMode||l.watchSlidesProgress)&&(t.updateActiveIndex(),t.updateSlidesClasses()),t.params.freeMode&&l.freeMode.enabled&&t.freeMode&&t.freeMode.onTouchMove(),t.updateProgress(i.currentTranslate),t.setTranslate(i.currentTranslate))}function cr(s){const e=this,t=e.touchEventsData,{params:i,touches:l,rtlTranslate:n,slidesGrid:r,enabled:a}=e;if(!a)return;let d=s;if(d.originalEvent&&(d=d.originalEvent),t.allowTouchCallbacks&&e.emit("touchEnd",d),t.allowTouchCallbacks=!1,!t.isTouched){t.isMoved&&i.grabCursor&&e.setGrabCursor(!1),t.isMoved=!1,t.startMoving=!1;return}i.grabCursor&&t.isMoved&&t.isTouched&&(e.allowSlideNext===!0||e.allowSlidePrev===!0)&&e.setGrabCursor(!1);const u=de(),c=u-t.touchStartTime;if(e.allowClick){const y=d.path||d.composedPath&&d.composedPath();e.updateClickedSlide(y&&y[0]||d.target),e.emit("tap click",d),c<300&&u-t.lastClickTime<300&&e.emit("doubleTap doubleClick",d)}if(t.lastClickTime=de(),xe(()=>{e.destroyed||(e.allowClick=!0)}),!t.isTouched||!t.isMoved||!e.swipeDirection||l.diff===0||t.currentTranslate===t.startTranslate){t.isTouched=!1,t.isMoved=!1,t.startMoving=!1;return}t.isTouched=!1,t.isMoved=!1,t.startMoving=!1;let p;if(i.followFinger?p=n?e.translate:-e.translate:p=-t.currentTranslate,i.cssMode)return;if(e.params.freeMode&&i.freeMode.enabled){e.freeMode.onTouchEnd({currentPos:p});return}let o=0,w=e.slidesSizesGrid[0];for(let y=0;y<r.length;y+=y<i.slidesPerGroupSkip?1:i.slidesPerGroup){const v=y<i.slidesPerGroupSkip-1?1:i.slidesPerGroup;typeof r[y+v]!="undefined"?p>=r[y]&&p<r[y+v]&&(o=y,w=r[y+v]-r[y]):p>=r[y]&&(o=y,w=r[r.length-1]-r[r.length-2])}let h=null,_=null;i.rewind&&(e.isBeginning?_=e.params.virtual&&e.params.virtual.enabled&&e.virtual?e.virtual.slides.length-1:e.slides.length-1:e.isEnd&&(h=0));const b=(p-r[o])/w,S=o<i.slidesPerGroupSkip-1?1:i.slidesPerGroup;if(c>i.longSwipesMs){if(!i.longSwipes){e.slideTo(e.activeIndex);return}e.swipeDirection==="next"&&(b>=i.longSwipesRatio?e.slideTo(i.rewind&&e.isEnd?h:o+S):e.slideTo(o)),e.swipeDirection==="prev"&&(b>1-i.longSwipesRatio?e.slideTo(o+S):_!==null&&b<0&&Math.abs(b)>i.longSwipesRatio?e.slideTo(_):e.slideTo(o))}else{if(!i.shortSwipes){e.slideTo(e.activeIndex);return}e.navigation&&(d.target===e.navigation.nextEl||d.target===e.navigation.prevEl)?d.target===e.navigation.nextEl?e.slideTo(o+S):e.slideTo(o):(e.swipeDirection==="next"&&e.slideTo(h!==null?h:o+S),e.swipeDirection==="prev"&&e.slideTo(_!==null?_:o))}}function vs(){const s=this,{params:e,el:t}=s;if(t&&t.offsetWidth===0)return;e.breakpoints&&s.setBreakpoint();const{allowSlideNext:i,allowSlidePrev:l,snapGrid:n}=s;s.allowSlideNext=!0,s.allowSlidePrev=!0,s.updateSize(),s.updateSlides(),s.updateSlidesClasses(),(e.slidesPerView==="auto"||e.slidesPerView>1)&&s.isEnd&&!s.isBeginning&&!s.params.centeredSlides?s.slideTo(s.slides.length-1,0,!1,!0):s.slideTo(s.activeIndex,0,!1,!0),s.autoplay&&s.autoplay.running&&s.autoplay.paused&&s.autoplay.run(),s.allowSlidePrev=l,s.allowSlideNext=i,s.params.watchOverflow&&n!==s.snapGrid&&s.checkOverflow()}function ur(s){const e=this;!e.enabled||e.allowClick||(e.params.preventClicks&&s.preventDefault(),e.params.preventClicksPropagation&&e.animating&&(s.stopPropagation(),s.stopImmediatePropagation()))}function fr(){const s=this,{wrapperEl:e,rtlTranslate:t,enabled:i}=s;if(!i)return;s.previousTranslate=s.translate,s.isHorizontal()?s.translate=-e.scrollLeft:s.translate=-e.scrollTop,s.translate===-0&&(s.translate=0),s.updateActiveIndex(),s.updateSlidesClasses();let l;const n=s.maxTranslate()-s.minTranslate();n===0?l=0:l=(s.translate-s.minTranslate())/n,l!==s.progress&&s.updateProgress(t?-s.translate:s.translate),s.emit("setTranslate",s.translate,!1)}let Ss=!1;function mr(){}const Ls=(s,e)=>{const t=te(),{params:i,touchEvents:l,el:n,wrapperEl:r,device:a,support:d}=s,u=!!i.nested,c=e==="on"?"addEventListener":"removeEventListener",p=e;if(!d.touch)n[c](l.start,s.onTouchStart,!1),t[c](l.move,s.onTouchMove,u),t[c](l.end,s.onTouchEnd,!1);else{const o=l.start==="touchstart"&&d.passiveListener&&i.passiveListeners?{passive:!0,capture:!1}:!1;n[c](l.start,s.onTouchStart,o),n[c](l.move,s.onTouchMove,d.passiveListener?{passive:!1,capture:u}:u),n[c](l.end,s.onTouchEnd,o),l.cancel&&n[c](l.cancel,s.onTouchEnd,o)}(i.preventClicks||i.preventClicksPropagation)&&n[c]("click",s.onClick,!0),i.cssMode&&r[c]("scroll",s.onScroll),i.updateOnWindowResize?s[p](a.ios||a.android?"resize orientationchange observerUpdate":"resize observerUpdate",vs,!0):s[p]("observerUpdate",vs,!0)};function hr(){const s=this,e=te(),{params:t,support:i}=s;s.onTouchStart=dr.bind(s),s.onTouchMove=pr.bind(s),s.onTouchEnd=cr.bind(s),t.cssMode&&(s.onScroll=fr.bind(s)),s.onClick=ur.bind(s),i.touch&&!Ss&&(e.addEventListener("touchstart",mr),Ss=!0),Ls(s,"on")}function wr(){Ls(this,"off")}var gr={attachEvents:hr,detachEvents:wr};const bs=(s,e)=>s.grid&&e.grid&&e.grid.rows>1;function _r(){const s=this,{activeIndex:e,initialized:t,loopedSlides:i=0,params:l,$el:n}=s,r=l.breakpoints;if(!r||r&&Object.keys(r).length===0)return;const a=s.getBreakpoint(r,s.params.breakpointsBase,s.el);if(!a||s.currentBreakpoint===a)return;const u=(a in r?r[a]:void 0)||s.originalParams,c=bs(s,l),p=bs(s,u),o=l.enabled;c&&!p?(n.removeClass(`${l.containerModifierClass}grid ${l.containerModifierClass}grid-column`),s.emitContainerClasses()):!c&&p&&(n.addClass(`${l.containerModifierClass}grid`),(u.grid.fill&&u.grid.fill==="column"||!u.grid.fill&&l.grid.fill==="column")&&n.addClass(`${l.containerModifierClass}grid-column`),s.emitContainerClasses());const w=u.direction&&u.direction!==l.direction,h=l.loop&&(u.slidesPerView!==l.slidesPerView||w);w&&t&&s.changeDirection(),oe(s.params,u);const _=s.params.enabled;Object.assign(s,{allowTouchMove:s.params.allowTouchMove,allowSlideNext:s.params.allowSlideNext,allowSlidePrev:s.params.allowSlidePrev}),o&&!_?s.disable():!o&&_&&s.enable(),s.currentBreakpoint=a,s.emit("_beforeBreakpoint",u),h&&t&&(s.loopDestroy(),s.loopCreate(),s.updateSlides(),s.slideTo(e-i+s.loopedSlides,0,!1)),s.emit("breakpoint",u)}function vr(s,e,t){if(e===void 0&&(e="window"),!s||e==="container"&&!t)return;let i=!1;const l=Q(),n=e==="window"?l.innerHeight:t.clientHeight,r=Object.keys(s).map(a=>{if(typeof a=="string"&&a.indexOf("@")===0){const d=parseFloat(a.substr(1));return{value:n*d,point:a}}return{value:a,point:a}});r.sort((a,d)=>parseInt(a.value,10)-parseInt(d.value,10));for(let a=0;a<r.length;a+=1){const{point:d,value:u}=r[a];e==="window"?l.matchMedia(`(min-width: ${u}px)`).matches&&(i=d):u<=t.clientWidth&&(i=d)}return i||"max"}var Sr={setBreakpoint:_r,getBreakpoint:vr};function br(s,e){const t=[];return s.forEach(i=>{typeof i=="object"?Object.keys(i).forEach(l=>{i[l]&&t.push(e+l)}):typeof i=="string"&&t.push(e+i)}),t}function yr(){const s=this,{classNames:e,params:t,rtl:i,$el:l,device:n,support:r}=s,a=br(["initialized",t.direction,{"pointer-events":!r.touch},{"free-mode":s.params.freeMode&&t.freeMode.enabled},{autoheight:t.autoHeight},{rtl:i},{grid:t.grid&&t.grid.rows>1},{"grid-column":t.grid&&t.grid.rows>1&&t.grid.fill==="column"},{android:n.android},{ios:n.ios},{"css-mode":t.cssMode},{centered:t.cssMode&&t.centeredSlides}],t.containerModifierClass);e.push(...a),l.addClass([...e].join(" ")),s.emitContainerClasses()}function $r(){const s=this,{$el:e,classNames:t}=s;e.removeClass(t.join(" ")),s.emitContainerClasses()}var xr={addClasses:yr,removeClasses:$r};function Cr(s,e,t,i,l,n){const r=Q();let a;function d(){n&&n()}!O(s).parent("picture")[0]&&(!s.complete||!l)&&e?(a=new r.Image,a.onload=d,a.onerror=d,i&&(a.sizes=i),t&&(a.srcset=t),e&&(a.src=e)):d()}function Er(){const s=this;s.imagesToLoad=s.$el.find("img");function e(){typeof s=="undefined"||s===null||!s||s.destroyed||(s.imagesLoaded!==void 0&&(s.imagesLoaded+=1),s.imagesLoaded===s.imagesToLoad.length&&(s.params.updateOnImagesReady&&s.update(),s.emit("imagesReady")))}for(let t=0;t<s.imagesToLoad.length;t+=1){const i=s.imagesToLoad[t];s.loadImage(i,i.currentSrc||i.getAttribute("src"),i.srcset||i.getAttribute("srcset"),i.sizes||i.getAttribute("sizes"),!0,e)}}var Tr={loadImage:Cr,preloadImages:Er};function kr(){const s=this,{isLocked:e,params:t}=s,{slidesOffsetBefore:i}=t;if(i){const l=s.slides.length-1,n=s.slidesGrid[l]+s.slidesSizesGrid[l]+i*2;s.isLocked=s.size>n}else s.isLocked=s.snapGrid.length===1;t.allowSlideNext===!0&&(s.allowSlideNext=!s.isLocked),t.allowSlidePrev===!0&&(s.allowSlidePrev=!s.isLocked),e&&e!==s.isLocked&&(s.isEnd=!1),e!==s.isLocked&&s.emit(s.isLocked?"lock":"unlock")}var Pr={checkOverflow:kr},ys={init:!0,direction:"horizontal",touchEventsTarget:"wrapper",initialSlide:0,speed:300,cssMode:!1,updateOnWindowResize:!0,resizeObserver:!0,nested:!1,createElements:!1,enabled:!0,focusableElements:"input, select, option, textarea, button, video, label",width:null,height:null,preventInteractionOnTransition:!1,userAgent:null,url:null,edgeSwipeDetection:!1,edgeSwipeThreshold:20,autoHeight:!1,setWrapperSize:!1,virtualTranslate:!1,effect:"slide",breakpoints:void 0,breakpointsBase:"window",spaceBetween:0,slidesPerView:1,slidesPerGroup:1,slidesPerGroupSkip:0,slidesPerGroupAuto:!1,centeredSlides:!1,centeredSlidesBounds:!1,slidesOffsetBefore:0,slidesOffsetAfter:0,normalizeSlideIndex:!0,centerInsufficientSlides:!1,watchOverflow:!0,roundLengths:!1,touchRatio:1,touchAngle:45,simulateTouch:!0,shortSwipes:!0,longSwipes:!0,longSwipesRatio:.5,longSwipesMs:300,followFinger:!0,allowTouchMove:!0,threshold:0,touchMoveStopPropagation:!1,touchStartPreventDefault:!0,touchStartForcePreventDefault:!1,touchReleaseOnEdges:!1,uniqueNavElements:!0,resistance:!0,resistanceRatio:.85,watchSlidesProgress:!1,grabCursor:!1,preventClicks:!0,preventClicksPropagation:!0,slideToClickedSlide:!1,preloadImages:!0,updateOnImagesReady:!0,loop:!1,loopAdditionalSlides:0,loopedSlides:null,loopFillGroupWithBlank:!1,loopPreventsSlide:!0,rewind:!1,allowSlidePrev:!0,allowSlideNext:!0,swipeHandler:null,noSwiping:!0,noSwipingClass:"swiper-no-swiping",noSwipingSelector:null,passiveListeners:!0,maxBackfaceHiddenSlides:10,containerModifierClass:"swiper-",slideClass:"swiper-slide",slideBlankClass:"swiper-slide-invisible-blank",slideActiveClass:"swiper-slide-active",slideDuplicateActiveClass:"swiper-slide-duplicate-active",slideVisibleClass:"swiper-slide-visible",slideDuplicateClass:"swiper-slide-duplicate",slideNextClass:"swiper-slide-next",slideDuplicateNextClass:"swiper-slide-duplicate-next",slidePrevClass:"swiper-slide-prev",slideDuplicatePrevClass:"swiper-slide-duplicate-prev",wrapperClass:"swiper-wrapper",runCallbacksOnInit:!0,_emitClasses:!1};function Mr(s,e){return function(i){i===void 0&&(i={});const l=Object.keys(i)[0],n=i[l];if(typeof n!="object"||n===null){oe(e,i);return}if(["navigation","pagination","scrollbar"].indexOf(l)>=0&&s[l]===!0&&(s[l]={auto:!0}),!(l in s&&"enabled"in n)){oe(e,i);return}s[l]===!0&&(s[l]={enabled:!0}),typeof s[l]=="object"&&!("enabled"in s[l])&&(s[l].enabled=!0),s[l]||(s[l]={enabled:!1}),oe(e,i)}}const Je={eventsEmitter:Ei,update:Ni,translate:Hi,transition:qi,slide:er,loop:rr,grabCursor:ar,events:gr,breakpoints:Sr,checkOverflow:Pr,classes:xr,images:Tr},Qe={};class ae{constructor(){let e,t;for(var i=arguments.length,l=new Array(i),n=0;n<i;n++)l[n]=arguments[n];if(l.length===1&&l[0].constructor&&Object.prototype.toString.call(l[0]).slice(8,-1)==="Object"?t=l[0]:[e,t]=l,t||(t={}),t=oe({},t),e&&!t.el&&(t.el=e),t.el&&O(t.el).length>1){const u=[];return O(t.el).each(c=>{const p=oe({},t,{el:c});u.push(new ae(p))}),u}const r=this;r.__swiper__=!0,r.support=Os(),r.device=bi({userAgent:t.userAgent}),r.browser=$i(),r.eventsListeners={},r.eventsAnyListeners=[],r.modules=[...r.__modules__],t.modules&&Array.isArray(t.modules)&&r.modules.push(...t.modules);const a={};r.modules.forEach(u=>{u({swiper:r,extendParams:Mr(t,a),on:r.on.bind(r),once:r.once.bind(r),off:r.off.bind(r),emit:r.emit.bind(r)})});const d=oe({},ys,a);return r.params=oe({},d,Qe,t),r.originalParams=oe({},r.params),r.passedParams=oe({},t),r.params&&r.params.on&&Object.keys(r.params.on).forEach(u=>{r.on(u,r.params.on[u])}),r.params&&r.params.onAny&&r.onAny(r.params.onAny),r.$=O,Object.assign(r,{enabled:r.params.enabled,el:e,classNames:[],slides:O(),slidesGrid:[],snapGrid:[],slidesSizesGrid:[],isHorizontal(){return r.params.direction==="horizontal"},isVertical(){return r.params.direction==="vertical"},activeIndex:0,realIndex:0,isBeginning:!0,isEnd:!1,translate:0,previousTranslate:0,progress:0,velocity:0,animating:!1,allowSlideNext:r.params.allowSlideNext,allowSlidePrev:r.params.allowSlidePrev,touchEvents:function(){const c=["touchstart","touchmove","touchend","touchcancel"],p=["pointerdown","pointermove","pointerup"];return r.touchEventsTouch={start:c[0],move:c[1],end:c[2],cancel:c[3]},r.touchEventsDesktop={start:p[0],move:p[1],end:p[2]},r.support.touch||!r.params.simulateTouch?r.touchEventsTouch:r.touchEventsDesktop}(),touchEventsData:{isTouched:void 0,isMoved:void 0,allowTouchCallbacks:void 0,touchStartTime:void 0,isScrolling:void 0,currentTranslate:void 0,startTranslate:void 0,allowThresholdMove:void 0,focusableElements:r.params.focusableElements,lastClickTime:de(),clickTimeout:void 0,velocities:[],allowMomentumBounce:void 0,isTouchEvent:void 0,startMoving:void 0},allowClick:!0,allowTouchMove:r.params.allowTouchMove,touches:{startX:0,startY:0,currentX:0,currentY:0,diff:0},imagesToLoad:[],imagesLoaded:0}),r.emit("_swiper"),r.params.init&&r.init(),r}enable(){const e=this;e.enabled||(e.enabled=!0,e.params.grabCursor&&e.setGrabCursor(),e.emit("enable"))}disable(){const e=this;!e.enabled||(e.enabled=!1,e.params.grabCursor&&e.unsetGrabCursor(),e.emit("disable"))}setProgress(e,t){const i=this;e=Math.min(Math.max(e,0),1);const l=i.minTranslate(),r=(i.maxTranslate()-l)*e+l;i.translateTo(r,typeof t=="undefined"?0:t),i.updateActiveIndex(),i.updateSlidesClasses()}emitContainerClasses(){const e=this;if(!e.params._emitClasses||!e.el)return;const t=e.el.className.split(" ").filter(i=>i.indexOf("swiper")===0||i.indexOf(e.params.containerModifierClass)===0);e.emit("_containerClasses",t.join(" "))}getSlideClasses(e){const t=this;return e.className.split(" ").filter(i=>i.indexOf("swiper-slide")===0||i.indexOf(t.params.slideClass)===0).join(" ")}emitSlidesClasses(){const e=this;if(!e.params._emitClasses||!e.el)return;const t=[];e.slides.each(i=>{const l=e.getSlideClasses(i);t.push({slideEl:i,classNames:l}),e.emit("_slideClass",i,l)}),e.emit("_slideClasses",t)}slidesPerViewDynamic(e,t){e===void 0&&(e="current"),t===void 0&&(t=!1);const i=this,{params:l,slides:n,slidesGrid:r,slidesSizesGrid:a,size:d,activeIndex:u}=i;let c=1;if(l.centeredSlides){let p=n[u].swiperSlideSize,o;for(let w=u+1;w<n.length;w+=1)n[w]&&!o&&(p+=n[w].swiperSlideSize,c+=1,p>d&&(o=!0));for(let w=u-1;w>=0;w-=1)n[w]&&!o&&(p+=n[w].swiperSlideSize,c+=1,p>d&&(o=!0))}else if(e==="current")for(let p=u+1;p<n.length;p+=1)(t?r[p]+a[p]-r[u]<d:r[p]-r[u]<d)&&(c+=1);else for(let p=u-1;p>=0;p-=1)r[u]-r[p]<d&&(c+=1);return c}update(){const e=this;if(!e||e.destroyed)return;const{snapGrid:t,params:i}=e;i.breakpoints&&e.setBreakpoint(),e.updateSize(),e.updateSlides(),e.updateProgress(),e.updateSlidesClasses();function l(){const r=e.rtlTranslate?e.translate*-1:e.translate,a=Math.min(Math.max(r,e.maxTranslate()),e.minTranslate());e.setTranslate(a),e.updateActiveIndex(),e.updateSlidesClasses()}let n;e.params.freeMode&&e.params.freeMode.enabled?(l(),e.params.autoHeight&&e.updateAutoHeight()):((e.params.slidesPerView==="auto"||e.params.slidesPerView>1)&&e.isEnd&&!e.params.centeredSlides?n=e.slideTo(e.slides.length-1,0,!1,!0):n=e.slideTo(e.activeIndex,0,!1,!0),n||l()),i.watchOverflow&&t!==e.snapGrid&&e.checkOverflow(),e.emit("update")}changeDirection(e,t){t===void 0&&(t=!0);const i=this,l=i.params.direction;return e||(e=l==="horizontal"?"vertical":"horizontal"),e===l||e!=="horizontal"&&e!=="vertical"||(i.$el.removeClass(`${i.params.containerModifierClass}${l}`).addClass(`${i.params.containerModifierClass}${e}`),i.emitContainerClasses(),i.params.direction=e,i.slides.each(n=>{e==="vertical"?n.style.width="":n.style.height=""}),i.emit("changeDirection"),t&&i.update()),i}mount(e){const t=this;if(t.mounted)return!0;const i=O(e||t.params.el);if(e=i[0],!e)return!1;e.swiper=t;const l=()=>`.${(t.params.wrapperClass||"").trim().split(" ").join(".")}`;let r=(()=>{if(e&&e.shadowRoot&&e.shadowRoot.querySelector){const a=O(e.shadowRoot.querySelector(l()));return a.children=d=>i.children(d),a}return i.children(l())})();if(r.length===0&&t.params.createElements){const d=te().createElement("div");r=O(d),d.className=t.params.wrapperClass,i.append(d),i.children(`.${t.params.slideClass}`).each(u=>{r.append(u)})}return Object.assign(t,{$el:i,el:e,$wrapperEl:r,wrapperEl:r[0],mounted:!0,rtl:e.dir.toLowerCase()==="rtl"||i.css("direction")==="rtl",rtlTranslate:t.params.direction==="horizontal"&&(e.dir.toLowerCase()==="rtl"||i.css("direction")==="rtl"),wrongRTL:r.css("display")==="-webkit-box"}),!0}init(e){const t=this;return t.initialized||t.mount(e)===!1||(t.emit("beforeInit"),t.params.breakpoints&&t.setBreakpoint(),t.addClasses(),t.params.loop&&t.loopCreate(),t.updateSize(),t.updateSlides(),t.params.watchOverflow&&t.checkOverflow(),t.params.grabCursor&&t.enabled&&t.setGrabCursor(),t.params.preloadImages&&t.preloadImages(),t.params.loop?t.slideTo(t.params.initialSlide+t.loopedSlides,0,t.params.runCallbacksOnInit,!1,!0):t.slideTo(t.params.initialSlide,0,t.params.runCallbacksOnInit,!1,!0),t.attachEvents(),t.initialized=!0,t.emit("init"),t.emit("afterInit")),t}destroy(e,t){e===void 0&&(e=!0),t===void 0&&(t=!0);const i=this,{params:l,$el:n,$wrapperEl:r,slides:a}=i;return typeof i.params=="undefined"||i.destroyed||(i.emit("beforeDestroy"),i.initialized=!1,i.detachEvents(),l.loop&&i.loopDestroy(),t&&(i.removeClasses(),n.removeAttr("style"),r.removeAttr("style"),a&&a.length&&a.removeClass([l.slideVisibleClass,l.slideActiveClass,l.slideNextClass,l.slidePrevClass].join(" ")).removeAttr("style").removeAttr("data-swiper-slide-index")),i.emit("destroy"),Object.keys(i.eventsListeners).forEach(d=>{i.off(d)}),e!==!1&&(i.$el[0].swiper=null,wi(i)),i.destroyed=!0),null}static extendDefaults(e){oe(Qe,e)}static get extendedDefaults(){return Qe}static get defaults(){return ys}static installModule(e){ae.prototype.__modules__||(ae.prototype.__modules__=[]);const t=ae.prototype.__modules__;typeof e=="function"&&t.indexOf(e)<0&&t.push(e)}static use(e){return Array.isArray(e)?(e.forEach(t=>ae.installModule(t)),ae):(ae.installModule(e),ae)}}Object.keys(Je).forEach(s=>{Object.keys(Je[s]).forEach(e=>{ae.prototype[e]=Je[s][e]})});ae.use([xi,Ci]);function zr(s){let{swiper:e,extendParams:t,on:i,emit:l}=s;t({virtual:{enabled:!1,slides:[],cache:!0,renderSlide:null,renderExternal:null,renderExternalUpdate:!0,addSlidesBefore:0,addSlidesAfter:0}});let n;e.virtual={cache:{},from:void 0,to:void 0,slides:[],offset:0,slidesGrid:[]};function r(o,w){const h=e.params.virtual;if(h.cache&&e.virtual.cache[w])return e.virtual.cache[w];const _=h.renderSlide?O(h.renderSlide.call(e,o,w)):O(`<div class="${e.params.slideClass}" data-swiper-slide-index="${w}">${o}</div>`);return _.attr("data-swiper-slide-index")||_.attr("data-swiper-slide-index",w),h.cache&&(e.virtual.cache[w]=_),_}function a(o){const{slidesPerView:w,slidesPerGroup:h,centeredSlides:_}=e.params,{addSlidesBefore:b,addSlidesAfter:S}=e.params.virtual,{from:y,to:v,slides:$,slidesGrid:A,offset:k}=e.virtual;e.params.cssMode||e.updateActiveIndex();const L=e.activeIndex||0;let T;e.rtlTranslate?T="right":T=e.isHorizontal()?"left":"top";let B,x;_?(B=Math.floor(w/2)+h+S,x=Math.floor(w/2)+h+b):(B=w+(h-1)+S,x=h+b);const z=Math.max((L||0)-x,0),M=Math.min((L||0)+B,$.length-1),N=(e.slidesGrid[z]||0)-(e.slidesGrid[0]||0);Object.assign(e.virtual,{from:z,to:M,offset:N,slidesGrid:e.slidesGrid});function j(){e.updateSlides(),e.updateProgress(),e.updateSlidesClasses(),e.lazy&&e.params.lazy.enabled&&e.lazy.load(),l("virtualUpdate")}if(y===z&&v===M&&!o){e.slidesGrid!==A&&N!==k&&e.slides.css(T,`${N}px`),e.updateProgress(),l("virtualUpdate");return}if(e.params.virtual.renderExternal){e.params.virtual.renderExternal.call(e,{offset:N,from:z,to:M,slides:function(){const D=[];for(let H=z;H<=M;H+=1)D.push($[H]);return D}()}),e.params.virtual.renderExternalUpdate?j():l("virtualUpdate");return}const U=[],J=[];if(o)e.$wrapperEl.find(`.${e.params.slideClass}`).remove();else for(let C=y;C<=v;C+=1)(C<z||C>M)&&e.$wrapperEl.find(`.${e.params.slideClass}[data-swiper-slide-index="${C}"]`).remove();for(let C=0;C<$.length;C+=1)C>=z&&C<=M&&(typeof v=="undefined"||o?J.push(C):(C>v&&J.push(C),C<y&&U.push(C)));J.forEach(C=>{e.$wrapperEl.append(r($[C],C))}),U.sort((C,D)=>D-C).forEach(C=>{e.$wrapperEl.prepend(r($[C],C))}),e.$wrapperEl.children(".swiper-slide").css(T,`${N}px`),j()}function d(o){if(typeof o=="object"&&"length"in o)for(let w=0;w<o.length;w+=1)o[w]&&e.virtual.slides.push(o[w]);else e.virtual.slides.push(o);a(!0)}function u(o){const w=e.activeIndex;let h=w+1,_=1;if(Array.isArray(o)){for(let b=0;b<o.length;b+=1)o[b]&&e.virtual.slides.unshift(o[b]);h=w+o.length,_=o.length}else e.virtual.slides.unshift(o);if(e.params.virtual.cache){const b=e.virtual.cache,S={};Object.keys(b).forEach(y=>{const v=b[y],$=v.attr("data-swiper-slide-index");$&&v.attr("data-swiper-slide-index",parseInt($,10)+_),S[parseInt(y,10)+_]=v}),e.virtual.cache=S}a(!0),e.slideTo(h,0)}function c(o){if(typeof o=="undefined"||o===null)return;let w=e.activeIndex;if(Array.isArray(o))for(let h=o.length-1;h>=0;h-=1)e.virtual.slides.splice(o[h],1),e.params.virtual.cache&&delete e.virtual.cache[o[h]],o[h]<w&&(w-=1),w=Math.max(w,0);else e.virtual.slides.splice(o,1),e.params.virtual.cache&&delete e.virtual.cache[o],o<w&&(w-=1),w=Math.max(w,0);a(!0),e.slideTo(w,0)}function p(){e.virtual.slides=[],e.params.virtual.cache&&(e.virtual.cache={}),a(!0),e.slideTo(0,0)}i("beforeInit",()=>{!e.params.virtual.enabled||(e.virtual.slides=e.params.virtual.slides,e.classNames.push(`${e.params.containerModifierClass}virtual`),e.params.watchSlidesProgress=!0,e.originalParams.watchSlidesProgress=!0,e.params.initialSlide||a())}),i("setTranslate",()=>{!e.params.virtual.enabled||(e.params.cssMode&&!e._immediateVirtual?(clearTimeout(n),n=setTimeout(()=>{a()},100)):a())}),i("init update resize",()=>{!e.params.virtual.enabled||e.params.cssMode&&Me(e.wrapperEl,"--swiper-virtual-size",`${e.virtualSize}px`)}),Object.assign(e.virtual,{appendSlide:d,prependSlide:u,removeSlide:c,removeAllSlides:p,update:a})}function Ns(s){let{swiper:e,extendParams:t,on:i,emit:l}=s;const n=te(),r=Q();e.keyboard={enabled:!1},t({keyboard:{enabled:!1,onlyInViewport:!0,pageUpDown:!0}});function a(c){if(!e.enabled)return;const{rtlTranslate:p}=e;let o=c;o.originalEvent&&(o=o.originalEvent);const w=o.keyCode||o.charCode,h=e.params.keyboard.pageUpDown,_=h&&w===33,b=h&&w===34,S=w===37,y=w===39,v=w===38,$=w===40;if(!e.allowSlideNext&&(e.isHorizontal()&&y||e.isVertical()&&$||b)||!e.allowSlidePrev&&(e.isHorizontal()&&S||e.isVertical()&&v||_))return!1;if(!(o.shiftKey||o.altKey||o.ctrlKey||o.metaKey)&&!(n.activeElement&&n.activeElement.nodeName&&(n.activeElement.nodeName.toLowerCase()==="input"||n.activeElement.nodeName.toLowerCase()==="textarea"))){if(e.params.keyboard.onlyInViewport&&(_||b||S||y||v||$)){let A=!1;if(e.$el.parents(`.${e.params.slideClass}`).length>0&&e.$el.parents(`.${e.params.slideActiveClass}`).length===0)return;const k=e.$el,L=k[0].clientWidth,T=k[0].clientHeight,B=r.innerWidth,x=r.innerHeight,z=e.$el.offset();p&&(z.left-=e.$el[0].scrollLeft);const M=[[z.left,z.top],[z.left+L,z.top],[z.left,z.top+T],[z.left+L,z.top+T]];for(let N=0;N<M.length;N+=1){const j=M[N];if(j[0]>=0&&j[0]<=B&&j[1]>=0&&j[1]<=x){if(j[0]===0&&j[1]===0)continue;A=!0}}if(!A)return}e.isHorizontal()?((_||b||S||y)&&(o.preventDefault?o.preventDefault():o.returnValue=!1),((b||y)&&!p||(_||S)&&p)&&e.slideNext(),((_||S)&&!p||(b||y)&&p)&&e.slidePrev()):((_||b||v||$)&&(o.preventDefault?o.preventDefault():o.returnValue=!1),(b||$)&&e.slideNext(),(_||v)&&e.slidePrev()),l("keyPress",w)}}function d(){e.keyboard.enabled||(O(n).on("keydown",a),e.keyboard.enabled=!0)}function u(){!e.keyboard.enabled||(O(n).off("keydown",a),e.keyboard.enabled=!1)}i("init",()=>{e.params.keyboard.enabled&&d()}),i("destroy",()=>{e.keyboard.enabled&&u()}),Object.assign(e.keyboard,{enable:d,disable:u})}function He(s){let{swiper:e,extendParams:t,on:i,emit:l}=s;const n=Q();t({mousewheel:{enabled:!1,releaseOnEdges:!1,invert:!1,forceToAxis:!1,sensitivity:1,eventsTarget:"container",thresholdDelta:null,thresholdTime:null}}),e.mousewheel={enabled:!1};let r,a=de(),d;const u=[];function c(v){let L=0,T=0,B=0,x=0;return"detail"in v&&(T=v.detail),"wheelDelta"in v&&(T=-v.wheelDelta/120),"wheelDeltaY"in v&&(T=-v.wheelDeltaY/120),"wheelDeltaX"in v&&(L=-v.wheelDeltaX/120),"axis"in v&&v.axis===v.HORIZONTAL_AXIS&&(L=T,T=0),B=L*10,x=T*10,"deltaY"in v&&(x=v.deltaY),"deltaX"in v&&(B=v.deltaX),v.shiftKey&&!B&&(B=x,x=0),(B||x)&&v.deltaMode&&(v.deltaMode===1?(B*=40,x*=40):(B*=800,x*=800)),B&&!L&&(L=B<1?-1:1),x&&!T&&(T=x<1?-1:1),{spinX:L,spinY:T,pixelX:B,pixelY:x}}function p(){!e.enabled||(e.mouseEntered=!0)}function o(){!e.enabled||(e.mouseEntered=!1)}function w(v){return e.params.mousewheel.thresholdDelta&&v.delta<e.params.mousewheel.thresholdDelta||e.params.mousewheel.thresholdTime&&de()-a<e.params.mousewheel.thresholdTime?!1:v.delta>=6&&de()-a<60?!0:(v.direction<0?(!e.isEnd||e.params.loop)&&!e.animating&&(e.slideNext(),l("scroll",v.raw)):(!e.isBeginning||e.params.loop)&&!e.animating&&(e.slidePrev(),l("scroll",v.raw)),a=new n.Date().getTime(),!1)}function h(v){const $=e.params.mousewheel;if(v.direction<0){if(e.isEnd&&!e.params.loop&&$.releaseOnEdges)return!0}else if(e.isBeginning&&!e.params.loop&&$.releaseOnEdges)return!0;return!1}function _(v){let $=v,A=!0;if(!e.enabled)return;const k=e.params.mousewheel;e.params.cssMode&&$.preventDefault();let L=e.$el;if(e.params.mousewheel.eventsTarget!=="container"&&(L=O(e.params.mousewheel.eventsTarget)),!e.mouseEntered&&!L[0].contains($.target)&&!k.releaseOnEdges)return!0;$.originalEvent&&($=$.originalEvent);let T=0;const B=e.rtlTranslate?-1:1,x=c($);if(k.forceToAxis)if(e.isHorizontal())if(Math.abs(x.pixelX)>Math.abs(x.pixelY))T=-x.pixelX*B;else return!0;else if(Math.abs(x.pixelY)>Math.abs(x.pixelX))T=-x.pixelY;else return!0;else T=Math.abs(x.pixelX)>Math.abs(x.pixelY)?-x.pixelX*B:-x.pixelY;if(T===0)return!0;k.invert&&(T=-T);let z=e.getTranslate()+T*k.sensitivity;if(z>=e.minTranslate()&&(z=e.minTranslate()),z<=e.maxTranslate()&&(z=e.maxTranslate()),A=e.params.loop?!0:!(z===e.minTranslate()||z===e.maxTranslate()),A&&e.params.nested&&$.stopPropagation(),!e.params.freeMode||!e.params.freeMode.enabled){const M={time:de(),delta:Math.abs(T),direction:Math.sign(T),raw:v};u.length>=2&&u.shift();const N=u.length?u[u.length-1]:void 0;if(u.push(M),N?(M.direction!==N.direction||M.delta>N.delta||M.time>N.time+150)&&w(M):w(M),h(M))return!0}else{const M={time:de(),delta:Math.abs(T),direction:Math.sign(T)},N=d&&M.time<d.time+500&&M.delta<=d.delta&&M.direction===d.direction;if(!N){d=void 0,e.params.loop&&e.loopFix();let j=e.getTranslate()+T*k.sensitivity;const U=e.isBeginning,J=e.isEnd;if(j>=e.minTranslate()&&(j=e.minTranslate()),j<=e.maxTranslate()&&(j=e.maxTranslate()),e.setTransition(0),e.setTranslate(j),e.updateProgress(),e.updateActiveIndex(),e.updateSlidesClasses(),(!U&&e.isBeginning||!J&&e.isEnd)&&e.updateSlidesClasses(),e.params.freeMode.sticky){clearTimeout(r),r=void 0,u.length>=15&&u.shift();const C=u.length?u[u.length-1]:void 0,D=u[0];if(u.push(M),C&&(M.delta>C.delta||M.direction!==C.direction))u.splice(0);else if(u.length>=15&&M.time-D.time<500&&D.delta-M.delta>=1&&M.delta<=6){const H=T>0?.8:.2;d=M,u.splice(0),r=xe(()=>{e.slideToClosest(e.params.speed,!0,void 0,H)},0)}r||(r=xe(()=>{d=M,u.splice(0),e.slideToClosest(e.params.speed,!0,void 0,.5)},500))}if(N||l("scroll",$),e.params.autoplay&&e.params.autoplayDisableOnInteraction&&e.autoplay.stop(),j===e.minTranslate()||j===e.maxTranslate())return!0}}return $.preventDefault?$.preventDefault():$.returnValue=!1,!1}function b(v){let $=e.$el;e.params.mousewheel.eventsTarget!=="container"&&($=O(e.params.mousewheel.eventsTarget)),$[v]("mouseenter",p),$[v]("mouseleave",o),$[v]("wheel",_)}function S(){return e.params.cssMode?(e.wrapperEl.removeEventListener("wheel",_),!0):e.mousewheel.enabled?!1:(b("on"),e.mousewheel.enabled=!0,!0)}function y(){return e.params.cssMode?(e.wrapperEl.addEventListener(event,_),!0):e.mousewheel.enabled?(b("off"),e.mousewheel.enabled=!1,!0):!1}i("init",()=>{!e.params.mousewheel.enabled&&e.params.cssMode&&y(),e.params.mousewheel.enabled&&S()}),i("destroy",()=>{e.params.cssMode&&S(),e.mousewheel.enabled&&y()}),Object.assign(e.mousewheel,{enable:S,disable:y})}function ls(s,e,t,i){const l=te();return s.params.createElements&&Object.keys(i).forEach(n=>{if(!t[n]&&t.auto===!0){let r=s.$el.children(`.${i[n]}`)[0];r||(r=l.createElement("div"),r.className=i[n],s.$el.append(r)),t[n]=r,e[n]=r}}),t}function re(s){let{swiper:e,extendParams:t,on:i,emit:l}=s;t({navigation:{nextEl:null,prevEl:null,hideOnClick:!1,disabledClass:"swiper-button-disabled",hiddenClass:"swiper-button-hidden",lockClass:"swiper-button-lock"}}),e.navigation={nextEl:null,$nextEl:null,prevEl:null,$prevEl:null};function n(o){let w;return o&&(w=O(o),e.params.uniqueNavElements&&typeof o=="string"&&w.length>1&&e.$el.find(o).length===1&&(w=e.$el.find(o))),w}function r(o,w){const h=e.params.navigation;o&&o.length>0&&(o[w?"addClass":"removeClass"](h.disabledClass),o[0]&&o[0].tagName==="BUTTON"&&(o[0].disabled=w),e.params.watchOverflow&&e.enabled&&o[e.isLocked?"addClass":"removeClass"](h.lockClass))}function a(){if(e.params.loop)return;const{$nextEl:o,$prevEl:w}=e.navigation;r(w,e.isBeginning&&!e.params.rewind),r(o,e.isEnd&&!e.params.rewind)}function d(o){o.preventDefault(),!(e.isBeginning&&!e.params.loop&&!e.params.rewind)&&e.slidePrev()}function u(o){o.preventDefault(),!(e.isEnd&&!e.params.loop&&!e.params.rewind)&&e.slideNext()}function c(){const o=e.params.navigation;if(e.params.navigation=ls(e,e.originalParams.navigation,e.params.navigation,{nextEl:"swiper-button-next",prevEl:"swiper-button-prev"}),!(o.nextEl||o.prevEl))return;const w=n(o.nextEl),h=n(o.prevEl);w&&w.length>0&&w.on("click",u),h&&h.length>0&&h.on("click",d),Object.assign(e.navigation,{$nextEl:w,nextEl:w&&w[0],$prevEl:h,prevEl:h&&h[0]}),e.enabled||(w&&w.addClass(o.lockClass),h&&h.addClass(o.lockClass))}function p(){const{$nextEl:o,$prevEl:w}=e.navigation;o&&o.length&&(o.off("click",u),o.removeClass(e.params.navigation.disabledClass)),w&&w.length&&(w.off("click",d),w.removeClass(e.params.navigation.disabledClass))}i("init",()=>{c(),a()}),i("toEdge fromEdge lock unlock",()=>{a()}),i("destroy",()=>{p()}),i("enable disable",()=>{const{$nextEl:o,$prevEl:w}=e.navigation;o&&o[e.enabled?"removeClass":"addClass"](e.params.navigation.lockClass),w&&w[e.enabled?"removeClass":"addClass"](e.params.navigation.lockClass)}),i("click",(o,w)=>{const{$nextEl:h,$prevEl:_}=e.navigation,b=w.target;if(e.params.navigation.hideOnClick&&!O(b).is(_)&&!O(b).is(h)){if(e.pagination&&e.params.pagination&&e.params.pagination.clickable&&(e.pagination.el===b||e.pagination.el.contains(b)))return;let S;h?S=h.hasClass(e.params.navigation.hiddenClass):_&&(S=_.hasClass(e.params.navigation.hiddenClass)),l(S===!0?"navigationShow":"navigationHide"),h&&h.toggleClass(e.params.navigation.hiddenClass),_&&_.toggleClass(e.params.navigation.hiddenClass)}}),Object.assign(e.navigation,{update:a,init:c,destroy:p})}function Ee(s){return s===void 0&&(s=""),`.${s.trim().replace(/([\.:!\/])/g,"\\$1").replace(/ /g,".")}`}function X(s){let{swiper:e,extendParams:t,on:i,emit:l}=s;const n="swiper-pagination";t({pagination:{el:null,bulletElement:"span",clickable:!1,hideOnClick:!1,renderBullet:null,renderProgressbar:null,renderFraction:null,renderCustom:null,progressbarOpposite:!1,type:"bullets",dynamicBullets:!1,dynamicMainBullets:1,formatFractionCurrent:h=>h,formatFractionTotal:h=>h,bulletClass:`${n}-bullet`,bulletActiveClass:`${n}-bullet-active`,modifierClass:`${n}-`,currentClass:`${n}-current`,totalClass:`${n}-total`,hiddenClass:`${n}-hidden`,progressbarFillClass:`${n}-progressbar-fill`,progressbarOppositeClass:`${n}-progressbar-opposite`,clickableClass:`${n}-clickable`,lockClass:`${n}-lock`,horizontalClass:`${n}-horizontal`,verticalClass:`${n}-vertical`}}),e.pagination={el:null,$el:null,bullets:[]};let r,a=0;function d(){return!e.params.pagination.el||!e.pagination.el||!e.pagination.$el||e.pagination.$el.length===0}function u(h,_){const{bulletActiveClass:b}=e.params.pagination;h[_]().addClass(`${b}-${_}`)[_]().addClass(`${b}-${_}-${_}`)}function c(){const h=e.rtl,_=e.params.pagination;if(d())return;const b=e.virtual&&e.params.virtual.enabled?e.virtual.slides.length:e.slides.length,S=e.pagination.$el;let y;const v=e.params.loop?Math.ceil((b-e.loopedSlides*2)/e.params.slidesPerGroup):e.snapGrid.length;if(e.params.loop?(y=Math.ceil((e.activeIndex-e.loopedSlides)/e.params.slidesPerGroup),y>b-1-e.loopedSlides*2&&(y-=b-e.loopedSlides*2),y>v-1&&(y-=v),y<0&&e.params.paginationType!=="bullets"&&(y=v+y)):typeof e.snapIndex!="undefined"?y=e.snapIndex:y=e.activeIndex||0,_.type==="bullets"&&e.pagination.bullets&&e.pagination.bullets.length>0){const $=e.pagination.bullets;let A,k,L;if(_.dynamicBullets&&(r=$.eq(0)[e.isHorizontal()?"outerWidth":"outerHeight"](!0),S.css(e.isHorizontal()?"width":"height",`${r*(_.dynamicMainBullets+4)}px`),_.dynamicMainBullets>1&&e.previousIndex!==void 0&&(a+=y-(e.previousIndex-e.loopedSlides||0),a>_.dynamicMainBullets-1?a=_.dynamicMainBullets-1:a<0&&(a=0)),A=Math.max(y-a,0),k=A+(Math.min($.length,_.dynamicMainBullets)-1),L=(k+A)/2),$.removeClass(["","-next","-next-next","-prev","-prev-prev","-main"].map(T=>`${_.bulletActiveClass}${T}`).join(" ")),S.length>1)$.each(T=>{const B=O(T),x=B.index();x===y&&B.addClass(_.bulletActiveClass),_.dynamicBullets&&(x>=A&&x<=k&&B.addClass(`${_.bulletActiveClass}-main`),x===A&&u(B,"prev"),x===k&&u(B,"next"))});else{const T=$.eq(y),B=T.index();if(T.addClass(_.bulletActiveClass),_.dynamicBullets){const x=$.eq(A),z=$.eq(k);for(let M=A;M<=k;M+=1)$.eq(M).addClass(`${_.bulletActiveClass}-main`);if(e.params.loop)if(B>=$.length){for(let M=_.dynamicMainBullets;M>=0;M-=1)$.eq($.length-M).addClass(`${_.bulletActiveClass}-main`);$.eq($.length-_.dynamicMainBullets-1).addClass(`${_.bulletActiveClass}-prev`)}else u(x,"prev"),u(z,"next");else u(x,"prev"),u(z,"next")}}if(_.dynamicBullets){const T=Math.min($.length,_.dynamicMainBullets+4),B=(r*T-r)/2-L*r,x=h?"right":"left";$.css(e.isHorizontal()?x:"top",`${B}px`)}}if(_.type==="fraction"&&(S.find(Ee(_.currentClass)).text(_.formatFractionCurrent(y+1)),S.find(Ee(_.totalClass)).text(_.formatFractionTotal(v))),_.type==="progressbar"){let $;_.progressbarOpposite?$=e.isHorizontal()?"vertical":"horizontal":$=e.isHorizontal()?"horizontal":"vertical";const A=(y+1)/v;let k=1,L=1;$==="horizontal"?k=A:L=A,S.find(Ee(_.progressbarFillClass)).transform(`translate3d(0,0,0) scaleX(${k}) scaleY(${L})`).transition(e.params.speed)}_.type==="custom"&&_.renderCustom?(S.html(_.renderCustom(e,y+1,v)),l("paginationRender",S[0])):l("paginationUpdate",S[0]),e.params.watchOverflow&&e.enabled&&S[e.isLocked?"addClass":"removeClass"](_.lockClass)}function p(){const h=e.params.pagination;if(d())return;const _=e.virtual&&e.params.virtual.enabled?e.virtual.slides.length:e.slides.length,b=e.pagination.$el;let S="";if(h.type==="bullets"){let y=e.params.loop?Math.ceil((_-e.loopedSlides*2)/e.params.slidesPerGroup):e.snapGrid.length;e.params.freeMode&&e.params.freeMode.enabled&&!e.params.loop&&y>_&&(y=_);for(let v=0;v<y;v+=1)h.renderBullet?S+=h.renderBullet.call(e,v,h.bulletClass):S+=`<${h.bulletElement} class="${h.bulletClass}"></${h.bulletElement}>`;b.html(S),e.pagination.bullets=b.find(Ee(h.bulletClass))}h.type==="fraction"&&(h.renderFraction?S=h.renderFraction.call(e,h.currentClass,h.totalClass):S=`<span class="${h.currentClass}"></span> / <span class="${h.totalClass}"></span>`,b.html(S)),h.type==="progressbar"&&(h.renderProgressbar?S=h.renderProgressbar.call(e,h.progressbarFillClass):S=`<span class="${h.progressbarFillClass}"></span>`,b.html(S)),h.type!=="custom"&&l("paginationRender",e.pagination.$el[0])}function o(){e.params.pagination=ls(e,e.originalParams.pagination,e.params.pagination,{el:"swiper-pagination"});const h=e.params.pagination;if(!h.el)return;let _=O(h.el);_.length!==0&&(e.params.uniqueNavElements&&typeof h.el=="string"&&_.length>1&&(_=e.$el.find(h.el),_.length>1&&(_=_.filter(b=>O(b).parents(".swiper")[0]===e.el))),h.type==="bullets"&&h.clickable&&_.addClass(h.clickableClass),_.addClass(h.modifierClass+h.type),_.addClass(e.isHorizontal()?h.horizontalClass:h.verticalClass),h.type==="bullets"&&h.dynamicBullets&&(_.addClass(`${h.modifierClass}${h.type}-dynamic`),a=0,h.dynamicMainBullets<1&&(h.dynamicMainBullets=1)),h.type==="progressbar"&&h.progressbarOpposite&&_.addClass(h.progressbarOppositeClass),h.clickable&&_.on("click",Ee(h.bulletClass),function(S){S.preventDefault();let y=O(this).index()*e.params.slidesPerGroup;e.params.loop&&(y+=e.loopedSlides),e.slideTo(y)}),Object.assign(e.pagination,{$el:_,el:_[0]}),e.enabled||_.addClass(h.lockClass))}function w(){const h=e.params.pagination;if(d())return;const _=e.pagination.$el;_.removeClass(h.hiddenClass),_.removeClass(h.modifierClass+h.type),_.removeClass(e.isHorizontal()?h.horizontalClass:h.verticalClass),e.pagination.bullets&&e.pagination.bullets.removeClass&&e.pagination.bullets.removeClass(h.bulletActiveClass),h.clickable&&_.off("click",Ee(h.bulletClass))}i("init",()=>{o(),p(),c()}),i("activeIndexChange",()=>{(e.params.loop||typeof e.snapIndex=="undefined")&&c()}),i("snapIndexChange",()=>{e.params.loop||c()}),i("slidesLengthChange",()=>{e.params.loop&&(p(),c())}),i("snapGridLengthChange",()=>{e.params.loop||(p(),c())}),i("destroy",()=>{w()}),i("enable disable",()=>{const{$el:h}=e.pagination;h&&h[e.enabled?"removeClass":"addClass"](e.params.pagination.lockClass)}),i("lock unlock",()=>{c()}),i("click",(h,_)=>{const b=_.target,{$el:S}=e.pagination;if(e.params.pagination.el&&e.params.pagination.hideOnClick&&S.length>0&&!O(b).hasClass(e.params.pagination.bulletClass)){if(e.navigation&&(e.navigation.nextEl&&b===e.navigation.nextEl||e.navigation.prevEl&&b===e.navigation.prevEl))return;const y=S.hasClass(e.params.pagination.hiddenClass);l(y===!0?"paginationShow":"paginationHide"),S.toggleClass(e.params.pagination.hiddenClass)}}),Object.assign(e.pagination,{render:p,update:c,init:o,destroy:w})}function as(s){let{swiper:e,extendParams:t,on:i,emit:l}=s;const n=te();let r=!1,a=null,d=null,u,c,p,o;t({scrollbar:{el:null,dragSize:"auto",hide:!1,draggable:!1,snapOnRelease:!0,lockClass:"swiper-scrollbar-lock",dragClass:"swiper-scrollbar-drag"}}),e.scrollbar={el:null,dragEl:null,$el:null,$dragEl:null};function w(){if(!e.params.scrollbar.el||!e.scrollbar.el)return;const{scrollbar:x,rtlTranslate:z,progress:M}=e,{$dragEl:N,$el:j}=x,U=e.params.scrollbar;let J=c,C=(p-c)*M;z?(C=-C,C>0?(J=c-C,C=0):-C+c>p&&(J=p+C)):C<0?(J=c+C,C=0):C+c>p&&(J=p-C),e.isHorizontal()?(N.transform(`translate3d(${C}px, 0, 0)`),N[0].style.width=`${J}px`):(N.transform(`translate3d(0px, ${C}px, 0)`),N[0].style.height=`${J}px`),U.hide&&(clearTimeout(a),j[0].style.opacity=1,a=setTimeout(()=>{j[0].style.opacity=0,j.transition(400)},1e3))}function h(x){!e.params.scrollbar.el||!e.scrollbar.el||e.scrollbar.$dragEl.transition(x)}function _(){if(!e.params.scrollbar.el||!e.scrollbar.el)return;const{scrollbar:x}=e,{$dragEl:z,$el:M}=x;z[0].style.width="",z[0].style.height="",p=e.isHorizontal()?M[0].offsetWidth:M[0].offsetHeight,o=e.size/(e.virtualSize+e.params.slidesOffsetBefore-(e.params.centeredSlides?e.snapGrid[0]:0)),e.params.scrollbar.dragSize==="auto"?c=p*o:c=parseInt(e.params.scrollbar.dragSize,10),e.isHorizontal()?z[0].style.width=`${c}px`:z[0].style.height=`${c}px`,o>=1?M[0].style.display="none":M[0].style.display="",e.params.scrollbar.hide&&(M[0].style.opacity=0),e.params.watchOverflow&&e.enabled&&x.$el[e.isLocked?"addClass":"removeClass"](e.params.scrollbar.lockClass)}function b(x){return e.isHorizontal()?x.type==="touchstart"||x.type==="touchmove"?x.targetTouches[0].clientX:x.clientX:x.type==="touchstart"||x.type==="touchmove"?x.targetTouches[0].clientY:x.clientY}function S(x){const{scrollbar:z,rtlTranslate:M}=e,{$el:N}=z;let j;j=(b(x)-N.offset()[e.isHorizontal()?"left":"top"]-(u!==null?u:c/2))/(p-c),j=Math.max(Math.min(j,1),0),M&&(j=1-j);const U=e.minTranslate()+(e.maxTranslate()-e.minTranslate())*j;e.updateProgress(U),e.setTranslate(U),e.updateActiveIndex(),e.updateSlidesClasses()}function y(x){const z=e.params.scrollbar,{scrollbar:M,$wrapperEl:N}=e,{$el:j,$dragEl:U}=M;r=!0,u=x.target===U[0]||x.target===U?b(x)-x.target.getBoundingClientRect()[e.isHorizontal()?"left":"top"]:null,x.preventDefault(),x.stopPropagation(),N.transition(100),U.transition(100),S(x),clearTimeout(d),j.transition(0),z.hide&&j.css("opacity",1),e.params.cssMode&&e.$wrapperEl.css("scroll-snap-type","none"),l("scrollbarDragStart",x)}function v(x){const{scrollbar:z,$wrapperEl:M}=e,{$el:N,$dragEl:j}=z;!r||(x.preventDefault?x.preventDefault():x.returnValue=!1,S(x),M.transition(0),N.transition(0),j.transition(0),l("scrollbarDragMove",x))}function $(x){const z=e.params.scrollbar,{scrollbar:M,$wrapperEl:N}=e,{$el:j}=M;!r||(r=!1,e.params.cssMode&&(e.$wrapperEl.css("scroll-snap-type",""),N.transition("")),z.hide&&(clearTimeout(d),d=xe(()=>{j.css("opacity",0),j.transition(400)},1e3)),l("scrollbarDragEnd",x),z.snapOnRelease&&e.slideToClosest())}function A(x){const{scrollbar:z,touchEventsTouch:M,touchEventsDesktop:N,params:j,support:U}=e,C=z.$el[0],D=U.passiveListener&&j.passiveListeners?{passive:!1,capture:!1}:!1,H=U.passiveListener&&j.passiveListeners?{passive:!0,capture:!1}:!1;if(!C)return;const Y=x==="on"?"addEventListener":"removeEventListener";U.touch?(C[Y](M.start,y,D),C[Y](M.move,v,D),C[Y](M.end,$,H)):(C[Y](N.start,y,D),n[Y](N.move,v,D),n[Y](N.end,$,H))}function k(){!e.params.scrollbar.el||A("on")}function L(){!e.params.scrollbar.el||A("off")}function T(){const{scrollbar:x,$el:z}=e;e.params.scrollbar=ls(e,e.originalParams.scrollbar,e.params.scrollbar,{el:"swiper-scrollbar"});const M=e.params.scrollbar;if(!M.el)return;let N=O(M.el);e.params.uniqueNavElements&&typeof M.el=="string"&&N.length>1&&z.find(M.el).length===1&&(N=z.find(M.el));let j=N.find(`.${e.params.scrollbar.dragClass}`);j.length===0&&(j=O(`<div class="${e.params.scrollbar.dragClass}"></div>`),N.append(j)),Object.assign(x,{$el:N,el:N[0],$dragEl:j,dragEl:j[0]}),M.draggable&&k(),N&&N[e.enabled?"removeClass":"addClass"](e.params.scrollbar.lockClass)}function B(){L()}i("init",()=>{T(),_(),w()}),i("update resize observerUpdate lock unlock",()=>{_()}),i("setTranslate",()=>{w()}),i("setTransition",(x,z)=>{h(z)}),i("enable disable",()=>{const{$el:x}=e.scrollbar;x&&x[e.enabled?"removeClass":"addClass"](e.params.scrollbar.lockClass)}),i("destroy",()=>{B()}),Object.assign(e.scrollbar,{updateSize:_,setTranslate:w,init:T,destroy:B})}function Ir(s){let{swiper:e,extendParams:t,on:i}=s;t({parallax:{enabled:!1}});const l=(a,d)=>{const{rtl:u}=e,c=O(a),p=u?-1:1,o=c.attr("data-swiper-parallax")||"0";let w=c.attr("data-swiper-parallax-x"),h=c.attr("data-swiper-parallax-y");const _=c.attr("data-swiper-parallax-scale"),b=c.attr("data-swiper-parallax-opacity");if(w||h?(w=w||"0",h=h||"0"):e.isHorizontal()?(w=o,h="0"):(h=o,w="0"),w.indexOf("%")>=0?w=`${parseInt(w,10)*d*p}%`:w=`${w*d*p}px`,h.indexOf("%")>=0?h=`${parseInt(h,10)*d}%`:h=`${h*d}px`,typeof b!="undefined"&&b!==null){const S=b-(b-1)*(1-Math.abs(d));c[0].style.opacity=S}if(typeof _=="undefined"||_===null)c.transform(`translate3d(${w}, ${h}, 0px)`);else{const S=_-(_-1)*(1-Math.abs(d));c.transform(`translate3d(${w}, ${h}, 0px) scale(${S})`)}},n=()=>{const{$el:a,slides:d,progress:u,snapGrid:c}=e;a.children("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]").each(p=>{l(p,u)}),d.each((p,o)=>{let w=p.progress;e.params.slidesPerGroup>1&&e.params.slidesPerView!=="auto"&&(w+=Math.ceil(o/2)-u*(c.length-1)),w=Math.min(Math.max(w,-1),1),O(p).find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]").each(h=>{l(h,w)})})},r=function(a){a===void 0&&(a=e.params.speed);const{$el:d}=e;d.find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]").each(u=>{const c=O(u);let p=parseInt(c.attr("data-swiper-parallax-duration"),10)||a;a===0&&(p=0),c.transition(p)})};i("beforeInit",()=>{!e.params.parallax.enabled||(e.params.watchSlidesProgress=!0,e.originalParams.watchSlidesProgress=!0)}),i("init",()=>{!e.params.parallax.enabled||n()}),i("setTranslate",()=>{!e.params.parallax.enabled||n()}),i("setTransition",(a,d)=>{!e.params.parallax.enabled||r(d)})}function Or(s){let{swiper:e,extendParams:t,on:i,emit:l}=s;const n=Q();t({zoom:{enabled:!1,maxRatio:3,minRatio:1,toggle:!0,containerClass:"swiper-zoom-container",zoomedSlideClass:"swiper-slide-zoomed"}}),e.zoom={enabled:!1};let r=1,a=!1,d,u,c;const p={$slideEl:void 0,slideWidth:void 0,slideHeight:void 0,$imageEl:void 0,$imageWrapEl:void 0,maxRatio:3},o={isTouched:void 0,isMoved:void 0,currentX:void 0,currentY:void 0,minX:void 0,minY:void 0,maxX:void 0,maxY:void 0,width:void 0,height:void 0,startX:void 0,startY:void 0,touchesStart:{},touchesCurrent:{}},w={x:void 0,y:void 0,prevPositionX:void 0,prevPositionY:void 0,prevTime:void 0};let h=1;Object.defineProperty(e.zoom,"scale",{get(){return h},set(C){if(h!==C){const D=p.$imageEl?p.$imageEl[0]:void 0,H=p.$slideEl?p.$slideEl[0]:void 0;l("zoomChange",C,D,H)}h=C}});function _(C){if(C.targetTouches.length<2)return 1;const D=C.targetTouches[0].pageX,H=C.targetTouches[0].pageY,Y=C.targetTouches[1].pageX,Z=C.targetTouches[1].pageY;return Math.sqrt((Y-D)**2+(Z-H)**2)}function b(C){const D=e.support,H=e.params.zoom;if(u=!1,c=!1,!D.gestures){if(C.type!=="touchstart"||C.type==="touchstart"&&C.targetTouches.length<2)return;u=!0,p.scaleStart=_(C)}if((!p.$slideEl||!p.$slideEl.length)&&(p.$slideEl=O(C.target).closest(`.${e.params.slideClass}`),p.$slideEl.length===0&&(p.$slideEl=e.slides.eq(e.activeIndex)),p.$imageEl=p.$slideEl.find(`.${H.containerClass}`).eq(0).find("picture, img, svg, canvas, .swiper-zoom-target").eq(0),p.$imageWrapEl=p.$imageEl.parent(`.${H.containerClass}`),p.maxRatio=p.$imageWrapEl.attr("data-swiper-zoom")||H.maxRatio,p.$imageWrapEl.length===0)){p.$imageEl=void 0;return}p.$imageEl&&p.$imageEl.transition(0),a=!0}function S(C){const D=e.support,H=e.params.zoom,Y=e.zoom;if(!D.gestures){if(C.type!=="touchmove"||C.type==="touchmove"&&C.targetTouches.length<2)return;c=!0,p.scaleMove=_(C)}if(!p.$imageEl||p.$imageEl.length===0){C.type==="gesturechange"&&b(C);return}D.gestures?Y.scale=C.scale*r:Y.scale=p.scaleMove/p.scaleStart*r,Y.scale>p.maxRatio&&(Y.scale=p.maxRatio-1+(Y.scale-p.maxRatio+1)**.5),Y.scale<H.minRatio&&(Y.scale=H.minRatio+1-(H.minRatio-Y.scale+1)**.5),p.$imageEl.transform(`translate3d(0,0,0) scale(${Y.scale})`)}function y(C){const D=e.device,H=e.support,Y=e.params.zoom,Z=e.zoom;if(!H.gestures){if(!u||!c||C.type!=="touchend"||C.type==="touchend"&&C.changedTouches.length<2&&!D.android)return;u=!1,c=!1}!p.$imageEl||p.$imageEl.length===0||(Z.scale=Math.max(Math.min(Z.scale,p.maxRatio),Y.minRatio),p.$imageEl.transition(e.params.speed).transform(`translate3d(0,0,0) scale(${Z.scale})`),r=Z.scale,a=!1,Z.scale===1&&(p.$slideEl=void 0))}function v(C){const D=e.device;!p.$imageEl||p.$imageEl.length===0||o.isTouched||(D.android&&C.cancelable&&C.preventDefault(),o.isTouched=!0,o.touchesStart.x=C.type==="touchstart"?C.targetTouches[0].pageX:C.pageX,o.touchesStart.y=C.type==="touchstart"?C.targetTouches[0].pageY:C.pageY)}function $(C){const D=e.zoom;if(!p.$imageEl||p.$imageEl.length===0||(e.allowClick=!1,!o.isTouched||!p.$slideEl))return;o.isMoved||(o.width=p.$imageEl[0].offsetWidth,o.height=p.$imageEl[0].offsetHeight,o.startX=ts(p.$imageWrapEl[0],"x")||0,o.startY=ts(p.$imageWrapEl[0],"y")||0,p.slideWidth=p.$slideEl[0].offsetWidth,p.slideHeight=p.$slideEl[0].offsetHeight,p.$imageWrapEl.transition(0));const H=o.width*D.scale,Y=o.height*D.scale;if(!(H<p.slideWidth&&Y<p.slideHeight)){if(o.minX=Math.min(p.slideWidth/2-H/2,0),o.maxX=-o.minX,o.minY=Math.min(p.slideHeight/2-Y/2,0),o.maxY=-o.minY,o.touchesCurrent.x=C.type==="touchmove"?C.targetTouches[0].pageX:C.pageX,o.touchesCurrent.y=C.type==="touchmove"?C.targetTouches[0].pageY:C.pageY,!o.isMoved&&!a){if(e.isHorizontal()&&(Math.floor(o.minX)===Math.floor(o.startX)&&o.touchesCurrent.x<o.touchesStart.x||Math.floor(o.maxX)===Math.floor(o.startX)&&o.touchesCurrent.x>o.touchesStart.x)){o.isTouched=!1;return}if(!e.isHorizontal()&&(Math.floor(o.minY)===Math.floor(o.startY)&&o.touchesCurrent.y<o.touchesStart.y||Math.floor(o.maxY)===Math.floor(o.startY)&&o.touchesCurrent.y>o.touchesStart.y)){o.isTouched=!1;return}}C.cancelable&&C.preventDefault(),C.stopPropagation(),o.isMoved=!0,o.currentX=o.touchesCurrent.x-o.touchesStart.x+o.startX,o.currentY=o.touchesCurrent.y-o.touchesStart.y+o.startY,o.currentX<o.minX&&(o.currentX=o.minX+1-(o.minX-o.currentX+1)**.8),o.currentX>o.maxX&&(o.currentX=o.maxX-1+(o.currentX-o.maxX+1)**.8),o.currentY<o.minY&&(o.currentY=o.minY+1-(o.minY-o.currentY+1)**.8),o.currentY>o.maxY&&(o.currentY=o.maxY-1+(o.currentY-o.maxY+1)**.8),w.prevPositionX||(w.prevPositionX=o.touchesCurrent.x),w.prevPositionY||(w.prevPositionY=o.touchesCurrent.y),w.prevTime||(w.prevTime=Date.now()),w.x=(o.touchesCurrent.x-w.prevPositionX)/(Date.now()-w.prevTime)/2,w.y=(o.touchesCurrent.y-w.prevPositionY)/(Date.now()-w.prevTime)/2,Math.abs(o.touchesCurrent.x-w.prevPositionX)<2&&(w.x=0),Math.abs(o.touchesCurrent.y-w.prevPositionY)<2&&(w.y=0),w.prevPositionX=o.touchesCurrent.x,w.prevPositionY=o.touchesCurrent.y,w.prevTime=Date.now(),p.$imageWrapEl.transform(`translate3d(${o.currentX}px, ${o.currentY}px,0)`)}}function A(){const C=e.zoom;if(!p.$imageEl||p.$imageEl.length===0)return;if(!o.isTouched||!o.isMoved){o.isTouched=!1,o.isMoved=!1;return}o.isTouched=!1,o.isMoved=!1;let D=300,H=300;const Y=w.x*D,Z=o.currentX+Y,ye=w.y*H,Te=o.currentY+ye;w.x!==0&&(D=Math.abs((Z-o.currentX)/w.x)),w.y!==0&&(H=Math.abs((Te-o.currentY)/w.y));const Ae=Math.max(D,H);o.currentX=Z,o.currentY=Te;const Le=o.width*C.scale,he=o.height*C.scale;o.minX=Math.min(p.slideWidth/2-Le/2,0),o.maxX=-o.minX,o.minY=Math.min(p.slideHeight/2-he/2,0),o.maxY=-o.minY,o.currentX=Math.max(Math.min(o.currentX,o.maxX),o.minX),o.currentY=Math.max(Math.min(o.currentY,o.maxY),o.minY),p.$imageWrapEl.transition(Ae).transform(`translate3d(${o.currentX}px, ${o.currentY}px,0)`)}function k(){const C=e.zoom;p.$slideEl&&e.previousIndex!==e.activeIndex&&(p.$imageEl&&p.$imageEl.transform("translate3d(0,0,0) scale(1)"),p.$imageWrapEl&&p.$imageWrapEl.transform("translate3d(0,0,0)"),C.scale=1,r=1,p.$slideEl=void 0,p.$imageEl=void 0,p.$imageWrapEl=void 0)}function L(C){const D=e.zoom,H=e.params.zoom;if(p.$slideEl||(C&&C.target&&(p.$slideEl=O(C.target).closest(`.${e.params.slideClass}`)),p.$slideEl||(e.params.virtual&&e.params.virtual.enabled&&e.virtual?p.$slideEl=e.$wrapperEl.children(`.${e.params.slideActiveClass}`):p.$slideEl=e.slides.eq(e.activeIndex)),p.$imageEl=p.$slideEl.find(`.${H.containerClass}`).eq(0).find("picture, img, svg, canvas, .swiper-zoom-target").eq(0),p.$imageWrapEl=p.$imageEl.parent(`.${H.containerClass}`)),!p.$imageEl||p.$imageEl.length===0||!p.$imageWrapEl||p.$imageWrapEl.length===0)return;e.params.cssMode&&(e.wrapperEl.style.overflow="hidden",e.wrapperEl.style.touchAction="none"),p.$slideEl.addClass(`${H.zoomedSlideClass}`);let Y,Z,ye,Te,Ae,Le,he,$e,ds,ps,cs,us,Ne,je,Fe,qe,Ye,Xe;typeof o.touchesStart.x=="undefined"&&C?(Y=C.type==="touchend"?C.changedTouches[0].pageX:C.pageX,Z=C.type==="touchend"?C.changedTouches[0].pageY:C.pageY):(Y=o.touchesStart.x,Z=o.touchesStart.y),D.scale=p.$imageWrapEl.attr("data-swiper-zoom")||H.maxRatio,r=p.$imageWrapEl.attr("data-swiper-zoom")||H.maxRatio,C?(Ye=p.$slideEl[0].offsetWidth,Xe=p.$slideEl[0].offsetHeight,ye=p.$slideEl.offset().left+n.scrollX,Te=p.$slideEl.offset().top+n.scrollY,Ae=ye+Ye/2-Y,Le=Te+Xe/2-Z,ds=p.$imageEl[0].offsetWidth,ps=p.$imageEl[0].offsetHeight,cs=ds*D.scale,us=ps*D.scale,Ne=Math.min(Ye/2-cs/2,0),je=Math.min(Xe/2-us/2,0),Fe=-Ne,qe=-je,he=Ae*D.scale,$e=Le*D.scale,he<Ne&&(he=Ne),he>Fe&&(he=Fe),$e<je&&($e=je),$e>qe&&($e=qe)):(he=0,$e=0),p.$imageWrapEl.transition(300).transform(`translate3d(${he}px, ${$e}px,0)`),p.$imageEl.transition(300).transform(`translate3d(0,0,0) scale(${D.scale})`)}function T(){const C=e.zoom,D=e.params.zoom;p.$slideEl||(e.params.virtual&&e.params.virtual.enabled&&e.virtual?p.$slideEl=e.$wrapperEl.children(`.${e.params.slideActiveClass}`):p.$slideEl=e.slides.eq(e.activeIndex),p.$imageEl=p.$slideEl.find(`.${D.containerClass}`).eq(0).find("picture, img, svg, canvas, .swiper-zoom-target").eq(0),p.$imageWrapEl=p.$imageEl.parent(`.${D.containerClass}`)),!(!p.$imageEl||p.$imageEl.length===0||!p.$imageWrapEl||p.$imageWrapEl.length===0)&&(e.params.cssMode&&(e.wrapperEl.style.overflow="",e.wrapperEl.style.touchAction=""),C.scale=1,r=1,p.$imageWrapEl.transition(300).transform("translate3d(0,0,0)"),p.$imageEl.transition(300).transform("translate3d(0,0,0) scale(1)"),p.$slideEl.removeClass(`${D.zoomedSlideClass}`),p.$slideEl=void 0)}function B(C){const D=e.zoom;D.scale&&D.scale!==1?T():L(C)}function x(){const C=e.support,D=e.touchEvents.start==="touchstart"&&C.passiveListener&&e.params.passiveListeners?{passive:!0,capture:!1}:!1,H=C.passiveListener?{passive:!1,capture:!0}:!0;return{passiveListener:D,activeListenerWithCapture:H}}function z(){return`.${e.params.slideClass}`}function M(C){const{passiveListener:D}=x(),H=z();e.$wrapperEl[C]("gesturestart",H,b,D),e.$wrapperEl[C]("gesturechange",H,S,D),e.$wrapperEl[C]("gestureend",H,y,D)}function N(){d||(d=!0,M("on"))}function j(){!d||(d=!1,M("off"))}function U(){const C=e.zoom;if(C.enabled)return;C.enabled=!0;const D=e.support,{passiveListener:H,activeListenerWithCapture:Y}=x(),Z=z();D.gestures?(e.$wrapperEl.on(e.touchEvents.start,N,H),e.$wrapperEl.on(e.touchEvents.end,j,H)):e.touchEvents.start==="touchstart"&&(e.$wrapperEl.on(e.touchEvents.start,Z,b,H),e.$wrapperEl.on(e.touchEvents.move,Z,S,Y),e.$wrapperEl.on(e.touchEvents.end,Z,y,H),e.touchEvents.cancel&&e.$wrapperEl.on(e.touchEvents.cancel,Z,y,H)),e.$wrapperEl.on(e.touchEvents.move,`.${e.params.zoom.containerClass}`,$,Y)}function J(){const C=e.zoom;if(!C.enabled)return;const D=e.support;C.enabled=!1;const{passiveListener:H,activeListenerWithCapture:Y}=x(),Z=z();D.gestures?(e.$wrapperEl.off(e.touchEvents.start,N,H),e.$wrapperEl.off(e.touchEvents.end,j,H)):e.touchEvents.start==="touchstart"&&(e.$wrapperEl.off(e.touchEvents.start,Z,b,H),e.$wrapperEl.off(e.touchEvents.move,Z,S,Y),e.$wrapperEl.off(e.touchEvents.end,Z,y,H),e.touchEvents.cancel&&e.$wrapperEl.off(e.touchEvents.cancel,Z,y,H)),e.$wrapperEl.off(e.touchEvents.move,`.${e.params.zoom.containerClass}`,$,Y)}i("init",()=>{e.params.zoom.enabled&&U()}),i("destroy",()=>{J()}),i("touchStart",(C,D)=>{!e.zoom.enabled||v(D)}),i("touchEnd",(C,D)=>{!e.zoom.enabled||A()}),i("doubleTap",(C,D)=>{!e.animating&&e.params.zoom.enabled&&e.zoom.enabled&&e.params.zoom.toggle&&B(D)}),i("transitionEnd",()=>{e.zoom.enabled&&e.params.zoom.enabled&&k()}),i("slideChange",()=>{e.zoom.enabled&&e.params.zoom.enabled&&e.params.cssMode&&k()}),Object.assign(e.zoom,{enable:U,disable:J,in:L,out:T,toggle:B})}function Ar(s){let{swiper:e,extendParams:t,on:i,emit:l}=s;t({lazy:{checkInView:!1,enabled:!1,loadPrevNext:!1,loadPrevNextAmount:1,loadOnTransitionStart:!1,scrollingElement:"",elementClass:"swiper-lazy",loadingClass:"swiper-lazy-loading",loadedClass:"swiper-lazy-loaded",preloaderClass:"swiper-lazy-preloader"}}),e.lazy={};let n=!1,r=!1;function a(c,p){p===void 0&&(p=!0);const o=e.params.lazy;if(typeof c=="undefined"||e.slides.length===0)return;const h=e.virtual&&e.params.virtual.enabled?e.$wrapperEl.children(`.${e.params.slideClass}[data-swiper-slide-index="${c}"]`):e.slides.eq(c),_=h.find(`.${o.elementClass}:not(.${o.loadedClass}):not(.${o.loadingClass})`);h.hasClass(o.elementClass)&&!h.hasClass(o.loadedClass)&&!h.hasClass(o.loadingClass)&&_.push(h[0]),_.length!==0&&_.each(b=>{const S=O(b);S.addClass(o.loadingClass);const y=S.attr("data-background"),v=S.attr("data-src"),$=S.attr("data-srcset"),A=S.attr("data-sizes"),k=S.parent("picture");e.loadImage(S[0],v||y,$,A,!1,()=>{if(!(typeof e=="undefined"||e===null||!e||e&&!e.params||e.destroyed)){if(y?(S.css("background-image",`url("${y}")`),S.removeAttr("data-background")):($&&(S.attr("srcset",$),S.removeAttr("data-srcset")),A&&(S.attr("sizes",A),S.removeAttr("data-sizes")),k.length&&k.children("source").each(L=>{const T=O(L);T.attr("data-srcset")&&(T.attr("srcset",T.attr("data-srcset")),T.removeAttr("data-srcset"))}),v&&(S.attr("src",v),S.removeAttr("data-src"))),S.addClass(o.loadedClass).removeClass(o.loadingClass),h.find(`.${o.preloaderClass}`).remove(),e.params.loop&&p){const L=h.attr("data-swiper-slide-index");if(h.hasClass(e.params.slideDuplicateClass)){const T=e.$wrapperEl.children(`[data-swiper-slide-index="${L}"]:not(.${e.params.slideDuplicateClass})`);a(T.index(),!1)}else{const T=e.$wrapperEl.children(`.${e.params.slideDuplicateClass}[data-swiper-slide-index="${L}"]`);a(T.index(),!1)}}l("lazyImageReady",h[0],S[0]),e.params.autoHeight&&e.updateAutoHeight()}}),l("lazyImageLoad",h[0],S[0])})}function d(){const{$wrapperEl:c,params:p,slides:o,activeIndex:w}=e,h=e.virtual&&p.virtual.enabled,_=p.lazy;let b=p.slidesPerView;b==="auto"&&(b=0);function S(v){if(h){if(c.children(`.${p.slideClass}[data-swiper-slide-index="${v}"]`).length)return!0}else if(o[v])return!0;return!1}function y(v){return h?O(v).attr("data-swiper-slide-index"):O(v).index()}if(r||(r=!0),e.params.watchSlidesProgress)c.children(`.${p.slideVisibleClass}`).each(v=>{const $=h?O(v).attr("data-swiper-slide-index"):O(v).index();a($)});else if(b>1)for(let v=w;v<w+b;v+=1)S(v)&&a(v);else a(w);if(_.loadPrevNext)if(b>1||_.loadPrevNextAmount&&_.loadPrevNextAmount>1){const v=_.loadPrevNextAmount,$=b,A=Math.min(w+$+Math.max(v,$),o.length),k=Math.max(w-Math.max($,v),0);for(let L=w+b;L<A;L+=1)S(L)&&a(L);for(let L=k;L<w;L+=1)S(L)&&a(L)}else{const v=c.children(`.${p.slideNextClass}`);v.length>0&&a(y(v));const $=c.children(`.${p.slidePrevClass}`);$.length>0&&a(y($))}}function u(){const c=Q();if(!e||e.destroyed)return;const p=e.params.lazy.scrollingElement?O(e.params.lazy.scrollingElement):O(c),o=p[0]===c,w=o?c.innerWidth:p[0].offsetWidth,h=o?c.innerHeight:p[0].offsetHeight,_=e.$el.offset(),{rtlTranslate:b}=e;let S=!1;b&&(_.left-=e.$el[0].scrollLeft);const y=[[_.left,_.top],[_.left+e.width,_.top],[_.left,_.top+e.height],[_.left+e.width,_.top+e.height]];for(let $=0;$<y.length;$+=1){const A=y[$];if(A[0]>=0&&A[0]<=w&&A[1]>=0&&A[1]<=h){if(A[0]===0&&A[1]===0)continue;S=!0}}const v=e.touchEvents.start==="touchstart"&&e.support.passiveListener&&e.params.passiveListeners?{passive:!0,capture:!1}:!1;S?(d(),p.off("scroll",u,v)):n||(n=!0,p.on("scroll",u,v))}i("beforeInit",()=>{e.params.lazy.enabled&&e.params.preloadImages&&(e.params.preloadImages=!1)}),i("init",()=>{e.params.lazy.enabled&&(e.params.lazy.checkInView?u():d())}),i("scroll",()=>{e.params.freeMode&&e.params.freeMode.enabled&&!e.params.freeMode.sticky&&d()}),i("scrollbarDragMove resize _freeModeNoMomentumRelease",()=>{e.params.lazy.enabled&&(e.params.lazy.checkInView?u():d())}),i("transitionStart",()=>{e.params.lazy.enabled&&(e.params.lazy.loadOnTransitionStart||!e.params.lazy.loadOnTransitionStart&&!r)&&(e.params.lazy.checkInView?u():d())}),i("transitionEnd",()=>{e.params.lazy.enabled&&!e.params.lazy.loadOnTransitionStart&&(e.params.lazy.checkInView?u():d())}),i("slideChange",()=>{const{lazy:c,cssMode:p,watchSlidesProgress:o,touchReleaseOnEdges:w,resistanceRatio:h}=e.params;c.enabled&&(p||o&&(w||h===0))&&d()}),Object.assign(e.lazy,{load:d,loadInSlide:a})}function Lr(s){let{swiper:e,extendParams:t,on:i,emit:l}=s,n;e.autoplay={running:!1,paused:!1},t({autoplay:{enabled:!1,delay:3e3,waitForTransition:!0,disableOnInteraction:!0,stopOnLastSlide:!1,reverseDirection:!1,pauseOnMouseEnter:!1}});function r(){const b=e.slides.eq(e.activeIndex);let S=e.params.autoplay.delay;b.attr("data-swiper-autoplay")&&(S=b.attr("data-swiper-autoplay")||e.params.autoplay.delay),clearTimeout(n),n=xe(()=>{let y;e.params.autoplay.reverseDirection?e.params.loop?(e.loopFix(),y=e.slidePrev(e.params.speed,!0,!0),l("autoplay")):e.isBeginning?e.params.autoplay.stopOnLastSlide?d():(y=e.slideTo(e.slides.length-1,e.params.speed,!0,!0),l("autoplay")):(y=e.slidePrev(e.params.speed,!0,!0),l("autoplay")):e.params.loop?(e.loopFix(),y=e.slideNext(e.params.speed,!0,!0),l("autoplay")):e.isEnd?e.params.autoplay.stopOnLastSlide?d():(y=e.slideTo(0,e.params.speed,!0,!0),l("autoplay")):(y=e.slideNext(e.params.speed,!0,!0),l("autoplay")),(e.params.cssMode&&e.autoplay.running||y===!1)&&r()},S)}function a(){return typeof n!="undefined"||e.autoplay.running?!1:(e.autoplay.running=!0,l("autoplayStart"),r(),!0)}function d(){return!e.autoplay.running||typeof n=="undefined"?!1:(n&&(clearTimeout(n),n=void 0),e.autoplay.running=!1,l("autoplayStop"),!0)}function u(b){!e.autoplay.running||e.autoplay.paused||(n&&clearTimeout(n),e.autoplay.paused=!0,b===0||!e.params.autoplay.waitForTransition?(e.autoplay.paused=!1,r()):["transitionend","webkitTransitionEnd"].forEach(S=>{e.$wrapperEl[0].addEventListener(S,p)}))}function c(){const b=te();b.visibilityState==="hidden"&&e.autoplay.running&&u(),b.visibilityState==="visible"&&e.autoplay.paused&&(r(),e.autoplay.paused=!1)}function p(b){!e||e.destroyed||!e.$wrapperEl||b.target===e.$wrapperEl[0]&&(["transitionend","webkitTransitionEnd"].forEach(S=>{e.$wrapperEl[0].removeEventListener(S,p)}),e.autoplay.paused=!1,e.autoplay.running?r():d())}function o(){e.params.autoplay.disableOnInteraction?d():(l("autoplayPause"),u()),["transitionend","webkitTransitionEnd"].forEach(b=>{e.$wrapperEl[0].removeEventListener(b,p)})}function w(){e.params.autoplay.disableOnInteraction||(e.autoplay.paused=!1,l("autoplayResume"),r())}function h(){e.params.autoplay.pauseOnMouseEnter&&(e.$el.on("mouseenter",o),e.$el.on("mouseleave",w))}function _(){e.$el.off("mouseenter",o),e.$el.off("mouseleave",w)}i("init",()=>{e.params.autoplay.enabled&&(a(),te().addEventListener("visibilitychange",c),h())}),i("beforeTransitionStart",(b,S,y)=>{e.autoplay.running&&(y||!e.params.autoplay.disableOnInteraction?e.autoplay.pause(S):d())}),i("sliderFirstMove",()=>{e.autoplay.running&&(e.params.autoplay.disableOnInteraction?d():u())}),i("touchEnd",()=>{e.params.cssMode&&e.autoplay.paused&&!e.params.autoplay.disableOnInteraction&&r()}),i("destroy",()=>{_(),e.autoplay.running&&d(),te().removeEventListener("visibilitychange",c)}),Object.assign(e.autoplay,{pause:u,run:r,start:a,stop:d})}function Nr(s){let{swiper:e,extendParams:t,on:i}=s;t({thumbs:{swiper:null,multipleActiveThumbs:!0,autoScrollOffset:0,slideThumbActiveClass:"swiper-slide-thumb-active",thumbsContainerClass:"swiper-thumbs"}});let l=!1,n=!1;e.thumbs={swiper:null};function r(){const u=e.thumbs.swiper;if(!u)return;const c=u.clickedIndex,p=u.clickedSlide;if(p&&O(p).hasClass(e.params.thumbs.slideThumbActiveClass)||typeof c=="undefined"||c===null)return;let o;if(u.params.loop?o=parseInt(O(u.clickedSlide).attr("data-swiper-slide-index"),10):o=c,e.params.loop){let w=e.activeIndex;e.slides.eq(w).hasClass(e.params.slideDuplicateClass)&&(e.loopFix(),e._clientLeft=e.$wrapperEl[0].clientLeft,w=e.activeIndex);const h=e.slides.eq(w).prevAll(`[data-swiper-slide-index="${o}"]`).eq(0).index(),_=e.slides.eq(w).nextAll(`[data-swiper-slide-index="${o}"]`).eq(0).index();typeof h=="undefined"?o=_:typeof _=="undefined"?o=h:_-w<w-h?o=_:o=h}e.slideTo(o)}function a(){const{thumbs:u}=e.params;if(l)return!1;l=!0;const c=e.constructor;if(u.swiper instanceof c)e.thumbs.swiper=u.swiper,Object.assign(e.thumbs.swiper.originalParams,{watchSlidesProgress:!0,slideToClickedSlide:!1}),Object.assign(e.thumbs.swiper.params,{watchSlidesProgress:!0,slideToClickedSlide:!1});else if(Pe(u.swiper)){const p=Object.assign({},u.swiper);Object.assign(p,{watchSlidesProgress:!0,slideToClickedSlide:!1}),e.thumbs.swiper=new c(p),n=!0}return e.thumbs.swiper.$el.addClass(e.params.thumbs.thumbsContainerClass),e.thumbs.swiper.on("tap",r),!0}function d(u){const c=e.thumbs.swiper;if(!c)return;const p=c.params.slidesPerView==="auto"?c.slidesPerViewDynamic():c.params.slidesPerView,o=e.params.thumbs.autoScrollOffset,w=o&&!c.params.loop;if(e.realIndex!==c.realIndex||w){let b=c.activeIndex,S,y;if(c.params.loop){c.slides.eq(b).hasClass(c.params.slideDuplicateClass)&&(c.loopFix(),c._clientLeft=c.$wrapperEl[0].clientLeft,b=c.activeIndex);const v=c.slides.eq(b).prevAll(`[data-swiper-slide-index="${e.realIndex}"]`).eq(0).index(),$=c.slides.eq(b).nextAll(`[data-swiper-slide-index="${e.realIndex}"]`).eq(0).index();typeof v=="undefined"?S=$:typeof $=="undefined"?S=v:$-b===b-v?S=c.params.slidesPerGroup>1?$:b:$-b<b-v?S=$:S=v,y=e.activeIndex>e.previousIndex?"next":"prev"}else S=e.realIndex,y=S>e.previousIndex?"next":"prev";w&&(S+=y==="next"?o:-1*o),c.visibleSlidesIndexes&&c.visibleSlidesIndexes.indexOf(S)<0&&(c.params.centeredSlides?S>b?S=S-Math.floor(p/2)+1:S=S+Math.floor(p/2)-1:S>b&&c.params.slidesPerGroup,c.slideTo(S,u?0:void 0))}let h=1;const _=e.params.thumbs.slideThumbActiveClass;if(e.params.slidesPerView>1&&!e.params.centeredSlides&&(h=e.params.slidesPerView),e.params.thumbs.multipleActiveThumbs||(h=1),h=Math.floor(h),c.slides.removeClass(_),c.params.loop||c.params.virtual&&c.params.virtual.enabled)for(let b=0;b<h;b+=1)c.$wrapperEl.children(`[data-swiper-slide-index="${e.realIndex+b}"]`).addClass(_);else for(let b=0;b<h;b+=1)c.slides.eq(e.realIndex+b).addClass(_)}i("beforeInit",()=>{const{thumbs:u}=e.params;!u||!u.swiper||(a(),d(!0))}),i("slideChange update resize observerUpdate",()=>{!e.thumbs.swiper||d()}),i("setTransition",(u,c)=>{const p=e.thumbs.swiper;!p||p.setTransition(c)}),i("beforeDestroy",()=>{const u=e.thumbs.swiper;!u||n&&u&&u.destroy()}),Object.assign(e.thumbs,{init:a,update:d})}function js(s){let{swiper:e,extendParams:t,emit:i,once:l}=s;t({freeMode:{enabled:!1,momentum:!0,momentumRatio:1,momentumBounce:!0,momentumBounceRatio:1,momentumVelocityRatio:1,sticky:!1,minimumVelocity:.02}});function n(){const d=e.getTranslate();e.setTranslate(d),e.setTransition(0),e.touchEventsData.velocities.length=0,e.freeMode.onTouchEnd({currentPos:e.rtl?e.translate:-e.translate})}function r(){const{touchEventsData:d,touches:u}=e;d.velocities.length===0&&d.velocities.push({position:u[e.isHorizontal()?"startX":"startY"],time:d.touchStartTime}),d.velocities.push({position:u[e.isHorizontal()?"currentX":"currentY"],time:de()})}function a(d){let{currentPos:u}=d;const{params:c,$wrapperEl:p,rtlTranslate:o,snapGrid:w,touchEventsData:h}=e,b=de()-h.touchStartTime;if(u<-e.minTranslate()){e.slideTo(e.activeIndex);return}if(u>-e.maxTranslate()){e.slides.length<w.length?e.slideTo(w.length-1):e.slideTo(e.slides.length-1);return}if(c.freeMode.momentum){if(h.velocities.length>1){const T=h.velocities.pop(),B=h.velocities.pop(),x=T.position-B.position,z=T.time-B.time;e.velocity=x/z,e.velocity/=2,Math.abs(e.velocity)<c.freeMode.minimumVelocity&&(e.velocity=0),(z>150||de()-T.time>300)&&(e.velocity=0)}else e.velocity=0;e.velocity*=c.freeMode.momentumVelocityRatio,h.velocities.length=0;let S=1e3*c.freeMode.momentumRatio;const y=e.velocity*S;let v=e.translate+y;o&&(v=-v);let $=!1,A;const k=Math.abs(e.velocity)*20*c.freeMode.momentumBounceRatio;let L;if(v<e.maxTranslate())c.freeMode.momentumBounce?(v+e.maxTranslate()<-k&&(v=e.maxTranslate()-k),A=e.maxTranslate(),$=!0,h.allowMomentumBounce=!0):v=e.maxTranslate(),c.loop&&c.centeredSlides&&(L=!0);else if(v>e.minTranslate())c.freeMode.momentumBounce?(v-e.minTranslate()>k&&(v=e.minTranslate()+k),A=e.minTranslate(),$=!0,h.allowMomentumBounce=!0):v=e.minTranslate(),c.loop&&c.centeredSlides&&(L=!0);else if(c.freeMode.sticky){let T;for(let B=0;B<w.length;B+=1)if(w[B]>-v){T=B;break}Math.abs(w[T]-v)<Math.abs(w[T-1]-v)||e.swipeDirection==="next"?v=w[T]:v=w[T-1],v=-v}if(L&&l("transitionEnd",()=>{e.loopFix()}),e.velocity!==0){if(o?S=Math.abs((-v-e.translate)/e.velocity):S=Math.abs((v-e.translate)/e.velocity),c.freeMode.sticky){const T=Math.abs((o?-v:v)-e.translate),B=e.slidesSizesGrid[e.activeIndex];T<B?S=c.speed:T<2*B?S=c.speed*1.5:S=c.speed*2.5}}else if(c.freeMode.sticky){e.slideToClosest();return}c.freeMode.momentumBounce&&$?(e.updateProgress(A),e.setTransition(S),e.setTranslate(v),e.transitionStart(!0,e.swipeDirection),e.animating=!0,p.transitionEnd(()=>{!e||e.destroyed||!h.allowMomentumBounce||(i("momentumBounce"),e.setTransition(c.speed),setTimeout(()=>{e.setTranslate(A),p.transitionEnd(()=>{!e||e.destroyed||e.transitionEnd()})},0))})):e.velocity?(i("_freeModeNoMomentumRelease"),e.updateProgress(v),e.setTransition(S),e.setTranslate(v),e.transitionStart(!0,e.swipeDirection),e.animating||(e.animating=!0,p.transitionEnd(()=>{!e||e.destroyed||e.transitionEnd()}))):e.updateProgress(v),e.updateActiveIndex(),e.updateSlidesClasses()}else if(c.freeMode.sticky){e.slideToClosest();return}else c.freeMode&&i("_freeModeNoMomentumRelease");(!c.freeMode.momentum||b>=c.longSwipesMs)&&(e.updateProgress(),e.updateActiveIndex(),e.updateSlidesClasses())}Object.assign(e,{freeMode:{onTouchStart:n,onTouchMove:r,onTouchEnd:a}})}function Bs(s){let{swiper:e,extendParams:t}=s;t({grid:{rows:1,fill:"column"}});let i,l,n;const r=u=>{const{slidesPerView:c}=e.params,{rows:p,fill:o}=e.params.grid;l=i/p,n=Math.floor(u/p),Math.floor(u/p)===u/p?i=u:i=Math.ceil(u/p)*p,c!=="auto"&&o==="row"&&(i=Math.max(i,c*p))},a=(u,c,p,o)=>{const{slidesPerGroup:w,spaceBetween:h}=e.params,{rows:_,fill:b}=e.params.grid;let S,y,v;if(b==="row"&&w>1){const $=Math.floor(u/(w*_)),A=u-_*w*$,k=$===0?w:Math.min(Math.ceil((p-$*_*w)/_),w);v=Math.floor(A/k),y=A-v*k+$*w,S=y+v*i/_,c.css({"-webkit-order":S,order:S})}else b==="column"?(y=Math.floor(u/_),v=u-y*_,(y>n||y===n&&v===_-1)&&(v+=1,v>=_&&(v=0,y+=1))):(v=Math.floor(u/l),y=u-v*l);c.css(o("margin-top"),v!==0?h&&`${h}px`:"")},d=(u,c,p)=>{const{spaceBetween:o,centeredSlides:w,roundLengths:h}=e.params,{rows:_}=e.params.grid;if(e.virtualSize=(u+o)*i,e.virtualSize=Math.ceil(e.virtualSize/_)-o,e.$wrapperEl.css({[p("width")]:`${e.virtualSize+o}px`}),w){c.splice(0,c.length);const b=[];for(let S=0;S<c.length;S+=1){let y=c[S];h&&(y=Math.floor(y)),c[S]<e.virtualSize+c[0]&&b.push(y)}c.push(...b)}};e.grid={initSlides:r,updateSlide:a,updateWrapperSize:d}}function Oe(s){const{effect:e,swiper:t,on:i,setTranslate:l,setTransition:n,overwriteParams:r,perspective:a}=s;i("beforeInit",()=>{if(t.params.effect!==e)return;t.classNames.push(`${t.params.containerModifierClass}${e}`),a&&a()&&t.classNames.push(`${t.params.containerModifierClass}3d`);const u=r?r():{};Object.assign(t.params,u),Object.assign(t.originalParams,u)}),i("setTranslate",()=>{t.params.effect===e&&l()}),i("setTransition",(u,c)=>{t.params.effect===e&&n(c)});let d;i("virtualUpdate",()=>{t.slides.length||(d=!0),requestAnimationFrame(()=>{d&&t.slides.length&&(l(),d=!1)})})}function Ve(s,e){return s.transformEl?e.find(s.transformEl).css({"backface-visibility":"hidden","-webkit-backface-visibility":"hidden"}):e}function os(s){let{swiper:e,duration:t,transformEl:i,allSlides:l}=s;const{slides:n,activeIndex:r,$wrapperEl:a}=e;if(e.params.virtualTranslate&&t!==0){let d=!1,u;l?u=i?n.find(i):n:u=i?n.eq(r).find(i):n.eq(r),u.transitionEnd(()=>{if(d||!e||e.destroyed)return;d=!0,e.animating=!1;const c=["webkitTransitionEnd","transitionend"];for(let p=0;p<c.length;p+=1)a.trigger(c[p])})}}function jr(s){let{swiper:e,extendParams:t,on:i}=s;t({fadeEffect:{crossFade:!1,transformEl:null}}),Oe({effect:"fade",swiper:e,on:i,setTranslate:()=>{const{slides:r}=e,a=e.params.fadeEffect;for(let d=0;d<r.length;d+=1){const u=e.slides.eq(d);let p=-u[0].swiperSlideOffset;e.params.virtualTranslate||(p-=e.translate);let o=0;e.isHorizontal()||(o=p,p=0);const w=e.params.fadeEffect.crossFade?Math.max(1-Math.abs(u[0].progress),0):1+Math.min(Math.max(u[0].progress,-1),0);Ve(a,u).css({opacity:w}).transform(`translate3d(${p}px, ${o}px, 0px)`)}},setTransition:r=>{const{transformEl:a}=e.params.fadeEffect;(a?e.slides.find(a):e.slides).transition(r),os({swiper:e,duration:r,transformEl:a,allSlides:!0})},overwriteParams:()=>({slidesPerView:1,slidesPerGroup:1,watchSlidesProgress:!0,spaceBetween:0,virtualTranslate:!e.params.cssMode})})}function Br(s){let{swiper:e,extendParams:t,on:i}=s;t({cubeEffect:{slideShadows:!0,shadow:!0,shadowOffset:20,shadowScale:.94}}),Oe({effect:"cube",swiper:e,on:i,setTranslate:()=>{const{$el:r,$wrapperEl:a,slides:d,width:u,height:c,rtlTranslate:p,size:o,browser:w}=e,h=e.params.cubeEffect,_=e.isHorizontal(),b=e.virtual&&e.params.virtual.enabled;let S=0,y;h.shadow&&(_?(y=a.find(".swiper-cube-shadow"),y.length===0&&(y=O('<div class="swiper-cube-shadow"></div>'),a.append(y)),y.css({height:`${u}px`})):(y=r.find(".swiper-cube-shadow"),y.length===0&&(y=O('<div class="swiper-cube-shadow"></div>'),r.append(y))));for(let $=0;$<d.length;$+=1){const A=d.eq($);let k=$;b&&(k=parseInt(A.attr("data-swiper-slide-index"),10));let L=k*90,T=Math.floor(L/360);p&&(L=-L,T=Math.floor(-L/360));const B=Math.max(Math.min(A[0].progress,1),-1);let x=0,z=0,M=0;k%4===0?(x=-T*4*o,M=0):(k-1)%4===0?(x=0,M=-T*4*o):(k-2)%4===0?(x=o+T*4*o,M=o):(k-3)%4===0&&(x=-o,M=3*o+o*4*T),p&&(x=-x),_||(z=x,x=0);const N=`rotateX(${_?0:-L}deg) rotateY(${_?L:0}deg) translate3d(${x}px, ${z}px, ${M}px)`;if(B<=1&&B>-1&&(S=k*90+B*90,p&&(S=-k*90-B*90)),A.transform(N),h.slideShadows){let j=_?A.find(".swiper-slide-shadow-left"):A.find(".swiper-slide-shadow-top"),U=_?A.find(".swiper-slide-shadow-right"):A.find(".swiper-slide-shadow-bottom");j.length===0&&(j=O(`<div class="swiper-slide-shadow-${_?"left":"top"}"></div>`),A.append(j)),U.length===0&&(U=O(`<div class="swiper-slide-shadow-${_?"right":"bottom"}"></div>`),A.append(U)),j.length&&(j[0].style.opacity=Math.max(-B,0)),U.length&&(U[0].style.opacity=Math.max(B,0))}}if(a.css({"-webkit-transform-origin":`50% 50% -${o/2}px`,"transform-origin":`50% 50% -${o/2}px`}),h.shadow)if(_)y.transform(`translate3d(0px, ${u/2+h.shadowOffset}px, ${-u/2}px) rotateX(90deg) rotateZ(0deg) scale(${h.shadowScale})`);else{const $=Math.abs(S)-Math.floor(Math.abs(S)/90)*90,A=1.5-(Math.sin($*2*Math.PI/360)/2+Math.cos($*2*Math.PI/360)/2),k=h.shadowScale,L=h.shadowScale/A,T=h.shadowOffset;y.transform(`scale3d(${k}, 1, ${L}) translate3d(0px, ${c/2+T}px, ${-c/2/L}px) rotateX(-90deg)`)}const v=w.isSafari||w.isWebView?-o/2:0;a.transform(`translate3d(0px,0,${v}px) rotateX(${e.isHorizontal()?0:S}deg) rotateY(${e.isHorizontal()?-S:0}deg)`)},setTransition:r=>{const{$el:a,slides:d}=e;d.transition(r).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(r),e.params.cubeEffect.shadow&&!e.isHorizontal()&&a.find(".swiper-cube-shadow").transition(r)},perspective:()=>!0,overwriteParams:()=>({slidesPerView:1,slidesPerGroup:1,watchSlidesProgress:!0,resistanceRatio:0,spaceBetween:0,centeredSlides:!1,virtualTranslate:!0})})}function ze(s,e,t){const i=`swiper-slide-shadow${t?`-${t}`:""}`,l=s.transformEl?e.find(s.transformEl):e;let n=l.children(`.${i}`);return n.length||(n=O(`<div class="swiper-slide-shadow${t?`-${t}`:""}"></div>`),l.append(n)),n}function Dr(s){let{swiper:e,extendParams:t,on:i}=s;t({flipEffect:{slideShadows:!0,limitRotation:!0,transformEl:null}}),Oe({effect:"flip",swiper:e,on:i,setTranslate:()=>{const{slides:r,rtlTranslate:a}=e,d=e.params.flipEffect;for(let u=0;u<r.length;u+=1){const c=r.eq(u);let p=c[0].progress;e.params.flipEffect.limitRotation&&(p=Math.max(Math.min(c[0].progress,1),-1));const o=c[0].swiperSlideOffset;let h=-180*p,_=0,b=e.params.cssMode?-o-e.translate:-o,S=0;if(e.isHorizontal()?a&&(h=-h):(S=b,b=0,_=-h,h=0),c[0].style.zIndex=-Math.abs(Math.round(p))+r.length,d.slideShadows){let $=e.isHorizontal()?c.find(".swiper-slide-shadow-left"):c.find(".swiper-slide-shadow-top"),A=e.isHorizontal()?c.find(".swiper-slide-shadow-right"):c.find(".swiper-slide-shadow-bottom");$.length===0&&($=ze(d,c,e.isHorizontal()?"left":"top")),A.length===0&&(A=ze(d,c,e.isHorizontal()?"right":"bottom")),$.length&&($[0].style.opacity=Math.max(-p,0)),A.length&&(A[0].style.opacity=Math.max(p,0))}const y=`translate3d(${b}px, ${S}px, 0px) rotateX(${_}deg) rotateY(${h}deg)`;Ve(d,c).transform(y)}},setTransition:r=>{const{transformEl:a}=e.params.flipEffect;(a?e.slides.find(a):e.slides).transition(r).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(r),os({swiper:e,duration:r,transformEl:a})},perspective:()=>!0,overwriteParams:()=>({slidesPerView:1,slidesPerGroup:1,watchSlidesProgress:!0,spaceBetween:0,virtualTranslate:!e.params.cssMode})})}function Gr(s){let{swiper:e,extendParams:t,on:i}=s;t({coverflowEffect:{rotate:50,stretch:0,depth:100,scale:1,modifier:1,slideShadows:!0,transformEl:null}}),Oe({effect:"coverflow",swiper:e,on:i,setTranslate:()=>{const{width:r,height:a,slides:d,slidesSizesGrid:u}=e,c=e.params.coverflowEffect,p=e.isHorizontal(),o=e.translate,w=p?-o+r/2:-o+a/2,h=p?c.rotate:-c.rotate,_=c.depth;for(let b=0,S=d.length;b<S;b+=1){const y=d.eq(b),v=u[b],$=y[0].swiperSlideOffset,A=(w-$-v/2)/v,k=typeof c.modifier=="function"?c.modifier(A):A*c.modifier;let L=p?h*k:0,T=p?0:h*k,B=-_*Math.abs(k),x=c.stretch;typeof x=="string"&&x.indexOf("%")!==-1&&(x=parseFloat(c.stretch)/100*v);let z=p?0:x*k,M=p?x*k:0,N=1-(1-c.scale)*Math.abs(k);Math.abs(M)<.001&&(M=0),Math.abs(z)<.001&&(z=0),Math.abs(B)<.001&&(B=0),Math.abs(L)<.001&&(L=0),Math.abs(T)<.001&&(T=0),Math.abs(N)<.001&&(N=0);const j=`translate3d(${M}px,${z}px,${B}px)  rotateX(${T}deg) rotateY(${L}deg) scale(${N})`;if(Ve(c,y).transform(j),y[0].style.zIndex=-Math.abs(Math.round(k))+1,c.slideShadows){let J=p?y.find(".swiper-slide-shadow-left"):y.find(".swiper-slide-shadow-top"),C=p?y.find(".swiper-slide-shadow-right"):y.find(".swiper-slide-shadow-bottom");J.length===0&&(J=ze(c,y,p?"left":"top")),C.length===0&&(C=ze(c,y,p?"right":"bottom")),J.length&&(J[0].style.opacity=k>0?k:0),C.length&&(C[0].style.opacity=-k>0?-k:0)}}},setTransition:r=>{const{transformEl:a}=e.params.coverflowEffect;(a?e.slides.find(a):e.slides).transition(r).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(r)},perspective:()=>!0,overwriteParams:()=>({watchSlidesProgress:!0})})}function Rr(s){let{swiper:e,extendParams:t,on:i}=s;t({creativeEffect:{transformEl:null,limitProgress:1,shadowPerProgress:!1,progressMultiplier:1,perspective:!0,prev:{translate:[0,0,0],rotate:[0,0,0],opacity:1,scale:1},next:{translate:[0,0,0],rotate:[0,0,0],opacity:1,scale:1}}});const l=a=>typeof a=="string"?a:`${a}px`;Oe({effect:"creative",swiper:e,on:i,setTranslate:()=>{const{slides:a,$wrapperEl:d,slidesSizesGrid:u}=e,c=e.params.creativeEffect,{progressMultiplier:p}=c,o=e.params.centeredSlides;if(o){const w=u[0]/2-e.params.slidesOffsetBefore||0;d.transform(`translateX(calc(50% - ${w}px))`)}for(let w=0;w<a.length;w+=1){const h=a.eq(w),_=h[0].progress,b=Math.min(Math.max(h[0].progress,-c.limitProgress),c.limitProgress);let S=b;o||(S=Math.min(Math.max(h[0].originalProgress,-c.limitProgress),c.limitProgress));const y=h[0].swiperSlideOffset,v=[e.params.cssMode?-y-e.translate:-y,0,0],$=[0,0,0];let A=!1;e.isHorizontal()||(v[1]=v[0],v[0]=0);let k={translate:[0,0,0],rotate:[0,0,0],scale:1,opacity:1};b<0?(k=c.next,A=!0):b>0&&(k=c.prev,A=!0),v.forEach((N,j)=>{v[j]=`calc(${N}px + (${l(k.translate[j])} * ${Math.abs(b*p)}))`}),$.forEach((N,j)=>{$[j]=k.rotate[j]*Math.abs(b*p)}),h[0].style.zIndex=-Math.abs(Math.round(_))+a.length;const L=v.join(", "),T=`rotateX(${$[0]}deg) rotateY(${$[1]}deg) rotateZ(${$[2]}deg)`,B=S<0?`scale(${1+(1-k.scale)*S*p})`:`scale(${1-(1-k.scale)*S*p})`,x=S<0?1+(1-k.opacity)*S*p:1-(1-k.opacity)*S*p,z=`translate3d(${L}) ${T} ${B}`;if(A&&k.shadow||!A){let N=h.children(".swiper-slide-shadow");if(N.length===0&&k.shadow&&(N=ze(c,h)),N.length){const j=c.shadowPerProgress?b*(1/c.limitProgress):b;N[0].style.opacity=Math.min(Math.max(Math.abs(j),0),1)}}const M=Ve(c,h);M.transform(z).css({opacity:x}),k.origin&&M.css("transform-origin",k.origin)}},setTransition:a=>{const{transformEl:d}=e.params.creativeEffect;(d?e.slides.find(d):e.slides).transition(a).find(".swiper-slide-shadow").transition(a),os({swiper:e,duration:a,transformEl:d,allSlides:!0})},perspective:()=>e.params.creativeEffect.perspective,overwriteParams:()=>({watchSlidesProgress:!0,virtualTranslate:!e.params.cssMode})})}function Ce(s){return typeof s=="object"&&s!==null&&s.constructor&&Object.prototype.toString.call(s).slice(8,-1)==="Object"}function ve(s,e){const t=["__proto__","constructor","prototype"];Object.keys(e).filter(i=>t.indexOf(i)<0).forEach(i=>{typeof s[i]=="undefined"?s[i]=e[i]:Ce(e[i])&&Ce(s[i])&&Object.keys(e[i]).length>0?e[i].__swiper__?s[i]=e[i]:ve(s[i],e[i]):s[i]=e[i]})}function Ds(s){return s===void 0&&(s={}),s.navigation&&typeof s.navigation.nextEl=="undefined"&&typeof s.navigation.prevEl=="undefined"}function Gs(s){return s===void 0&&(s={}),s.pagination&&typeof s.pagination.el=="undefined"}function Rs(s){return s===void 0&&(s={}),s.scrollbar&&typeof s.scrollbar.el=="undefined"}function Hs(s){s===void 0&&(s="");const e=s.split(" ").map(i=>i.trim()).filter(i=>!!i),t=[];return e.forEach(i=>{t.indexOf(i)<0&&t.push(i)}),t.join(" ")}const Vs=["modules","init","_direction","touchEventsTarget","initialSlide","_speed","cssMode","updateOnWindowResize","resizeObserver","nested","focusableElements","_enabled","_width","_height","preventInteractionOnTransition","userAgent","url","_edgeSwipeDetection","_edgeSwipeThreshold","_freeMode","_autoHeight","setWrapperSize","virtualTranslate","_effect","breakpoints","_spaceBetween","_slidesPerView","maxBackfaceHiddenSlides","_grid","_slidesPerGroup","_slidesPerGroupSkip","_slidesPerGroupAuto","_centeredSlides","_centeredSlidesBounds","_slidesOffsetBefore","_slidesOffsetAfter","normalizeSlideIndex","_centerInsufficientSlides","_watchOverflow","roundLengths","touchRatio","touchAngle","simulateTouch","_shortSwipes","_longSwipes","longSwipesRatio","longSwipesMs","_followFinger","allowTouchMove","_threshold","touchMoveStopPropagation","touchStartPreventDefault","touchStartForcePreventDefault","touchReleaseOnEdges","uniqueNavElements","_resistance","_resistanceRatio","_watchSlidesProgress","_grabCursor","preventClicks","preventClicksPropagation","_slideToClickedSlide","_preloadImages","updateOnImagesReady","_loop","_loopAdditionalSlides","_loopedSlides","_loopFillGroupWithBlank","loopPreventsSlide","_rewind","_allowSlidePrev","_allowSlideNext","_swipeHandler","_noSwiping","noSwipingClass","noSwipingSelector","passiveListeners","containerModifierClass","slideClass","slideBlankClass","slideActiveClass","slideDuplicateActiveClass","slideVisibleClass","slideDuplicateClass","slideNextClass","slideDuplicateNextClass","slidePrevClass","slideDuplicatePrevClass","wrapperClass","runCallbacksOnInit","observer","observeParents","observeSlideChildren","a11y","_autoplay","_controller","coverflowEffect","cubeEffect","fadeEffect","flipEffect","creativeEffect","cardsEffect","hashNavigation","history","keyboard","lazy","mousewheel","_navigation","_pagination","parallax","_scrollbar","_thumbs","virtual","zoom"];function $s(s){s===void 0&&(s={});const e={on:{}},t={};ve(e,ae.defaults),ve(e,ae.extendedDefaults),e._emitClasses=!0,e.init=!1;const i={},l=Vs.map(r=>r.replace(/_/,"")),n=Object.assign({},s);return Object.keys(n).forEach(r=>{typeof s[r]!="undefined"&&(l.indexOf(r)>=0?Ce(s[r])?(e[r]={},t[r]={},ve(e[r],s[r]),ve(t[r],s[r])):(e[r]=s[r],t[r]=s[r]):r.search(/on[A-Z]/)===0&&typeof s[r]=="function"?e.on[`${r[2].toLowerCase()}${r.substr(3)}`]=s[r]:i[r]=s[r])}),["navigation","pagination","scrollbar"].forEach(r=>{e[r]===!0&&(e[r]={}),e[r]===!1&&delete e[r]}),{params:e,passedParams:t,rest:i}}function Hr(s){return new ae(s)}function Vr(s,e){let{el:t,nextEl:i,prevEl:l,paginationEl:n,scrollbarEl:r,swiper:a}=s;Ds(e)&&i&&l&&(a.params.navigation.nextEl=i,a.originalParams.navigation.nextEl=i,a.params.navigation.prevEl=l,a.originalParams.navigation.prevEl=l),Gs(e)&&n&&(a.params.pagination.el=n,a.originalParams.pagination.el=n),Rs(e)&&r&&(a.params.scrollbar.el=r,a.originalParams.scrollbar.el=r),a.init(t)}function Ws(s,e){let t=e.slidesPerView;if(e.breakpoints){const l=ae.prototype.getBreakpoint(e.breakpoints),n=l in e.breakpoints?e.breakpoints[l]:void 0;n&&n.slidesPerView&&(t=n.slidesPerView)}let i=Math.ceil(parseFloat(e.loopedSlides||t,10));return i+=e.loopAdditionalSlides,i>s.length&&(i=s.length),i}function Wr(s,e,t){const i=e.map((d,u)=>(d.props||(d.props={}),d.props.swiperRef=s,d.props["data-swiper-slide-index"]=u,d));function l(d,u,c){return d.props||(d.props={}),ne(d.type,hs(ke({},d.props),{key:`${d.key}-duplicate-${u}-${c}`,class:`${d.props.className||""} ${t.slideDuplicateClass} ${d.props.class||""}`}),d.children)}if(t.loopFillGroupWithBlank){const d=t.slidesPerGroup-i.length%t.slidesPerGroup;if(d!==t.slidesPerGroup)for(let u=0;u<d;u+=1){const c=ne("div",{class:`${t.slideClass} ${t.slideBlankClass}`});i.push(c)}}t.slidesPerView==="auto"&&!t.loopedSlides&&(t.loopedSlides=i.length);const n=Ws(i,t),r=[],a=[];return i.forEach((d,u)=>{u<n&&a.push(l(d,u,"prepend")),u<i.length&&u>=i.length-n&&r.push(l(d,u,"append"))}),s.value&&(s.value.loopedSlides=n),[...r,...i,...a]}function Fr(s,e,t,i){const l=[];if(!e)return l;const n=u=>{l.indexOf(u)<0&&l.push(u)},r=i.map(u=>u.props&&u.props.key),a=t.map(u=>u.props&&u.props.key);return r.join("")!==a.join("")&&l.push("children"),i.length!==t.length&&l.push("children"),Vs.filter(u=>u[0]==="_").map(u=>u.replace(/_/,"")).forEach(u=>{if(u in s&&u in e)if(Ce(s[u])&&Ce(e[u])){const c=Object.keys(s[u]),p=Object.keys(e[u]);c.length!==p.length?n(u):(c.forEach(o=>{s[u][o]!==e[u][o]&&n(u)}),p.forEach(o=>{s[u][o]!==e[u][o]&&n(u)}))}else s[u]!==e[u]&&n(u)}),l}function es(s,e,t){s===void 0&&(s={});const i=[],l={"container-start":[],"container-end":[],"wrapper-start":[],"wrapper-end":[]},n=(r,a)=>{!Array.isArray(r)||r.forEach(d=>{const u=typeof d.type=="symbol";a==="default"&&(a="container-end"),u&&d.children?n(d.children,"default"):d.type&&(d.type.name==="SwiperSlide"||d.type.name==="AsyncComponentWrapper")?i.push(d):l[a]&&l[a].push(d)})};return Object.keys(s).forEach(r=>{if(typeof s[r]!="function")return;const a=s[r]();n(a,r)}),t.value=e.value,e.value=i,{slides:i,slots:l}}function qr(s){let{swiper:e,slides:t,passedParams:i,changedParams:l,nextEl:n,prevEl:r,paginationEl:a,scrollbarEl:d}=s;const u=l.filter(k=>k!=="children"&&k!=="direction"),{params:c,pagination:p,navigation:o,scrollbar:w,virtual:h,thumbs:_}=e;let b,S,y,v,$;l.includes("thumbs")&&i.thumbs&&i.thumbs.swiper&&c.thumbs&&!c.thumbs.swiper&&(b=!0),l.includes("controller")&&i.controller&&i.controller.control&&c.controller&&!c.controller.control&&(S=!0),l.includes("pagination")&&i.pagination&&(i.pagination.el||a)&&(c.pagination||c.pagination===!1)&&p&&!p.el&&(y=!0),l.includes("scrollbar")&&i.scrollbar&&(i.scrollbar.el||d)&&(c.scrollbar||c.scrollbar===!1)&&w&&!w.el&&(v=!0),l.includes("navigation")&&i.navigation&&(i.navigation.prevEl||r)&&(i.navigation.nextEl||n)&&(c.navigation||c.navigation===!1)&&o&&!o.prevEl&&!o.nextEl&&($=!0);const A=k=>{!e[k]||(e[k].destroy(),k==="navigation"?(c[k].prevEl=void 0,c[k].nextEl=void 0,e[k].prevEl=void 0,e[k].nextEl=void 0):(c[k].el=void 0,e[k].el=void 0))};u.forEach(k=>{if(Ce(c[k])&&Ce(i[k]))ve(c[k],i[k]);else{const L=i[k];(L===!0||L===!1)&&(k==="navigation"||k==="pagination"||k==="scrollbar")?L===!1&&A(k):c[k]=i[k]}}),l.includes("children")&&h&&c.virtual.enabled?(h.slides=t,h.update(!0)):l.includes("children")&&e.lazy&&e.params.lazy.enabled&&e.lazy.load(),b&&_.init()&&_.update(!0),S&&(e.controller.control=c.controller.control),y&&(a&&(c.pagination.el=a),p.init(),p.render(),p.update()),v&&(d&&(c.scrollbar.el=d),w.init(),w.updateSize(),w.setTranslate()),$&&(n&&(c.navigation.nextEl=n),r&&(c.navigation.prevEl=r),o.init(),o.update()),l.includes("allowSlideNext")&&(e.allowSlideNext=i.allowSlideNext),l.includes("allowSlidePrev")&&(e.allowSlidePrev=i.allowSlidePrev),l.includes("direction")&&e.changeDirection(i.direction,!1),e.update()}function Yr(s){!s||s.destroyed||!s.params.virtual||s.params.virtual&&!s.params.virtual.enabled||(s.updateSlides(),s.updateProgress(),s.updateSlidesClasses(),s.lazy&&s.params.lazy.enabled&&s.lazy.load(),s.parallax&&s.params.parallax&&s.params.parallax.enabled&&s.parallax.setTranslate())}function Xr(s,e,t){if(!t)return null;const i=s.value.isHorizontal()?{[s.value.rtlTranslate?"right":"left"]:`${t.offset}px`}:{top:`${t.offset}px`};return e.filter((l,n)=>n>=t.from&&n<=t.to).map(l=>(l.props||(l.props={}),l.props.style||(l.props.style={}),l.props.swiperRef=s,l.props.style=i,ne(l.type,ke({},l.props),l.children)))}const F={name:"Swiper",props:{tag:{type:String,default:"div"},wrapperTag:{type:String,default:"div"},modules:{type:Array,default:void 0},init:{type:Boolean,default:void 0},direction:{type:String,default:void 0},touchEventsTarget:{type:String,default:void 0},initialSlide:{type:Number,default:void 0},speed:{type:Number,default:void 0},cssMode:{type:Boolean,default:void 0},updateOnWindowResize:{type:Boolean,default:void 0},resizeObserver:{type:Boolean,default:void 0},nested:{type:Boolean,default:void 0},focusableElements:{type:String,default:void 0},width:{type:Number,default:void 0},height:{type:Number,default:void 0},preventInteractionOnTransition:{type:Boolean,default:void 0},userAgent:{type:String,default:void 0},url:{type:String,default:void 0},edgeSwipeDetection:{type:[Boolean,String],default:void 0},edgeSwipeThreshold:{type:Number,default:void 0},autoHeight:{type:Boolean,default:void 0},setWrapperSize:{type:Boolean,default:void 0},virtualTranslate:{type:Boolean,default:void 0},effect:{type:String,default:void 0},breakpoints:{type:Object,default:void 0},spaceBetween:{type:Number,default:void 0},slidesPerView:{type:[Number,String],default:void 0},maxBackfaceHiddenSlides:{type:Number,default:void 0},slidesPerGroup:{type:Number,default:void 0},slidesPerGroupSkip:{type:Number,default:void 0},slidesPerGroupAuto:{type:Boolean,default:void 0},centeredSlides:{type:Boolean,default:void 0},centeredSlidesBounds:{type:Boolean,default:void 0},slidesOffsetBefore:{type:Number,default:void 0},slidesOffsetAfter:{type:Number,default:void 0},normalizeSlideIndex:{type:Boolean,default:void 0},centerInsufficientSlides:{type:Boolean,default:void 0},watchOverflow:{type:Boolean,default:void 0},roundLengths:{type:Boolean,default:void 0},touchRatio:{type:Number,default:void 0},touchAngle:{type:Number,default:void 0},simulateTouch:{type:Boolean,default:void 0},shortSwipes:{type:Boolean,default:void 0},longSwipes:{type:Boolean,default:void 0},longSwipesRatio:{type:Number,default:void 0},longSwipesMs:{type:Number,default:void 0},followFinger:{type:Boolean,default:void 0},allowTouchMove:{type:Boolean,default:void 0},threshold:{type:Number,default:void 0},touchMoveStopPropagation:{type:Boolean,default:void 0},touchStartPreventDefault:{type:Boolean,default:void 0},touchStartForcePreventDefault:{type:Boolean,default:void 0},touchReleaseOnEdges:{type:Boolean,default:void 0},uniqueNavElements:{type:Boolean,default:void 0},resistance:{type:Boolean,default:void 0},resistanceRatio:{type:Number,default:void 0},watchSlidesProgress:{type:Boolean,default:void 0},grabCursor:{type:Boolean,default:void 0},preventClicks:{type:Boolean,default:void 0},preventClicksPropagation:{type:Boolean,default:void 0},slideToClickedSlide:{type:Boolean,default:void 0},preloadImages:{type:Boolean,default:void 0},updateOnImagesReady:{type:Boolean,default:void 0},loop:{type:Boolean,default:void 0},loopAdditionalSlides:{type:Number,default:void 0},loopedSlides:{type:Number,default:void 0},loopFillGroupWithBlank:{type:Boolean,default:void 0},loopPreventsSlide:{type:Boolean,default:void 0},rewind:{type:Boolean,default:void 0},allowSlidePrev:{type:Boolean,default:void 0},allowSlideNext:{type:Boolean,default:void 0},swipeHandler:{type:Boolean,default:void 0},noSwiping:{type:Boolean,default:void 0},noSwipingClass:{type:String,default:void 0},noSwipingSelector:{type:String,default:void 0},passiveListeners:{type:Boolean,default:void 0},containerModifierClass:{type:String,default:void 0},slideClass:{type:String,default:void 0},slideBlankClass:{type:String,default:void 0},slideActiveClass:{type:String,default:void 0},slideDuplicateActiveClass:{type:String,default:void 0},slideVisibleClass:{type:String,default:void 0},slideDuplicateClass:{type:String,default:void 0},slideNextClass:{type:String,default:void 0},slideDuplicateNextClass:{type:String,default:void 0},slidePrevClass:{type:String,default:void 0},slideDuplicatePrevClass:{type:String,default:void 0},wrapperClass:{type:String,default:void 0},runCallbacksOnInit:{type:Boolean,default:void 0},observer:{type:Boolean,default:void 0},observeParents:{type:Boolean,default:void 0},observeSlideChildren:{type:Boolean,default:void 0},a11y:{type:[Boolean,Object],default:void 0},autoplay:{type:[Boolean,Object],default:void 0},controller:{type:Object,default:void 0},coverflowEffect:{type:Object,default:void 0},cubeEffect:{type:Object,default:void 0},fadeEffect:{type:Object,default:void 0},flipEffect:{type:Object,default:void 0},creativeEffect:{type:Object,default:void 0},cardsEffect:{type:Object,default:void 0},hashNavigation:{type:[Boolean,Object],default:void 0},history:{type:[Boolean,Object],default:void 0},keyboard:{type:[Boolean,Object],default:void 0},lazy:{type:[Boolean,Object],default:void 0},mousewheel:{type:[Boolean,Object],default:void 0},navigation:{type:[Boolean,Object],default:void 0},pagination:{type:[Boolean,Object],default:void 0},parallax:{type:[Boolean,Object],default:void 0},scrollbar:{type:[Boolean,Object],default:void 0},thumbs:{type:Object,default:void 0},virtual:{type:[Boolean,Object],default:void 0},zoom:{type:[Boolean,Object],default:void 0},grid:{type:[Object],default:void 0},freeMode:{type:[Boolean,Object],default:void 0}},emits:["_beforeBreakpoint","_containerClasses","_slideClass","_slideClasses","_swiper","activeIndexChange","afterInit","autoplay","autoplayStart","autoplayStop","autoplayPause","autoplayResume","beforeDestroy","beforeInit","beforeLoopFix","beforeResize","beforeSlideChangeStart","beforeTransitionStart","breakpoint","changeDirection","click","disable","doubleTap","doubleClick","destroy","enable","fromEdge","hashChange","hashSet","imagesReady","init","keyPress","lazyImageLoad","lazyImageReady","lock","loopFix","momentumBounce","navigationHide","navigationShow","observerUpdate","orientationchange","paginationHide","paginationRender","paginationShow","paginationUpdate","progress","reachBeginning","reachEnd","realIndexChange","resize","scroll","scrollbarDragEnd","scrollbarDragMove","scrollbarDragStart","setTransition","setTranslate","slideChange","slideChangeTransitionEnd","slideChangeTransitionStart","slideNextTransitionEnd","slideNextTransitionStart","slidePrevTransitionEnd","slidePrevTransitionStart","slideResetTransitionStart","slideResetTransitionEnd","sliderMove","sliderFirstMove","slidesLengthChange","slidesGridLengthChange","snapGridLengthChange","snapIndexChange","swiper","tap","toEdge","touchEnd","touchMove","touchMoveOpposite","touchStart","transitionEnd","transitionStart","unlock","update","zoomChange"],setup(s,e){let{slots:t,emit:i}=e;const{tag:l,wrapperTag:n}=s,r=se("swiper"),a=se(null),d=se(!1),u=se(!1),c=se(null),p=se(null),o=se(null),w={value:[]},h={value:[]},_=se(null),b=se(null),S=se(null),y=se(null),{params:v,passedParams:$}=$s(s);es(t,w,h),o.value=$,h.value=w.value;const A=()=>{es(t,w,h),d.value=!0};if(v.onAny=function(L){for(var T=arguments.length,B=new Array(T>1?T-1:0),x=1;x<T;x++)B[x-1]=arguments[x];i(L,...B)},Object.assign(v.on,{_beforeBreakpoint:A,_containerClasses(L,T){r.value=T}}),p.value=Hr(v),p.value.loopCreate=()=>{},p.value.loopDestroy=()=>{},v.loop&&(p.value.loopedSlides=Ws(w.value,v)),p.value.virtual&&p.value.params.virtual.enabled){p.value.virtual.slides=w.value;const L={cache:!1,slides:w.value,renderExternal:T=>{a.value=T},renderExternalUpdate:!1};ve(p.value.params.virtual,L),ve(p.value.originalParams.virtual,L)}Es(()=>{!u.value&&p.value&&(p.value.emitSlidesClasses(),u.value=!0);const{passedParams:L}=$s(s),T=Fr(L,o.value,w.value,h.value);o.value=L,(T.length||d.value)&&p.value&&!p.value.destroyed&&qr({swiper:p.value,slides:w.value,passedParams:L,changedParams:T,nextEl:_.value,prevEl:b.value,scrollbarEl:y.value,paginationEl:S.value}),d.value=!1}),Ts("swiper",p),ht(a,()=>{ss(()=>{Yr(p.value)})}),ks(()=>{!c.value||(Vr({el:c.value,nextEl:_.value,prevEl:b.value,paginationEl:S.value,scrollbarEl:y.value,swiper:p.value},v),i("swiper",p.value))}),Ps(()=>{p.value&&!p.value.destroyed&&p.value.destroy(!0,!1)});function k(L){return v.virtual?Xr(p,L,a.value):!v.loop||p.value&&p.value.destroyed?(L.forEach(T=>{T.props||(T.props={}),T.props.swiperRef=p}),L):Wr(p,L,v)}return()=>{const{slides:L,slots:T}=es(t,w,h);return ne(l,{ref:c,class:Hs(r.value)},[T["container-start"],Ds(s)&&[ne("div",{ref:b,class:"swiper-button-prev"}),ne("div",{ref:_,class:"swiper-button-next"})],Rs(s)&&ne("div",{ref:y,class:"swiper-scrollbar"}),Gs(s)&&ne("div",{ref:S,class:"swiper-pagination"}),ne(n,{class:"swiper-wrapper"},[T["wrapper-start"],k(L),T["wrapper-end"]]),T["container-end"]])}}},q={name:"SwiperSlide",props:{tag:{type:String,default:"div"},swiperRef:{type:Object,required:!1},zoom:{type:Boolean,default:void 0},virtualIndex:{type:[String,Number],default:void 0}},setup(s,e){let{slots:t}=e,i=!1;const{swiperRef:l}=s,n=se(null),r=se("swiper-slide");function a(u,c,p){c===n.value&&(r.value=p)}ks(()=>{!l.value||(l.value.on("_slideClass",a),i=!0)}),wt(()=>{i||!l||!l.value||(l.value.on("_slideClass",a),i=!0)}),Es(()=>{!n.value||!l||!l.value||l.value.destroyed&&r.value!=="swiper-slide"&&(r.value="swiper-slide")}),Ps(()=>{!l||!l.value||l.value.off("_slideClass",a)});const d=pe(()=>({isActive:r.value.indexOf("swiper-slide-active")>=0||r.value.indexOf("swiper-slide-duplicate-active")>=0,isVisible:r.value.indexOf("swiper-slide-visible")>=0,isDuplicate:r.value.indexOf("swiper-slide-duplicate")>=0,isPrev:r.value.indexOf("swiper-slide-prev")>=0||r.value.indexOf("swiper-slide-duplicate-prev")>=0,isNext:r.value.indexOf("swiper-slide-next")>=0||r.value.indexOf("swiper-slide-duplicate-next")>=0}));return Ts("swiperSlide",d),()=>ne(s.tag,{class:Hs(`${r.value}`),ref:n,"data-swiper-slide-index":s.virtualIndex},s.zoom?ne("div",{class:"swiper-zoom-container","data-swiper-zoom":typeof s.zoom=="number"?s.zoom:void 0},t.default&&t.default(d.value)):t.default&&t.default(d.value))}};const Ur=G({setup(s){return(e,t)=>{const i=P("ulink");return I(),W(ce(F),{class:"swiper-mammon",direction:"vertical","css-mode":!0,modules:[ce(X),ce(He)],autoHeight:!0,loop:!0,pagination:{clickable:!0},autoplay:{delay:2600,disableOnInteraction:!1}},{default:f(()=>[(I(!0),V(ee,null,le(ce(st),(l,n)=>(I(),W(ce(q),{class:"slide",key:n},{default:f(()=>[m(i,{class:"link",href:l.url},{default:f(()=>[E("div",{style:Ge({backgroundImage:`url(${l.image})`}),class:"image"},null,4)]),_:2},1032,["href"])]),_:2},1024))),128))]),_:1},8,["modules"])}}});var Kr=R(Ur,[["__scopeId","data-v-48afefae"]]);const Zr={class:"image-mammon"},Jr=G({setup(s){return(e,t)=>{const i=P("ulink");return I(),V("div",Zr,[m(i,{class:"link",href:ce(ws).url},{default:f(()=>[E("div",{style:Ge({backgroundImage:`url(${ce(ws).image})`}),class:"image"},null,4)]),_:1},8,["href"])])}}});var Qr=R(Jr,[["__scopeId","data-v-fa1620e8"]]);const xs=["GoogleAdSense1","GoogleAdSense2","GoogleAdSense3"];var Fs=G({name:"mammon",props:{provider:{type:String,default:"GoogleAdSense1"}},setup(s){return()=>s.provider==="Image"?ne(Qr):s.provider==="Swiper"?ne(Kr):s.provider==="GoogleAdSense1"?ne(Ct):s.provider==="GoogleAdSense2"?ne(Tt):s.provider==="GoogleAdSense3"?ne(Pt):null}});const en=G({name:"skeleton",props:{width:Number,height:Number,circle:{type:Boolean,default:!1},radius:{type:Number,default:2}},setup(s){return{style:pe(()=>ke(ke({borderRadius:s.circle?"100%":`${s.radius}px`},s.width&&{width:s.width+"px"}),s.height&&{height:s.height+"px"}))}}});function sn(s,e,t,i,l,n){return I(),V("div",{class:"skeleton",style:Ge(s.style)},null,4)}var tn=R(en,[["render",sn],["__scopeId","data-v-1b87521a"]]);const rn=G({name:"homepage-footer",props:{repository:{type:String,required:!0}},setup(){return{CONFIG:tt,getGitHubRepositoryURL:rs}}}),nn=s=>(fe("data-v-d050f85e"),s=s(),me(),s),ln={class:"footer"},an={class:"container"},on={class:"footer-content"},dn=nn(()=>E("span",null," is maintained by ",-1));function pn(s,e,t,i,l,n){const r=P("ulink");return I(),V("footer",ln,[E("div",an,[E("span",on,[m(r,{href:s.getGitHubRepositoryURL(s.repository)},{default:f(()=>[g(ie(s.repository),1)]),_:1},8,["href"]),dn,m(r,{href:s.CONFIG.GITHUB_USER_URL},{default:f(()=>[g("@"+ie(s.CONFIG.GITHUB_UID),1)]),_:1},8,["href"])])])])}var cn=R(rn,[["render",pn],["__scopeId","data-v-d050f85e"]]);const un=G({name:"homepage-card",props:{title:String,titleLink:String,contentClass:{type:String,required:!1,default:""}}}),fn=s=>(fe("data-v-1eec6dec"),s=s(),me(),s),mn={class:"homepage-card"},hn={key:0,class:"header"},wn=fn(()=>E("i",{class:"iconfont icon-link-external"},null,-1)),gn={key:1};function _n(s,e,t,i,l,n){const r=P("ulink");return I(),V("div",mn,[s.title?(I(),V("div",hn,[s.titleLink?(I(),W(r,{key:0,href:s.titleLink,class:"link"},{default:f(()=>[E("span",null,ie(s.title),1),wn]),_:1},8,["href"])):(I(),V("span",gn,ie(s.title),1)),be(s.$slots,"actions",{},void 0,!0)])):ue("",!0),E("div",{class:Se(["content",s.contentClass])},[be(s.$slots,"default",{},void 0,!0)],2)])}var qs=R(un,[["render",_n],["__scopeId","data-v-1eec6dec"]]);const vn=G({name:"homepage-toolbox",props:{repository:{type:String,required:!0}},setup(s){return{repoURL:rs(s.repository),handleToPageTop:()=>{window.scrollTo({top:0,behavior:"smooth"})}}}}),Ys=s=>(fe("data-v-1c0558d6"),s=s(),me(),s),Sn={id:"toolbox"},bn={class:"container"},yn={class:"tools"},$n=Ys(()=>E("i",{class:"iconfont icon-github"},null,-1)),xn=Ys(()=>E("i",{class:"iconfont icon-arrow-up"},null,-1)),Cn=[xn];function En(s,e,t,i,l,n){const r=P("ulink");return I(),V("div",Sn,[E("div",bn,[E("div",yn,[m(r,{class:"item github",title:"to GitHub homepage",href:s.repoURL},{default:f(()=>[$n]),_:1},8,["href"]),E("button",{class:"item to-top",onClick:e[0]||(e[0]=(...a)=>s.handleToPageTop&&s.handleToPageTop(...a))},Cn)])])])}var Tn=R(vn,[["render",En],["__scopeId","data-v-1c0558d6"]]);const kn=G({name:"homepage-button",props:{link:{type:String,required:!0},icon:{type:String,required:!0},text:{type:String,required:!1},count:{type:Number,required:!1},countIcon:{type:String,required:!1},countText:{type:String,required:!1},countLink:{type:String,required:!1}},setup(s){const e=pe(()=>Number.isFinite(s.count)||s.countText),t=pe(()=>s.countText?s.countText:e?ot(s.count):null);return{hasCount:e,countContent:t}}}),Pn={class:"homepage-button"},Mn={key:0,class:"text"};function zn(s,e,t,i,l,n){const r=P("ulink");return I(),V("span",Pn,[m(r,{href:s.link,class:"item button"},{default:f(()=>[E("i",{class:Se(["iconfont",s.icon])},null,2),s.text?(I(),V("span",Mn,ie(s.text),1)):ue("",!0),be(s.$slots,"default",{},void 0,!0)]),_:3},8,["href"]),s.hasCount?(I(),W(r,{key:0,class:"item count",href:s.countLink||s.link},{default:f(()=>[s.countIcon?(I(),V("i",{key:0,class:Se(["iconfont",s.countIcon])},null,2)):ue("",!0),m(De,{name:"module",mode:"out-in"},{default:f(()=>[(I(),V("span",{key:s.countContent||"null"},ie(s.countContent),1))]),_:1})]),_:1},8,["href"])):ue("",!0)])}var In=R(kn,[["render",zn],["__scopeId","data-v-a83c9d4e"]]);const On=G({name:"loading"}),An={class:"loading"},Ln={class:"animation"};function Nn(s,e,t,i,l,n){return I(),V("div",An,[E("div",Ln,[(I(),V(ee,null,le(5,r=>E("div",{key:r})),64))])])}var jn=R(On,[["render",Nn],["__scopeId","data-v-37e37832"]]);const Bn=G({name:"homepage",components:{Mammon:Fs,Loading:jn,Skeleton:tn,Navbar:dt,HomepageFooter:cn,HomepageCard:qs,HomepageToolbox:Tn,GithubButton:In},props:{repository:{type:String,required:!0},headerAdProvider:{type:String,required:!1},footerAdProvider:{type:String,required:!1}},setup(s){const e=it(),t=pe(()=>e.initialized),i=pt(s.repository),l=rs(s.repository),n=pe(()=>{var c;return(c=r.value)==null?void 0:c.description}),r=pe(()=>e.getGitHubRepositoryDetail(s.repository)),a=pe(()=>e.githubRepositories),d=pe(()=>{const c=e.npmPackagesDownloadsMap.get(s.repository);return c?ct(c):"0"}),u=pe(()=>e.githubNPMRepositories.map(({name:c})=>c).includes(s.repository));return{initialized:t,isNPMPackage:u,repoUrl:l,repoDescription:n,repoDetail:r,packageDownloads:d,appRepositories:a,npmUrl:i}}}),Dn={class:"home-page"},Gn={class:"main"},Rn={class:"banner",key:"skeleton"},Hn={class:"title-skeleton"},Vn={class:"subtitle-skeleton"},Wn={class:"buttons-skeleton"},Fn={class:"banner",key:"banner"},qn={key:0,class:"archived"},Yn={class:"title"},Xn={class:"subtitle"},Un={class:"buttons"},Kn={class:"actions"},Zn={class:"container"};function Jn(s,e,t,i,l,n){const r=P("navbar"),a=P("skeleton"),d=P("github-button"),u=P("mammon"),c=P("homepage-card"),p=P("Loading"),o=P("homepage-footer"),w=P("homepage-toolbox");return I(),V("div",Dn,[m(r,{repository:s.repository},null,8,["repository"]),E("main",Gn,[m(De,{name:"module",mode:"out-in"},{default:f(()=>{var h,_,b,S;return[s.initialized?(I(),V("div",Fn,[(h=s.repoDetail)!=null&&h.archived?(I(),V("p",qn," \u26A0\uFE0F This repository has been archived. It is now read-only. ")):ue("",!0),E("h1",Yn,ie(s.repository),1),E("h4",Xn,ie(s.repoDescription||"..."),1),E("div",Un,[m(d,{link:s.repoUrl,count:((_=s.repoDetail)==null?void 0:_.stargazers_count)||0,countLink:`${s.repoUrl}/stargazers`,icon:"icon-github",class:"item",text:"Star"},null,8,["link","count","countLink"]),m(d,{link:`${s.repoUrl}/issues`,count:((b=s.repoDetail)==null?void 0:b.open_issues_count)||0,icon:"icon-issue",class:"item",text:"Issue"},null,8,["link","count"]),m(d,{link:`${s.repoUrl}/fork`,count:((S=s.repoDetail)==null?void 0:S.forks)||0,icon:"icon-fork",class:"item",text:"Fork"},null,8,["link","count"]),m(d,{class:"item",icon:"icon-download",text:"Download",link:`${s.repoUrl}/archive/master.zip`,"count-icon":s.isNPMPackage?"icon-npm":void 0,"count-link":s.isNPMPackage?s.npmUrl:void 0,"count-text":s.isNPMPackage?s.packageDownloads:void 0},null,8,["link","count-icon","count-link","count-text"])]),E("div",Kn,[be(s.$slots,"actions",{},void 0,!0)])])):(I(),V("div",Rn,[E("div",Hn,[m(a)]),E("div",Vn,[m(a)]),E("div",Wn,[(I(),V(ee,null,le(4,y=>E("div",{class:"item-skeleton",key:y},[m(a)])),64))])]))]}),_:3}),E("div",Zn,[s.headerAdProvider?(I(),W(c,{key:0,class:"homepage-mammon"},{default:f(()=>[m(u,{provider:s.headerAdProvider},null,8,["provider"])]),_:1})):ue("",!0),m(De,{name:"module",mode:"out-in"},{default:f(()=>[s.initialized?be(s.$slots,"content",{key:0},void 0,!0):(I(),W(p,{key:1,class:"loading"}))]),_:3}),s.footerAdProvider?(I(),W(c,{key:1,class:"homepage-mammon"},{default:f(()=>[m(u,{provider:s.footerAdProvider},null,8,["provider"])]),_:1})):ue("",!0)])]),s.initialized?(I(),V(ee,{key:0},[m(o,{repository:s.repository},null,8,["repository"]),m(w,{repository:s.repository},null,8,["repository"])],64)):ue("",!0)])}var Qn=R(Bn,[["render",Jn],["__scopeId","data-v-4f1dc4f8"]]);const el=G({name:"homepage-link",props:{text:String,href:String,icon:String}}),sl={class:"homepage-link"};function tl(s,e,t,i,l,n){const r=P("ulink");return I(),V("div",sl,[m(r,{class:"link",href:s.href},{default:f(()=>[E("i",{class:Se(["iconfont",`icon-${s.icon}`])},null,2),E("span",null,ie(s.text),1)]),_:1},8,["href"])])}var Be=R(el,[["render",tl],["__scopeId","data-v-1ea1428d"]]);const il=G({name:"modal",props:{visible:{type:Boolean,default:!1},title:{type:String,required:!0},titleUrl:{type:String,required:!0}},emits:["close"]}),Xs=s=>(fe("data-v-9548e162"),s=s(),me(),s),rl={key:0,class:"modal"},nl={class:"wrapper"},ll={class:"title"},al=Xs(()=>E("i",{class:"iconfont icon-link-external"},null,-1)),ol=Xs(()=>E("i",{class:"iconfont icon-close"},null,-1)),dl=[ol],pl={class:"content"};function cl(s,e,t,i,l,n){const r=P("ulink");return I(),W(gt,{to:"body"},[m(De,{name:"module"},{default:f(()=>[s.visible?(I(),V("div",rl,[E("div",nl,[E("p",ll,[m(r,{class:"link",href:s.titleUrl},{default:f(()=>[E("span",null,ie(s.title),1),al]),_:1},8,["href"]),E("button",{class:"close",onClick:e[0]||(e[0]=a=>s.$emit("close"))},dl)]),E("div",pl,[be(s.$slots,"content",{},void 0,!0)])])])):ue("",!0)]),_:3})])}var ul=R(il,[["render",cl],["__scopeId","data-v-9548e162"]]);const fl=G({name:"example-list",components:{Mammon:Fs,HomepageCard:qs,Modal:ul},props:{examples:{type:Array,required:!0},disabledAutoAd:{type:Boolean,default:!1},contentClass:{type:String,required:!1}},setup(s){rt();const e=se(null),t=pe(()=>Number.isInteger(e.value)),i=pe(()=>s.examples[e.value]||null),l=d=>{e.value=d},n=()=>{e.value=null},r=6,a=Re(s.examples.map(()=>null));return _t(()=>{const d=s.examples.length;if(d<=r){const u=Math.ceil(d/2);a[u-1]=xs[0]}else{const u=xs,c=d/(u.length+1);u.forEach((p,o)=>{a[Math.ceil(c*(o+1))-1]=p})}console.log("AutoMammonProviders",a.slice())}),{adProviders:a,isVisibleExampleModal:t,activeExample:i,openExampleModal:l,closeExampleModal:n}}}),ml=s=>(fe("data-v-956a66fc"),s=s(),me(),s),hl={class:"examples"},wl={class:"actions"},gl=["onClick"],_l=ml(()=>E("i",{class:"iconfont icon-code"},null,-1)),vl=[_l];function Sl(s,e,t,i,l,n){var c,p;const r=P("highlightjs"),a=P("modal"),d=P("homepage-card"),u=P("mammon");return I(),V("div",hl,[m(a,{visible:s.isVisibleExampleModal,title:`${(c=s.activeExample)==null?void 0:c.title} (Edit on GitHub)`,"title-url":((p=s.activeExample)==null?void 0:p.url)||"",onClose:s.closeExampleModal},{content:f(()=>{var o,w;return[m(r,{class:"highlight",contenteditable:"true",onkeydown:"if(event.metaKey) return true; return false;",code:(o=s.activeExample)==null?void 0:o.raw,language:(w=s.activeExample)==null?void 0:w.language},null,8,["code","language"])]}),_:1},8,["visible","title","title-url","onClose"]),(I(!0),V(ee,null,le(s.examples,(o,w)=>(I(),V("div",{class:"example-item",key:o.name},[m(d,{title:o.title||o.name,"content-class":s.contentClass},{actions:f(()=>[E("div",wl,[be(s.$slots,"actions",{},void 0,!0),E("button",{class:"code-button",onClick:h=>s.openExampleModal(w)},vl,8,gl)])]),default:f(()=>[be(s.$slots,"component",vt(St(o)),void 0,!0)]),_:2},1032,["title","content-class"]),s.disabledAutoAd?ue("",!0):(I(),V(ee,{key:0},[s.adProviders[w]?(I(),W(d,{key:0,class:"example-mammon"},{default:f(()=>[m(u,{provider:s.adProviders[w]||void 0},null,8,["provider"])]),_:2},1024)):ue("",!0)],64))]))),128))])}var bl=R(fl,[["render",Sl],["__scopeId","data-v-956a66fc"]]);const yl=G({name:"swiper-example-advance",title:"Advance example",url:"file:///examples/vue-awesome-swiper/01-advance.vue",components:{Swiper:F,SwiperSlide:q},setup(){const s=p=>{console.log("SwiperComponentReady!",p)},e=p=>{console.log("handleHSwiperSlideChange!",p.realIndex)},t=Re(new Map),i=p=>t.get(p),l=p=>{t.set(p,!0),console.log("Click slide! target slide id:",p)};let n=null;const r=p=>{n=p},a=se();return{modules:[Bs,X,re,He],handleHSwiperReady:s,handleHSwiperSlideChange:e,handleHwiperSlideClick:l,isSlideClicked:i,setVSwiperRef:r,vSwiperIndex:a,updateVSwiperIndex:()=>{a.value=n==null?void 0:n.activeIndex},prevVSwiperSlide:()=>n==null?void 0:n.slidePrev(),nextVSwiperSlide:()=>n==null?void 0:n.slideNext()}}}),we=s=>(fe("data-v-065218fe"),s=s(),me(),s),$l={class:"advance-example"},xl=we(()=>E("span",null,"Loop Slide 1",-1)),Cl=we(()=>E("span",null,"Loop Slide 3",-1)),El=we(()=>E("span",null,"Loop Slide 4",-1)),Tl=we(()=>E("span",null,"Loop Slide 5",-1)),kl=we(()=>E("span",null,"Loop Slide 6",-1)),Pl=g("swiperjs.com"),Ml=we(()=>E("i",{class:"iconfont icon-link-external"},null,-1)),zl=g(" discussions "),Il=we(()=>E("i",{class:"iconfont icon-link-external"},null,-1)),Ol=g("Slide 3"),Al=g("Slide 4"),Ll=g("Slide 5"),Nl=g("Slide 6"),jl=["disabled"],Bl=we(()=>E("i",{class:"iconfont icon-arrow-down"},null,-1)),Dl=[Bl],Gl=["disabled"],Rl=we(()=>E("i",{class:"iconfont icon-arrow-up"},null,-1)),Hl=[Rl];function Vl(s,e,t,i,l,n){const r=P("swiper-slide"),a=P("swiper"),d=P("ulink");return I(),V("div",$l,[m(a,{class:"horizontal-swiper",modules:s.modules,loop:!0,"slides-per-view":3,"slides-per-group":3,"space-between":14,pagination:{clickable:!0},"watch-slides-progress":!0,"prevent-clicks":!1,"prevent-clicks-propagation":!1,"wrapper-tag":"div",onSwiper:s.handleHSwiperReady,onSlideChange:s.handleHSwiperSlideChange},{default:f(()=>[m(r,{class:"slide"},{default:f(()=>[xl]),_:1}),m(r,{class:"slide"},{default:f(u=>[E("pre",null,ie(u),1)]),_:1}),m(r,{class:"slide"},{default:f(()=>[Cl,E("button",{class:"click swiper-no-swiping",onClick:e[0]||(e[0]=bt(u=>s.handleHwiperSlideClick(3),["prevent"]))},ie(s.isSlideClicked(3)?"clicked \u2705":"click me \u{1F446}"),1)]),_:1}),m(r,{class:"slide"},{default:f(()=>[El,E("button",{class:"click swiper-no-swiping",onClick:e[1]||(e[1]=u=>s.handleHwiperSlideClick(4))},ie(s.isSlideClicked(4)?"clicked \u2705":"click me \u{1F446}"),1)]),_:1}),m(r,{class:"slide"},{default:f(()=>[Tl,E("button",{class:"click swiper-no-swiping",onClick:e[2]||(e[2]=u=>s.handleHwiperSlideClick(5))},ie(s.isSlideClicked(5)?"clicked \u2705":"click me \u{1F446}"),1)]),_:1}),m(r,{class:"slide"},{default:f(()=>[kl,E("button",{class:"click swiper-no-swiping",onClick:e[3]||(e[3]=u=>s.handleHwiperSlideClick(6))},ie(s.isSlideClicked(6)?"clicked \u2705":"click me \u{1F446}"),1)]),_:1})]),_:1},8,["modules","onSwiper","onSlideChange"]),m(a,{class:"vertical-swiper",modules:s.modules,direction:"vertical","slides-per-view":2,"space-between":18,mousewheel:!0,onSwiper:s.setVSwiperRef,onSlideChange:s.updateVSwiperIndex},{"container-start":f(()=>[E("button",{class:"nav-button-prev",disabled:s.vSwiperIndex===0,onClick:e[4]||(e[4]=(...u)=>s.prevVSwiperSlide&&s.prevVSwiperSlide(...u))},Dl,8,jl)]),"container-end":f(()=>[E("button",{class:"nav-button-next",disabled:s.vSwiperIndex===5-1,onClick:e[5]||(e[5]=(...u)=>s.nextVSwiperSlide&&s.nextVSwiperSlide(...u))},Hl,8,Gl)]),default:f(()=>[m(r,{class:"slide"},{default:f(()=>[m(d,{class:"link",href:"https://swiperjs.com/"},{default:f(()=>[Pl]),_:1}),Ml]),_:1}),m(r,{class:"slide"},{default:f(()=>[m(d,{class:"link",href:"https://github.com/nolimits4web/swiper/discussions"},{default:f(()=>[zl]),_:1}),Il]),_:1}),m(r,{class:"slide"},{default:f(()=>[Ol]),_:1}),m(r,{class:"slide"},{default:f(()=>[Al]),_:1}),m(r,{class:"slide"},{default:f(()=>[Ll]),_:1}),m(r,{class:"slide"},{default:f(()=>[Nl]),_:1})]),_:1},8,["modules","onSwiper","onSlideChange"])])}var Wl=R(yl,[["render",Vl],["__scopeId","data-v-065218fe"]]),Fl=Object.freeze(Object.defineProperty({__proto__:null,default:Wl},Symbol.toStringTag,{value:"Module"}));const ql=G({name:"swiper-example-default",title:"Default",url:"file:///examples/vue-awesome-swiper/02-default.vue",components:{Swiper:F,SwiperSlide:q}}),Yl=g("Slide 1"),Xl=g("Slide 2"),Ul=g("Slide 3"),Kl=g("Slide 4"),Zl=g("Slide 5"),Jl=g("Slide 6"),Ql=g("Slide 7"),ea=g("Slide 8");function sa(s,e,t,i,l,n){const r=P("swiper-slide"),a=P("swiper");return I(),W(a,{class:"swiper"},{default:f(()=>[m(r,{class:"slide"},{default:f(()=>[Yl]),_:1}),m(r,{class:"slide"},{default:f(()=>[Xl]),_:1}),m(r,{class:"slide"},{default:f(()=>[Ul]),_:1}),m(r,{class:"slide"},{default:f(()=>[Kl]),_:1}),m(r,{class:"slide"},{default:f(()=>[Zl]),_:1}),m(r,{class:"slide"},{default:f(()=>[Jl]),_:1}),m(r,{class:"slide"},{default:f(()=>[Ql]),_:1}),m(r,{class:"slide"},{default:f(()=>[ea]),_:1})]),_:1})}var ta=R(ql,[["render",sa],["__scopeId","data-v-230cad07"]]),ia=Object.freeze(Object.defineProperty({__proto__:null,default:ta},Symbol.toStringTag,{value:"Module"}));const ra=G({name:"swiper-example-navigation",title:"Navigation",url:"file:///examples/vue-awesome-swiper/03-navigation.vue",components:{Swiper:F,SwiperSlide:q},setup(){return{modules:[re]}}}),na=g("Slide 1"),la=g("Slide 2"),aa=g("Slide 3"),oa=g("Slide 4"),da=g("Slide 5"),pa=g("Slide 6"),ca=g("Slide 7"),ua=g("Slide 8");function fa(s,e,t,i,l,n){const r=P("swiper-slide"),a=P("swiper");return I(),W(a,{class:"swiper",modules:s.modules,navigation:""},{default:f(()=>[m(r,{class:"slide"},{default:f(()=>[na]),_:1}),m(r,{class:"slide"},{default:f(()=>[la]),_:1}),m(r,{class:"slide"},{default:f(()=>[aa]),_:1}),m(r,{class:"slide"},{default:f(()=>[oa]),_:1}),m(r,{class:"slide"},{default:f(()=>[da]),_:1}),m(r,{class:"slide"},{default:f(()=>[pa]),_:1}),m(r,{class:"slide"},{default:f(()=>[ca]),_:1}),m(r,{class:"slide"},{default:f(()=>[ua]),_:1})]),_:1},8,["modules"])}var ma=R(ra,[["render",fa],["__scopeId","data-v-fb2a5a0a"]]),ha=Object.freeze(Object.defineProperty({__proto__:null,default:ma},Symbol.toStringTag,{value:"Module"}));const wa=G({name:"swiper-example-pagination",title:"Pagination",url:"file:///examples/vue-awesome-swiper/04-pagination.vue",components:{Swiper:F,SwiperSlide:q},setup(){return{modules:[X]}}}),ga=g("Slide 1"),_a=g("Slide 2"),va=g("Slide 3"),Sa=g("Slide 4"),ba=g("Slide 5"),ya=g("Slide 6"),$a=g("Slide 7"),xa=g("Slide 8");function Ca(s,e,t,i,l,n){const r=P("swiper-slide"),a=P("swiper");return I(),W(a,{class:"swiper",modules:s.modules,pagination:{clickable:!0}},{default:f(()=>[m(r,{class:"slide"},{default:f(()=>[ga]),_:1}),m(r,{class:"slide"},{default:f(()=>[_a]),_:1}),m(r,{class:"slide"},{default:f(()=>[va]),_:1}),m(r,{class:"slide"},{default:f(()=>[Sa]),_:1}),m(r,{class:"slide"},{default:f(()=>[ba]),_:1}),m(r,{class:"slide"},{default:f(()=>[ya]),_:1}),m(r,{class:"slide"},{default:f(()=>[$a]),_:1}),m(r,{class:"slide"},{default:f(()=>[xa]),_:1})]),_:1},8,["modules"])}var Ea=R(wa,[["render",Ca],["__scopeId","data-v-1bff24f2"]]),Ta=Object.freeze(Object.defineProperty({__proto__:null,default:Ea},Symbol.toStringTag,{value:"Module"}));const ka=G({name:"swiper-example-pagination-dynamic",title:"Pagination / Dynamic bullets",url:"file:///examples/vue-awesome-swiper/05-pagination-dynamic.vue",components:{Swiper:F,SwiperSlide:q},setup(){return{modules:[X]}}}),Pa=g("Slide 1"),Ma=g("Slide 2"),za=g("Slide 3"),Ia=g("Slide 4"),Oa=g("Slide 5"),Aa=g("Slide 6"),La=g("Slide 7"),Na=g("Slide 8");function ja(s,e,t,i,l,n){const r=P("swiper-slide"),a=P("swiper");return I(),W(a,{class:"swiper",modules:s.modules,pagination:{clickable:!0,dynamicBullets:!0}},{default:f(()=>[m(r,{class:"slide"},{default:f(()=>[Pa]),_:1}),m(r,{class:"slide"},{default:f(()=>[Ma]),_:1}),m(r,{class:"slide"},{default:f(()=>[za]),_:1}),m(r,{class:"slide"},{default:f(()=>[Ia]),_:1}),m(r,{class:"slide"},{default:f(()=>[Oa]),_:1}),m(r,{class:"slide"},{default:f(()=>[Aa]),_:1}),m(r,{class:"slide"},{default:f(()=>[La]),_:1}),m(r,{class:"slide"},{default:f(()=>[Na]),_:1})]),_:1},8,["modules"])}var Ba=R(ka,[["render",ja],["__scopeId","data-v-429e8dc7"]]),Da=Object.freeze(Object.defineProperty({__proto__:null,default:Ba},Symbol.toStringTag,{value:"Module"}));const Ga=G({name:"swiper-example-pagination-progress",title:"Progress pagination",url:"file:///examples/vue-awesome-swiper/06-pagination-progress.vue",components:{Swiper:F,SwiperSlide:q},setup(){return{modules:[X]}}}),Ra=g("Slide 1"),Ha=g("Slide 2"),Va=g("Slide 3"),Wa=g("Slide 4"),Fa=g("Slide 5"),qa=g("Slide 6"),Ya=g("Slide 7"),Xa=g("Slide 8");function Ua(s,e,t,i,l,n){const r=P("swiper-slide"),a=P("swiper");return I(),W(a,{class:"swiper",modules:s.modules,pagination:{type:"progressbar"}},{default:f(()=>[m(r,{class:"slide"},{default:f(()=>[Ra]),_:1}),m(r,{class:"slide"},{default:f(()=>[Ha]),_:1}),m(r,{class:"slide"},{default:f(()=>[Va]),_:1}),m(r,{class:"slide"},{default:f(()=>[Wa]),_:1}),m(r,{class:"slide"},{default:f(()=>[Fa]),_:1}),m(r,{class:"slide"},{default:f(()=>[qa]),_:1}),m(r,{class:"slide"},{default:f(()=>[Ya]),_:1}),m(r,{class:"slide"},{default:f(()=>[Xa]),_:1})]),_:1},8,["modules"])}var Ka=R(Ga,[["render",Ua],["__scopeId","data-v-70c1d854"]]),Za=Object.freeze(Object.defineProperty({__proto__:null,default:Ka},Symbol.toStringTag,{value:"Module"}));const Ja=G({name:"swiper-example-pagination-fraction",title:"Fraction pagination",url:"file:///examples/vue-awesome-swiper/07-pagination-fraction.vue",components:{Swiper:F,SwiperSlide:q},setup(){return{modules:[X]}}}),Qa=g("Slide 1"),eo=g("Slide 2"),so=g("Slide 3"),to=g("Slide 4"),io=g("Slide 5"),ro=g("Slide 6"),no=g("Slide 7"),lo=g("Slide 8");function ao(s,e,t,i,l,n){const r=P("swiper-slide"),a=P("swiper");return I(),W(a,{class:"swiper",modules:s.modules,pagination:{type:"fraction"}},{default:f(()=>[m(r,{class:"slide"},{default:f(()=>[Qa]),_:1}),m(r,{class:"slide"},{default:f(()=>[eo]),_:1}),m(r,{class:"slide"},{default:f(()=>[so]),_:1}),m(r,{class:"slide"},{default:f(()=>[to]),_:1}),m(r,{class:"slide"},{default:f(()=>[io]),_:1}),m(r,{class:"slide"},{default:f(()=>[ro]),_:1}),m(r,{class:"slide"},{default:f(()=>[no]),_:1}),m(r,{class:"slide"},{default:f(()=>[lo]),_:1})]),_:1},8,["modules"])}var oo=R(Ja,[["render",ao],["__scopeId","data-v-3eae05e0"]]),po=Object.freeze(Object.defineProperty({__proto__:null,default:oo},Symbol.toStringTag,{value:"Module"}));const co=G({name:"swiper-example-pagination-custom",title:"Custom pagination",url:"file:///examples/vue-awesome-swiper/08-pagination-custom.vue",components:{Swiper:F,SwiperSlide:q},setup(){return{bulletRenderer:(e,t)=>`<span class="${`${t} swiper-pagination-bullet-custom`}">${e+1}</span>`,modules:[X]}}}),uo=g("Slide 1"),fo=g("Slide 2"),mo=g("Slide 3"),ho=g("Slide 4"),wo=g("Slide 5"),go=g("Slide 6"),_o=g("Slide 7"),vo=g("Slide 8");function So(s,e,t,i,l,n){const r=P("swiper-slide"),a=P("swiper");return I(),W(a,{class:"swiper",modules:s.modules,pagination:{clickable:!0,renderBullet:s.bulletRenderer}},{default:f(()=>[m(r,{class:"slide"},{default:f(()=>[uo]),_:1}),m(r,{class:"slide"},{default:f(()=>[fo]),_:1}),m(r,{class:"slide"},{default:f(()=>[mo]),_:1}),m(r,{class:"slide"},{default:f(()=>[ho]),_:1}),m(r,{class:"slide"},{default:f(()=>[wo]),_:1}),m(r,{class:"slide"},{default:f(()=>[go]),_:1}),m(r,{class:"slide"},{default:f(()=>[_o]),_:1}),m(r,{class:"slide"},{default:f(()=>[vo]),_:1})]),_:1},8,["modules","pagination"])}var bo=R(co,[["render",So],["__scopeId","data-v-01c15eb0"]]),yo=Object.freeze(Object.defineProperty({__proto__:null,default:bo},Symbol.toStringTag,{value:"Module"}));const $o=G({name:"swiper-example-scrollbar",title:"Scrollbar",url:"file:///examples/vue-awesome-swiper/09-scrollbar.vue",components:{Swiper:F,SwiperSlide:q},setup(){return{modules:[as]}}}),xo=g("Slide 1"),Co=g("Slide 2"),Eo=g("Slide 3"),To=g("Slide 4"),ko=g("Slide 5"),Po=g("Slide 6"),Mo=g("Slide 7"),zo=g("Slide 8");function Io(s,e,t,i,l,n){const r=P("swiper-slide"),a=P("swiper");return I(),W(a,{class:"swiper",modules:s.modules,scrollbar:{hide:!0}},{default:f(()=>[m(r,{class:"slide"},{default:f(()=>[xo]),_:1}),m(r,{class:"slide"},{default:f(()=>[Co]),_:1}),m(r,{class:"slide"},{default:f(()=>[Eo]),_:1}),m(r,{class:"slide"},{default:f(()=>[To]),_:1}),m(r,{class:"slide"},{default:f(()=>[ko]),_:1}),m(r,{class:"slide"},{default:f(()=>[Po]),_:1}),m(r,{class:"slide"},{default:f(()=>[Mo]),_:1}),m(r,{class:"slide"},{default:f(()=>[zo]),_:1})]),_:1},8,["modules"])}var Oo=R($o,[["render",Io],["__scopeId","data-v-6a92bd6c"]]),Ao=Object.freeze(Object.defineProperty({__proto__:null,default:Oo},Symbol.toStringTag,{value:"Module"}));const Lo=G({name:"swiper-example-vertical",title:"Vertical slider",url:"file:///examples/vue-awesome-swiper/10-vertical.vue",components:{Swiper:F,SwiperSlide:q},setup(){return{modules:[X]}}}),No=g("Slide 1"),jo=g("Slide 2"),Bo=g("Slide 3"),Do=g("Slide 4"),Go=g("Slide 5"),Ro=g("Slide 6"),Ho=g("Slide 7"),Vo=g("Slide 8");function Wo(s,e,t,i,l,n){const r=P("swiper-slide"),a=P("swiper");return I(),W(a,{class:"swiper",modules:s.modules,direction:"vertical",pagination:{clickable:!0}},{default:f(()=>[m(r,{class:"slide"},{default:f(()=>[No]),_:1}),m(r,{class:"slide"},{default:f(()=>[jo]),_:1}),m(r,{class:"slide"},{default:f(()=>[Bo]),_:1}),m(r,{class:"slide"},{default:f(()=>[Do]),_:1}),m(r,{class:"slide"},{default:f(()=>[Go]),_:1}),m(r,{class:"slide"},{default:f(()=>[Ro]),_:1}),m(r,{class:"slide"},{default:f(()=>[Ho]),_:1}),m(r,{class:"slide"},{default:f(()=>[Vo]),_:1})]),_:1},8,["modules"])}var Fo=R(Lo,[["render",Wo],["__scopeId","data-v-43606c02"]]),qo=Object.freeze(Object.defineProperty({__proto__:null,default:Fo},Symbol.toStringTag,{value:"Module"}));const Yo=G({name:"swiper-example-space-between",title:"Space between slides",url:"file:///examples/vue-awesome-swiper/11-space-between.vue",components:{Swiper:F,SwiperSlide:q},setup(){return{modules:[X]}}}),Xo=g("Slide 1"),Uo=g("Slide 2"),Ko=g("Slide 3"),Zo=g("Slide 4"),Jo=g("Slide 5"),Qo=g("Slide 6"),ed=g("Slide 7"),sd=g("Slide 8");function td(s,e,t,i,l,n){const r=P("swiper-slide"),a=P("swiper");return I(),W(a,{class:"swiper",modules:s.modules,"space-between":30,pagination:{clickable:!0}},{default:f(()=>[m(r,{class:"slide"},{default:f(()=>[Xo]),_:1}),m(r,{class:"slide"},{default:f(()=>[Uo]),_:1}),m(r,{class:"slide"},{default:f(()=>[Ko]),_:1}),m(r,{class:"slide"},{default:f(()=>[Zo]),_:1}),m(r,{class:"slide"},{default:f(()=>[Jo]),_:1}),m(r,{class:"slide"},{default:f(()=>[Qo]),_:1}),m(r,{class:"slide"},{default:f(()=>[ed]),_:1}),m(r,{class:"slide"},{default:f(()=>[sd]),_:1})]),_:1},8,["modules"])}var id=R(Yo,[["render",td],["__scopeId","data-v-5a348f51"]]),rd=Object.freeze(Object.defineProperty({__proto__:null,default:id},Symbol.toStringTag,{value:"Module"}));const nd=G({name:"swiper-example-multiple-slides-per-biew",title:"Multiple slides per view",url:"file:///examples/vue-awesome-swiper/12-slides-per-view.vue",components:{Swiper:F,SwiperSlide:q},setup(){return{modules:[X]}}}),ld=g("Slide 1"),ad=g("Slide 2"),od=g("Slide 3"),dd=g("Slide 4"),pd=g("Slide 5"),cd=g("Slide 6"),ud=g("Slide 7"),fd=g("Slide 8");function md(s,e,t,i,l,n){const r=P("swiper-slide"),a=P("swiper");return I(),W(a,{class:"swiper",modules:s.modules,"space-between":30,"slides-per-view":3,pagination:{clickable:!0}},{default:f(()=>[m(r,{class:"slide"},{default:f(()=>[ld]),_:1}),m(r,{class:"slide"},{default:f(()=>[ad]),_:1}),m(r,{class:"slide"},{default:f(()=>[od]),_:1}),m(r,{class:"slide"},{default:f(()=>[dd]),_:1}),m(r,{class:"slide"},{default:f(()=>[pd]),_:1}),m(r,{class:"slide"},{default:f(()=>[cd]),_:1}),m(r,{class:"slide"},{default:f(()=>[ud]),_:1}),m(r,{class:"slide"},{default:f(()=>[fd]),_:1})]),_:1},8,["modules"])}var hd=R(nd,[["render",md],["__scopeId","data-v-7e1ba464"]]),wd=Object.freeze(Object.defineProperty({__proto__:null,default:hd},Symbol.toStringTag,{value:"Module"}));const gd=G({name:"swiper-example-slides-per-view-auto",title:"Slides per view auto",url:"file:///examples/vue-awesome-swiper/13-slides-per-view-auto.vue",components:{Swiper:F,SwiperSlide:q},setup(){return{modules:[X]}}}),_d=g("Slide 1"),vd=g("Slide 2"),Sd=g("Slide 3"),bd=g("Slide 4"),yd=g("Slide 5"),$d=g("Slide 6"),xd=g("Slide 7"),Cd=g("Slide 8");function Ed(s,e,t,i,l,n){const r=P("swiper-slide"),a=P("swiper");return I(),W(a,{class:"swiper",modules:s.modules,"space-between":30,"slides-per-view":"auto",pagination:{clickable:!0}},{default:f(()=>[m(r,{class:"slide"},{default:f(()=>[_d]),_:1}),m(r,{class:"slide"},{default:f(()=>[vd]),_:1}),m(r,{class:"slide"},{default:f(()=>[Sd]),_:1}),m(r,{class:"slide"},{default:f(()=>[bd]),_:1}),m(r,{class:"slide"},{default:f(()=>[yd]),_:1}),m(r,{class:"slide"},{default:f(()=>[$d]),_:1}),m(r,{class:"slide"},{default:f(()=>[xd]),_:1}),m(r,{class:"slide"},{default:f(()=>[Cd]),_:1})]),_:1},8,["modules"])}var Td=R(gd,[["render",Ed],["__scopeId","data-v-1f41b97a"]]),kd=Object.freeze(Object.defineProperty({__proto__:null,default:Td},Symbol.toStringTag,{value:"Module"}));const Pd=G({name:"swiper-example-centered-slides",title:"Centered slides",url:"file:///examples/vue-awesome-swiper/14-centered.vue",components:{Swiper:F,SwiperSlide:q},setup(){return{modules:[X]}}}),Md=g("Slide 1"),zd=g("Slide 2"),Id=g("Slide 3"),Od=g("Slide 4"),Ad=g("Slide 5"),Ld=g("Slide 6"),Nd=g("Slide 7"),jd=g("Slide 8");function Bd(s,e,t,i,l,n){const r=P("swiper-slide"),a=P("swiper");return I(),W(a,{class:"swiper",modules:s.modules,"space-between":30,"slides-per-view":4,"centered-slides":!0,pagination:{clickable:!0}},{default:f(()=>[m(r,{class:"slide"},{default:f(()=>[Md]),_:1}),m(r,{class:"slide"},{default:f(()=>[zd]),_:1}),m(r,{class:"slide"},{default:f(()=>[Id]),_:1}),m(r,{class:"slide"},{default:f(()=>[Od]),_:1}),m(r,{class:"slide"},{default:f(()=>[Ad]),_:1}),m(r,{class:"slide"},{default:f(()=>[Ld]),_:1}),m(r,{class:"slide"},{default:f(()=>[Nd]),_:1}),m(r,{class:"slide"},{default:f(()=>[jd]),_:1})]),_:1},8,["modules"])}var Dd=R(Pd,[["render",Bd],["__scopeId","data-v-669d2184"]]),Gd=Object.freeze(Object.defineProperty({__proto__:null,default:Dd},Symbol.toStringTag,{value:"Module"}));const Rd=G({name:"swiper-example-centered-auto",title:"Centered slides + auto slides per view",url:"file:///examples/vue-awesome-swiper/15-centered-auto.vue",components:{Swiper:F,SwiperSlide:q},setup(){return{modules:[X]}}}),Hd=g("Slide 1"),Vd=g("Slide 2"),Wd=g("Slide 3"),Fd=g("Slide 4"),qd=g("Slide 5"),Yd=g("Slide 6"),Xd=g("Slide 7"),Ud=g("Slide 8");function Kd(s,e,t,i,l,n){const r=P("swiper-slide"),a=P("swiper");return I(),W(a,{class:"swiper",modules:s.modules,"space-between":30,"slides-per-view":"auto","centered-slides":!0,pagination:{clickable:!0}},{default:f(()=>[m(r,{class:"slide"},{default:f(()=>[Hd]),_:1}),m(r,{class:"slide"},{default:f(()=>[Vd]),_:1}),m(r,{class:"slide"},{default:f(()=>[Wd]),_:1}),m(r,{class:"slide"},{default:f(()=>[Fd]),_:1}),m(r,{class:"slide"},{default:f(()=>[qd]),_:1}),m(r,{class:"slide"},{default:f(()=>[Yd]),_:1}),m(r,{class:"slide"},{default:f(()=>[Xd]),_:1}),m(r,{class:"slide"},{default:f(()=>[Ud]),_:1})]),_:1},8,["modules"])}var Zd=R(Rd,[["render",Kd],["__scopeId","data-v-64428176"]]),Jd=Object.freeze(Object.defineProperty({__proto__:null,default:Zd},Symbol.toStringTag,{value:"Module"}));const Qd=G({name:"swiper-example-free-mode",title:"Free mode / no fixed positions",url:"file:///examples/vue-awesome-swiper/16-freemode.vue",components:{Swiper:F,SwiperSlide:q},setup(){return{modules:[X,js]}}}),ep=g("Slide 1"),sp=g("Slide 2"),tp=g("Slide 3"),ip=g("Slide 4"),rp=g("Slide 5"),np=g("Slide 6"),lp=g("Slide 7"),ap=g("Slide 8");function op(s,e,t,i,l,n){const r=P("swiper-slide"),a=P("swiper");return I(),W(a,{class:"swiper",modules:s.modules,"space-between":30,"slides-per-view":3,"free-mode":!0,pagination:{clickable:!0}},{default:f(()=>[m(r,{class:"slide"},{default:f(()=>[ep]),_:1}),m(r,{class:"slide"},{default:f(()=>[sp]),_:1}),m(r,{class:"slide"},{default:f(()=>[tp]),_:1}),m(r,{class:"slide"},{default:f(()=>[ip]),_:1}),m(r,{class:"slide"},{default:f(()=>[rp]),_:1}),m(r,{class:"slide"},{default:f(()=>[np]),_:1}),m(r,{class:"slide"},{default:f(()=>[lp]),_:1}),m(r,{class:"slide"},{default:f(()=>[ap]),_:1})]),_:1},8,["modules"])}var dp=R(Qd,[["render",op],["__scopeId","data-v-98975784"]]),pp=Object.freeze(Object.defineProperty({__proto__:null,default:dp},Symbol.toStringTag,{value:"Module"}));const cp=G({name:"swiper-example-scroll-container",title:"Scroll container",url:"file:///examples/vue-awesome-swiper/17-scroll-container.vue",components:{Swiper:F,SwiperSlide:q},setup(){return{modules:[X,js,as,He]}}}),K=s=>(fe("data-v-7727eb4e"),s=s(),me(),s),up=K(()=>E("h2",null,"I Have a Dream",-1)),fp=K(()=>E("p",null," I am happy to join with you today in what will go down in history as the greatest demonstration for freedom in the history of our nation. ",-1)),mp=K(()=>E("p",null," Five score years ago, a great American, in whose symbolic shadow we stand today, signed the Emancipation Proclamation. This momentous decree came as a great beacon light of hope to millions of Negro slaves who had been seared in the flames of withering injustice. It came as a joyous daybreak to end the long night of their captivity. ",-1)),hp=K(()=>E("p",null," But one hundred years later, the Negro still is not free. One hundred years later, the life of the Negro is still sadly crippled by the manacles of segregation and the chains of discrimination. One hundred years later, the Negro lives on a lonely island of poverty in the midst of a vast ocean of material prosperity. One hundred years later, the Negro is still languishing in the corners of American society and finds himself an exile in his own land. So we have come here today to dramatize a shameful condition. ",-1)),wp=K(()=>E("p",null," In a sense we have come to our nation's capital to cash a check. When the architects of our republic wrote the magnificent words of the Constitution and the Declaration of Independence, they were signing a promissory note to which every American was to fall heir. This note was a promise that all men, yes, black men as well as white men, would be guaranteed the unalienable rights of life, liberty, and the pursuit of happiness. ",-1)),gp=K(()=>E("p",null,` It is obvious today that America has defaulted on this promissory note insofar as her citizens of color are concerned. Instead of honoring this sacred obligation, America has given the Negro people a bad check, a check which has come back marked "insufficient funds." But we refuse to believe that the bank of justice is bankrupt. We refuse to believe that there are insufficient funds in the great vaults of opportunity of this nation. So we have come to cash this check \u2014 a check that will give us upon demand the riches of freedom and the security of justice. We have also come to this hallowed spot to remind America of the fierce urgency of now. This is no time to engage in the luxury of cooling off or to take the tranquilizing drug of gradualism. Now is the time to make real the promises of democracy. Now is the time to rise from the dark and desolate valley of segregation to the sunlit path of racial justice. Now is the time to lift our nation from the quick sands of racial injustice to the solid rock of brotherhood. Now is the time to make justice a reality for all of God's children. `,-1)),_p=K(()=>E("p",null," It would be fatal for the nation to overlook the urgency of the moment. This sweltering summer of the Negro's legitimate discontent will not pass until there is an invigorating autumn of freedom and equality. Nineteen sixty-three is not an end, but a beginning. Those who hope that the Negro needed to blow off steam and will now be content will have a rude awakening if the nation returns to business as usual. There will be neither rest nor tranquility in America until the Negro is granted his citizenship rights. The whirlwinds of revolt will continue to shake the foundations of our nation until the bright day of justice emerges. ",-1)),vp=K(()=>E("p",null," But there is something that I must say to my people who stand on the warm threshold which leads into the palace of justice. In the process of gaining our rightful place we must not be guilty of wrongful deeds. Let us not seek to satisfy our thirst for freedom by drinking from the cup of bitterness and hatred. ",-1)),Sp=K(()=>E("p",null," We must forever conduct our struggle on the high plane of dignity and discipline. We must not allow our creative protest to degenerate into physical violence. Again and again we must rise to the majestic heights of meeting physical force with soul force. The marvelous new militancy which has engulfed the Negro community must not lead us to distrust of all white people, for many of our white brothers, as evidenced by their presence here today, have come to realize that their destiny is tied up with our destiny and their freedom is inextricably bound to our freedom. We cannot walk alone. ",-1)),bp=K(()=>E("p",null,' As we walk, we must make the pledge that we shall march ahead. We cannot turn back. There are those who are asking the devotees of civil rights, "When will you be satisfied?" We can never be satisfied as long as the Negro is the victim of the unspeakable horrors of police brutality. We can never be satisfied, as long as our bodies, heavy with the fatigue of travel, cannot gain lodging in the motels of the highways and the hotels of the cities. We can never be satisfied as long as a Negro in Mississippi cannot vote and a Negro in New York believes he has nothing for which to vote. No, no, we are not satisfied, and we will not be satisfied until justice rolls down like waters and righteousness like a mighty stream. ',-1)),yp=K(()=>E("p",null," I am not unmindful that some of you have come here out of great trials and tribulations. Some of you have come fresh from narrow jail cells. Some of you have come from areas where your quest for freedom left you battered by the storms of persecution and staggered by the winds of police brutality. You have been the veterans of creative suffering. Continue to work with the faith that unearned suffering is redemptive. ",-1)),$p=K(()=>E("p",null," Go back to Mississippi, go back to Alabama, go back to South Carolina, go back to Georgia, go back to Louisiana, go back to the slums and ghettos of our northern cities, knowing that somehow this situation can and will be changed. Let us not wallow in the valley of despair. ",-1)),xp=K(()=>E("p",null," I say to you today, my friends, so even though we face the difficulties of today and tomorrow, I still have a dream. It is a dream deeply rooted in the American dream. ",-1)),Cp=K(()=>E("p",null,' I have a dream that one day this nation will rise up and live out the true meaning of its creed: "We hold these truths to be self-evident: that all men are created equal." ',-1)),Ep=K(()=>E("p",null," I have a dream that one day on the red hills of Georgia the sons of former slaves and the sons of former slave owners will be able to sit down together at the table of brotherhood. ",-1)),Tp=K(()=>E("p",null," I have a dream that one day even the state of Mississippi, a state sweltering with the heat of injustice, sweltering with the heat of oppression, will be transformed into an oasis of freedom and justice. ",-1)),kp=K(()=>E("p",null," I have a dream that my four little children will one day live in a nation where they will not be judged by the color of their skin but by the content of their character. ",-1)),Pp=K(()=>E("p",null,"I have a dream today.",-1)),Mp=K(()=>E("p",null," I have a dream that one day, down in Alabama, with its vicious racists, with its governor having his lips dripping with the words of interposition and nullification; one day right there in Alabama, little black boys and black girls will be able to join hands with little white boys and white girls as sisters and brothers. ",-1)),zp=K(()=>E("p",null,"I have a dream today.",-1)),Ip=K(()=>E("p",null," I have a dream that one day every valley shall be exalted, every hill and mountain shall be made low, the rough places will be made plain, and the crooked places will be made straight, and the glory of the Lord shall be revealed, and all flesh shall see it together. ",-1)),Op=K(()=>E("p",null," This is our hope. This is the faith that I go back to the South with. With this faith we will be able to hew out of the mountain of despair a stone of hope. With this faith we will be able to transform the jangling discords of our nation into a beautiful symphony of brotherhood. With this faith we will be able to work together, to pray together, to struggle together, to go to jail together, to stand up for freedom together, knowing that we will be free one day. ",-1)),Ap=K(()=>E("p",null,` This will be the day when all of God's children will be able to sing with a new meaning, "My country, 'tis of thee, sweet land of liberty, of thee I sing. Land where my fathers died, land of the pilgrim's pride, from every mountainside, let freedom ring." `,-1)),Lp=K(()=>E("p",null," And if America is to be a great nation this must become true. So let freedom ring from the prodigious hilltops of New Hampshire. Let freedom ring from the mighty mountains of New York. Let freedom ring from the heightening Alleghenies of Pennsylvania! ",-1)),Np=K(()=>E("p",null,"Let freedom ring from the snowcapped Rockies of Colorado!",-1)),jp=K(()=>E("p",null,"Let freedom ring from the curvaceous slopes of California!",-1)),Bp=K(()=>E("p",null,"But not only that; let freedom ring from Stone Mountain of Georgia!",-1)),Dp=K(()=>E("p",null,"Let freedom ring from Lookout Mountain of Tennessee!",-1)),Gp=K(()=>E("p",null," Let freedom ring from every hill and molehill of Mississippi. From every mountainside, let freedom ring. ",-1)),Rp=K(()=>E("p",null,` And when this happens, When we allow freedom to ring, when we let it ring from every village and every hamlet, from every state and every city, we will be able to speed up that day when all of God's children, black men and white men, Jews and Gentiles, Protestants and Catholics, will be able to join hands and sing in the words of the old Negro spiritual, "Free at last! free at last! thank God Almighty, we are free at last!" `,-1));function Hp(s,e,t,i,l,n){const r=P("swiper-slide"),a=P("swiper");return I(),W(a,{class:"swiper",modules:s.modules,direction:"vertical","slides-per-view":"auto","free-mode":!0,scrollbar:!0,mousewheel:!0},{default:f(()=>[m(r,{class:"slide"},{default:f(()=>[up,fp,mp,hp,wp,gp,_p,vp,Sp,bp,yp,$p,xp,Cp,Ep,Tp,kp,Pp,Mp,zp,Ip,Op,Ap,Lp,Np,jp,Bp,Dp,Gp,Rp]),_:1})]),_:1},8,["modules"])}var Vp=R(cp,[["render",Hp],["__scopeId","data-v-7727eb4e"]]),Wp=Object.freeze(Object.defineProperty({__proto__:null,default:Vp},Symbol.toStringTag,{value:"Module"}));const Fp=G({name:"swiper-example-slides-per-column",title:"Multi row slides layout",url:"file:///examples/vue-awesome-swiper/18-slides-per-column.vue",components:{Swiper:F,SwiperSlide:q},setup(){return{modules:[X,Bs]}}}),qp=g("Slide 1"),Yp=g("Slide 2"),Xp=g("Slide 3"),Up=g("Slide 4"),Kp=g("Slide 5"),Zp=g("Slide 6"),Jp=g("Slide 7"),Qp=g("Slide 8"),ec=g("Slide 9"),sc=g("Slide 10");function tc(s,e,t,i,l,n){const r=P("swiper-slide"),a=P("swiper");return I(),W(a,{class:"swiper",modules:s.modules,"slides-per-view":3,grid:{rows:2},"space-between":30,pagination:{clickable:!0}},{default:f(()=>[m(r,{class:"slide"},{default:f(()=>[qp]),_:1}),m(r,{class:"slide"},{default:f(()=>[Yp]),_:1}),m(r,{class:"slide"},{default:f(()=>[Xp]),_:1}),m(r,{class:"slide"},{default:f(()=>[Up]),_:1}),m(r,{class:"slide"},{default:f(()=>[Kp]),_:1}),m(r,{class:"slide"},{default:f(()=>[Zp]),_:1}),m(r,{class:"slide"},{default:f(()=>[Jp]),_:1}),m(r,{class:"slide"},{default:f(()=>[Qp]),_:1}),m(r,{class:"slide"},{default:f(()=>[ec]),_:1}),m(r,{class:"slide"},{default:f(()=>[sc]),_:1})]),_:1},8,["modules"])}var ic=R(Fp,[["render",tc],["__scopeId","data-v-3a52d683"]]),rc=Object.freeze(Object.defineProperty({__proto__:null,default:ic},Symbol.toStringTag,{value:"Module"}));const nc=G({name:"swiper-example-nested",title:"Nested swipers",url:"file:///examples/vue-awesome-swiper/19-nested.vue",components:{Swiper:F,SwiperSlide:q},setup(){return{modules:[X]}}}),lc=g("Horizontal Slide 1"),ac=g("Vertical Slide 1"),oc=g("Vertical Slide 2"),dc=g("Vertical Slide 3"),pc=g("Vertical Slide 4"),cc=g("Vertical Slide 5"),uc=g("Horizontal Slide 3"),fc=g("Horizontal Slide 4");function mc(s,e,t,i,l,n){const r=P("swiper-slide"),a=P("swiper");return I(),W(a,{class:"swiper swiper-h",modules:s.modules,"space-between":50,pagination:{clickable:!0}},{default:f(()=>[m(r,{class:"slide"},{default:f(()=>[lc]),_:1}),m(r,{class:"slide"},{default:f(()=>[m(a,{class:"swiper-v",modules:s.modules,direction:"vertical",spaceBetween:50,pagination:{clickable:!0}},{default:f(()=>[m(r,{class:"slide"},{default:f(()=>[ac]),_:1}),m(r,{class:"slide"},{default:f(()=>[oc]),_:1}),m(r,{class:"slide"},{default:f(()=>[dc]),_:1}),m(r,{class:"slide"},{default:f(()=>[pc]),_:1}),m(r,{class:"slide"},{default:f(()=>[cc]),_:1})]),_:1},8,["modules"])]),_:1}),m(r,{class:"slide"},{default:f(()=>[uc]),_:1}),m(r,{class:"slide"},{default:f(()=>[fc]),_:1})]),_:1},8,["modules"])}var hc=R(nc,[["render",mc],["__scopeId","data-v-be61ddbe"]]),wc=Object.freeze(Object.defineProperty({__proto__:null,default:hc},Symbol.toStringTag,{value:"Module"}));const gc=G({name:"swiper-example-grab-cursor",title:"Grab cursor",url:"file:///examples/vue-awesome-swiper/20-grab-cursor.vue",components:{Swiper:F,SwiperSlide:q},setup(){return{modules:[X]}}}),_c=g("Slide 1"),vc=g("Slide 2"),Sc=g("Slide 3"),bc=g("Slide 4"),yc=g("Slide 5"),$c=g("Slide 6"),xc=g("Slide 7"),Cc=g("Slide 8");function Ec(s,e,t,i,l,n){const r=P("swiper-slide"),a=P("swiper");return I(),W(a,{class:"swiper",modules:s.modules,"slides-per-view":4,"centered-slides":!0,"space-between":30,"grab-cursor":!0,pagination:{clickable:!0}},{default:f(()=>[m(r,{class:"slide"},{default:f(()=>[_c]),_:1}),m(r,{class:"slide"},{default:f(()=>[vc]),_:1}),m(r,{class:"slide"},{default:f(()=>[Sc]),_:1}),m(r,{class:"slide"},{default:f(()=>[bc]),_:1}),m(r,{class:"slide"},{default:f(()=>[yc]),_:1}),m(r,{class:"slide"},{default:f(()=>[$c]),_:1}),m(r,{class:"slide"},{default:f(()=>[xc]),_:1}),m(r,{class:"slide"},{default:f(()=>[Cc]),_:1})]),_:1},8,["modules"])}var Tc=R(gc,[["render",Ec],["__scopeId","data-v-0060480e"]]),kc=Object.freeze(Object.defineProperty({__proto__:null,default:Tc},Symbol.toStringTag,{value:"Module"}));const Pc=G({name:"swiper-example-loop",title:"Loop mode / Infinite loop",url:"file:///examples/vue-awesome-swiper/21-infinite-loop.vue",components:{Swiper:F,SwiperSlide:q},setup(){return{modules:[X,re]}}}),Mc=g("Slide 1"),zc=g("Slide 2"),Ic=g("Slide 3"),Oc=g("Slide 4"),Ac=g("Slide 5"),Lc=g("Slide 6"),Nc=g("Slide 7"),jc=g("Slide 8");function Bc(s,e,t,i,l,n){const r=P("swiper-slide"),a=P("swiper");return I(),W(a,{class:"swiper",modules:s.modules,"slides-per-view":1,"space-between":30,loop:!0,pagination:{clickable:!0},navigation:!0},{default:f(()=>[m(r,null,{default:f(()=>[Mc]),_:1}),m(r,null,{default:f(()=>[zc]),_:1}),m(r,null,{default:f(()=>[Ic]),_:1}),m(r,null,{default:f(()=>[Oc]),_:1}),m(r,null,{default:f(()=>[Ac]),_:1}),m(r,null,{default:f(()=>[Lc]),_:1}),m(r,null,{default:f(()=>[Nc]),_:1}),m(r,null,{default:f(()=>[jc]),_:1})]),_:1},8,["modules"])}var Dc=R(Pc,[["render",Bc],["__scopeId","data-v-270eda90"]]),Gc=Object.freeze(Object.defineProperty({__proto__:null,default:Dc},Symbol.toStringTag,{value:"Module"}));const Rc=G({name:"swiper-example-loop-group",title:"Loop mode with multiple slides per group",url:"file:///examples/vue-awesome-swiper/22-infinite-loop-with-slides-per-group.vue",components:{Swiper:F,SwiperSlide:q},setup(){return{modules:[X,re]}}}),Hc=g("Slide 1"),Vc=g("Slide 2"),Wc=g("Slide 3"),Fc=g("Slide 4"),qc=g("Slide 5"),Yc=g("Slide 6"),Xc=g("Slide 7"),Uc=g("Slide 8");function Kc(s,e,t,i,l,n){const r=P("swiper-slide"),a=P("swiper");return I(),W(a,{class:"swiper",modules:s.modules,"space-between":30,"slides-per-view":3,"slides-per-group":3,loop:!0,"loop-fill-group-with-blank":!0,navigation:!0,pagination:{clickable:!0}},{default:f(()=>[m(r,null,{default:f(()=>[Hc]),_:1}),m(r,null,{default:f(()=>[Vc]),_:1}),m(r,null,{default:f(()=>[Wc]),_:1}),m(r,null,{default:f(()=>[Fc]),_:1}),m(r,null,{default:f(()=>[qc]),_:1}),m(r,null,{default:f(()=>[Yc]),_:1}),m(r,null,{default:f(()=>[Xc]),_:1}),m(r,null,{default:f(()=>[Uc]),_:1})]),_:1},8,["modules"])}var Zc=R(Rc,[["render",Kc],["__scopeId","data-v-babe5f42"]]),Jc=Object.freeze(Object.defineProperty({__proto__:null,default:Zc},Symbol.toStringTag,{value:"Module"}));const Qc=G({name:"swiper-example-slides-per-group-skip",title:"Slides per group skip",url:"file:///examples/vue-awesome-swiper/23-slides-per-group-skip.vue",components:{Swiper:F,SwiperSlide:q},setup(){return{modules:[Ns,as,re,X]}}}),eu=g("Slide 1"),su=g("Slide 2"),tu=g("Slide 3"),iu=g("Slide 4"),ru=g("Slide 5"),nu=g("Slide 6"),lu=g("Slide 7");function au(s,e,t,i,l,n){const r=P("swiper-slide"),a=P("swiper");return I(),W(a,{class:"swiper",modules:s.modules,"slides-per-view":2,"slides-per-group":2,"slides-per-group-skip":1,"centered-slides":!1,"grab-cursor":!0,keyboard:{enabled:!0},scrollbar:!0,navigation:!0,pagination:{clickable:!0}},{default:f(()=>[m(r,{class:"slide"},{default:f(()=>[eu]),_:1}),m(r,{class:"slide"},{default:f(()=>[su]),_:1}),m(r,{class:"slide"},{default:f(()=>[tu]),_:1}),m(r,{class:"slide"},{default:f(()=>[iu]),_:1}),m(r,{class:"slide"},{default:f(()=>[ru]),_:1}),m(r,{class:"slide"},{default:f(()=>[nu]),_:1}),m(r,{class:"slide"},{default:f(()=>[lu]),_:1})]),_:1},8,["modules"])}var ou=R(Qc,[["render",au],["__scopeId","data-v-99849cba"]]),du=Object.freeze(Object.defineProperty({__proto__:null,default:ou},Symbol.toStringTag,{value:"Module"}));const pu=G({name:"swiper-example-fade-effect",title:"Fade effect",url:"file:///examples/vue-awesome-swiper/24-effect-fade.vue",components:{Swiper:F,SwiperSlide:q},setup(){return{modules:[X,re,jr]}}}),cu=["src"];function uu(s,e,t,i,l,n){const r=P("swiper-slide"),a=P("swiper");return I(),W(a,{class:"swiper",modules:s.modules,"space-between":30,effect:"fade",navigation:!0,pagination:{clickable:!0}},{default:f(()=>[(I(),V(ee,null,le(5,d=>m(r,{class:"slide",key:d},{default:f(()=>[E("img",{src:`/images/example/${d}.jpg`},null,8,cu)]),_:2},1024)),64))]),_:1},8,["modules"])}var fu=R(pu,[["render",uu],["__scopeId","data-v-035dc536"]]),mu=Object.freeze(Object.defineProperty({__proto__:null,default:fu},Symbol.toStringTag,{value:"Module"}));const hu=G({name:"swiper-example-3d-coverflow",title:"3D Coverflow effect",url:"file:///examples/vue-awesome-swiper/25-effect-coverflow.vue",components:{Swiper:F,SwiperSlide:q},setup(){return{modules:[X,Gr]}}}),wu={class:"coverflow-example"},gu=["src"];function _u(s,e,t,i,l,n){const r=P("swiper-slide"),a=P("swiper");return I(),V("div",wu,[m(a,{class:"swiper",modules:s.modules,pagination:!0,effect:"coverflow","grab-cursor":!0,"centered-slides":!0,"slides-per-view":"auto","coverflow-effect":{rotate:50,stretch:0,depth:100,modifier:1,slideShadows:!0}},{default:f(()=>[(I(),V(ee,null,le(8,d=>m(r,{class:"slide",key:d},{default:f(()=>[E("img",{src:`/images/example/${d}.jpg`},null,8,gu)]),_:2},1024)),64))]),_:1},8,["modules"])])}var vu=R(hu,[["render",_u],["__scopeId","data-v-531a7608"]]),Su=Object.freeze(Object.defineProperty({__proto__:null,default:vu},Symbol.toStringTag,{value:"Module"}));const bu=G({name:"swiper-example-3d-cube",title:"3D Cube effect",url:"file:///examples/vue-awesome-swiper/26-effect-cube.vue",components:{Swiper:F,SwiperSlide:q},setup(){return{modules:[X,Br]}}}),yu={class:"cube-example"},$u=["src"];function xu(s,e,t,i,l,n){const r=P("swiper-slide"),a=P("swiper");return I(),V("div",yu,[m(a,{class:"swiper",modules:s.modules,pagination:!0,effect:"cube","grab-cursor":!0,"cube-effect":{shadow:!0,slideShadows:!0,shadowOffset:20,shadowScale:.94}},{default:f(()=>[(I(),V(ee,null,le(5,d=>m(r,{class:"slide",key:d},{default:f(()=>[E("img",{src:`/images/example/${d}.jpg`},null,8,$u)]),_:2},1024)),64))]),_:1},8,["modules","cube-effect"])])}var Cu=R(bu,[["render",xu],["__scopeId","data-v-331f635e"]]),Eu=Object.freeze(Object.defineProperty({__proto__:null,default:Cu},Symbol.toStringTag,{value:"Module"}));const Tu=G({name:"swiper-example-3d-flip",title:"3D Flip effect",url:"file:///examples/vue-awesome-swiper/27-effect-flip.vue",components:{Swiper:F,SwiperSlide:q},setup(){return{modules:[X,re,Dr]}}}),ku={class:"flip-example"},Pu=["src"];function Mu(s,e,t,i,l,n){const r=P("swiper-slide"),a=P("swiper");return I(),V("div",ku,[m(a,{class:"swiper",modules:s.modules,effect:"flip","grab-cursor":!0,pagination:!0,navigation:!0},{default:f(()=>[(I(),V(ee,null,le(6,d=>m(r,{class:"slide",key:d},{default:f(()=>[E("img",{src:`/images/example/${d}.jpg`},null,8,Pu)]),_:2},1024)),64))]),_:1},8,["modules"])])}var zu=R(Tu,[["render",Mu],["__scopeId","data-v-c60ed696"]]),Iu=Object.freeze(Object.defineProperty({__proto__:null,default:zu},Symbol.toStringTag,{value:"Module"}));const Ou=G({name:"swiper-example-effect-creative",title:"Creative effect",url:"file:///examples/vue-awesome-swiper/28-effect-creative.vue",components:{Swiper:F,SwiperSlide:q},setup(){const s=se(!0),e=se(0);return{effects:[{prev:{shadow:!0,translate:[0,0,-400]},next:{translate:["100%",0,0]}},{prev:{shadow:!0,translate:["-120%",0,-500]},next:{shadow:!0,translate:["120%",0,-500]}},{prev:{shadow:!0,translate:["-20%",0,-1]},next:{translate:["100%",0,0]}},{prev:{shadow:!0,translate:[0,0,-800],rotate:[180,0,0]},next:{shadow:!0,translate:[0,0,-800],rotate:[-180,0,0]}},{prev:{shadow:!0,translate:["-125%",0,-800],rotate:[0,0,-90]},next:{shadow:!0,translate:["125%",0,-800],rotate:[0,0,90]}},{prev:{shadow:!0,origin:"left center",translate:["-5%",0,-200],rotate:[0,100,0]},next:{origin:"right center",translate:["5%",0,-200],rotate:[0,-100,0]}}],effectIndex:e,render:s,setEffect:l=>{e.value=l,ss(()=>{s.value=!1,ss(()=>{s.value=!0})})},modules:[X,Rr]}}}),Au={class:"creative-example"},Lu={class:"toolbar"},Nu=["onClick"],ju=["src"];function Bu(s,e,t,i,l,n){const r=P("swiper-slide"),a=P("swiper");return I(),V("div",Au,[E("div",Lu,[(I(!0),V(ee,null,le(s.effects,(d,u)=>(I(),V("button",{key:u,onClick:c=>s.setEffect(u)}," Effect "+ie(u),9,Nu))),128))]),s.render?(I(),W(a,{key:0,class:"swiper",modules:s.modules,effect:"creative","creative-effect":s.effects[s.effectIndex],"grab-cursor":!0,pagination:!0},{default:f(()=>[(I(),V(ee,null,le(6,d=>m(r,{class:"slide",key:d},{default:f(()=>[E("img",{src:`/images/example/${d}.jpg`},null,8,ju)]),_:2},1024)),64))]),_:1},8,["modules","creative-effect"])):ue("",!0)])}var Du=R(Ou,[["render",Bu],["__scopeId","data-v-48a89e89"]]),Gu=Object.freeze(Object.defineProperty({__proto__:null,default:Du},Symbol.toStringTag,{value:"Module"}));const Ru=G({name:"swiper-example-keyboard-control",title:"Keyboard control",url:"file:///examples/vue-awesome-swiper/29-keyboard-control.vue",components:{Swiper:F,SwiperSlide:q},setup(){return{modules:[X,re,Ns]}}}),Hu=g("Slide 1"),Vu=g("Slide 2"),Wu=g("Slide 3"),Fu=g("Slide 4"),qu=g("Slide 5"),Yu=g("Slide 6"),Xu=g("Slide 7"),Uu=g("Slide 8");function Ku(s,e,t,i,l,n){const r=P("swiper-slide"),a=P("swiper");return I(),W(a,{class:"swiper",modules:s.modules,"slides-per-view":1,"space-between":30,keyboard:{enabled:!0},pagination:{clickable:!0},navigation:!0},{default:f(()=>[m(r,{class:"slide"},{default:f(()=>[Hu]),_:1}),m(r,{class:"slide"},{default:f(()=>[Vu]),_:1}),m(r,{class:"slide"},{default:f(()=>[Wu]),_:1}),m(r,{class:"slide"},{default:f(()=>[Fu]),_:1}),m(r,{class:"slide"},{default:f(()=>[qu]),_:1}),m(r,{class:"slide"},{default:f(()=>[Yu]),_:1}),m(r,{class:"slide"},{default:f(()=>[Xu]),_:1}),m(r,{class:"slide"},{default:f(()=>[Uu]),_:1})]),_:1},8,["modules"])}var Zu=R(Ru,[["render",Ku],["__scopeId","data-v-0a2ce994"]]),Ju=Object.freeze(Object.defineProperty({__proto__:null,default:Zu},Symbol.toStringTag,{value:"Module"}));const Qu=G({name:"swiper-example-mousewheel-control",title:"Mousewheel control",url:"file:///examples/vue-awesome-swiper/30-mousewheel-control.vue",components:{Swiper:F,SwiperSlide:q},setup(){return{modules:[X,He]}}}),ef=g("Slide 1"),sf=g("Slide 2"),tf=g("Slide 3"),rf=g("Slide 4"),nf=g("Slide 5"),lf=g("Slide 6"),af=g("Slide 7"),of=g("Slide 8");function df(s,e,t,i,l,n){const r=P("swiper-slide"),a=P("swiper");return I(),W(a,{class:"swiper",modules:s.modules,direction:"vertical","slides-per-view":1,"space-between":30,mousewheel:!0,pagination:{clickable:!0}},{default:f(()=>[m(r,{class:"slide"},{default:f(()=>[ef]),_:1}),m(r,{class:"slide"},{default:f(()=>[sf]),_:1}),m(r,{class:"slide"},{default:f(()=>[tf]),_:1}),m(r,{class:"slide"},{default:f(()=>[rf]),_:1}),m(r,{class:"slide"},{default:f(()=>[nf]),_:1}),m(r,{class:"slide"},{default:f(()=>[lf]),_:1}),m(r,{class:"slide"},{default:f(()=>[af]),_:1}),m(r,{class:"slide"},{default:f(()=>[of]),_:1})]),_:1},8,["modules"])}var pf=R(Qu,[["render",df],["__scopeId","data-v-30b8ef96"]]),cf=Object.freeze(Object.defineProperty({__proto__:null,default:pf},Symbol.toStringTag,{value:"Module"}));const uf=G({name:"swiper-example-autoplay",title:"Autoplay",url:"file:///examples/vue-awesome-swiper/31-autoplay.vue",components:{Swiper:F,SwiperSlide:q},setup(){return{modules:[X,re,Lr]}}}),ff=g("Slide 1"),mf=g("Slide 2"),hf=g("Slide 3"),wf=g("Slide 4"),gf=g("Slide 5"),_f=g("Slide 6"),vf=g("Slide 7"),Sf=g("Slide 8");function bf(s,e,t,i,l,n){const r=P("swiper-slide"),a=P("swiper");return I(),W(a,{class:"swiper",modules:s.modules,"space-between":30,"centered-slides":!0,navigation:!0,pagination:{clickable:!0},autoplay:{delay:2500,disableOnInteraction:!1}},{default:f(()=>[m(r,{class:"slide"},{default:f(()=>[ff]),_:1}),m(r,{class:"slide"},{default:f(()=>[mf]),_:1}),m(r,{class:"slide"},{default:f(()=>[hf]),_:1}),m(r,{class:"slide"},{default:f(()=>[wf]),_:1}),m(r,{class:"slide"},{default:f(()=>[gf]),_:1}),m(r,{class:"slide"},{default:f(()=>[_f]),_:1}),m(r,{class:"slide"},{default:f(()=>[vf]),_:1}),m(r,{class:"slide"},{default:f(()=>[Sf]),_:1})]),_:1},8,["modules"])}var yf=R(uf,[["render",bf],["__scopeId","data-v-874170f8"]]),$f=Object.freeze(Object.defineProperty({__proto__:null,default:yf},Symbol.toStringTag,{value:"Module"}));const xf=G({name:"swiper-example-dynamic-slides",title:"Dynamic slides",url:"file:///examples/vue-awesome-swiper/32-dynamic-slides.vue",components:{Swiper:F,SwiperSlide:q},setup(){const s=Re([1,2,3,4,5]);return{modules:[X,re],slides:s,appendSlide:()=>s.push(s.length+1),prependSlide:()=>s.unshift(s[0]-1),popSlide:()=>s.pop(),shiftSlide:()=>s.shift()}}}),Cf={class:"dynamic-example"},Ef={class:"toolbar"};function Tf(s,e,t,i,l,n){const r=P("swiper-slide"),a=P("swiper");return I(),V("div",Cf,[E("div",Ef,[E("button",{onClick:e[0]||(e[0]=(...d)=>s.prependSlide&&s.prependSlide(...d))},"Prepend slide"),E("button",{onClick:e[1]||(e[1]=(...d)=>s.appendSlide&&s.appendSlide(...d))},"Append slide"),E("button",{onClick:e[2]||(e[2]=(...d)=>s.popSlide&&s.popSlide(...d))},"Pop slide"),E("button",{onClick:e[3]||(e[3]=(...d)=>s.shiftSlide&&s.shiftSlide(...d))},"Shift slide")]),m(a,{class:"swiper","slides-per-view":3,"centered-slides":!0,"space-between":30,pagination:{type:"fraction"},navigation:!0,modules:s.modules},{default:f(()=>[(I(!0),V(ee,null,le(s.slides,d=>(I(),W(r,{key:d,class:"slide"},{default:f(()=>[g(" Slide "+ie(d),1)]),_:2},1024))),128))]),_:1},8,["modules"])])}var kf=R(xf,[["render",Tf],["__scopeId","data-v-0e6b8991"]]),Pf=Object.freeze(Object.defineProperty({__proto__:null,default:kf},Symbol.toStringTag,{value:"Module"}));const Mf=G({name:"swiper-example-thumbs-gallery",title:"Thumbs gallery with Two-way control",url:"file:///examples/vue-awesome-swiper/33-thumbs-gallery.vue",components:{Swiper:F,SwiperSlide:q},setup(){const s=se();return{modules:[re,Nr],setThumbsSwiper:t=>{s.value=t},thumbsSwiper:s}}}),zf={class:"thumb-example"},If=["src"],Of=["src"];function Af(s,e,t,i,l,n){const r=P("swiper-slide"),a=P("swiper");return I(),V("div",zf,[m(a,{class:"top-swiper",style:{"--swiper-navigation-color":"#fff","--swiper-pagination-color":"#fff"},modules:s.modules,"space-between":10,navigation:!0,thumbs:{swiper:s.thumbsSwiper}},{default:f(()=>[(I(),V(ee,null,le(8,d=>m(r,{class:"slide",key:d},{default:f(()=>[E("img",{src:`/images/example/${d}.jpg`},null,8,If)]),_:2},1024)),64))]),_:1},8,["modules","thumbs"]),m(a,{class:"thumbs-swiper",modules:s.modules,"space-between":10,"slides-per-view":4,"watch-slides-progress":!0,"prevent-clicks":!1,"prevent-clicks-propagation":!1,onSwiper:s.setThumbsSwiper},{default:f(()=>[(I(),V(ee,null,le(8,d=>m(r,{class:"slide",key:d},{default:f(()=>[E("img",{src:`/images/example/${d}.jpg`},null,8,Of)]),_:2},1024)),64))]),_:1},8,["modules","onSwiper"])])}var Lf=R(Mf,[["render",Af],["__scopeId","data-v-265460a3"]]),Nf=Object.freeze(Object.defineProperty({__proto__:null,default:Lf},Symbol.toStringTag,{value:"Module"}));const jf=G({name:"swiper-example-zoom",title:"Zoom",url:"file:///examples/vue-awesome-swiper/34-zoom.vue",components:{Swiper:F,SwiperSlide:q},setup(){return{modules:[X,re,Or]}}}),Bf={class:"swiper-zoom-container"},Df=["src"];function Gf(s,e,t,i,l,n){const r=P("swiper-slide"),a=P("swiper");return I(),W(a,{class:"swiper",style:{"--swiper-navigation-color":"#fff","--swiper-pagination-color":"#fff"},modules:s.modules,zoom:!0,navigation:!0,pagination:{clickable:!0}},{default:f(()=>[(I(),V(ee,null,le(8,d=>m(r,{key:d,class:"slide"},{default:f(()=>[E("div",Bf,[E("img",{src:`/images/example/${d}.jpg`},null,8,Df)])]),_:2},1024)),64))]),_:1},8,["modules"])}var Rf=R(jf,[["render",Gf],["__scopeId","data-v-6a92bcfc"]]),Hf=Object.freeze(Object.defineProperty({__proto__:null,default:Rf},Symbol.toStringTag,{value:"Module"}));const Vf=G({name:"swiper-example-lazy-loading-image",title:"Lazy loading images",url:"file:///examples/vue-awesome-swiper/35-lazy-load-images.vue",components:{Swiper:F,SwiperSlide:q},setup(){return{modules:[Ar,X,re]}}}),Wf=s=>(fe("data-v-69b43b5a"),s=s(),me(),s),Ff=["data-src"],qf=Wf(()=>E("div",{class:"swiper-lazy-preloader swiper-lazy-preloader-white"},null,-1));function Yf(s,e,t,i,l,n){const r=P("swiper-slide"),a=P("swiper");return I(),W(a,{class:"swiper",style:{"--swiper-navigation-color":"#fff","--swiper-pagination-color":"#fff"},modules:s.modules,lazy:!0,navigation:!0,pagination:{clickable:!0}},{default:f(()=>[(I(),V(ee,null,le(8,d=>m(r,{key:d,class:"slide"},{default:f(()=>[E("img",{"data-src":`/images/example/${d}.jpg`,class:"swiper-lazy"},null,8,Ff),qf]),_:2},1024)),64))]),_:1},8,["modules"])}var Xf=R(Vf,[["render",Yf],["__scopeId","data-v-69b43b5a"]]),Uf=Object.freeze(Object.defineProperty({__proto__:null,default:Xf},Symbol.toStringTag,{value:"Module"}));const Kf=G({name:"swiper-example-parallax",title:"Parallax",url:"file:///examples/vue-awesome-swiper/36-parallax.vue",components:{Swiper:F,SwiperSlide:q},setup(){return{modules:[Ir,X,re]}}}),ge=s=>(fe("data-v-163db58b"),s=s(),me(),s),Zf=ge(()=>E("h1",{class:"title","data-swiper-parallax":"-300"},"Slide 1",-1)),Jf=ge(()=>E("h2",{class:"subtitle","data-swiper-parallax":"-200"},"Subtitle",-1)),Qf=ge(()=>E("div",{class:"text","data-swiper-parallax":"-100"},[E("p",null," Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam dictum mattis velit, sit amet faucibus felis iaculis nec. Nulla laoreet justo vitae porttitor porttitor. Suspendisse in sem justo. Integer laoreet magna nec elit suscipit, ac laoreet nibh euismod. Aliquam hendrerit lorem at elit facilisis rutrum. Ut at ullamcorper velit. Nulla ligula nisi, imperdiet ut lacinia nec, tincidunt ut libero. Aenean feugiat non eros quis feugiat. ")],-1)),em=ge(()=>E("h1",{class:"title","data-swiper-parallax":"-300"},"Slide 2",-1)),sm=ge(()=>E("h2",{class:"subtitle","data-swiper-parallax":"-200"},"Subtitle",-1)),tm=ge(()=>E("div",{class:"text","data-swiper-parallax":"-100"},[E("p",null," Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam dictum mattis velit, sit amet faucibus felis iaculis nec. Nulla laoreet justo vitae porttitor porttitor. Suspendisse in sem justo. Integer laoreet magna nec elit suscipit, ac laoreet nibh euismod. Aliquam hendrerit lorem at elit facilisis rutrum. Ut at ullamcorper velit. Nulla ligula nisi, imperdiet ut lacinia nec, tincidunt ut libero. Aenean feugiat non eros quis feugiat. ")],-1)),im=ge(()=>E("h1",{class:"title","data-swiper-parallax":"-300"},"Slide 3",-1)),rm=ge(()=>E("h2",{class:"subtitle","data-swiper-parallax":"-200"},"Subtitle",-1)),nm=ge(()=>E("div",{class:"text","data-swiper-parallax":"-100"},[E("p",null," Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam dictum mattis velit, sit amet faucibus felis iaculis nec. Nulla laoreet justo vitae porttitor porttitor. Suspendisse in sem justo. Integer laoreet magna nec elit suscipit, ac laoreet nibh euismod. Aliquam hendrerit lorem at elit facilisis rutrum. Ut at ullamcorper velit. Nulla ligula nisi, imperdiet ut lacinia nec, tincidunt ut libero. Aenean feugiat non eros quis feugiat. ")],-1));function lm(s,e,t,i,l,n){const r=P("swiper-slide"),a=P("swiper");return I(),W(a,{class:"swiper",style:{"--swiper-navigation-color":"#fff","--swiper-pagination-color":"#fff"},modules:s.modules,speed:600,parallax:!0,navigation:!0,pagination:{clickable:!0}},{"container-start":f(()=>[E("div",{class:"parallax-bg","data-swiper-parallax":"-23%",style:Ge({backgroundImage:"url(/images/example/1.jpg)"})},null,4)]),default:f(()=>[m(r,{class:"slide"},{default:f(()=>[Zf,Jf,Qf]),_:1}),m(r,{class:"slide"},{default:f(()=>[em,sm,tm]),_:1}),m(r,{class:"slide"},{default:f(()=>[im,rm,nm]),_:1})]),_:1},8,["modules"])}var am=R(Kf,[["render",lm],["__scopeId","data-v-163db58b"]]),om=Object.freeze(Object.defineProperty({__proto__:null,default:am},Symbol.toStringTag,{value:"Module"}));const dm=G({name:"swiper-example-rtl",title:"RTL layout",url:"file:///examples/vue-awesome-swiper/37-rtl.vue",components:{Swiper:F,SwiperSlide:q},setup(){return{modules:[X,re]}}}),pm=g("Slide 1"),cm=g("Slide 2"),um=g("Slide 3"),fm=g("Slide 4"),mm=g("Slide 5"),hm=g("Slide 6"),wm=g("Slide 7"),gm=g("Slide 8");function _m(s,e,t,i,l,n){const r=P("swiper-slide"),a=P("swiper");return I(),W(a,{class:"swiper",modules:s.modules,navigation:!0,pagination:{clickable:!0},dir:"rtl"},{default:f(()=>[m(r,{class:"slide"},{default:f(()=>[pm]),_:1}),m(r,{class:"slide"},{default:f(()=>[cm]),_:1}),m(r,{class:"slide"},{default:f(()=>[um]),_:1}),m(r,{class:"slide"},{default:f(()=>[fm]),_:1}),m(r,{class:"slide"},{default:f(()=>[mm]),_:1}),m(r,{class:"slide"},{default:f(()=>[hm]),_:1}),m(r,{class:"slide"},{default:f(()=>[wm]),_:1}),m(r,{class:"slide"},{default:f(()=>[gm]),_:1})]),_:1},8,["modules"])}var vm=R(dm,[["render",_m],["__scopeId","data-v-ea6c211a"]]),Sm=Object.freeze(Object.defineProperty({__proto__:null,default:vm},Symbol.toStringTag,{value:"Module"}));const bm=G({name:"swiper-example-responsive-breakpoints",title:"Responsive breakpoints",url:"file:///examples/vue-awesome-swiper/38-responsive-breakpoints.vue",components:{Swiper:F,SwiperSlide:q},setup(){return{modules:[X]}}}),ym=s=>(fe("data-v-57e2a420"),s=s(),me(),s),$m=ym(()=>E("div",{class:"tip"},"\u2192 Resize the browser window \u2190",-1)),xm=g("Slide 1"),Cm=g("Slide 2"),Em=g("Slide 3"),Tm=g("Slide 4"),km=g("Slide 5"),Pm=g("Slide 6"),Mm=g("Slide 7"),zm=g("Slide 8"),Im=g("Slide 9"),Om=g("Slide 10");function Am(s,e,t,i,l,n){const r=P("swiper-slide"),a=P("swiper");return I(),V(ee,null,[$m,m(a,{class:"swiper",modules:s.modules,"slides-per-view":1,"space-between":10,pagination:{clickable:!0},breakpoints:{"640":{slidesPerView:2,spaceBetween:20},"768":{slidesPerView:4,spaceBetween:40},"1024":{slidesPerView:5,spaceBetween:50}}},{default:f(()=>[m(r,{class:"slide"},{default:f(()=>[xm]),_:1}),m(r,{class:"slide"},{default:f(()=>[Cm]),_:1}),m(r,{class:"slide"},{default:f(()=>[Em]),_:1}),m(r,{class:"slide"},{default:f(()=>[Tm]),_:1}),m(r,{class:"slide"},{default:f(()=>[km]),_:1}),m(r,{class:"slide"},{default:f(()=>[Pm]),_:1}),m(r,{class:"slide"},{default:f(()=>[Mm]),_:1}),m(r,{class:"slide"},{default:f(()=>[zm]),_:1}),m(r,{class:"slide"},{default:f(()=>[Im]),_:1}),m(r,{class:"slide"},{default:f(()=>[Om]),_:1})]),_:1},8,["modules"])],64)}var Lm=R(bm,[["render",Am],["__scopeId","data-v-57e2a420"]]),Nm=Object.freeze(Object.defineProperty({__proto__:null,default:Lm},Symbol.toStringTag,{value:"Module"}));const jm=G({name:"swiper-example-auto-height",title:"Auto height",url:"file:///examples/vue-awesome-swiper/39-autoheight.vue",components:{Swiper:F,SwiperSlide:q},setup(){return{modules:[X,re]}}}),Bm=g("Slide 1"),Dm=g("Slide 2"),Gm=g("Slide 3"),Rm=g("Slide 4"),Hm=g("Slide 5"),Vm=g("Slide 6"),Wm=g("Slide 7"),Fm=g("Slide 8");function qm(s,e,t,i,l,n){const r=P("swiper-slide"),a=P("swiper");return I(),W(a,{class:"swiper",modules:s.modules,"auto-height":!0,"space-between":20,navigation:!0,pagination:{clickable:!0}},{default:f(()=>[m(r,{class:"slide"},{default:f(()=>[Bm]),_:1}),m(r,{class:"slide"},{default:f(()=>[Dm]),_:1}),m(r,{class:"slide"},{default:f(()=>[Gm]),_:1}),m(r,{class:"slide"},{default:f(()=>[Rm]),_:1}),m(r,{class:"slide"},{default:f(()=>[Hm]),_:1}),m(r,{class:"slide"},{default:f(()=>[Vm]),_:1}),m(r,{class:"slide"},{default:f(()=>[Wm]),_:1}),m(r,{class:"slide"},{default:f(()=>[Fm]),_:1})]),_:1},8,["modules"])}var Ym=R(jm,[["render",qm],["__scopeId","data-v-1a9a2aa4"]]),Xm=Object.freeze(Object.defineProperty({__proto__:null,default:Ym},Symbol.toStringTag,{value:"Module"}));const Um=G({name:"swiper-example-slideable-navigation-drawer",title:"Slideable navigation drawer",url:"file:///examples/vue-awesome-swiper/40-slideable-menu.vue",components:{Swiper:F,SwiperSlide:q},setup(){let s=null;const e=n=>{s=n},t=se(!1);return{menuOpened:t,toggleMenu:()=>{t.value?s==null||s.slideNext():s==null||s.slidePrev()},setSwiperRef:e,handleSlideChange:()=>{t.value=(s==null?void 0:s.activeIndex)===0}}}}),We=s=>(fe("data-v-383a6c0e"),s=s(),me(),s),Km=g("Menu slide"),Zm=We(()=>E("div",{class:"bar"},null,-1)),Jm=We(()=>E("div",{class:"bar"},null,-1)),Qm=We(()=>E("div",{class:"bar"},null,-1)),eh=[Zm,Jm,Qm],sh=We(()=>E("div",null,"Content slide",-1));function th(s,e,t,i,l,n){const r=P("swiper-slide"),a=P("swiper");return I(),W(a,{class:"swiper","slides-per-view":"auto","initial-slide":1,"resistance-ratio":0,onSwiper:s.setSwiperRef,onSlideChange:s.handleSlideChange},{default:f(()=>[m(r,{class:"menu"},{default:f(()=>[Km]),_:1}),m(r,{class:"content"},{default:f(()=>[E("div",{class:Se(["menu-button",{opened:s.menuOpened}]),onClick:e[0]||(e[0]=(...d)=>s.toggleMenu&&s.toggleMenu(...d))},eh,2),sh]),_:1})]),_:1},8,["onSwiper","onSlideChange"])}var ih=R(Um,[["render",th],["__scopeId","data-v-383a6c0e"]]),rh=Object.freeze(Object.defineProperty({__proto__:null,default:ih},Symbol.toStringTag,{value:"Module"}));const nh=G({name:"swiper-example-virtual-slides",title:"Virtual slides",url:"file:///examples/vue-awesome-swiper/41-virtual-slides.vue",components:{Swiper:F,SwiperSlide:q},setup(){let s=null;const e=a=>{s=a},t=a=>{s==null||s.slideTo(a-1,0)},i=Re(Array.from({length:500}).map((a,d)=>d+1));let l=1;return{modules:[X,re,zr],setSwiperRef:e,slides:i,slideTo:t,append:()=>{i.push(i.length)},prepend:()=>{i.unshift(l-2,l-1),l-=2,s==null||s.slideTo(s.activeIndex+2,0)}}}}),lh={class:"toolbar"};function ah(s,e,t,i,l,n){const r=P("swiper-slide"),a=P("swiper");return I(),V(ee,null,[E("div",lh,[E("button",{onClick:e[0]||(e[0]=d=>s.prepend()),class:"prepend-2-slides"},"Prepend 2 Slides"),E("button",{onClick:e[1]||(e[1]=d=>s.slideTo(1)),class:"prepend-slide"},"Slide 1"),E("button",{onClick:e[2]||(e[2]=d=>s.slideTo(250)),class:"slide-250"},"Slide 250"),E("button",{onClick:e[3]||(e[3]=d=>s.slideTo(500)),class:"slide-500"},"Slide 500"),E("button",{onClick:e[4]||(e[4]=d=>s.append()),class:"append-slides"},"Append Slide")]),m(a,{class:"swiper",modules:s.modules,virtual:!0,"slides-per-view":3,"centered-slides":!0,"space-between":30,navigation:!0,pagination:{type:"fraction"},onSwiper:s.setSwiperRef},{default:f(()=>[(I(!0),V(ee,null,le(s.slides,(d,u)=>(I(),W(r,{key:u,"virtual-index":u,class:"slide"},{default:f(()=>[g(" Slide "+ie(d),1)]),_:2},1032,["virtual-index"]))),128))]),_:1},8,["modules","onSwiper"])],64)}var oh=R(nh,[["render",ah],["__scopeId","data-v-03f46738"]]),dh=Object.freeze(Object.defineProperty({__proto__:null,default:oh},Symbol.toStringTag,{value:"Module"}));const ph=G({name:"swiper-example-change-direction",title:"Change direction",url:"file:///examples/vue-awesome-swiper/42-change-direction.vue",components:{Swiper:F,SwiperSlide:q},setup(){let s=null;return{modules:[re],setSwiperRef:i=>{s=i},handleResize:()=>{s==null||s.changeDirection(window.innerWidth<=960?"vertical":"horizontal")}}}}),ch=g("Slide 1"),uh=g("Slide 2"),fh=g("Slide 3"),mh=g("Slide 4"),hh=g("Slide 5"),wh=g("Slide 6"),gh=g("Slide 7"),_h=g("Slide 8");function vh(s,e,t,i,l,n){const r=P("swiper-slide"),a=P("swiper");return I(),W(a,{class:"swiper",modules:s.modules,direction:"horizontal","slides-per-view":3,"space-between":30,navigation:!0,onSwiper:s.setSwiperRef,onResize:s.handleResize},{default:f(()=>[m(r,{class:"slide"},{default:f(()=>[ch]),_:1}),m(r,{class:"slide"},{default:f(()=>[uh]),_:1}),m(r,{class:"slide"},{default:f(()=>[fh]),_:1}),m(r,{class:"slide"},{default:f(()=>[mh]),_:1}),m(r,{class:"slide"},{default:f(()=>[hh]),_:1}),m(r,{class:"slide"},{default:f(()=>[wh]),_:1}),m(r,{class:"slide"},{default:f(()=>[gh]),_:1}),m(r,{class:"slide"},{default:f(()=>[_h]),_:1})]),_:1},8,["modules","onSwiper","onResize"])}var Sh=R(ph,[["render",vh],["__scopeId","data-v-f3b6458a"]]),bh=Object.freeze(Object.defineProperty({__proto__:null,default:Sh},Symbol.toStringTag,{value:"Module"}));const Cs={"./01-advance.vue":Fl,"./02-default.vue":ia,"./03-navigation.vue":ha,"./04-pagination.vue":Ta,"./05-pagination-dynamic.vue":Da,"./06-pagination-progress.vue":Za,"./07-pagination-fraction.vue":po,"./08-pagination-custom.vue":yo,"./09-scrollbar.vue":Ao,"./10-vertical.vue":qo,"./11-space-between.vue":rd,"./12-slides-per-view.vue":wd,"./13-slides-per-view-auto.vue":kd,"./14-centered.vue":Gd,"./15-centered-auto.vue":Jd,"./16-freemode.vue":pp,"./17-scroll-container.vue":Wp,"./18-slides-per-column.vue":rc,"./19-nested.vue":wc,"./20-grab-cursor.vue":kc,"./21-infinite-loop.vue":Gc,"./22-infinite-loop-with-slides-per-group.vue":Jc,"./23-slides-per-group-skip.vue":du,"./24-effect-fade.vue":mu,"./25-effect-coverflow.vue":Su,"./26-effect-cube.vue":Eu,"./27-effect-flip.vue":Iu,"./28-effect-creative.vue":Gu,"./29-keyboard-control.vue":Ju,"./30-mousewheel-control.vue":cf,"./31-autoplay.vue":$f,"./32-dynamic-slides.vue":Pf,"./33-thumbs-gallery.vue":Nf,"./34-zoom.vue":Hf,"./35-lazy-load-images.vue":Uf,"./36-parallax.vue":om,"./37-rtl.vue":Sm,"./38-responsive-breakpoints.vue":Nm,"./39-autoheight.vue":Xm,"./40-slideable-menu.vue":rh,"./41-virtual-slides.vue":dh,"./42-change-direction.vue":bh},yh={"./01-advance.vue":`<template>\r
  <div class="advance-example">\r
    <swiper\r
      class="horizontal-swiper"\r
      :modules="modules"\r
      :loop="true"\r
      :slides-per-view="3"\r
      :slides-per-group="3"\r
      :space-between="14"\r
      :pagination="{ clickable: true }"\r
      :watch-slides-progress="true"\r
      :prevent-clicks="false"\r
      :prevent-clicks-propagation="false"\r
      wrapper-tag="div"\r
      @swiper="handleHSwiperReady"\r
      @slide-change="handleHSwiperSlideChange"\r
    >\r
      <swiper-slide class="slide">\r
        <span>Loop Slide 1</span>\r
      </swiper-slide>\r
      <swiper-slide class="slide" v-slot="slide">\r
        <pre>{{ slide }}</pre>\r
      </swiper-slide>\r
      <swiper-slide class="slide">\r
        <span>Loop Slide 3</span>\r
        <button class="click swiper-no-swiping" @click.prevent="handleHwiperSlideClick(3)">\r
          {{ isSlideClicked(3) ? 'clicked \u2705' : 'click me \u{1F446}' }}\r
        </button>\r
      </swiper-slide>\r
      <swiper-slide class="slide">\r
        <span>Loop Slide 4</span>\r
        <button class="click swiper-no-swiping" @click="handleHwiperSlideClick(4)">\r
          {{ isSlideClicked(4) ? 'clicked \u2705' : 'click me \u{1F446}' }}\r
        </button>\r
      </swiper-slide>\r
      <swiper-slide class="slide">\r
        <span>Loop Slide 5</span>\r
        <button class="click swiper-no-swiping" @click="handleHwiperSlideClick(5)">\r
          {{ isSlideClicked(5) ? 'clicked \u2705' : 'click me \u{1F446}' }}\r
        </button>\r
      </swiper-slide>\r
      <swiper-slide class="slide">\r
        <span>Loop Slide 6</span>\r
        <button class="click swiper-no-swiping" @click="handleHwiperSlideClick(6)">\r
          {{ isSlideClicked(6) ? 'clicked \u2705' : 'click me \u{1F446}' }}\r
        </button>\r
      </swiper-slide>\r
    </swiper>\r
    <swiper\r
      class="vertical-swiper"\r
      :modules="modules"\r
      direction="vertical"\r
      :slides-per-view="2"\r
      :space-between="18"\r
      :mousewheel="true"\r
      @swiper="setVSwiperRef"\r
      @slide-change="updateVSwiperIndex"\r
    >\r
      <swiper-slide class="slide">\r
        <ulink class="link" href="https://swiperjs.com/">swiperjs.com</ulink>\r
        <i class="iconfont icon-link-external"></i>\r
      </swiper-slide>\r
      <swiper-slide class="slide">\r
        <ulink class="link" href="https://github.com/nolimits4web/swiper/discussions">\r
          discussions\r
        </ulink>\r
        <i class="iconfont icon-link-external"></i>\r
      </swiper-slide>\r
      <swiper-slide class="slide">Slide 3</swiper-slide>\r
      <swiper-slide class="slide">Slide 4</swiper-slide>\r
      <swiper-slide class="slide">Slide 5</swiper-slide>\r
      <swiper-slide class="slide">Slide 6</swiper-slide>\r
      <template #container-start>\r
        <button\r
          class="nav-button-prev"\r
          :disabled="vSwiperIndex === 0"\r
          @click="prevVSwiperSlide"\r
        >\r
          <i class="iconfont icon-arrow-down"></i>\r
        </button>\r
      </template>\r
      <template #container-end>\r
        <button\r
          class="nav-button-next"\r
          :disabled="vSwiperIndex === 5 - 1"\r
          @click="nextVSwiperSlide"\r
        >\r
          <i class="iconfont icon-arrow-up"></i>\r
        </button>\r
      </template>\r
    </swiper>\r
  </div>\r
</template>\r
\r
<script lang="ts">\r
  import { defineComponent, ref, reactive } from 'vue'\r
  import SwiperClass, { Pagination, Navigation, Grid, Mousewheel } from 'swiper'\r
  import { Swiper, SwiperSlide } from 'swiper/vue'\r
  import 'swiper/css'\r
  import 'swiper/css/navigation'\r
  import 'swiper/css/pagination'\r
\r
  export default defineComponent({\r
    name: 'swiper-example-advance',\r
    title: 'Advance example',\r
    url: import.meta.url,\r
    components: {\r
      Swiper,\r
      SwiperSlide\r
    },\r
    setup() {\r
      // horizontal swiper\r
      const handleHSwiperReady = (swiper: SwiperClass) => {\r
        console.log('SwiperComponentReady!', swiper)\r
      }\r
      const handleHSwiperSlideChange = (swiper: SwiperClass) => {\r
        console.log('handleHSwiperSlideChange!', swiper.realIndex)\r
      }\r
      const clickedMap = reactive(new Map<number, boolean>())\r
      const isSlideClicked = (id: number) => clickedMap.get(id)\r
      const handleHwiperSlideClick = (id: number) => {\r
        clickedMap.set(id, true)\r
        console.log('Click slide! target slide id:', id)\r
      }\r
\r
      // vertical swiper\r
      let vSwiperRef: SwiperClass | null = null\r
      const setVSwiperRef = (swiper: SwiperClass) => {\r
        vSwiperRef = swiper\r
      }\r
      const vSwiperIndex = ref<number>()\r
      const updateVSwiperIndex = () => {\r
        vSwiperIndex.value = vSwiperRef?.activeIndex\r
      }\r
      const prevVSwiperSlide = () => vSwiperRef?.slidePrev()\r
      const nextVSwiperSlide = () => vSwiperRef?.slideNext()\r
\r
      return {\r
        modules: [Grid, Pagination, Navigation, Mousewheel],\r
\r
        handleHSwiperReady,\r
        handleHSwiperSlideChange,\r
        handleHwiperSlideClick,\r
        isSlideClicked,\r
\r
        setVSwiperRef,\r
        vSwiperIndex,\r
        updateVSwiperIndex,\r
        prevVSwiperSlide,\r
        nextVSwiperSlide\r
      }\r
    }\r
  })\r
<\/script>\r
\r
<style lang="scss" scoped>\r
  @use 'sass:math';\r
  @import '@/styles/init.scss';\r
  @import './style.scss';\r
\r
  .advance-example {\r
    height: auto;\r
\r
    .horizontal-swiper {\r
      width: 100%;\r
      height: 240px;\r
      margin-bottom: $lg-gap;\r
\r
      /* for swiper loop mode */\r
      ::v-deep(.slide) {\r
        @include swiper-slide();\r
        flex-direction: column;\r
        font-size: $font-size-huge;\r
        background-color: $banner-bg;\r
\r
        pre {\r
          font-size: $font-size-base;\r
        }\r
      }\r
    }\r
\r
    .vertical-swiper {\r
      @include swiper-wrapper($height: 200px);\r
      position: relative;\r
    }\r
\r
    .slide {\r
      @include swiper-slide();\r
      font-size: $font-size-huge;\r
\r
      .link {\r
        text-decoration: none;\r
        margin-right: $xs-gap;\r
        color: $text-color;\r
        &:hover {\r
          color: $link-color;\r
        }\r
\r
        & + .iconfont {\r
          margin-top: 0.5em;\r
          font-size: $font-size-small;\r
        }\r
      }\r
\r
      .click {\r
        padding: 0.5em 1em;\r
        border: none;\r
        margin-top: 1.4rem;\r
        color: $text-color;\r
        background-color: $header-bg;\r
        border-radius: $sm-radius;\r
        cursor: pointer;\r
        &:hover {\r
          color: $link-color;\r
          background-color: $body-bg;\r
        }\r
      }\r
    }\r
\r
    .nav-button-next,\r
    .nav-button-prev {\r
      position: absolute;\r
      z-index: 9;\r
      top: 50%;\r
      margin: 0;\r
      padding: 0;\r
      border: none;\r
      $size: 2.4rem;\r
      width: $size;\r
      height: $size;\r
      margin-top: math.div(-$size, 2);\r
      display: inline-flex;\r
      justify-content: center;\r
      align-items: center;\r
      border-radius: 100%;\r
      opacity: 0.5;\r
      color: rgba(white, 0.6);\r
      background-color: var(--swiper-theme-color);\r
      transition: opacity $transition-time, visibility $transition-time;\r
      &[disabled] {\r
        cursor: no-drop;\r
        opacity: 0.3;\r
      }\r
      &:not([disabled]) {\r
        cursor: pointer;\r
        &:hover {\r
          opacity: 1;\r
          color: white;\r
        }\r
      }\r
\r
      .iconfont {\r
        transform: rotate(180deg);\r
      }\r
    }\r
\r
    .nav-button-next {\r
      right: $lg-gap * 2;\r
    }\r
\r
    .nav-button-prev {\r
      left: $lg-gap * 2;\r
    }\r
  }\r
</style>\r
`,"./02-default.vue":`<template>\r
  <swiper class="swiper">\r
    <swiper-slide class="slide">Slide 1</swiper-slide>\r
    <swiper-slide class="slide">Slide 2</swiper-slide>\r
    <swiper-slide class="slide">Slide 3</swiper-slide>\r
    <swiper-slide class="slide">Slide 4</swiper-slide>\r
    <swiper-slide class="slide">Slide 5</swiper-slide>\r
    <swiper-slide class="slide">Slide 6</swiper-slide>\r
    <swiper-slide class="slide">Slide 7</swiper-slide>\r
    <swiper-slide class="slide">Slide 8</swiper-slide>\r
  </swiper>\r
</template>\r
\r
<script lang="ts">\r
  import { defineComponent } from 'vue'\r
  import { Swiper, SwiperSlide } from 'swiper/vue'\r
  import 'swiper/css'\r
\r
  export default defineComponent({\r
    name: 'swiper-example-default',\r
    title: 'Default',\r
    url: import.meta.url,\r
    components: {\r
      Swiper,\r
      SwiperSlide\r
    }\r
  })\r
<\/script>\r
\r
<style lang="scss" scoped>\r
  @import '@/styles/init.scss';\r
  @import './style.scss';\r
\r
  .swiper {\r
    @include swiper-wrapper();\r
  }\r
\r
  .slide {\r
    @include swiper-slide();\r
  }\r
</style>\r
`,"./03-navigation.vue":`<template>\r
  <swiper class="swiper" :modules="modules" navigation>\r
    <swiper-slide class="slide">Slide 1</swiper-slide>\r
    <swiper-slide class="slide">Slide 2</swiper-slide>\r
    <swiper-slide class="slide">Slide 3</swiper-slide>\r
    <swiper-slide class="slide">Slide 4</swiper-slide>\r
    <swiper-slide class="slide">Slide 5</swiper-slide>\r
    <swiper-slide class="slide">Slide 6</swiper-slide>\r
    <swiper-slide class="slide">Slide 7</swiper-slide>\r
    <swiper-slide class="slide">Slide 8</swiper-slide>\r
  </swiper>\r
</template>\r
\r
<script lang="ts">\r
  import { defineComponent } from 'vue'\r
  import { Navigation } from 'swiper'\r
  import { Swiper, SwiperSlide } from 'swiper/vue'\r
  import 'swiper/css'\r
  import 'swiper/css/navigation'\r
\r
  export default defineComponent({\r
    name: 'swiper-example-navigation',\r
    title: 'Navigation',\r
    url: import.meta.url,\r
    components: {\r
      Swiper,\r
      SwiperSlide\r
    },\r
    setup() {\r
      return {\r
        modules: [Navigation]\r
      }\r
    }\r
  })\r
<\/script>\r
\r
<style lang="scss" scoped>\r
  @import '@/styles/init.scss';\r
  @import './style.scss';\r
\r
  .swiper {\r
    @include swiper-wrapper();\r
  }\r
\r
  .slide {\r
    @include swiper-slide();\r
  }\r
</style>\r
`,"./04-pagination.vue":`<template>\r
  <swiper class="swiper" :modules="modules" :pagination="{ clickable: true }">\r
    <swiper-slide class="slide">Slide 1</swiper-slide>\r
    <swiper-slide class="slide">Slide 2</swiper-slide>\r
    <swiper-slide class="slide">Slide 3</swiper-slide>\r
    <swiper-slide class="slide">Slide 4</swiper-slide>\r
    <swiper-slide class="slide">Slide 5</swiper-slide>\r
    <swiper-slide class="slide">Slide 6</swiper-slide>\r
    <swiper-slide class="slide">Slide 7</swiper-slide>\r
    <swiper-slide class="slide">Slide 8</swiper-slide>\r
  </swiper>\r
</template>\r
\r
<script lang="ts">\r
  import { defineComponent } from 'vue'\r
  import { Pagination } from 'swiper'\r
  import { Swiper, SwiperSlide } from 'swiper/vue'\r
  import 'swiper/css'\r
  import 'swiper/css/pagination'\r
\r
  export default defineComponent({\r
    name: 'swiper-example-pagination',\r
    title: 'Pagination',\r
    url: import.meta.url,\r
    components: {\r
      Swiper,\r
      SwiperSlide\r
    },\r
    setup() {\r
      return {\r
        modules: [Pagination]\r
      }\r
    }\r
  })\r
<\/script>\r
\r
<style lang="scss" scoped>\r
  @import '@/styles/init.scss';\r
  @import './style.scss';\r
\r
  .swiper {\r
    @include swiper-wrapper();\r
  }\r
\r
  .slide {\r
    @include swiper-slide();\r
  }\r
</style>\r
`,"./05-pagination-dynamic.vue":`<template>\r
  <swiper\r
    class="swiper"\r
    :modules="modules"\r
    :pagination="{ clickable: true, dynamicBullets: true }"\r
  >\r
    <swiper-slide class="slide">Slide 1</swiper-slide>\r
    <swiper-slide class="slide">Slide 2</swiper-slide>\r
    <swiper-slide class="slide">Slide 3</swiper-slide>\r
    <swiper-slide class="slide">Slide 4</swiper-slide>\r
    <swiper-slide class="slide">Slide 5</swiper-slide>\r
    <swiper-slide class="slide">Slide 6</swiper-slide>\r
    <swiper-slide class="slide">Slide 7</swiper-slide>\r
    <swiper-slide class="slide">Slide 8</swiper-slide>\r
  </swiper>\r
</template>\r
\r
<script lang="ts">\r
  import { defineComponent } from 'vue'\r
  import { Pagination } from 'swiper'\r
  import { Swiper, SwiperSlide } from 'swiper/vue'\r
  import 'swiper/css'\r
  import 'swiper/css/pagination'\r
\r
  export default defineComponent({\r
    name: 'swiper-example-pagination-dynamic',\r
    title: 'Pagination / Dynamic bullets',\r
    url: import.meta.url,\r
    components: {\r
      Swiper,\r
      SwiperSlide\r
    },\r
    setup() {\r
      return {\r
        modules: [Pagination]\r
      }\r
    }\r
  })\r
<\/script>\r
\r
<style lang="scss" scoped>\r
  @import '@/styles/init.scss';\r
  @import './style.scss';\r
\r
  .swiper {\r
    @include swiper-wrapper();\r
  }\r
\r
  .slide {\r
    @include swiper-slide();\r
  }\r
</style>\r
`,"./06-pagination-progress.vue":`<template>\r
  <swiper class="swiper" :modules="modules" :pagination="{ type: 'progressbar' }">\r
    <swiper-slide class="slide">Slide 1</swiper-slide>\r
    <swiper-slide class="slide">Slide 2</swiper-slide>\r
    <swiper-slide class="slide">Slide 3</swiper-slide>\r
    <swiper-slide class="slide">Slide 4</swiper-slide>\r
    <swiper-slide class="slide">Slide 5</swiper-slide>\r
    <swiper-slide class="slide">Slide 6</swiper-slide>\r
    <swiper-slide class="slide">Slide 7</swiper-slide>\r
    <swiper-slide class="slide">Slide 8</swiper-slide>\r
  </swiper>\r
</template>\r
\r
<script lang="ts">\r
  import { defineComponent } from 'vue'\r
  import { Pagination } from 'swiper'\r
  import { Swiper, SwiperSlide } from 'swiper/vue'\r
  import 'swiper/css'\r
  import 'swiper/css/pagination'\r
\r
  export default defineComponent({\r
    name: 'swiper-example-pagination-progress',\r
    title: 'Progress pagination',\r
    url: import.meta.url,\r
    components: {\r
      Swiper,\r
      SwiperSlide\r
    },\r
    setup() {\r
      return {\r
        modules: [Pagination]\r
      }\r
    }\r
  })\r
<\/script>\r
\r
<style lang="scss" scoped>\r
  @import '@/styles/init.scss';\r
  @import './style.scss';\r
\r
  .swiper {\r
    @include swiper-wrapper();\r
  }\r
\r
  .slide {\r
    @include swiper-slide();\r
  }\r
</style>\r
`,"./07-pagination-fraction.vue":`<template>\r
  <swiper class="swiper" :modules="modules" :pagination="{ type: 'fraction' }">\r
    <swiper-slide class="slide">Slide 1</swiper-slide>\r
    <swiper-slide class="slide">Slide 2</swiper-slide>\r
    <swiper-slide class="slide">Slide 3</swiper-slide>\r
    <swiper-slide class="slide">Slide 4</swiper-slide>\r
    <swiper-slide class="slide">Slide 5</swiper-slide>\r
    <swiper-slide class="slide">Slide 6</swiper-slide>\r
    <swiper-slide class="slide">Slide 7</swiper-slide>\r
    <swiper-slide class="slide">Slide 8</swiper-slide>\r
  </swiper>\r
</template>\r
\r
<script lang="ts">\r
  import { defineComponent } from 'vue'\r
  import { Pagination } from 'swiper'\r
  import { Swiper, SwiperSlide } from 'swiper/vue'\r
  import 'swiper/css'\r
  import 'swiper/css/pagination'\r
\r
  export default defineComponent({\r
    name: 'swiper-example-pagination-fraction',\r
    title: 'Fraction pagination',\r
    url: import.meta.url,\r
    components: {\r
      Swiper,\r
      SwiperSlide\r
    },\r
    setup() {\r
      return {\r
        modules: [Pagination]\r
      }\r
    }\r
  })\r
<\/script>\r
\r
<style lang="scss" scoped>\r
  @import '@/styles/init.scss';\r
  @import './style.scss';\r
\r
  .swiper {\r
    @include swiper-wrapper();\r
  }\r
\r
  .slide {\r
    @include swiper-slide();\r
  }\r
</style>\r
`,"./08-pagination-custom.vue":`<template>\r
  <swiper\r
    class="swiper"\r
    :modules="modules"\r
    :pagination="{ clickable: true, renderBullet: bulletRenderer }"\r
  >\r
    <swiper-slide class="slide">Slide 1</swiper-slide>\r
    <swiper-slide class="slide">Slide 2</swiper-slide>\r
    <swiper-slide class="slide">Slide 3</swiper-slide>\r
    <swiper-slide class="slide">Slide 4</swiper-slide>\r
    <swiper-slide class="slide">Slide 5</swiper-slide>\r
    <swiper-slide class="slide">Slide 6</swiper-slide>\r
    <swiper-slide class="slide">Slide 7</swiper-slide>\r
    <swiper-slide class="slide">Slide 8</swiper-slide>\r
  </swiper>\r
</template>\r
\r
<script lang="ts">\r
  import { defineComponent } from 'vue'\r
  import { Pagination } from 'swiper'\r
  import { Swiper, SwiperSlide } from 'swiper/vue'\r
  import 'swiper/css'\r
  import 'swiper/css/pagination'\r
\r
  export default defineComponent({\r
    name: 'swiper-example-pagination-custom',\r
    title: 'Custom pagination',\r
    url: import.meta.url,\r
    components: {\r
      Swiper,\r
      SwiperSlide\r
    },\r
    setup() {\r
      const bulletRenderer = (index: number, className: string) => {\r
        const _className = \`\${className} swiper-pagination-bullet-custom\`\r
        return \`<span class="\${_className}">\${index + 1}</span>\`\r
      }\r
\r
      return {\r
        bulletRenderer,\r
        modules: [Pagination]\r
      }\r
    }\r
  })\r
<\/script>\r
\r
<style lang="scss" scoped>\r
  @import '@/styles/init.scss';\r
  @import './style.scss';\r
\r
  .swiper {\r
    @include swiper-wrapper();\r
\r
    ::v-deep(.swiper-pagination-bullet-custom) {\r
      $size: 20px;\r
      width: $size !important;\r
      height: $size !important;\r
      line-height: $size !important;\r
      text-align: center;\r
      background-color: $header-bg;\r
      color: $text-disabled;\r
      transition: all 0.2s;\r
      opacity: 0.6;\r
      &:hover {\r
        opacity: 1;\r
        color: $text-color;\r
      }\r
\r
      &.swiper-pagination-bullet-active {\r
        opacity: 1;\r
        color: $white;\r
        background-color: var(--swiper-theme-color);\r
      }\r
    }\r
  }\r
\r
  .slide {\r
    @include swiper-slide();\r
  }\r
</style>\r
`,"./09-scrollbar.vue":`<template>\r
  <swiper class="swiper" :modules="modules" :scrollbar="{ hide: true }">\r
    <swiper-slide class="slide">Slide 1</swiper-slide>\r
    <swiper-slide class="slide">Slide 2</swiper-slide>\r
    <swiper-slide class="slide">Slide 3</swiper-slide>\r
    <swiper-slide class="slide">Slide 4</swiper-slide>\r
    <swiper-slide class="slide">Slide 5</swiper-slide>\r
    <swiper-slide class="slide">Slide 6</swiper-slide>\r
    <swiper-slide class="slide">Slide 7</swiper-slide>\r
    <swiper-slide class="slide">Slide 8</swiper-slide>\r
  </swiper>\r
</template>\r
\r
<script lang="ts">\r
  import { defineComponent } from 'vue'\r
  import { Scrollbar } from 'swiper'\r
  import { Swiper, SwiperSlide } from 'swiper/vue'\r
  import 'swiper/css'\r
  import 'swiper/css/scrollbar'\r
\r
  export default defineComponent({\r
    name: 'swiper-example-scrollbar',\r
    title: 'Scrollbar',\r
    url: import.meta.url,\r
    components: {\r
      Swiper,\r
      SwiperSlide\r
    },\r
    setup() {\r
      return {\r
        modules: [Scrollbar]\r
      }\r
    }\r
  })\r
<\/script>\r
\r
<style lang="scss" scoped>\r
  @import '@/styles/init.scss';\r
  @import './style.scss';\r
\r
  .swiper {\r
    @include swiper-wrapper();\r
  }\r
\r
  .slide {\r
    @include swiper-slide();\r
  }\r
</style>\r
`,"./10-vertical.vue":`<template>\r
  <swiper\r
    class="swiper"\r
    :modules="modules"\r
    direction="vertical"\r
    :pagination="{ clickable: true }"\r
  >\r
    <swiper-slide class="slide">Slide 1</swiper-slide>\r
    <swiper-slide class="slide">Slide 2</swiper-slide>\r
    <swiper-slide class="slide">Slide 3</swiper-slide>\r
    <swiper-slide class="slide">Slide 4</swiper-slide>\r
    <swiper-slide class="slide">Slide 5</swiper-slide>\r
    <swiper-slide class="slide">Slide 6</swiper-slide>\r
    <swiper-slide class="slide">Slide 7</swiper-slide>\r
    <swiper-slide class="slide">Slide 8</swiper-slide>\r
  </swiper>\r
</template>\r
\r
<script lang="ts">\r
  import { defineComponent } from 'vue'\r
  import { Pagination } from 'swiper'\r
  import { Swiper, SwiperSlide } from 'swiper/vue'\r
  import 'swiper/css'\r
  import 'swiper/css/pagination'\r
\r
  export default defineComponent({\r
    name: 'swiper-example-vertical',\r
    title: 'Vertical slider',\r
    url: import.meta.url,\r
    components: {\r
      Swiper,\r
      SwiperSlide\r
    },\r
    setup() {\r
      return {\r
        modules: [Pagination]\r
      }\r
    }\r
  })\r
<\/script>\r
\r
<style lang="scss" scoped>\r
  @import '@/styles/init.scss';\r
  @import './style.scss';\r
\r
  .swiper {\r
    @include swiper-wrapper();\r
  }\r
\r
  .slide {\r
    @include swiper-slide();\r
  }\r
</style>\r
`,"./11-space-between.vue":`<template>\r
  <swiper\r
    class="swiper"\r
    :modules="modules"\r
    :space-between="30"\r
    :pagination="{ clickable: true }"\r
  >\r
    <swiper-slide class="slide">Slide 1</swiper-slide>\r
    <swiper-slide class="slide">Slide 2</swiper-slide>\r
    <swiper-slide class="slide">Slide 3</swiper-slide>\r
    <swiper-slide class="slide">Slide 4</swiper-slide>\r
    <swiper-slide class="slide">Slide 5</swiper-slide>\r
    <swiper-slide class="slide">Slide 6</swiper-slide>\r
    <swiper-slide class="slide">Slide 7</swiper-slide>\r
    <swiper-slide class="slide">Slide 8</swiper-slide>\r
  </swiper>\r
</template>\r
\r
<script lang="ts">\r
  import { defineComponent } from 'vue'\r
  import { Pagination } from 'swiper'\r
  import { Swiper, SwiperSlide } from 'swiper/vue'\r
  import 'swiper/css'\r
  import 'swiper/css/pagination'\r
\r
  export default defineComponent({\r
    name: 'swiper-example-space-between',\r
    title: 'Space between slides',\r
    url: import.meta.url,\r
    components: {\r
      Swiper,\r
      SwiperSlide\r
    },\r
    setup() {\r
      return {\r
        modules: [Pagination]\r
      }\r
    }\r
  })\r
<\/script>\r
\r
<style lang="scss" scoped>\r
  @import '@/styles/init.scss';\r
  @import './style.scss';\r
\r
  .swiper {\r
    @include swiper-wrapper();\r
  }\r
\r
  .slide {\r
    @include swiper-slide();\r
  }\r
</style>\r
`,"./12-slides-per-view.vue":`<template>\r
  <swiper\r
    class="swiper"\r
    :modules="modules"\r
    :space-between="30"\r
    :slides-per-view="3"\r
    :pagination="{ clickable: true }"\r
  >\r
    <swiper-slide class="slide">Slide 1</swiper-slide>\r
    <swiper-slide class="slide">Slide 2</swiper-slide>\r
    <swiper-slide class="slide">Slide 3</swiper-slide>\r
    <swiper-slide class="slide">Slide 4</swiper-slide>\r
    <swiper-slide class="slide">Slide 5</swiper-slide>\r
    <swiper-slide class="slide">Slide 6</swiper-slide>\r
    <swiper-slide class="slide">Slide 7</swiper-slide>\r
    <swiper-slide class="slide">Slide 8</swiper-slide>\r
  </swiper>\r
</template>\r
\r
<script lang="ts">\r
  import { defineComponent } from 'vue'\r
  import { Pagination } from 'swiper'\r
  import { Swiper, SwiperSlide } from 'swiper/vue'\r
  import 'swiper/css'\r
  import 'swiper/css/pagination'\r
\r
  export default defineComponent({\r
    name: 'swiper-example-multiple-slides-per-biew',\r
    title: 'Multiple slides per view',\r
    url: import.meta.url,\r
    components: {\r
      Swiper,\r
      SwiperSlide\r
    },\r
    setup() {\r
      return {\r
        modules: [Pagination]\r
      }\r
    }\r
  })\r
<\/script>\r
\r
<style lang="scss" scoped>\r
  @import '@/styles/init.scss';\r
  @import './style.scss';\r
\r
  .swiper {\r
    @include swiper-wrapper();\r
  }\r
\r
  .slide {\r
    @include swiper-slide();\r
  }\r
</style>\r
`,"./13-slides-per-view-auto.vue":`<template>\r
  <swiper\r
    class="swiper"\r
    :modules="modules"\r
    :space-between="30"\r
    slides-per-view="auto"\r
    :pagination="{ clickable: true }"\r
  >\r
    <swiper-slide class="slide">Slide 1</swiper-slide>\r
    <swiper-slide class="slide">Slide 2</swiper-slide>\r
    <swiper-slide class="slide">Slide 3</swiper-slide>\r
    <swiper-slide class="slide">Slide 4</swiper-slide>\r
    <swiper-slide class="slide">Slide 5</swiper-slide>\r
    <swiper-slide class="slide">Slide 6</swiper-slide>\r
    <swiper-slide class="slide">Slide 7</swiper-slide>\r
    <swiper-slide class="slide">Slide 8</swiper-slide>\r
  </swiper>\r
</template>\r
\r
<script lang="ts">\r
  import { defineComponent } from 'vue'\r
  import { Pagination } from 'swiper'\r
  import { Swiper, SwiperSlide } from 'swiper/vue'\r
  import 'swiper/css'\r
  import 'swiper/css/pagination'\r
\r
  export default defineComponent({\r
    name: 'swiper-example-slides-per-view-auto',\r
    title: 'Slides per view auto',\r
    url: import.meta.url,\r
    components: {\r
      Swiper,\r
      SwiperSlide\r
    },\r
    setup() {\r
      return {\r
        modules: [Pagination]\r
      }\r
    }\r
  })\r
<\/script>\r
\r
<style lang="scss" scoped>\r
  @import '@/styles/init.scss';\r
  @import './style.scss';\r
\r
  .swiper {\r
    @include swiper-wrapper();\r
  }\r
\r
  .slide {\r
    @include swiper-slide();\r
    width: 80%;\r
\r
    &:nth-child(2n) {\r
      width: 60%;\r
    }\r
    &:nth-child(3n) {\r
      width: 40%;\r
    }\r
  }\r
</style>\r
`,"./14-centered.vue":`<template>\r
  <swiper\r
    class="swiper"\r
    :modules="modules"\r
    :space-between="30"\r
    :slides-per-view="4"\r
    :centered-slides="true"\r
    :pagination="{ clickable: true }"\r
  >\r
    <swiper-slide class="slide">Slide 1</swiper-slide>\r
    <swiper-slide class="slide">Slide 2</swiper-slide>\r
    <swiper-slide class="slide">Slide 3</swiper-slide>\r
    <swiper-slide class="slide">Slide 4</swiper-slide>\r
    <swiper-slide class="slide">Slide 5</swiper-slide>\r
    <swiper-slide class="slide">Slide 6</swiper-slide>\r
    <swiper-slide class="slide">Slide 7</swiper-slide>\r
    <swiper-slide class="slide">Slide 8</swiper-slide>\r
  </swiper>\r
</template>\r
\r
<script lang="ts">\r
  import { defineComponent } from 'vue'\r
  import { Pagination } from 'swiper'\r
  import { Swiper, SwiperSlide } from 'swiper/vue'\r
  import 'swiper/css'\r
  import 'swiper/css/pagination'\r
\r
  export default defineComponent({\r
    name: 'swiper-example-centered-slides',\r
    title: 'Centered slides',\r
    url: import.meta.url,\r
    components: {\r
      Swiper,\r
      SwiperSlide\r
    },\r
    setup() {\r
      return {\r
        modules: [Pagination]\r
      }\r
    }\r
  })\r
<\/script>\r
\r
<style lang="scss" scoped>\r
  @import '@/styles/init.scss';\r
  @import './style.scss';\r
\r
  .swiper {\r
    @include swiper-wrapper();\r
  }\r
\r
  .slide {\r
    @include swiper-slide();\r
  }\r
</style>\r
`,"./15-centered-auto.vue":`<template>\r
  <swiper\r
    class="swiper"\r
    :modules="modules"\r
    :space-between="30"\r
    slides-per-view="auto"\r
    :centered-slides="true"\r
    :pagination="{ clickable: true }"\r
  >\r
    <swiper-slide class="slide">Slide 1</swiper-slide>\r
    <swiper-slide class="slide">Slide 2</swiper-slide>\r
    <swiper-slide class="slide">Slide 3</swiper-slide>\r
    <swiper-slide class="slide">Slide 4</swiper-slide>\r
    <swiper-slide class="slide">Slide 5</swiper-slide>\r
    <swiper-slide class="slide">Slide 6</swiper-slide>\r
    <swiper-slide class="slide">Slide 7</swiper-slide>\r
    <swiper-slide class="slide">Slide 8</swiper-slide>\r
  </swiper>\r
</template>\r
\r
<script lang="ts">\r
  import { defineComponent } from 'vue'\r
  import { Pagination } from 'swiper'\r
  import { Swiper, SwiperSlide } from 'swiper/vue'\r
  import 'swiper/css'\r
  import 'swiper/css/pagination'\r
\r
  export default defineComponent({\r
    name: 'swiper-example-centered-auto',\r
    title: 'Centered slides + auto slides per view',\r
    url: import.meta.url,\r
    components: {\r
      Swiper,\r
      SwiperSlide\r
    },\r
    setup() {\r
      return {\r
        modules: [Pagination]\r
      }\r
    }\r
  })\r
<\/script>\r
\r
<style lang="scss" scoped>\r
  @import '@/styles/init.scss';\r
  @import './style.scss';\r
\r
  .swiper {\r
    @include swiper-wrapper();\r
  }\r
\r
  .slide {\r
    @include swiper-slide();\r
    width: 80%;\r
\r
    &:nth-child(2n) {\r
      width: 60%;\r
    }\r
    &:nth-child(3n) {\r
      width: 40%;\r
    }\r
  }\r
</style>\r
`,"./16-freemode.vue":`<template>\r
  <swiper\r
    class="swiper"\r
    :modules="modules"\r
    :space-between="30"\r
    :slides-per-view="3"\r
    :free-mode="true"\r
    :pagination="{ clickable: true }"\r
  >\r
    <swiper-slide class="slide">Slide 1</swiper-slide>\r
    <swiper-slide class="slide">Slide 2</swiper-slide>\r
    <swiper-slide class="slide">Slide 3</swiper-slide>\r
    <swiper-slide class="slide">Slide 4</swiper-slide>\r
    <swiper-slide class="slide">Slide 5</swiper-slide>\r
    <swiper-slide class="slide">Slide 6</swiper-slide>\r
    <swiper-slide class="slide">Slide 7</swiper-slide>\r
    <swiper-slide class="slide">Slide 8</swiper-slide>\r
  </swiper>\r
</template>\r
\r
<script lang="ts">\r
  import { defineComponent } from 'vue'\r
  import { Pagination, FreeMode } from 'swiper'\r
  import { Swiper, SwiperSlide } from 'swiper/vue'\r
  import 'swiper/css'\r
  import 'swiper/css/pagination'\r
  import 'swiper/css/free-mode'\r
\r
  export default defineComponent({\r
    name: 'swiper-example-free-mode',\r
    title: 'Free mode / no fixed positions',\r
    url: import.meta.url,\r
    components: {\r
      Swiper,\r
      SwiperSlide\r
    },\r
    setup() {\r
      return {\r
        modules: [Pagination, FreeMode]\r
      }\r
    }\r
  })\r
<\/script>\r
\r
<style lang="scss" scoped>\r
  @import '@/styles/init.scss';\r
  @import './style.scss';\r
\r
  .swiper {\r
    @include swiper-wrapper();\r
  }\r
\r
  .slide {\r
    @include swiper-slide();\r
  }\r
</style>\r
`,"./17-scroll-container.vue":`<template>\r
  <swiper\r
    class="swiper"\r
    :modules="modules"\r
    direction="vertical"\r
    :slides-per-view="'auto'"\r
    :free-mode="true"\r
    :scrollbar="true"\r
    :mousewheel="true"\r
  >\r
    <swiper-slide class="slide">\r
      <h2>I Have a Dream</h2>\r
      <p>\r
        I am happy to join with you today in what will go down in history as the greatest\r
        demonstration for freedom in the history of our nation.\r
      </p>\r
      <p>\r
        Five score years ago, a great American, in whose symbolic shadow we stand today,\r
        signed the Emancipation Proclamation. This momentous decree came as a great beacon\r
        light of hope to millions of Negro slaves who had been seared in the flames of\r
        withering injustice. It came as a joyous daybreak to end the long night of their\r
        captivity.\r
      </p>\r
      <p>\r
        But one hundred years later, the Negro still is not free. One hundred years later,\r
        the life of the Negro is still sadly crippled by the manacles of segregation and the\r
        chains of discrimination. One hundred years later, the Negro lives on a lonely\r
        island of poverty in the midst of a vast ocean of material prosperity. One hundred\r
        years later, the Negro is still languishing in the corners of American society and\r
        finds himself an exile in his own land. So we have come here today to dramatize a\r
        shameful condition.\r
      </p>\r
      <p>\r
        In a sense we have come to our nation's capital to cash a check. When the architects\r
        of our republic wrote the magnificent words of the Constitution and the Declaration\r
        of Independence, they were signing a promissory note to which every American was to\r
        fall heir. This note was a promise that all men, yes, black men as well as white\r
        men, would be guaranteed the unalienable rights of life, liberty, and the pursuit of\r
        happiness.\r
      </p>\r
      <p>\r
        It is obvious today that America has defaulted on this promissory note insofar as\r
        her citizens of color are concerned. Instead of honoring this sacred obligation,\r
        America has given the Negro people a bad check, a check which has come back marked\r
        "insufficient funds." But we refuse to believe that the bank of justice is bankrupt.\r
        We refuse to believe that there are insufficient funds in the great vaults of\r
        opportunity of this nation. So we have come to cash this check \u2014 a check that will\r
        give us upon demand the riches of freedom and the security of justice. We have also\r
        come to this hallowed spot to remind America of the fierce urgency of now. This is\r
        no time to engage in the luxury of cooling off or to take the tranquilizing drug of\r
        gradualism. Now is the time to make real the promises of democracy. Now is the time\r
        to rise from the dark and desolate valley of segregation to the sunlit path of\r
        racial justice. Now is the time to lift our nation from the quick sands of racial\r
        injustice to the solid rock of brotherhood. Now is the time to make justice a\r
        reality for all of God's children.\r
      </p>\r
      <p>\r
        It would be fatal for the nation to overlook the urgency of the moment. This\r
        sweltering summer of the Negro's legitimate discontent will not pass until there is\r
        an invigorating autumn of freedom and equality. Nineteen sixty-three is not an end,\r
        but a beginning. Those who hope that the Negro needed to blow off steam and will now\r
        be content will have a rude awakening if the nation returns to business as usual.\r
        There will be neither rest nor tranquility in America until the Negro is granted his\r
        citizenship rights. The whirlwinds of revolt will continue to shake the foundations\r
        of our nation until the bright day of justice emerges.\r
      </p>\r
      <p>\r
        But there is something that I must say to my people who stand on the warm threshold\r
        which leads into the palace of justice. In the process of gaining our rightful place\r
        we must not be guilty of wrongful deeds. Let us not seek to satisfy our thirst for\r
        freedom by drinking from the cup of bitterness and hatred.\r
      </p>\r
      <p>\r
        We must forever conduct our struggle on the high plane of dignity and discipline. We\r
        must not allow our creative protest to degenerate into physical violence. Again and\r
        again we must rise to the majestic heights of meeting physical force with soul\r
        force. The marvelous new militancy which has engulfed the Negro community must not\r
        lead us to distrust of all white people, for many of our white brothers, as\r
        evidenced by their presence here today, have come to realize that their destiny is\r
        tied up with our destiny and their freedom is inextricably bound to our freedom. We\r
        cannot walk alone.\r
      </p>\r
      <p>\r
        As we walk, we must make the pledge that we shall march ahead. We cannot turn back.\r
        There are those who are asking the devotees of civil rights, "When will you be\r
        satisfied?" We can never be satisfied as long as the Negro is the victim of the\r
        unspeakable horrors of police brutality. We can never be satisfied, as long as our\r
        bodies, heavy with the fatigue of travel, cannot gain lodging in the motels of the\r
        highways and the hotels of the cities. We can never be satisfied as long as a Negro\r
        in Mississippi cannot vote and a Negro in New York believes he has nothing for which\r
        to vote. No, no, we are not satisfied, and we will not be satisfied until justice\r
        rolls down like waters and righteousness like a mighty stream.\r
      </p>\r
      <p>\r
        I am not unmindful that some of you have come here out of great trials and\r
        tribulations. Some of you have come fresh from narrow jail cells. Some of you have\r
        come from areas where your quest for freedom left you battered by the storms of\r
        persecution and staggered by the winds of police brutality. You have been the\r
        veterans of creative suffering. Continue to work with the faith that unearned\r
        suffering is redemptive.\r
      </p>\r
      <p>\r
        Go back to Mississippi, go back to Alabama, go back to South Carolina, go back to\r
        Georgia, go back to Louisiana, go back to the slums and ghettos of our northern\r
        cities, knowing that somehow this situation can and will be changed. Let us not\r
        wallow in the valley of despair.\r
      </p>\r
      <p>\r
        I say to you today, my friends, so even though we face the difficulties of today and\r
        tomorrow, I still have a dream. It is a dream deeply rooted in the American dream.\r
      </p>\r
      <p>\r
        I have a dream that one day this nation will rise up and live out the true meaning\r
        of its creed: "We hold these truths to be self-evident: that all men are created\r
        equal."\r
      </p>\r
      <p>\r
        I have a dream that one day on the red hills of Georgia the sons of former slaves\r
        and the sons of former slave owners will be able to sit down together at the table\r
        of brotherhood.\r
      </p>\r
      <p>\r
        I have a dream that one day even the state of Mississippi, a state sweltering with\r
        the heat of injustice, sweltering with the heat of oppression, will be transformed\r
        into an oasis of freedom and justice.\r
      </p>\r
      <p>\r
        I have a dream that my four little children will one day live in a nation where they\r
        will not be judged by the color of their skin but by the content of their character.\r
      </p>\r
      <p>I have a dream today.</p>\r
      <p>\r
        I have a dream that one day, down in Alabama, with its vicious racists, with its\r
        governor having his lips dripping with the words of interposition and nullification;\r
        one day right there in Alabama, little black boys and black girls will be able to\r
        join hands with little white boys and white girls as sisters and brothers.\r
      </p>\r
      <p>I have a dream today.</p>\r
      <p>\r
        I have a dream that one day every valley shall be exalted, every hill and mountain\r
        shall be made low, the rough places will be made plain, and the crooked places will\r
        be made straight, and the glory of the Lord shall be revealed, and all flesh shall\r
        see it together.\r
      </p>\r
      <p>\r
        This is our hope. This is the faith that I go back to the South with. With this\r
        faith we will be able to hew out of the mountain of despair a stone of hope. With\r
        this faith we will be able to transform the jangling discords of our nation into a\r
        beautiful symphony of brotherhood. With this faith we will be able to work together,\r
        to pray together, to struggle together, to go to jail together, to stand up for\r
        freedom together, knowing that we will be free one day.\r
      </p>\r
      <p>\r
        This will be the day when all of God's children will be able to sing with a new\r
        meaning, "My country, 'tis of thee, sweet land of liberty, of thee I sing. Land\r
        where my fathers died, land of the pilgrim's pride, from every mountainside, let\r
        freedom ring."\r
      </p>\r
      <p>\r
        And if America is to be a great nation this must become true. So let freedom ring\r
        from the prodigious hilltops of New Hampshire. Let freedom ring from the mighty\r
        mountains of New York. Let freedom ring from the heightening Alleghenies of\r
        Pennsylvania!\r
      </p>\r
      <p>Let freedom ring from the snowcapped Rockies of Colorado!</p>\r
      <p>Let freedom ring from the curvaceous slopes of California!</p>\r
      <p>But not only that; let freedom ring from Stone Mountain of Georgia!</p>\r
      <p>Let freedom ring from Lookout Mountain of Tennessee!</p>\r
      <p>\r
        Let freedom ring from every hill and molehill of Mississippi. From every\r
        mountainside, let freedom ring.\r
      </p>\r
      <p>\r
        And when this happens, When we allow freedom to ring, when we let it ring from every\r
        village and every hamlet, from every state and every city, we will be able to speed\r
        up that day when all of God's children, black men and white men, Jews and Gentiles,\r
        Protestants and Catholics, will be able to join hands and sing in the words of the\r
        old Negro spiritual, "Free at last! free at last! thank God Almighty, we are free at\r
        last!"\r
      </p>\r
    </swiper-slide>\r
  </swiper>\r
</template>\r
\r
<script lang="ts">\r
  import { defineComponent } from 'vue'\r
  import { Pagination, FreeMode, Scrollbar, Mousewheel } from 'swiper'\r
  import { Swiper, SwiperSlide } from 'swiper/vue'\r
  import 'swiper/css'\r
  import 'swiper/css/pagination'\r
  import 'swiper/css/free-mode'\r
  import 'swiper/css/scrollbar'\r
\r
  export default defineComponent({\r
    name: 'swiper-example-scroll-container',\r
    title: 'Scroll container',\r
    url: import.meta.url,\r
    components: {\r
      Swiper,\r
      SwiperSlide\r
    },\r
    setup() {\r
      return {\r
        modules: [Pagination, FreeMode, Scrollbar, Mousewheel]\r
      }\r
    }\r
  })\r
<\/script>\r
\r
<style lang="scss" scoped>\r
  @import './style.scss';\r
\r
  .swiper {\r
    @include swiper-wrapper($height: 32em);\r
\r
    .slide {\r
      height: auto;\r
      padding: 30px;\r
      box-sizing: border-box;\r
      font-size: 18px !important;\r
      text-align: left !important;\r
      background: $banner-bg;\r
\r
      p {\r
        line-height: 2;\r
      }\r
    }\r
  }\r
</style>\r
`,"./18-slides-per-column.vue":`<template>\r
  <swiper\r
    class="swiper"\r
    :modules="modules"\r
    :slides-per-view="3"\r
    :grid="{ rows: 2 }"\r
    :space-between="30"\r
    :pagination="{ clickable: true }"\r
  >\r
    <swiper-slide class="slide">Slide 1</swiper-slide>\r
    <swiper-slide class="slide">Slide 2</swiper-slide>\r
    <swiper-slide class="slide">Slide 3</swiper-slide>\r
    <swiper-slide class="slide">Slide 4</swiper-slide>\r
    <swiper-slide class="slide">Slide 5</swiper-slide>\r
    <swiper-slide class="slide">Slide 6</swiper-slide>\r
    <swiper-slide class="slide">Slide 7</swiper-slide>\r
    <swiper-slide class="slide">Slide 8</swiper-slide>\r
    <swiper-slide class="slide">Slide 9</swiper-slide>\r
    <swiper-slide class="slide">Slide 10</swiper-slide>\r
  </swiper>\r
</template>\r
\r
<script lang="ts">\r
  import { defineComponent } from 'vue'\r
  import { Pagination, Grid } from 'swiper'\r
  import { Swiper, SwiperSlide } from 'swiper/vue'\r
  import 'swiper/css'\r
  import 'swiper/css/grid'\r
  import 'swiper/css/pagination'\r
\r
  export default defineComponent({\r
    name: 'swiper-example-slides-per-column',\r
    title: 'Multi row slides layout',\r
    url: import.meta.url,\r
    components: {\r
      Swiper,\r
      SwiperSlide\r
    },\r
    setup() {\r
      return {\r
        modules: [Pagination, Grid]\r
      }\r
    }\r
  })\r
<\/script>\r
\r
<style lang="scss" scoped>\r
  @import '@/styles/init.scss';\r
  @import './style.scss';\r
\r
  .swiper {\r
    @include swiper-wrapper($height: 430px);\r
  }\r
\r
  .slide {\r
    @include swiper-slide();\r
    height: 200px;\r
  }\r
</style>\r
`,"./19-nested.vue":`<template>\r
  <swiper\r
    class="swiper swiper-h"\r
    :modules="modules"\r
    :space-between="50"\r
    :pagination="{ clickable: true }"\r
  >\r
    <swiper-slide class="slide">Horizontal Slide 1</swiper-slide>\r
    <swiper-slide class="slide">\r
      <swiper\r
        class="swiper-v"\r
        :modules="modules"\r
        direction="vertical"\r
        :spaceBetween="50"\r
        :pagination="{ clickable: true }"\r
      >\r
        <swiper-slide class="slide">Vertical Slide 1</swiper-slide>\r
        <swiper-slide class="slide">Vertical Slide 2</swiper-slide>\r
        <swiper-slide class="slide">Vertical Slide 3</swiper-slide>\r
        <swiper-slide class="slide">Vertical Slide 4</swiper-slide>\r
        <swiper-slide class="slide">Vertical Slide 5</swiper-slide>\r
      </swiper>\r
    </swiper-slide>\r
    <swiper-slide class="slide">Horizontal Slide 3</swiper-slide>\r
    <swiper-slide class="slide">Horizontal Slide 4</swiper-slide>\r
  </swiper>\r
</template>\r
\r
<script lang="ts">\r
  import { defineComponent } from 'vue'\r
  import { Pagination } from 'swiper'\r
  import { Swiper, SwiperSlide } from 'swiper/vue'\r
  import 'swiper/css'\r
  import 'swiper/css/pagination'\r
\r
  export default defineComponent({\r
    name: 'swiper-example-nested',\r
    title: 'Nested swipers',\r
    url: import.meta.url,\r
    components: {\r
      Swiper,\r
      SwiperSlide\r
    },\r
    setup() {\r
      return {\r
        modules: [Pagination]\r
      }\r
    }\r
  })\r
<\/script>\r
\r
<style lang="scss" scoped>\r
  @import '@/styles/init.scss';\r
  @import './style.scss';\r
\r
  .swiper {\r
    @include swiper-wrapper();\r
  }\r
\r
  .slide {\r
    @include swiper-slide();\r
  }\r
\r
  .swiper-v {\r
    background-color: rgb(22 27 34 / 80%);\r
  }\r
</style>\r
`,"./20-grab-cursor.vue":`<template>\r
  <swiper\r
    class="swiper"\r
    :modules="modules"\r
    :slides-per-view="4"\r
    :centered-slides="true"\r
    :space-between="30"\r
    :grab-cursor="true"\r
    :pagination="{\r
      clickable: true\r
    }"\r
  >\r
    <swiper-slide class="slide">Slide 1</swiper-slide>\r
    <swiper-slide class="slide">Slide 2</swiper-slide>\r
    <swiper-slide class="slide">Slide 3</swiper-slide>\r
    <swiper-slide class="slide">Slide 4</swiper-slide>\r
    <swiper-slide class="slide">Slide 5</swiper-slide>\r
    <swiper-slide class="slide">Slide 6</swiper-slide>\r
    <swiper-slide class="slide">Slide 7</swiper-slide>\r
    <swiper-slide class="slide">Slide 8</swiper-slide>\r
  </swiper>\r
</template>\r
\r
<script lang="ts">\r
  import { defineComponent } from 'vue'\r
  import { Pagination } from 'swiper'\r
  import { Swiper, SwiperSlide } from 'swiper/vue'\r
  import 'swiper/css'\r
  import 'swiper/css/pagination'\r
\r
  export default defineComponent({\r
    name: 'swiper-example-grab-cursor',\r
    title: 'Grab cursor',\r
    url: import.meta.url,\r
    components: {\r
      Swiper,\r
      SwiperSlide\r
    },\r
    setup() {\r
      return {\r
        modules: [Pagination]\r
      }\r
    }\r
  })\r
<\/script>\r
\r
<style lang="scss" scoped>\r
  @import '@/styles/init.scss';\r
  @import './style.scss';\r
\r
  .swiper {\r
    @include swiper-wrapper();\r
  }\r
\r
  .slide {\r
    @include swiper-slide();\r
    width: 60%;\r
\r
    &:nth-child(2n) {\r
      width: 40%;\r
    }\r
    &:nth-child(3n) {\r
      width: 20%;\r
    }\r
  }\r
</style>\r
`,"./21-infinite-loop.vue":`<template>\r
  <swiper\r
    class="swiper"\r
    :modules="modules"\r
    :slides-per-view="1"\r
    :space-between="30"\r
    :loop="true"\r
    :pagination="{ clickable: true }"\r
    :navigation="true"\r
  >\r
    <swiper-slide>Slide 1</swiper-slide>\r
    <swiper-slide>Slide 2</swiper-slide>\r
    <swiper-slide>Slide 3</swiper-slide>\r
    <swiper-slide>Slide 4</swiper-slide>\r
    <swiper-slide>Slide 5</swiper-slide>\r
    <swiper-slide>Slide 6</swiper-slide>\r
    <swiper-slide>Slide 7</swiper-slide>\r
    <swiper-slide>Slide 8</swiper-slide>\r
  </swiper>\r
</template>\r
\r
<script lang="ts">\r
  import { defineComponent } from 'vue'\r
  import { Pagination, Navigation } from 'swiper'\r
  import { Swiper, SwiperSlide } from 'swiper/vue'\r
  import 'swiper/css'\r
  import 'swiper/css/pagination'\r
  import 'swiper/css/navigation'\r
\r
  export default defineComponent({\r
    name: 'swiper-example-loop',\r
    title: 'Loop mode / Infinite loop',\r
    url: import.meta.url,\r
    components: {\r
      Swiper,\r
      SwiperSlide\r
    },\r
    setup() {\r
      return {\r
        modules: [Pagination, Navigation]\r
      }\r
    }\r
  })\r
<\/script>\r
\r
<style lang="scss" scoped>\r
  @import '@/styles/init.scss';\r
  @import './style.scss';\r
\r
  .swiper {\r
    @include swiper-wrapper();\r
\r
    ::v-deep(.swiper-slide) {\r
      @include swiper-slide();\r
    }\r
  }\r
</style>\r
`,"./22-infinite-loop-with-slides-per-group.vue":`<template>\r
  <swiper\r
    class="swiper"\r
    :modules="modules"\r
    :space-between="30"\r
    :slides-per-view="3"\r
    :slides-per-group="3"\r
    :loop="true"\r
    :loop-fill-group-with-blank="true"\r
    :navigation="true"\r
    :pagination="{ clickable: true }"\r
  >\r
    <swiper-slide>Slide 1</swiper-slide>\r
    <swiper-slide>Slide 2</swiper-slide>\r
    <swiper-slide>Slide 3</swiper-slide>\r
    <swiper-slide>Slide 4</swiper-slide>\r
    <swiper-slide>Slide 5</swiper-slide>\r
    <swiper-slide>Slide 6</swiper-slide>\r
    <swiper-slide>Slide 7</swiper-slide>\r
    <swiper-slide>Slide 8</swiper-slide>\r
  </swiper>\r
</template>\r
\r
<script lang="ts">\r
  import { defineComponent } from 'vue'\r
  import { Pagination, Navigation } from 'swiper'\r
  import { Swiper, SwiperSlide } from 'swiper/vue'\r
  import 'swiper/css'\r
  import 'swiper/css/pagination'\r
  import 'swiper/css/navigation'\r
\r
  export default defineComponent({\r
    name: 'swiper-example-loop-group',\r
    title: 'Loop mode with multiple slides per group',\r
    url: import.meta.url,\r
    components: {\r
      Swiper,\r
      SwiperSlide\r
    },\r
    setup() {\r
      return {\r
        modules: [Pagination, Navigation]\r
      }\r
    }\r
  })\r
<\/script>\r
\r
<style lang="scss" scoped>\r
  @import '@/styles/init.scss';\r
  @import './style.scss';\r
\r
  .swiper {\r
    @include swiper-wrapper();\r
\r
    ::v-deep(.swiper-slide) {\r
      @include swiper-slide();\r
    }\r
  }\r
</style>\r
`,"./23-slides-per-group-skip.vue":`<template>\r
  <swiper\r
    class="swiper"\r
    :modules="modules"\r
    :slides-per-view="2"\r
    :slides-per-group="2"\r
    :slides-per-group-skip="1"\r
    :centered-slides="false"\r
    :grab-cursor="true"\r
    :keyboard="{ enabled: true }"\r
    :scrollbar="true"\r
    :navigation="true"\r
    :pagination="{ clickable: true }"\r
  >\r
    <swiper-slide class="slide">Slide 1</swiper-slide>\r
    <swiper-slide class="slide">Slide 2</swiper-slide>\r
    <swiper-slide class="slide">Slide 3</swiper-slide>\r
    <swiper-slide class="slide">Slide 4</swiper-slide>\r
    <swiper-slide class="slide">Slide 5</swiper-slide>\r
    <swiper-slide class="slide">Slide 6</swiper-slide>\r
    <swiper-slide class="slide">Slide 7</swiper-slide>\r
  </swiper>\r
</template>\r
\r
<script lang="ts">\r
  import { defineComponent } from 'vue'\r
  import { Keyboard, Scrollbar, Navigation, Pagination } from 'swiper'\r
  import { Swiper, SwiperSlide } from 'swiper/vue'\r
  import 'swiper/css'\r
  import 'swiper/css/scrollbar'\r
  import 'swiper/css/navigation'\r
  import 'swiper/css/pagination'\r
\r
  export default defineComponent({\r
    name: 'swiper-example-slides-per-group-skip',\r
    title: 'Slides per group skip',\r
    url: import.meta.url,\r
    components: {\r
      Swiper,\r
      SwiperSlide\r
    },\r
    setup() {\r
      return {\r
        modules: [Keyboard, Scrollbar, Navigation, Pagination]\r
      }\r
    }\r
  })\r
<\/script>\r
\r
<style lang="scss" scoped>\r
  @import '@/styles/init.scss';\r
  @import './style.scss';\r
\r
  .swiper {\r
    @include swiper-wrapper();\r
  }\r
\r
  .slide {\r
    @include swiper-slide();\r
    color: $white;\r
    &:nth-child(1) {\r
      background-color: #0092fd;\r
    }\r
    &:nth-child(2),\r
    &:nth-child(3) {\r
      background-color: #42d7b5;\r
    }\r
    &:nth-child(4),\r
    &:nth-child(5) {\r
      background-color: #6dd400;\r
    }\r
    &:nth-child(6),\r
    &:nth-child(7) {\r
      background-color: #f8b501;\r
    }\r
    &:nth-child(8) {\r
      background-color: #f96300;\r
    }\r
  }\r
</style>\r
`,"./24-effect-fade.vue":`<template>\r
  <swiper\r
    class="swiper"\r
    :modules="modules"\r
    :space-between="30"\r
    :effect="'fade'"\r
    :navigation="true"\r
    :pagination="{ clickable: true }"\r
  >\r
    <swiper-slide class="slide" v-for="index in 5" :key="index">\r
      <img :src="\`/images/example/\${index}.jpg\`" />\r
    </swiper-slide>\r
  </swiper>\r
</template>\r
\r
<script lang="ts">\r
  import { defineComponent } from 'vue'\r
  import { Pagination, Navigation, EffectFade } from 'swiper'\r
  import { Swiper, SwiperSlide } from 'swiper/vue'\r
  import 'swiper/css'\r
  import 'swiper/css/pagination'\r
  import 'swiper/css/navigation'\r
  import 'swiper/css/effect-fade'\r
\r
  export default defineComponent({\r
    name: 'swiper-example-fade-effect',\r
    title: 'Fade effect',\r
    url: import.meta.url,\r
    components: {\r
      Swiper,\r
      SwiperSlide\r
    },\r
    setup() {\r
      return {\r
        modules: [Pagination, Navigation, EffectFade]\r
      }\r
    }\r
  })\r
<\/script>\r
\r
<style lang="scss" scoped>\r
  @import '@/styles/init.scss';\r
  @import './style.scss';\r
\r
  .swiper {\r
    @include swiper-wrapper($height: 360px);\r
\r
    .slide {\r
      @include swiper-slide();\r
\r
      img {\r
        display: block;\r
        width: 100%;\r
      }\r
    }\r
  }\r
</style>\r
`,"./25-effect-coverflow.vue":`<template>\r
  <div class="coverflow-example">\r
    <swiper\r
      class="swiper"\r
      :modules="modules"\r
      :pagination="true"\r
      :effect="'coverflow'"\r
      :grab-cursor="true"\r
      :centered-slides="true"\r
      :slides-per-view="'auto'"\r
      :coverflow-effect="{\r
        rotate: 50,\r
        stretch: 0,\r
        depth: 100,\r
        modifier: 1,\r
        slideShadows: true\r
      }"\r
    >\r
      <swiper-slide class="slide" v-for="index in 8" :key="index">\r
        <img :src="\`/images/example/\${index}.jpg\`" />\r
      </swiper-slide>\r
    </swiper>\r
  </div>\r
</template>\r
\r
<script lang="ts">\r
  import { defineComponent } from 'vue'\r
  import { Pagination, EffectCoverflow } from 'swiper'\r
  import { Swiper, SwiperSlide } from 'swiper/vue'\r
  import 'swiper/css'\r
  import 'swiper/css/pagination'\r
  import 'swiper/css/effect-coverflow'\r
\r
  export default defineComponent({\r
    name: 'swiper-example-3d-coverflow',\r
    title: '3D Coverflow effect',\r
    url: import.meta.url,\r
    components: {\r
      Swiper,\r
      SwiperSlide\r
    },\r
    setup() {\r
      return {\r
        modules: [Pagination, EffectCoverflow]\r
      }\r
    }\r
  })\r
<\/script>\r
\r
<style lang="scss" scoped>\r
  @import '@/styles/init.scss';\r
  @import './style.scss';\r
\r
  .coverflow-example {\r
    @include swiper-wrapper($height: 380px);\r
    position: relative;\r
  }\r
\r
  .swiper {\r
    height: 100%;\r
    width: 100%;\r
    padding-top: 50px;\r
    padding-bottom: 50px;\r
\r
    .slide {\r
      width: 300px;\r
      height: 300px;\r
\r
      img {\r
        display: block;\r
        width: 100%;\r
        height: 100%;\r
        object-fit: cover;\r
      }\r
    }\r
  }\r
</style>\r
`,"./26-effect-cube.vue":`<template>\r
  <div class="cube-example">\r
    <swiper\r
      class="swiper"\r
      :modules="modules"\r
      :pagination="true"\r
      :effect="'cube'"\r
      :grab-cursor="true"\r
      :cube-effect="{\r
        shadow: true,\r
        slideShadows: true,\r
        shadowOffset: 20,\r
        shadowScale: 0.94\r
      }"\r
    >\r
      <swiper-slide class="slide" v-for="index in 5" :key="index">\r
        <img :src="\`/images/example/\${index}.jpg\`" />\r
      </swiper-slide>\r
    </swiper>\r
  </div>\r
</template>\r
\r
<script lang="ts">\r
  import { defineComponent } from 'vue'\r
  import { Pagination, EffectCube } from 'swiper'\r
  import { Swiper, SwiperSlide } from 'swiper/vue'\r
  import 'swiper/css'\r
  import 'swiper/css/pagination'\r
  import 'swiper/css/effect-cube'\r
\r
  export default defineComponent({\r
    name: 'swiper-example-3d-cube',\r
    title: '3D Cube effect',\r
    url: import.meta.url,\r
    components: {\r
      Swiper,\r
      SwiperSlide\r
    },\r
    setup() {\r
      return {\r
        modules: [Pagination, EffectCube]\r
      }\r
    }\r
  })\r
<\/script>\r
\r
<style lang="scss" scoped>\r
  @import '@/styles/init.scss';\r
  @import './style.scss';\r
\r
  .cube-example {\r
    @include swiper-wrapper($height: 380px);\r
    position: relative;\r
  }\r
\r
  .swiper {\r
    width: 300px !important;\r
    height: 300px;\r
    position: absolute;\r
    left: 50%;\r
    top: 50%;\r
    margin-left: -150px;\r
    margin-top: -150px;\r
\r
    .slide {\r
      @include swiper-slide();\r
\r
      img {\r
        display: block;\r
        width: 100%;\r
        height: 100%;\r
        object-fit: cover;\r
      }\r
    }\r
  }\r
</style>\r
`,"./27-effect-flip.vue":`<template>\r
  <div class="flip-example">\r
    <swiper\r
      class="swiper"\r
      :modules="modules"\r
      :effect="'flip'"\r
      :grab-cursor="true"\r
      :pagination="true"\r
      :navigation="true"\r
    >\r
      <swiper-slide class="slide" v-for="index in 6" :key="index">\r
        <img :src="\`/images/example/\${index}.jpg\`" />\r
      </swiper-slide>\r
    </swiper>\r
  </div>\r
</template>\r
\r
<script lang="ts">\r
  import { defineComponent } from 'vue'\r
  import { Pagination, Navigation, EffectFlip } from 'swiper'\r
  import { Swiper, SwiperSlide } from 'swiper/vue'\r
  import 'swiper/css'\r
  import 'swiper/css/pagination'\r
  import 'swiper/css/navigation'\r
  import 'swiper/css/effect-flip'\r
\r
  export default defineComponent({\r
    name: 'swiper-example-3d-flip',\r
    title: '3D Flip effect',\r
    url: import.meta.url,\r
    components: {\r
      Swiper,\r
      SwiperSlide\r
    },\r
    setup() {\r
      return {\r
        modules: [Pagination, Navigation, EffectFlip]\r
      }\r
    }\r
  })\r
<\/script>\r
\r
<style lang="scss" scoped>\r
  @import '@/styles/init.scss';\r
  @import './style.scss';\r
\r
  .flip-example {\r
    position: relative;\r
  }\r
\r
  .swiper {\r
    width: 300px;\r
    height: 300px;\r
    padding: 50px;\r
    box-sizing: content-box;\r
\r
    .slide {\r
      width: 300px;\r
      height: 300px;\r
\r
      img {\r
        display: block;\r
        width: 100%;\r
        height: 100%;\r
        object-fit: cover;\r
      }\r
    }\r
  }\r
</style>\r
`,"./28-effect-creative.vue":`<template>\r
  <div class="creative-example">\r
    <div class="toolbar">\r
      <button v-for="(_, index) in effects" :key="index" @click="setEffect(index)">\r
        Effect {{ index }}\r
      </button>\r
    </div>\r
    <swiper\r
      v-if="render"\r
      class="swiper"\r
      :modules="modules"\r
      :effect="'creative'"\r
      :creative-effect="effects[effectIndex]"\r
      :grab-cursor="true"\r
      :pagination="true"\r
    >\r
      <swiper-slide class="slide" v-for="index in 6" :key="index">\r
        <img :src="\`/images/example/\${index}.jpg\`" />\r
      </swiper-slide>\r
    </swiper>\r
  </div>\r
</template>\r
\r
<script lang="ts">\r
  import { defineComponent, nextTick, ref } from 'vue'\r
  import SwiperClass, { Pagination, EffectCreative } from 'swiper'\r
  import { CreativeEffectOptions } from 'swiper/types'\r
  import { Swiper, SwiperSlide } from 'swiper/vue'\r
  import 'swiper/css'\r
  import 'swiper/css/pagination'\r
  import 'swiper/css/effect-creative'\r
\r
  export default defineComponent({\r
    name: 'swiper-example-effect-creative',\r
    title: 'Creative effect',\r
    url: import.meta.url,\r
    components: {\r
      Swiper,\r
      SwiperSlide\r
    },\r
    setup() {\r
      const render = ref(true)\r
      const effectIndex = ref(0)\r
      const setEffect = (index: number) => {\r
        effectIndex.value = index\r
        nextTick(() => {\r
          render.value = false\r
          nextTick(() => {\r
            render.value = true\r
          })\r
        })\r
      }\r
\r
      const effects: CreativeEffectOptions[] = [\r
        {\r
          prev: {\r
            shadow: true,\r
            translate: [0, 0, -400]\r
          },\r
          next: {\r
            translate: ['100%', 0, 0]\r
          }\r
        },\r
        {\r
          prev: {\r
            shadow: true,\r
            translate: ['-120%', 0, -500]\r
          },\r
          next: {\r
            shadow: true,\r
            translate: ['120%', 0, -500]\r
          }\r
        },\r
        {\r
          prev: {\r
            shadow: true,\r
            translate: ['-20%', 0, -1]\r
          },\r
          next: {\r
            translate: ['100%', 0, 0]\r
          }\r
        },\r
        {\r
          prev: {\r
            shadow: true,\r
            translate: [0, 0, -800],\r
            rotate: [180, 0, 0]\r
          },\r
          next: {\r
            shadow: true,\r
            translate: [0, 0, -800],\r
            rotate: [-180, 0, 0]\r
          }\r
        },\r
        {\r
          prev: {\r
            shadow: true,\r
            translate: ['-125%', 0, -800],\r
            rotate: [0, 0, -90]\r
          },\r
          next: {\r
            shadow: true,\r
            translate: ['125%', 0, -800],\r
            rotate: [0, 0, 90]\r
          }\r
        },\r
        {\r
          prev: {\r
            shadow: true,\r
            origin: 'left center',\r
            translate: ['-5%', 0, -200],\r
            rotate: [0, 100, 0]\r
          },\r
          next: {\r
            origin: 'right center',\r
            translate: ['5%', 0, -200],\r
            rotate: [0, -100, 0]\r
          }\r
        }\r
      ]\r
\r
      return {\r
        effects,\r
        effectIndex,\r
        render,\r
        setEffect,\r
        modules: [Pagination, EffectCreative]\r
      }\r
    }\r
  })\r
<\/script>\r
\r
<style lang="scss" scoped>\r
  @import '@/styles/init.scss';\r
  @import './style.scss';\r
\r
  .creative-example {\r
    position: relative;\r
    background-color: $banner-bg;\r
  }\r
\r
  .swiper {\r
    margin: 20px auto;\r
    width: 300px;\r
    height: 300px;\r
\r
    .slide {\r
      @include swiper-slide();\r
\r
      img {\r
        display: block;\r
        width: 100%;\r
        height: 100%;\r
        object-fit: cover;\r
      }\r
    }\r
  }\r
\r
  .toolbar {\r
    @include toolbar();\r
\r
    button {\r
      @include toolbar-button();\r
    }\r
  }\r
</style>\r
`,"./29-keyboard-control.vue":`<template>\r
  <swiper\r
    class="swiper"\r
    :modules="modules"\r
    :slides-per-view="1"\r
    :space-between="30"\r
    :keyboard="{ enabled: true }"\r
    :pagination="{ clickable: true }"\r
    :navigation="true"\r
  >\r
    <swiper-slide class="slide">Slide 1</swiper-slide>\r
    <swiper-slide class="slide">Slide 2</swiper-slide>\r
    <swiper-slide class="slide">Slide 3</swiper-slide>\r
    <swiper-slide class="slide">Slide 4</swiper-slide>\r
    <swiper-slide class="slide">Slide 5</swiper-slide>\r
    <swiper-slide class="slide">Slide 6</swiper-slide>\r
    <swiper-slide class="slide">Slide 7</swiper-slide>\r
    <swiper-slide class="slide">Slide 8</swiper-slide>\r
  </swiper>\r
</template>\r
\r
<script lang="ts">\r
  import { defineComponent } from 'vue'\r
  import { Pagination, Navigation, Keyboard } from 'swiper'\r
  import { Swiper, SwiperSlide } from 'swiper/vue'\r
  import 'swiper/css'\r
  import 'swiper/css/pagination'\r
  import 'swiper/css/navigation'\r
\r
  export default defineComponent({\r
    name: 'swiper-example-keyboard-control',\r
    title: 'Keyboard control',\r
    url: import.meta.url,\r
    components: {\r
      Swiper,\r
      SwiperSlide\r
    },\r
    setup() {\r
      return {\r
        modules: [Pagination, Navigation, Keyboard]\r
      }\r
    }\r
  })\r
<\/script>\r
\r
<style lang="scss" scoped>\r
  @import '@/styles/init.scss';\r
  @import './style.scss';\r
\r
  .swiper {\r
    @include swiper-wrapper();\r
  }\r
\r
  .slide {\r
    @include swiper-slide();\r
  }\r
</style>\r
`,"./30-mousewheel-control.vue":`<template>\r
  <swiper\r
    class="swiper"\r
    :modules="modules"\r
    :direction="'vertical'"\r
    :slides-per-view="1"\r
    :space-between="30"\r
    :mousewheel="true"\r
    :pagination="{ clickable: true }"\r
  >\r
    <swiper-slide class="slide">Slide 1</swiper-slide>\r
    <swiper-slide class="slide">Slide 2</swiper-slide>\r
    <swiper-slide class="slide">Slide 3</swiper-slide>\r
    <swiper-slide class="slide">Slide 4</swiper-slide>\r
    <swiper-slide class="slide">Slide 5</swiper-slide>\r
    <swiper-slide class="slide">Slide 6</swiper-slide>\r
    <swiper-slide class="slide">Slide 7</swiper-slide>\r
    <swiper-slide class="slide">Slide 8</swiper-slide>\r
  </swiper>\r
</template>\r
\r
<script lang="ts">\r
  import { defineComponent } from 'vue'\r
  import { Pagination, Mousewheel } from 'swiper'\r
  import { Swiper, SwiperSlide } from 'swiper/vue'\r
  import 'swiper/css'\r
  import 'swiper/css/pagination'\r
\r
  export default defineComponent({\r
    name: 'swiper-example-mousewheel-control',\r
    title: 'Mousewheel control',\r
    url: import.meta.url,\r
    components: {\r
      Swiper,\r
      SwiperSlide\r
    },\r
    setup() {\r
      return {\r
        modules: [Pagination, Mousewheel]\r
      }\r
    }\r
  })\r
<\/script>\r
\r
<style lang="scss" scoped>\r
  @import '@/styles/init.scss';\r
  @import './style.scss';\r
\r
  .swiper {\r
    @include swiper-wrapper();\r
  }\r
\r
  .slide {\r
    @include swiper-slide();\r
  }\r
</style>\r
`,"./31-autoplay.vue":`<template>\r
  <swiper\r
    class="swiper"\r
    :modules="modules"\r
    :space-between="30"\r
    :centered-slides="true"\r
    :navigation="true"\r
    :pagination="{\r
      clickable: true\r
    }"\r
    :autoplay="{\r
      delay: 2500,\r
      disableOnInteraction: false\r
    }"\r
  >\r
    <swiper-slide class="slide">Slide 1</swiper-slide>\r
    <swiper-slide class="slide">Slide 2</swiper-slide>\r
    <swiper-slide class="slide">Slide 3</swiper-slide>\r
    <swiper-slide class="slide">Slide 4</swiper-slide>\r
    <swiper-slide class="slide">Slide 5</swiper-slide>\r
    <swiper-slide class="slide">Slide 6</swiper-slide>\r
    <swiper-slide class="slide">Slide 7</swiper-slide>\r
    <swiper-slide class="slide">Slide 8</swiper-slide>\r
  </swiper>\r
</template>\r
\r
<script lang="ts">\r
  import { defineComponent } from 'vue'\r
  import { Pagination, Navigation, Autoplay } from 'swiper'\r
  import { Swiper, SwiperSlide } from 'swiper/vue'\r
  import 'swiper/css'\r
  import 'swiper/css/pagination'\r
  import 'swiper/css/navigation'\r
\r
  export default defineComponent({\r
    name: 'swiper-example-autoplay',\r
    title: 'Autoplay',\r
    url: import.meta.url,\r
    components: {\r
      Swiper,\r
      SwiperSlide\r
    },\r
    setup() {\r
      return {\r
        modules: [Pagination, Navigation, Autoplay]\r
      }\r
    }\r
  })\r
<\/script>\r
\r
<style lang="scss" scoped>\r
  @import '@/styles/init.scss';\r
  @import './style.scss';\r
\r
  .swiper {\r
    @include swiper-wrapper();\r
  }\r
\r
  .slide {\r
    @include swiper-slide();\r
  }\r
</style>\r
`,"./32-dynamic-slides.vue":`<template>\r
  <div class="dynamic-example">\r
    <div class="toolbar">\r
      <button @click="prependSlide">Prepend slide</button>\r
      <button @click="appendSlide">Append slide</button>\r
      <button @click="popSlide">Pop slide</button>\r
      <button @click="shiftSlide">Shift slide</button>\r
    </div>\r
    <swiper\r
      class="swiper"\r
      :slides-per-view="3"\r
      :centered-slides="true"\r
      :space-between="30"\r
      :pagination="{ type: 'fraction' }"\r
      :navigation="true"\r
      :modules="modules"\r
    >\r
      <swiper-slide v-for="slide in slides" :key="slide" class="slide">\r
        Slide {{ slide }}\r
      </swiper-slide>\r
    </swiper>\r
  </div>\r
</template>\r
\r
<script lang="ts">\r
  import { defineComponent, reactive } from 'vue'\r
  // https://swiperjs.com/swiper-api#manipulation\r
  // MARK: Manipulation module adds useful Swiper methods to manipulate slides. It makes sense to use it only with Swiper Core version, not intended to be uses with Swiper Angular, React, Svelte or Vue.\r
  import { Pagination, Navigation } from 'swiper'\r
  import { Swiper, SwiperSlide } from 'swiper/vue'\r
  import 'swiper/css'\r
  import 'swiper/css/pagination'\r
\r
  export default defineComponent({\r
    name: 'swiper-example-dynamic-slides',\r
    title: 'Dynamic slides',\r
    url: import.meta.url,\r
    components: {\r
      Swiper,\r
      SwiperSlide\r
    },\r
    setup() {\r
      const slides = reactive([1, 2, 3, 4, 5])\r
      return {\r
        modules: [Pagination, Navigation],\r
        slides,\r
        appendSlide: () => slides.push(slides.length + 1),\r
        prependSlide: () => slides.unshift(slides[0] - 1),\r
        popSlide: () => slides.pop(),\r
        shiftSlide: () => slides.shift()\r
      }\r
    }\r
  })\r
<\/script>\r
\r
<style lang="scss" scoped>\r
  @import '@/styles/init.scss';\r
  @import './style.scss';\r
\r
  .dynamic-example {\r
    height: auto;\r
\r
    .toolbar {\r
      @include toolbar();\r
\r
      button {\r
        @include toolbar-button();\r
      }\r
    }\r
\r
    .swiper {\r
      @include swiper-wrapper();\r
    }\r
\r
    .slide {\r
      @include swiper-slide();\r
    }\r
  }\r
</style>\r
`,"./33-thumbs-gallery.vue":`<template>\r
  <div class="thumb-example">\r
    <swiper\r
      class="top-swiper"\r
      :style="{\r
        '--swiper-navigation-color': '#fff',\r
        '--swiper-pagination-color': '#fff'\r
      }"\r
      :modules="modules"\r
      :space-between="10"\r
      :navigation="true"\r
      :thumbs="{ swiper: thumbsSwiper }"\r
    >\r
      <swiper-slide class="slide" v-for="index in 8" :key="index">\r
        <img :src="\`/images/example/\${index}.jpg\`" />\r
      </swiper-slide>\r
    </swiper>\r
    <swiper\r
      class="thumbs-swiper"\r
      :modules="modules"\r
      :space-between="10"\r
      :slides-per-view="4"\r
      :watch-slides-progress="true"\r
      :prevent-clicks="false"\r
      :prevent-clicks-propagation="false"\r
      @swiper="setThumbsSwiper"\r
    >\r
      <swiper-slide class="slide" v-for="index in 8" :key="index">\r
        <img :src="\`/images/example/\${index}.jpg\`" />\r
      </swiper-slide>\r
    </swiper>\r
  </div>\r
</template>\r
\r
<script lang="ts">\r
  import { defineComponent, ref } from 'vue'\r
  import SwiperClass, { Navigation, Thumbs } from 'swiper'\r
  import { Swiper, SwiperSlide } from 'swiper/vue'\r
  import 'swiper/css'\r
  import 'swiper/css/navigation'\r
  import 'swiper/css/thumbs'\r
\r
  export default defineComponent({\r
    name: 'swiper-example-thumbs-gallery',\r
    title: 'Thumbs gallery with Two-way control',\r
    url: import.meta.url,\r
    components: {\r
      Swiper,\r
      SwiperSlide\r
    },\r
    setup() {\r
      const thumbsSwiper = ref<SwiperClass>()\r
      const setThumbsSwiper = (swiper: SwiperClass) => {\r
        thumbsSwiper.value = swiper\r
      }\r
\r
      return {\r
        modules: [Navigation, Thumbs],\r
        setThumbsSwiper,\r
        thumbsSwiper\r
      }\r
    }\r
  })\r
<\/script>\r
\r
<style lang="scss" scoped>\r
  @import '@/styles/init.scss';\r
  @import './style.scss';\r
\r
  .thumb-example {\r
    height: 480px;\r
    background-color: $black;\r
  }\r
\r
  .top-swiper,\r
  .thumbs-swiper {\r
    .slide {\r
      img {\r
        display: block;\r
        width: 100%;\r
        height: 100%;\r
        object-fit: cover;\r
      }\r
    }\r
  }\r
\r
  .top-swiper {\r
    height: 80%;\r
    width: 100%;\r
  }\r
\r
  .thumbs-swiper {\r
    height: 20%;\r
    box-sizing: border-box;\r
    padding: $gap 0;\r
\r
    .slide {\r
      width: 25%;\r
      height: 100%;\r
      opacity: 1;\r
      &:not(.swiper-slide-thumb-active) {\r
        opacity: 0.4;\r
      }\r
    }\r
  }\r
</style>\r
`,"./34-zoom.vue":`<template>\r
  <swiper\r
    class="swiper"\r
    :style="{\r
      '--swiper-navigation-color': '#fff',\r
      '--swiper-pagination-color': '#fff'\r
    }"\r
    :modules="modules"\r
    :zoom="true"\r
    :navigation="true"\r
    :pagination="{ clickable: true }"\r
  >\r
    <swiper-slide v-for="slide in 8" :key="slide" class="slide">\r
      <div class="swiper-zoom-container">\r
        <img :src="\`/images/example/\${slide}.jpg\`" />\r
      </div>\r
    </swiper-slide>\r
  </swiper>\r
</template>\r
\r
<script lang="ts">\r
  import { defineComponent } from 'vue'\r
  import { Pagination, Navigation, Zoom } from 'swiper'\r
  import { Swiper, SwiperSlide } from 'swiper/vue'\r
  import 'swiper/css'\r
  import 'swiper/css/zoom'\r
  import 'swiper/css/pagination'\r
  import 'swiper/css/navigation'\r
\r
  export default defineComponent({\r
    name: 'swiper-example-zoom',\r
    title: 'Zoom',\r
    url: import.meta.url,\r
    components: {\r
      Swiper,\r
      SwiperSlide\r
    },\r
    setup() {\r
      return {\r
        modules: [Pagination, Navigation, Zoom]\r
      }\r
    }\r
  })\r
<\/script>\r
\r
<style lang="scss" scoped>\r
  @import '@/styles/init.scss';\r
  @import './style.scss';\r
\r
  .swiper {\r
    @include swiper-wrapper($height: 400px);\r
  }\r
\r
  .slide {\r
    @include swiper-slide();\r
    overflow: hidden;\r
  }\r
</style>\r
`,"./35-lazy-load-images.vue":`<template>\r
  <swiper\r
    class="swiper"\r
    :style="{\r
      '--swiper-navigation-color': '#fff',\r
      '--swiper-pagination-color': '#fff'\r
    }"\r
    :modules="modules"\r
    :lazy="true"\r
    :navigation="true"\r
    :pagination="{ clickable: true }"\r
  >\r
    <swiper-slide v-for="slide in 8" :key="slide" class="slide">\r
      <img :data-src="\`/images/example/\${slide}.jpg\`" class="swiper-lazy" />\r
      <div class="swiper-lazy-preloader swiper-lazy-preloader-white"></div>\r
    </swiper-slide>\r
  </swiper>\r
</template>\r
\r
<script lang="ts">\r
  import { defineComponent } from 'vue'\r
  import { Lazy, Pagination, Navigation } from 'swiper'\r
  import { Swiper, SwiperSlide } from 'swiper/vue'\r
  import 'swiper/css'\r
  import 'swiper/css/lazy'\r
  import 'swiper/css/pagination'\r
  import 'swiper/css/navigation'\r
\r
  export default defineComponent({\r
    name: 'swiper-example-lazy-loading-image',\r
    title: 'Lazy loading images',\r
    url: import.meta.url,\r
    components: {\r
      Swiper,\r
      SwiperSlide\r
    },\r
    setup() {\r
      return {\r
        modules: [Lazy, Pagination, Navigation]\r
      }\r
    }\r
  })\r
<\/script>\r
\r
<style lang="scss" scoped>\r
  @import '@/styles/init.scss';\r
  @import './style.scss';\r
\r
  .swiper {\r
    @include swiper-wrapper();\r
    background-color: black;\r
  }\r
\r
  .slide {\r
    text-align: center;\r
\r
    img {\r
      width: auto;\r
      height: auto;\r
      max-width: 100%;\r
      max-height: 100%;\r
      transform: translate(-50%, -50%);\r
      position: absolute;\r
      left: 50%;\r
      top: 50%;\r
    }\r
  }\r
</style>\r
`,"./36-parallax.vue":`<template>\r
  <swiper\r
    class="swiper"\r
    :style="{\r
      '--swiper-navigation-color': '#fff',\r
      '--swiper-pagination-color': '#fff'\r
    }"\r
    :modules="modules"\r
    :speed="600"\r
    :parallax="true"\r
    :navigation="true"\r
    :pagination="{ clickable: true }"\r
  >\r
    <template #container-start>\r
      <div\r
        class="parallax-bg"\r
        data-swiper-parallax="-23%"\r
        :style="{ backgroundImage: 'url(/images/example/1.jpg)' }"\r
      ></div>\r
    </template>\r
    <swiper-slide class="slide">\r
      <h1 class="title" data-swiper-parallax="-300">Slide 1</h1>\r
      <h2 class="subtitle" data-swiper-parallax="-200">Subtitle</h2>\r
      <div class="text" data-swiper-parallax="-100">\r
        <p>\r
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam dictum mattis\r
          velit, sit amet faucibus felis iaculis nec. Nulla laoreet justo vitae porttitor\r
          porttitor. Suspendisse in sem justo. Integer laoreet magna nec elit suscipit, ac\r
          laoreet nibh euismod. Aliquam hendrerit lorem at elit facilisis rutrum. Ut at\r
          ullamcorper velit. Nulla ligula nisi, imperdiet ut lacinia nec, tincidunt ut\r
          libero. Aenean feugiat non eros quis feugiat.\r
        </p>\r
      </div>\r
    </swiper-slide>\r
    <swiper-slide class="slide">\r
      <h1 class="title" data-swiper-parallax="-300">Slide 2</h1>\r
      <h2 class="subtitle" data-swiper-parallax="-200">Subtitle</h2>\r
      <div class="text" data-swiper-parallax="-100">\r
        <p>\r
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam dictum mattis\r
          velit, sit amet faucibus felis iaculis nec. Nulla laoreet justo vitae porttitor\r
          porttitor. Suspendisse in sem justo. Integer laoreet magna nec elit suscipit, ac\r
          laoreet nibh euismod. Aliquam hendrerit lorem at elit facilisis rutrum. Ut at\r
          ullamcorper velit. Nulla ligula nisi, imperdiet ut lacinia nec, tincidunt ut\r
          libero. Aenean feugiat non eros quis feugiat.\r
        </p>\r
      </div>\r
    </swiper-slide>\r
    <swiper-slide class="slide">\r
      <h1 class="title" data-swiper-parallax="-300">Slide 3</h1>\r
      <h2 class="subtitle" data-swiper-parallax="-200">Subtitle</h2>\r
      <div class="text" data-swiper-parallax="-100">\r
        <p>\r
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam dictum mattis\r
          velit, sit amet faucibus felis iaculis nec. Nulla laoreet justo vitae porttitor\r
          porttitor. Suspendisse in sem justo. Integer laoreet magna nec elit suscipit, ac\r
          laoreet nibh euismod. Aliquam hendrerit lorem at elit facilisis rutrum. Ut at\r
          ullamcorper velit. Nulla ligula nisi, imperdiet ut lacinia nec, tincidunt ut\r
          libero. Aenean feugiat non eros quis feugiat.\r
        </p>\r
      </div>\r
    </swiper-slide>\r
  </swiper>\r
</template>\r
\r
<script lang="ts">\r
  import { defineComponent } from 'vue'\r
  import { Parallax, Pagination, Navigation } from 'swiper'\r
  import { Swiper, SwiperSlide } from 'swiper/vue'\r
  import 'swiper/css'\r
  import 'swiper/css/pagination'\r
  import 'swiper/css/navigation'\r
\r
  export default defineComponent({\r
    name: 'swiper-example-parallax',\r
    title: 'Parallax',\r
    url: import.meta.url,\r
    components: {\r
      Swiper,\r
      SwiperSlide\r
    },\r
    setup() {\r
      return {\r
        modules: [Parallax, Pagination, Navigation]\r
      }\r
    }\r
  })\r
<\/script>\r
\r
<style lang="scss" scoped>\r
  @import '@/styles/init.scss';\r
  @import './style.scss';\r
\r
  .parallax-bg {\r
    position: absolute;\r
    left: 0;\r
    top: 0;\r
    width: 130%;\r
    height: 100%;\r
    background-size: cover;\r
    background-position: center;\r
  }\r
\r
  .swiper {\r
    @include swiper-wrapper($height: 380px);\r
\r
    .slide {\r
      display: flex;\r
      flex-direction: column;\r
      justify-content: center;\r
      color: $white;\r
      box-sizing: border-box;\r
      padding: 0 100px;\r
      background-color: transparent;\r
\r
      .title {\r
        margin-top: 0;\r
        margin-bottom: $lg-gap;\r
      }\r
\r
      .subtitle {\r
        margin-top: 0;\r
        margin-bottom: $gap;\r
      }\r
\r
      .text {\r
        max-width: 430px;\r
        line-height: 1.32;\r
      }\r
    }\r
  }\r
</style>\r
`,"./37-rtl.vue":`<template>\r
  <swiper\r
    class="swiper"\r
    :modules="modules"\r
    :navigation="true"\r
    :pagination="{ clickable: true }"\r
    dir="rtl"\r
  >\r
    <swiper-slide class="slide">Slide 1</swiper-slide>\r
    <swiper-slide class="slide">Slide 2</swiper-slide>\r
    <swiper-slide class="slide">Slide 3</swiper-slide>\r
    <swiper-slide class="slide">Slide 4</swiper-slide>\r
    <swiper-slide class="slide">Slide 5</swiper-slide>\r
    <swiper-slide class="slide">Slide 6</swiper-slide>\r
    <swiper-slide class="slide">Slide 7</swiper-slide>\r
    <swiper-slide class="slide">Slide 8</swiper-slide>\r
  </swiper>\r
</template>\r
\r
<script lang="ts">\r
  import { defineComponent } from 'vue'\r
  import { Pagination, Navigation } from 'swiper'\r
  import { Swiper, SwiperSlide } from 'swiper/vue'\r
  import 'swiper/css'\r
  import 'swiper/css/pagination'\r
  import 'swiper/css/navigation'\r
\r
  export default defineComponent({\r
    name: 'swiper-example-rtl',\r
    title: 'RTL layout',\r
    url: import.meta.url,\r
    components: {\r
      Swiper,\r
      SwiperSlide\r
    },\r
    setup() {\r
      return {\r
        modules: [Pagination, Navigation]\r
      }\r
    }\r
  })\r
<\/script>\r
\r
<style lang="scss" scoped>\r
  @import '@/styles/init.scss';\r
  @import './style.scss';\r
\r
  .swiper {\r
    @include swiper-wrapper();\r
  }\r
\r
  .slide {\r
    @include swiper-slide();\r
  }\r
</style>\r
`,"./38-responsive-breakpoints.vue":`<template>\r
  <div class="tip">\u2192 Resize the browser window \u2190</div>\r
  <swiper\r
    class="swiper"\r
    :modules="modules"\r
    :slides-per-view="1"\r
    :space-between="10"\r
    :pagination="{ clickable: true }"\r
    :breakpoints="{\r
      '640': {\r
        slidesPerView: 2,\r
        spaceBetween: 20\r
      },\r
      '768': {\r
        slidesPerView: 4,\r
        spaceBetween: 40\r
      },\r
      '1024': {\r
        slidesPerView: 5,\r
        spaceBetween: 50\r
      }\r
    }"\r
  >\r
    <swiper-slide class="slide">Slide 1</swiper-slide>\r
    <swiper-slide class="slide">Slide 2</swiper-slide>\r
    <swiper-slide class="slide">Slide 3</swiper-slide>\r
    <swiper-slide class="slide">Slide 4</swiper-slide>\r
    <swiper-slide class="slide">Slide 5</swiper-slide>\r
    <swiper-slide class="slide">Slide 6</swiper-slide>\r
    <swiper-slide class="slide">Slide 7</swiper-slide>\r
    <swiper-slide class="slide">Slide 8</swiper-slide>\r
    <swiper-slide class="slide">Slide 9</swiper-slide>\r
    <swiper-slide class="slide">Slide 10</swiper-slide>\r
  </swiper>\r
</template>\r
\r
<script lang="ts">\r
  import { defineComponent } from 'vue'\r
  import { Pagination } from 'swiper'\r
  import { Swiper, SwiperSlide } from 'swiper/vue'\r
  import 'swiper/css'\r
  import 'swiper/css/pagination'\r
\r
  export default defineComponent({\r
    name: 'swiper-example-responsive-breakpoints',\r
    title: 'Responsive breakpoints',\r
    url: import.meta.url,\r
    components: {\r
      Swiper,\r
      SwiperSlide\r
    },\r
    setup() {\r
      return {\r
        modules: [Pagination]\r
      }\r
    }\r
  })\r
<\/script>\r
\r
<style lang="scss" scoped>\r
  @import '@/styles/init.scss';\r
  @import './style.scss';\r
\r
  .tip {\r
    width: 100%;\r
    line-height: 3em;\r
    text-align: center;\r
    border-bottom: 1px solid $border-color;\r
  }\r
\r
  .swiper {\r
    @include swiper-wrapper();\r
  }\r
\r
  .slide {\r
    @include swiper-slide();\r
  }\r
</style>\r
`,"./39-autoheight.vue":`<template>\r
  <swiper\r
    class="swiper"\r
    :modules="modules"\r
    :auto-height="true"\r
    :space-between="20"\r
    :navigation="true"\r
    :pagination="{ clickable: true }"\r
  >\r
    <swiper-slide class="slide">Slide 1</swiper-slide>\r
    <swiper-slide class="slide">Slide 2</swiper-slide>\r
    <swiper-slide class="slide">Slide 3</swiper-slide>\r
    <swiper-slide class="slide">Slide 4</swiper-slide>\r
    <swiper-slide class="slide">Slide 5</swiper-slide>\r
    <swiper-slide class="slide">Slide 6</swiper-slide>\r
    <swiper-slide class="slide">Slide 7</swiper-slide>\r
    <swiper-slide class="slide">Slide 8</swiper-slide>\r
  </swiper>\r
</template>\r
\r
<script lang="ts">\r
  import { defineComponent } from 'vue'\r
  import { Pagination, Navigation } from 'swiper'\r
  import { Swiper, SwiperSlide } from 'swiper/vue'\r
  import 'swiper/css'\r
  import 'swiper/css/pagination'\r
  import 'swiper/css/navigation'\r
\r
  export default defineComponent({\r
    name: 'swiper-example-auto-height',\r
    title: 'Auto height',\r
    url: import.meta.url,\r
    components: {\r
      Swiper,\r
      SwiperSlide\r
    },\r
    setup() {\r
      return {\r
        modules: [Pagination, Navigation]\r
      }\r
    }\r
  })\r
<\/script>\r
\r
<style lang="scss" scoped>\r
  @import '@/styles/init.scss';\r
  @import './style.scss';\r
\r
  .swiper {\r
    @include swiper-wrapper($height: auto);\r
  }\r
\r
  .slide {\r
    @include swiper-slide();\r
    height: 300px;\r
    line-height: 300px;\r
\r
    &:nth-child(2n) {\r
      height: 500px;\r
      line-height: 500px;\r
    }\r
  }\r
</style>\r
`,"./40-slideable-menu.vue":`<template>\r
  <swiper\r
    class="swiper"\r
    slides-per-view="auto"\r
    :initial-slide="1"\r
    :resistance-ratio="0"\r
    @swiper="setSwiperRef"\r
    @slide-change="handleSlideChange"\r
  >\r
    <swiper-slide class="menu">Menu slide</swiper-slide>\r
    <swiper-slide class="content">\r
      <div class="menu-button" :class="{ opened: menuOpened }" @click="toggleMenu">\r
        <div class="bar"></div>\r
        <div class="bar"></div>\r
        <div class="bar"></div>\r
      </div>\r
      <div>Content slide</div>\r
    </swiper-slide>\r
  </swiper>\r
</template>\r
\r
<script lang="ts">\r
  import { defineComponent, ref } from 'vue'\r
  import SwiperClass from 'swiper'\r
  import { Swiper, SwiperSlide } from 'swiper/vue'\r
  import 'swiper/css'\r
\r
  export default defineComponent({\r
    name: 'swiper-example-slideable-navigation-drawer',\r
    title: 'Slideable navigation drawer',\r
    url: import.meta.url,\r
    components: {\r
      Swiper,\r
      SwiperSlide\r
    },\r
    setup() {\r
      let swiperRef: SwiperClass | null = null\r
      const setSwiperRef = (swiper: SwiperClass) => {\r
        swiperRef = swiper\r
      }\r
\r
      const menuOpened = ref(false)\r
      const toggleMenu = () => {\r
        menuOpened.value ? swiperRef?.slideNext() : swiperRef?.slidePrev()\r
      }\r
\r
      const handleSlideChange = () => {\r
        menuOpened.value = swiperRef?.activeIndex === 0\r
      }\r
\r
      return {\r
        menuOpened,\r
        toggleMenu,\r
        setSwiperRef,\r
        handleSlideChange\r
      }\r
    }\r
  })\r
<\/script>\r
\r
<style lang="scss" scoped>\r
  @import '@/styles/init.scss';\r
  @import './style.scss';\r
\r
  .swiper {\r
    @include swiper-wrapper();\r
\r
    .menu,\r
    .content {\r
      @include swiper-slide();\r
    }\r
\r
    .menu {\r
      width: 320px;\r
      background-color: #2c8dfb !important;\r
      color: #fff;\r
    }\r
\r
    .menu-button {\r
      position: absolute;\r
      top: 0px;\r
      left: 0px;\r
      padding: 15px;\r
      cursor: pointer;\r
      transition: 0.3s;\r
      background-color: #2c8dfb;\r
\r
      .bar {\r
        position: relative;\r
        display: block;\r
        width: 50px;\r
        height: 5px;\r
        margin: 10px auto;\r
        background-color: #fff;\r
        border-radius: 10px;\r
        transition: 0.3s;\r
\r
        &:nth-of-type(1) {\r
          margin-top: 0px;\r
        }\r
        &:nth-of-type(3) {\r
          margin-bottom: 0px;\r
        }\r
      }\r
\r
      &:hover {\r
        .bar:nth-of-type(1) {\r
          transform: translateY(1.5px) rotate(-4.5deg);\r
        }\r
        .bar:nth-of-type(2) {\r
          opacity: 0.9;\r
        }\r
        .bar:nth-of-type(3) {\r
          transform: translateY(-1.5px) rotate(4.5deg);\r
        }\r
      }\r
\r
      &.opened {\r
        .bar:nth-of-type(1) {\r
          transform: translateY(15px) rotate(-45deg);\r
        }\r
        .bar:nth-of-type(2) {\r
          opacity: 0;\r
        }\r
        .bar:nth-of-type(3) {\r
          transform: translateY(-15px) rotate(45deg);\r
        }\r
\r
        &:hover {\r
          .bar:nth-of-type(1) {\r
            transform: translateY(13.5px) rotate(-40.5deg);\r
          }\r
          .bar:nth-of-type(2) {\r
            opacity: 0.1;\r
          }\r
          .bar:nth-of-type(3) {\r
            transform: translateY(-13.5px) rotate(40.5deg);\r
          }\r
        }\r
      }\r
    }\r
  }\r
</style>\r
`,"./41-virtual-slides.vue":`<template>\r
  <div class="toolbar">\r
    <button @click="prepend()" class="prepend-2-slides">Prepend 2 Slides</button>\r
    <button @click="slideTo(1)" class="prepend-slide">Slide 1</button>\r
    <button @click="slideTo(250)" class="slide-250">Slide 250</button>\r
    <button @click="slideTo(500)" class="slide-500">Slide 500</button>\r
    <button @click="append()" class="append-slides">Append Slide</button>\r
  </div>\r
  <swiper\r
    class="swiper"\r
    :modules="modules"\r
    :virtual="true"\r
    :slides-per-view="3"\r
    :centered-slides="true"\r
    :space-between="30"\r
    :navigation="true"\r
    :pagination="{ type: 'fraction' }"\r
    @swiper="setSwiperRef"\r
  >\r
    <swiper-slide\r
      v-for="(slideContent, index) in slides"\r
      :key="index"\r
      :virtual-index="index"\r
      class="slide"\r
    >\r
      Slide {{ slideContent }}\r
    </swiper-slide>\r
  </swiper>\r
</template>\r
\r
<script lang="ts">\r
  import { defineComponent, reactive } from 'vue'\r
  import SwiperClass, { Pagination, Navigation, Virtual } from 'swiper'\r
  import { Swiper, SwiperSlide } from 'swiper/vue'\r
  import 'swiper/css'\r
  import 'swiper/css/pagination'\r
  import 'swiper/css/navigation'\r
  import 'swiper/css/virtual'\r
\r
  export default defineComponent({\r
    name: 'swiper-example-virtual-slides',\r
    title: 'Virtual slides',\r
    url: import.meta.url,\r
    components: {\r
      Swiper,\r
      SwiperSlide\r
    },\r
    setup() {\r
      let swiperRef: SwiperClass | null = null\r
      const setSwiperRef = (swiper: SwiperClass) => {\r
        swiperRef = swiper\r
      }\r
\r
      const slideTo = (index: number) => {\r
        swiperRef?.slideTo(index - 1, 0)\r
      }\r
\r
      // Create array with 500 slides\r
      const slides = reactive(Array.from({ length: 500 }).map((_, index) => index + 1))\r
\r
      let prependNumber = 1\r
      const prepend = () => {\r
        slides.unshift(prependNumber - 2, prependNumber - 1)\r
        prependNumber -= 2\r
        swiperRef?.slideTo(swiperRef.activeIndex + 2, 0)\r
      }\r
\r
      const append = () => {\r
        slides.push(slides.length)\r
      }\r
\r
      return {\r
        modules: [Pagination, Navigation, Virtual],\r
        setSwiperRef,\r
        slides,\r
        slideTo,\r
        append,\r
        prepend\r
      }\r
    }\r
  })\r
<\/script>\r
\r
<style lang="scss" scoped>\r
  @import '@/styles/init.scss';\r
  @import './style.scss';\r
\r
  .toolbar {\r
    @include toolbar();\r
\r
    button {\r
      @include toolbar-button();\r
    }\r
  }\r
\r
  .swiper {\r
    height: 300px;\r
    width: 100%;\r
\r
    ::v-deep(.swiper-slide) {\r
      @include swiper-slide();\r
    }\r
  }\r
</style>\r
`,"./42-change-direction.vue":`<template>\r
  <swiper\r
    class="swiper"\r
    :modules="modules"\r
    direction="horizontal"\r
    :slides-per-view="3"\r
    :space-between="30"\r
    :navigation="true"\r
    @swiper="setSwiperRef"\r
    @resize="handleResize"\r
  >\r
    <swiper-slide class="slide">Slide 1</swiper-slide>\r
    <swiper-slide class="slide">Slide 2</swiper-slide>\r
    <swiper-slide class="slide">Slide 3</swiper-slide>\r
    <swiper-slide class="slide">Slide 4</swiper-slide>\r
    <swiper-slide class="slide">Slide 5</swiper-slide>\r
    <swiper-slide class="slide">Slide 6</swiper-slide>\r
    <swiper-slide class="slide">Slide 7</swiper-slide>\r
    <swiper-slide class="slide">Slide 8</swiper-slide>\r
  </swiper>\r
</template>\r
\r
<script lang="ts">\r
  import { defineComponent } from 'vue'\r
  import SwiperClass, { Navigation } from 'swiper'\r
  import { Swiper, SwiperSlide } from 'swiper/vue'\r
  import 'swiper/css'\r
  import 'swiper/css/navigation'\r
\r
  export default defineComponent({\r
    name: 'swiper-example-change-direction',\r
    title: 'Change direction',\r
    url: import.meta.url,\r
    components: {\r
      Swiper,\r
      SwiperSlide\r
    },\r
    setup() {\r
      let swiperRef: SwiperClass | null = null\r
      const setSwiperRef = (swiper: SwiperClass) => {\r
        swiperRef = swiper\r
      }\r
\r
      const handleResize = () => {\r
        swiperRef?.changeDirection(window.innerWidth <= 960 ? 'vertical' : 'horizontal')\r
      }\r
\r
      return {\r
        modules: [Navigation],\r
        setSwiperRef,\r
        handleResize\r
      }\r
    }\r
  })\r
<\/script>\r
\r
<style lang="scss" scoped>\r
  @import '@/styles/init.scss';\r
  @import './style.scss';\r
\r
  .swiper {\r
    @include swiper-wrapper();\r
\r
    &.swiper-vertical {\r
      ::v-deep(.swiper-button-next) {\r
        right: 20px;\r
        transform: rotate(90deg);\r
      }\r
      ::v-deep(.swiper-button-prev) {\r
        left: 20px;\r
        transform: rotate(90deg);\r
      }\r
    }\r
  }\r
\r
  .slide {\r
    @include swiper-slide();\r
  }\r
</style>\r
`};var $h=Object.keys(Cs).map(s=>({component:Cs[s].default,raw:yh[s],language:"vue"}));const xh={class:"page"},Ch={class:"swiper-example"},Eh=G({setup(s){const e=nt.VueAwesomeSwiper,t=$h.map($t);return lt({title:ut(e),keywords:[ft(e),"How to use Swiper on vue3?"].join(","),description:mt(e)}),(i,l)=>(I(),V("div",xh,[m(Qn,{repository:ce(e)},{actions:f(()=>[m(Be,{icon:"doc",text:"Swiper API Document",href:"https://swiperjs.com/swiper-api"}),m(Be,{icon:"doc",text:"Swiper Vue component",href:"https://swiperjs.com/vue"}),m(Be,{icon:"doc",text:"Original Swiper Demos",href:"https://swiperjs.com/demos"}),m(Be,{icon:"discussions",text:"Swiper discussions",href:"https://github.com/nolimits4web/swiper/discussions"})]),content:f(()=>[m(bl,{examples:ce(t)},{component:f(n=>[E("div",Ch,[(I(),W(yt(n.component)))])]),_:1},8,["examples"])]),_:1},8,["repository"])]))}});var Ih=R(Eh,[["__scopeId","data-v-099fc573"]]);export{Ih as default};
