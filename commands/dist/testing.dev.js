"use strict";

var _require = require('discord.js'),
    Emoji = _require.Emoji,
    Message = _require.Message;

var country = require('../flag-emojis');

var _require2 = require('emoji-flags'),
    countryCode = _require2.countryCode;

var _require3 = require('../config.json'),
    polls_channel = _require3.polls_channel; //var emojis = require('../flag-emojis')


function getCountryFromEmoji(args) {
  return country.emoji.includes(args);
}

module.exports = {
  name: "testing",
  description: "testing code for the dev",
  execute: function execute(msg, args) {
    var channel = msg.channel;
    console.log(getCountryFromEmoji(args)); //console.log(country)
  }
};