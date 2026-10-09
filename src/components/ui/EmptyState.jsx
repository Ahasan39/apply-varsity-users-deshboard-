export default function EmptyState({ icon: Icon, title, description, action, as: Heading = 'h3', className = '', ...props }) {
  return (
    <div {...props} className={`flex min-w-0 flex-col items-center gap-3 px-4 py-6 text-center [overflow-wrap:anywhere] ${className}`}>
      {Icon && <Icon aria-hidden="true" className="size-7 text-text-secondary" />}
      <Heading className="text-card">{title}</Heading>
      {description && <p className="max-w-prose text-body-sm text-text-secondary">{description}</p>}
      {action && <div className="flex max-w-full flex-wrap justify-center gap-2">{action}</div>}
    </div>
  )
}
