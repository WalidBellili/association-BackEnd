require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const morgan = require("morgan");
const port = process.env.PORT;
const associationsRoutes = require("./routes/associations");
const messagesRoutes = require("./routes/messages");

app.use(morgan("tiny"));
app.use(express.json());
app.use(cors("*"));

app.use("/associations", associationsRoutes);
app.use("/messages", messagesRoutes);

app.listen(port, () => {
  console.log(`Server Started on port ${port}`);
});
