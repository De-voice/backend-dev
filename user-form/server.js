const express = require("express");
const router = require("./route/user-route");
require("dotenv").config();
const db = require("./db/userdb");



const PORT = process.env.PORT || 5000;

const app = express();
app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use("/",router)


db.on("error", console.error.bind(console, "MongoDB connection error"));
db.on("once", console.log.bind(db, "yay!!! mongodb connected"));


app.listen(PORT,() => {
    console.log(`server running on port ${PORT}`);
});