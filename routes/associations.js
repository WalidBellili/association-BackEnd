const express = require("express");
const app = express();
const associations = require("../associations.json");
const messageJson = require("../messages.json");
const moment = require("moment");
const { checkIfExists } = require("../middlewares/association");

app.get("/", (req, res) => {
  res.json(associations);
});
app.get("/:slug", checkIfExists, (req, res) => {
  //   res.json(req.association);
  res.json(messageJson);
});
// ***********************************

app.post("/:slug", checkIfExists, (req, res) => {
  const message = {
    name: req.body.name,
    contenu: req.body.contenu,
    date: moment(),
    slug: req.body.name.toLowerCase().replace(/[^\w]/gi, "-"),
  };

  messageJson.push(message);
  res.json(message);
});
// *********************************

module.exports = app;
