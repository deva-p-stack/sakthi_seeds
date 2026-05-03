import { NextResponse } from "next/server";
import { jwtVerify } from "jose";

export async function middleware(request) {
 
  console.log("middle is running", request.nextUrl.pathname);

  const { pathname } = request.nextUrl;

  const token = request.cookies.get("token")?.value;

  
  const loginUrl = new URL("/login", request.url);
  const forbiddenUrl = new URL("/not-authorized", request.url);

  
  if (pathname.startsWith("/login") || pathname.startsWith("/register")) {
    return NextResponse.next();
  }

  
  if (!token) {
    console.log("not token found");
    return NextResponse.redirect(loginUrl);
  }

  try {
    const secret = process.env.JWT_SECRET;

    if (!secret) {
      console.error("jwt scret is not set");
      return NextResponse.redirect(loginUrl);
    }

    const encodedSecret = new TextEncoder().encode(secret);

    const { payload } = await jwtVerify(token, encodedSecret);

    console.log("token is valid:", payload);

    // role checking 
    if (pathname.startsWith("/admin") && payload.role !== "admin") {
      console.log("not a admin");
      return NextResponse.redirect(forbiddenUrl);
    }

    if (
      pathname.startsWith("/user") &&
      !["user", "admin"].includes(payload.role)
    ) {
      console.log("not a users");
      return NextResponse.redirect(forbiddenUrl);
    }

    return NextResponse.next();
  } catch (err) {
    console.error("token invalid:", err.message);
    return NextResponse.redirect(loginUrl);
  }
}

export const config = {
  matcher: ["/admin/:path*", "/user/:path*","/users/:path*"],
};

