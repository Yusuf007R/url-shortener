const app = require('../server');

/// JwtVirify
const jwtVerify = require('../utils/jwtVerify');

// models
const User = require('../models/user');

app.get('/api/getshortlinks', async (req, res) => {
  const { page } = req.query;
  const { limit } = req.query;
  try {
    const jwtValidated = jwtVerify(req.headers.authorization);
    if (!jwtValidated.valid) {
      if (jwtValidated.expiredToken) {
        return res.status(401).send('expiredToken');
      }
      return res.status(403).send('invalidToken');
    }
    const { userID } = jwtValidated.decoded;
    const skip = (page - 1) * limit;
    const user = await User.findOne({ _id: userID }).select('short');
    const totalLinks = user.short.length;
    const totalPages = Math.ceil(user.short.length / limit);
    await user
      .populate({
        path: 'short',
        options: { limit, skip },
        select: '-_id -__v',
      })
      .execPopulate();

    return res.status(200).json({
      info: {
        page,
        totalPages,
        linksPerPage: limit,
        totalLinks,
      },
      result: user.short,
    });
  } catch (error) {
    return res.status(400).send('Error');
  }
});

app.get('/api/getuserdata', async (req, res) => {
  try {
    const jwtValidated = jwtVerify(req.headers.authorization);
    if (!jwtValidated.valid) {
      if (jwtValidated.expiredToken) {
        return res.status(401).send('expiredToken');
      }
      return res.status(403).send('invalidToken');
    }
    const { userID } = jwtValidated.decoded;

    const user = await User.findOne({ _id: userID });
    return res.status(200).json({ date: user.date, email: user.email });
  } catch (error) {
    return res.status(400).send('Error');
  }
});
