"use strict";(self.webpackChunkguide_pycord_dev=self.webpackChunkguide_pycord_dev||[]).push([[601],{5162:function(e,t,a){a.d(t,{Z:function(){return l}});var n=a(7294),o=a(6010),r="tabItem_Ymn6";function l(e){var t=e.children,a=e.hidden,l=e.className;return n.createElement("div",{role:"tabpanel",className:(0,o.Z)(r,l),hidden:a},t)}},5488:function(e,t,a){a.d(t,{Z:function(){return m}});var n=a(7462),o=a(7294),r=a(6010),l=a(2389),i=a(7392),u=a(7094),s=a(2466),c="tabList__CuJ",d="tabItem_LNqP";function b(e){var t,a,l=e.lazy,b=e.block,m=e.defaultValue,h=e.values,f=e.groupId,p=e.className,v=o.Children.map(e.children,(function(e){if((0,o.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),g=null!=h?h:v.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),w=(0,i.l)(g,(function(e,t){return e.value===t.value}));if(w.length>0)throw new Error('Docusaurus error: Duplicate values "'+w.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var k=null===m?m:null!=(t=null!=m?m:null==(a=v.find((function(e){return e.props.default})))?void 0:a.props.value)?t:v[0].props.value;if(null!==k&&!g.some((function(e){return e.value===k})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+k+'" but none of its children has the corresponding value. Available values are: '+g.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var y=(0,u.U)(),T=y.tabGroupChoices,x=y.setTabGroupChoices,N=(0,o.useState)(k),B=N[0],_=N[1],E=[],I=(0,s.o5)().blockElementScrollPositionUntilNextRender;if(null!=f){var Z=T[f];null!=Z&&Z!==B&&g.some((function(e){return e.value===Z}))&&_(Z)}var C=function(e){var t=e.currentTarget,a=E.indexOf(t),n=g[a].value;n!==B&&(I(t),_(n),null!=f&&x(f,String(n)))},D=function(e){var t,a=null;switch(e.key){case"ArrowRight":var n,o=E.indexOf(e.currentTarget)+1;a=null!=(n=E[o])?n:E[0];break;case"ArrowLeft":var r,l=E.indexOf(e.currentTarget)-1;a=null!=(r=E[l])?r:E[E.length-1]}null==(t=a)||t.focus()};return o.createElement("div",{className:(0,r.Z)("tabs-container",c)},o.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":b},p)},g.map((function(e){var t=e.value,a=e.label,l=e.attributes;return o.createElement("li",(0,n.Z)({role:"tab",tabIndex:B===t?0:-1,"aria-selected":B===t,key:t,ref:function(e){return E.push(e)},onKeyDown:D,onFocus:C,onClick:C},l,{className:(0,r.Z)("tabs__item",d,null==l?void 0:l.className,{"tabs__item--active":B===t})}),null!=a?a:t)}))),l?(0,o.cloneElement)(v.filter((function(e){return e.props.value===B}))[0],{className:"margin-top--md"}):o.createElement("div",{className:"margin-top--md"},v.map((function(e,t){return(0,o.cloneElement)(e,{key:t,hidden:e.props.value!==B})}))))}function m(e){var t=(0,l.Z)();return o.createElement(b,(0,n.Z)({key:String(t)},e))}},2616:function(e,t,a){a.r(t),a.d(t,{assets:function(){return d},contentTitle:function(){return s},default:function(){return h},frontMatter:function(){return u},metadata:function(){return c},toc:function(){return b}});var n=a(7462),o=a(3366),r=(a(7294),a(3905)),l=(a(5488),a(5162),a(4629)),i=(a(7674),a(8624),["components"]),u={slug:"beta-release",title:"Public Beta Release v1.0.0",authors:"jonfirexbox",tags:["New Version","Beta Bot"]},s=void 0,c={permalink:"/blog/beta-release",source:"@site/blog/2022-10-26-BETA.md",title:"Public Beta Release v1.0.0",description:"Hey everyone, so first of all i'd like to say sorry we didn't do this sooner, but we have now released our new beta bot! It has all of the features that the normal bot does but we will start to add the stuff we want on to beta to test and then add to the main! This bot can be invited by anyone by clicking the button below.",date:"2022-10-26T00:00:00.000Z",formattedDate:"October 26, 2022",tags:[{label:"New Version",permalink:"/blog/tags/new-version"},{label:"Beta Bot",permalink:"/blog/tags/beta-bot"}],readingTime:1.05,hasTruncateMarker:!1,authors:[{name:"Jonfirexbox",title:"Development Team",url:"https://github.com/Kyro3400",imageURL:"https://github.com/kyro3400.png",key:"jonfirexbox"}],frontMatter:{slug:"beta-release",title:"Public Beta Release v1.0.0",authors:"jonfirexbox",tags:["New Version","Beta Bot"]},prevItem:{title:"Public Beta Release v1.0.1",permalink:"/blog/v1.0.1-beta"},nextItem:{title:"Release v1.1.3",permalink:"/blog/v1.1.3"}},d={authorsImageUrls:[void 0]},b=[],m={toc:b};function h(e){var t=e.components,a=(0,o.Z)(e,i);return(0,r.kt)("wrapper",(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Hey everyone, so first of all i'd like to say sorry we didn't do this sooner, but we have now released our new beta bot! It has all of the features that the normal bot does but we will start to add the stuff we want on to beta to test and then add to the main! This bot can be invited by anyone by clicking the button below."),(0,r.kt)("div",{className:"pyc-hero__actions"},(0,r.kt)(l.Z,{link:"https://discord.com/oauth2/authorize?client_id=1031214784223399996&permissions=1497736146166&scope=bot%20applications.commands",mdxType:"Button"},"Beta Bot Invite")),(0,r.kt)("p",null,"But some things that we need to say, with making the beta bot, we ran into some problems:"),(0,r.kt)("div",{className:"box red animation no-background"},(0,r.kt)("div",{className:"title"},"Problems"),(0,r.kt)("li",null,"Premium was not transferred over as bot still has premium commands/limits, working on a fix"),"\u2192 ",(0,r.kt)("em",null,"(Thats all that we know)")),(0,r.kt)("p",null,"But last thing, both bots will be updated at the same time, so if we add a new feature to one bot we will try and add it to the other! So join out support server and add the bot!"),(0,r.kt)("h3",null,"Want to contribute to Server Manager?"),(0,r.kt)("a",{href:"https://discord.gg/6bCKvP24kb"},(0,r.kt)("img",{src:"/img/sm_supportserver.png",className:"betterimage"})))}h.isMDXComponent=!0}}]);