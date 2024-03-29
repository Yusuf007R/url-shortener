const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const app = require('../server');
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
    expiresIn: '15m',
  });
}

function login(user) {
  const info = { user: user.username, userID: user.id };
  const accessToken = generateAccessToken(info);
  const refreshToken = jwt.sign(info, privateKey.refresh);
  const newRefreshToken = new RefreshToken({
    username: user.username,
    refreshToken,
  });
  newRefreshToken.save();
  return { accessToken, refreshToken };
}

app.post('/api/auth/register', async (req, res) => {
  const checkEmail = await User.findOne({ email: req.body.email });
  const checkUsername = await User.findOne({ username: req.body.username });
  if (checkEmail || checkUsername)
    return res
      .status(409)
      .json({ emailTaken: !!checkEmail, usernameTaken: !!checkUsername });

  try {
    const { password } = req.body;
    const hash = await bcrypt.hash(password, 10);
    const newUser = new User({
      email: req.body.email,
      username: req.body.username,
      password: hash,
    });
    await newUser.save();
    const result = login(newUser);
    return res.status(201).json(result);
  } catch (error) {
    if (error) {
      return handleError(res);
    }
  }
});

app.post('/api/auth/login', async (req, res) => {
  try {
    const user = await User.findOne({ username: req.body.username }).select(
      '-short',
    );
    if (user == null) return res.status(409).json({ notUser: true });
    const match = await bcrypt.compare(req.body.password, user.password);
    if (match) {
      const result = login(user);
      return res.status(200).json(result);
    }
    return res.status(403).json({ wrongPass: true });
  } catch (error) {
    return handleError(res);
  }
});

app.get('/api/auth/accesstoken', async (req, res) => {
  let token = req.headers.authorization;
  if (!token.startsWith('Bearer ')) {
    return handleError(res);
  }
  try {
    token = token.slice(7, token.length);
    const decoded = jwt.verify(token, privateKey.refresh);
    const dbToken = await RefreshToken.findOne({ refreshToken: token });
    if (dbToken == null) throw new Error();
    const info = { user: decoded.user, userID: decoded.userID };
    const accessToken = generateAccessToken(info);
    return res.status(200).json({ accessToken });
  } catch (error) {
    return handleError(res);
  }
});

app.post('/api/auth/logout', async (req, res) => {
  const { refreshToken } = req.body;
  try {
    await RefreshToken.deleteOne({ refreshToken });

    return res.status(200).json('success');
  } catch (error) {
    return handleError(res);
  }
});
