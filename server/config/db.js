import mongoose from "mongoose";
import dotenv from 'dotenv';

dotenv.config();

const Connect = async () => {

    try{
        await mongoose.connect(process.env.MongoDB_url)
        console.log("Database Connected")
    }catch(e){
        console.log("MongoDB connection failed", e);
    }

}

export default Connect;