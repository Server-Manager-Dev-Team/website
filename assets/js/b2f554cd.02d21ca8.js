"use strict";(self.webpackChunkguide_pycord_dev=self.webpackChunkguide_pycord_dev||[]).push([[1477],{10:function(e){e.exports=JSON.parse('{"blogPosts":[{"id":"verification-announcement","metadata":{"permalink":"/blog/verification-announcement","source":"@site/blog/2022-9-25-verification-announcement.md","title":"Verification Announcement","description":"Server Manager has offically been verified by Discord! I\'d like to thank the whole Development Team for making this possible. Without their help of feature ideas, growth help, and support, the bot wouldn\'t have growed as fast as it did within a few weeks. It has been counted and in just a week, the bot grew with 23 new servers (that kept the bot). 23 servers new servers is amazing growth in just a span of 7 days. We have much more in store for Server Manager and many new features on the way. We take your suggestions in the support server and allow them to be voted on by fellow members to see what everyone wants to see and not see in the bot. We are always looking for feedback on how to improve Server Manager. It doesn\'t hurt to join our support server and contribute to the bot that you may use in your own server!","date":"2022-09-25T00:00:00.000Z","formattedDate":"September 25, 2022","tags":[],"readingTime":1.26,"hasTruncateMarker":false,"authors":[{"name":"Nziie","title":"Core Developer","url":"https://nziie.is-a.dev","imageURL":"https://github.com/Nzii3.png","key":"nziie"}],"frontMatter":{"slug":"verification-announcement","title":"Verification Announcement","authors":"nziie"},"nextItem":{"title":"Time Arguments Guide","permalink":"/blog/time-arguments"}},"content":"import Button from \'../src/components/Button\';\\n\\n![](./assets/verifiedbackground.png)\\n\\n# Server Manager has been verified! \ud83c\udf89\\n\\nServer Manager has offically been **verified** by Discord! I\'d like to thank the whole Development Team for making this possible. Without their help of feature ideas, growth help, and support, the bot wouldn\'t have growed as fast as it did within a few weeks. It has been counted and in just a week, the bot grew with **23 new servers** (that kept the bot). 23 servers new servers is amazing growth in just a span of 7 days. We have much more in store for Server Manager and many new features on the way. We take **your** suggestions in the [support server](https://discord.gg/6bCKvP24kb) and allow them to be voted on by fellow members to see what everyone wants to see and not see in the bot. We are always looking for feedback on how to improve Server Manager. It doesn\'t hurt to join our support server and contribute to the bot that you may use in your own server!\\n\\n:::tip\\n\\nOur roadmap is constantly being updated with new feature that we\'re added. [Check it out](/roadmap)!\\n\\n:::\\n\\n<div className=\\"pyc-hero__actions\\">\\n  <Button link=\\"https://discord.gg/6bCKvP24kb\\">Join our Support Server</Button>\\n</div>\\n\\n<h2>Development Team</h2>\\n<div className=\\"user_box\\">\\n  <img className=\\"profile-picture-avatar\\" src=\\"../img/nziie.png\\"/>\\n  <div className=\\"name\\">\\n    vNziie--#7777\\n  </div>\\n</div>\\n<br/>\\n<div className=\\"user_box\\">\\n  <img className=\\"profile-picture-avatar\\" src=\\"../img/neb.png\\"/>\\n  <div className=\\"name\\">\\n    Neb#7507\\n  </div>\\n</div>\\n<br/>\\n<div className=\\"user_box\\">\\n  <img className=\\"profile-picture-avatar\\" src=\\"../img/jon.png\\"/>\\n  <div className=\\"name\\">\\n    Jonfirexbox#8859\\n  </div>\\n</div>\\n<br/>\\n<div className=\\"user_box\\">\\n  <img className=\\"profile-picture-avatar\\" src=\\"../img/stryker.png\\"/>\\n  <div className=\\"name\\">\\n    Stryker3k Jnr#0966\\n  </div>\\n</div>\\n<br/>\\n<div className=\\"user_box\\">\\n  <img className=\\"profile-picture-avatar\\" src=\\"../img/anondev.png\\"/>\\n  <div className=\\"name\\">\\n    \ud835\uddd4\ud835\uddfb\ud835\uddfc\ud835\uddfb\ud835\uddd7\ud835\uddf2\ud835\ude03#4280\\n  </div>\\n</div>"},{"id":"time-arguments","metadata":{"permalink":"/blog/time-arguments","source":"@site/blog/2022-9-14-time-arguments.md","title":"Time Arguments Guide","description":"Server Manager uses a custom time converter so that you can provide a human-readable time argument without the hassle of any extra steps. These duration arguments are used in Moderation, Polls, Giveaways, and more. Here is a quick guide to mastering those arguments.","date":"2022-09-14T00:00:00.000Z","formattedDate":"September 14, 2022","tags":[],"readingTime":1.155,"hasTruncateMarker":false,"authors":[{"name":"Nziie","title":"Core Developer","url":"https://nziie.is-a.dev","imageURL":"https://github.com/Nzii3.png","key":"nziie"}],"frontMatter":{"slug":"time-arguments","title":"Time Arguments Guide","authors":"nziie"},"prevItem":{"title":"Verification Announcement","permalink":"/blog/verification-announcement"},"nextItem":{"title":"Release v1.1.0","permalink":"/blog/v1.1.0"}},"content":"import Tabs from \\"@theme/Tabs\\";\\nimport TabItem from \\"@theme/TabItem\\";\\nimport Button from \'../src/components/Button\';\\nimport {\\n  DiscordButton,\\n  DiscordButtons,\\n  DiscordInteraction,\\n  DiscordMessage,\\n  DiscordMessages,\\n  DiscordMention,\\n} from \\"discord-message-components/packages/react\\";\\nimport \\"discord-message-components/packages/react/dist/style.css\\";\\nimport DiscordComponent, { defaultOptions } from \\"../src/components/DiscordComponent\\";\\n\\nServer Manager uses a custom time converter so that you can provide a human-readable time argument without the hassle of any extra steps. These duration arguments are used in **Moderation**, **Polls**, **Giveaways**, and more. Here is a quick guide to mastering those arguments.\\n\\n## Key\\n`d` - days\\n\\n\\n`h` - hours\\n\\n\\n`m` - minutes\\n\\n\\n`s` - seconds\\n\\n## Examples\\n\\n```txt title=\\"Using \'d\' (days)\\"\\n/time argument: 1d\\n```\\n<DiscordComponent>\\n  <DiscordMessage profile=\\"servermanager\\">\\n    The time argument you provided was <strong>1 day</strong>!\\n    <div slot=\\"interactions\\">\\n      <DiscordInteraction profile=\\"nziie\\" command>\\n        time\\n      </DiscordInteraction>\\n    </div>\\n  </DiscordMessage>\\n</DiscordComponent>\\n\\n---\\n\\n```txt title=\\"Using \'h\' (hours)\\"\\n/time argument: 1h\\n```\\n<DiscordComponent>\\n  <DiscordMessage profile=\\"servermanager\\">\\n    The time argument you provided was <strong>1 hour</strong>!\\n    <div slot=\\"interactions\\">\\n      <DiscordInteraction profile=\\"nziie\\" command>\\n        time\\n      </DiscordInteraction>\\n    </div>\\n  </DiscordMessage>\\n</DiscordComponent>\\n\\n---\\n\\n```txt title=\\"Using \'m\' (minutes)\\"\\n/time argument: 5m\\n```\\n<DiscordComponent>\\n  <DiscordMessage profile=\\"servermanager\\">\\n    The time argument you provided was <strong>5 minutes</strong>!\\n    <div slot=\\"interactions\\">\\n      <DiscordInteraction profile=\\"nziie\\" command>\\n        time\\n      </DiscordInteraction>\\n    </div>\\n  </DiscordMessage>\\n</DiscordComponent>\\n\\n---\\n\\n```txt title=\\"Using \'s\' (seconds)\\"\\n/time argument: 30s\\n```\\n<DiscordComponent>\\n  <DiscordMessage profile=\\"servermanager\\">\\n    The time argument you provided was <strong>30 seconds</strong>!\\n    <div slot=\\"interactions\\">\\n      <DiscordInteraction profile=\\"nziie\\" command>\\n        time\\n      </DiscordInteraction>\\n    </div>\\n  </DiscordMessage>\\n</DiscordComponent>\\n<br/>\\n\\n---\\n\\n> Hope this helps you on the fly while either starting a giveaway, poll, or issuing warnings or mutes!"},{"id":"v1.1.0","metadata":{"permalink":"/blog/v1.1.0","source":"@site/blog/2022-9-6-v1.1.0.md","title":"Release v1.1.0","description":"Hey everyone, here with a new version of Server Manager. This new version includes: moderation cases, bug fixes, and small changes.","date":"2022-09-06T00:00:00.000Z","formattedDate":"September 6, 2022","tags":[{"label":"New Version","permalink":"/blog/tags/new-version"},{"label":"Updates","permalink":"/blog/tags/updates"}],"readingTime":1.685,"hasTruncateMarker":false,"authors":[{"name":"Nziie","title":"Core Developer","url":"https://nziie.is-a.dev","imageURL":"https://github.com/Nzii3.png","key":"nziie"}],"frontMatter":{"slug":"v1.1.0","title":"Release v1.1.0","authors":"nziie","tags":["New Version","Updates"]},"prevItem":{"title":"Time Arguments Guide","permalink":"/blog/time-arguments"},"nextItem":{"title":"Release v1.0.6","permalink":"/blog/v1.0.6"}},"content":"import Tabs from \\"@theme/Tabs\\";\\nimport TabItem from \\"@theme/TabItem\\";\\nimport Button from \'../src/components/Button\';\\nimport { DiscordButton, DiscordButtons, DiscordInteraction, DiscordMessage, DiscordMessages, DiscordEmbed, DiscordMention, DiscordReactions, DiscordReaction, } from \\"discord-message-components/packages/react\\"; import \\"discord-message-components/packages/react/dist/style.css\\"; import DiscordComponent, { defaultOptions } from \\"../src/components/DiscordComponent\\";\\n\\nHey everyone, here with a new version of Server Manager. This new version includes: **moderation cases**, **bug fixes**, and small changes.\\n\\n## Cases\\nCases may make a big impact on moderation in your server. With every moderation action (warn, mute, kick, ban), a case is created with a specific ID. These cases aren\'t removed when a member leaves and they don\' expire. Therefore, you can keep track of a user\'s moderation history even if they left the server. You can edit a case\'s reason and <em>proof</em> in the `/case <case_id>` command. Yes, you heard me correctly: you can attach proof to a case. Case proof is helpful long term if you doubt that there was actually proof for the action taken against someone.\\n\\n:::note\\nWarning cases are a separate system so if you remove a warning, the case tied to the warning won\'t be removed.\\n\\nPlease also note that cases can only be created and viewed by **moderators**.\\n:::\\n\\n| Command | Description | \\n| ----------------------- | ----------- |\\n| <code>/case &lt;case_id&gt;</code> | View/manage a case - **you can edit a case in this command** |\\n| <code>/createcase &lt;member&gt; &lt;reason&gt; [action=Other] [proof=image url] [duration]</code> | Create a case for a user |\\n| <code>/cases [member]</code> | View cases for the whole server or yourself |\\n\\n## Updated Warn Command\\nThe warning system now uses \\"token like\\" warning IDs and now uses an embed for a command response.\\n\\n:::danger\\n\\nIt seems like old warnings with different warning IDs don\'t seem to be valid warning IDs when trying to remove the warning, but they are in the database. **We are currently working on a fix for this**.\\n\\n:::\\n\\n:::info\\nCustom branded bots now support cases as of 9/11/2022\\n:::\\n\\n<br/>\\n<h3>Want to contribute to Server Manager?</h3>\\n\\n<div className=\\"pyc-hero__actions\\">\\n  <Button link=\\"https://discord.gg/6bCKvP24kb\\">Join our Support Server</Button>\\n</div>"},{"id":"v1.0.6","metadata":{"permalink":"/blog/v1.0.6","source":"@site/blog/2022-8-26-v1.0.6.md","title":"Release v1.0.6","description":"Hey everyone, a new version has been released that includes 2 new suggestion commands, and a new custom branded bot commands.","date":"2022-08-26T00:00:00.000Z","formattedDate":"August 26, 2022","tags":[{"label":"New Version","permalink":"/blog/tags/new-version"},{"label":"Updates","permalink":"/blog/tags/updates"}],"readingTime":1.24,"hasTruncateMarker":false,"authors":[{"name":"Nziie","title":"Core Developer","url":"https://nziie.is-a.dev","imageURL":"https://github.com/Nzii3.png","key":"nziie"}],"frontMatter":{"slug":"v1.0.6","title":"Release v1.0.6","authors":"nziie","tags":["New Version","Updates"]},"prevItem":{"title":"Release v1.1.0","permalink":"/blog/v1.1.0"}},"content":"import Tabs from \\"@theme/Tabs\\";\\nimport TabItem from \\"@theme/TabItem\\";\\nimport Button from \'../src/components/Button\';\\n\\nHey everyone, a new version has been released that includes **2 new suggestion commands**, and a **new custom branded bot commands**.\\n\\n## Custom Branded Commands\\nFor every custom branded bot, there are **2** new commands that allow you to change the bot\'s name and avatar directly from Discord.\\n\\n| Command | Description | \\n| ----------------------- | ----------- |\\n| <code>/custom name &lt;name&gt;</code> | Set your custom branded bot\'s name in Discord |\\n| <code>/custom avatar &lt;attachment&gt;</code> | Set your custom branded bot\'s avatar in Discord |\\n\\n## Suggestion Edit Command\\nThe new suggestion edit command allows users to edit their own suggestion, only once.\\n\\n| Command | Description | \\n| ----------------------- | ----------- |\\n| <code>/suggestions edit &lt;suggestion_id&gt;</code> | This will bring up an interactive proccess to edit the suggestion |\\n\\n:::info\\nAt the moment, you can only edit the suggestion itself and not it\'s other properties.\\n:::\\n\\n## Suggestion Delete Command\\nThe new suggestion delete command allows the suggestion author or an administrator to delete a suggestion. Thus, deleting it from the suggestion channel and the database.\\n\\n| Command | Description | \\n| ----------------------- | ----------- |\\n| <code>/suggestions delete &lt;suggestion_id&gt;</code> | This will delete the suggestion |\\n\\n:::caution Warning\\nPlease use this command to delete a suggestion, don\'t actually delete the suggestion message unless the voting was closed.\\n:::\\n\\n<br/>\\n<h3>Want to contribute to Server Manager?</h3>\\n\\n<div className=\\"pyc-hero__actions\\">\\n  <Button link=\\"https://discord.gg/6bCKvP24kb\\">Join our Support Server</Button>\\n</div>"}]}')}}]);