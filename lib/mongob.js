import mongoose from "mongoose";

import dns from "dns";

dns.setServers([
    "1.1.1.1",
    "8.8.8.8",

])

const MONGODB_URL = process.env.MONGODB_URL;

if(!MONGODB_URL){
    throw new Error("please Connect DB");
    
}

export  default async function ConnectDB(){
    try{
        await mongoose.connect(MONGODB_URL);
        console.log("Connected DB");
        
    } catch(error){
        console.log("DB error:", error);
        
    }
}
