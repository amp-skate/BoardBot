"use strict";

var emojis = require('./emojis.json');

var _require = require('./config.json'),
    polls_channel = _require.polls_channel;

function isEmojifromJSON(args) {
  var matched = emojis.find(function (element) {
    return element["char"] === args;
  });
  if (matched) return true;else return false;
}

module.exports = function (bot) {
  bot.on('message', function (msg) {
    var channel = msg.channel,
        author = msg.author,
        content = msg.content;

    if (!polls_channel.includes(channel.id)) {
      return;
    }

    var eachLine = content.split('\n');
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
      for (var _iterator = eachLine[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        var line = _step.value;
        var split = line.split(' ');
        var emoji = split[0].trim();
        if (!isEmojifromJSON(emoji)) continue;
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
  });
};