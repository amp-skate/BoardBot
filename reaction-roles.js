const {
    Message,
    MessageReaction
} = require("discord.js")

const channels = []
const roles = {
    "React Role 1": "",
    "React Role 2": "",
    "React Role 3": "",
    "React Role 4": ""
}

module.exports = (bot) => {
    bot.on('message', msg => {
        const {
            channel,
            author,
            content
        } = msg
        if (!channels.includes(channel.id)) return;

        if (msg.member.roles.cache.find(r => r.name === "Support")) {
            const eachLine = content.split('\n');
            for (const line of eachLine) {
                const split = line.split(' ');
                const emoji = split[0].trim();
                try {
                    msg.react(emoji);
                } catch (e) {
                    console.log('Opps');
                }
            }
        }
    })
    
}