"use strict";(self.webpackChunkguide_pycord_dev=self.webpackChunkguide_pycord_dev||[]).push([[232],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return m}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=a.createContext({}),c=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):u(u({},t),e)),n},s=function(e){var t=c(e.components);return a.createElement(i.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,i=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),p=c(n),m=r,v=p["".concat(i,".").concat(m)]||p[m]||d[m]||l;return n?a.createElement(v,u(u({ref:t},s),{},{components:n})):a.createElement(v,u({ref:t},s))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,u=new Array(l);u[0]=p;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o.mdxType="string"==typeof e?e:r,u[1]=o;for(var c=2;c<l;c++)u[c]=n[c];return a.createElement.apply(null,u)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},5162:function(e,t,n){n.d(t,{Z:function(){return u}});var a=n(7294),r=n(6010),l="tabItem_Ymn6";function u(e){var t=e.children,n=e.hidden,u=e.className;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(l,u),hidden:n},t)}},5488:function(e,t,n){n.d(t,{Z:function(){return m}});var a=n(7462),r=n(7294),l=n(6010),u=n(2389),o=n(7392),i=n(7094),c=n(2466),s="tabList__CuJ",d="tabItem_LNqP";function p(e){var t,n,u=e.lazy,p=e.block,m=e.defaultValue,v=e.values,b=e.groupId,f=e.className,k=r.Children.map(e.children,(function(e){if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),g=null!=v?v:k.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),h=(0,o.l)(g,(function(e,t){return e.value===t.value}));if(h.length>0)throw new Error('Docusaurus error: Duplicate values "'+h.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var y=null===m?m:null!=(t=null!=m?m:null==(n=k.find((function(e){return e.props.default})))?void 0:n.props.value)?t:k[0].props.value;if(null!==y&&!g.some((function(e){return e.value===y})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+y+'" but none of its children has the corresponding value. Available values are: '+g.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var N=(0,i.U)(),E=N.tabGroupChoices,w=N.setTabGroupChoices,O=(0,r.useState)(y),T=O[0],_=O[1],x=[],C=(0,c.o5)().blockElementScrollPositionUntilNextRender;if(null!=b){var j=E[b];null!=j&&j!==T&&g.some((function(e){return e.value===j}))&&_(j)}var Z=function(e){var t=e.currentTarget,n=x.indexOf(t),a=g[n].value;a!==T&&(C(t),_(a),null!=b&&w(b,String(a)))},P=function(e){var t,n=null;switch(e.key){case"ArrowRight":var a,r=x.indexOf(e.currentTarget)+1;n=null!=(a=x[r])?a:x[0];break;case"ArrowLeft":var l,u=x.indexOf(e.currentTarget)-1;n=null!=(l=x[u])?l:x[x.length-1]}null==(t=n)||t.focus()};return r.createElement("div",{className:(0,l.Z)("tabs-container",s)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":p},f)},g.map((function(e){var t=e.value,n=e.label,u=e.attributes;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:T===t?0:-1,"aria-selected":T===t,key:t,ref:function(e){return x.push(e)},onKeyDown:P,onFocus:Z,onClick:Z},u,{className:(0,l.Z)("tabs__item",d,null==u?void 0:u.className,{"tabs__item--active":T===t})}),null!=n?n:t)}))),u?(0,r.cloneElement)(k.filter((function(e){return e.props.value===T}))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},k.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==T})}))))}function m(e){var t=(0,u.Z)();return r.createElement(p,(0,a.Z)({key:String(t)},e))}},4629:function(e,t,n){var a=n(7294),r=n(9960);t.Z=function(e){var t=e.type,n=e.label,l=e.icon,u=e.link,o=e.isDisabled,i=e.onClick,c=e.children,s=function(e){var t=[];return e.split(" ").forEach((function(e){t.push("pyc-button--"+e)})),t.join(" ")},d=a.createElement("button",{className:"pyc-button"+(t?" "+s(t):""),"aria-label":n||(null==c?void 0:c.toString()),disabled:o,onClick:i},l&&a.createElement("i",{className:"pyc-button__icon","aria-hidden":"true"},l),c&&a.createElement("span",{className:"pyc-button__label"},c));return u?a.createElement(r.Z,{className:"pyc-button"+(t?" "+s(t):""),"aria-label":n||(null==c?void 0:c.toString()),href:u},l&&a.createElement("i",{className:"pyc-button__icon","aria-hidden":"true"},l),c&&a.createElement("span",{className:"pyc-button__label"},c)):d}},7684:function(e,t,n){n.r(t),n.d(t,{assets:function(){return m},contentTitle:function(){return d},default:function(){return f},frontMatter:function(){return s},metadata:function(){return p},toc:function(){return v}});var a=n(7462),r=n(3366),l=(n(7294),n(3905)),u=n(5488),o=n(5162),i=n(4629),c=["components"],s={title:"v1.0.5",description:"Release v1.0.5 changelog"},d=void 0,p={unversionedId:"updates/v1.0.5",id:"updates/v1.0.5",title:"v1.0.5",description:"Release v1.0.5 changelog",source:"@site/docs/updates/v1.0.5.md",sourceDirName:"updates",slug:"/updates/v1.0.5",permalink:"/updates/v1.0.5",draft:!1,tags:[],version:"current",lastUpdatedAt:1660779826,formattedLastUpdatedAt:"Aug 17, 2022",frontMatter:{title:"v1.0.5",description:"Release v1.0.5 changelog"},sidebar:"defaultSidebar",previous:{title:"v1.0.4",permalink:"/updates/v1.0.4"},next:{title:"Status",permalink:"/status"}},m={},v=[{value:"Changes",id:"changes",level:2},{value:"Kick and Ban Caps",id:"kick-and-ban-caps",level:2},{value:"Contributors",id:"contributors",level:2}],b={toc:v};function f(e){var t=e.components,n=(0,r.Z)(e,c);return(0,l.kt)("wrapper",(0,a.Z)({},b,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"changes"},"Changes"),(0,l.kt)(u.Z,{mdxType:"Tabs"},(0,l.kt)(o.Z,{value:"new-features-tab",label:"New Features",default:!0,mdxType:"TabItem"},"\u2022 A new configuration command (",(0,l.kt)("code",null,"/config discussion_threads value: True/False"),")",(0,l.kt)("br",null),"\u2022 ",(0,l.kt)("a",{href:"#kick-and-ban-caps"},(0,l.kt)("code",null,"/ban")," and ",(0,l.kt)("code",null,"/kick")," command caps"),(0,l.kt)("br",null)),(0,l.kt)(o.Z,{value:"bugs-tab",label:"Bug Fixes",mdxType:"TabItem"},"\u2022 ",(0,l.kt)("em",null,"Small bug fixes"))),(0,l.kt)("h2",{id:"kick-and-ban-caps"},"Kick and Ban Caps"),(0,l.kt)("p",null,"These caps are in place to prevent user raids or nukes using Server Manager."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Command"),(0,l.kt)("th",{parentName:"tr",align:null},"Uses"),(0,l.kt)("th",{parentName:"tr",align:null},"Per"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"/ban ","[...]")),(0,l.kt)("td",{parentName:"tr",align:null},"10"),(0,l.kt)("td",{parentName:"tr",align:null},"10 minutes")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"/kick ","[...]")),(0,l.kt)("td",{parentName:"tr",align:null},"10"),(0,l.kt)("td",{parentName:"tr",align:null},"10 minutes")))),(0,l.kt)("h2",{id:"contributors"},"Contributors"),(0,l.kt)("div",{className:"user_box"},(0,l.kt)("img",{className:"avatar",src:"../img/nziie.png"}),(0,l.kt)("div",{className:"name"},"vNziie--#7777"),(0,l.kt)("div",{className:"comment"},"update author")),(0,l.kt)("br",null),(0,l.kt)("div",{className:"user_box"},(0,l.kt)("img",{className:"avatar",src:"../../img/neb.png"}),(0,l.kt)("div",{className:"name"},"Neb#7507"),(0,l.kt)("div",{className:"comment"},"kick and ban caps suggester & discussion threads suggester")),(0,l.kt)("h3",null,"Want to contribute to Server Manager?"),(0,l.kt)("div",{className:"pyc-hero__actions"},(0,l.kt)(i.Z,{link:"https://discord.gg/6bCKvP24kb",mdxType:"Button"},"Join our Support Server")))}f.isMDXComponent=!0}}]);