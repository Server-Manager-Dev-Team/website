"use strict";(self.webpackChunkguide_pycord_dev=self.webpackChunkguide_pycord_dev||[]).push([[7893],{4629:function(t,e,n){var a=n(7294),o=n(9960);e.Z=function(t){var e=t.type,n=t.label,l=t.icon,i=t.link,s=t.isDisabled,r=t.onClick,d=t.children,u=function(t){var e=[];return t.split(" ").forEach((function(t){e.push("pyc-button--"+t)})),e.join(" ")},g=a.createElement("button",{className:"pyc-button"+(e?" "+u(e):""),"aria-label":n||(null==d?void 0:d.toString()),disabled:s,onClick:r},l&&a.createElement("i",{className:"pyc-button__icon","aria-hidden":"true"},l),d&&a.createElement("span",{className:"pyc-button__label"},d));return i?a.createElement(o.Z,{className:"pyc-button"+(e?" "+u(e):""),"aria-label":n||(null==d?void 0:d.toString()),href:i},l&&a.createElement("i",{className:"pyc-button__icon","aria-hidden":"true"},l),d&&a.createElement("span",{className:"pyc-button__label"},d)):g}},38:function(t,e,n){n.r(e),n.d(e,{assets:function(){return m},contentTitle:function(){return u},default:function(){return N},frontMatter:function(){return d},metadata:function(){return g},toc:function(){return p}});var a,o=n(7462),l=n(3366),i=(n(7294),n(3905)),s=(n(4629),n(7674)),r=["components"],d={title:"Suggestions",description:"Documentation regarding the suggestion system",sidebar_position:2},u=void 0,g={unversionedId:"documentation/suggestions",id:"documentation/suggestions",title:"Suggestions",description:"Documentation regarding the suggestion system",source:"@site/docs/documentation/suggestions.md",sourceDirName:"documentation",slug:"/documentation/suggestions",permalink:"/documentation/suggestions",draft:!1,editUrl:"https://github.com/Server-Manager-Dev-Team/website/tree/main/docs/documentation/suggestions.md",tags:[],version:"current",lastUpdatedAt:1662910313,formattedLastUpdatedAt:"Sep 11, 2022",sidebarPosition:2,frontMatter:{title:"Suggestions",description:"Documentation regarding the suggestion system",sidebar_position:2},sidebar:"defaultSidebar",previous:{title:"Configurations",permalink:"/documentation/configurations"},next:{title:"Polls",permalink:"/documentation/polls"}},m={},p=[{value:"Examples",id:"examples",level:2}],c=(a="DiscordComponent",function(t){return console.warn("Component "+a+" was not imported, exported, or provided by MDXProvider as global scope"),(0,i.kt)("div",t)}),k={toc:p};function N(t){var e=t.components,n=(0,l.Z)(t,r);return(0,i.kt)("wrapper",(0,o.Z)({},k,n,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("p",{className:"blurple-background"},"NEW")," ",(0,i.kt)("code",null,"/suggestions delete"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Usage"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"),(0,i.kt)("th",{parentName:"tr",align:null},"Premium"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("code",null,"/config suggestions_channel ","<","#channel",">"," ")),(0,i.kt)("td",{parentName:"tr",align:null},"Set the servers suggestion channel"),(0,i.kt)("td",{parentName:"tr",align:null},"False")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("code",null,"/suggest ","<","suggestion",">")),(0,i.kt)("td",{parentName:"tr",align:null},"Suggest something to the server"),(0,i.kt)("td",{parentName:"tr",align:null},"False")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("code",null,"/suggestion edit ","<","suggestion_id",">"," ","[hidden_response]")),(0,i.kt)("td",{parentName:"tr",align:null},"Edit your own suggestion (content)"),(0,i.kt)("td",{parentName:"tr",align:null},"False")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("code",null,"/suggestions view ","<","id",">"," ","[hidden=False]")),(0,i.kt)("td",{parentName:"tr",align:null},"View a suggestion in-depth"),(0,i.kt)("td",{parentName:"tr",align:null},"False")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("code",null,"/suggestions approve ","<","id",">"," ","[comment][close_voting=False]"," ","[hidden=False]")),(0,i.kt)("td",{parentName:"tr",align:null},"Approve a suggestion"),(0,i.kt)("td",{parentName:"tr",align:null},"False")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("code",null,"/suggestions deny ","<","id",">"," ","[comment][close_voting=False]"," ","[hidden=False]")),(0,i.kt)("td",{parentName:"tr",align:null},"Deny a suggestion"),(0,i.kt)("td",{parentName:"tr",align:null},"False")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("code",null,"/suggestions implement ","<","id",">"," ","[comment][close_voting=False]"," ","[hidden=False]")),(0,i.kt)("td",{parentName:"tr",align:null},"Implement a suggestion"),(0,i.kt)("td",{parentName:"tr",align:null},"False")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("code",null,"/suggestions consider ","<","id",">"," ","[comment][hidden=False]")),(0,i.kt)("td",{parentName:"tr",align:null},"Consider a suggestion"),(0,i.kt)("td",{parentName:"tr",align:null},"False")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("code",null,"/suggestions delete ","<","id",">"," ","[notify_author=True][hidden_response]")),(0,i.kt)("td",{parentName:"tr",align:null},"Delete a suggestion from the database and the suggestions channel"),(0,i.kt)("td",{parentName:"tr",align:null},"False")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("code",null,"/suggestions comment ","<","id",">"," ","<","comment",">")),(0,i.kt)("td",{parentName:"tr",align:null},"Comment on a suggestion"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("premium",null,"True"))))),(0,i.kt)("admonition",{title:"Warning",type:"caution"},(0,i.kt)("p",{parentName:"admonition"},"Deleting a suggestion message ",(0,i.kt)("strong",{parentName:"p"},"doesn't actually delete the suggestion from the database"),". Please use ",(0,i.kt)("inlineCode",{parentName:"p"},"/suggestion delete")," to delete a suggestion.")),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"Suggestion commenting is currently not finished yet and may have some small and minor bugs.")),(0,i.kt)("h2",{id:"examples"},"Examples"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-txt"},"/suggest suggestion: This is a suggestion!\n")),(0,i.kt)(c,{mdxType:"DiscordComponent"},(0,i.kt)(s.kK,{author:"Docs Bot",avatar:"blue",bot:!0,mdxType:"DiscordMessage"},(0,i.kt)(s._h,{authorIcon:"/img/logo.png",authorName:"User#0000",thumbnail:"/img/logo.png",borderColor:"#5865F2",timestamp:"12/24/2022",footerIcon:"/img/logo.png",image:"/img/banner-v3.png",mdxType:"DiscordEmbed"},"This is a suggestion!",(0,i.kt)(s.Rb,{slot:"fields",inline:"true",mdxType:"DiscordEmbedFields"},(0,i.kt)(s.wY,{fieldTitle:"Votes",mdxType:"DiscordEmbedField"},(0,i.kt)("strong",null,"Upvotes:")," 0 ",(0,i.kt)("code",null,"(0%)"),(0,i.kt)("br",null),(0,i.kt)("strong",null,"Downvotes:")," 0 ",(0,i.kt)("code",null,"(0%)")),(0,i.kt)(s.wY,{fieldTitle:"Status",mdxType:"DiscordEmbedField"},"\ud83d\udce3 This suggestion is waiting for an official answer!")),(0,i.kt)("span",{slot:"footer"},"Suggestion ID: wasdabc12340")))))}N.isMDXComponent=!0}}]);