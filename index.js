const Discord = require('discord.js')
const bot = new Discord.Client()
const tk = require('./config.json')
bot.on('ready', () =>{
    console.log('Board bot is online')
})

bot.login(tk.token)