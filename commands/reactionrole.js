const reactRole = require("./react-role");

const {
    reaction_channels
} = require('../config.json')
module.exports = {
    name: 'reactionrole',
    description: "sets up a reaction role message!",
    execute(msg, args, Discord, client) {
        if(!reaction_channels.includes(msg.channel.id)) return
    
        const emoji_1 = "🇦"
        const emoji_2 = "🇧"
        const emoji_3 = "🇨"
        const emoji_4 = "🇩"
    }
}