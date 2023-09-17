const express = require("express");
const bodyParser = require("body-parser");

const { PORT } = require("./config/serverConfig");
const ApiRoutes = require("./routes/index");

const { Airport, City } = require("./models/index");
const db = require("./models/index");

const setupAndStartServer = () => {
  //create the express object
  const app = express();

  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));

  app.use("/api", ApiRoutes);

  //server
  app.listen(PORT, async () => {
    console.log(`Server is started at ${PORT}`);

    if (process.env.SYNC_DB) {
      db.sequelize.sync({ alter: true });
    }
  });
};

setupAndStartServer();
