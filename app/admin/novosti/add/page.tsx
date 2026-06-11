import { NewsForm } from '@/app/admin/components/NewsForm'

export default function AddNewsPage() {
  return (
    <div className="py-12 px-4 max-w-4xl mx-auto">
      <div className="mb-12 border-b-2 border-black pb-8">
        <span className="text-track-cyan font-replica-light tracking-widest text-xs font-bold uppercase mb-2 block">
          Administracija / Novosti
        </span>
        <h1 className="text-5xl font-replica font-bold text-black uppercase tracking-tight">
          Dodaj Vest
        </h1>
      </div>
      <NewsForm />
    </div>
  )
}
