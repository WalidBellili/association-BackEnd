const express = require("express");
const app = express();
const associations = require("../associations.json");
const { checkIfExists } = require("../middlewares/associations");

app.get("/", (req, res) => {
  res.json(associations);
});
app.get("/:slug", checkIfExists, (req, res) => {});

module.exports = app;
