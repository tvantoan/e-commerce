import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { verifyToken } from "@/lib/auth";

export function proxy(req: NextRequest) {
  const { pathname } = req.nextUrl;

  // Chỉ áp dụng cho API
  if (!pathname.startsWith("/api")) {
    return NextResponse.next();
  }

  // Public routes
  if (
    pathname.startsWith("/api/auth/login") ||
    pathname.startsWith("/api/auth/register")
  ) {
    return NextResponse.next();
  }

  const token = req.cookies.get("token")?.value;

  if (!token) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    verifyToken(token);
    return NextResponse.next();
  } catch {
    return NextResponse.json({ error: "Invalid token" }, { status: 401 });
  }
}
