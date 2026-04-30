import mongoose from "mongoose";
interface Todo {
    title: string;
    description: string;
    priority: number;
    userId: mongoose.Types.ObjectId;
}
export declare const TodoModel: mongoose.Model<Todo, {}, {}, {}, mongoose.Document<unknown, {}, Todo, {}, mongoose.DefaultSchemaOptions> & Todo & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
} & {
    id: string;
}, any, Todo>;
export declare const UserModel: mongoose.Model<{
    email?: string | null;
    username?: string | null;
    password?: string | null;
}, {}, {}, {
    id: string;
}, mongoose.Document<unknown, {}, {
    email?: string | null;
    username?: string | null;
    password?: string | null;
}, {
    id: string;
}, mongoose.DefaultSchemaOptions> & Omit<{
    email?: string | null;
    username?: string | null;
    password?: string | null;
} & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}, "id"> & {
    id: string;
}, mongoose.Schema<any, mongoose.Model<any, any, any, any, any, any, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, {
    email?: string | null;
    username?: string | null;
    password?: string | null;
}, mongoose.Document<unknown, {}, {
    email?: string | null;
    username?: string | null;
    password?: string | null;
}, {
    id: string;
}, mongoose.DefaultSchemaOptions> & Omit<{
    email?: string | null;
    username?: string | null;
    password?: string | null;
} & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}, "id"> & {
    id: string;
}, unknown, {
    email?: string | null;
    username?: string | null;
    password?: string | null;
} & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}>, {
    email?: string | null;
    username?: string | null;
    password?: string | null;
} & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}>;
export {};
//# sourceMappingURL=db.d.ts.map