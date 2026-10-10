export function CompactList({ className = '', ...props }) {
  return <ul {...props} className={`min-w-0 divide-y divide-border-subtle ${className}`} />
}
export function CompactListItem({ primary, secondary, leading, trailing, metadata, className = '', ...props }) {
  return (
    <li {...props} className={`flex min-w-0 flex-wrap items-start gap-3 py-4 ${className}`}>
      {leading && <div className="shrink-0">{leading}</div>}
      <div className="min-w-0 flex-1 basis-36 [overflow-wrap:anywhere]">
        <div className="text-label">{primary}</div>
        {secondary && <div className="mt-1 text-body-sm text-text-secondary">{secondary}</div>}
        {metadata && <div className="mt-2 flex flex-wrap items-center gap-2 text-body-sm">{metadata}</div>}
      </div>
      {trailing && <div className="flex max-w-full flex-wrap items-center gap-2">{trailing}</div>}
    </li>
  )
}
