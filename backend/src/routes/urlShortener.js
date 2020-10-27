const { nanoid } = require('nanoid');
const app = require('../server');

/// JwtVirify
const jwtVerify = require('../utils/jwtVerify');

// models
const ShortUrl = require('../models/shortUrl');

async function shortUrlGenerator(fullUrl) {
  const newShortUrl = new ShortUrl({
    fullUrl,
    shortUrl: nanoid(6),
  });

  await newShortUrl.save((err) => {
    if (err) shortUrlGenerator();
  });
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
  const { fullUrl } = req.body;
  const shorturl = await shortUrlGenerator(fullUrl);
  return res.status(200).json(shorturl.shortUrl);
});
