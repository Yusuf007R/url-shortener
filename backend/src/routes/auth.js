const app = require("../server");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const privateKey = require("../configs").privateKey;
require("../Database");
require("dotenv").config();
