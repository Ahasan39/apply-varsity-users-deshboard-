import { Badge } from '../../ui'
import DashboardSection from './DashboardSection'

export default function AttentionCenter({ items = [], loading = false }) {
  return <DashboardSection title="Needs attention" description="Cross-branch operational exceptions" className="admin-attention" loading={loading} empty={!items.length}
    action={<Badge variant="danger" size="sm">Action center</Badge>}>
    <ul className="divide-y divide-border-subtle">
      {items.map(item => <li key={item.id} className="flex items-start gap-3 py-3 first:pt-0">
        <span className={`flex size-10 shrink-0 items-center justify-center rounded-md text-card tabular-nums ${item.tone === 'danger' ? 'bg-danger-subtle text-danger' : 'bg-warning-subtle text-warning'}`}>{item.count}</span>
        <div className="min-w-0 flex-1"><div className="flex flex-wrap items-center justify-between gap-2"><h3 className="text-label">{item.title}</h3><Badge variant={item.tone} size="sm">{item.severity}</Badge></div><p className="mt-1 text-caption text-text-secondary">{item.context}</p></div>
      </li>)}
    </ul>
    <a href="#recent-leads" className="mt-2 inline-flex min-h-(--control-height-touch) items-center rounded-sm text-label text-primary underline-offset-4 hover:underline">See sample lead records →</a>
    <p className="text-caption text-text-secondary">A record can appear in more than one exception queue.</p>
  </DashboardSection>
}
