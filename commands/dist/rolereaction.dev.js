"use strict";

module.exports = {
  run: function run(client, message, args) {
    var fetchedMsg;
    return regeneratorRuntime.async(function run$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            if (!(args.length != 1)) {
              _context.next = 4;
              break;
            }

            message.channel.send("too many arguments, please only enter 1");
            _context.next = 14;
            break;

          case 4:
            _context.prev = 4;
            _context.next = 7;
            return regeneratorRuntime.awrap(message.channel.messages.fetch(args));

          case 7:
            fetchedMsg = _context.sent;

            if (fetchedMsg) {
              console.log("message was found");
            }

            _context.next = 14;
            break;

          case 11:
            _context.prev = 11;
            _context.t0 = _context["catch"](4);
            console.log(_context.t0);

          case 14:
          case "end":
            return _context.stop();
        }
      }
    }, null, null, [[4, 11]]);
  }
};