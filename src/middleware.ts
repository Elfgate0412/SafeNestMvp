import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { getToken } from "next-auth/jwt";

export async function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  if (pathname.startsWith("/host/listings/new")) {
    const token = await getToken({ req });
    if (!token) return NextResponse.redirect(new URL("/login", req.url));
    if (token.role !== "HOST") {
      return NextResponse.redirect(new URL("/host/pending", req.url));
    }
  }

  return NextResponse.next();
}
