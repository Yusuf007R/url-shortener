const { nanoid } = require('nanoid');
const app = require('../server');

/// JwtVirify
const jwtVerify = require('../utils/jwtVerify');

// models
const ShortUrl = require('../models/shortUrl');
const User = require('../models/user');

async function shortUrlGenerator(info) {
  const newShortUrl = new ShortUrl({
    fullUrl: info.fullUrl,
    shortUrl: nanoid(6),
    user: info.user,
    userID: info.userID,
  });
  await newShortUrl.save((err) => {
    if (err) shortUrlGenerator();
  });
  const user = await User.findOne({ username: info.user });
  user.short.push(newShortUrl.id);
  await user.save();
  return newShortUrl;
}

app.get('/:tagId', async (req, res) => {
  const urlData = await ShortUrl.findOne({ shortUrl: req.params.tagId });
  if (urlData !== null) {
    const { fullUrl } = urlData;
    urlData.click += 1;
    urlData.save();
    res.redirect(`http://${fullUrl}`);
    return;
  }
  res.status(200).send('xd');
});

app.post('/api/shortUrl', async (req, res) => {
  const jwtValidated = jwtVerify(req.headers.authorization);
  if (!jwtValidated.valid) {
    if (jwtValidated.expiredToken) return res.status(403).send('expiredToken');
    return res.status(403).send('invalidToken');
  }
  const info = {
    fullUrl: req.body.fullUrl,
    user: jwtValidated.decoded.user,
    userID: jwtValidated.decoded.userID,
  };
  const shorturl = await shortUrlGenerator(info);
  return res.status(200).json(shorturl.shortUrl);
});
