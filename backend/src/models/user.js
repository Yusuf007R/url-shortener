const { Schema, model } = require("mongoose");
require("../Database");

const user = new Schema({
  username: String,
  email: String,
  password: String,
});

module.exports = model("user", user);
