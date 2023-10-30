const express = require("express");
require("dotenv").config();

const picturesRouter = require("./routes/picturesRouter");

const app = express();

const port = process.env.PORT || 3000;

app.use(picturesRouter);

app.listen(port, () => {
  console.log(`Server is running in the port: ${port}.`);
});
