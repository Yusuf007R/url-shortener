const { Schema, model } = require("mongoose");
require("../connectionDB");

const urlShort = new Schema({
  fullUrl: String,
  userID: String,
  urlShort: String,
  clicks: Number,
});

module.exports = model("urlShort", urlShort);
