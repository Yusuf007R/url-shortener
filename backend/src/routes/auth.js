const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const app = require('../server');
// const jwtVerify = require('../utils/jwtVerify');
require('dotenv').config();

// configs

const { genericError } = require('../configs');
const { privateKey } = require('../configs');

// models

const User = require('../models/user');
const RefreshToken = require('../models/refreshToken');

//

function handleError(res) {
  return res.status(400).send(genericError);
}

function generateAccessToken(data) {
  return jwt.sign(data, privateKey.access, {
    expiresIn: '30m',
  });
}

app.post('/api/auth/register', async (req, res) => {
  try {
    const { password } = req.body;
    const hash = await bcrypt.hash(password, 10);
    const newUser = new User({
      email: req.body.email,
      username: req.body.username,
      password: hash,
    });
    await newUser.save();
    return res.status(201).send('success');
  } catch (error) {
    if (error) {
      if (error.code === 11000) {
        if (error.keyPattern.username) {
          return res.status(409).send('username already taken');
        }
        return res.status(409).send('email already taken');
      }
      return handleError(res);
    }
  }
});

app.post('/api/auth/login', async (req, res) => {
  try {
    const user = await User.findOne({ username: req.body.username }).select(
      '-short',
    );
    console.log(user);
    if (user == null) return res.status(409).send('cannot find user');
    const match = await bcrypt.compare(req.body.password, user.password);
    if (match) {
      const info = { user: user.username, userID: user.id };
      const accessToken = generateAccessToken(info);
      const refreshToken = jwt.sign(info, privateKey.refresh);
      const newRefreshToken = new RefreshToken({
        username: user.username,
        refreshToken,
      });
      newRefreshToken.save();
      return res.status(200).json({ accessToken, refreshToken });
    }
    return res.status(403).send('wrong password');
  } catch (error) {
    return handleError(res);
  }
});

app.post('/api/auth/accesstoken', async (req, res) => {
  let token = req.headers.authorization;
  if (token.startsWith('Bearer ')) {
    token = token.slice(7, token.length);
    try {
      const decoded = jwt.verify(token, privateKey.refresh);
      const info = { user: decoded.user };
      const accessToken = generateAccessToken(info);
      res.status(200).json({ accessToken });
    } catch (error) {
      return handleError(res);
    }
  }
});
