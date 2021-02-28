"use strict";

channels = ['815612385909276693'];

var _require = require('./flag-emojis'),
    Country = _require.Country,
    countries = _require.countries;

module.exports = function (bot) {
  bot.on('message', function (msg) {
    var content = msg.content,
        channel = msg.channel,
        author = msg.author;
    if (!channels.includes(channel)) return;

    if (msg.content === "!test") {
      console.log(msg.content);
    }
  });
};