//jshint esversion:9
const express = require("express");
const router = express.Router();
const sensorsDataController = require("./../controllers/sensorDataController");

router
	.route("/")
	.get(sensorsDataController.getAllSensorData)
	.post(sensorsDataController.addSensorData)
	.delete(sensorsDataController.deleteAllSensorData);
router.route("/:id").get(sensorsDataController.getSensorData);

module.exports = router;
