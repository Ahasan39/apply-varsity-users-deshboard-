import { Badge } from '../../ui'
import DashboardSection from './DashboardSection'

const fills = ['bg-primary', 'bg-info', 'bg-brand-navy', 'bg-primary', 'bg-info', 'bg-brand-navy', 'bg-success']
export default function LeadPipeline({ data, loading = false }) {
  const stages = data?.stages ?? []
  const total = data?.total ?? 0
  return <DashboardSection title="Lead pipeline" description="Current stage distribution · Not a conversion rate" className="admin-pipeline" loading={loading} empty={!total || !stages.length}
    action={<Badge size="sm">{total.toLocaleString('en-US')} leads</Badge>}>
    <div className="flex h-3 overflow-hidden rounded-sm bg-surface-muted" aria-hidden="true">
      {stages.map((stage, index) => <div key={stage.label} className={`${fills[index % fills.length]} border-r border-surface`} style={{ width: `${total ? stage.count / total * 100 : 0}%` }} />)}
    </div>
    <ol className="admin-pipeline-stages mt-5">
      {stages.map((stage, index) => <li key={stage.label} className="min-w-0 border-l-2 border-border pl-3">
        <p className="flex items-center gap-2 text-body-sm"><span aria-hidden="true" className={`size-2 shrink-0 rounded-full ${fills[index % fills.length]}`} />{stage.label}</p>
        <p className="mt-2 text-section tabular-nums">{stage.count} <span className="text-caption text-text-secondary">{total ? (stage.count / total * 100).toFixed(1) : '0.0'}%</span></p>
        {stage.detail && <p className="mt-1 text-caption text-text-secondary">{stage.detail}</p>}
      </li>)}
    </ol>
    <div className="mt-5 flex flex-wrap gap-x-4 gap-y-2 border-t border-border-subtle pt-3 text-caption text-text-secondary">
      <span className="font-semibold">Other / review:</span>{data?.secondary?.map(stage => <span key={stage.label}>{stage.label} <strong>{stage.count}</strong> ({total ? (stage.count / total * 100).toFixed(1) : '0.0'}%)</span>)}
    </div>
  </DashboardSection>
}
