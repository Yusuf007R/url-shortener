const jwt = require('jsonwebtoken');
const { privateKey } = require('../configs');

function jwtVerify(header) {
  let token = header;
  if (token.startsWith('Bearer ')) {
    token = token.slice(7, token.length);
  }
  return jwt.verify(token, privateKey.access, (error, decoded) => {
    let expiredToken = false;
    if (error == null) {
      return {
        valid: true,
        error,
        decoded,
        expiredToken,
      };
    }
    const err = error.toString();
    if (err.startsWith('TokenExpiredError')) expiredToken = true;
    return {
      valid: false,
      err,
      decoded,
      expiredToken,
    };
  });
}

module.exports = jwtVerify;
