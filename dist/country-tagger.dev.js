"use strict";

var _require = require('./config.json'),
    moderator_roles = _require.moderator_roles,
    flag_drop = _require.flag_drop;

var _require2 = require('./country-roles.json'),
    name = _require2.name,
    emoji = _require2.emoji;

function getCountry(FlagEmoji) {}

module.exports = function (bot) {
  bot.on('message', function (msg) {
    var content = msg.content,
        channel = msg.channel,
        author = msg.author;
    var countrytoassign = matchedcountries[0];
  });
};