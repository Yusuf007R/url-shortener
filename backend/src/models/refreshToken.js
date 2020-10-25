const { Schema, model } = require("mongoose");
require("../Database");

const refreshToken = new Schema({
  username: String,
  refreshToken: String,
});

module.exports = model("refreshToken", refreshToken);
