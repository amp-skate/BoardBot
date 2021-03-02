"use strict";

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var _require = require('discord.js'),
    MessageCollector = _require.MessageCollector;

function removeEmojis(string) {
  var regex = /(?:[\u2700-\u27bf]|(?:\ud83c[\udde6-\uddff]){2}|[\ud800-\udbff][\udc00-\udfff]|[\u0023-\u0039]\ufe0f?\u20e3|\u3299|\u3297|\u303d|\u3030|\u24c2|\ud83c[\udd70-\udd71]|\ud83c[\udd7e-\udd7f]|\ud83c\udd8e|\ud83c[\udd91-\udd9a]|\ud83c[\udde6-\uddff]|\ud83c[\ude01-\ude02]|\ud83c\ude1a|\ud83c\ude2f|\ud83c[\ude32-\ude3a]|\ud83c[\ude50-\ude51]|\u203c|\u2049|[\u25aa-\u25ab]|\u25b6|\u25c0|[\u25fb-\u25fe]|\u00a9|\u00ae|\u2122|\u2139|\ud83c\udc04|[\u2600-\u26FF]|\u2b05|\u2b06|\u2b07|\u2b1b|\u2b1c|\u2b50|\u2b55|\u231a|\u231b|\u2328|\u23cf|[\u23e9-\u23f3]|[\u23f8-\u23fa]|\ud83c\udccf|\u2934|\u2935|[\u2190-\u21ff])/g;
  return string.replace(regex, "");
}

function isOnlyEmoji(string) {
  return !removeEmojis(string);
}

var MessageModel = require('../database/message');

var msgCollectorFilter = function msgCollectorFilter(newMsg, originalMsg) {
  return newMsg.author.id === originalMsg.author.id;
};

module.exports = {
  name: "createrolereaction",
  execute: function execute(client, message, args) {
    var msg, fetchedMessage, collector, emojiRoleMappings, _msg;

    return regeneratorRuntime.async(function execute$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            if (!(args.length !== 1)) {
              _context.next = 8;
              break;
            }

            _context.next = 3;
            return regeneratorRuntime.awrap(message.channel.send("Too many arguments!,must provide only one message id!"));

          case 3:
            msg = _context.sent;
            _context.next = 6;
            return regeneratorRuntime.awrap(msg["delete"]({
              timeout: 3500
            })["catch"](function (err) {
              return console.log(err);
            }));

          case 6:
            _context.next = 29;
            break;

          case 8:
            _context.prev = 8;
            _context.next = 11;
            return regeneratorRuntime.awrap(message.channel.messages.fetch(args));

          case 11:
            fetchedMessage = _context.sent;

            if (!fetchedMessage) {
              _context.next = 19;
              break;
            }

            _context.next = 15;
            return regeneratorRuntime.awrap(message.channel.send("Please provide all the emojis and rolenames next to each other, for example:\n:pleading_face:, Skateboarding"));

          case 15:
            collector = new MessageCollector(message.channel, msgCollectorFilter.bind(null, message));
            emojiRoleMappings = new Map();
            collector.on('collect', function (msg) {
              //TODO : React the fetched reaction to the fetched message
              var cache = msg.guild.emojis.cache;

              if (msg.content.toLowerCase() === '?done') {
                collector.stop('the done command was issued');
                return;
              }

              var _msg$content$split = msg.content.split(','),
                  _msg$content$split2 = _slicedToArray(_msg$content$split, 2),
                  emojiName = _msg$content$split2[0],
                  roleName = _msg$content$split2[1];

              if (!emojiName && !roleName) return; //TODO check for server emojis too

              var emoji = emojiName.trim();

              if (!isOnlyEmoji(emoji)) {
                msg.channel.send("Emoji does not exist, Try again").then(function (msg) {
                  return msg["delete"]({
                    timeout: 4000
                  });
                })["catch"](function (err) {
                  return console.log(err);
                });
                return;
              }

              var role = msg.guild.roles.cache.find(function (role) {
                return role.name.toLowerCase() === roleName.toLowerCase().trim();
              });

              if (!role) {
                msg.channel.send("Role does not exist, Try again").then(function (msg) {
                  return msg["delete"]({
                    timeout: 4000
                  });
                })["catch"](function (err) {
                  return console.log(err);
                });
                return;
              } //TODO : Update for server emojis 


              fetchedMessage.react(emoji).then(function (emoji) {
                return console.log('reacted');
              })["catch"](function (err) {
                return console.log(err);
              });
              emojiRoleMappings.set(emoji, role.id);
            });
            collector.on('end', function (collected, reason) {
              console.log(emojiRoleMappings);
            });

          case 19:
            _context.next = 29;
            break;

          case 21:
            _context.prev = 21;
            _context.t0 = _context["catch"](8);
            console.log(_context.t0);
            _context.next = 26;
            return regeneratorRuntime.awrap(message.channel.send("Invalid Id. Message was not found."));

          case 26:
            _msg = _context.sent;
            _context.next = 29;
            return regeneratorRuntime.awrap(_msg["delete"]({
              timeout: 3500
            })["catch"](function (err) {
              return console.log(err);
            }));

          case 29:
          case "end":
            return _context.stop();
        }
      }
    }, null, null, [[8, 21]]);
  },
  aliases: [],
  description: 'Enables a message to listen to reactions to give roles'
};