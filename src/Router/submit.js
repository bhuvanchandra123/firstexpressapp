const express = require("express");
const Submitrouter = express.Router();

// const app = express();
// app.use(express.json());

 Submitrouter.post("/", (req, res)=>{
     const body = req.body; 
       if(!body || Object.keys(body).length === 0){
          return res.status(400).send({error: "Name is Required"});
       }
     res.send({body, message: "hello, Alice"});
 } )

 module.exports = Submitrouter;