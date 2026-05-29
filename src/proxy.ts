import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function proxy(request: NextRequest) {
  const token = request.cookies.get("whaidata.token")?.value;
  const isLoginPage = request.nextUrl.pathname === "/login";
  const isHomePage = request.nextUrl.pathname === "/";

  if (token && (isLoginPage || isHomePage)) {
    return NextResponse.redirect(new URL("/dashboard", request.url));
  }

  if (!token && request.nextUrl.pathname.startsWith("/dashboard")) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  return NextResponse.next();
}

// Rotas que precisam passar pelo "pedágio" acima
export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
