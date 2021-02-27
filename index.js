const Discord = require('discord.js')
const bot = new Discord.Client()
const tk = require('./config.json')
const react = require('./reaction-roles')
bot.on('ready', () =>{
    console.log('Board bot is online')
    react(bot)
})

bot.on('message',msg=>{
    if(msg.content==="!ping"){
        msg.channel.send('pong')
    }
})

bot.login(tk.token)