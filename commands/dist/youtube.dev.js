"use strict";

module.exports = {
  name: "youtube",
  description: "this command returns Brendon's youtube link",
  execute: function execute(msg, args, youtube_link) {
    msg.channel.send(youtube_link);
  }
};