"use strict";(self.webpackChunkmigration_docs=self.webpackChunkmigration_docs||[]).push([[371],{5371:(e,t,l)=>{l.r(t),l.d(t,{default:()=>Me});var a=l(6252),n=l(3577),i=l(9963),o=l(2262),r=l(2119),s=l(7621);const u=["aria-labelledby"],c={class:"hero"},v=["src","alt"],d={key:1,id:"main-title"},p={key:2,class:"description"},h={key:3,class:"actions"},m={key:0,class:"features"},g={class:"theme-default-content custom"},k=["innerHTML"],b=["textContent"];var w=l(480);const f=["href","rel","target","aria-label"],L=(0,a.aZ)({name:"NavLink",inheritAttrs:!1,props:{item:{type:Object,required:!0}},setup(e){const t=(0,r.yj)(),l=(0,s.WF)(),{item:a}=(0,o.BK)(e),n=(0,o.Fl)((()=>(0,w.ak)(a.value.link))),i=(0,o.Fl)((()=>(0,w.B2)(a.value.link)||(0,w.R5)(a.value.link))),u=(0,o.Fl)((()=>{if(!i.value)return a.value.target?a.value.target:n.value?"_blank":void 0})),c=(0,o.Fl)((()=>"_blank"===u.value)),v=(0,o.Fl)((()=>!n.value&&!i.value&&!c.value)),d=(0,o.Fl)((()=>{if(!i.value)return a.value.rel?a.value.rel:c.value?"noopener noreferrer":void 0})),p=(0,o.Fl)((()=>a.value.ariaLabel||a.value.text)),h=(0,o.Fl)((()=>{const e=Object.keys(l.value.locales);return e.length?!e.some((e=>e===a.value.link)):"/"!==a.value.link})),m=(0,o.Fl)((()=>!!h.value&&t.path.startsWith(a.value.link)));return{isActive:(0,o.Fl)((()=>!!v.value&&(a.value.activeMatch?new RegExp(a.value.activeMatch).test(t.path):m.value))),isBlankTarget:c,isRouterLink:v,linkRel:d,linkTarget:u,linkAriaLabel:p}}});L.render=function(e,t,l,i,o,r){const s=(0,a.up)("RouterLink"),u=(0,a.up)("OutboundLink");return e.isRouterLink?((0,a.wg)(),(0,a.j4)(s,(0,a.dG)({key:0,class:["nav-link",{"router-link-active":e.isActive}],to:e.item.link,"aria-label":e.linkAriaLabel},e.$attrs),{default:(0,a.w5)((()=>[(0,a.WI)(e.$slots,"before"),(0,a.Uk)(" "+(0,n.zw)(e.item.text)+" ",1),(0,a.WI)(e.$slots,"after")])),_:3},16,["class","to","aria-label"])):((0,a.wg)(),(0,a.iD)("a",(0,a.dG)({key:1,class:"nav-link external",href:e.item.link,rel:e.linkRel,target:e.linkTarget,"aria-label":e.linkAriaLabel},e.$attrs),[(0,a.WI)(e.$slots,"before"),(0,a.Uk)(" "+(0,n.zw)(e.item.text)+" ",1),e.isBlankTarget?((0,a.wg)(),(0,a.j4)(u,{key:0})):(0,a.kq)("",!0),(0,a.WI)(e.$slots,"after")],16,f))};const y=L,D=(0,a.aZ)({name:"Home",components:{NavLink:y},setup(){const e=(0,s.I2)(),t=(0,s.I5)(),l=(0,o.Fl)((()=>e.value.heroImage?(0,s.pJ)(e.value.heroImage):null)),a=(0,o.Fl)((()=>null===e.value.heroText?null:e.value.heroText||t.value.title||"Hello")),n=(0,o.Fl)((()=>e.value.heroAlt||a.value||"hero")),i=(0,o.Fl)((()=>null===e.value.tagline?null:e.value.tagline||t.value.description||"Welcome to your VuePress site")),r=(0,o.Fl)((()=>(0,w.kJ)(e.value.actions)?e.value.actions.map((({text:e,link:t,type:l="primary"})=>({text:e,link:t,type:l}))):[])),u=(0,o.Fl)((()=>(0,w.kJ)(e.value.features)?e.value.features:[])),c=(0,o.Fl)((()=>e.value.footer)),v=(0,o.Fl)((()=>e.value.footerHtml));return{heroImage:l,heroAlt:n,heroText:a,tagline:i,actions:r,features:u,footer:c,footerHtml:v}}});D.render=function(e,t,l,i,o,r){const s=(0,a.up)("NavLink"),w=(0,a.up)("Content");return(0,a.wg)(),(0,a.iD)("main",{class:"home","aria-labelledby":e.heroText?"main-title":void 0},[(0,a._)("header",c,[e.heroImage?((0,a.wg)(),(0,a.iD)("img",{key:0,src:e.heroImage,alt:e.heroAlt},null,8,v)):(0,a.kq)("",!0),e.heroText?((0,a.wg)(),(0,a.iD)("h1",d,(0,n.zw)(e.heroText),1)):(0,a.kq)("",!0),e.tagline?((0,a.wg)(),(0,a.iD)("p",p,(0,n.zw)(e.tagline),1)):(0,a.kq)("",!0),e.actions.length?((0,a.wg)(),(0,a.iD)("p",h,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(e.actions,(e=>((0,a.wg)(),(0,a.j4)(s,{key:e.text,class:(0,n.C_)(["action-button",[e.type]]),item:e},null,8,["class","item"])))),128))])):(0,a.kq)("",!0)]),e.features.length?((0,a.wg)(),(0,a.iD)("div",m,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(e.features,(e=>((0,a.wg)(),(0,a.iD)("div",{key:e.title,class:"feature"},[(0,a._)("h2",null,(0,n.zw)(e.title),1),(0,a._)("p",null,(0,n.zw)(e.details),1)])))),128))])):(0,a.kq)("",!0),(0,a._)("div",g,[(0,a.Wm)(w)]),e.footer?((0,a.wg)(),(0,a.iD)(a.HY,{key:1},[e.footerHtml?((0,a.wg)(),(0,a.iD)("div",{key:0,class:"footer",innerHTML:e.footer},null,8,k)):((0,a.wg)(),(0,a.iD)("div",{key:1,class:"footer",textContent:(0,n.zw)(e.footer)},null,8,b))],64)):(0,a.kq)("",!0)],8,u)};const F=D,x={class:"page"},I={class:"theme-default-content"},_={class:"page-meta"},N={key:0,class:"meta-item edit-link"},W={key:1,class:"meta-item last-updated"},T={class:"meta-item-label"},C={class:"meta-item-info"},S={key:2,class:"meta-item contributors"},H={class:"meta-item-label"},$={class:"meta-item-info"},z=["title"],U=(0,a.Uk)(", ");var M=l(5761);const q=e=>!(0,w.ak)(e)||/github\.com/.test(e)?"GitHub":/bitbucket\.org/.test(e)?"Bitbucket":/gitlab\.com/.test(e)?"GitLab":/gitee\.com/.test(e)?"Gitee":null,j={GitHub:":repo/edit/:branch/:path",GitLab:":repo/-/edit/:branch/:path",Gitee:":repo/edit/:branch/:path",Bitbucket:":repo/src/:branch/:path?mode=edit&spa=0&at=:branch&fileviewer=file-view-default"},B=()=>{const e=(0,M.X6)(),t=(0,s.Vi)(),l=(0,s.I2)();return(0,o.Fl)((()=>{var a,n;if(null!=(n=null!=(a=l.value.editLink)?a:e.value.editLink)&&!n)return null;const{repo:i,docsRepo:o=i,docsBranch:r="main",docsDir:s="",editLinkText:u}=e.value;if(!o)return null;const c=(({docsRepo:e,docsBranch:t,docsDir:l,filePathRelative:a,editLinkPattern:n})=>{const i=q(e);let o;return n?o=n:null!==i&&(o=j[i]),o?o.replace(/:repo/,(0,w.ak)(e)?e:`https://github.com/${e}`).replace(/:branch/,t).replace(/:path/,(0,w.FY)(`${(0,w.U1)(l)}/${a}`)):null})({docsRepo:o,docsBranch:r,docsDir:s,filePathRelative:t.value.filePathRelative,editLinkPattern:e.value.editLinkPattern});return c?{text:null!=u?u:"Edit this page",link:c}:null}))},A=(0,a.aZ)({name:"PageMeta",components:{NavLink:y},setup:()=>({themeLocale:(0,M.X6)(),editNavLink:B(),lastUpdated:(()=>{const e=(0,s.I5)(),t=(0,M.X6)(),l=(0,s.Vi)(),a=(0,s.I2)();return(0,o.Fl)((()=>{var n,i,o,r;return(null==(i=null!=(n=a.value.lastUpdated)?n:t.value.lastUpdated)||i)&&(null==(o=l.value.git)?void 0:o.updatedTime)?new Date(null==(r=l.value.git)?void 0:r.updatedTime).toLocaleString(e.value.lang):null}))})(),contributors:(()=>{const e=(0,M.X6)(),t=(0,s.Vi)(),l=(0,s.I2)();return(0,o.Fl)((()=>{var a,n,i,o;return null!=(n=null!=(a=l.value.contributors)?a:e.value.contributors)&&!n||null==(o=null==(i=t.value.git)?void 0:i.contributors)?null:o}))})()})});A.render=function(e,t,l,i,o,r){const s=(0,a.up)("NavLink");return(0,a.wg)(),(0,a.iD)("footer",_,[e.editNavLink?((0,a.wg)(),(0,a.iD)("div",N,[(0,a.Wm)(s,{class:"meta-item-label",item:e.editNavLink},null,8,["item"])])):(0,a.kq)("",!0),e.lastUpdated?((0,a.wg)(),(0,a.iD)("div",W,[(0,a._)("span",T,(0,n.zw)(e.themeLocale.lastUpdatedText)+": ",1),(0,a._)("span",C,(0,n.zw)(e.lastUpdated),1)])):(0,a.kq)("",!0),e.contributors&&e.contributors.length?((0,a.wg)(),(0,a.iD)("div",S,[(0,a._)("span",H,(0,n.zw)(e.themeLocale.contributorsText)+": ",1),(0,a._)("span",$,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(e.contributors,((t,l)=>((0,a.wg)(),(0,a.iD)(a.HY,{key:l},[(0,a._)("span",{class:"contributor",title:`email: ${t.email}`},(0,n.zw)(t.name),9,z),l!==e.contributors.length-1?((0,a.wg)(),(0,a.iD)(a.HY,{key:0},[U],64)):(0,a.kq)("",!0)],64)))),128))])])):(0,a.kq)("",!0)])};const P=A,R={key:0,class:"page-nav"},Y={class:"inner"},E={key:0,class:"prev"},O=(0,a.Uk)(" ← "),X={key:1,class:"next"},Z=(0,a.Uk)(" → "),V=e=>!1===e?null:(0,w.HD)(e)?(0,M.sC)(e):!!(0,w.PO)(e)&&e,K=(e,t,l)=>{const a=e.findIndex((e=>e.link===t));if(-1!==a){const t=e[a+l];return(null==t?void 0:t.link)?t:null}for(const a of e)if(a.children){const e=K(a.children,t,l);if(e)return e}return null},G=(0,a.aZ)({name:"PageNav",components:{NavLink:y},setup(){const e=(0,s.I2)(),t=(0,M.VU)(),l=(0,r.yj)();return{prevNavLink:(0,o.Fl)((()=>{const a=V(e.value.prev);return!1!==a?a:K(t.value,l.path,-1)})),nextNavLink:(0,o.Fl)((()=>{const a=V(e.value.next);return!1!==a?a:K(t.value,l.path,1)}))}}});G.render=function(e,t,l,n,i,o){const r=(0,a.up)("NavLink");return e.prevNavLink||e.nextNavLink?((0,a.wg)(),(0,a.iD)("nav",R,[(0,a._)("p",Y,[e.prevNavLink?((0,a.wg)(),(0,a.iD)("span",E,[O,(0,a.Wm)(r,{item:e.prevNavLink},null,8,["item"])])):(0,a.kq)("",!0),e.nextNavLink?((0,a.wg)(),(0,a.iD)("span",X,[(0,a.Wm)(r,{item:e.nextNavLink},null,8,["item"]),Z])):(0,a.kq)("",!0)])])):(0,a.kq)("",!0)};const J=G,Q=(0,a.aZ)({name:"Page",components:{PageMeta:P,PageNav:J}});Q.render=function(e,t,l,n,i,o){const r=(0,a.up)("Content"),s=(0,a.up)("PageMeta"),u=(0,a.up)("PageNav");return(0,a.wg)(),(0,a.iD)("main",x,[(0,a.WI)(e.$slots,"top"),(0,a._)("div",I,[(0,a.Wm)(r)]),(0,a.Wm)(s),(0,a.Wm)(u),(0,a.WI)(e.$slots,"bottom")])};const ee=Q,te={key:0,class:"navbar-links"},le=["aria-label"],ae={class:"title"},ne=(0,a._)("span",{class:"arrow down"},null,-1),ie=["aria-label"],oe={class:"title"},re={class:"nav-dropdown"},se={class:"dropdown-subtitle"},ue={key:1},ce={class:"dropdown-subitem-wrapper"},ve=(0,a.aZ)({name:"DropdownLink",components:{NavLink:y},props:{item:{type:Object,required:!0}},setup(e){const{item:t}=(0,o.BK)(e),l=(0,o.Fl)((()=>t.value.ariaLabel||t.value.text)),n=(0,o.iH)(!1),i=(0,r.yj)();return(0,a.YP)((()=>i.path),(()=>{n.value=!1})),{open:n,dropdownAriaLabel:l,handleDropdown:e=>{const t=0===e.detail;n.value=!!t&&!n.value},isLastItemOfArray:(e,t)=>t[t.length-1]===e}}});ve.render=function(e,t,l,o,r,s){const u=(0,a.up)("NavLink");return(0,a.wg)(),(0,a.iD)("div",{class:(0,n.C_)(["dropdown-wrapper",{open:e.open}])},[(0,a._)("button",{class:"dropdown-title",type:"button","aria-label":e.dropdownAriaLabel,onClick:t[0]||(t[0]=(...t)=>e.handleDropdown&&e.handleDropdown(...t))},[(0,a._)("span",ae,(0,n.zw)(e.item.text),1),ne],8,le),(0,a._)("button",{class:"mobile-dropdown-title",type:"button","aria-label":e.dropdownAriaLabel,onClick:t[1]||(t[1]=t=>e.open=!e.open)},[(0,a._)("span",oe,(0,n.zw)(e.item.text),1),(0,a._)("span",{class:(0,n.C_)(["arrow",e.open?"down":"right"])},null,2)],8,ie),(0,a.wy)((0,a._)("ul",re,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(e.item.children,((t,l)=>((0,a.wg)(),(0,a.iD)("li",{key:t.link||l,class:"dropdown-item"},[t.children?((0,a.wg)(),(0,a.iD)(a.HY,{key:0},[(0,a._)("h4",se,[t.link?((0,a.wg)(),(0,a.j4)(u,{key:0,item:t,onFocusout:l=>e.isLastItemOfArray(t,e.item.children)&&0===t.children.length&&(e.open=!1)},null,8,["item","onFocusout"])):((0,a.wg)(),(0,a.iD)("span",ue,(0,n.zw)(t.text),1))]),(0,a._)("ul",ce,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(t.children,(l=>((0,a.wg)(),(0,a.iD)("li",{key:l.link,class:"dropdown-subitem"},[(0,a.Wm)(u,{item:l,onFocusout:a=>e.isLastItemOfArray(l,t.children)&&e.isLastItemOfArray(t,e.item.children)&&(e.open=!1)},null,8,["item","onFocusout"])])))),128))])],64)):((0,a.wg)(),(0,a.j4)(u,{key:1,item:t,onFocusout:l=>e.isLastItemOfArray(t,e.item.children)&&(e.open=!1)},null,8,["item","onFocusout"]))])))),128))],512),[[i.F8,e.open]])],2)};const de=ve,pe=e=>(0,w.HD)(e)?(0,M.sC)(e):e.children?{...e,children:e.children.map(pe)}:e,he=(0,a.aZ)({name:"NavbarLinks",components:{NavLink:y,DropdownLink:de},setup(){const e=(()=>{const e=(0,M.X6)();return(0,o.Fl)((()=>(e.value.navbar||[]).map(pe)))})(),t=(()=>{const e=(0,r.tv)(),t=(0,s.I)(),l=(0,s.I5)(),a=(0,M.X6)();return(0,o.Fl)((()=>{var n,i;const o=Object.keys(l.value.locales);if(o.length<2)return[];const r=e.currentRoute.value.path,s=e.currentRoute.value.fullPath;return[{text:null!=(n=a.value.selectLanguageText)?n:"unkown language",ariaLabel:null!=(i=a.value.selectLanguageAriaLabel)?i:"unkown language",children:o.map((n=>{var i,o,u,c,v,d;const p=null!=(o=null==(i=l.value.locales)?void 0:i[n])?o:{},h=null!=(c=null==(u=a.value.locales)?void 0:u[n])?c:{},m=`${p.lang}`,g=null!=(v=h.selectLanguageName)?v:m;let k;if(m===l.value.lang)k=s;else{const l=r.replace(t.value,n);k=e.getRoutes().some((e=>e.path===l))?l:null!=(d=h.home)?d:n}return{text:g,link:k}}))}]}))})(),l=(()=>{const e=(0,M.X6)(),t=(0,o.Fl)((()=>e.value.repo)),l=(0,o.Fl)((()=>t.value?q(t.value):null)),a=(0,o.Fl)((()=>t.value&&!(0,w.ak)(t.value)?`https://github.com/${t.value}`:t.value)),n=(0,o.Fl)((()=>a.value?e.value.repoLabel?e.value.repoLabel:null===l.value?"Source":l.value:null));return(0,o.Fl)((()=>a.value&&n.value?[{text:n.value,link:a.value}]:[]))})();return{navbarLinks:(0,o.Fl)((()=>[...e.value,...t.value,...l.value]))}}});he.render=function(e,t,l,n,i,o){const r=(0,a.up)("DropdownLink"),s=(0,a.up)("NavLink");return e.navbarLinks.length?((0,a.wg)(),(0,a.iD)("nav",te,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(e.navbarLinks,(e=>((0,a.wg)(),(0,a.iD)("div",{key:e.text,class:"navbar-links-item"},[e.children?((0,a.wg)(),(0,a.j4)(r,{key:0,item:e},null,8,["item"])):((0,a.wg)(),(0,a.j4)(s,{key:1,item:e},null,8,["item"]))])))),128))])):(0,a.kq)("",!0)};const me=he,ge=["title"],ke={class:"icon",focusable:"false",viewBox:"0 0 32 32"},be=[(0,a.uE)('<path d="M16 12.005a4 4 0 1 1-4 4a4.005 4.005 0 0 1 4-4m0-2a6 6 0 1 0 6 6a6 6 0 0 0-6-6z" fill="currentColor"></path><path d="M5.394 6.813l1.414-1.415l3.506 3.506L8.9 10.318z" fill="currentColor"></path><path d="M2 15.005h5v2H2z" fill="currentColor"></path><path d="M5.394 25.197L8.9 21.691l1.414 1.415l-3.506 3.505z" fill="currentColor"></path><path d="M15 25.005h2v5h-2z" fill="currentColor"></path><path d="M21.687 23.106l1.414-1.415l3.506 3.506l-1.414 1.414z" fill="currentColor"></path><path d="M25 15.005h5v2h-5z" fill="currentColor"></path><path d="M21.687 8.904l3.506-3.506l1.414 1.415l-3.506 3.505z" fill="currentColor"></path><path d="M15 2.005h2v5h-2z" fill="currentColor"></path>',9)],we={class:"icon",focusable:"false",viewBox:"0 0 32 32"},fe=[(0,a._)("path",{d:"M13.502 5.414a15.075 15.075 0 0 0 11.594 18.194a11.113 11.113 0 0 1-7.975 3.39c-.138 0-.278.005-.418 0a11.094 11.094 0 0 1-3.2-21.584M14.98 3a1.002 1.002 0 0 0-.175.016a13.096 13.096 0 0 0 1.825 25.981c.164.006.328 0 .49 0a13.072 13.072 0 0 0 10.703-5.555a1.01 1.01 0 0 0-.783-1.565A13.08 13.08 0 0 1 15.89 4.38A1.015 1.015 0 0 0 14.98 3z",fill:"currentColor"},null,-1)],Le=(0,a.aZ)({setup(e){const t=(0,M.X6)(),l=(0,M.vs)(),n=()=>{l.value=!l.value};return(0,M.u)(l),(0,M.tJ)(l),(e,r)=>((0,a.wg)(),(0,a.iD)("button",{class:"toggle-dark-button",title:(0,o.SU)(t).toggleDarkMode,onClick:n},[(0,a.wy)(((0,a.wg)(),(0,a.iD)("svg",ke,be,512)),[[i.F8,!(0,o.SU)(l)]]),(0,a.wy)(((0,a.wg)(),(0,a.iD)("svg",we,fe,512)),[[i.F8,(0,o.SU)(l)]])],8,ge))}}),ye=[(0,a._)("svg",{class:"icon",xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",role:"img",viewBox:"0 0 448 512"},[(0,a._)("path",{fill:"currentColor",d:"M436 124H12c-6.627 0-12-5.373-12-12V80c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12zm0 160H12c-6.627 0-12-5.373-12-12v-32c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12zm0 160H12c-6.627 0-12-5.373-12-12v-32c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12z"})],-1)],De=(0,a.aZ)({name:"ToggleSidebarButton",emits:["toggle"]});De.render=function(e,t,l,n,i,o){return(0,a.wg)(),(0,a.iD)("div",{class:"toggle-sidebar-button",onClick:t[0]||(t[0]=t=>e.$emit("toggle"))},ye)};const Fe=De,xe=["src","alt"],Ie=(0,a.aZ)({emits:["toggle-sidebar"],setup(e){const t=(0,s.I)(),l=(0,s.I5)(),i=(0,M.X6)(),r=(0,o.iH)(null),u=(0,o.iH)(null),c=(0,o.Fl)((()=>i.value.home||t.value)),v=(0,o.Fl)((()=>i.value.logo)),d=(0,o.Fl)((()=>l.value.title)),p=(0,o.iH)(0),h=(0,o.Fl)((()=>p.value?{maxWidth:p.value+"px"}:{})),m=(0,o.Fl)((()=>i.value.darkMode));function g(e,t){var l,a,n;const i=null==(n=null==(a=null==(l=null==e?void 0:e.ownerDocument)?void 0:l.defaultView)?void 0:a.getComputedStyle(e,null))?void 0:n[t],o=Number.parseInt(i,10);return Number.isNaN(o)?0:o}return(0,a.bv)((()=>{const e=g(r.value,"paddingLeft")+g(r.value,"paddingRight"),t=()=>{var t;window.innerWidth<=719?p.value=0:p.value=r.value.offsetWidth-e-((null==(t=u.value)?void 0:t.offsetWidth)||0)};t(),window.addEventListener("resize",t,!1),window.addEventListener("orientationchange",t,!1)})),(e,t)=>{const l=(0,a.up)("RouterLink"),i=(0,a.up)("NavbarSearch");return(0,a.wg)(),(0,a.iD)("header",{ref:r,class:"navbar"},[(0,a.Wm)(Fe,{onToggle:t[0]||(t[0]=t=>e.$emit("toggle-sidebar"))}),(0,a._)("span",{ref:u},[(0,a.Wm)(l,{to:(0,o.SU)(c)},{default:(0,a.w5)((()=>[(0,o.SU)(v)?((0,a.wg)(),(0,a.iD)("img",{key:0,class:"logo",src:(0,o.SU)(s.pJ)((0,o.SU)(v)),alt:(0,o.SU)(d)},null,8,xe)):(0,a.kq)("",!0),(0,o.SU)(d)?((0,a.wg)(),(0,a.iD)("span",{key:1,class:(0,n.C_)(["site-name",{"can-hide":(0,o.SU)(v)}])},(0,n.zw)((0,o.SU)(d)),3)):(0,a.kq)("",!0)])),_:1},8,["to"])],512),(0,a._)("div",{class:"navbar-links-wrapper",style:(0,n.j5)((0,o.SU)(h))},[(0,a.WI)(e.$slots,"before"),(0,a.Wm)(me,{class:"can-hide"}),(0,a.WI)(e.$slots,"after"),(0,o.SU)(m)?((0,a.wg)(),(0,a.j4)(Le,{key:0})):(0,a.kq)("",!0),(0,a.Wm)(i)],4)],512)}}}),_e={class:"sidebar"},Ne={class:"sidebar-links"},We=e=>decodeURI(e).replace(/#.*$/,"").replace(/(index)?\.(md|html)$/,""),Te=(e,t)=>!!((e,t)=>void 0!==t&&(e.hash===t||We(e.path)===We(t)))(e,t.link)||!!t.children&&t.children.some((t=>Te(e,t))),Ce=(e,t)=>e.link?(0,a.h)(y,{...t,item:e}):(0,a.h)("p",t,e.text),Se=(e,t)=>{var l;return(null===(l=e.children)||void 0===l?void 0:l.length)?(0,a.h)("ul",{class:{"sidebar-sub-items":t>0}},e.children.map((e=>(0,a.h)("li",(0,a.h)(He,{item:e,depth:t+1}))))):null},He=({item:e,depth:t=0})=>{const l=(0,r.yj)(),a=Te(l,e);return[Ce(e,{class:{"sidebar-heading":0===t,"sidebar-item":!0,active:a}}),Se(e,t)]};He.displayName="SidebarChild",He.props={item:{type:Object,required:!0},depth:{type:Number,required:!1}};const $e=(0,a.aZ)({name:"Sidebar",components:{NavbarLinks:me,SidebarChild:He},setup:()=>({sidebarItems:(0,M.VU)()})});$e.render=function(e,t,l,n,i,o){const r=(0,a.up)("NavbarLinks"),s=(0,a.up)("SidebarChild");return(0,a.wg)(),(0,a.iD)("aside",_e,[(0,a.Wm)(r),(0,a.WI)(e.$slots,"top"),(0,a._)("ul",Ne,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(e.sidebarItems,(e=>((0,a.wg)(),(0,a.j4)(s,{key:e.link||e.text,item:e},null,8,["item"])))),128))]),(0,a.WI)(e.$slots,"bottom")])};const ze=$e,Ue=(0,a.aZ)({name:"Layout",components:{Home:F,Page:ee,Navbar:Ie,Sidebar:ze,Transition:i.uT},setup(){const e=(0,s.Vi)(),t=(0,s.I2)(),l=(0,M.X6)(),n=(0,o.Fl)((()=>!1!==t.value.navbar&&!1!==l.value.navbar)),i=(0,M.VU)(),u=(0,o.iH)(!1),c=e=>{u.value="boolean"==typeof e?e:!u.value},v={x:0,y:0},d=(0,o.Fl)((()=>[{"no-navbar":!n.value,"no-sidebar":!i.value.length,"sidebar-open":u.value},t.value.pageClass]));let p;(0,a.bv)((()=>{const e=(0,r.tv)();p=e.afterEach((()=>{c(!1)}))})),(0,a.Ah)((()=>{p()}));const h=(0,M.P$)(),m=h.resolve,g=h.pending;return{frontmatter:t,page:e,containerClass:d,shouldShowNavbar:n,toggleSidebar:c,onTouchStart:e=>{v.x=e.changedTouches[0].clientX,v.y=e.changedTouches[0].clientY},onTouchEnd:e=>{const t=e.changedTouches[0].clientX-v.x,l=e.changedTouches[0].clientY-v.y;Math.abs(t)>Math.abs(l)&&Math.abs(t)>40&&(t>0&&v.x<=80?c(!0):c(!1))},onBeforeEnter:m,onBeforeLeave:g}}});Ue.render=function(e,t,l,o,r,s){const u=(0,a.up)("Navbar"),c=(0,a.up)("Sidebar"),v=(0,a.up)("Home"),d=(0,a.up)("Page");return(0,a.wg)(),(0,a.iD)("div",{class:(0,n.C_)(["theme-container",e.containerClass]),onTouchstart:t[1]||(t[1]=(...t)=>e.onTouchStart&&e.onTouchStart(...t)),onTouchend:t[2]||(t[2]=(...t)=>e.onTouchEnd&&e.onTouchEnd(...t))},[e.shouldShowNavbar?((0,a.wg)(),(0,a.j4)(u,{key:0,onToggleSidebar:e.toggleSidebar},{before:(0,a.w5)((()=>[(0,a.WI)(e.$slots,"navbar-before")])),after:(0,a.w5)((()=>[(0,a.WI)(e.$slots,"navbar-after")])),_:3},8,["onToggleSidebar"])):(0,a.kq)("",!0),(0,a._)("div",{class:"sidebar-mask",onClick:t[0]||(t[0]=t=>e.toggleSidebar(!1))}),(0,a.Wm)(c,null,{top:(0,a.w5)((()=>[(0,a.WI)(e.$slots,"sidebar-top")])),bottom:(0,a.w5)((()=>[(0,a.WI)(e.$slots,"sidebar-bottom")])),_:3}),(0,a.WI)(e.$slots,"page",{},(()=>[e.frontmatter.home?((0,a.wg)(),(0,a.j4)(v,{key:0})):((0,a.wg)(),(0,a.j4)(i.uT,{key:1,name:"fade-slide-y",mode:"out-in",onBeforeEnter:e.onBeforeEnter,onBeforeLeave:e.onBeforeLeave},{default:(0,a.w5)((()=>[(0,a.Wm)(d,{key:e.page.path},{top:(0,a.w5)((()=>[(0,a.WI)(e.$slots,"page-top")])),bottom:(0,a.w5)((()=>[(0,a.WI)(e.$slots,"page-bottom")])),_:3})])),_:3},8,["onBeforeEnter","onBeforeLeave"]))]))],34)};const Me=Ue}}]);