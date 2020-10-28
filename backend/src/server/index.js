const cors = require('cors');
const express = require('express');
const slowDown = require('express-slow-down');

// express
const app = express();
app.use(express.json());
app.use(cors());

// trusted proxy
app.set('trust proxy', true);

// express slowdown
// const speedLimiter = slowDown({
//   windowMs: 15 * 60 * 1000,
//   delayAfter: 100,
//   delayMs: 500,
// });
// app.use(speedLimiter);

module.exports = app;
