import { logout } from '@/app/actions/auth'
import Link from 'next/link'
import Image from 'next/image'
import { LogOut, Globe } from 'lucide-react'

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-white text-black selection:bg-track-cyan selection:text-black">
      <header className="sticky top-0 z-50 bg-white border-b-2 border-black">
        <div className="max-w-[1440px] mx-auto px-6 py-5 flex justify-between items-center">
          <Link 
            href="/admin" 
            className="flex items-center gap-4 group"
          >
            <div className="relative w-32 h-10 overflow-hidden flex items-center justify-center transition-all duration-300">
              <Image 
                src="/logos/Full-Logo-Solid-Black-WB.webp" 
                alt="Morbidelli Logo" 
                fill 
                className="object-contain"
              />
            </div>
          </Link>
          
          <div className="flex items-center gap-6">
            <Link
              href="/"
              className="flex items-center gap-2 font-replica-light text-[11px] font-bold uppercase tracking-widest text-black hover:text-track-cyan transition-all duration-300"
            >
              <Globe className="w-4 h-4" />
              <span>Nazad na sajt</span>
            </Link>

            <div className="w-[2px] h-4 bg-gray-200" />

            <form action={logout}>
              <button 
                type="submit" 
                className="flex items-center gap-2 font-replica-light text-[11px] font-bold uppercase tracking-widest text-black hover:text-red-600 transition-all duration-300"
              >
                <LogOut className="w-4 h-4" />
                <span>Odjavi se</span>
              </button>
            </form>
          </div>
        </div>
      </header>
      
      <main className="relative z-10 mx-auto min-h-[calc(100vh-80px)]">
        {children}
      </main>
    </div>
  )
}
