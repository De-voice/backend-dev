
const port = 5000;
const express = require("express");
app = express();

app.get("/",(req,res) => {
    res.send("Hello, Universe!");
})


// let message = "<h2>this is the beginning of the end!!</h2>"

 app.listen(port,() => {
     console.log(`Server is listening on port ${port}`);
 });



