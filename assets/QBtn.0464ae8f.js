var le=Object.defineProperty,ie=Object.defineProperties;var se=Object.getOwnPropertyDescriptors;var N=Object.getOwnPropertySymbols;var oe=Object.prototype.hasOwnProperty,ce=Object.prototype.propertyIsEnumerable;var I=(e,n,t)=>n in e?le(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t,E=(e,n)=>{for(var t in n||(n={}))oe.call(n,t)&&I(e,t,n[t]);if(N)for(var t of N(n))ce.call(n,t)&&I(e,t,n[t]);return e},O=(e,n)=>ie(e,se(n));import{c as l,h,S as de,C as z,m as fe,v as ve,t as G,u as ge,q as J,g as Z,r as Q,a as me,x as he,s as R,T as be,l as ye}from"./index.c93a5ba1.js";import{u as V,c as ee,b as ke,f as pe,g as qe,Q as D,e as xe}from"./QIcon.3c3c2e74.js";const Le={size:{type:[Number,String],default:"1em"},color:String};function Se(e){return{cSize:l(()=>e.size in V?`${V[e.size]}px`:e.size),classes:l(()=>"q-spinner"+(e.color?` text-${e.color}`:""))}}var Ee=ee({name:"QSpinner",props:O(E({},Le),{thickness:{type:Number,default:5}}),setup(e){const{cSize:n,classes:t}=Se(e);return()=>h("svg",{class:t.value+" q-spinner-mat",width:n.value,height:n.value,viewBox:"25 25 50 50"},[h("circle",{class:"path",cx:"50",cy:"50",r:"20",fill:"none",stroke:"currentColor","stroke-width":e.thickness,"stroke-miterlimit":"10"})])}});function $e(e,n){const t=e.style;for(const u in n)t[u]=n[u]}function We(e){if(e==null)return;if(typeof e=="string")try{return document.querySelector(e)||void 0}catch{return}const n=de(e)===!0?e.value:e;if(n)return n.$el||n}function Ce(e,n=250){let t=!1,u;return function(){return t===!1&&(t=!0,setTimeout(()=>{t=!1},n),u=e.apply(this,arguments)),u}}function H(e,n,t,u){t.modifiers.stop===!0&&G(e);const f=t.modifiers.color;let o=t.modifiers.center;o=o===!0||u===!0;const v=document.createElement("span"),d=document.createElement("span"),m=ge(e),{left:$,top:L,width:S,height:p}=n.getBoundingClientRect(),r=Math.sqrt(S*S+p*p),q=r/2,g=`${(S-r)/2}px`,i=o?g:`${m.left-$-q}px`,s=`${(p-r)/2}px`,b=o?s:`${m.top-L-q}px`;d.className="q-ripple__inner",$e(d,{height:`${r}px`,width:`${r}px`,transform:`translate3d(${i},${b},0) scale3d(.2,.2,1)`,opacity:0}),v.className=`q-ripple${f?" text-"+f:""}`,v.setAttribute("dir","ltr"),v.appendChild(d),n.appendChild(v);const C=()=>{v.remove(),clearTimeout(k)};t.abort.push(C);let k=setTimeout(()=>{d.classList.add("q-ripple__inner--enter"),d.style.transform=`translate3d(${g},${s},0) scale3d(1,1,1)`,d.style.opacity=.2,k=setTimeout(()=>{d.classList.remove("q-ripple__inner--enter"),d.classList.add("q-ripple__inner--leave"),d.style.opacity=0,k=setTimeout(()=>{v.remove(),t.abort.splice(t.abort.indexOf(C),1)},275)},250)},50)}function W(e,{modifiers:n,value:t,arg:u,instance:f}){const o=Object.assign({},f.$q.config.ripple,n,t);e.modifiers={early:o.early===!0,stop:o.stop===!0,center:o.center===!0,color:o.color||u,keyCodes:[].concat(o.keyCodes||13)}}var Re=ke({name:"ripple",beforeMount(e,n){const t={enabled:n.value!==!1,modifiers:{},abort:[],start(u){t.enabled===!0&&u.qSkipRipple!==!0&&(t.modifiers.early===!0?["mousedown","touchstart"].includes(u.type)===!0:u.type==="click")&&H(u,e,t,u.qKeyEvent===!0)},keystart:Ce(u=>{t.enabled===!0&&u.qSkipRipple!==!0&&z(u,t.modifiers.keyCodes)===!0&&u.type===`key${t.modifiers.early===!0?"down":"up"}`&&H(u,e,t,!0)},300)};W(t,n),e.__qripple=t,fe(t,"main",[[e,"mousedown","start","passive"],[e,"touchstart","start","passive"],[e,"click","start","passive"],[e,"keydown","keystart","passive"],[e,"keyup","keystart","passive"]])},updated(e,n){if(n.oldValue!==n.value){const t=e.__qripple;t.enabled=n.value!==!1,t.enabled===!0&&Object(n.value)===n.value&&W(t,n)}},beforeUnmount(e){const n=e.__qripple;n.abort.forEach(t=>{t()}),ve(n,"main"),delete e._qripple}});const te={left:"start",center:"center",right:"end",between:"between",around:"around",evenly:"evenly",stretch:"stretch"},we=Object.keys(te),_e={align:{type:String,validator:e=>we.includes(e)}};function Be(e){return l(()=>{const n=e.align===void 0?e.vertical===!0?"stretch":"left":e.align;return`${e.vertical===!0?"items":"justify"}-${te[n]}`})}function Pe(e){return e.appContext.config.globalProperties.$router!==void 0}function U(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}function X(e,n){return(e.aliasOf||e)===(n.aliasOf||n)}function Te(e,n){for(const t in n){const u=n[t],f=e[t];if(typeof u=="string"){if(u!==f)return!1}else if(Array.isArray(f)===!1||f.length!==u.length||u.some((o,v)=>o!==f[v]))return!1}return!0}function Y(e,n){return Array.isArray(n)===!0?e.length===n.length&&e.every((t,u)=>t===n[u]):e.length===1&&e[0]===n}function Ae(e,n){return Array.isArray(e)===!0?Y(e,n):Array.isArray(n)===!0?Y(n,e):e===n}function Oe(e,n){if(Object.keys(e).length!==Object.keys(n).length)return!1;for(const t in e)if(Ae(e[t],n[t])===!1)return!1;return!0}const Me={to:[String,Object],replace:Boolean,exact:Boolean,activeClass:{type:String,default:"q-router-link--active"},exactActiveClass:{type:String,default:"q-router-link--exact-active"},href:String,target:String,disable:Boolean};function je(e){const n=Z(),{props:t,proxy:u}=n,f=Pe(n),o=l(()=>t.disable!==!0&&t.href!==void 0),v=l(()=>f===!0&&t.disable!==!0&&o.value!==!0&&t.to!==void 0&&t.to!==null&&t.to!==""),d=l(()=>{if(v.value===!0)try{return u.$router.resolve(t.to)}catch{}return null}),m=l(()=>d.value!==null),$=l(()=>o.value===!0||m.value===!0),L=l(()=>t.type==="a"||$.value===!0?"a":t.tag||e||"div"),S=l(()=>o.value===!0?{href:t.href,target:t.target}:m.value===!0?{href:d.value.href,target:t.target}:{}),p=l(()=>{if(m.value===!1)return null;const{matched:s}=d.value,{length:b}=s,C=s[b-1];if(C===void 0)return-1;const k=u.$route.matched;if(k.length===0)return-1;const P=k.findIndex(X.bind(null,C));if(P>-1)return P;const M=U(s[b-2]);return b>1&&U(C)===M&&k[k.length-1].path!==M?k.findIndex(X.bind(null,s[b-2])):P}),r=l(()=>m.value===!0&&p.value>-1&&Te(u.$route.params,d.value.params)),q=l(()=>r.value===!0&&p.value===u.$route.matched.length-1&&Oe(u.$route.params,d.value.params)),g=l(()=>m.value===!0?q.value===!0?` ${t.exactActiveClass} ${t.activeClass}`:t.exact===!0?"":r.value===!0?` ${t.activeClass}`:"":"");function i(s){return t.disable===!0||s.metaKey||s.altKey||s.ctrlKey||s.shiftKey||s.__qNavigate!==!0&&s.defaultPrevented===!0||s.button!==void 0&&s.button!==0||t.target==="_blank"?!1:(J(s),u.$router[t.replace===!0?"replace":"push"](t.to).catch(b=>b))}return{hasRouterLink:m,hasHrefLink:o,hasLink:$,linkTag:L,linkRoute:d,linkIsActive:r,linkIsExactActive:q,linkClass:g,linkProps:S,navigateToRouterLink:i}}const F={none:0,xs:4,sm:8,md:16,lg:24,xl:32},ze={xs:8,sm:10,md:14,lg:20,xl:24},Ke=["button","submit","reset"],Ne=/[^\s]\/[^\s]/,Ie=O(E(E({},qe),Me),{type:{type:String,default:"button"},label:[Number,String],icon:String,iconRight:String,round:Boolean,outline:Boolean,flat:Boolean,unelevated:Boolean,rounded:Boolean,push:Boolean,glossy:Boolean,size:String,fab:Boolean,fabMini:Boolean,padding:String,color:String,textColor:String,noCaps:Boolean,noWrap:Boolean,dense:Boolean,tabindex:[Number,String],ripple:{type:[Boolean,Object],default:!0},align:O(E({},_e.align),{default:"center"}),stack:Boolean,stretch:Boolean,loading:{type:Boolean,default:null},disable:Boolean});function Qe(e){const n=pe(e,ze),t=Be(e),{hasRouterLink:u,hasLink:f,linkTag:o,linkProps:v,navigateToRouterLink:d}=je("button"),m=l(()=>{const i=e.fab===!1&&e.fabMini===!1?n.value:{};return e.padding!==void 0?Object.assign({},i,{padding:e.padding.split(/\s+/).map(s=>s in F?F[s]+"px":s).join(" "),minWidth:"0",minHeight:"0"}):i}),$=l(()=>e.rounded===!0||e.fab===!0||e.fabMini===!0),L=l(()=>e.disable!==!0&&e.loading!==!0),S=l(()=>L.value===!0?e.tabindex||0:-1),p=l(()=>e.flat===!0?"flat":e.outline===!0?"outline":e.push===!0?"push":e.unelevated===!0?"unelevated":"standard"),r=l(()=>{const i={tabindex:S.value};return f.value===!0?Object.assign(i,v.value):Ke.includes(e.type)===!0&&(i.type=e.type),o.value==="a"?(e.disable===!0?i["aria-disabled"]="true":i.href===void 0&&(i.role="button"),u.value!==!0&&Ne.test(e.type)===!0&&(i.type=e.type)):e.disable===!0&&(i.disabled="",i["aria-disabled"]="true"),e.loading===!0&&e.percentage!==void 0&&Object.assign(i,{role:"progressbar","aria-valuemin":0,"aria-valuemax":100,"aria-valuenow":e.percentage}),i}),q=l(()=>{let i;return e.color!==void 0?e.flat===!0||e.outline===!0?i=`text-${e.textColor||e.color}`:i=`bg-${e.color} text-${e.textColor||"white"}`:e.textColor&&(i=`text-${e.textColor}`),`q-btn--${p.value} q-btn--${e.round===!0?"round":`rectangle${$.value===!0?" q-btn--rounded":""}`}`+(i!==void 0?" "+i:"")+(L.value===!0?" q-btn--actionable q-focusable q-hoverable":e.disable===!0?" disabled":"")+(e.fab===!0?" q-btn--fab":e.fabMini===!0?" q-btn--fab-mini":"")+(e.noCaps===!0?" q-btn--no-uppercase":"")+(e.dense===!0?" q-btn--dense":"")+(e.stretch===!0?" no-border-radius self-stretch":"")+(e.glossy===!0?" glossy":"")}),g=l(()=>t.value+(e.stack===!0?" column":" row")+(e.noWrap===!0?" no-wrap text-no-wrap":"")+(e.loading===!0?" q-btn__content--hidden":""));return{classes:q,style:m,innerClasses:g,attributes:r,hasRouterLink:u,hasLink:f,linkTag:o,navigateToRouterLink:d,isActionable:L}}const{passiveCapture:y}=ye;let w=null,_=null,B=null;var Ue=ee({name:"QBtn",props:O(E({},Ie),{percentage:Number,darkPercentage:Boolean}),emits:["click","keydown","touchstart","mousedown","keyup"],setup(e,{slots:n,emit:t}){const{proxy:u}=Z(),{classes:f,style:o,innerClasses:v,attributes:d,hasRouterLink:m,hasLink:$,linkTag:L,navigateToRouterLink:S,isActionable:p}=Qe(e),r=Q(null),q=Q(null);let g=null,i,s;const b=l(()=>e.label!==void 0&&e.label!==null&&e.label!==""),C=l(()=>e.disable===!0||e.ripple===!1?!1:E({keyCodes:$.value===!0?[13,32]:[13]},e.ripple===!0?{}:e.ripple)),k=l(()=>({center:e.round})),P=l(()=>{const a=Math.max(0,Math.min(100,e.percentage));return a>0?{transition:"transform 0.6s",transform:`translateX(${a-100}%)`}:{}}),M=l(()=>e.loading===!0?{onMousedown:A,onTouchstartPassive:A,onClick:A,onKeydown:A,onKeyup:A}:p.value===!0?{onClick:K,onKeydown:ae,onMousedown:ue,onTouchstart:re}:{onClick:R}),ne=l(()=>E(E({ref:r,class:"q-btn q-btn-item non-selectable no-outline "+f.value,style:o.value},d.value),M.value));function K(a){if(r.value!==null){if(a!==void 0){if(a.defaultPrevented===!0)return;const c=document.activeElement;if(e.type==="submit"&&c!==document.body&&r.value.contains(c)===!1&&c.contains(r.value)===!1){r.value.focus();const j=()=>{document.removeEventListener("keydown",R,!0),document.removeEventListener("keyup",j,y),r.value!==null&&r.value.removeEventListener("blur",j,y)};document.addEventListener("keydown",R,!0),document.addEventListener("keyup",j,y),r.value.addEventListener("blur",j,y)}}if(m.value===!0){const c=()=>{a.__qNavigate=!0,S(a)};t("click",a,c),a.defaultPrevented!==!0&&c()}else t("click",a)}}function ae(a){r.value!==null&&(t("keydown",a),z(a,[13,32])===!0&&_!==r.value&&(_!==null&&T(),a.defaultPrevented!==!0&&(r.value.focus(),_=r.value,r.value.classList.add("q-btn--active"),document.addEventListener("keyup",x,!0),r.value.addEventListener("blur",x,y)),R(a)))}function re(a){r.value!==null&&(t("touchstart",a),a.defaultPrevented!==!0&&(w!==r.value&&(w!==null&&T(),w=r.value,g=a.target,g.addEventListener("touchcancel",x,y),g.addEventListener("touchend",x,y)),i=!0,clearTimeout(s),s=setTimeout(()=>{i=!1},200)))}function ue(a){r.value!==null&&(a.qSkipRipple=i===!0,t("mousedown",a),a.defaultPrevented!==!0&&B!==r.value&&(B!==null&&T(),B=r.value,r.value.classList.add("q-btn--active"),document.addEventListener("mouseup",x,y)))}function x(a){if(r.value!==null&&!(a!==void 0&&a.type==="blur"&&document.activeElement===r.value)){if(a!==void 0&&a.type==="keyup"){if(_===r.value&&z(a,[13,32])===!0){const c=new MouseEvent("click",a);c.qKeyEvent=!0,a.defaultPrevented===!0&&J(c),a.cancelBubble===!0&&G(c),r.value.dispatchEvent(c),R(a),a.qKeyEvent=!0}t("keyup",a)}T()}}function T(a){const c=q.value;a!==!0&&(w===r.value||B===r.value)&&c!==null&&c!==document.activeElement&&(c.setAttribute("tabindex",-1),c.focus()),w===r.value&&(g!==null&&(g.removeEventListener("touchcancel",x,y),g.removeEventListener("touchend",x,y)),w=g=null),B===r.value&&(document.removeEventListener("mouseup",x,y),B=null),_===r.value&&(document.removeEventListener("keyup",x,!0),r.value!==null&&r.value.removeEventListener("blur",x,y),_=null),r.value!==null&&r.value.classList.remove("q-btn--active")}function A(a){R(a),a.qSkipRipple=!0}return me(()=>{T(!0)}),Object.assign(u,{click:K}),()=>{let a=[];e.icon!==void 0&&a.push(h(D,{name:e.icon,left:e.stack===!1&&b.value===!0,role:"img","aria-hidden":"true"})),b.value===!0&&a.push(h("span",{class:"block"},[e.label])),a=xe(n.default,a),e.iconRight!==void 0&&e.round===!1&&a.push(h(D,{name:e.iconRight,right:e.stack===!1&&b.value===!0,role:"img","aria-hidden":"true"}));const c=[h("span",{class:"q-focus-helper",ref:q})];return e.loading===!0&&e.percentage!==void 0&&c.push(h("span",{class:"q-btn__progress absolute-full overflow-hidden"+(e.darkPercentage===!0?" q-btn__progress--dark":"")},[h("span",{class:"q-btn__progress-indicator fit block",style:P.value})])),c.push(h("span",{class:"q-btn__content text-center col items-center q-anchor--skip "+v.value},a)),e.loading!==null&&c.push(h(be,{name:"q-transition--fade"},()=>e.loading===!0?[h("span",{key:"loading",class:"absolute-full flex flex-center"},n.loading!==void 0?n.loading():[h(Ee)])]:null)),he(h(L.value,ne.value,c),[[Re,C.value,void 0,k.value]])}}});export{Ue as Q,je as a,$e as c,We as g,Me as u,Pe as v};
