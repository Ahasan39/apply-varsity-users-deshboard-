import { useId } from 'react'
import Field from './Field'
import { fieldControl, fieldDescription } from './fieldStyles'

export default function Input({ label, id, helperText, error, required, leadingIcon: Icon, className = '', wrapperClassName = '', type = 'text', ...props }) {
  const generatedId = useId()
  const inputId = id || generatedId
  return (
    <Field id={inputId} label={label} required={required} helperText={helperText} error={error} className={wrapperClassName}>
      <div className="relative">
        {Icon && <Icon aria-hidden="true" className="pointer-events-none absolute top-3 left-3 size-5 text-text-secondary" />}
        <input {...props} id={inputId} type={type} required={required}
          aria-invalid={error ? true : props['aria-invalid']}
          aria-describedby={fieldDescription(inputId, helperText, error, props['aria-describedby'])}
          className={`${fieldControl} ${error ? 'border-border-danger' : 'border-border-strong'} ${Icon ? 'pl-10' : ''} ${className}`} />
      </div>
    </Field>
  )
}
