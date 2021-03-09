const {
    prefix,
    youtube_link,
    moderator_roles,
    flag_drop,
    NOTHING_SPECIAL
} = require('./config.json')
const Discord = require('discord.js')
const bot = new Discord.Client({partials: ["MESSAGE","CHANNEL","REACTION"]})
const polls = require('./polls')
const fs = require('fs')

const flagDrop = require('./flag-drop')
const reactionAdd = require('./reaction-add')
const reactionRemove = require('./reaction-remove')

bot.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'))
for(const file of commandFiles){
    const command = require(`./commands/${file}`)
    bot.commands.set(command.name, command);
}

bot.on('ready', () =>{
    console.log('Board bot is online')
    polls(bot);
    reactionAdd(bot);
    reactionRemove(bot);
})

bot.on('message',msg=>{
    const args = msg.content.slice(prefix.length).split(/ +/)
    const command = args.shift().toLowerCase()
    if(command === "ping"){
        bot.commands.get('ping').execute(msg, args)
    }else if(command === "youtube" || command === "yt"){
        bot.commands.get('youtube').execute(msg, args, youtube_link)
    }
    else if(flag_drop.includes(msg.channel.id) && !msg.author.bot){
        flagDrop.execute(bot,msg)
    }
})


bot.login(process.env.NOTHING_SPECIAL)