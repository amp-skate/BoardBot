const {
    prefix,
    youtube_link,
    moderator_roles,
    NOTHING_SPECIAL,
    flag_drop,
    testing_channels,
    profile_channel
} = require('./config.json')
const Discord = require('discord.js')
const bot = new Discord.Client({partials: ["MESSAGE","CHANNEL","REACTION"]})
const polls = require('./polls')
const fs = require('fs')
//const MessageModel = require('./database/message');
//const database = require('./database/database');
const rolereaction = require('./commands/rolereaction')
const { run } = require('./commands/rolereaction')
const flagDrop = require('./flag-drop')
//const reactRole = require('./commands/react-role')
//const { env } = require('process')

bot.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'))
for(const file of commandFiles){
    const command = require(`./commands/${file}`)

    bot.commands.set(command.name, command);
}

bot.on('ready', () =>{
    console.log('Board bot is online')
    polls(bot);
    //database.then(()=>console.log('MongoDB is Connected!')).catch(err=>console.log(err))
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

bot.on('messageReactionAdd', async (reaction, user)=>{
    if(reaction.message.partial) await reaction.message.fetch();
    if(reaction.partial) await reaction.fetch();

    if(user.bot) return;
    if(!reaction.message.guild) return;
    //switch(reaction.emoji.name)
    if(profile_channel.includes(reaction.message.channel.id)){
        let profile_role = reaction.message.guild.roles.cache.find(r=>r.name === "⁣  ⁣⁣  ⁣⁣⁣ ⁣⁣─── ⁣ ⁣⁣Profile ⁣ ─── ⁣ ⁣⁣ ⁣ ⁣  ⁣")
        await reaction.message.guild.members.cache.get(user.id).roles.add(profile_role)
        if(reaction.emoji.name === '1️⃣'){
            console.log('yes first given')
            let role = reaction.message.guild.roles.cache.find(r=>r.name === "he/him")
            await reaction.message.guild.members.cache.get(user.id).roles.add(role)
        }
        if(reaction.emoji.name === '2️⃣'){
            console.log('yes second given')
            let role = reaction.message.guild.roles.cache.find(r=>r.name.toLowerCase() === "she/her")
            await reaction.message.guild.members.cache.get(user.id).roles.add(role)
        }
        if(reaction.emoji.name === '3️⃣'){
            let role = reaction.message.guild.roles.cache.find(r=>r.name.toLowerCase() === "they/them")
            await reaction.message.guild.members.cache.get(user.id).roles.add(role)
        }
        if(reaction.emoji.name === '👶'){
            let role = reaction.message.guild.roles.cache.find(r=>r.name.toLowerCase() === "beginner")
            await reaction.message.guild.members.cache.get(user.id).roles.add(role)
        }
        if(reaction.emoji.name === '🧒'){
            let role = reaction.message.guild.roles.cache.find(r=>r.name.toLowerCase() === "intermediate")
            await reaction.message.guild.members.cache.get(user.id).roles.add(role)
        }
        if(reaction.emoji.name === '🙇'){
            let role = reaction.message.guild.roles.cache.find(r=>r.name.toLowerCase() === "advanced")
            await reaction.message.guild.members.cache.get(user.id).roles.add(role)
        }
        if(reaction.emoji.name === '🧓'){
            let role = reaction.message.guild.roles.cache.find(r=>r.name.toLowerCase() === "professional")
            await reaction.message.guild.members.cache.get(user.id).roles.add(role)
        }
        if(reaction.emoji.name === '🧙'){
            let role = reaction.message.guild.roles.cache.find(r=>r.name.toLowerCase() === "wizard")
            await reaction.message.guild.members.cache.get(user.id).roles.add(role)
        }
        if(reaction.emoji.name === '🅰️'){
            let role = reaction.message.guild.roles.cache.find(r=>r.name.toLowerCase() === "lgbtq+")
            await reaction.message.guild.members.cache.get(user.id).roles.add(role)
        }
        if(reaction.emoji.name === '🅱️'){
            let role = reaction.message.guild.roles.cache.find(r=>r.name.toLowerCase() === "bipoc")
            await reaction.message.guild.members.cache.get(user.id).roles.add(role)
        }
        if(reaction.emoji.name === '🇦'){
            let role = reaction.message.guild.roles.cache.find(r=>r.name.toLowerCase() === "cruising")
            await reaction.message.guild.members.cache.get(user.id).roles.add(role)
        }
        if(reaction.emoji.name === '🇧'){
            let role = reaction.message.guild.roles.cache.find(r=>r.name.toLowerCase() === "dancing")
            await reaction.message.guild.members.cache.get(user.id).roles.add(role)
        }
        if(reaction.emoji.name === '🇨'){
            let role = reaction.message.guild.roles.cache.find(r=>r.name.toLowerCase() === "freeride")
            await reaction.message.guild.members.cache.get(user.id).roles.add(role)
        }
        if(reaction.emoji.name === '🇩'){
            let role = reaction.message.guild.roles.cache.find(r=>r.name.toLowerCase() === "freestyle")
            await reaction.message.guild.members.cache.get(user.id).roles.add(role)
        }
        if(reaction.emoji.name === '🇪'){
            let role = reaction.message.guild.roles.cache.find(r=>r.name.toLowerCase() === "downhill")
            await reaction.message.guild.members.cache.get(user.id).roles.add(role)
        }
        if(reaction.emoji.name === '🇫'){
            let role = reaction.message.guild.roles.cache.find(r=>r.name.toLowerCase() === "ldp")
            await reaction.message.guild.members.cache.get(user.id).roles.add(role)
        }
        if(reaction.emoji.name === '🇬'){
            let role = reaction.message.guild.roles.cache.find(r=>r.name.toLowerCase() === "")
            await reaction.message.guild.members.cache.get(user.id).roles.add(role)
        }
        if(reaction.emoji.name === '🇭'){
            let role = reaction.message.guild.roles.cache.find(r=>r.name.toLowerCase() === "")
            await reaction.message.guild.members.cache.get(user.id).roles.add(role)
        }
        if(reaction.emoji.name === '🇯'){
            let role = reaction.message.guild.roles.cache.find(r=>r.name.toLowerCase() === "")
            await reaction.message.guild.members.cache.get(user.id).roles.add(role)
        }
        if(reaction.emoji.name === '🇰'){
            let role = reaction.message.guild.roles.cache.find(r=>r.name.toLowerCase() === "")
            await reaction.message.guild.members.cache.get(user.id).roles.add(role)
        }
        if(reaction.emoji.name === '🇱'){
            let role = reaction.message.guild.roles.cache.find(r=>r.name.toLowerCase() === "")
            await reaction.message.guild.members.cache.get(user.id).roles.add(role)
        }
        if(reaction.emoji.name === '🇲'){
            let role = reaction.message.guild.roles.cache.find(r=>r.name.toLowerCase() === "")
            await reaction.message.guild.members.cache.get(user.id).roles.add(role)
        }
        if(reaction.emoji.name === '🇳'){
            let role = reaction.message.guild.roles.cache.find(r=>r.name.toLowerCase() === "")
            await reaction.message.guild.members.cache.get(user.id).roles.add(role)
        }
        if(reaction.emoji.name === '🇴'){
            let role = reaction.message.guild.roles.cache.find(r=>r.name.toLowerCase() === "")
            await reaction.message.guild.members.cache.get(user.id).roles.add(role)
        }
        if(reaction.emoji.name === '🇵'){
            let role = reaction.message.guild.roles.cache.find(r=>r.name.toLowerCase() === "")
            await reaction.message.guild.members.cache.get(user.id).roles.add(role)
        }
        if(reaction.emoji.name === '🇶'){
            let role = reaction.message.guild.roles.cache.find(r=>r.name.toLowerCase() === "")
            await reaction.message.guild.members.cache.get(user.id).roles.add(role)
        }
        if(reaction.emoji.name === '🇷'){
            let role = reaction.message.guild.roles.cache.find(r=>r.name.toLowerCase() === "")
            await reaction.message.guild.members.cache.get(user.id).roles.add(role)
        }
        if(reaction.emoji.name === '🇸'){
            let role = reaction.message.guild.roles.cache.find(r=>r.name.toLowerCase() === "")
            await reaction.message.guild.members.cache.get(user.id).roles.add(role)
        }
        if(reaction.emoji.name === '🇹'){
            let role = reaction.message.guild.roles.cache.find(r=>r.name.toLowerCase() === "")
            await reaction.message.guild.members.cache.get(user.id).roles.add(role)
        }
        if(reaction.emoji.name === '🇺'){
            let role = reaction.message.guild.roles.cache.find(r=>r.name.toLowerCase() === "")
            await reaction.message.guild.members.cache.get(user.id).roles.add(role)
        }
        if(reaction.emoji.name === '🇻'){
            let role = reaction.message.guild.roles.cache.find(r=>r.name.toLowerCase() === "")
            await reaction.message.guild.members.cache.get(user.id).roles.add(role)
        }
        if(reaction.emoji.name === '🇼'){
            let role = reaction.message.guild.roles.cache.find(r=>r.name.toLowerCase() === "")
            await reaction.message.guild.members.cache.get(user.id).roles.add(role)
        }
        if(reaction.emoji.name === '🇽'){
            let role = reaction.message.guild.roles.cache.find(r=>r.name.toLowerCase() === "")
            await reaction.message.guild.members.cache.get(user.id).roles.add(role)
        }
        if(reaction.emoji.name === '🇾'){
            let role = reaction.message.guild.roles.cache.find(r=>r.name.toLowerCase() === "")
            await reaction.message.guild.members.cache.get(user.id).roles.add(role)
        }
        if(reaction.emoji.name === '🇿'){
            let role = reaction.message.guild.roles.cache.find(r=>r.name.toLowerCase() === "")
            await reaction.message.guild.members.cache.get(user.id).roles.add(role)
        }
        if(reaction.emoji.name === '🤝'){
            let role = reaction.message.guild.roles.cache.find(r=>r.name.toLowerCase() === "i'm here to make friends!")
            await reaction.message.guild.members.cache.get(user.id).roles.add(role)
        }
        if(reaction.emoji.name === '🛹'){
            let role = reaction.message.guild.roles.cache.find(r=>r.name.toLowerCase() === "i'm here to get better!")
            await reaction.message.guild.members.cache.get(user.id).roles.add(role)
        }
        if(reaction.emoji.name === '🤡'){
            let role = reaction.message.guild.roles.cache.find(r=>r.name.toLowerCase() === "i'm here for the memes")
            await reaction.message.guild.members.cache.get(user.id).roles.add(role)
        }
        
    }
})

bot.login(NOTHING_SPECIAL)