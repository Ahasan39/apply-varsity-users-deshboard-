import { useEffect, useId, useRef, useState } from 'react'

export default function Tooltip({ content, children, placement = 'top', align = 'start' }) {
  const id = useId()
  const [open, setOpen] = useState(false)
  const hovered = useRef(false)
  useEffect(() => {
    if (!open) return
    const dismiss = event => { if (event.key === 'Escape') setOpen(false) }
    document.addEventListener('keydown', dismiss)
    return () => document.removeEventListener('keydown', dismiss)
  }, [open])
  return (
    <span className="relative inline-flex max-w-full"
      onPointerEnter={event => { if (event.pointerType !== 'touch') { hovered.current = true; setOpen(true) } }}
      onPointerLeave={event => { hovered.current = false; if (!event.currentTarget.contains(document.activeElement)) setOpen(false) }}
      onFocus={() => setOpen(true)}
      onBlur={event => { if (!hovered.current && !event.currentTarget.contains(event.relatedTarget)) setOpen(false) }}
      onKeyDown={event => { if (event.key === 'Escape') { setOpen(false); event.stopPropagation() } }}>
      {children({ 'aria-describedby': id })}
      <span id={id} role="tooltip" hidden={!open}
        className={`absolute z-30 w-52 max-w-[calc(100vw-3rem)] ${align === 'end' ? 'right-0' : 'left-0'} ${placement === 'bottom' ? 'top-full pt-2' : 'bottom-full pb-2'}`}>
        <span className="block rounded-md bg-brand-deep px-3 py-2 text-body-sm text-text-inverse shadow-sm [overflow-wrap:anywhere]">{content}</span>
      </span>
    </span>
  )
}
