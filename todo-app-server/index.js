const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const route = require("./route/route-index");
require("dotenv").config();

const db = require("./db/db");

const app = express();
const port = 8080;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(morgan());
app.use(cors())
app.use("/todos", route);

db.on("error", console.error.bind(console, "MongoDB connection error"));
db.on("once", console.log.bind(db, "yay!!! mongodb connected"));

app.listen(port, () => {
	console.log(`sever running on ${port}`);
});
