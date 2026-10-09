export default function SectionHeader({ title, description, action, as: Heading = 'h2', className = '', ...props }) {
  return (
    <header {...props} className={`flex min-w-0 flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-start sm:justify-between ${className}`}>
      <div className="min-w-0 [overflow-wrap:anywhere] sm:basis-48 sm:grow">
        <Heading className="text-section">{title}</Heading>
        {description && <p className="mt-1 text-body-sm text-text-secondary">{description}</p>}
      </div>
      {action && <div className="flex max-w-full shrink-0 flex-wrap items-center gap-2">{action}</div>}
    </header>
  )
}
