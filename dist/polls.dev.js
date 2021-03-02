"use strict";

var _require = require("discord.js"),
    Message = _require.Message,
    MessageReaction = _require.MessageReaction;

var _require2 = require('./config.json'),
    flag_drop = _require2.flag_drop,
    polls_channel = _require2.polls_channel,
    moderator_roles = _require2.moderator_roles;

function removeEmojis(string) {
  var regex = /(?:[\u2700-\u27bf]|(?:\ud83c[\udde6-\uddff]){2}|[\ud800-\udbff][\udc00-\udfff]|[\u0023-\u0039]\ufe0f?\u20e3|\u3299|\u3297|\u303d|\u3030|\u24c2|\ud83c[\udd70-\udd71]|\ud83c[\udd7e-\udd7f]|\ud83c\udd8e|\ud83c[\udd91-\udd9a]|\ud83c[\udde6-\uddff]|\ud83c[\ude01-\ude02]|\ud83c\ude1a|\ud83c\ude2f|\ud83c[\ude32-\ude3a]|\ud83c[\ude50-\ude51]|\u203c|\u2049|[\u25aa-\u25ab]|\u25b6|\u25c0|[\u25fb-\u25fe]|\u00a9|\u00ae|\u2122|\u2139|\ud83c\udc04|[\u2600-\u26FF]|\u2b05|\u2b06|\u2b07|\u2b1b|\u2b1c|\u2b50|\u2b55|\u231a|\u231b|\u2328|\u23cf|[\u23e9-\u23f3]|[\u23f8-\u23fa]|\ud83c\udccf|\u2934|\u2935|[\u2190-\u21ff])/g;
  return string.replace(regex, "");
}

function isEmojiServer(msg, string) {//TODO update for server emojis
}

function isOnlyEmoji(string) {
  return !removeEmojis(string);
}

module.exports = function (bot) {
  bot.on('message', function (msg) {
    var channel = msg.channel,
        author = msg.author,
        content = msg.content;

    if (!polls_channel.includes(channel.id)) {
      return;
    }

    if (msg.member.roles.cache.find(function (r) {
      return moderator_roles.includes(r.name);
    })) {
      var eachLine = content.split('\n');
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = eachLine[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var line = _step.value;
          var split = line.split(' ');
          var emoji = split[0].trim();
          if (!isOnlyEmoji(emoji)) continue;
          msg.react(emoji);
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
    }
  });
};