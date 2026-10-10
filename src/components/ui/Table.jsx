export function TableContainer({ label, children, className = '', ...props }) {
  return <div {...props} role="region" aria-label={label} tabIndex={0} className={`min-w-0 max-w-full overflow-x-auto rounded-lg border border-border p-1 ${className}`}>{children}</div>
}
export function Table({ density = 'normal', className = '', ...props }) {
  return <table {...props} className={`w-full border-collapse text-left text-body-sm [&_th]:px-3 [&_td]:px-3 ${density === 'compact' ? '[&_th]:py-2 [&_td]:py-2' : '[&_th]:py-3 [&_td]:py-3'} ${className}`} />
}
export function TableHeader({ className = '', ...props }) {
  return <thead {...props} className={`border-b border-border bg-surface-subtle text-text-secondary ${className}`} />
}
export function TableBody({ className = '', ...props }) {
  return <tbody {...props} className={`divide-y divide-border-subtle ${className}`} />
}
const states = {
  default: 'bg-surface', selected: 'bg-surface-selected', muted: 'bg-surface-subtle text-text-secondary',
  attention: 'bg-warning-subtle',
}
export function TableRow({ state = 'default', hover = false, className = '', ...props }) {
  return <tr {...props} className={`${states[state] || states.default} ${hover && state === 'default' ? 'hover:bg-surface-hover' : ''} ${className}`} />
}
export function TableHead({ scope = 'col', className = '', ...props }) {
  return <th {...props} scope={scope} className={`align-middle font-semibold ${className}`} />
}
export function TableCell({ muted = false, className = '', ...props }) {
  return <td {...props} className={`align-middle ${muted ? 'text-text-secondary' : ''} ${className}`} />
}
export function TableCaption({ className = '', ...props }) {
  return <caption {...props} className={`caption-top px-3 py-3 text-left text-body-sm text-text-secondary ${className}`} />
}
