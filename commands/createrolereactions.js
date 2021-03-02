const {MessageCollector} = require('discord.js')
function removeEmojis(string) {
    var regex = /(?:[\u2700-\u27bf]|(?:\ud83c[\udde6-\uddff]){2}|[\ud800-\udbff][\udc00-\udfff]|[\u0023-\u0039]\ufe0f?\u20e3|\u3299|\u3297|\u303d|\u3030|\u24c2|\ud83c[\udd70-\udd71]|\ud83c[\udd7e-\udd7f]|\ud83c\udd8e|\ud83c[\udd91-\udd9a]|\ud83c[\udde6-\uddff]|\ud83c[\ude01-\ude02]|\ud83c\ude1a|\ud83c\ude2f|\ud83c[\ude32-\ude3a]|\ud83c[\ude50-\ude51]|\u203c|\u2049|[\u25aa-\u25ab]|\u25b6|\u25c0|[\u25fb-\u25fe]|\u00a9|\u00ae|\u2122|\u2139|\ud83c\udc04|[\u2600-\u26FF]|\u2b05|\u2b06|\u2b07|\u2b1b|\u2b1c|\u2b50|\u2b55|\u231a|\u231b|\u2328|\u23cf|[\u23e9-\u23f3]|[\u23f8-\u23fa]|\ud83c\udccf|\u2934|\u2935|[\u2190-\u21ff])/g;
    return string.replace(regex, "");
}

function isOnlyEmoji(string) {
    return !removeEmojis(string);
}
let msgCollectorFilter = (newMsg, originalMsg) => {
    let {cache} = originalMsg.guild.emojis;
    if(newMsg.author.id !== originalMsg.author.id) return false
    let [emojiName, roleName]  = originalMsg.content.split(/,\s+/)
    if(!emojiName && !roleName) return false    
    //TODO : Update for server emojis 
    let emoji = emojiName
    if(!isOnlyEmoji(emoji)){
        originalMsg.channel.send("Emoji does not exist, Try again")
        .then(msg => msg.delete({timeout: 2000}))
        .catch(err => console.log(err))
        return false
    }
    let role = originalMsg.guild.roles.cache.find(role=>role.name.toLowerCase() === roleName.toLowerCase())
    if(!role) {
        originalMsg.channel.send("Role does not exist, Try again")
        .then(msg => msg.delete({timeout: 2000}))
        .catch(err => console.log(err))
        return false
    }
    return true

}

module.exports = {
    name:"createrolereaction",
    async execute(client, message, args) {
        if(args.length !==1){
            let msg = await message.channel.send("Too many arguments!,must provide only one message id!")
            await msg.delete({timeout: 3500}).catch(err => console.log(err))
        }else{
            try {
                let fetchedmessage = await message.channel.messages.fetch(args)
                if(fetchedmessage) { 
                    message.channel.send('Please provide all the emojis and rolenames next to each other, for example:\n:pleading_face:, Skateboarding')
                    let collector  = new MessageCollector(message.channel, msgCollectorFilter.bind(null, message))
                    collector.on('collect', msg=> {
                        //TODO : React the fetched reaction to the fetched message
                    })
                }
            }catch(err){
                console.log(err)
                let msg = await message.channel.send("Invalid Id. Message was not found.")
                await msg.delete({timeout:3500}).catch(err => console.log(err))
            }
            
        }
    },
    aliases : [],
    description: 'Enables a message to listen to reactions to give roles'
}