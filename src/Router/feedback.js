const express = require("express");
const Feedbkrouter = express.Router();

 Feedbkrouter.post('/', (req, res) =>{
      const body = req.body;
      if(!body || Object.keys(body).length === 0){
         return res.status(400).send({error: "Feedback message is required"});
      }
      res.send({"status": "Success",
    	        "message": "Feedback received: Great app!"
            })
 } );

module.exports = Feedbkrouter;