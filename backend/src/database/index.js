const mongoose = require("mongoose");

const dbUrl = require("../configs").dbUrl;

mongoose.connect(dbUrl, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
});

const db = mongoose.connection;

db.once("open", (_) => {
  console.log("Database is connected to:", dbUrl);
});
