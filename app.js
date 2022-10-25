//jshint esversion:9
const express = require("express");
const sensorDataRouter = require("./routes/sensorDataRouter");
const app = express();

app.use(express.json());
app.use("/api/v1/sensorData", sensorDataRouter);

module.exports = app;
