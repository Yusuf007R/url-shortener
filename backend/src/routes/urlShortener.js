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
  });
  await newShortUrl.save((err) => {
    if (err) shortUrlGenerator();
  });
  const userx = await User.findOne({ username: info.user });
  userx.short.push(newShortUrl.id);
  await userx.save();
  const xd = await User.findOne({ username: info.user }).populate('short');
  console.log(xd);
  const xdd = await User.findOne({ username: info.user });
  console.log(xdd);
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

  // const { fullUrl } = req.body;
  const info = { fullUrl: req.body.fullUrl, user: jwtValidated.decoded.user };
  const shorturl = await shortUrlGenerator(info);
  return res.status(200).json(shorturl.shortUrl);
});
