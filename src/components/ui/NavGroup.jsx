import { useId } from 'react'

export default function NavGroup({ label, children, className = '', ...props }) {
  const id = useId()
  return (
    <div {...props} role="group" aria-labelledby={label ? id : undefined} className={`min-w-0 space-y-1 ${className}`}>
      {label && <p id={id} className="px-3 pb-2 text-label text-text-secondary">{label}</p>}
      {children}
    </div>
  )
}
