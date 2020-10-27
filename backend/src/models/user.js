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
});

module.exports = model('user', user);
