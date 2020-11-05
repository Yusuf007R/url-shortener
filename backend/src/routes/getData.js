const app = require('../server');

/// JwtVirify
const jwtVerify = require('../utils/jwtVerify');

// models
const User = require('../models/user');

app.get('/api/getshortlinks', async (req, res) => {
  const { page } = req.query;
  const { limit } = req.query;
  const jwtValidated = jwtVerify(req.headers.authorization);
  if (!jwtValidated.valid) {
    if (jwtValidated.expiredToken) return res.status(403).send('expiredToken');
    return res.status(403).send('invalidToken');
  }
  const { userID } = jwtValidated.decoded;
  // console.log(jwtValidated.decoded);
  const skip = (page - 1) * limit;
  const user = await User.findOne({ _id: userID }).select('short');
  const totalPages = Math.round(user.short.length / limit);
  await user
    .populate({
      path: 'short',
      options: { limit, skip },
      select: '-_id -__v',
    })
    .execPopulate();

  return res
    .status(200)
    .json({
      info: { page, totalPages, docsPerPage: limit },
      result: user.short,
    });
});
