module.exports = (client, db) =>{
client.on("ready", () => {

console.log("Bot is ready!")
client.user.setActivity("Starting up...", { type: "PLAYING"})
require("../execFiles/botStatusChange.js")(client, db)

});
}