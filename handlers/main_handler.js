module.exports = (client, db) =>{
  require("../events/onReady.js")(client, db)
  require("../events/onMessage.js")(client, db)
}