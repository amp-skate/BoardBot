"use strict";

var _require = require('./config.json'),
    prefix = _require.prefix,
    youtube_link = _require.youtube_link,
    moderator_roles = _require.moderator_roles,
    flag_drop = _require.flag_drop;

var dotenv = require('dotenv');

dotenv.config();

var Discord = require('discord.js');

var bot = new Discord.Client({
  partials: ["MESSAGE", "CHANNEL", "REACTION"]
});

var polls = require('./polls');

var fs = require('fs');

var flagDrop = require('./flag-drop');

var reactionAdd = require('./reaction-add');

var reactionRemove = require('./reaction-remove');

bot.commands = new Discord.Collection();
var commandFiles = fs.readdirSync('./commands/').filter(function (file) {
  return file.endsWith('.js');
});
var _iteratorNormalCompletion = true;
var _didIteratorError = false;
var _iteratorError = undefined;

try {
  for (var _iterator = commandFiles[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
    var file = _step.value;

    var command = require("./commands/".concat(file));

    bot.commands.set(command.name, command);
  }
} catch (err) {
  _didIteratorError = true;
  _iteratorError = err;
} finally {
  try {
    if (!_iteratorNormalCompletion && _iterator["return"] != null) {
      _iterator["return"]();
    }
  } finally {
    if (_didIteratorError) {
      throw _iteratorError;
    }
  }
}

bot.on('ready', function () {
  console.log('Board bot is online');
  polls(bot);
  reactionAdd(bot);
  reactionRemove(bot);
});
bot.on('message', function (msg) {
  var args = msg.content.slice(prefix.length).split(/ +/);
  var command = args.shift().toLowerCase();

  if (command === "ping") {
    bot.commands.get('ping').execute(msg, args);
  } else if (command === "youtube" || command === "yt") {
    bot.commands.get('youtube').execute(msg, args, youtube_link);
  } else if (flag_drop.includes(msg.channel.id) && !msg.author.bot) {
    flagDrop.execute(bot, msg);
  }
});
bot.login(process.env.DISCORD_BOT_KEY);