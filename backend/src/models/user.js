const { Schema, model } = require('mongoose');
require('../database');

const user = new Schema({
  username: {
    type: String,
    index: true,
    unique: true,
  },
  email: {
    type: String,
    index: true,
    unique: true,
  },
  password: String,
  date: { type: Date, default: Date.now },
  short: [{ type: Schema.Types.ObjectId, ref: 'shortUrl' }],
});

module.exports = model('user', user);
