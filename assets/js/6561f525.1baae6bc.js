"use strict";(self.webpackChunkguide_pycord_dev=self.webpackChunkguide_pycord_dev||[]).push([[4991],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return p}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=a.createContext({}),s=function(e){var t=a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=s(e.components);return a.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,u=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),m=s(n),p=r,g=m["".concat(u,".").concat(p)]||m[p]||d[p]||o;return n?a.createElement(g,l(l({ref:t},c),{},{components:n})):a.createElement(g,l({ref:t},c))}));function p(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=m;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var s=2;s<o;s++)l[s]=n[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},5162:function(e,t,n){n.d(t,{Z:function(){return l}});var a=n(7294),r=n(6010),o="tabItem_Ymn6";function l(e){var t=e.children,n=e.hidden,l=e.className;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(o,l),hidden:n},t)}},5488:function(e,t,n){n.d(t,{Z:function(){return p}});var a=n(7462),r=n(7294),o=n(6010),l=n(2389),i=n(7392),u=n(7094),s=n(2466),c="tabList__CuJ",d="tabItem_LNqP";function m(e){var t,n,l=e.lazy,m=e.block,p=e.defaultValue,g=e.values,b=e.groupId,f=e.className,v=r.Children.map(e.children,(function(e){if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),h=null!=g?g:v.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),y=(0,i.l)(h,(function(e,t){return e.value===t.value}));if(y.length>0)throw new Error('Docusaurus error: Duplicate values "'+y.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var k=null===p?p:null!=(t=null!=p?p:null==(n=v.find((function(e){return e.props.default})))?void 0:n.props.value)?t:v[0].props.value;if(null!==k&&!h.some((function(e){return e.value===k})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+k+'" but none of its children has the corresponding value. Available values are: '+h.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var N=(0,u.U)(),w=N.tabGroupChoices,E=N.setTabGroupChoices,O=(0,r.useState)(k),T=O[0],C=O[1],_=[],D=(0,s.o5)().blockElementScrollPositionUntilNextRender;if(null!=b){var j=w[b];null!=j&&j!==T&&h.some((function(e){return e.value===j}))&&C(j)}var S=function(e){var t=e.currentTarget,n=_.indexOf(t),a=h[n].value;a!==T&&(D(t),C(a),null!=b&&E(b,String(a)))},P=function(e){var t,n=null;switch(e.key){case"ArrowRight":var a,r=_.indexOf(e.currentTarget)+1;n=null!=(a=_[r])?a:_[0];break;case"ArrowLeft":var o,l=_.indexOf(e.currentTarget)-1;n=null!=(o=_[l])?o:_[_.length-1]}null==(t=n)||t.focus()};return r.createElement("div",{className:(0,o.Z)("tabs-container",c)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":m},f)},h.map((function(e){var t=e.value,n=e.label,l=e.attributes;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:T===t?0:-1,"aria-selected":T===t,key:t,ref:function(e){return _.push(e)},onKeyDown:P,onFocus:S,onClick:S},l,{className:(0,o.Z)("tabs__item",d,null==l?void 0:l.className,{"tabs__item--active":T===t})}),null!=n?n:t)}))),l?(0,r.cloneElement)(v.filter((function(e){return e.props.value===T}))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},v.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==T})}))))}function p(e){var t=(0,l.Z)();return r.createElement(m,(0,a.Z)({key:String(t)},e))}},4629:function(e,t,n){var a=n(7294),r=n(9960);t.Z=function(e){var t=e.type,n=e.label,o=e.icon,l=e.link,i=e.isDisabled,u=e.onClick,s=e.children,c=function(e){var t=[];return e.split(" ").forEach((function(e){t.push("pyc-button--"+e)})),t.join(" ")},d=a.createElement("button",{className:"pyc-button"+(t?" "+c(t):""),"aria-label":n||(null==s?void 0:s.toString()),disabled:i,onClick:u},o&&a.createElement("i",{className:"pyc-button__icon","aria-hidden":"true"},o),s&&a.createElement("span",{className:"pyc-button__label"},s));return l?a.createElement(r.Z,{className:"pyc-button"+(t?" "+c(t):""),"aria-label":n||(null==s?void 0:s.toString()),href:l},o&&a.createElement("i",{className:"pyc-button__icon","aria-hidden":"true"},o),s&&a.createElement("span",{className:"pyc-button__label"},s)):d}},4256:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return s},default:function(){return g},frontMatter:function(){return u},metadata:function(){return c},toc:function(){return m}});var a=n(7462),r=n(3366),o=(n(7294),n(3905)),l=(n(5488),n(5162),n(4629)),i=["components"],u={slug:"v1.0.6",title:"Release v1.0.6",authors:"nziie",tags:["New Version","Updates"]},s=void 0,c={permalink:"/blog/v1.0.6",source:"@site/blog/2022-8-26-v1.0.6.md",title:"Release v1.0.6",description:"Hey everyone, a new version has been released that includes 2 new suggestion commands, and a new custom branded bot commands.",date:"2022-08-26T00:00:00.000Z",formattedDate:"August 26, 2022",tags:[{label:"New Version",permalink:"/blog/tags/new-version"},{label:"Updates",permalink:"/blog/tags/updates"}],readingTime:1.24,hasTruncateMarker:!1,authors:[{name:"Nziie",title:"Core Developer",url:"https://nziie.is-a.dev",imageURL:"https://github.com/Nzii3.png",key:"nziie"}],frontMatter:{slug:"v1.0.6",title:"Release v1.0.6",authors:"nziie",tags:["New Version","Updates"]}},d={authorsImageUrls:[void 0]},m=[{value:"Custom Branded Commands",id:"custom-branded-commands",level:2},{value:"Suggestion Edit Command",id:"suggestion-edit-command",level:2},{value:"Suggestion Delete Command",id:"suggestion-delete-command",level:2}],p={toc:m};function g(e){var t=e.components,n=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Hey everyone, a new version has been released that includes ",(0,o.kt)("strong",{parentName:"p"},"2 new suggestion commands"),", and a ",(0,o.kt)("strong",{parentName:"p"},"new custom branded bot commands"),"."),(0,o.kt)("h2",{id:"custom-branded-commands"},"Custom Branded Commands"),(0,o.kt)("p",null,"For every custom branded bot, there are ",(0,o.kt)("strong",{parentName:"p"},"2")," new commands that allow you to change the bot's name and avatar directly from Discord."),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Command"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("code",null,"/custom name ","<","name",">")),(0,o.kt)("td",{parentName:"tr",align:null},"Set your custom branded bot's name in Discord")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("code",null,"/custom avatar ","<","attachment",">")),(0,o.kt)("td",{parentName:"tr",align:null},"Set your custom branded bot's avatar in Discord")))),(0,o.kt)("h2",{id:"suggestion-edit-command"},"Suggestion Edit Command"),(0,o.kt)("p",null,"The new suggestion edit command allows users to edit their own suggestion, only once."),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Command"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("code",null,"/suggestions edit ","<","suggestion_id",">")),(0,o.kt)("td",{parentName:"tr",align:null},"This will bring up an interactive proccess to edit the suggestion")))),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"At the moment, you can only edit the suggestion itself and not it's other properties.")),(0,o.kt)("h2",{id:"suggestion-delete-command"},"Suggestion Delete Command"),(0,o.kt)("p",null,"The new suggestion delete command allows the suggestion author or an administrator to delete a suggestion. Thus, deleting it from the suggestion channel and the database."),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Command"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("code",null,"/suggestions delete ","<","suggestion_id",">")),(0,o.kt)("td",{parentName:"tr",align:null},"This will delete the suggestion")))),(0,o.kt)("admonition",{title:"Warning",type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"Please use this command to delete a suggestion, don't actually delete the suggestion message unless the voting was closed.")),(0,o.kt)("br",null),(0,o.kt)("h3",null,"Want to contribute to Server Manager?"),(0,o.kt)("div",{className:"pyc-hero__actions"},(0,o.kt)(l.Z,{link:"https://discord.gg/6bCKvP24kb",mdxType:"Button"},"Join our Support Server")))}g.isMDXComponent=!0}}]);