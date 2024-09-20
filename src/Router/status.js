const express = require("express");
const Statusrouter = express.Router();

 Statusrouter.get('/', (req, res)=>{
        res.send({ "message": "Server is running",
	               "timestamp": "2024-09-19T12:00:00Z"
                });
 } )



 module.exports = Statusrouter;