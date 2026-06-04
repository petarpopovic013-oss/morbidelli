import { getMotorcycles } from '@/app/actions/motorcycles'
import { AdminDashboardClient } from './components/AdminDashboardClient'

export const dynamic = 'force-dynamic'

export default async function AdminDashboard() {
  const motorcycles = await getMotorcycles()

  return (
    <AdminDashboardClient motorcycles={motorcycles} />
  )
}
