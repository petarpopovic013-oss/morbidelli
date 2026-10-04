'use server'

import { createHash, timingSafeEqual } from 'node:crypto'
import { redirect } from 'next/navigation'
import { createAdminSession, deleteAdminSession } from '@/app/utils/admin-session'

function passwordsMatch(received: string, expected: string) {
  const receivedHash = createHash('sha256').update(received).digest()
  const expectedHash = createHash('sha256').update(expected).digest()
  return timingSafeEqual(receivedHash, expectedHash)
}

export async function login(prevState: unknown, formData: FormData) {
  void prevState
  const password = String(formData.get('password') || '')
  const expectedPassword = process.env.ADMIN_PASSWORD

  if (!expectedPassword) {
    console.error('ADMIN_PASSWORD nije podešen.')
    return { error: 'Prijava trenutno nije dostupna.' }
  }

  if (!password || !passwordsMatch(password, expectedPassword)) {
    await new Promise((resolve) => setTimeout(resolve, 750))
    return { error: 'Pogrešna lozinka' }
  }

  await createAdminSession()
  redirect('/admin')
}

export async function logout() {
  await deleteAdminSession()
  redirect('/admin/login')
}
