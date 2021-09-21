## index.js
Creates database, check all requirements, create intents

### requires:
require('discord.js')

require("@replit/database")

require('./bot_startup.js')(myIntents, db)


## bot_startup.js
creates & logs in client

### requires
require('./packages/tokens.json')

require("./handlers/mainHandler.js")(client, db)


## main_handler.js
requires all event files

### requires:
require('../events/onReady.js')

require('../events/onMessage.js')


## onReady.js
Logs client is ready in console
Set bot status

### requires:
require('../execFiles/botStatusChange.js')


## onMessage.js
Directs messages to the cmd folder & to auto-mod

### requires:
require('../execFiles/botStatusChange.js')