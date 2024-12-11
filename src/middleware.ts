import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { cookies } from "next/headers";
import {
  LOGIN_PAGE_REDIRECT,
  LOGIN_SUCCESS_REDIRECT,
  PUBLIC_ROUTES,
} from "./lib/routes";

// This function can be marked `async` if using `await` inside
export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  const isAuthLogin = cookies().get(process.env.COOKIE_TOKEN_KEY);

  const isPublicRoute = PUBLIC_ROUTES.includes(pathname);

  if (!isAuthLogin && !isPublicRoute) {
    return NextResponse.redirect(new URL(LOGIN_PAGE_REDIRECT, request.url));
  }

  return NextResponse.next();
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
