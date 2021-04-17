"use strict";

var _require = require('./config.json'),
    profile_channel = _require.profile_channel;

module.exports = function (bot) {
  bot.on('messageReactionAdd', function _callee(reaction, user) {
    var profile_role, role, _role, _role2, _role3, _role4, _role5, _role6, _role7, _role8, _role9, _role10, _role11, _role12, _role13, _role14, _role15, _role16, _role17, _role18, _role19, _role20, _role21, _role22, _role23, _role24, _role25, _role26, _role27, _role28, _role29, _role30, _role31, _role32, _role33, _role34, _role35, _role36, _role37, _role38, _role39, _role40, _role41, _role42, _role43, _role44;

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
              _context.next = 196;
              break;
            }

            profile_role = reaction.message.guild.roles.cache.find(function (r) {
              return r.name === "⁣  ⁣⁣  ⁣⁣⁣ ⁣⁣─── ⁣ ⁣⁣Profile ⁣ ─── ⁣ ⁣⁣ ⁣ ⁣  ⁣";
            });
            _context.next = 14;
            return regeneratorRuntime.awrap(reaction.message.guild.members.cache.get(user.id).roles.add(profile_role));

          case 14:
            if (!(reaction.emoji.name === '1️⃣')) {
              _context.next = 19;
              break;
            }

            console.log('yes first given');
            role = reaction.message.guild.roles.cache.find(function (r) {
              return r.name === "he/him";
            });
            _context.next = 19;
            return regeneratorRuntime.awrap(reaction.message.guild.members.cache.get(user.id).roles.add(role));

          case 19:
            if (!(reaction.emoji.name === '2️⃣')) {
              _context.next = 24;
              break;
            }

            console.log('yes second given');
            _role = reaction.message.guild.roles.cache.find(function (r) {
              return r.name.toLowerCase() === "she/her";
            });
            _context.next = 24;
            return regeneratorRuntime.awrap(reaction.message.guild.members.cache.get(user.id).roles.add(_role));

          case 24:
            if (!(reaction.emoji.name === '3️⃣')) {
              _context.next = 28;
              break;
            }

            _role2 = reaction.message.guild.roles.cache.find(function (r) {
              return r.name.toLowerCase() === "they/them";
            });
            _context.next = 28;
            return regeneratorRuntime.awrap(reaction.message.guild.members.cache.get(user.id).roles.add(_role2));

          case 28:
            if (!(reaction.emoji.name === '👶')) {
              _context.next = 32;
              break;
            }

            _role3 = reaction.message.guild.roles.cache.find(function (r) {
              return r.name.toLowerCase() === "beginner";
            });
            _context.next = 32;
            return regeneratorRuntime.awrap(reaction.message.guild.members.cache.get(user.id).roles.add(_role3));

          case 32:
            if (!(reaction.emoji.name === '🧒')) {
              _context.next = 36;
              break;
            }

            _role4 = reaction.message.guild.roles.cache.find(function (r) {
              return r.name.toLowerCase() === "intermediate";
            });
            _context.next = 36;
            return regeneratorRuntime.awrap(reaction.message.guild.members.cache.get(user.id).roles.add(_role4));

          case 36:
            if (!(reaction.emoji.name === '🙇')) {
              _context.next = 40;
              break;
            }

            _role5 = reaction.message.guild.roles.cache.find(function (r) {
              return r.name.toLowerCase() === "advanced";
            });
            _context.next = 40;
            return regeneratorRuntime.awrap(reaction.message.guild.members.cache.get(user.id).roles.add(_role5));

          case 40:
            if (!(reaction.emoji.name === '🧓')) {
              _context.next = 44;
              break;
            }

            _role6 = reaction.message.guild.roles.cache.find(function (r) {
              return r.name.toLowerCase() === "professional";
            });
            _context.next = 44;
            return regeneratorRuntime.awrap(reaction.message.guild.members.cache.get(user.id).roles.add(_role6));

          case 44:
            if (!(reaction.emoji.name === '🧙')) {
              _context.next = 48;
              break;
            }

            _role7 = reaction.message.guild.roles.cache.find(function (r) {
              return r.name.toLowerCase() === "wizard";
            });
            _context.next = 48;
            return regeneratorRuntime.awrap(reaction.message.guild.members.cache.get(user.id).roles.add(_role7));

          case 48:
            if (!(reaction.emoji.name === '🅰️')) {
              _context.next = 52;
              break;
            }

            _role8 = reaction.message.guild.roles.cache.find(function (r) {
              return r.name.toLowerCase() === "lgbtq+";
            });
            _context.next = 52;
            return regeneratorRuntime.awrap(reaction.message.guild.members.cache.get(user.id).roles.add(_role8));

          case 52:
            if (!(reaction.emoji.name === '🅱️')) {
              _context.next = 56;
              break;
            }

            _role9 = reaction.message.guild.roles.cache.find(function (r) {
              return r.name.toLowerCase() === "bipoc";
            });
            _context.next = 56;
            return regeneratorRuntime.awrap(reaction.message.guild.members.cache.get(user.id).roles.add(_role9));

          case 56:
            if (!(reaction.emoji.name === '🇦')) {
              _context.next = 60;
              break;
            }

            _role10 = reaction.message.guild.roles.cache.find(function (r) {
              return r.name.toLowerCase() === "cruising";
            });
            _context.next = 60;
            return regeneratorRuntime.awrap(reaction.message.guild.members.cache.get(user.id).roles.add(_role10));

          case 60:
            if (!(reaction.emoji.name === '🇧')) {
              _context.next = 64;
              break;
            }

            _role11 = reaction.message.guild.roles.cache.find(function (r) {
              return r.name.toLowerCase() === "dancing";
            });
            _context.next = 64;
            return regeneratorRuntime.awrap(reaction.message.guild.members.cache.get(user.id).roles.add(_role11));

          case 64:
            if (!(reaction.emoji.name === '🇨')) {
              _context.next = 68;
              break;
            }

            _role12 = reaction.message.guild.roles.cache.find(function (r) {
              return r.name.toLowerCase() === "freeride";
            });
            _context.next = 68;
            return regeneratorRuntime.awrap(reaction.message.guild.members.cache.get(user.id).roles.add(_role12));

          case 68:
            if (!(reaction.emoji.name === '🇩')) {
              _context.next = 72;
              break;
            }

            _role13 = reaction.message.guild.roles.cache.find(function (r) {
              return r.name.toLowerCase() === "freestyle";
            });
            _context.next = 72;
            return regeneratorRuntime.awrap(reaction.message.guild.members.cache.get(user.id).roles.add(_role13));

          case 72:
            if (!(reaction.emoji.name === '🇪')) {
              _context.next = 76;
              break;
            }

            _role14 = reaction.message.guild.roles.cache.find(function (r) {
              return r.name.toLowerCase() === "downhill";
            });
            _context.next = 76;
            return regeneratorRuntime.awrap(reaction.message.guild.members.cache.get(user.id).roles.add(_role14));

          case 76:
            if (!(reaction.emoji.name === '🇫')) {
              _context.next = 80;
              break;
            }

            _role15 = reaction.message.guild.roles.cache.find(function (r) {
              return r.name.toLowerCase() === "ldp";
            });
            _context.next = 80;
            return regeneratorRuntime.awrap(reaction.message.guild.members.cache.get(user.id).roles.add(_role15));

          case 80:
            if (!(reaction.emoji.name === '🇬')) {
              _context.next = 84;
              break;
            }

            _role16 = reaction.message.guild.roles.cache.find(function (r) {
              return r.name.toLowerCase() === "";
            });
            _context.next = 84;
            return regeneratorRuntime.awrap(reaction.message.guild.members.cache.get(user.id).roles.add(_role16));

          case 84:
            if (!(reaction.emoji.name === '🇭')) {
              _context.next = 88;
              break;
            }

            _role17 = reaction.message.guild.roles.cache.find(function (r) {
              return r.name.toLowerCase() === "";
            });
            _context.next = 88;
            return regeneratorRuntime.awrap(reaction.message.guild.members.cache.get(user.id).roles.add(_role17));

          case 88:
            if (!(reaction.emoji.name === '🇯')) {
              _context.next = 92;
              break;
            }

            _role18 = reaction.message.guild.roles.cache.find(function (r) {
              return r.name.toLowerCase() === "";
            });
            _context.next = 92;
            return regeneratorRuntime.awrap(reaction.message.guild.members.cache.get(user.id).roles.add(_role18));

          case 92:
            if (!(reaction.emoji.name === '🇰')) {
              _context.next = 96;
              break;
            }

            _role19 = reaction.message.guild.roles.cache.find(function (r) {
              return r.name.toLowerCase() === "";
            });
            _context.next = 96;
            return regeneratorRuntime.awrap(reaction.message.guild.members.cache.get(user.id).roles.add(_role19));

          case 96:
            if (!(reaction.emoji.name === '🇱')) {
              _context.next = 100;
              break;
            }

            _role20 = reaction.message.guild.roles.cache.find(function (r) {
              return r.name.toLowerCase() === "";
            });
            _context.next = 100;
            return regeneratorRuntime.awrap(reaction.message.guild.members.cache.get(user.id).roles.add(_role20));

          case 100:
            if (!(reaction.emoji.name === '🇲')) {
              _context.next = 104;
              break;
            }

            _role21 = reaction.message.guild.roles.cache.find(function (r) {
              return r.name.toLowerCase() === "";
            });
            _context.next = 104;
            return regeneratorRuntime.awrap(reaction.message.guild.members.cache.get(user.id).roles.add(_role21));

          case 104:
            if (!(reaction.emoji.name === '🇳')) {
              _context.next = 108;
              break;
            }

            _role22 = reaction.message.guild.roles.cache.find(function (r) {
              return r.name.toLowerCase() === "";
            });
            _context.next = 108;
            return regeneratorRuntime.awrap(reaction.message.guild.members.cache.get(user.id).roles.add(_role22));

          case 108:
            if (!(reaction.emoji.name === '🇴')) {
              _context.next = 112;
              break;
            }

            _role23 = reaction.message.guild.roles.cache.find(function (r) {
              return r.name.toLowerCase() === "";
            });
            _context.next = 112;
            return regeneratorRuntime.awrap(reaction.message.guild.members.cache.get(user.id).roles.add(_role23));

          case 112:
            if (!(reaction.emoji.name === '🇵')) {
              _context.next = 116;
              break;
            }

            _role24 = reaction.message.guild.roles.cache.find(function (r) {
              return r.name.toLowerCase() === "";
            });
            _context.next = 116;
            return regeneratorRuntime.awrap(reaction.message.guild.members.cache.get(user.id).roles.add(_role24));

          case 116:
            if (!(reaction.emoji.name === '🇶')) {
              _context.next = 120;
              break;
            }

            _role25 = reaction.message.guild.roles.cache.find(function (r) {
              return r.name.toLowerCase() === "";
            });
            _context.next = 120;
            return regeneratorRuntime.awrap(reaction.message.guild.members.cache.get(user.id).roles.add(_role25));

          case 120:
            if (!(reaction.emoji.name === '🇷')) {
              _context.next = 124;
              break;
            }

            _role26 = reaction.message.guild.roles.cache.find(function (r) {
              return r.name.toLowerCase() === "";
            });
            _context.next = 124;
            return regeneratorRuntime.awrap(reaction.message.guild.members.cache.get(user.id).roles.add(_role26));

          case 124:
            if (!(reaction.emoji.name === '🇸')) {
              _context.next = 128;
              break;
            }

            _role27 = reaction.message.guild.roles.cache.find(function (r) {
              return r.name.toLowerCase() === "";
            });
            _context.next = 128;
            return regeneratorRuntime.awrap(reaction.message.guild.members.cache.get(user.id).roles.add(_role27));

          case 128:
            if (!(reaction.emoji.name === '🇹')) {
              _context.next = 132;
              break;
            }

            _role28 = reaction.message.guild.roles.cache.find(function (r) {
              return r.name.toLowerCase() === "";
            });
            _context.next = 132;
            return regeneratorRuntime.awrap(reaction.message.guild.members.cache.get(user.id).roles.add(_role28));

          case 132:
            if (!(reaction.emoji.name === '🇺')) {
              _context.next = 136;
              break;
            }

            _role29 = reaction.message.guild.roles.cache.find(function (r) {
              return r.name.toLowerCase() === "";
            });
            _context.next = 136;
            return regeneratorRuntime.awrap(reaction.message.guild.members.cache.get(user.id).roles.add(_role29));

          case 136:
            if (!(reaction.emoji.name === '🇻')) {
              _context.next = 140;
              break;
            }

            _role30 = reaction.message.guild.roles.cache.find(function (r) {
              return r.name.toLowerCase() === "";
            });
            _context.next = 140;
            return regeneratorRuntime.awrap(reaction.message.guild.members.cache.get(user.id).roles.add(_role30));

          case 140:
            if (!(reaction.emoji.name === '🇼')) {
              _context.next = 144;
              break;
            }

            _role31 = reaction.message.guild.roles.cache.find(function (r) {
              return r.name.toLowerCase() === "";
            });
            _context.next = 144;
            return regeneratorRuntime.awrap(reaction.message.guild.members.cache.get(user.id).roles.add(_role31));

          case 144:
            if (!(reaction.emoji.name === '🇽')) {
              _context.next = 148;
              break;
            }

            _role32 = reaction.message.guild.roles.cache.find(function (r) {
              return r.name.toLowerCase() === "";
            });
            _context.next = 148;
            return regeneratorRuntime.awrap(reaction.message.guild.members.cache.get(user.id).roles.add(_role32));

          case 148:
            if (!(reaction.emoji.name === '🇾')) {
              _context.next = 152;
              break;
            }

            _role33 = reaction.message.guild.roles.cache.find(function (r) {
              return r.name.toLowerCase() === "";
            });
            _context.next = 152;
            return regeneratorRuntime.awrap(reaction.message.guild.members.cache.get(user.id).roles.add(_role33));

          case 152:
            if (!(reaction.emoji.name === '🇿')) {
              _context.next = 156;
              break;
            }

            _role34 = reaction.message.guild.roles.cache.find(function (r) {
              return r.name.toLowerCase() === "";
            });
            _context.next = 156;
            return regeneratorRuntime.awrap(reaction.message.guild.members.cache.get(user.id).roles.add(_role34));

          case 156:
            if (!(reaction.emoji.name === '🤝')) {
              _context.next = 160;
              break;
            }

            _role35 = reaction.message.guild.roles.cache.find(function (r) {
              return r.name.toLowerCase() === "i'm here to make friends!";
            });
            _context.next = 160;
            return regeneratorRuntime.awrap(reaction.message.guild.members.cache.get(user.id).roles.add(_role35));

          case 160:
            if (!(reaction.emoji.name === '🛹')) {
              _context.next = 164;
              break;
            }

            _role36 = reaction.message.guild.roles.cache.find(function (r) {
              return r.name.toLowerCase() === "i'm here to get better!";
            });
            _context.next = 164;
            return regeneratorRuntime.awrap(reaction.message.guild.members.cache.get(user.id).roles.add(_role36));

          case 164:
            if (!(reaction.emoji.name === '🤡')) {
              _context.next = 168;
              break;
            }

            _role37 = reaction.message.guild.roles.cache.find(function (r) {
              return r.name.toLowerCase() === "i'm here for the memes";
            });
            _context.next = 168;
            return regeneratorRuntime.awrap(reaction.message.guild.members.cache.get(user.id).roles.add(_role37));

          case 168:
            if (!(reaction.emoji.name === '🦖')) {
              _context.next = 172;
              break;
            }

            _role38 = reaction.message.guild.roles.cache.find(function (r) {
              return r.name.toLowerCase() === "1950-1959";
            });
            _context.next = 172;
            return regeneratorRuntime.awrap(reaction.message.guild.members.cache.get(user.id).roles.add(_role38));

          case 172:
            if (!(reaction.emoji.name === '🐢')) {
              _context.next = 176;
              break;
            }

            _role39 = reaction.message.guild.roles.cache.find(function (r) {
              return r.name.toLowerCase() === "1960-1969";
            });
            _context.next = 176;
            return regeneratorRuntime.awrap(reaction.message.guild.members.cache.get(user.id).roles.add(_role39));

          case 176:
            if (!(reaction.emoji.name === '🦅')) {
              _context.next = 180;
              break;
            }

            _role40 = reaction.message.guild.roles.cache.find(function (r) {
              return r.name.toLowerCase() === "1970-1979";
            });
            _context.next = 180;
            return regeneratorRuntime.awrap(reaction.message.guild.members.cache.get(user.id).roles.add(_role40));

          case 180:
            if (!(reaction.emoji.name === '🦁')) {
              _context.next = 184;
              break;
            }

            _role41 = reaction.message.guild.roles.cache.find(function (r) {
              return r.name.toLowerCase() === "1980-1989";
            });
            _context.next = 184;
            return regeneratorRuntime.awrap(reaction.message.guild.members.cache.get(user.id).roles.add(_role41));

          case 184:
            if (!(reaction.emoji.name === '🐶')) {
              _context.next = 188;
              break;
            }

            _role42 = reaction.message.guild.roles.cache.find(function (r) {
              return r.name.toLowerCase() === "1990-1999";
            });
            _context.next = 188;
            return regeneratorRuntime.awrap(reaction.message.guild.members.cache.get(user.id).roles.add(_role42));

          case 188:
            if (!(reaction.emoji.name === '🐒')) {
              _context.next = 192;
              break;
            }

            _role43 = reaction.message.guild.roles.cache.find(function (r) {
              return r.name.toLowerCase() === "2000-2009";
            });
            _context.next = 192;
            return regeneratorRuntime.awrap(reaction.message.guild.members.cache.get(user.id).roles.add(_role43));

          case 192:
            if (!(reaction.emoji.name === '🪱')) {
              _context.next = 196;
              break;
            }

            _role44 = reaction.message.guild.roles.cache.find(function (r) {
              return r.name.toLowerCase() === "2010-2019";
            });
            _context.next = 196;
            return regeneratorRuntime.awrap(reaction.message.guild.members.cache.get(user.id).roles.add(_role44));

          case 196:
          case "end":
            return _context.stop();
        }
      }
    });
  });
};