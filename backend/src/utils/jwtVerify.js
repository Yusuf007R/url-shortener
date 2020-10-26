const jwt = require("jsonwebtoken");
const privateKey = require("../configs").privateKey;

function jwtVerify(token) {
  return jwt.verify(token, privateKey.access, function (error, decoded) {
    return { error, decoded };
  });
}

module.exports = jwtVerify;
