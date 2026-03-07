import { connectDB } from "@/lib/db";
import User from "@/models/User";
import bcrypt from "bcryptjs";

export async function POST(req) {
  try {

    const { name, email, password } = await req.json();

    await connectDB();

    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return Response.json(
        { message: "User already exists" },
        { status: 400 }
      );
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await User.create({
      name,
      email,
      password: hashedPassword
    });

    return Response.json(
      {
        message: "User created successfully",
        user
      },
      { status: 201 }
    );

  } catch (error) {

    console.error("Signup API Error:", error);

    return Response.json(
      { message: "Server error" },
      { status: 500 }
    );
  }
}