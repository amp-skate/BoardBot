channels = ['815612385909276693']
const {
    Country,
    countries
} = require('./flag-emojis')
module.exports = (bot) => {
    bot.on('message', msg =>{
        const {
            content, channel, author
        } = msg
        if(!channels.includes(channel)) return
        
        if(msg.content === "!test"){
            console.log(msg.content)
        }
    })
}