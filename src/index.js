const express = require("express");
require("dotenv").config();

const { PORT } = require("./config/serverConfig");

const setupAndStartServer = async () => {
  //create the express object
  const app = express();

  //server
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
};

setupAndStartServer();
