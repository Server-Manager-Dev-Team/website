"use strict";(self.webpackChunkguide_pycord_dev=self.webpackChunkguide_pycord_dev||[]).push([[6355],{5162:function(e,t,n){n.d(t,{Z:function(){return o}});var a=n(7294),r=n(6010),l="tabItem_Ymn6";function o(e){var t=e.children,n=e.hidden,o=e.className;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(l,o),hidden:n},t)}},5488:function(e,t,n){n.d(t,{Z:function(){return p}});var a=n(7462),r=n(7294),l=n(6010),o=n(2389),i=n(7392),s=n(7094),u=n(2466),d="tabList__CuJ",m="tabItem_LNqP";function c(e){var t,n,o=e.lazy,c=e.block,p=e.defaultValue,g=e.values,h=e.groupId,v=e.className,b=r.Children.map(e.children,(function(e){if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),k=null!=g?g:b.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),f=(0,i.l)(k,(function(e,t){return e.value===t.value}));if(f.length>0)throw new Error('Docusaurus error: Duplicate values "'+f.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var N=null===p?p:null!=(t=null!=p?p:null==(n=b.find((function(e){return e.props.default})))?void 0:n.props.value)?t:b[0].props.value;if(null!==N&&!k.some((function(e){return e.value===N})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+N+'" but none of its children has the corresponding value. Available values are: '+k.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var y=(0,s.U)(),w=y.tabGroupChoices,C=y.setTabGroupChoices,T=(0,r.useState)(N),D=T[0],E=T[1],_=[],Z=(0,u.o5)().blockElementScrollPositionUntilNextRender;if(null!=h){var S=w[h];null!=S&&S!==D&&k.some((function(e){return e.value===S}))&&E(S)}var I=function(e){var t=e.currentTarget,n=_.indexOf(t),a=k[n].value;a!==D&&(Z(t),E(a),null!=h&&C(h,String(a)))},z=function(e){var t,n=null;switch(e.key){case"ArrowRight":var a,r=_.indexOf(e.currentTarget)+1;n=null!=(a=_[r])?a:_[0];break;case"ArrowLeft":var l,o=_.indexOf(e.currentTarget)-1;n=null!=(l=_[o])?l:_[_.length-1]}null==(t=n)||t.focus()};return r.createElement("div",{className:(0,l.Z)("tabs-container",d)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":c},v)},k.map((function(e){var t=e.value,n=e.label,o=e.attributes;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:D===t?0:-1,"aria-selected":D===t,key:t,ref:function(e){return _.push(e)},onKeyDown:z,onFocus:I,onClick:I},o,{className:(0,l.Z)("tabs__item",m,null==o?void 0:o.className,{"tabs__item--active":D===t})}),null!=n?n:t)}))),o?(0,r.cloneElement)(b.filter((function(e){return e.props.value===D}))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},b.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==D})}))))}function p(e){var t=(0,o.Z)();return r.createElement(c,(0,a.Z)({key:String(t)},e))}},8772:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return s},default:function(){return p},frontMatter:function(){return i},metadata:function(){return u},toc:function(){return m}});var a=n(7462),r=n(3366),l=(n(7294),n(3905)),o=(n(5488),n(5162),n(4629),["components"]),i={slug:"v1.0.6",title:"Release v1.0.6",authors:"nziie",tags:["New Version","Updates"]},s=void 0,u={permalink:"/blog/v1.0.6",source:"@site/blog/2022-8-26-v1.0.6.md",title:"Release v1.0.6",description:"Hey everyone, a new version has been released that includes 2 new suggestion commands, and a new custom branded bot commands.",date:"2022-08-26T00:00:00.000Z",formattedDate:"August 26, 2022",tags:[{label:"New Version",permalink:"/blog/tags/new-version"},{label:"Updates",permalink:"/blog/tags/updates"}],readingTime:1.19,hasTruncateMarker:!1,authors:[{name:"Nziie",title:"Core Developer",url:"https://nziie.is-a.dev",imageURL:"https://github.com/Nzii3.png",key:"nziie"}],frontMatter:{slug:"v1.0.6",title:"Release v1.0.6",authors:"nziie",tags:["New Version","Updates"]},prevItem:{title:"Release v1.1.0",permalink:"/blog/v1.1.0"}},d={authorsImageUrls:[void 0]},m=[{value:"Custom Branded Commands",id:"custom-branded-commands",level:2},{value:"Suggestion Edit Command",id:"suggestion-edit-command",level:2},{value:"Suggestion Delete Command",id:"suggestion-delete-command",level:2}],c={toc:m};function p(e){var t=e.components,n=(0,r.Z)(e,o);return(0,l.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"Hey everyone, a new version has been released that includes ",(0,l.kt)("strong",{parentName:"p"},"2 new suggestion commands"),", and a ",(0,l.kt)("strong",{parentName:"p"},"new custom branded bot commands"),"."),(0,l.kt)("h2",{id:"custom-branded-commands"},"Custom Branded Commands"),(0,l.kt)("p",null,"For every custom branded bot, there are ",(0,l.kt)("strong",{parentName:"p"},"2")," new commands that allow you to change the bot's name and avatar directly from Discord."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Command"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"/custom name ","<","name",">")),(0,l.kt)("td",{parentName:"tr",align:null},"Set your custom branded bot's name in Discord")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"/custom avatar ","<","attachment",">")),(0,l.kt)("td",{parentName:"tr",align:null},"Set your custom branded bot's avatar in Discord")))),(0,l.kt)("h2",{id:"suggestion-edit-command"},"Suggestion Edit Command"),(0,l.kt)("p",null,"The new suggestion edit command allows users to edit their own suggestion, only once."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Command"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"/suggestions edit ","<","suggestion_id",">")),(0,l.kt)("td",{parentName:"tr",align:null},"This will bring up an interactive proccess to edit the suggestion")))),(0,l.kt)("admonition",{type:"info"},(0,l.kt)("p",{parentName:"admonition"},"At the moment, you can only edit the suggestion itself and not it's other properties.")),(0,l.kt)("h2",{id:"suggestion-delete-command"},"Suggestion Delete Command"),(0,l.kt)("p",null,"The new suggestion delete command allows the suggestion author or an administrator to delete a suggestion. Thus, deleting it from the suggestion channel and the database."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Command"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"/suggestions delete ","<","suggestion_id",">")),(0,l.kt)("td",{parentName:"tr",align:null},"This will delete the suggestion")))),(0,l.kt)("admonition",{title:"Warning",type:"caution"},(0,l.kt)("p",{parentName:"admonition"},"Please use this command to delete a suggestion, don't actually delete the suggestion message unless the voting was closed.")),(0,l.kt)("br",null),(0,l.kt)("a",{href:"https://discord.gg/6bCKvP24kb"},(0,l.kt)("img",{src:"/img/sm_supportserver.png",className:"betterimage"})))}p.isMDXComponent=!0}}]);