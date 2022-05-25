import{o as _,c as m,a as l,r as h,u as R,b as $,d as n,e as F,f as N,i as j,g as z,w as I,h as B,j as O,n as y,t as D,F as P,k as U,v as E,l as C,m as W,_ as Y,p as Z,q,s as T,x as G,y as J,z as K,A as Q,B as X,C as f,D as b,E as ee,G as M,H as V,I as A,J as te,K as se,L as oe,M as w,N as ne,O as ae,P as le,Q as ie,R as H,S as re,T as ce,U as ue,V as de,W as pe,X as fe,Y as _e,Z as ve,$ as me,a0 as he,a1 as ge,a2 as xe}from"./index.d4d3dda1.js";import ye from"./DrawingControls.b0dc6f55.js";const we={class:"slidev-icon",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},ke=l("path",{fill:"currentColor",d:"M12 10H6.78A11 11 0 0 1 27 16h2A13 13 0 0 0 6 7.68V4H4v8h8zm8 12h5.22A11 11 0 0 1 5 16H3a13 13 0 0 0 23 8.32V28h2v-8h-8z"},null,-1),$e=[ke];function Se(s,o){return _(),m("svg",we,$e)}var Ce={name:"carbon-renew",render:Se};const Te={class:"slidev-icon",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},be=l("path",{fill:"currentColor",d:"M16 30a14 14 0 1 1 14-14a14 14 0 0 1-14 14Zm0-26a12 12 0 1 0 12 12A12 12 0 0 0 16 4Z"},null,-1),Me=l("path",{fill:"currentColor",d:"M20.59 22L15 16.41V7h2v8.58l5 5.01L20.59 22z"},null,-1),Ve=[be,Me];function Ae(s,o){return _(),m("svg",Te,Ve)}var He={name:"carbon-time",render:Ae},Ne="/D:/software/develop/PortableGit/prod_intro/assets/logo-title-horizontal.96c3c915.png";function je(){const s=h(Date.now()),o=R({interval:1e3}),r=$(()=>{const a=(o.value-s.value)/1e3,c=Math.floor(a%60).toString().padStart(2,"0");return`${Math.floor(a/60).toString().padStart(2,"0")}:${c}`});function i(){s.value=o.value}return{timer:r,resetTimer:i}}function ze(s){if(s==null)return{info:h(),update:async()=>{}};const o=`/@slidev/slide/${s}.json`,{data:r,execute:i}=F(o).json().get();return i(),{info:r,update:async c=>await fetch(o,{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(c)}).then(p=>p.json())}}const k={};function Be(s){function o(r){const i=`${r}`;return k[i]||(k[i]=ze(r)),k[i]}return{info:$(()=>o(n(s)).info.value),update:async(r,i)=>{const a=o(i!=null?i:n(s)),c=await a.update(r);return c&&(a.info.value=c),c}}}const De=["innerHTML"],Pe=["textContent"],Le=["placeholder"],Re=N({props:{class:{default:""},placeholder:{default:"No notes for this slide"}},setup(s){const o=s;j(z);const{info:r,update:i}=Be(C),a=h("");let c;const{ignoreUpdates:p}=I(a,t=>{const e=C.value;clearTimeout(c),c=setTimeout(()=>{i({raw:null,note:t},e)},500)});B(r,t=>{clearTimeout(c),p(()=>{a.value=(t==null?void 0:t.note)||""})},{immediate:!0,flush:"sync"});const v=h(),u=h(!1);async function g(t){var e,d,x;((e=t==null?void 0:t.target)==null?void 0:e.tagName)!=="A"&&(u.value=!0,(d=v.value)==null||d.focus(),await W(),(x=v.value)==null||x.focus())}return O(v,()=>{u.value=!1}),(t,e)=>{var d,x;return!u.value&&a.value?(_(),m(P,{key:0},[(d=n(r))!=null&&d.notesHTML?(_(),m("div",{key:0,class:y(["prose overflow-auto outline-none",o.class]),onClick:g,innerHTML:(x=n(r))==null?void 0:x.notesHTML},null,10,De)):(_(),m("div",{key:1,class:y(["prose overflow-auto outline-none",o.class]),onClick:g,textContent:D(a.value)},null,10,Pe))],2112)):U((_(),m("textarea",{key:1,ref_key:"input",ref:v,"onUpdate:modelValue":e[0]||(e[0]=S=>a.value=S),class:y(["prose resize-none overflow-auto outline-none bg-transparent block",o.class]),placeholder:s.placeholder,onFocus:e[1]||(e[1]=S=>u.value=!0)},null,42,Le)),[[E,a.value]])}}});const L=s=>(le("data-v-f604f0e4"),s=s(),ie(),s),Fe={class:"bg-main h-full slidev-presenter"},Ie={class:"grid-container"},Oe={class:"grid-section top flex"},Ue=L(()=>l("img",{src:Ne,class:"h-14 ml-2 py-2 my-auto"},null,-1)),Ee=L(()=>l("div",{class:"flex-auto"},null,-1)),We={class:"text-2xl pl-2 pr-6 my-auto"},Ye={class:"grid-section next flex flex-col p-4"},Ze={class:"grid-section note overflow-auto"},qe={class:"grid-section bottom"},Ge={class:"progress-bar"},Je=N({setup(s){j(z);const o=h();Z(),q(o);const r=T.titleTemplate.replace("%s",T.title||"Slidev");G({title:`Presenter - ${r}`});const{timer:i,resetTimer:a}=je(),c=h([]),p=$(()=>H.value<re.value?{route:ce.value,clicks:H.value+1}:ue.value?{route:de.value,clicks:0}:null);return J(()=>{const v=o.value.querySelector("#slide-content"),u=K(Q()),g=X();B(()=>{if(!g.value||fe.value||!_e.value)return;const t=v.getBoundingClientRect(),e=(u.x-t.left)/t.width*100,d=(u.y-t.top)/t.height*100;if(!(e<0||e>100||d<0||d>100))return{x:e,y:d}},t=>{pe.cursor=t})}),(v,u)=>{const g=He,t=Ce;return _(),m(P,null,[l("div",Fe,[l("div",Ie,[l("div",Oe,[Ue,Ee,l("div",{class:"timer-btn my-auto relative w-22px h-22px cursor-pointer text-lg",opacity:"50 hover:100",onClick:u[0]||(u[0]=(...e)=>n(a)&&n(a)(...e))},[f(g,{class:"absolute"}),f(t,{class:"absolute opacity-0"})]),l("div",We,D(n(i)),1)]),l("div",{ref_key:"main",ref:o,class:"grid-section main flex flex-col p-4",style:b(n(ee))},[f(V,{key:"main",class:"h-full w-full"},{default:M(()=>[f(ve)]),_:1})],4),l("div",Ye,[n(p)?(_(),A(V,{key:"next",class:"h-full w-full"},{default:M(()=>{var e;return[f(n(he),{is:(e=n(p).route)==null?void 0:e.component,"clicks-elements":c.value,"onUpdate:clicks-elements":u[1]||(u[1]=d=>c.value=d),clicks:n(p).clicks,"clicks-disabled":!1,class:y(n(me)(n(p).route))},null,8,["is","clicks-elements","clicks","class"])]}),_:1})):te("v-if",!0)]),l("div",Ze,[f(Re,{class:"w-full h-full p-4 overflow-auto"})]),l("div",qe,[f(ge,{persist:!0})]),(_(),A(ye,{key:0}))]),l("div",Ge,[l("div",{class:"progress h-2px bg-primary transition-all",style:b({width:`${(n(se)-1)/(n(oe)-1)*100}%`})},null,4)])]),f(xe),f(ae,{modelValue:n(w),"onUpdate:modelValue":u[2]||(u[2]=e=>ne(w)?w.value=e:null)},null,8,["modelValue"])],64)}}});var Xe=Y(Je,[["__scopeId","data-v-f604f0e4"]]);export{Xe as default};
