import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

async function connectDB(){
    try {

        await mongoose.connect(`${process.env.MONGO_URI}/${DB_NAME}`);
        console.log("MongoDB connected successfully");
    } catch (error) {
        console.log("Error", error);
        process.exit(1);
    }
}

export default connectDB;
