const { Schema, model } = require("mongoose");
require("../connectionDB");

const user = new Schema({
  username: String,
  email: String,
  password: String,
});

module.exports = model("user", user);
