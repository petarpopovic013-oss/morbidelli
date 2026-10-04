import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { ADMIN_COOKIE_NAME, verifyAdminToken } from '@/app/utils/admin-token'

export async function proxy(request: NextRequest) {
  const pathname = request.nextUrl.pathname
  const authenticated = await verifyAdminToken(
    request.cookies.get(ADMIN_COOKIE_NAME)?.value
  )

  if (pathname.startsWith('/admin') && pathname !== '/admin/login' && !authenticated) {
    return NextResponse.redirect(new URL('/admin/login', request.url))
  }

  if (pathname === '/admin/login' && authenticated) {
    return NextResponse.redirect(new URL('/admin', request.url))
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/admin/:path*'],
}
