//jshint esversion:9
const SensorData = require("./../models/sensorDataSchema");

exports.getAllSensorData = async (req, res) => {
	try {
		const sensorData = await SensorData.find();
		res.status(200).json({
			status: "success",
			results: sensorData.length,
			data: {
				sensorData,
			},
		});
	} catch (err) {
		res.status(400).json({
			status: "fail",
			message: { err },
		});
	}
};

exports.getSensorData = async (req, res) => {
	try {
		const sensorData = await SensorData.findById(req.params.id);
		res.status(200).json({
			status: "success",
			data: {
				sensorData,
			},
		});
	} catch (err) {
		res.status(400).json({
			status: "fail",
			message: { err },
		});
	}
};

exports.addSensorData = async (req, res) => {
	console.log(req.body);
	try {
		const newSensorData = await SensorData.create(req.body);
		newSensorData.time = new Date(Date.now());
		console.log(newSensorData);
		res.status(201).json({
			status: "success",
			data: {
				newSensorData,
			},
		});
	} catch (err) {
		res.status(400).json({
			status: "fail",
			message: { err },
		});
	}
};
exports.deleteAllSensorData = async (req, res) => {
	try {
		await SensorData.deleteMany();
		console.log("Data deleted");
		res.status(204).json({
			status: "success",
			message: "deleted",
		});
	} catch (err) {
		res.status(400).json({
			status: "fail",
			message: { err },
		});
	}
};
