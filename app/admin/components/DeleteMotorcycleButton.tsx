'use client'

import { useTransition } from 'react'
import { deleteMotorcycle } from '@/app/actions/motorcycles'

export function DeleteMotorcycleButton({ id }: { id: string }) {
  const [isPending, startTransition] = useTransition()

  const handleDelete = () => {
    if (confirm('Da li ste sigurni da želite da obrišete ovaj motor? Ova akcija je nepovratna.')) {
      startTransition(async () => {
        const result = await deleteMotorcycle(id)
        if (result.error) {
          alert('Greška pri brisanju: ' + result.error)
        }
      })
    }
  }

  return (
    <button
      onClick={handleDelete}
      disabled={isPending}
      className="text-red-500 hover:text-red-400 font-inter text-sm font-medium disabled:opacity-50"
    >
      {isPending ? 'Brisanje...' : 'Obriši'}
    </button>
  )
}
