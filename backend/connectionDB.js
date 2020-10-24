const mongoose = require("mongoose");
const dbUrl = "mongodb://localhost:27017/urlShortener";

mongoose.connect(dbUrl, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

db.once("open", (_) => {
  console.log("Database is connected to:", dbUrl);
});
