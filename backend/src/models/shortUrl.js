const { Schema, model } = require('mongoose');
require('../database');

const shortUrl = new Schema({
  fullUrl: String,
  shortUrl: {
    type: String,
    index: true,
    unique: true,
  },
  click: { type: Number, default: 0 },
});

module.exports = model('shortUrl', shortUrl);
