require('dotenv').config();

// DATABASE URL

const { dbUrl } = process.env;

// API PORT

const port = process.env.PORT || 3001;

// ENV KEYS

const privateKey = {
  refresh: process.env.privateRefreshTokenKey,
  access: process.env.privateAccessTokenKey,
};

// GENERIC ERROR

const genericError = 'Ups! try again';

module.exports = {
  dbUrl,
  port,
  privateKey,
  genericError,
};
