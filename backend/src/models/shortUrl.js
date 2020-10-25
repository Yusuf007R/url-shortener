const { Schema, model } = require("mongoose");
require("../dbConnection");

const shortUrl = new Schema({
  fullUrl: String,
  userID: String,
  shortUrl: {
    type: String,
    unique: true,
  },
  clicks: Number,
});

module.exports = model("shortUrl", shortUrl);
