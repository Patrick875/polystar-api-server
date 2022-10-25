//jshint esversion:9
const mongoose = require("mongoose");

const sensorDataSchema = mongoose.Schema({
	temperature: Number,
	humidity: Number,
	sensor: {
		type: String,
		trim: true,
	},
	time: Date,
});

const SensorData = new mongoose.model("SensorData", sensorDataSchema);

module.exports = SensorData;
