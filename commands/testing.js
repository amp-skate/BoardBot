const {
    Emoji,
    Message
} = require('discord.js')
const reg = /[\uD83C][\uDDE6-\uDDFF][\uD83C][\uDDE6-\uDDFF]/;
const country = require('../flag-emojis')
var customRole
const {
    polls_channel
} = require('../config.json')

function getCollectionFromEmoji(args) {
    const matching =
            country.find(element => element.emoji == args)
        return (matching.name)
}
module.exports = {
    name: "testing",
    description: "testing code for the dev",
    execute(msg, args) {
        const {
            channel,
            content
        } = msg
        if(!reg.test(args)){
            msg.channel.send('Please enter a valid country flag emoji like !flag 🇺🇲 , and enter one flag at a time only!')
            return
        }
            customRole = `I'm from ${getCollectionFromEmoji(args)}!`
        try{
            if (!msg.member.roles.cache.find((r => r.name === customRole))){
                let rol = msg.member.guild.roles.cache.find(r => r.name === customRole)
                msg.guild.members.cache.get(msg.author.id).roles.add(rol)
                .then(msg.react('👍'))
                .catch(err=>msg.channel.send("Couldn't find your role, please reach out to an Admin"))
            }
            else msg.channel.send("you already have the country assigned role!")
        }catch(e){
            msg.channel.send('Something seems wrong, maybe your country tag is not available at the moment, please reach out to a moderator or an admin! Sorry for the inconvienience! ')
            console.log(e)
        }
    }
}