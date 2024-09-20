const express = require("express");
const Aboutrouter = express.Router();

Aboutrouter.get("/", (req, res)=>{
     res.send({ "appName": "My Express App", "version": "1.0.0" })
})

module.exports = Aboutrouter;