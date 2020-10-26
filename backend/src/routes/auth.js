const app = require("../server");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const jwtVerify = require("../utils/jwtVerify");
require("dotenv").config();

//configs

const privateKey = require("../configs").privateKey;

//models

const User = require("../models/user");
const RefreshToken = require("../models/refreshToken");

//

app.post("/auth/register", async (req, res) => {
  let password = req.body.password;
  bcrypt.hash(password, 10, async function (err, hash) {
    const newUser = new User({
      username: req.body.username,
      password: hash,
    });
    newUser.save((err) => {
      if (err) {
        if (err.code == 11000) {
          return res.status(409).send("username already taken");
        }
      }
      res.status(201).send("success");
    });
  });
});

app.post("/auth/login", async (req, res) => {
  let user = await User.findOne({ username: req.body.username });
  console.log(user);
  if (user == null) return res.status(400).send("cannot find user");

  bcrypt.compare(req.body.password, user.password, async function (
    err,
    result
  ) {
    if (result) {
      let test = { user: user.username };
      const accessToken = generateAccessToken(test);
      const refreshToken = jwt.sign(test, privateKey.refresh);
      const newRefreshToken = new RefreshToken({
        username: user.username,
        refreshToken: refreshToken,
      });
      newRefreshToken.save();
      res.status(200).json({ accessToken, refreshToken });
    } else {
      res.send("wrong password");
    }
  });
});

app.post("/auth/accesstoken", async (req, res) => {
  let token = req.headers["authorization"];
  if (token.startsWith("Bearer ")) {
    // Remove Bearer from string
    token = token.slice(7, token.length);
    jwt.verify(token, privateKey.refresh, (err, decoded) => {
      console.log(err);
      if (err == null) {
        res.status(200).send("ok");
      } else {
        res.status(403).send("error");
      }
    });
  }
});

function generateAccessToken(data) {
  return jwt.sign(data, privateKey.access, {
    expiresIn: "15s",
  });
}
