export const actionBase = 'relative inline-flex max-w-full shrink-0 items-center justify-center gap-2 rounded-md border text-label transition-colors duration-(--motion-fast) ease-(--motion-ease) disabled:cursor-not-allowed disabled:opacity-50 [&_svg]:size-4 [&_svg]:shrink-0'
export const actionVariants = {
  primary: 'border-primary bg-primary text-text-inverse enabled:hover:bg-primary-hover',
  secondary: 'border-transparent bg-surface-muted text-text-primary enabled:hover:bg-surface-hover',
  outline: 'border-border-strong bg-surface text-text-primary enabled:hover:bg-surface-hover',
  ghost: 'border-transparent bg-transparent text-text-secondary enabled:hover:bg-surface-hover',
  danger: 'border-danger bg-danger text-text-inverse enabled:hover:brightness-90',
}
export const actionSizes = {
  sm: 'min-h-(--control-height-touch) px-3 py-1 sm:min-h-(--control-height-compact)',
  md: 'min-h-(--control-height-touch) px-4 py-2 sm:min-h-(--control-height-default)',
  lg: 'min-h-(--control-height-large) px-5 py-3',
}
