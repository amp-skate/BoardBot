const {
    moderator_roles,
    flag_drop
} = require('./config.json')
const {
    name, emoji
} = require('./country-roles.json')

function getCountry(FlagEmoji) {
    
}

module.exports = (bot) => {
    bot.on('message', msg => {
        const {
            content, channel, author
        } = msg;
        const countrytoassign = matchedcountries[0]
        
    })

}