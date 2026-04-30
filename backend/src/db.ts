import mongoose, {Schema, model} from "mongoose"

mongoose.connect("mongodb+srv://rishishukla17122003:r0snBdDZrjDUlWIY@cluster0.qgek25n.mongodb.net/TODO");


const UserSchema=new Schema({
    email: {type:String ,require:true, unique:true},
    username: {type:String, require:true},
    password:{type:String, require:true}
})

const TodoSchema=new Schema({
    title:{type: String, require:true},
    description:{type: String, require:true},
    priority:{type: String, require:true},
    userId:{type:mongoose.Types.ObjectId , require:true, ref:'User'},
})






export const TodoModel= model("Todo",TodoSchema)
export const UserModel= model("User",UserSchema)