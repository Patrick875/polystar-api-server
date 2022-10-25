//jshint esversion:9
const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");

//user defined modules

dotenv.config({ path: "./config.env" });

const app = require("./app");

const DB = process.env.DATABASE_LOCAL;
const PORT = process.env.LOCAL_PORT;
//connection to database

mongoose
	.connect(DB, {
		useNewUrlParser: true,
		useUnifiedTopology: true,
	})
	.then((con) => {
		console.log("DB connection successful !!!");
	})
	.catch((err) => {
		console.log(err.name, err.message);
	});

//connection to server

app.listen(PORT, () => {
	console.log(`App connected to port ${PORT}`);
});
