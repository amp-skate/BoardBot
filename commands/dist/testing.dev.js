"use strict";

var Discord = require('discord.js');

var _require = require('../config.json'),
    moderator_roles = _require.moderator_roles,
    profile_channel = _require.profile_channel,
    testing_channels = _require.testing_channels;

function removeEmojis(string) {
  var regex = /(?:[\u2700-\u27bf]|(?:\ud83c[\udde6-\uddff]){2}|[\ud800-\udbff][\udc00-\udfff]|[\u0023-\u0039]\ufe0f?\u20e3|\u3299|\u3297|\u303d|\u3030|\u24c2|\ud83c[\udd70-\udd71]|\ud83c[\udd7e-\udd7f]|\ud83c\udd8e|\ud83c[\udd91-\udd9a]|\ud83c[\udde6-\uddff]|\ud83c[\ude01-\ude02]|\ud83c\ude1a|\ud83c\ude2f|\ud83c[\ude32-\ude3a]|\ud83c[\ude50-\ude51]|\u203c|\u2049|[\u25aa-\u25ab]|\u25b6|\u25c0|[\u25fb-\u25fe]|\u00a9|\u00ae|\u2122|\u2139|\ud83c\udc04|[\u2600-\u26FF]|\u2b05|\u2b06|\u2b07|\u2b1b|\u2b1c|\u2b50|\u2b55|\u231a|\u231b|\u2328|\u23cf|[\u23e9-\u23f3]|[\u23f8-\u23fa]|\ud83c\udccf|\u2934|\u2935|[\u2190-\u21ff])/g;
  return string.replace(regex, "");
}

function isOnlyEmoji(string) {
  return !removeEmojis(string);
}

module.exports = {
  name: "testing",
  description: "testing function for the dev",
  execute: function execute(msg, args) {
    var sent1, sent2;
    return regeneratorRuntime.async(function execute$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            /*let embed = new Discord.MessageEmbed()
            .setTitle('Choose your profile!')
            .setColor('GREEN')
            .setDescription('React to the emojis to gain the roles!')
            let msgEmbed = await msg.channel.send(embed)
            msgEmbed.react('1️⃣')
            msgEmbed.react('2️⃣') 
            msgEmbed.react('3️⃣')*/
            msg.channel.send("Hey there! Let's get to know you a little better. React to these posts to get these roles added to your profile:*");
            _context.next = 3;
            return regeneratorRuntime.awrap(msg.channel.send("**What pronouns do you go by?\n:one: He/Him\n:two: She/Her\n:three: They/Them**\n"));

          case 3:
            sent1 = _context.sent;
            sent.react('1️⃣');
            sent.react('2️⃣');
            sent.react('3️⃣');
            msg.channel.send("What's your experience level in terms of longboarding?");
            _context.next = 10;
            return regeneratorRuntime.awrap(msg.channel.send("**What's your experiece in terms of longboarding?\n:baby: Beginner\n:child: Intermediate\n:person_curly_hair: Advanced\n:older_adult: Professional\n:mage: Wizard**"));

          case 10:
            sent2 = _context.sent;
            sent2.react('👶');
            sent2.react('🧒');
            sent2.react('');

          case 14:
          case "end":
            return _context.stop();
        }
      }
    });
  }
};