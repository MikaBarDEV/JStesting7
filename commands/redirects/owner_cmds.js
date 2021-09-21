module.exports = (client, message, command, args, db) =>{

var testCmdMatch = /^(-)(eval|exec)/
if(testCmdMatch.test(message.content) == true){
require('../../commands/cmds/owner/eval.js')(client, message, command, args, db)
}

}