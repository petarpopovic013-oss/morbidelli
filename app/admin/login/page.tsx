'use client'

import { useActionState } from 'react'
import { login } from '@/app/actions/auth'
import Image from 'next/image'

export default function LoginPage() {
  const [state, formAction, pending] = useActionState(login, null)

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="bg-white p-10 shadow-lg w-full max-w-md border border-gray-200">
        <div className="flex justify-center mb-10">
          <div className="relative w-48 h-16">
            <Image 
              src="/logos/Full-Logo-Solid-Black-WB.webp" 
              alt="Morbidelli Logo" 
              fill 
              className="object-contain"
            />
          </div>
        </div>
        <h1 className="text-xl text-black font-replica font-bold mb-8 text-center uppercase tracking-widest">
          Admin Panel
        </h1>
        
        <form action={formAction} className="space-y-5">
          <div>
            <label htmlFor="password" className="block text-gray-500 mb-2 font-replica-light text-sm uppercase tracking-wider">
              Lozinka
            </label>
            <input
              type="password"
              id="password"
              name="password"
              required
              className="w-full bg-white border border-gray-300 px-4 py-3 text-black focus:outline-none focus:border-track-cyan focus:ring-1 focus:ring-track-cyan transition-colors font-replica-light"
              placeholder="Unesite lozinku..."
            />
          </div>
          
          {state?.error && (
            <p className="text-red-500 text-sm mt-2 font-replica-light">{state.error}</p>
          )}

          <button
            type="submit"
            disabled={pending}
            className="w-full bg-black text-white font-replica font-bold uppercase tracking-widest py-4 hover:bg-track-cyan transition-colors disabled:opacity-50 mt-8 text-sm"
          >
            {pending ? 'Prijava u toku...' : 'Prijavi se'}
          </button>
        </form>
      </div>
    </div>
  )
}
