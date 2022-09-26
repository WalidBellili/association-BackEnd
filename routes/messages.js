const express = require("express");
const moment = require("moment/moment");
const app = express();
const { checkIfAssociationExists } = require("../middlewares/messages");
const messages = require("../messages.json");

app.get("/", (req, res) => {
  const sortedMesaages = messages.sort((a, b) => {
    return moment(b.date).format("x") - moment(a.date).format("x");
  });
  res.json(sortedMesaages);
});

app.post("/", checkIfAssociationExists, (req, res) => {
  const message = {
    ...req.body,
    date: moment().format(),
    association: req.body.association,
  };

  messages.push(message);

  res.json(message);
});

module.exports = app;
