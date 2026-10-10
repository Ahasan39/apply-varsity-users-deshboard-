import { Breadcrumbs } from '../ui'

export default function PageHeader({ title, description, breadcrumbs, actions }) {
  return (
    <header className="mb-6 min-w-0 space-y-3">
      {breadcrumbs?.length > 0 && <Breadcrumbs items={breadcrumbs} aria-label="Page breadcrumbs" />}
      <div className="flex min-w-0 flex-wrap items-start justify-between gap-4">
        <div className="min-w-0 flex-1 basis-64 [overflow-wrap:anywhere]">
          <h1 className="text-page">{title}</h1>
          {description && <p className="mt-2 max-w-prose text-body-sm text-text-secondary">{description}</p>}
        </div>
        {actions && <div className="flex max-w-full flex-wrap items-center gap-2">{actions}</div>}
      </div>
    </header>
  )
}
