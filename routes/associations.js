const express = require("express");
const app = express();
const associations = require("../associations.json");
const { checkIfExists } = require("../middlewares/association");

app.get("/", (req, res) => {
  res.json(associations);
});
app.get("/:slug", checkIfExists, (req, res) => {
  res.json(req.association);
});

module.exports = app;
