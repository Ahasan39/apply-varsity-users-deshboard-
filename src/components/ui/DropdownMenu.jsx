import { useEffect, useId, useRef, useState } from 'react'
import Separator from './Separator'

// A disclosure of native actions, deliberately not an ARIA menu widget.
export default function DropdownMenu({ trigger, items = [], label = 'Actions', align = 'end', placement = 'bottom', className = '' }) {
  const [open, setOpen] = useState(false)
  const id = useId()
  const wrapper = useRef(null)
  const triggerRef = useRef(null)
  const panel = useRef(null)
  useEffect(() => {
    if (!open) return
    panel.current?.querySelector('button:not(:disabled)')?.focus()
    function outside(event) {
      if (!wrapper.current?.contains(event.target)) setOpen(false)
    }
    document.addEventListener('pointerdown', outside)
    return () => document.removeEventListener('pointerdown', outside)
  }, [open])
  function closeAndRestore() {
    setOpen(false)
    triggerRef.current?.focus()
  }
  return (
    <div ref={wrapper} className={`relative inline-block max-w-full ${className}`}
      onBlur={event => { if (!event.currentTarget.contains(event.relatedTarget)) setOpen(false) }}
      onKeyDown={event => { if (open && event.key === 'Escape') { event.preventDefault(); event.stopPropagation(); closeAndRestore() } }}>
      {trigger({ ref: triggerRef, type: 'button', 'aria-expanded': open, 'aria-controls': id, onClick: () => setOpen(!open) })}
      {open && <div ref={panel} id={id} role="group" aria-label={label}
        className={`absolute z-20 w-52 max-w-[calc(100vw-3rem)] rounded-lg border border-border bg-surface p-2 shadow-overlay ${align === 'start' ? 'left-0' : 'right-0'} ${placement === 'top' ? 'bottom-full mb-2' : 'top-full mt-2'}`}>
        {items.map(item => item.separator
          ? <Separator key={item.id} className="my-1" />
          : <button key={item.id} type="button" disabled={item.disabled}
              className={`flex min-h-(--control-height-touch) w-full items-center rounded-sm px-3 py-2 text-left text-body-sm [overflow-wrap:anywhere] disabled:cursor-not-allowed disabled:opacity-50 ${item.destructive ? 'text-danger enabled:hover:bg-danger-subtle' : 'text-text-primary enabled:hover:bg-surface-hover'}`}
              onClick={() => { closeAndRestore(); item.onSelect?.() }}>{item.label}</button>)}
      </div>}
    </div>
  )
}
