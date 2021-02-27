"use strict";

var _require = require('./config.json'),
    polls_channel = _require.polls_channel,
    common_role = _require.common_role;

module.exports = function (bot) {
  bot.on('message', function (msg) {
    var channel = msg.channel,
        author = msg.author,
        content = msg.content;
    if (!channels.includes(channel.id)) return;

    if (function (r) {
      return r.id === common_role;
    }) {
      var whole = content;
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