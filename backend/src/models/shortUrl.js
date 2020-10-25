const { Schema, model } = require("mongoose");
require("../Database");
const shortUrl = new Schema({
  fullUrl: String,
  shortUrl: {
    type: String,
    unique: true,
  },
});

module.exports = model("shortUrl", shortUrl);
