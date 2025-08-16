import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl

  // 允许访问的路径
  const allowedPaths = [
    '/',
    '/_next',
    '/favicon.ico',
    '/logo.png',
    '/share.png',
    '/tg.png',
    '/x.png',
    '/fonts'
  ]

  // 检查是否为允许的路径
  const isAllowed = allowedPaths.some(path => {
    if (path === '/') {
      return pathname === '/'
    }
    return pathname.startsWith(path)
  })

  // 如果不是允许的路径，重定向到首页
  if (!isAllowed) {
    return NextResponse.redirect(new URL('/', request.url))
  }

  return NextResponse.next()
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
}