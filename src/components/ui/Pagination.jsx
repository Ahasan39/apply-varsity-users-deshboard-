import Button from './Button'

export default function Pagination({ page = 1, totalPages = 1, onPageChange, siblingCount = 1, disabled = false, className = '', 'aria-label': label = 'Pagination', ...props }) {
  const total = Number.isFinite(totalPages) ? Math.max(0, Math.floor(totalPages)) : 0
  const current = total ? Math.min(total, Math.max(1, Math.floor(page) || 1)) : 0
  const siblings = Number.isFinite(siblingCount) ? Math.min(2, Math.max(0, Math.floor(siblingCount))) : 1
  const pages = new Set(total ? [1, total] : [])
  for (let number = Math.max(1, current - siblings); number <= Math.min(total, current + siblings); number++) pages.add(number)
  const numbers = [...pages].sort((a, b) => a - b)
  const change = next => { if (!disabled && next >= 1 && next <= total && next !== current) onPageChange?.(next) }
  return (
    <nav {...props} aria-label={label} className={`flex flex-wrap items-center gap-2 ${className}`}>
      <Button variant="outline" size="sm" disabled={disabled || current <= 1} onClick={() => change(current - 1)}>Previous</Button>
      <span className="text-body-sm text-text-secondary sm:hidden" aria-current={total ? 'page' : undefined}>{total ? `Page ${current} of ${total}` : 'No pages'}</span>
      <span className="hidden flex-wrap items-center gap-1 sm:flex">
        {numbers.map((number, index) => (
          <span key={number} className="inline-flex items-center gap-1">
            {index > 0 && number - numbers[index - 1] > 1 && <span aria-hidden="true" className="px-1 text-text-secondary">…</span>}
            <Button variant={number === current ? 'primary' : 'ghost'} size="sm" disabled={disabled}
              aria-label={`Page ${number}`} aria-current={number === current ? 'page' : undefined} onClick={() => change(number)}>{number}</Button>
          </span>
        ))}
      </span>
      <Button variant="outline" size="sm" disabled={disabled || current >= total} onClick={() => change(current + 1)}>Next</Button>
    </nav>
  )
}
