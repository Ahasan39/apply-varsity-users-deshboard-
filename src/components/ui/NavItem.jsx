export default function NavItem({ as: Element = 'a', icon: Icon, label, active = false, badge, trailing, disabled = false, collapsed = false, className = '', ...props }) {
  const classes = `flex min-h-(--control-height-touch) min-w-0 items-center gap-3 rounded-md border-l-2 px-3 py-2 text-label ${active ? 'border-primary bg-surface-selected text-info' : 'border-transparent text-text-secondary'} ${disabled ? 'cursor-not-allowed opacity-50' : 'hover:bg-surface-hover'} ${className}`
  const content = <>{Icon && <Icon aria-hidden="true" className="size-5 shrink-0" />}<span className={collapsed ? 'sr-only' : 'min-w-0 flex-1 [overflow-wrap:anywhere]'}>{label}</span>{!collapsed && (badge ?? trailing) != null && <span className="ml-auto flex max-w-full shrink-0 items-center gap-2">{badge}{trailing}</span>}</>
  if (disabled) return <span role="link" aria-disabled="true" className={classes}>{content}</span>
  return <Element {...props} aria-current={active ? 'page' : props['aria-current']} className={classes}>{content}</Element>
}
