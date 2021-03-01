"use strict";

var _require = require("discord.js"),
    MessageReaction = _require.MessageReaction;

var _require2 = require("./testing"),
    execute = _require2.execute;

function removeEmojis(string) {
  var regex = /(?:[\u2700-\u27bf]|(?:\ud83c[\udde6-\uddff]){2}|[\ud800-\udbff][\udc00-\udfff]|[\u0023-\u0039]\ufe0f?\u20e3|\u3299|\u3297|\u303d|\u3030|\u24c2|\ud83c[\udd70-\udd71]|\ud83c[\udd7e-\udd7f]|\ud83c\udd8e|\ud83c[\udd91-\udd9a]|\ud83c[\udde6-\uddff]|\ud83c[\ude01-\ude02]|\ud83c\ude1a|\ud83c\ude2f|\ud83c[\ude32-\ude3a]|\ud83c[\ude50-\ude51]|\u203c|\u2049|[\u25aa-\u25ab]|\u25b6|\u25c0|[\u25fb-\u25fe]|\u00a9|\u00ae|\u2122|\u2139|\ud83c\udc04|[\u2600-\u26FF]|\u2b05|\u2b06|\u2b07|\u2b1b|\u2b1c|\u2b50|\u2b55|\u231a|\u231b|\u2328|\u23cf|[\u23e9-\u23f3]|[\u23f8-\u23fa]|\ud83c\udccf|\u2934|\u2935|[\u2190-\u21ff])/g;
  return string.replace(regex, "");
}

var emojiandroles = [];

function getValueFromKey(dict, args) {
  var matching = dict.find(function (element) {
    return element.emoji == args;
  });
  return matching.role;
}

function isOnlyEmoji(string) {
  return !removeEmojis(string);
}

var _require3 = require('../config.json'),
    reaction_channels = _require3.reaction_channels,
    moderator_roles = _require3.moderator_roles,
    common_role = _require3.common_role;

var polls = require("../polls");

module.exports = function (bot) {
  bot.on('message', function (msg) {
    var channel = msg.channel,
        author = msg.author,
        content = msg.content;
    var mes = content;

    if (reaction_channels.includes(channel.id)) {
      emojiandroles = [];
      if (!msg.member.roles.cache.find(function (r) {
        return moderator_roles.includes(r.name);
      })) return;
      var eachLine = content.split('\n');
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = eachLine[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var line = _step.value;
          var split = line.split(' ');
          var emoji = split[0].trim();
          var role = split[1].trim();

          if (!isOnlyEmoji(emoji)) {
            continue;
          }

          emojiandroles.push({
            "emoji": emoji,
            "role": role
          });
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
    } else {
      return;
    }
  });
  bot.on('messageReactionAdd', function _callee(reaction, user) {
    var role, guild, member;
    return regeneratorRuntime.async(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            if (!reaction.partial) {
              _context.next = 10;
              break;
            }

            _context.prev = 1;
            _context.next = 4;
            return regeneratorRuntime.awrap(reaction.fetch());

          case 4:
            _context.next = 10;
            break;

          case 6:
            _context.prev = 6;
            _context.t0 = _context["catch"](1);
            console.error('Fetching message failed: ', _context.t0);
            return _context.abrupt("return");

          case 10:
            if (!user.bot) {
              //if the user reacted with the right emoji
              if (!common_role.includes(user)) {
                //role = getValueFromKey(emojiandroles,reaction.emoji); //finds role you want to assign (you could also user .name instead of .id)
                role = getValueFromKey(emojiandroles, reaction.emoji.name);
                guild = reaction.message.guild; //store the guild of the reaction in variable

                member = guild.members.cache.find(function (member) {
                  return member.id === user.id;
                }); //find the member who reacted (because user and member are seperate things)
                //console.log(role); //assign selected role to member

                member.addRole(role);
              }
            }

          case 11:
          case "end":
            return _context.stop();
        }
      }
    }, null, null, [[1, 6]]);
  });
};