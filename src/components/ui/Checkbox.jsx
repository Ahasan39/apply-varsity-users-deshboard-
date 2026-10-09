import { useEffect, useId, useImperativeHandle, useRef } from 'react'

export default function Checkbox({ id, label, description, disabled, indeterminate = false, className = '', ref, ...props }) {
  const generatedId = useId()
  const checkboxId = id || generatedId
  const inputRef = useRef(null)
  useImperativeHandle(ref, () => inputRef.current)
  // Native mixed state is a DOM property, not an HTML attribute.
  useEffect(() => { inputRef.current.indeterminate = indeterminate }, [indeterminate])
  return (
    <div className={`min-w-0 ${disabled ? 'opacity-50' : ''} ${className}`}>
      <label htmlFor={checkboxId} className={`flex min-h-(--control-height-touch) items-center gap-3 py-2 text-body-sm ${disabled ? 'cursor-not-allowed' : 'cursor-pointer'}`}>
        <input {...props} id={checkboxId} ref={inputRef} type="checkbox" disabled={disabled}
          aria-describedby={[props['aria-describedby'], description && `${checkboxId}-description`].filter(Boolean).join(' ') || undefined}
          className="size-5 shrink-0 accent-primary" />
        <span className="min-w-0 [overflow-wrap:anywhere]">{label}</span>
      </label>
      {description && <p id={`${checkboxId}-description`} className="ml-8 text-body-sm text-text-secondary">{description}</p>}
    </div>
  )
}
