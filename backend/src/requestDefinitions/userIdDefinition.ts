import {Request} from "express"



export interface userIdDefinition extends Request{
    userId?:string
}