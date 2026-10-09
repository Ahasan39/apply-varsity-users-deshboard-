import { useState } from 'react'

const sizes = { sm: 'size-8 text-caption', md: 'size-10 text-label', lg: 'size-12 text-card' }
export default function Avatar({ src, name = '', alt, size = 'md', className = '', ...props }) {
  const [failedSrc, setFailedSrc] = useState(null)
  const parts = name.trim().split(/\s+/).filter(Boolean)
  const initials = parts.length ? [parts[0], ...(parts.length > 1 ? [parts.at(-1)] : [])].map(word => Array.from(word)[0]).join('').toUpperCase() : '?'
  const label = alt ?? (name.trim() || 'Unknown person')
  return (
    <span {...props} role={label ? 'img' : undefined} aria-label={label || undefined} aria-hidden={label ? undefined : true}
      className={`relative inline-flex shrink-0 items-center justify-center overflow-hidden rounded-full bg-surface-selected font-semibold text-info ${sizes[size] || sizes.md} ${className}`}>
      <span aria-hidden="true">{initials}</span>
      {src && src !== failedSrc && <img src={src} alt="" aria-hidden="true"
        className="absolute inset-0 size-full object-cover" onError={() => setFailedSrc(src)} />}
    </span>
  )
}
