"use strict";

var _require = require('./config.json'),
    prefix = _require.prefix,
    youtube_link = _require.youtube_link,
    moderator_roles = _require.moderator_roles,
    NOTHING_SPECIAL = _require.NOTHING_SPECIAL,
    flag_drop = _require.flag_drop,
    testing_channels = _require.testing_channels,
    profile_channel = _require.profile_channel;

var Discord = require('discord.js');

var bot = new Discord.Client({
  partials: ["MESSAGE", "CHANNEL", "REACTION"]
});

var polls = require('./polls');

var fs = require('fs'); //const MessageModel = require('./database/message');
//const database = require('./database/database');


var rolereaction = require('./commands/rolereaction');

var _require2 = require('./commands/rolereaction'),
    run = _require2.run;

var flagDrop = require('./flag-drop'); //const reactRole = require('./commands/react-role')
//const { env } = require('process')


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
  polls(bot); //database.then(()=>console.log('MongoDB is Connected!')).catch(err=>console.log(err))
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
bot.on('messageReactionAdd', function _callee(reaction, user) {
  var role, _role, _role2;

  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          if (!reaction.message.partial) {
            _context.next = 3;
            break;
          }

          _context.next = 3;
          return regeneratorRuntime.awrap(reaction.message.fetch());

        case 3:
          if (!reaction.partial) {
            _context.next = 6;
            break;
          }

          _context.next = 6;
          return regeneratorRuntime.awrap(reaction.fetch());

        case 6:
          if (!user.bot) {
            _context.next = 8;
            break;
          }

          return _context.abrupt("return");

        case 8:
          if (reaction.message.guild) {
            _context.next = 10;
            break;
          }

          return _context.abrupt("return");

        case 10:
          if (!profile_channel.includes(reaction.message.channel.id)) {
            _context.next = 25;
            break;
          }

          if (!(reaction.emoji.name === '1️⃣')) {
            _context.next = 16;
            break;
          }

          console.log('yes first given');
          role = reaction.message.guild.roles.cache.find(function (r) {
            return r.name === "he/him";
          });
          _context.next = 16;
          return regeneratorRuntime.awrap(reaction.message.guild.members.cache.get(user.id).roles.add(role));

        case 16:
          if (!(reaction.emoji.name === '2️⃣')) {
            _context.next = 21;
            break;
          }

          console.log('yes second given');
          _role = reaction.message.guild.roles.cache.find(function (r) {
            return r.name.toLowerCase() === "she/her";
          });
          _context.next = 21;
          return regeneratorRuntime.awrap(reaction.message.guild.members.cache.get(user.id).roles.add(_role));

        case 21:
          if (!(reaction.emoji.name === '3️⃣')) {
            _context.next = 25;
            break;
          }

          _role2 = reaction.message.guild.roles.cache.find(function (r) {
            return r.name.toLowerCase() === "they/them";
          });
          _context.next = 25;
          return regeneratorRuntime.awrap(reaction.message.guild.members.cache.get(user.id).roles.add(_role2));

        case 25:
        case "end":
          return _context.stop();
      }
    }
  });
});
bot.login(NOTHING_SPECIAL);