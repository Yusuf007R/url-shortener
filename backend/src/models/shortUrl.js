const { Schema, model } = require('mongoose');
require('../database');

const shortUrl = new Schema({
  fullUrl: String,
  user: String,
  userID: String,
  shortUrl: {
    type: String,
    index: true,
    unique: true,
  },
  click: { type: Number, default: 0 },
  date: { type: Date, default: Date.now },
});

module.exports = model('shortUrl', shortUrl);
