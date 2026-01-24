import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import User from "@/models/User";
import { connectDB } from "@/lib/mongodb";
import { signToken } from "@/lib/auth";
import { serialize } from "cookie";

export async function POST(req: Request) {
  await connectDB();
  const { email, password } = await req.json();

  const user = await User.findOne({ email });
  if (!user)
    return NextResponse.json({ error: "Invalid credentials" }, { status: 401 });

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch)
    return NextResponse.json({ error: "Invalid credentials" }, { status: 401 });

  const token = signToken({ userId: user._id, role: user.role });
  console.log("Generated token:", token);

  const cookie = serialize("token", token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    path: "/",
    maxAge: 7 * 24 * 60 * 60,
    sameSite: "lax",
  });

  return NextResponse.json(
    { message: "Login successful" },
    {
      status: 200,
      headers: { "Set-Cookie": cookie },
    },
  );
}
