const express = require("express");
const bodyParser = require("body-parser");

const { PORT } = require("./config/serverConfig");
const ApiRoutes = require("./routes/index");

const setupAndStartServer = () => {
  //create the express object
  const app = express();

  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));

  app.use("/api", ApiRoutes);

  //server
  app.listen(PORT, () => {
    console.log(`Server is started at ${PORT}`);
  });
};

setupAndStartServer();
