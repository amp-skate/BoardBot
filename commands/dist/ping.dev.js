"use strict";

module.exports = {
  name: 'ping',
  description: "this is the !ping command!",
  execute: function execute(msg, args) {
    msg.channel.send('pong!');
  }
};