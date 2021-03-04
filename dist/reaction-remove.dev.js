"use strict";

var _require = require('./config.json'),
    profile_channel = _require.profile_channel;

module.exports = function (bot) {
  bot.on('messageReactionRemove', function _callee(reaction, user) {
    var role, _role, _role2, _role3, _role4, _role5, _role6, _role7, _role8, _role9, _role10, _role11, _role12, _role13, _role14, _role15, _role16, _role17, _role18, _role19, _role20, _role21, _role22, _role23, _role24, _role25, _role26, _role27, _role28, _role29, _role30, _role31, _role32, _role33, _role34, _role35, _role36, _role37;

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
              _context.next = 165;
              break;
            }

            if (!(reaction.emoji.name === '1️⃣')) {
              _context.next = 16;
              break;
            }

            console.log('yes first taken');
            role = reaction.message.guild.roles.cache.find(function (r) {
              return r.name === "he/him";
            });
            _context.next = 16;
            return regeneratorRuntime.awrap(reaction.message.guild.members.cache.get(user.id).roles.remove(role));

          case 16:
            if (!(reaction.emoji.name === '2️⃣')) {
              _context.next = 21;
              break;
            }

            console.log('yes second taken');
            _role = reaction.message.guild.roles.cache.find(function (r) {
              return r.name.toLowerCase() === "she/her";
            });
            _context.next = 21;
            return regeneratorRuntime.awrap(reaction.message.guild.members.cache.get(user.id).roles.remove(_role));

          case 21:
            if (!(reaction.emoji.name === '3️⃣')) {
              _context.next = 25;
              break;
            }

            _role2 = reaction.message.guild.roles.cache.find(function (r) {
              return r.name.toLowerCase() === "they/them";
            });
            _context.next = 25;
            return regeneratorRuntime.awrap(reaction.message.guild.members.cache.get(user.id).roles.remove(_role2));

          case 25:
            if (!(reaction.emoji.name === '👶')) {
              _context.next = 29;
              break;
            }

            _role3 = reaction.message.guild.roles.cache.find(function (r) {
              return r.name.toLowerCase() === "beginner";
            });
            _context.next = 29;
            return regeneratorRuntime.awrap(reaction.message.guild.members.cache.get(user.id).roles.remove(_role3));

          case 29:
            if (!(reaction.emoji.name === '🧒')) {
              _context.next = 33;
              break;
            }

            _role4 = reaction.message.guild.roles.cache.find(function (r) {
              return r.name.toLowerCase() === "intermediate";
            });
            _context.next = 33;
            return regeneratorRuntime.awrap(reaction.message.guild.members.cache.get(user.id).roles.remove(_role4));

          case 33:
            if (!(reaction.emoji.name === '🙇')) {
              _context.next = 37;
              break;
            }

            _role5 = reaction.message.guild.roles.cache.find(function (r) {
              return r.name.toLowerCase() === "advanced";
            });
            _context.next = 37;
            return regeneratorRuntime.awrap(reaction.message.guild.members.cache.get(user.id).roles.remove(_role5));

          case 37:
            if (!(reaction.emoji.name === '🧓')) {
              _context.next = 41;
              break;
            }

            _role6 = reaction.message.guild.roles.cache.find(function (r) {
              return r.name.toLowerCase() === "professional";
            });
            _context.next = 41;
            return regeneratorRuntime.awrap(reaction.message.guild.members.cache.get(user.id).roles.remove(_role6));

          case 41:
            if (!(reaction.emoji.name === '🧙')) {
              _context.next = 45;
              break;
            }

            _role7 = reaction.message.guild.roles.cache.find(function (r) {
              return r.name.toLowerCase() === "wizard";
            });
            _context.next = 45;
            return regeneratorRuntime.awrap(reaction.message.guild.members.cache.get(user.id).roles.remove(_role7));

          case 45:
            if (!(reaction.emoji.name === '🅰️')) {
              _context.next = 49;
              break;
            }

            _role8 = reaction.message.guild.roles.cache.find(function (r) {
              return r.name.toLowerCase() === "lgbtq+";
            });
            _context.next = 49;
            return regeneratorRuntime.awrap(reaction.message.guild.members.cache.get(user.id).roles.remove(_role8));

          case 49:
            if (!(reaction.emoji.name === '🅱️')) {
              _context.next = 53;
              break;
            }

            _role9 = reaction.message.guild.roles.cache.find(function (r) {
              return r.name.toLowerCase() === "bipoc";
            });
            _context.next = 53;
            return regeneratorRuntime.awrap(reaction.message.guild.members.cache.get(user.id).roles.remove(_role9));

          case 53:
            if (!(reaction.emoji.name === '🇦')) {
              _context.next = 57;
              break;
            }

            _role10 = reaction.message.guild.roles.cache.find(function (r) {
              return r.name.toLowerCase() === "cruising";
            });
            _context.next = 57;
            return regeneratorRuntime.awrap(reaction.message.guild.members.cache.get(user.id).roles.remove(_role10));

          case 57:
            if (!(reaction.emoji.name === '🇧')) {
              _context.next = 61;
              break;
            }

            _role11 = reaction.message.guild.roles.cache.find(function (r) {
              return r.name.toLowerCase() === "dancing";
            });
            _context.next = 61;
            return regeneratorRuntime.awrap(reaction.message.guild.members.cache.get(user.id).roles.remove(_role11));

          case 61:
            if (!(reaction.emoji.name === '🇨')) {
              _context.next = 65;
              break;
            }

            _role12 = reaction.message.guild.roles.cache.find(function (r) {
              return r.name.toLowerCase() === "freeride";
            });
            _context.next = 65;
            return regeneratorRuntime.awrap(reaction.message.guild.members.cache.get(user.id).roles.remove(_role12));

          case 65:
            if (!(reaction.emoji.name === '🇩')) {
              _context.next = 69;
              break;
            }

            _role13 = reaction.message.guild.roles.cache.find(function (r) {
              return r.name.toLowerCase() === "freestyle";
            });
            _context.next = 69;
            return regeneratorRuntime.awrap(reaction.message.guild.members.cache.get(user.id).roles.remove(_role13));

          case 69:
            if (!(reaction.emoji.name === '🇪')) {
              _context.next = 73;
              break;
            }

            _role14 = reaction.message.guild.roles.cache.find(function (r) {
              return r.name.toLowerCase() === "downhill";
            });
            _context.next = 73;
            return regeneratorRuntime.awrap(reaction.message.guild.members.cache.get(user.id).roles.remove(_role14));

          case 73:
            if (!(reaction.emoji.name === '🇫')) {
              _context.next = 77;
              break;
            }

            _role15 = reaction.message.guild.roles.cache.find(function (r) {
              return r.name.toLowerCase() === "ldp";
            });
            _context.next = 77;
            return regeneratorRuntime.awrap(reaction.message.guild.members.cache.get(user.id).roles.remove(_role15));

          case 77:
            if (!(reaction.emoji.name === '🇬')) {
              _context.next = 81;
              break;
            }

            _role16 = reaction.message.guild.roles.cache.find(function (r) {
              return r.name.toLowerCase() === "";
            });
            _context.next = 81;
            return regeneratorRuntime.awrap(reaction.message.guild.members.cache.get(user.id).roles.remove(_role16));

          case 81:
            if (!(reaction.emoji.name === '🇭')) {
              _context.next = 85;
              break;
            }

            _role17 = reaction.message.guild.roles.cache.find(function (r) {
              return r.name.toLowerCase() === "";
            });
            _context.next = 85;
            return regeneratorRuntime.awrap(reaction.message.guild.members.cache.get(user.id).roles.remove(_role17));

          case 85:
            if (!(reaction.emoji.name === '🇯')) {
              _context.next = 89;
              break;
            }

            _role18 = reaction.message.guild.roles.cache.find(function (r) {
              return r.name.toLowerCase() === "";
            });
            _context.next = 89;
            return regeneratorRuntime.awrap(reaction.message.guild.members.cache.get(user.id).roles.remove(_role18));

          case 89:
            if (!(reaction.emoji.name === '🇰')) {
              _context.next = 93;
              break;
            }

            _role19 = reaction.message.guild.roles.cache.find(function (r) {
              return r.name.toLowerCase() === "";
            });
            _context.next = 93;
            return regeneratorRuntime.awrap(reaction.message.guild.members.cache.get(user.id).roles.remove(_role19));

          case 93:
            if (!(reaction.emoji.name === '🇱')) {
              _context.next = 97;
              break;
            }

            _role20 = reaction.message.guild.roles.cache.find(function (r) {
              return r.name.toLowerCase() === "";
            });
            _context.next = 97;
            return regeneratorRuntime.awrap(reaction.message.guild.members.cache.get(user.id).roles.remove(_role20));

          case 97:
            if (!(reaction.emoji.name === '🇲')) {
              _context.next = 101;
              break;
            }

            _role21 = reaction.message.guild.roles.cache.find(function (r) {
              return r.name.toLowerCase() === "";
            });
            _context.next = 101;
            return regeneratorRuntime.awrap(reaction.message.guild.members.cache.get(user.id).roles.remove(_role21));

          case 101:
            if (!(reaction.emoji.name === '🇳')) {
              _context.next = 105;
              break;
            }

            _role22 = reaction.message.guild.roles.cache.find(function (r) {
              return r.name.toLowerCase() === "";
            });
            _context.next = 105;
            return regeneratorRuntime.awrap(reaction.message.guild.members.cache.get(user.id).roles.remove(_role22));

          case 105:
            if (!(reaction.emoji.name === '🇴')) {
              _context.next = 109;
              break;
            }

            _role23 = reaction.message.guild.roles.cache.find(function (r) {
              return r.name.toLowerCase() === "";
            });
            _context.next = 109;
            return regeneratorRuntime.awrap(reaction.message.guild.members.cache.get(user.id).roles.remove(_role23));

          case 109:
            if (!(reaction.emoji.name === '🇵')) {
              _context.next = 113;
              break;
            }

            _role24 = reaction.message.guild.roles.cache.find(function (r) {
              return r.name.toLowerCase() === "";
            });
            _context.next = 113;
            return regeneratorRuntime.awrap(reaction.message.guild.members.cache.get(user.id).roles.remove(_role24));

          case 113:
            if (!(reaction.emoji.name === '🇶')) {
              _context.next = 117;
              break;
            }

            _role25 = reaction.message.guild.roles.cache.find(function (r) {
              return r.name.toLowerCase() === "";
            });
            _context.next = 117;
            return regeneratorRuntime.awrap(reaction.message.guild.members.cache.get(user.id).roles.remove(_role25));

          case 117:
            if (!(reaction.emoji.name === '🇷')) {
              _context.next = 121;
              break;
            }

            _role26 = reaction.message.guild.roles.cache.find(function (r) {
              return r.name.toLowerCase() === "";
            });
            _context.next = 121;
            return regeneratorRuntime.awrap(reaction.message.guild.members.cache.get(user.id).roles.remove(_role26));

          case 121:
            if (!(reaction.emoji.name === '🇸')) {
              _context.next = 125;
              break;
            }

            _role27 = reaction.message.guild.roles.cache.find(function (r) {
              return r.name.toLowerCase() === "";
            });
            _context.next = 125;
            return regeneratorRuntime.awrap(reaction.message.guild.members.cache.get(user.id).roles.remove(_role27));

          case 125:
            if (!(reaction.emoji.name === '🇹')) {
              _context.next = 129;
              break;
            }

            _role28 = reaction.message.guild.roles.cache.find(function (r) {
              return r.name.toLowerCase() === "";
            });
            _context.next = 129;
            return regeneratorRuntime.awrap(reaction.message.guild.members.cache.get(user.id).roles.remove(_role28));

          case 129:
            if (!(reaction.emoji.name === '🇺')) {
              _context.next = 133;
              break;
            }

            _role29 = reaction.message.guild.roles.cache.find(function (r) {
              return r.name.toLowerCase() === "";
            });
            _context.next = 133;
            return regeneratorRuntime.awrap(reaction.message.guild.members.cache.get(user.id).roles.remove(_role29));

          case 133:
            if (!(reaction.emoji.name === '🇻')) {
              _context.next = 137;
              break;
            }

            _role30 = reaction.message.guild.roles.cache.find(function (r) {
              return r.name.toLowerCase() === "";
            });
            _context.next = 137;
            return regeneratorRuntime.awrap(reaction.message.guild.members.cache.get(user.id).roles.remove(_role30));

          case 137:
            if (!(reaction.emoji.name === '🇼')) {
              _context.next = 141;
              break;
            }

            _role31 = reaction.message.guild.roles.cache.find(function (r) {
              return r.name.toLowerCase() === "";
            });
            _context.next = 141;
            return regeneratorRuntime.awrap(reaction.message.guild.members.cache.get(user.id).roles.remove(_role31));

          case 141:
            if (!(reaction.emoji.name === '🇽')) {
              _context.next = 145;
              break;
            }

            _role32 = reaction.message.guild.roles.cache.find(function (r) {
              return r.name.toLowerCase() === "";
            });
            _context.next = 145;
            return regeneratorRuntime.awrap(reaction.message.guild.members.cache.get(user.id).roles.remove(_role32));

          case 145:
            if (!(reaction.emoji.name === '🇾')) {
              _context.next = 149;
              break;
            }

            _role33 = reaction.message.guild.roles.cache.find(function (r) {
              return r.name.toLowerCase() === "";
            });
            _context.next = 149;
            return regeneratorRuntime.awrap(reaction.message.guild.members.cache.get(user.id).roles.remove(_role33));

          case 149:
            if (!(reaction.emoji.name === '🇿')) {
              _context.next = 153;
              break;
            }

            _role34 = reaction.message.guild.roles.cache.find(function (r) {
              return r.name.toLowerCase() === "";
            });
            _context.next = 153;
            return regeneratorRuntime.awrap(reaction.message.guild.members.cache.get(user.id).roles.remove(_role34));

          case 153:
            if (!(reaction.emoji.name === '🤝')) {
              _context.next = 157;
              break;
            }

            _role35 = reaction.message.guild.roles.cache.find(function (r) {
              return r.name.toLowerCase() === "i'm here to make friends!";
            });
            _context.next = 157;
            return regeneratorRuntime.awrap(reaction.message.guild.members.cache.get(user.id).roles.remove(_role35));

          case 157:
            if (!(reaction.emoji.name === '🛹')) {
              _context.next = 161;
              break;
            }

            _role36 = reaction.message.guild.roles.cache.find(function (r) {
              return r.name.toLowerCase() === "i'm here to get better!";
            });
            _context.next = 161;
            return regeneratorRuntime.awrap(reaction.message.guild.members.cache.get(user.id).roles.remove(_role36));

          case 161:
            if (!(reaction.emoji.name === '🤡')) {
              _context.next = 165;
              break;
            }

            _role37 = reaction.message.guild.roles.cache.find(function (r) {
              return r.name.toLowerCase() === "i'm here for the memes";
            });
            _context.next = 165;
            return regeneratorRuntime.awrap(reaction.message.guild.members.cache.get(user.id).roles.remove(_role37));

          case 165:
          case "end":
            return _context.stop();
        }
      }
    });
  });
};