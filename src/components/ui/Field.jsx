export default function Field({ id, label, required, helperText, error, children, className = '' }) {
  return (
    <div className={`min-w-0 space-y-2 ${className}`}>
      {label && <label htmlFor={id} className="block text-label">{label}{required && <span aria-hidden="true" className="ml-1 text-danger">*</span>}</label>}
      {children}
      {helperText && <p id={`${id}-help`} className="text-body-sm text-text-secondary [overflow-wrap:anywhere]">{helperText}</p>}
      {error && <p id={`${id}-error`} className="text-body-sm text-danger [overflow-wrap:anywhere]">{error}</p>}
    </div>
  )
}
