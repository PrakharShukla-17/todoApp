import express, { Application, Request, Response } from "express";
import { userSignupSchema } from "./schemas/userSignupSchema.js";
import { userValidation } from "./middlewares/userValidation.js";
import { TodoModel, UserModel } from "./db.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { JWT_SECRET } from "./config.js";
import { authentication } from "./middlewares/authentication.js";
import { userIdDefinition } from "./requestDefinitions/userIdDefinition.js";
import mongoose from "mongoose";

const app: Application = express();

app.use(express.json());

app.post("/api/v1/signup", async (req: Request, res: Response) => {
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
});

app.post("/api/v1/signin", async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;

    //whether this guy is even signed up or not
    const existingUser = await UserModel.findOne({
      email,
    });

    if (!existingUser) {
      return res.status(402).json({
        msg: "sir, singup toh krlo",
      });
    }

    const check = await bcrypt.compare(
      password,
      existingUser.password as string,
    );
    if (!check) {
      return res.status(400).json({
        msg: "Wrong password",
      });
    }

    const token = jwt.sign(
      {
        id: existingUser._id,
      },
      JWT_SECRET,
    );

    res.status(200).json({
      token,
      msg: "singin succesful",
    });
  } catch (e) {
    console.log("Erros", e);
    return res.status(500).json({
      msg: "some error while singin",
    });
  }
});

app.post(
  "/api/v1/todo",
  authentication,
  async (req: userIdDefinition, res: Response) => {
    try {
      const { title, description, priority } = req.body;
      //userID comes from middleware via token auth

      await TodoModel.create({
        title,
        description,
        priority,
        userId: new mongoose.Types.ObjectId(req.userId),
      });

      res.status(201).json({
        msg: "added succesfully",
      });
    } catch (e) {
      return res.status(403).json({
        msg: "error while adding todo",
      });
    }
  },
);

app.get(
  "/api/v1/todos",
  authentication,
  async (req: userIdDefinition, res: Response) => {
    console.log("userId", req.userId);

    const content = await TodoModel.find({
      userId: new mongoose.Types.ObjectId(req.userId),
    });

    res.json({
      content,
    });
  },
);

app.put("/api/v1/todo/:id", authentication, async (req: userIdDefinition, res: Response) => {
    try {
      const todoId = req.params.id;
      const { title, description, priority } = req.body;

      if (!todoId) {
        return res.status(400).json({
          msg: "Todo id not provided",
        });
      }

      const updatedTodo = await TodoModel.findOneAndUpdate(
        {
          _id: new mongoose.Types.ObjectId(todoId as string),
          userId: new mongoose.Types.ObjectId(req.userId),
        },
        {
          ...(title && { title }),
          ...(description && { description }),
          ...(priority && { priority }),
        },
        { new: true },
      );

      if(!updatedTodo){
        return res.status(400).json({
          msg:"todo not updated succesfully"
        })
      }

      res.status(200).json({
        msg:"todo updated succesfully",
        todo:updatedTodo
      })
    } catch (e) {
      res.status(500).json({ message: "Internal server error" });
      console.log("Erro",e);
    }
  },
);

app.delete("/api/v1/todo/:id", authentication, async(req: userIdDefinition, res: Response) => {

  try{
      const todoId=req.params.id;
      const userId=req.userId;

      if(!todoId){
        res.status(403).json({
          msg:"todo id not provided"
        })
      }

      const deletedTodo=await TodoModel.findOneAndDelete({
          _id: new mongoose.Types.ObjectId(todoId as string),
          userId: new mongoose.Types.ObjectId(req.userId),
      })

      if(!deletedTodo){
        return res.status(403).json({
          msg:"tdod not deleted, fuck you for deleting someone elses"
        })
      }

      res.status(201).json({
        msg:"Deleted succesfully",
        todo: deletedTodo
      })

    }catch(e){
      console.log("Erros",e);
      return res.status(500).json({
        msg:"some server errpr i guess"
      })
    }
});

app.listen(3000, () => {
  console.log("Welcome to server port 3000");
});
