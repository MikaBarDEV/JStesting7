module.exports = (client, message, command, args, db) =>{

require('../commands/redirects/bot_cmds.js')(client, message, command, args, db)
require('../commands/redirects/owner_cmds.js')(client, message, command, args, db)


}