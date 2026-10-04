import { jwtVerify, SignJWT } from 'jose'

export const ADMIN_COOKIE_NAME = process.env.NODE_ENV === 'production'
  ? '__Host-morbidelli_admin'
  : 'morbidelli_admin'

const SESSION_DURATION_SECONDS = 8 * 60 * 60
const SESSION_ISSUER = 'morbidelli-admin'
const SESSION_AUDIENCE = 'morbidelli-admin-panel'

function sessionKey() {
  const configuredSecret = process.env.ADMIN_SESSION_SECRET
  const adminPassword = process.env.ADMIN_PASSWORD
  const secret = configuredSecret || (adminPassword ? `${SESSION_ISSUER}:${adminPassword}` : '')

  if (!secret) {
    throw new Error('Nedostaje ADMIN_SESSION_SECRET ili ADMIN_PASSWORD.')
  }

  return new TextEncoder().encode(secret)
}

export async function createAdminToken() {
  return new SignJWT({ role: 'admin' })
    .setProtectedHeader({ alg: 'HS256' })
    .setSubject('morbidelli-administrator')
    .setIssuer(SESSION_ISSUER)
    .setAudience(SESSION_AUDIENCE)
    .setJti(crypto.randomUUID())
    .setIssuedAt()
    .setExpirationTime(`${SESSION_DURATION_SECONDS}s`)
    .sign(sessionKey())
}

export async function verifyAdminToken(token?: string) {
  if (!token) return false

  try {
    const { payload } = await jwtVerify(token, sessionKey(), {
      algorithms: ['HS256'],
      subject: 'morbidelli-administrator',
      issuer: SESSION_ISSUER,
      audience: SESSION_AUDIENCE,
    })
    return payload.role === 'admin'
  } catch {
    return false
  }
}

export { SESSION_DURATION_SECONDS }
