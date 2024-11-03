const express = require("express");

const app = express()

const port = 8061

dbConnection()

app.get("/", (req, res) =>{
    res.send("hello");
})

app.listen(port, console.log("server started : http://127.0.0.1:8061"))