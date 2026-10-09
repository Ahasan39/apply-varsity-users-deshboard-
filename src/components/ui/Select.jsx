import { useId } from 'react'
import Field from './Field'
import { fieldControl, fieldDescription } from './fieldStyles'

export default function Select({ label, id, options = [], placeholder, helperText, error, required, value, defaultValue, className = '', wrapperClassName = '', ...props }) {
  const generatedId = useId()
  const selectId = id || generatedId
  return (
    <Field id={selectId} label={label} required={required} helperText={helperText} error={error} className={wrapperClassName}>
      <select {...props} id={selectId} required={required} value={value}
        defaultValue={value === undefined ? (defaultValue ?? (placeholder ? '' : undefined)) : undefined}
        aria-invalid={error ? true : props['aria-invalid']}
        aria-describedby={fieldDescription(selectId, helperText, error, props['aria-describedby'])}
        className={`${fieldControl} ${error ? 'border-border-danger' : 'border-border-strong'} ${className}`}>
        {placeholder && <option value="" disabled>{placeholder}</option>}
        {options.map(({ value, label: optionLabel, disabled }) => <option key={value} value={value} disabled={disabled}>{optionLabel}</option>)}
      </select>
    </Field>
  )
}
