const express = require("express");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const cors = require("cors");
const route = require("./route");

const app = express();

const errorRoute = (req, res, next) => {
  res.status(500).send("No such page");
  next();
};

const startServer = port => {
  app
    .use(cors())
    .use(bodyParser.urlencoded({ extended: false }))
    .use(bodyParser.json())
    .use(morgan("dev"))
    .use("/", route)
    .use(errorRoute);
  app.listen(process.env.PORT || port, () => {
    console.log(`server was started port: ${process.env.PORT || port}`);
  });
};

module.exports = startServer;
