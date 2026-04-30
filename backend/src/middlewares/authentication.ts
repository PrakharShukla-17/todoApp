
import { Request,Response,NextFunction } from "express"
import jwt from "jsonwebtoken"
import { JWT_SECRET } from "../config.js";
import { userIdDefinition } from "../requestDefinitions/userIdDefinition.js";


interface JWTpayload{
    id:string
}

export const authentication=(req:userIdDefinition,res:Response,next:NextFunction)=>{
    try{
    
    const authHeader=req.headers.authorization;

    if (!authHeader || !authHeader.startsWith("Bearer ")) {
  return res.status(401).json({
    msg: "Token missing or invalid"
  });
}

const token = authHeader.split(" ")[1];
    
    const decoded=jwt.verify(token as string,JWT_SECRET) as JWTpayload;

    if(!decoded){
        res.status(403).json({
            msg:"invalid token"
        })
        return;
    }


    req.userId=decoded.id;
    next();

    }
    catch(e){
     console.log("Erros",e);
     return void res.status(403).json({
        msg:"Error during auth(token issue)"
     })
    }
}