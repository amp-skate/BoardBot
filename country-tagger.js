const {
    moderator_roles,
    flag_drop
} = require('./config.json')
import { Country, countries } from "./flag-emojis"

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