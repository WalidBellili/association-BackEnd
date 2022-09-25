require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const morgan = require("morgan");
const port = process.env.PORT;

app.use(morgan("tiny"));
app.use(express.json());
app.use(cors("*"));

app.listen(port, () => {
  console.log(`Server Started on port ${port}`);
});
