const app = require("./server");
const port = require("./configs").port;
require("./Database");
require("./routes/auth");
require("./routes/UrlShortener");

app.listen(port, () => {
  console.log(`listening in port:${port}`);
});
