import { MotorcycleForm } from '@/app/admin/components/MotorcycleForm'
import { getMotorcycleById } from '@/app/actions/motorcycles'
import { notFound } from 'next/navigation'

// In Next.js 15, params are treated as a Promise
export default async function EditMotorcyclePage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = await params
  const id = resolvedParams.id
  
  const motorcycle = await getMotorcycleById(id)
  
  if (!motorcycle) {
    notFound()
  }

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-5xl font-replica font-bold text-black uppercase tracking-tight text-center my-12">
        Izmeni Motor
      </h1>
      <MotorcycleForm initialData={motorcycle} />
    </div>
  )
}
