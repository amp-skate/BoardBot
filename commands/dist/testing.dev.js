"use strict";

var _require = require('discord.js'),
    Emoji = _require.Emoji,
    Message = _require.Message;

var reg = /[\uD83C][\uDDE6-\uDDFF][\uD83C][\uDDE6-\uDDFF]/;

var country = require('../flag-emojis');

var customRole;

var _require2 = require('../config.json'),
    polls_channel = _require2.polls_channel;

function getCollectionFromEmoji(args) {
  var matching = country.find(function (element) {
    return element.emoji == args;
  });
  return matching.name;
}

module.exports = {
  name: "testing",
  description: "testing code for the dev",
  execute: function execute(msg, args) {
    var channel = msg.channel,
        content = msg.content;

    if (!reg.test(args)) {
      msg.channel.send('Please enter a valid country flag emoji like !flag 🇺🇲 , and enter one flag at a time only!');
      return;
    }

    customRole = "I'm from ".concat(getCollectionFromEmoji(args), "!");

    try {
      if (!msg.member.roles.cache.find(function (r) {
        return r.name === customRole;
      })) {
        var rol = msg.member.guild.roles.cache.find(function (r) {
          return r.name === customRole;
        });
        msg.guild.members.cache.get(msg.author.id).roles.add(rol);
        msg.react('👍');
      } else msg.channel.send("you already have the country assigned role!");
    } catch (e) {
      msg.channel.send('Something seems wrong, maybe your country tag is not available at the moment, please reach out to a moderator or an admin! Sorry for the inconvienience! ');
      console.log(e);
    }
  }
};