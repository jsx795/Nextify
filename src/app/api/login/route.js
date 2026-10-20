import { NextResponse } from "next/server";
import ConnectDB from "../../../../lib/mongob";
import Register from "../../../../models/register"
import bcrypt from "bcrypt";

export async function POST(request) {
  try {
    await ConnectDB();

    const {password, name } = await request.json();

    if (
      typeof name !== "string" ||
      typeof password !== "string" ||
      password.length < 8 ||
      password.length > 20
    ) {
      return NextResponse.json(
        { message: "Invalid username or password length" },
        { status: 400 }
      );
    }

    const user = await Register.findOne({ name });

    if (!user) {
      return NextResponse.json(
        { error: "Invalid credentials!"},
        { status: 401 }
      );
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if(!isMatch){
      return NextResponse.json(
        {message:"Invalid email or password"},

        {status:401},
      );
    }

    return NextResponse.json(
      { message: "User found" ,
        user:{
            id:user._id,
            name:user.name,
            
        },
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Login API error:", error);

    return NextResponse.json(
      { message: "Internal server error" },
      { status: 500 }
    );
  }
}



