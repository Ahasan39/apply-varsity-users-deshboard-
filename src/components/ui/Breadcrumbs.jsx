import { ChevronRight } from 'lucide-react'

export default function Breadcrumbs({ items = [], className = '', 'aria-label': label = 'Breadcrumbs', ...props }) {
  return (
    <nav {...props} aria-label={label} className={className}>
      <ol className="flex min-w-0 flex-wrap items-center gap-x-2 gap-y-1 text-body-sm">
        {items.map((item, index) => (
          <li key={item.id || index} className="flex min-w-0 max-w-full items-center gap-2">
            {index > 0 && <ChevronRight aria-hidden="true" className="size-4 shrink-0 text-text-secondary" />}
            {index === items.length - 1
              ? <span aria-current="page" className="py-2 font-semibold [overflow-wrap:anywhere]">{item.label}</span>
              : item.link || <a href={item.href} className="inline-flex min-h-(--control-height-touch) items-center rounded-sm text-primary underline-offset-4 hover:underline [overflow-wrap:anywhere]">{item.label}</a>}
          </li>
        ))}
      </ol>
    </nav>
  )
}
