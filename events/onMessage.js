module.exports = (client, db) =>{
client.on("messageCreate", message => {

console.log("message has been send!")

const prefix = /^(js!|!|-|>|\.)/

if(prefix.test(message.content) == true && message.author.bot != true){

const args = message.content.split(/ +/);
const command = args.shift().toLowerCase();

require('../handlers/cmd_handler.js')(client, message, command, args, db)
} else if(message.author.bot != true){

require('../handlers/message_handler.js')(client, message, db)

}



});
}