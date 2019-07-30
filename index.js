require('dotenv').config()
const Discord = require('discord.js');
const client = new Discord.Client();
var parseArgs = require('minimist')
 
client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});
 
client.on('message', msg => {
    console.log(msg.content)

    var msgarr = msg.content.split(" ")
    var command = parseArgs(msgarr)._
    var opts = parseArgs(msgarr)
    delete opts._
    
    switch(command[0]){
        case "sayhi": {
            var sayHi = () => {
                msg.reply("Hello!")
            }
            
            if("delay" in opts){
                setTimeout(sayHi, opts.delay)
            } else {
                sayHi()
            }
            break;
        }
        case "deleteme":
            msg.delete()
            break
        case "mute":
            var target = msg.mentions.members.first()
            
            target.addRole("597604636039577617")
            msg.reply("Added mute role to: " + target.displayName)
            break
    }
});
 
client.login(process.env.SECRET);