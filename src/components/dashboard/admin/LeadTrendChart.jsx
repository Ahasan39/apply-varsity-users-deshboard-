import DashboardSection from './DashboardSection'

export default function LeadTrendChart({ items = [], period, loading = false }) {
  const ceiling = Math.max(5, Math.ceil(Math.max(0, ...items.flatMap(item => [item.leads, item.contacted])) / 5) * 5)
  const points = key => items.map((item, index) => `${items.length > 1 ? index / (items.length - 1) * 600 : 300},${156 - item[key] / ceiling * 148}`).join(' ')
  const sum = key => items.reduce((total, item) => total + item[key], 0)
  return <DashboardSection title="Lead & contact trend" description={period} className="admin-trend" loading={loading} empty={!items.length}>
    <figure className="max-w-4xl">
      <figcaption className="flex flex-wrap gap-x-5 gap-y-2 text-body-sm">
        <span className="text-info">● New leads <strong>{sum('leads')}</strong></span>
        <span className="text-brand-navy">┄ Contact confirmations <strong>{sum('contacted')}</strong></span>
      </figcaption>
      <div className="relative mt-5 pl-6" aria-hidden="true">
        <span className="absolute left-0 top-0 text-caption text-text-secondary">{ceiling}</span><span className="absolute bottom-0 left-0 text-caption text-text-secondary">0</span>
        <svg viewBox="0 0 600 164" preserveAspectRatio="none" className="h-40 w-full overflow-visible">
          {[8, 82, 156].map(y => <line key={y} x1="0" y1={y} x2="600" y2={y} stroke="var(--color-border)" strokeDasharray="4 4" vectorEffect="non-scaling-stroke" />)}
          <polyline points={points('leads')} fill="none" stroke="var(--color-primary)" strokeWidth="2.5" vectorEffect="non-scaling-stroke" />
          <polyline points={points('contacted')} fill="none" stroke="var(--color-brand-navy)" strokeWidth="2" strokeDasharray="5 4" vectorEffect="non-scaling-stroke" />
        </svg>
      </div>
      <ol className="mt-3 grid grid-cols-7 gap-1 text-center text-caption tabular-nums">
        {items.map(item => <li key={item.day} aria-label={`${item.day} October: ${item.leads} new leads, ${item.contacted} contact confirmations`}>
          <p className="text-text-secondary">{item.day}</p><p className="mt-1 font-semibold text-info">{item.leads}</p><p className="text-brand-navy">{item.contacted}</p>
        </li>)}
      </ol>
      <p className="mt-3 text-caption text-text-secondary">October daily totals, through the snapshot time. Contacts can concern earlier leads; this is not a cohort conversion rate.</p>
    </figure>
  </DashboardSection>
}
