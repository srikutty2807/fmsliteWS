const express = require("express");
const fs = require("fs");
const cluster = require('cluster');
const localtunnel = require("localtunnel");
const { getReqData } = require("./utils/constants");
const numCPUs = require('os').cpus().length;
require("dotenv").config();
const app = express();
app.use(express.json())
if (cluster.isMaster) {
  console.log(`Master ${process.pid} is running`);
  //getReqData()
  
  // Fork workers.
  for (let i = 0; i < numCPUs; i++) {
    cluster.fork();
  }
 
  // This event is first when worker died
  cluster.on('exit', (worker, code, signal) => {
    console.log(`worker ${worker.process.pid} died`);
  });
}else{
  
  app.listen(process.env.PORT,() => {
    app.get("/",async(req,res)=>{
      res.status(200).send({message:"success"})
    })
    
      console.log(`server started in ${process.env.PORT}`);
  });

  fs.readdirSync("./Route").map((file) => app.use(require("./Route/" + file)));
  
}
 

module.exports = app;
