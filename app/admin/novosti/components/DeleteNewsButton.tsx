'use client'

import { useState, useTransition } from 'react'
import { Trash2, Loader2 } from 'lucide-react'
import { deleteNews } from '@/app/actions/news'

export function DeleteNewsButton({ id }: { id: string }) {
  const [isPending, startTransition] = useTransition()
  const [showConfirm, setShowConfirm] = useState(false)

  const handleDelete = () => {
    startTransition(async () => {
      await deleteNews(id)
    })
  }

  if (showConfirm) {
    return (
      <div className="flex gap-2">
        <button
          onClick={handleDelete}
          disabled={isPending}
          className="bg-red-600 hover:bg-red-700 text-white p-3 border border-red-600 transition-colors flex items-center justify-center"
          title="Potvrdi brisanje"
        >
          {isPending ? <Loader2 className="w-4 h-4 animate-spin" /> : <Trash2 className="w-4 h-4" />}
        </button>
        <button
          onClick={() => setShowConfirm(false)}
          disabled={isPending}
          className="bg-gray-100 hover:bg-gray-200 text-gray-600 p-3 border border-gray-200 transition-colors font-replica-light text-xs"
          title="Odustani"
        >
          Odustani
        </button>
      </div>
    )
  }

  return (
    <button
      onClick={() => setShowConfirm(true)}
      className="bg-white hover:bg-red-50 text-red-500 hover:text-red-600 border border-gray-200 hover:border-red-200 p-3 transition-colors flex items-center justify-center"
      title="Obriši vest"
    >
      <Trash2 className="w-4 h-4" />
    </button>
  )
}
