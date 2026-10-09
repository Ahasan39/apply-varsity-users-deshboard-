const variants = {
  neutral: 'bg-neutral-subtle text-neutral', primary: 'bg-surface-selected text-info',
  success: 'bg-success-subtle text-success', warning: 'bg-warning-subtle text-warning',
  danger: 'bg-danger-subtle text-danger', info: 'bg-info-subtle text-info',
}
export default function Badge({ children, variant = 'neutral', size = 'md', icon: Icon, dot = false, className = '', ...props }) {
  return (
    <span {...props} className={`inline-flex max-w-full items-center gap-1.5 rounded-sm ${variants[variant] || variants.neutral} ${size === 'sm' ? 'px-2 py-0.5 text-caption' : 'px-2.5 py-1 text-label'} ${className}`}>
      {Icon ? <Icon aria-hidden="true" className="size-3.5 shrink-0" /> : dot && <span aria-hidden="true" className="size-1.5 shrink-0 rounded-full bg-current" />}
      <span className="min-w-0 [overflow-wrap:anywhere]">{children}</span>
    </span>
  )
}
