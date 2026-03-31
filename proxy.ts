import { NextRequest, NextResponse } from "next/server";

const PUBLIC_ONLY_PATHS = new Set([
  "/",
  "/login",
  "/signup",
  "/signup-complete",
  "/forgot-password"
]);

const ACCESS_TOKEN_COOKIE = "accessToken";

/** 쿠키 기반 1차 라우팅 제어 */
export function proxy(request: NextRequest) {

  const { pathname } = request.nextUrl;
  const hasAccessToken = Boolean(request.cookies.get(ACCESS_TOKEN_COOKIE)?.value);

  const isPublicPath = PUBLIC_ONLY_PATHS.has(pathname);
  const isProtectedPath = pathname.startsWith("/app");

  // 로그인 사용자는 공개 전용 페이지 접근 불가
  if (hasAccessToken && isPublicPath) {
    return NextResponse.redirect(new URL("/app", request.url));
  }

  // 비로그인 사용자는 보호 페이지 접근 불가
  if (!hasAccessToken && isProtectedPath) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|.*\\..*).*)"],
};