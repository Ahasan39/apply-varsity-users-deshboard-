import { useId, useRef } from 'react'

export default function Tabs({ items = [], value, onValueChange, label, className = '' }) {
  const id = useId()
  const refs = useRef([])
  const enabled = items.map((item, index) => item.disabled ? -1 : index).filter(index => index >= 0)
  const selected = items.findIndex(item => item.value === value && !item.disabled)
  const active = selected >= 0 ? selected : enabled[0]
  function handleKey(event, index) {
    const position = enabled.indexOf(index)
    const targets = {
      ArrowRight: enabled[(position + 1) % enabled.length],
      ArrowLeft: enabled[(position - 1 + enabled.length) % enabled.length],
      Home: enabled[0], End: enabled.at(-1),
    }
    if (!(event.key in targets)) return
    event.preventDefault()
    const target = targets[event.key]
    refs.current[target]?.focus()
    refs.current[target]?.scrollIntoView({ block: 'nearest', inline: 'nearest' })
    onValueChange?.(items[target].value)
  }
  return (
    <div className={`min-w-0 ${className}`}>
      <div role="tablist" aria-label={label} className="flex max-w-full gap-1 overflow-x-auto border-b border-border p-1.5">
        {items.map((item, index) => (
          <button key={item.value} ref={element => { refs.current[index] = element }} id={`${id}-tab-${index}`}
            type="button" role="tab" aria-selected={index === active} aria-controls={`${id}-panel-${index}`}
            disabled={item.disabled} tabIndex={index === active ? 0 : -1}
            onClick={() => onValueChange?.(item.value)} onKeyDown={event => handleKey(event, index)}
            className={`inline-flex min-h-(--control-height-touch) shrink-0 items-center gap-2 rounded-sm border-b-2 px-3 py-2 text-label disabled:cursor-not-allowed disabled:opacity-50 ${index === active ? 'border-primary bg-surface-selected text-info' : 'border-transparent text-text-secondary enabled:hover:bg-surface-hover'}`}>
            {item.label}{item.count !== undefined && <span className="text-caption">({item.count})</span>}
          </button>
        ))}
      </div>
      {items.map((item, index) => (
        <div key={item.value} role="tabpanel" id={`${id}-panel-${index}`} aria-labelledby={`${id}-tab-${index}`}
          hidden={index !== active} tabIndex={0} className="mt-4 rounded-sm text-body-sm text-text-secondary [overflow-wrap:anywhere]">{item.content}</div>
      ))}
    </div>
  )
}
