const app = require("../server");
const { nanoid, urlAlphabet } = require("nanoid");

//models
const shortUrl = require("../models/shortUrl");

app.get("/:tagId", async function (req, res) {
  let urlData = await shortUrl.findOne({ shortUrl: req.params.tagId });
  if (urlData !== null) {
    let fullUrl = urlData.fullUrl;
    res.redirect("http://" + fullUrl);
    return;
  }
  res.status(200).send("xd");
});

app.post("/api/shortUrl", async (req, res) => {
  console.log(req.body.fullUrl);
  const fullUrl = req.body.fullUrl;
  const shorturl = await shortUrlGenerator(fullUrl);
  res.status(200).json(shorturl.shortUrl);
});

async function shortUrlGenerator(fullUrl) {
  let newShortUrl = new shortUrl({
    fullUrl: fullUrl,
    shortUrl: nanoid(6),
  });

  await newShortUrl.save((err) => {
    if (err) {
      shortUrlGenerator();
    }
  });
  return newShortUrl;
}
