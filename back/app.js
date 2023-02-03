const express = require("express");
const app = express();
const expressJson = app.use(express.json())
module.exports = app;
module.exports = expressJson
