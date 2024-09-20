const express = require("express");
const Aboutrouter = require("./src/Router/about");
const Hellorouter = require('./src/Router/hello');
const Submitrouter = require("./src/Router/submit");
const Feedbkrouter = require("./src/Router/feedback");
const Statusrouter = require("./src/Router/status");


 const app = express();

 app.get( '/', (req, res)=>{
       res.send('hello world')
 } ) 

 app.listen(3000).on("listening", ()=>{
    console.log('lestening is on')
 })

 app.use(express.json());

 app.use('/about', Aboutrouter);
 app.use('/hello', Hellorouter);
 app.use('/submit', Submitrouter);
 app.use('/feedback', Feedbkrouter);
 app.use('/status', Statusrouter);