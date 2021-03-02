"use strict";

var mongoose = require('mongoose');

var MessageSchema = new mongoose.Schema({
  messageId: {
    type: String,
    required: true
  },
  emojiRoleMappings: {
    type: mongoose.Schema.Types.Mixed
  }
});
var MessageModel = module.exports = mongoose.model('message', MessageSchema);