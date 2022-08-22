const express = require("express");
const app = express();
const associations = require("../associations.json");
const message = require("../messages.json");
const moment = require("moment");
const { checkIfExists } = require("../middlewares/association");

app.get("/", (req, res) => {
  res.json(associations);
});
app.get("/:slug", checkIfExists, (req, res) => {
  res.json(req.association);
});
// ***********************************

app.post("/:slug", checkIfExists, (req, res) => {
  const message = {
    name: req.body.name,
    contenu: req.body.contenu,
    date: moment(),
    slug: req.body.name.toLowerCase().replace(/[^\w]/gi, "-"),
  };
  res.json(message);
});
module.exports = app;
