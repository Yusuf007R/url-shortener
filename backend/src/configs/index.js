require("dotenv").config();

//DATABASE URL

const dbUrl = "mongodb://localhost:27017/urlShortener";

//API PORT

const port = 3001;

//ENV KEYS

const privateKey = {
  refresh: process.env.privateRefreshTokenKey,
  access: process.env.privateAccessTokenKey,
};

module.exports = { dbUrl, port, privateKey };
