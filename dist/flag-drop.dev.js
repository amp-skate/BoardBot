"use strict";

var _require = require('discord.js'),
    Emoji = _require.Emoji,
    Message = _require.Message;

var reg = /[\uD83C][\uDDE6-\uDDFF][\uD83C][\uDDE6-\uDDFF]/;

var country = require('./flag-emojis');

var _require2 = require('./config.json'),
    polls_channel = _require2.polls_channel;

function getCollectionFromEmoji(args) {
  var matching = country.find(function (element) {
    return element.emoji == args;
  });
  return matching.name;
}

module.exports = {
  name: "flag-drop",
  description: "testing code for the dev",
  execute: function execute(bot, msg) {
    var channel, content, args, customRole, rol;
    return regeneratorRuntime.async(function execute$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            channel = msg.channel, content = msg.content;
            args = msg.content.toLowerCase().trim();
            _context.prev = 2;

            if (!reg.test(args)) {
              _context.next = 8;
              break;
            }

            customRole = "I'm from ".concat(getCollectionFromEmoji(args), "!");

            try {
              if (!msg.member.roles.cache.find(function (r) {
                return r.name === customRole;
              })) {
                rol = msg.member.guild.roles.cache.find(function (r) {
                  return r.name === customRole;
                });
                msg.guild.members.cache.get(msg.author.id).roles.add(rol).then(msg.react('👍'))["catch"](function (err) {
                  return console.log(err);
                });
              } else msg.channel.send("you already have the country assigned role!");
            } catch (e) {
              msg.channel.send("couldn't find your assigned country role, Please reach out to an Admin! Sorry for the inconvenience");
            }

            _context.next = 11;
            break;

          case 8:
            if (reg.test(args)) {
              _context.next = 11;
              break;
            }

            msg.channel.send('Please enter only the flag, like : 🇺🇲 and only 1 flag at a time! Dont enter anything else in this channel!');
            return _context.abrupt("return");

          case 11:
            _context.next = 17;
            break;

          case 13:
            _context.prev = 13;
            _context.t0 = _context["catch"](2);
            msg.channel.send('Please enter only the flag, like this -> 🇺🇲 and, only 1 flag at a time! Dont write anything else in this channel!');
            console.log(_context.t0);

          case 17:
          case "end":
            return _context.stop();
        }
      }
    }, null, null, [[2, 13]]);
  }
};
/*
        if(!reg.test(args)){
            msg.channel.send('Please enter a valid country flag only, like 🇺🇲 , and enter one flag at a time only! Do not enter anything else')
            
        }
            let customRole = `I'm from ${getCollectionFromEmoji(args)}!`
        try{
            if (!msg.member.roles.cache.find((r => r.name === customRole))){
                let rol = msg.member.guild.roles.cache.find(r => r.name === customRole)
                msg.guild.members.cache.get(msg.author.id).roles.add(rol)
                msg.react('👍')
            }
            else msg.channel.send("you already have the country assigned role!")
        }catch(e){
            msg.channel.send('Something seems wrong, maybe your country tag is not available at the moment, please reach out to a moderator or an admin! Sorry for the inconvienience! ')
            console.log(e)
        }*/