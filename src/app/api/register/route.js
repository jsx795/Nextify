
import { NextResponse } from "next/server";
import ConnectDB from "../../../../lib/mongob";
import Register from "../../../../models/register";

import bcrypt from "bcrypt"
export async function POST(request){
    try{
        await ConnectDB();
        const data = await request.json();
        data.password = await bcrypt.hash(data.password,10);
        const register = await Register.create(data);

        return Response.json({
            message:"register data Data Added.....",
            register
        },{
            status:201
        })
    }catch(error){
        return Response.json({
            message:"failed to add data....",
            error:error.message
        },{
            status:500
        })
    }
}
