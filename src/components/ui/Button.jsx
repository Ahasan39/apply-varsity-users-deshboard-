import { LoaderCircle } from 'lucide-react'
import { actionBase, actionSizes, actionVariants } from './actionStyles'

export default function Button({
  children, variant = 'primary', size = 'md', type = 'button',
  disabled = false, loading = false, leadingIcon: LeadingIcon,
  trailingIcon: TrailingIcon, className = '', ...props
}) {
  return (
    <button {...props} type={type} disabled={disabled || loading}
      aria-busy={loading || props['aria-busy']}
      className={`${actionBase} ${actionVariants[variant] || actionVariants.primary} ${actionSizes[size] || actionSizes.md} ${className}`}>
      <span className={`inline-flex min-w-0 items-center justify-center gap-2 ${loading ? 'opacity-0' : ''}`}>
        {LeadingIcon && <LeadingIcon aria-hidden="true" />}
        <span className="min-w-0 [overflow-wrap:anywhere]">{children}</span>
        {TrailingIcon && <TrailingIcon aria-hidden="true" />}
      </span>
      {loading && <LoaderCircle aria-hidden="true" className="absolute motion-safe:animate-spin" />}
      {loading && <span className="sr-only">Loading</span>}
    </button>
  )
}
