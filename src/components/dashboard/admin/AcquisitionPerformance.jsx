import DashboardSection from './DashboardSection'

export default function AcquisitionPerformance({ sources = [], website = [], period, loading = false }) {
  const total = sources.reduce((sum, item) => sum + item.count, 0)
  return <DashboardSection title="Acquisition & website" description={`${period} · ${total} new leads`} className="admin-sources" loading={loading} empty={!sources.length}>
    <div className="admin-acquisition-body"><ul className="space-y-3">{sources.map(source => <li key={source.label}>
      <div className="flex items-center justify-between gap-3 text-body-sm"><span>{source.label}</span><span className="tabular-nums"><strong>{source.count}</strong> <span className="text-caption text-text-secondary">{total ? (source.count / total * 100).toFixed(1) : '0.0'}%</span></span></div>
      <div aria-hidden="true" className="mt-1 h-1.5 overflow-hidden rounded-full bg-surface-muted"><div className="h-full bg-primary" style={{ width: `${total ? source.count / total * 100 : 0}%` }} /></div>
    </li>)}</ul>
    <div><h3 className="text-label">Website performance</h3>
    <dl className="mt-3 grid grid-cols-2 gap-3">{website.map(item => <div key={item.label}><dt className="text-caption text-text-secondary">{item.label}</dt><dd className="mt-1 text-label tabular-nums">{item.value.toLocaleString('en-US')}</dd></div>)}</dl>
    </div></div><p className="mt-3 text-caption text-text-secondary">Converted sessions and attributed leads are distinct units. Attribution is illustrative, not a conversion-rate claim.</p>
  </DashboardSection>
}
