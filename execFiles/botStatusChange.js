module.exports = (client, db) =>{

Array.prototype.random = function () {
  return this[Math.floor((Math.random()*this.length))];
}


setInterval(() => {

var list = ["LISTENING my developer!", 
"WATCHING everyone!", 
"LISTENING annoying pings!", 
"PLAYING No!",
"WATCHING The purple names",
"WATCHING #general",
"PLAYING #counting",
"PLAYING The mods do their job",]

var item = list.random().split(/ +/)
var type = item.shift()

var activity = item.join(" ")

client.user.setActivity(activity, { type: type})

}, 10000);

}