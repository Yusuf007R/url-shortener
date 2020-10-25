const { Schema, model } = require("mongoose");
require("../connectionDB");

const refreshToken = new Schema({
  username: String,
  refreshToken: String,
});

module.exports = model("refreshToken", refreshToken);
