"use strict";(self.webpackChunkguide_pycord_dev=self.webpackChunkguide_pycord_dev||[]).push([[3635],{4629:function(e,t,a){var n=a(7294),i=a(9960);t.Z=function(e){var t=e.type,a=e.label,r=e.icon,o=e.link,l=e.isDisabled,d=e.onClick,s=e.children,u=function(e){var t=[];return e.split(" ").forEach((function(e){t.push("pyc-button--"+e)})),t.join(" ")},m=n.createElement("button",{className:"pyc-button"+(t?" "+u(t):""),"aria-label":a||(null==s?void 0:s.toString()),disabled:l,onClick:d},r&&n.createElement("i",{className:"pyc-button__icon","aria-hidden":"true"},r),s&&n.createElement("span",{className:"pyc-button__label"},s));return o?n.createElement(i.Z,{className:"pyc-button"+(t?" "+u(t):""),"aria-label":a||(null==s?void 0:s.toString()),href:o},r&&n.createElement("i",{className:"pyc-button__icon","aria-hidden":"true"},r),s&&n.createElement("span",{className:"pyc-button__label"},s)):m}},8624:function(e,t,a){a.d(t,{v:function(){return r}});var n=a(7294),i=a(7674),r=Object.assign({},i.TW,{profiles:{nziie:{author:"vNziie--",avatar:"/img/nziie.png",roleColor:"#00ffff"},servermanager:{author:"Server Manager",avatar:"/img/logo.png",roleColor:"#38faff",bot:!0},dorukyum:{author:"Dorukyum",avatar:"/img/dorukyum.png",roleColor:"#2cd6f7"}}});t.Z=function(e){var t=e.options,a=void 0===t?r:t,o=e.children;return n.createElement(i.qs.Provider,{value:a},n.createElement(i.dZ,null,o))}},7360:function(e,t,a){a.r(t),a.d(t,{assets:function(){return c},contentTitle:function(){return u},default:function(){return y},frontMatter:function(){return s},metadata:function(){return m},toc:function(){return g}});var n=a(7462),i=a(3366),r=(a(7294),a(3905)),o=(a(4629),a(7674)),l=a(8624),d=["components"],s={title:"Giveaways",description:"Documentation regarding a giveaway system",sidebar_position:1},u=void 0,m={unversionedId:"documentation/giveaways",id:"documentation/giveaways",title:"Giveaways",description:"Documentation regarding a giveaway system",source:"@site/docs/documentation/giveaways.md",sourceDirName:"documentation",slug:"/documentation/giveaways",permalink:"/documentation/giveaways",draft:!1,editUrl:"https://github.com/Server-Manager-Dev-Team/website/tree/main/docs/documentation/giveaways.md",tags:[],version:"current",lastUpdatedAt:1662910313,formattedLastUpdatedAt:"Sep 11, 2022",sidebarPosition:1,frontMatter:{title:"Giveaways",description:"Documentation regarding a giveaway system",sidebar_position:1},sidebar:"defaultSidebar",previous:{title:"Documentation",permalink:"/category/documentation"},next:{title:"Configurations",permalink:"/documentation/configurations"}},c={},g=[{value:"Example",id:"example",level:2},{value:"FAQ",id:"faq",level:2},{value:"Why can&#39;t I remove giveaway entries?",id:"removing-giveaway-entries",level:3}],p={toc:g};function y(e){var t=e.components,a=(0,i.Z)(e,d);return(0,r.kt)("wrapper",(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Usage"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Premium"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("code",null,"/giveaway start ","[...]")),(0,r.kt)("td",{parentName:"tr",align:null},"Start a giveaway"),(0,r.kt)("td",{parentName:"tr",align:null},"False")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("code",null,"/giveaway end <giveaway_id>")),(0,r.kt)("td",{parentName:"tr",align:null},"End a giveaway via giveaway ID"),(0,r.kt)("td",{parentName:"tr",align:null},"False")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("code",null,"/giveaway reroll <giveaway_id> ","<","winners",">"," ")),(0,r.kt)("td",{parentName:"tr",align:null},"Reroll a giveaway"),(0,r.kt)("td",{parentName:"tr",align:null},"False")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("code",null,"/giveaway delete <giveaway_id>")),(0,r.kt)("td",{parentName:"tr",align:null},"Delete a giveaway from the database"),(0,r.kt)("td",{parentName:"tr",align:null},"False")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("code",null,"/giveaway view ","[giveaway_id]",(0,r.kt)("a",null),"[hidden]")),(0,r.kt)("td",{parentName:"tr",align:null},"View a giveaway or all giveaways"),(0,r.kt)("td",{parentName:"tr",align:null},"False")))),(0,r.kt)("br",null),(0,r.kt)("h2",{id:"example"},"Example"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-txt"},"/giveaway start title:$5 Nitro Classic description:$5 Nitro Classic giveaway... duration:6h winners:1\n")),(0,r.kt)(l.Z,{mdxType:"DiscordComponent"},(0,r.kt)(o.kK,{author:"Docs Bot",avatar:"blue",bot:!0,mdxType:"DiscordMessage"},(0,r.kt)(o._h,{embedTitle:"$5 Nitro Classic",authorIcon:"/img/logo.png",authorName:"Server Manager Support",borderColor:"#5865F2",timestamp:"12/24/2022",footerIcon:"/img/logo.png",mdxType:"DiscordEmbed"},"$5 Nitro Classic giveaway with no requirement to enter! Click the button below this message to enter. Good luck! \ud83c\udf89",(0,r.kt)(o.Rb,{slot:"fields",inline:"true",mdxType:"DiscordEmbedFields"},(0,r.kt)(o.wY,{fieldTitle:"Ends",mdxType:"DiscordEmbedField"},(0,r.kt)("code",null,"in 6 hours")),(0,r.kt)(o.wY,{fieldTitle:"Host",mdxType:"DiscordEmbedField"},(0,r.kt)(o.Hz,{highlight:!0,mdxType:"DiscordMention"},l.v.profiles.nziie.author))),(0,r.kt)("span",{slot:"footer"},"1 winner")),(0,r.kt)("div",{slot:"interactions"},(0,r.kt)(o.un,{profile:"bob",command:!0,mdxType:"DiscordInteraction"},"giveaway")),(0,r.kt)("div",{slot:"actions"},(0,r.kt)(o.jr,{mdxType:"DiscordButtons"},(0,r.kt)(o.qD,{type:"primary",emoji:"\ud83c\udf89",mdxType:"DiscordButton"}),(0,r.kt)(o.qD,{type:"secondary",disabled:"true",mdxType:"DiscordButton"},"3 entries"))))),(0,r.kt)("br",null),(0,r.kt)("h2",{id:"faq"},"FAQ"),(0,r.kt)("h3",{id:"removing-giveaway-entries"},"Why can't I remove giveaway entries?"),(0,r.kt)("p",null,"The reason you can't do this is supported by many ways how a giveaway can be rigged if a manage giveaway entries feature is added. We believe in fair giveaways and no giveaway entries are removed. We understand that some giveaway hosts may want to enforce a custom requirement manually. However, this is why the ",(0,r.kt)("inlineCode",{parentName:"p"},"/giveaway reroll")," command exists and allows you to re-roll the giveaway an unlimited amount of times. Thus, removing the audacity to manage giveaway entries. In the ",(0,r.kt)("inlineCode",{parentName:"p"},"/giveaway view")," command, we may (sooner than later) allow giveaway entries to be viewed but not managed."))}y.isMDXComponent=!0}}]);