const express = require("express");
const morgan = require("morgan");
const route = require("./route/route");
require("dotenv").config();

const db = require("./db/indexdb");

const app = express();
const port = 8080;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(morgan());
app.use("/", route);

db.on("error", console.error.bind(console, "MongoDB connection error"));
db.on("once", console.log.bind(db, "yay!!! mongodb connected"));

app.listen(port, () => {
	console.log(`sever running on ${port}`);
});
