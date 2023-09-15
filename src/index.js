const express = require("express");
const bodyParser = require("body-parser");

const { PORT } = require("./config/serverConfig");
const CityRepository = require("./repository/city-repository");

const setupAndStartServer = async () => {
  //create the express object
  const app = express();

  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));

  //server
  app.listen(PORT, () => {
    console.log(`Server is started at ${PORT}`);
    const repo = new CityRepository();
    repo.createCity({ name: "Mumdsbai" });
  });
};

setupAndStartServer();
