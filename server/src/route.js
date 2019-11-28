const express = require("express");

const allTrips = require("../db/trips.json");

const route = express.Router();
route.get("/allTrips", (req, res, next) => {
  res.status(200).send(allTrips);
});

module.exports = route;
