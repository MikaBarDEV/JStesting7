module.exports = (client, message, command, args, db) =>{

var testCmdMatch = /^(js!|!|!!)(ping)/
if(testCmdMatch.test(message.content) == true){
require('../../commands/cmds/bot/ping.js')(client, message, command, args, db)
}


}