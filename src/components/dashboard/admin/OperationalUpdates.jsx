import { Badge, CompactList, CompactListItem } from '../../ui'
import DashboardSection from './DashboardSection'

export function UpcomingDeadlines({ items = [], loading = false }) {
  return <DashboardSection title="Events & deadlines" description="Upcoming · Bangladesh time" className="admin-deadlines" loading={loading} empty={!items.length}>
    <CompactList className="[&>li]:py-3">{items.map(item => <CompactListItem key={item.id}
      leading={<div aria-hidden="true" className="w-10 rounded-md bg-surface-selected py-2 text-center text-info"><p className="text-section">{item.day}</p><p className="text-caption">{item.month}</p></div>}
      primary={item.title} secondary={`${item.day} ${item.month} 2026 · ${item.detail}`}
      metadata={<Badge size="sm" variant={item.tone}>{item.type}</Badge>} />)}</CompactList>
  </DashboardSection>
}

export function TasksApprovals({ items = [], loading = false }) {
  return <DashboardSection title="Tasks & approvals" description="Oversight queue · Actions not connected" className="admin-tasks" loading={loading} empty={!items.length}>
    <CompactList className="[&>li]:py-3">{items.map(item => <CompactListItem key={item.id} primary={item.title} secondary={item.detail}
      trailing={<span className="text-section tabular-nums">{item.count}</span>}
      metadata={<Badge size="sm" variant={item.tone}>{item.type}</Badge>} />)}</CompactList>
    <p className="mt-3 text-caption text-text-secondary">Assignments repeat the unassigned lead count; queues are not additive.</p>
  </DashboardSection>
}

export function OperationalNotifications({ items = [], loading = false }) {
  return <DashboardSection title="Operational notifications" description="Recent sample activity · Relative to 11 Oct, 09:00" className="admin-notifications" loading={loading} empty={!items.length}>
    <ul className="admin-notification-list">{items.map(item => <li key={item.id} className="flex min-w-0 gap-3 border-t border-border-subtle py-3">
      <span aria-hidden="true" className={`mt-2 size-2 shrink-0 rounded-full ${item.tone === 'danger' ? 'bg-danger' : item.tone === 'success' ? 'bg-success' : 'bg-primary'}`} />
      <div><h3 className="text-label">{item.title}</h3><p className="mt-1 text-body-sm text-text-secondary">{item.detail}</p><p className="mt-2 text-caption text-text-secondary">{item.age}</p></div>
    </li>)}</ul>
  </DashboardSection>
}
