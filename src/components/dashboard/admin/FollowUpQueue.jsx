import { Badge, CompactList, CompactListItem } from '../../ui'
import DashboardSection from './DashboardSection'

export default function FollowUpQueue({ items = [], dueCount, overdueCount, loading = false }) {
  return <DashboardSection title="Follow-up operations" description="Priority sample · Times in Bangladesh" className="admin-followups" loading={loading} empty={!items.length}>
    <CompactList className="[&>li]:py-3">{items.map(item => <CompactListItem key={item.id}
      primary={<div className="flex flex-wrap items-center justify-between gap-2"><span>{item.name}</span><Badge size="sm" variant={item.tone}>{item.state}</Badge></div>}
      secondary={item.interest}
      metadata={<div className="space-y-1"><p className="text-label">{item.due}</p><p className="text-caption text-text-secondary">{item.owner} · {item.branch}</p></div>} />)}</CompactList>
    <p className="border-t border-border-subtle pt-3 text-caption text-text-secondary">{items.length} priority records shown{dueCount != null && overdueCount != null ? ` · ${dueCount} due today and ${overdueCount} overdue overall.` : '.'}</p>
  </DashboardSection>
}
