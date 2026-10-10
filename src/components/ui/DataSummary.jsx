export default function DataSummary({ from, to, total = 0, label = 'records', className = '', ...props }) {
  const count = Number.isFinite(total) ? Math.max(0, Math.floor(total)) : 0
  const end = Number.isFinite(to) ? Math.min(count, Math.max(0, Math.floor(to))) : count
  const start = count && end ? Math.min(end, Math.max(1, Math.floor(from) || 1)) : 0
  const ranged = from !== undefined && to !== undefined
  return <p {...props} className={`text-body-sm text-text-secondary ${className}`}>{ranged ? `Showing ${start}–${end} of ${count} ${label}` : `${count} ${label}`}</p>
}
