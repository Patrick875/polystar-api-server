//jshint esversion:9
const mongoose = require("mongoose");
const validator = require("validator");
const userSchema = mongoose.Schema({
	name: {
		type: String,
		trim: true,
		required: [true, "a user must have a name"],
	},
	email: {
		type: String,
		unique: [true, "account already exists"],
		required: [true, "user must have an email"],
		validate: [validator.isEmail, "provide a valid email"],
	},
	username: { type: String, trim: true },
	password: {
		type: String,
		required: [true, "user must provide a password"],
		select: false,
	},
	confirmPassword: {
		type: String,
		required: [true, "user must provide a password"],
		select: false,
	},
});

const User = new mongoose.model("User", userSchema);

module.exports = User;
