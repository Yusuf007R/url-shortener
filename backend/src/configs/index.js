require('dotenv').config();

// DATABASE URL

const { dbUrl } = process.env;

// API PORT

const port = 3001;

// ENV KEYS

const privateKey = {
  refresh: process.env.privateRefreshTokenKey,
  access: process.env.privateAccessTokenKey,
};

module.exports = { dbUrl, port, privateKey };
