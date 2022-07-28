"use strict";(self.webpackChunkguide_pycord_dev=self.webpackChunkguide_pycord_dev||[]).push([[269],{3905:function(e,t,r){r.d(t,{Zo:function(){return l},kt:function(){return d}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},l=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,l=u(e,["components","mdxType","originalType","parentName"]),f=c(r),d=a,m=f["".concat(s,".").concat(d)]||f[d]||p[d]||o;return r?n.createElement(m,i(i({ref:t},l),{},{components:r})):n.createElement(m,i({ref:t},l))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=f;var u={};for(var s in t)hasOwnProperty.call(t,s)&&(u[s]=t[s]);u.originalType=e,u.mdxType="string"==typeof e?e:a,i[1]=u;for(var c=2;c<o;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},4629:function(e,t,r){var n=r(7294),a=r(9960);t.Z=function(e){var t=e.type,r=e.label,o=e.icon,i=e.link,u=e.isDisabled,s=e.onClick,c=e.children,l=function(e){var t=[];return e.split(" ").forEach((function(e){t.push("pyc-button--"+e)})),t.join(" ")},p=n.createElement("button",{className:"pyc-button"+(t?" "+l(t):""),"aria-label":r||(null==c?void 0:c.toString()),disabled:u,onClick:s},o&&n.createElement("i",{className:"pyc-button__icon","aria-hidden":"true"},o),c&&n.createElement("span",{className:"pyc-button__label"},c));return i?n.createElement(a.Z,{className:"pyc-button"+(t?" "+l(t):""),"aria-label":r||(null==c?void 0:c.toString()),href:i},o&&n.createElement("i",{className:"pyc-button__icon","aria-hidden":"true"},o),c&&n.createElement("span",{className:"pyc-button__label"},c)):p}},3345:function(e,t,r){r.r(t),r.d(t,{assets:function(){return p},contentTitle:function(){return c},default:function(){return m},frontMatter:function(){return s},metadata:function(){return l},toc:function(){return f}});var n=r(7462),a=r(3366),o=(r(7294),r(3905)),i=r(4629),u=["components"],s={title:"Status",description:"View Server Manager's live status",sidebar_position:4},c=void 0,l={unversionedId:"Status",id:"Status",title:"Status",description:"View Server Manager's live status",source:"@site/docs/Status.mdx",sourceDirName:".",slug:"/Status",permalink:"/Status",draft:!1,editUrl:"https://github.com/Server-Manager-Dev-Team/Server-Manager-Bot.github.io/tree/main/docs/Status.mdx",tags:[],version:"current",lastUpdatedBy:"Nziie3",lastUpdatedAt:1658976554,formattedLastUpdatedAt:"Jul 28, 2022",sidebarPosition:4,frontMatter:{title:"Status",description:"View Server Manager's live status",sidebar_position:4},sidebar:"defaultSidebar",previous:{title:"Support",permalink:"/Support"},next:{title:"Giveaways",permalink:"/Giveaways"}},p={},f=[],d={toc:f};function m(e){var t=e.components,r=(0,a.Z)(e,u);return(0,o.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"We mainly use ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("a",{parentName:"strong",href:"/support"},"our support server"))," for our status updates, but we are always managing Server Manager's status on ",(0,o.kt)("strong",{parentName:"p"},"Instatus"),"."),(0,o.kt)("div",{className:"pyc-hero__actions"},(0,o.kt)(i.Z,{link:"https://server-manager.instatus.com/",mdxType:"Button"},"View status...")),(0,o.kt)("br",null))}m.isMDXComponent=!0}}]);