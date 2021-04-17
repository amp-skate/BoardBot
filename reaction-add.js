const {
    profile_channel,
} = require('./config.json')

module.exports = (bot) => {
    bot.on('messageReactionAdd', async (reaction, user)=>{
        if(reaction.message.partial) await reaction.message.fetch();
        if(reaction.partial) await reaction.fetch();
    
        if(user.bot) return;
        if(!reaction.message.guild) return;
        //switch(reaction.emoji.name)
        if(profile_channel.includes(reaction.message.channel.id)){
            let profile_role = reaction.message.guild.roles.cache.find(r=>r.name === "⁣  ⁣⁣  ⁣⁣⁣ ⁣⁣─── ⁣ ⁣⁣Profile ⁣ ─── ⁣ ⁣⁣ ⁣ ⁣  ⁣")
            await reaction.message.guild.members.cache.get(user.id).roles.add(profile_role)
            if(reaction.emoji.name === '1️⃣'){
                console.log('yes first given')
                let role = reaction.message.guild.roles.cache.find(r=>r.name === "he/him")
                await reaction.message.guild.members.cache.get(user.id).roles.add(role)
            }
            if(reaction.emoji.name === '2️⃣'){
                console.log('yes second given')
                let role = reaction.message.guild.roles.cache.find(r=>r.name.toLowerCase() === "she/her")
                await reaction.message.guild.members.cache.get(user.id).roles.add(role)
            }
            if(reaction.emoji.name === '3️⃣'){
                let role = reaction.message.guild.roles.cache.find(r=>r.name.toLowerCase() === "they/them")
                await reaction.message.guild.members.cache.get(user.id).roles.add(role)
            }
            if(reaction.emoji.name === '👶'){
                let role = reaction.message.guild.roles.cache.find(r=>r.name.toLowerCase() === "beginner")
                await reaction.message.guild.members.cache.get(user.id).roles.add(role)
            }
            if(reaction.emoji.name === '🧒'){
                let role = reaction.message.guild.roles.cache.find(r=>r.name.toLowerCase() === "intermediate")
                await reaction.message.guild.members.cache.get(user.id).roles.add(role)
            }
            if(reaction.emoji.name === '🙇'){
                let role = reaction.message.guild.roles.cache.find(r=>r.name.toLowerCase() === "advanced")
                await reaction.message.guild.members.cache.get(user.id).roles.add(role)
            }
            if(reaction.emoji.name === '🧓'){
                let role = reaction.message.guild.roles.cache.find(r=>r.name.toLowerCase() === "professional")
                await reaction.message.guild.members.cache.get(user.id).roles.add(role)
            }
            
            if(reaction.emoji.name === '🧙'){
                let role = reaction.message.guild.roles.cache.find(r=>r.name.toLowerCase() === "wizard")
                await reaction.message.guild.members.cache.get(user.id).roles.add(role)
            }
            if(reaction.emoji.name === '🅰️'){
                let role = reaction.message.guild.roles.cache.find(r=>r.name.toLowerCase() === "lgbtq+")
                await reaction.message.guild.members.cache.get(user.id).roles.add(role)
            }
            if(reaction.emoji.name === '🅱️'){
                let role = reaction.message.guild.roles.cache.find(r=>r.name.toLowerCase() === "bipoc")
                await reaction.message.guild.members.cache.get(user.id).roles.add(role)
            }
            if(reaction.emoji.name === '🇦'){
                let role = reaction.message.guild.roles.cache.find(r=>r.name.toLowerCase() === "cruising")
                await reaction.message.guild.members.cache.get(user.id).roles.add(role)
            }
            if(reaction.emoji.name === '🇧'){
                let role = reaction.message.guild.roles.cache.find(r=>r.name.toLowerCase() === "dancing")
                await reaction.message.guild.members.cache.get(user.id).roles.add(role)
            }
            if(reaction.emoji.name === '🇨'){
                let role = reaction.message.guild.roles.cache.find(r=>r.name.toLowerCase() === "freeride")
                await reaction.message.guild.members.cache.get(user.id).roles.add(role)
            }
            if(reaction.emoji.name === '🇩'){
                let role = reaction.message.guild.roles.cache.find(r=>r.name.toLowerCase() === "freestyle")
                await reaction.message.guild.members.cache.get(user.id).roles.add(role)
            }
            if(reaction.emoji.name === '🇪'){
                let role = reaction.message.guild.roles.cache.find(r=>r.name.toLowerCase() === "downhill")
                await reaction.message.guild.members.cache.get(user.id).roles.add(role)
            }
            if(reaction.emoji.name === '🇫'){
                let role = reaction.message.guild.roles.cache.find(r=>r.name.toLowerCase() === "ldp")
                await reaction.message.guild.members.cache.get(user.id).roles.add(role)
            }
            if(reaction.emoji.name === '🇬'){
                let role = reaction.message.guild.roles.cache.find(r=>r.name.toLowerCase() === "")
                await reaction.message.guild.members.cache.get(user.id).roles.add(role)
            }
            if(reaction.emoji.name === '🇭'){
                let role = reaction.message.guild.roles.cache.find(r=>r.name.toLowerCase() === "")
                await reaction.message.guild.members.cache.get(user.id).roles.add(role)
            }
            if(reaction.emoji.name === '🇯'){
                let role = reaction.message.guild.roles.cache.find(r=>r.name.toLowerCase() === "")
                await reaction.message.guild.members.cache.get(user.id).roles.add(role)
            }
            if(reaction.emoji.name === '🇰'){
                let role = reaction.message.guild.roles.cache.find(r=>r.name.toLowerCase() === "")
                await reaction.message.guild.members.cache.get(user.id).roles.add(role)
            }
            if(reaction.emoji.name === '🇱'){
                let role = reaction.message.guild.roles.cache.find(r=>r.name.toLowerCase() === "")
                await reaction.message.guild.members.cache.get(user.id).roles.add(role)
            }
            if(reaction.emoji.name === '🇲'){
                let role = reaction.message.guild.roles.cache.find(r=>r.name.toLowerCase() === "")
                await reaction.message.guild.members.cache.get(user.id).roles.add(role)
            }
            if(reaction.emoji.name === '🇳'){
                let role = reaction.message.guild.roles.cache.find(r=>r.name.toLowerCase() === "")
                await reaction.message.guild.members.cache.get(user.id).roles.add(role)
            }
            if(reaction.emoji.name === '🇴'){
                let role = reaction.message.guild.roles.cache.find(r=>r.name.toLowerCase() === "")
                await reaction.message.guild.members.cache.get(user.id).roles.add(role)
            }
            if(reaction.emoji.name === '🇵'){
                let role = reaction.message.guild.roles.cache.find(r=>r.name.toLowerCase() === "")
                await reaction.message.guild.members.cache.get(user.id).roles.add(role)
            }
            if(reaction.emoji.name === '🇶'){
                let role = reaction.message.guild.roles.cache.find(r=>r.name.toLowerCase() === "")
                await reaction.message.guild.members.cache.get(user.id).roles.add(role)
            }
            if(reaction.emoji.name === '🇷'){
                let role = reaction.message.guild.roles.cache.find(r=>r.name.toLowerCase() === "")
                await reaction.message.guild.members.cache.get(user.id).roles.add(role)
            }
            if(reaction.emoji.name === '🇸'){
                let role = reaction.message.guild.roles.cache.find(r=>r.name.toLowerCase() === "")
                await reaction.message.guild.members.cache.get(user.id).roles.add(role)
            }
            if(reaction.emoji.name === '🇹'){
                let role = reaction.message.guild.roles.cache.find(r=>r.name.toLowerCase() === "")
                await reaction.message.guild.members.cache.get(user.id).roles.add(role)
            }
            if(reaction.emoji.name === '🇺'){
                let role = reaction.message.guild.roles.cache.find(r=>r.name.toLowerCase() === "")
                await reaction.message.guild.members.cache.get(user.id).roles.add(role)
            }
            if(reaction.emoji.name === '🇻'){
                let role = reaction.message.guild.roles.cache.find(r=>r.name.toLowerCase() === "")
                await reaction.message.guild.members.cache.get(user.id).roles.add(role)
            }
            if(reaction.emoji.name === '🇼'){
                let role = reaction.message.guild.roles.cache.find(r=>r.name.toLowerCase() === "")
                await reaction.message.guild.members.cache.get(user.id).roles.add(role)
            }
            if(reaction.emoji.name === '🇽'){
                let role = reaction.message.guild.roles.cache.find(r=>r.name.toLowerCase() === "")
                await reaction.message.guild.members.cache.get(user.id).roles.add(role)
            }
            if(reaction.emoji.name === '🇾'){
                let role = reaction.message.guild.roles.cache.find(r=>r.name.toLowerCase() === "")
                await reaction.message.guild.members.cache.get(user.id).roles.add(role)
            }
            if(reaction.emoji.name === '🇿'){
                let role = reaction.message.guild.roles.cache.find(r=>r.name.toLowerCase() === "")
                await reaction.message.guild.members.cache.get(user.id).roles.add(role)
            }
            if(reaction.emoji.name === '🤝'){
                let role = reaction.message.guild.roles.cache.find(r=>r.name.toLowerCase() === "i'm here to make friends!")
                await reaction.message.guild.members.cache.get(user.id).roles.add(role)
            }
            if(reaction.emoji.name === '🛹'){
                let role = reaction.message.guild.roles.cache.find(r=>r.name.toLowerCase() === "i'm here to get better!")
                await reaction.message.guild.members.cache.get(user.id).roles.add(role)
            }
            if(reaction.emoji.name === '🤡'){
                let role = reaction.message.guild.roles.cache.find(r=>r.name.toLowerCase() === "i'm here for the memes")
                await reaction.message.guild.members.cache.get(user.id).roles.add(role)
            }
            if(reaction.emoji.name === '🦖'){
                let role = reaction.message.guild.roles.cache.find(r=>r.name.toLowerCase() === "1950-1959")
                await reaction.message.guild.members.cache.get(user.id).roles.add(role)
            } 
            if(reaction.emoji.name === '🐢'){
                let role = reaction.message.guild.roles.cache.find(r=>r.name.toLowerCase() === "1960-1969")
                await reaction.message.guild.members.cache.get(user.id).roles.add(role)
            } 
            if(reaction.emoji.name === '🦅'){
                let role = reaction.message.guild.roles.cache.find(r=>r.name.toLowerCase() === "1970-1979")
                await reaction.message.guild.members.cache.get(user.id).roles.add(role)
            } 
            if(reaction.emoji.name === '🦁'){
                let role = reaction.message.guild.roles.cache.find(r=>r.name.toLowerCase() === "1980-1989")
                await reaction.message.guild.members.cache.get(user.id).roles.add(role)
            } 
            if(reaction.emoji.name === '🐶'){
                let role = reaction.message.guild.roles.cache.find(r=>r.name.toLowerCase() === "1990-1999")
                await reaction.message.guild.members.cache.get(user.id).roles.add(role)
            } 
            if(reaction.emoji.name === '🐒'){
                let role = reaction.message.guild.roles.cache.find(r=>r.name.toLowerCase() === "2000-2009")
                await reaction.message.guild.members.cache.get(user.id).roles.add(role)
            } 
            if(reaction.emoji.name === '🪱'){
                let role = reaction.message.guild.roles.cache.find(r=>r.name.toLowerCase() === "2010-2019")
                await reaction.message.guild.members.cache.get(user.id).roles.add(role)
            }  
        }
    })
}
