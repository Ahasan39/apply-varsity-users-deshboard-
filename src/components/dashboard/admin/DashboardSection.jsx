import { Card, EmptyState, SectionHeader, Skeleton } from '../../ui'

export default function DashboardSection({ title, description, action, loading = false, empty = false, className = '', children, ...props }) {
  return (
    <Card as="section" aria-label={title} aria-busy={loading || undefined} tabIndex={-1}
      className={`admin-panel ${className}`} {...props}>
      <SectionHeader title={title} description={description} action={action} />
      <div className="mt-4 min-w-0">
        {loading ? <div className="min-h-40 space-y-4"><p role="status" className="text-body-sm text-text-secondary">Loading {title.toLowerCase()}…</p><Skeleton /><Skeleton /><Skeleton className="max-w-48" /></div>
          : empty ? <EmptyState title="No records to show" description="No data is available for this overview section." /> : children}
      </div>
    </Card>
  )
}
