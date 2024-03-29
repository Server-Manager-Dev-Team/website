---
title: ✨ Forms ✨
description: Documentation regarding a giveaway system
sidebar_position: 1
---

import Button from '../../src/components/Button';
import Highlight from '@site/src/components/Highlight';
import {
  DiscordInteraction,
  DiscordMessage,
  DiscordMessages,
  DiscordEmbed,
  DiscordEmbedField,
  DiscordEmbedFields,
  DiscordMention,
  DiscordReactions,
  DiscordReaction,
} from "discord-message-components/packages/react";
import "discord-message-components/packages/react/dist/style.css";
import {
  DiscordButton,
  DiscordButtons,
} from "discord-message-components/packages/react";
import DiscordComponent, { defaultOptions } from "../../src/components/DiscordComponent";

<div className="box gold no-background shadow">
<div className="title">
<icon icon="fa-solid fa-wand-magic-sparkles" size="sm" style={{'color': '#d2af26'}}/> New 
</div>
<p>Officially released as of 12/20/2022; if you encounter any bugs, submit a <a href="https://forum.servermanagerbot.ml">help request on our forum</a>!</p>
</div>

|     Usage               |  Description   | Premium |
| ----------------------- | ----------- | ----------- |
| <span className="mention">/forms create &lt;name&gt; &lt;description&gt; &lt;response_channel&gt;</span>  | Create a form/application, response channel is where responses will send to       |   False        |
| <span className="mention">/forms edit &lt;name&gt;</span>  | Edit a form, there are many more options here compared to creating a form       |   False        |
| <span className="mention">/forms delete &lt;name&gt;</span>  | Delete a form, this CANNOT be undone       |   False        |
| <span className="mention">/form &lt;name&gt;</span>  | Submit/complete a form       |   False        |
| <span className="mention">/apply &lt;name&gt;</span>  | Submit/complete a form (alias for <span className="mention">/form</span>)     |   False        |

<span className="box red no-background animation">
<div className="title">
<icon icon="fa-solid fa-hand"/> Warning
</div>
<p><a href="../premium">Non-premium</a> servers are <u>limited</u> to only <strong>5</strong> forms. <icon icon="fa-solid fa-wand-magic-sparkles" size="sm" style={{'color': '#d2af26'}}/> <a href="../premium">Upgrade to premium</a> for <strong>unlimited forms</strong> and other sweet perks for as low as <strong>$2/month</strong>!</p>
</span>

## <icon icon="fa-solid fa-gear"/> Configurations {#configurations}
There are many configurations and values to set in the forms system, let's break it down...

| Name | Description | Example |
| ----- | ----- | ----- |
| <span className="timestamp">Given roles</span>  | Set the roles that are given when a form is approved/accepted (max. 5) | <span className="mention">@Staff Team</span> |
| <span className="timestamp">Required roles</span>  | Set the required roles in order to use the form (max. 5) | <span className="mention">@Member</span> |
| <span className="timestamp">Ping roles</span>  | Set the roles that are pinged when a form is submitted (max. 3) | <span className="mention">@Staff Team</span>, <span className="mention">@Management Team</span> |
| <span className="timestamp">Accepted message</span>  | Yes, you can customize the message that is used in the DM that's sent to a user when their form is accepted | Default: Your form in **Server Name** has been accepted! |
| <span className="timestamp">Denied message</span>  | Yup, you can also customize the denial message | Default: Your form in **Server Name** has been denied. | 

## <icon icon="fa-solid fa-file-import"/> Importing/exporting forms {#importing-exporting}
You can export forms as **json** to use later or import to other servers to use! 

<div className="box red no-background shadow">
Please only use the import/export form commands if you know what you're doing. If you don't know what you're doing you could break forms that don't show up when you want to edit or use it. We won't provide support for json exports/imports.
</div>

| Name | Description |
| ----- | ----- |
| <span className="mention">/forms import &lt;file&gt;</span> <span className="blurple-background">NEW</span> | Import a form from JSON, must follow [this](#formatting) format |
| <span className="mention">/forms export &lt;form_name&gt;</span> <span className="blurple-background">NEW</span> | Exports a form into json, can be imported later |


### <icon icon="fa-solid fa-code"/> JSON Formatting {#formatting}
Please use the following json template if you're creating a form from scracth with json

```json
{"name": "Form name", "description": "Form description", "questions": ["Question 1", "Question 2", "Question 3"], "response_channel": VALID_CHANNEL_ID_INTEGER, "settings": {"given_roles": [ROLES_IDS_IN_LIST], "required_roles": [ROLE_IDS_IN_LIST], "ping_roles": [ROLE_IDS_IN_LIST], "accepted_message": "Put as `null` for default", "denied_message": "Put as `null` for default"}}
```

- Upload JSON code as file
- Put it as your <span className="timestamp">file</span> argument in <span className="mention">/forms import</span>
- In JSON formatting, you need to use `null` instead of `None`
- <icon icon="fa-solid fa-star" size="sm" style={{'color': '#d2af26'}}/> If you don't want anything for <code>given_roles</code>, <code>required_roles</code> or <code>ping_roles</code>, just set them as <code>null</code>

## <icon icon="fa-solid fa-folders"/> Form Templates {#templates}
Coming soon.

### Need Support?
Contact us on our [forum page](https://forum.servermanagerbot.ml) for support on using forms!
