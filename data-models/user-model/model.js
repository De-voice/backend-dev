const mongoose = require("mongoose");

const Todo = new mongoose.Schema({
	name: { type: String, required: true },

	email: { type: String, required: true, lowercase: true },

	zipcode: {
		type: String,
		min: [10000, "zipcode too short"],
		max: [99999, "zipcode too long"],
	},

	phoneNumber: { type: Number, required: true },
});


module.exports = mongoose.model("todos",Todo)