
import express,{ Application, Request, Response } from "express";

const app: Application=express();






app.get("/", (req, res) => {
  res.send("Hey");
});













app.listen(3000,()=>{
    console.log("Welcome to server port 3000")
})