import { Badge } from '../../ui'
import DashboardSection from './DashboardSection'

export default function ApplicationSnapshot({ items = [], studentCount, loading = false }) {
  const total = items.reduce((sum, item) => sum + item.count, 0)
  return <DashboardSection title="Student & application snapshot" description={!loading && items.length ? `${studentCount ?? '—'} active students · ${total} application records` : 'Application record stages'} className="admin-snapshot" loading={loading} empty={!items.length}>
    <dl className="admin-snapshot-values">{items.map(item => <div key={item.label} className="flex items-center justify-between gap-3"><dt className="text-body-sm">{item.label}</dt><dd><Badge size="sm" variant={item.tone}>{item.count}</Badge></dd></div>)}</dl>
    <p className="mt-4 border-t border-border-subtle pt-3 text-caption text-text-secondary">A student can have multiple applications. Offers and confirmed admissions are distinct outcomes.</p>
  </DashboardSection>
}
