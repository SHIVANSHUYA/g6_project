export const config = {
  runtime: "edge",
  matcher: "/:path*", 
};

export default function middleware(req) {
  const allowedIPs = ["122.52.16.1"]; // put your IP

  const realIP =
    req.headers.get("x-forwarded-for")?.split(",")[0].trim() ||
    "0.0.0.0";

  if (!allowedIPs.includes(realIP)) {
    return new Response("403 Forbidden", { status: 403 });
  }

  return fetch(req); // allow access
}
