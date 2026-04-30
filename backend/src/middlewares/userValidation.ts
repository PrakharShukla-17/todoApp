import { Schema } from "zod/v3";
import {NextFunction, Response,Request} from 'express'


export const userValidation=(schema:Schema)=>(res:Response,req:Request,next:NextFunction):void=>{
        const result=schema.safeParse(req.body);
        if(!result.success){
            res.status(403).json({
                msg:"Invalid Input"
            })
            return;
        }
        
        next();
        
}