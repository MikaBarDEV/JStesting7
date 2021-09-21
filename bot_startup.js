module.exports = (myIntents, db) =>{
  const { Client, Discord } = require('discord.js');

  const { token } = require('./packages/tokens.json');

  const client = new Client({ intents: myIntents })

  client.login(token);

  require("./handlers/main_handler.js")(client, db)
}