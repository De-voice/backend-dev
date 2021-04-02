const mongoose = require('mongoose');

mongoose.connect(
	process.env.DATABASE_HOST,
	{ useUnifiedTopology: true, useNewUrlParser: true },
	() => {
		console.log("contected");
	}
);

const db = mongoose.connection;


module.exports = db;