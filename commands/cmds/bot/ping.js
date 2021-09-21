module.exports = (client, message, command, args, db) =>{

message.delete()
message.channel.send(`🏓 - Latency is ${Date.now() - message.createdTimestamp}ms.`);

}