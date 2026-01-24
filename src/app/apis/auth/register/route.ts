import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import User from "@/models/User";
import { connectDB } from "@/lib/mongodb";
import { signToken } from "@/lib/auth";
import { serialize } from "cookie";

export async function POST(req: Request) {
  await connectDB();
  const { name, email, password, position } = await req.json();

  const existingUser = await User.findOne({ email });
  if (existingUser) {
    return NextResponse.json({ error: "User already exists" }, { status: 400 });
  }

  const hashedPassword = await bcrypt.hash(password, 10);
  const newUser = await User.create({
    name,
    email,
    password: hashedPassword,
    role: "USER",
    position,
  });

  const token = signToken({ userId: newUser._id, role: newUser.role });
  const cookie = serialize("token", token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    path: "/",
    maxAge: 7 * 24 * 60 * 60,
    sameSite: "lax",
  });

  return NextResponse.json(
    { message: "User registered successfully" },
    { status: 201, headers: { "Set-Cookie": cookie } },
  );
}
