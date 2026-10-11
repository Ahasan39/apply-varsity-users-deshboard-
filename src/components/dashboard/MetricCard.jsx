import { Card } from '../ui'

const tones = {
  info: ['border-t-primary', 'text-info'], neutral: ['border-t-border-strong', 'text-text-secondary'],
  warning: ['border-t-warning', 'text-warning'], danger: ['border-t-danger', 'text-danger'],
}
export default function MetricCard({ label, value, detail, icon: Icon, tone = 'info' }) {
  const [border, foreground] = tones[tone] || tones.info
  return (
    <Card className={`border-t-2 ${border}`}>
      <div className="flex items-start justify-between gap-2">
        <p className="text-label text-text-secondary">{label}</p>
        {Icon && <Icon aria-hidden="true" className={`size-4 shrink-0 ${foreground}`} />}
      </div>
      <p className={`mt-3 text-metric tabular-nums ${foreground}`}>{typeof value === 'number' ? value.toLocaleString('en-US') : value}</p>
      {detail && <p className="mt-1 text-caption text-text-secondary">{detail}</p>}
    </Card>
  )
}
