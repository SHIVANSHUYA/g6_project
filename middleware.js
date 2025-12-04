export const config = {
  matcher: "/:path*",
};

export function middleware(request) {
  const allowedIPs = ["122.15.1.2"];

  const realIP =
    request.headers.get("x-forwarded-for")?.split(",")[0].trim() ||
    "0.0.0.0";

  if (!allowedIPs.includes(realIP)) {
    return new Response("403 Forbidden", { status: 403 });
  }

  return;
}
