import { getNews } from '@/app/actions/news'
import { NewsDashboardClient } from './components/NewsDashboardClient'

export const dynamic = 'force-dynamic'

export default async function AdminNewsPage() {
  const newsList = await getNews()

  return (
    <NewsDashboardClient newsList={newsList} />
  )
}
