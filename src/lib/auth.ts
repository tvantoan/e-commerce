import jwt from "jsonwebtoken";

const SECRET = process.env.JWT_SECRET;

export function signToken(payload: object) {
  if (!SECRET) throw new Error("JWT_SECRET is not defined");
  return jwt.sign(payload, SECRET, { expiresIn: "7d" });
}

export function verifyToken(token: string) {
  if (!SECRET) throw new Error("JWT_SECRET is not defined");

  try {
    const decoded = jwt.verify(token, SECRET);
    return decoded as { userId: string; role: string };
  } catch (err) {
    console.error("Verify failed:", err);
    throw err;
  }
}
