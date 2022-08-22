const express = require("express");
const app = express();
const port = 5000;
const morgan = require("morgan");
const cors = require("cors");
const associations = require("./associations.json");
const associationsRoute = require("./routes/associations");

app.use(morgan("tiny"));
app.use(cors());
app.use(express.json());

app.use("/associations", associationsRoute);

app.listen(port, () => {
  console.log("Server started on port: " + port);
});
