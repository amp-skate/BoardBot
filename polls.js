const {
    polls_channel,
    common_role
} = require('./config.json')
module.exports = (bot) => {
    bot.on('message', msg => {
        const {
            channel,
            author,
            content
        } = msg
        if (!channels.includes(channel.id)) return;

        if (r => r.id === common_role) {
            var whole = content
            const eachLine = content.split('\n');
            for (const line of eachLine) {
                const split = line.split(' ');
                const emoji = split[0].trim();
                if(!isOnlyEmoji(emoji)) continue
                msg.react(emoji)
            }
        }
    })
}