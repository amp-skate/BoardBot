"use strict";

var addReaction = function addReaction(message, reactions) {
  message.react(reactions[0]);
  reactions.shift();

  if (reactions.length > 0) {
    setTimeout(function () {
      return addReaction(message, reactions);
    }, 750);
  }
};

module.exports = function _callee(client, id, text) {
  var reactions,
      channel,
      _args = arguments;
  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          reactions = _args.length > 3 && _args[3] !== undefined ? _args[3] : [];
          _context.next = 3;
          return regeneratorRuntime.awrap(client.channels.fetch(id));

        case 3:
          channel = _context.sent;
          channel.messages.fetch().then(function (messages) {
            if (messages.size === 0) {
              channel.send(text).then(function (message) {
                addReaction(message, reactions);
              });
            } else {
              var _iteratorNormalCompletion = true;
              var _didIteratorError = false;
              var _iteratorError = undefined;

              try {
                for (var _iterator = messages[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                  var message = _step.value;
                  message[1].edit(text);
                  addReaction(message[1], reactions);
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

        case 5:
        case "end":
          return _context.stop();
      }
    }
  });
};