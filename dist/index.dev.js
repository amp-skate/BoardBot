"use strict";

var Discord = require('discord.js');

var bot = new Discord.Client();

var tk = require('./config.json');

var react = require('./reaction-roles');

var polls = require('./polls');

bot.on('ready', function () {
  console.log('Board bot is online');
  react(bot);
});
bot.on('message', function (msg) {
  if (msg.content === "!ping") {
    msg.channel.send('pong');
  }
});
bot.login(tk.token);