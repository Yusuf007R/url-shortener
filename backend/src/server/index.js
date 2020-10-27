const cors = require('cors');
const express = require('express');

const app = express();
app.set('trust proxy', true);
app.use(express.json());
app.use(cors());

module.exports = app;
