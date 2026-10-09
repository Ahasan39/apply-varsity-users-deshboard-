import { actionBase, actionVariants } from './actionStyles'

const sizes = {
  sm: 'size-(--control-height-touch) sm:size-(--control-height-compact)',
  md: 'size-(--control-height-touch) sm:size-(--control-height-default)',
  lg: 'size-(--control-height-large)',
}

export default function IconButton({
  icon: Icon, 'aria-label': label, variant = 'ghost', size = 'md',
  type = 'button', className = '', ...props
}) {
  if (!label?.trim()) throw new Error('IconButton requires a non-empty aria-label.')
  return (
    <button {...props} type={type} aria-label={label}
      className={`${actionBase} ${actionVariants[variant] || actionVariants.ghost} ${sizes[size] || sizes.md} ${className}`}>
      <Icon aria-hidden="true" />
    </button>
  )
}
