import { NextResponse } from "next/server";

export function middleware(req) {
  const allowedIP = ""; // your real IP
  const userIP = req.ip || req.headers.get("x-forwarded-for");

  if (userIP !== allowedIP) {
    return new NextResponse(
      "403 Forbidden — Access Restricted",
      { status: 403 }
    );
  }

  return NextResponse.next();
}
