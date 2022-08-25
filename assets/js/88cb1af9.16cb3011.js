"use strict";(self.webpackChunkguide_pycord_dev=self.webpackChunkguide_pycord_dev||[]).push([[342],{4629:function(t,e,n){var a=n(7294),r=n(9960);e.Z=function(t){var e=t.type,n=t.label,l=t.icon,i=t.link,o=t.isDisabled,s=t.onClick,d=t.children,m=function(t){var e=[];return t.split(" ").forEach((function(t){e.push("pyc-button--"+t)})),e.join(" ")},u=a.createElement("button",{className:"pyc-button"+(e?" "+m(e):""),"aria-label":n||(null==d?void 0:d.toString()),disabled:o,onClick:s},l&&a.createElement("i",{className:"pyc-button__icon","aria-hidden":"true"},l),d&&a.createElement("span",{className:"pyc-button__label"},d));return i?a.createElement(r.Z,{className:"pyc-button"+(e?" "+m(e):""),"aria-label":n||(null==d?void 0:d.toString()),href:i},l&&a.createElement("i",{className:"pyc-button__icon","aria-hidden":"true"},l),d&&a.createElement("span",{className:"pyc-button__label"},d)):u}},9109:function(t,e,n){n.r(e),n.d(e,{assets:function(){return m},contentTitle:function(){return s},default:function(){return g},frontMatter:function(){return o},metadata:function(){return d},toc:function(){return u}});var a=n(7462),r=n(3366),l=(n(7294),n(3905)),i=(n(4629),n(7674),["components"]),o={title:"Configurations",description:"Documentation regarding the suggestion system",sidebar_position:2},s=void 0,d={unversionedId:"documentation/configurations",id:"documentation/configurations",title:"Configurations",description:"Documentation regarding the suggestion system",source:"@site/docs/documentation/configurations.md",sourceDirName:"documentation",slug:"/documentation/configurations",permalink:"/documentation/configurations",draft:!1,tags:[],version:"current",lastUpdatedAt:1661387217,formattedLastUpdatedAt:"Aug 25, 2022",sidebarPosition:2,frontMatter:{title:"Configurations",description:"Documentation regarding the suggestion system",sidebar_position:2},sidebar:"defaultSidebar",previous:{title:"Giveaways",permalink:"/documentation/giveaways"},next:{title:"Suggestions",permalink:"/documentation/suggestions"}},m={},u=[{value:"Administrator Roles",id:"administrator-roles",level:2},{value:"Moderator Roles",id:"moderator-roles",level:2},{value:"Moderation Configurations",id:"moderation-configurations",level:2},{value:"Suggestion Configurations",id:"suggestion-configurations",level:2},{value:"Custom Reasons",id:"custom-reasons",level:2},{value:"Logging",id:"logging",level:2}],p={toc:u};function g(t){var e=t.components,o=(0,r.Z)(t,i);return(0,l.kt)("wrapper",(0,a.Z)({},p,o,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("admonition",{title:"Warning",type:"caution"},(0,l.kt)("p",{parentName:"admonition"},"To use any of these commands, you need to have ",(0,l.kt)("strong",{parentName:"p"},"Manage Guild")," permissions or be in one or more of the ",(0,l.kt)("inlineCode",{parentName:"p"},"admin_roles")," config roles set by the server.")),(0,l.kt)("h2",{id:"administrator-roles"},"Administrator Roles"),(0,l.kt)("admonition",{type:"note"},(0,l.kt)("p",{parentName:"admonition"},"Anyone with ",(0,l.kt)("strong",{parentName:"p"},"Manage Guild")," permissions or higher automatically by-pass this check.")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Usage"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"),(0,l.kt)("th",{parentName:"tr",align:null},"Premium"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"/config admin_roles ","[hidden]")),(0,l.kt)("td",{parentName:"tr",align:null},"View the server's admin roles"),(0,l.kt)("td",{parentName:"tr",align:null},"False")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"/config admin_role add ","<","role",">")),(0,l.kt)("td",{parentName:"tr",align:null},"Add a role to the admin roles"),(0,l.kt)("td",{parentName:"tr",align:null},"False")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"/config admin_role remove ","<","role",">")),(0,l.kt)("td",{parentName:"tr",align:null},"Remove a role from the admin roles"),(0,l.kt)("td",{parentName:"tr",align:null},"False")))),(0,l.kt)("h2",{id:"moderator-roles"},"Moderator Roles"),(0,l.kt)("admonition",{type:"note"},(0,l.kt)("p",{parentName:"admonition"},"Anyone in the ",(0,l.kt)("inlineCode",{parentName:"p"},"admin_roles")," role(s) configuration automatically by-pass this check.")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Usage"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"),(0,l.kt)("th",{parentName:"tr",align:null},"Premium"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"/config moderator_roles ","[hidden]")),(0,l.kt)("td",{parentName:"tr",align:null},"View the server's moderator roles"),(0,l.kt)("td",{parentName:"tr",align:null},"False")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"/config moderator_role add ","<","role",">")),(0,l.kt)("td",{parentName:"tr",align:null},"Add a role to the moderator roles"),(0,l.kt)("td",{parentName:"tr",align:null},"False")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"/config moderator_role remove ","<","role",">")),(0,l.kt)("td",{parentName:"tr",align:null},"Remove a role from the moderator roles"),(0,l.kt)("td",{parentName:"tr",align:null},"False")))),(0,l.kt)("h2",{id:"moderation-configurations"},"Moderation Configurations"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Usage"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"),(0,l.kt)("th",{parentName:"tr",align:null},"Premium"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"/config appeal_server_invite ","<","invite",">")),(0,l.kt)("td",{parentName:"tr",align:null},"Set the server's ",(0,l.kt)("a",{parentName:"td",href:"/updates/appeal-server-invite-notice"},"appeal server invite")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("premium",null,"True"))))),(0,l.kt)("h2",{id:"suggestion-configurations"},"Suggestion Configurations"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Usage"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"),(0,l.kt)("th",{parentName:"tr",align:null},"Premium"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"/config suggestions_channel ","<","#channel",">"," ")),(0,l.kt)("td",{parentName:"tr",align:null},"Set the servers suggestion channel"),(0,l.kt)("td",{parentName:"tr",align:null},"False")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"/config discussion_threads ","<","value",">"," ")),(0,l.kt)("td",{parentName:"tr",align:null},"Set the whether a thread should be created on suggestion creation"),(0,l.kt)("td",{parentName:"tr",align:null},"False")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"/config suggestion_ping ","<","@role",">"," ")),(0,l.kt)("td",{parentName:"tr",align:null},"Set a role to be pinged when a suggestion is submitted - ",(0,l.kt)("inlineCode",{parentName:"td"},"None")," by default"),(0,l.kt)("td",{parentName:"tr",align:null},"False")))),(0,l.kt)("h2",{id:"custom-reasons"},"Custom Reasons"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Usage"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"),(0,l.kt)("th",{parentName:"tr",align:null},"Premium"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"/config custom_reasons ","[hidden]")),(0,l.kt)("td",{parentName:"tr",align:null},"View the server's custom reasons"),(0,l.kt)("td",{parentName:"tr",align:null},"False")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"/config custom_reason add ","<","name",">"," ","<","value",">")),(0,l.kt)("td",{parentName:"tr",align:null},"Add a custom reason - ",(0,l.kt)("inlineCode",{parentName:"td"},"name")," will show up in slash command auto-complete for moderation commands and then will use ",(0,l.kt)("inlineCode",{parentName:"td"},"value")," for the reason"),(0,l.kt)("td",{parentName:"tr",align:null},"False")))),(0,l.kt)("h2",{id:"logging"},"Logging"),(0,l.kt)("admonition",{type:"note"},(0,l.kt)("p",{parentName:"admonition"},"Moderations action results are sent to this channel"),(0,l.kt)("details",{className:"customdetails"},(0,l.kt)("summary",null,"Preview"),"  ",(0,l.kt)("h3",null,"Mutes"),(0,l.kt)("p",{parentName:"admonition"},"  ",(0,l.kt)("img",{alt:"Logging Preview 1",src:n(8867).Z,width:"604",height:"215"})),"  ",(0,l.kt)("h3",null,"Warnings"),(0,l.kt)("p",{parentName:"admonition"},"  ",(0,l.kt)("img",{alt:"Logging Preview 1",src:n(5024).Z,width:"591",height:"192"})))),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Usage"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"),(0,l.kt)("th",{parentName:"tr",align:null},"Premium"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"/config log_channel ","<","#channel",">")),(0,l.kt)("td",{parentName:"tr",align:null},"Set the server's log channel"),(0,l.kt)("td",{parentName:"tr",align:null},"False")))),(0,l.kt)("br",null))}g.isMDXComponent=!0},8867:function(t,e,n){e.Z=n.p+"assets/images/muteexample-3af14911a064d254809b17fbb7a61605.png"},5024:function(t,e,n){e.Z=n.p+"assets/images/warningexample-0f2d05d07d59c7afd459efabbf91d0c6.png"}}]);