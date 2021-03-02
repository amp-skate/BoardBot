const {
    Emoji,
    Message
} = require('discord.js')
const reg = /[\uD83C][\uDDE6-\uDDFF][\uD83C][\uDDE6-\uDDFF]/;
const country = require('./flag-emojis')

const {
    polls_channel
} = require('./config.json');
const message = require('./database/message');

function getCollectionFromEmoji(args) {
    const matching =
        country.find(element => element.emoji == args)
    return (matching.name)
}
module.exports = {
    name: "flag-drop",
    description: "testing code for the dev",
    async execute(bot, msg) {
        const {
            channel,
            content
        } = msg
        let args = msg.content.toLowerCase().trim()
        try {
            if (reg.test(args)) {
                let customRole = `I'm from ${getCollectionFromEmoji(args)}!`
                try {
                    if (!msg.member.roles.cache.find((r => r.name === customRole))) {
                        let rol = msg.member.guild.roles.cache.find(r => r.name === customRole)
                        msg.guild.members.cache.get(msg.author.id).roles.add(rol)
                        .then(msg.react('👍'))
                        .catch(err=>console.log(err))
                    } else msg.channel.send("you already have the country assigned role!")
                } catch (e) {
                    msg.channel.send("couldn't find your assigned country role, Please reach out to an Admin! Sorry for the inconvenience")
                }
            }else if(!reg.test(args)){
                msg.channel.send('Please enter only the flag, like : 🇺🇲 and only 1 flag at a time! Dont enter anything else in this channel!')
                return
            }
        } catch (err) {
            console.log(err)
        }
    }
}
/*
        if(!reg.test(args)){
            msg.channel.send('Please enter a valid country flag only, like 🇺🇲 , and enter one flag at a time only! Do not enter anything else')
            
        }
            let customRole = `I'm from ${getCollectionFromEmoji(args)}!`
        try{
            if (!msg.member.roles.cache.find((r => r.name === customRole))){
                let rol = msg.member.guild.roles.cache.find(r => r.name === customRole)
                msg.guild.members.cache.get(msg.author.id).roles.add(rol)
                msg.react('👍')
            }
            else msg.channel.send("you already have the country assigned role!")
        }catch(e){
            msg.channel.send('Something seems wrong, maybe your country tag is not available at the moment, please reach out to a moderator or an admin! Sorry for the inconvienience! ')
            console.log(e)
        }*/