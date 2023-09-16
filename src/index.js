const express = require("express");
const bodyParser = require("body-parser");

const { PORT } = require("./config/serverConfig");

const setupAndStartServer = () => {
  //create the express object
  const app = express();

  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));

  //server
  app.listen(PORT, () => {
    console.log(`Server is started at ${PORT}`);
  });
};

setupAndStartServer();
