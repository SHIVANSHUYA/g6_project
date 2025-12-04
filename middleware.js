import { NextResponse } from "next/server";

export const config = {
  matcher: "/:path*",
};

export function middleware(req) {
  const allowedIPs = ["122.15.1.2"];

  const realIP =
    req.headers.get("x-forwarded-for")?.split(",")[0].trim() ||
    "0.0.0.0";

  if (!allowedIPs.includes(realIP)) {
    return new NextResponse("403 Forbidden", { status: 403 });
  }

  return NextResponse.next();
}
