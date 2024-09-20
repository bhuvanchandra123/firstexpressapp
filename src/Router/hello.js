const express = require("express");
const Hellorouter = express.Router();

Hellorouter.get("/", (req, res)=>{
     res.send("hello world!")
})

module.exports = Hellorouter;