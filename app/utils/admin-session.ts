import 'server-only'

import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'
import {
  ADMIN_COOKIE_NAME,
  createAdminToken,
  SESSION_DURATION_SECONDS,
  verifyAdminToken,
} from '@/app/utils/admin-token'

export async function createAdminSession() {
  const cookieStore = await cookies()
  cookieStore.set(ADMIN_COOKIE_NAME, await createAdminToken(), {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax',
    maxAge: SESSION_DURATION_SECONDS,
    path: '/',
    priority: 'high',
  })
}

export async function deleteAdminSession() {
  (await cookies()).delete(ADMIN_COOKIE_NAME)
}

export async function hasAdminSession() {
  const token = (await cookies()).get(ADMIN_COOKIE_NAME)?.value
  return verifyAdminToken(token)
}

export async function requireAdmin() {
  if (!(await hasAdminSession())) redirect('/admin/login')
  return { role: 'admin' as const }
}
