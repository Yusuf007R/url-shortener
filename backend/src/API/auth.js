const app = require("../server");
const port = require("../configs").port;
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const privateKey = require("../configs").privateKey;
require("../Database");
require("dotenv").config();

app.listen(port, () => {
  console.log(`listening in port:${port}`);
});
