import Badge from './Badge'

const states = {
  healthy: ['success', 'Healthy'], warning: ['warning', 'Warning'],
  critical: ['danger', 'Critical'], contacted: ['info', 'Contacted'],
  inactive: ['neutral', 'Inactive'], unverified: ['neutral', 'Unverified'],
}
export default function StatusBadge({ status = 'unverified', label, className = '', ...props }) {
  const [variant, defaultLabel] = states[status] || states.unverified
  return <Badge {...props} variant={variant} className={`${status === 'unverified' || !states[status] ? 'border border-dashed border-border-strong' : ''} ${className}`}>{label || defaultLabel}</Badge>
}
