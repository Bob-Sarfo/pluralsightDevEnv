import express from "express";
import chalk from "chalk";


const server = express();

server.get("/",(res,req)=>{
  res.send("Hello World");
});


server.listen(3000,()=>{
  console.log(chalk.green.bold("server successfully started on localhost:3000"));
});
