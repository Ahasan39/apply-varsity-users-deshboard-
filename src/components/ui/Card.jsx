export default function Card({
  as: Element = 'div', variant = 'default', children, className = '', ...props
}) {
  const interactive = variant === 'interactive' &&
    (Element === 'button' || (Element === 'a' && props.href))
  return (
    <Element {...props} {...(Element === 'button' ? { type: props.type || 'button' } : {})}
      className={`min-w-0 rounded-lg border border-border p-5 text-text-primary [overflow-wrap:anywhere] ${variant === 'subtle' ? 'bg-surface-subtle' : 'bg-surface'} ${interactive ? 'text-left transition-colors duration-(--motion-fast) hover:border-border-strong hover:bg-surface-hover disabled:cursor-not-allowed disabled:opacity-50' : ''} ${className}`}>
      {children}
    </Element>
  )
}
