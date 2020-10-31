const { Schema, model } = require('mongoose');
require('../database');

const user = new Schema({
  username: {
    type: String,
    index: true,
    unique: true,
  },
  email: String,
  password: String,
  short: [{ type: Schema.Types.ObjectId, ref: 'shortUrl' }],
});

module.exports = model('user', user);
