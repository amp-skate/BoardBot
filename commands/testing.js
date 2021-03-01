const {
    Emoji,
    Message
} = require('discord.js')
const reg = /[\uD83C][\uDDE6-\uDDFF][\uD83C][\uDDE6-\uDDFF]/;
const country = require('../flag-emojis')

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

        try{
            msg.channel.send(`I'm From ${getCollectionFromEmoji(args)}`)
 
        }catch(e){
            msg.channel.send('Something seems wrong, maybe your country tag is not available at the moment, please reach out to a moderator or an admin! Sorry for the inconvienience! ')
            console.log(e)
        }

    }
}