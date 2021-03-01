/*const {
    MessageReaction
} = require("discord.js");
const {
    execute
} = require("./testing");

function removeEmojis(string) {
    var regex = /(?:[\u2700-\u27bf]|(?:\ud83c[\udde6-\uddff]){2}|[\ud800-\udbff][\udc00-\udfff]|[\u0023-\u0039]\ufe0f?\u20e3|\u3299|\u3297|\u303d|\u3030|\u24c2|\ud83c[\udd70-\udd71]|\ud83c[\udd7e-\udd7f]|\ud83c\udd8e|\ud83c[\udd91-\udd9a]|\ud83c[\udde6-\uddff]|\ud83c[\ude01-\ude02]|\ud83c\ude1a|\ud83c\ude2f|\ud83c[\ude32-\ude3a]|\ud83c[\ude50-\ude51]|\u203c|\u2049|[\u25aa-\u25ab]|\u25b6|\u25c0|[\u25fb-\u25fe]|\u00a9|\u00ae|\u2122|\u2139|\ud83c\udc04|[\u2600-\u26FF]|\u2b05|\u2b06|\u2b07|\u2b1b|\u2b1c|\u2b50|\u2b55|\u231a|\u231b|\u2328|\u23cf|[\u23e9-\u23f3]|[\u23f8-\u23fa]|\ud83c\udccf|\u2934|\u2935|[\u2190-\u21ff])/g;
    return string.replace(regex, "");
}
var emojiandroles = []

function getValueFromKey(dict, args) {
    const matching =
        dict.find(element => element.emoji == args)
    return matching.role
}

function isOnlyEmoji(string) {
    return !removeEmojis(string);
}
const {
    reaction_channels,
    moderator_roles,
    common_role
} = require('../config.json');
const polls = require("../polls");
module.exports = (bot) => {
    bot.on('message', (msg) => {
        const {
            channel,
            author,
            content
        } = msg
        var mes = content
        if (reaction_channels.includes(channel.id)) {
            emojiandroles = []
            if (!msg.member.roles.cache.find((r) => moderator_roles.includes(r.name))) return

            const eachLine = content.split('\n');
            for (const line of eachLine) {
                const split = line.split(' ');
                const emoji = split[0].trim();
                const role = split[1].trim();

                if (!isOnlyEmoji(emoji)) {
                    continue;
                }
                emojiandroles.push({
                    "emoji": emoji,
                    "role": role
                })
            }
        } else {
            return
        }
    })
    bot.on('messageReactionAdd', async (reaction, user) => {
        if (reaction.partial) { //this whole section just checks if the reaction is partial
            try {
                await reaction.fetch(); //fetches reaction because not every reaction is stored in the cache
            } catch (error) {
                console.error('Fetching message failed: ', error);
                return;
            }
        }
        if (!user.bot) {
            //if the user reacted with the right emoji
            
                //role = getValueFromKey(emojiandroles,reaction.emoji); //finds role you want to assign (you could also user .name instead of .id)
                var role = getValueFromKey(emojiandroles, reaction.emoji.name)
                //const role = reaction.message.guild.roles.cache.find(r => r.name === yourRoleID);
                const {
                    guild
                } = reaction.message //store the guild of the reaction in variable

                const member = guild.members.cache.find(member => member.id === user.id); //find the member who reacted (because user and member are seperate things)
                
                //console.log(role); //assign selected role to member
            
        }
    })
}*/