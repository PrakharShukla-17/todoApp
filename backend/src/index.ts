
import express,{ Application, Request, Response } from "express";
import { userSignupSchema } from "./schemas/userSignupSchema.js";
import { userValidation } from "./middlewares/userValidation.js";
import { UserModel } from "./db.js";
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"
import { JWT_SECRET } from "./config.js";
import { authentication } from "./middlewares/authentication.js";


const app: Application=express();

app.use(express.json());



app.post("/api/v1/signup",async(req:Request,res:Response)=>{
  try {
    const email = req.body.email;
    const username = req.body.username;
    const password = req.body.password;

    //validation logic:

    //check if email already exists:
    const existingUser = await UserModel.findOne({
      email,
    });
    if (existingUser) {
      return res.status(400).json({ msg: "Email already exists" });
    }

    //hashing the password:
    const hash = await bcrypt.hash(password, 10);

    //making the entry in the db
    await UserModel.create({
      email,
      username,
      password: hash,
    });

    res.status(201).json({
      msg: "user singup succesfully",
    });
  } catch (e) {
    //catching erros
    console.log("Erros", e);
    return res.status(500).json({
      msg: "some server side error, go shoot some darts",
    });
  }

})



app.post("/api/v1/signin",async(req:Request,res:Response)=>{
try{
  const {email,password}=req.body;

  //whether this guy is even signed up or not
  const existingUser=await UserModel.findOne({
    email
  })

  if(!existingUser){
    return res.status(402).json({
      msg:"sir, singup toh krlo"
    })
  }

  const check=await bcrypt.compare(password,existingUser.password as string);
  if(!check){
    return res.status(400).json({
      msg:"Wrong password"
    })
  }

  const token=jwt.sign({
    id:existingUser._id
  },JWT_SECRET)

  res.status(200).json({
    token,
    msg:"singin succesful"
  })

}catch(e){
    console.log("Erros",e);
    return res.status(500).json({
      msg:"some error while singin"
    })
}
})


app.post("/api/v1/todo",(req:Request,res:Response)=>{

})

app.get("/api/v1/todos",(req:Request,res:Response)=>{

})

app.put("/api/v1/todos",(req:Request,res:Response)=>{

})

app.delete("/api/v1/todo",(req:Request,res:Response)=>{

})









app.listen(3000,()=>{
    console.log("Welcome to server port 3000")
})