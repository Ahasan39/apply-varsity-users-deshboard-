const shapes = { text: 'ui-skeleton-text rounded-sm', rectangle: 'ui-skeleton-rectangle rounded-lg', circle: 'ui-skeleton-circle shrink-0 rounded-full' }
export default function Skeleton({ shape = 'text', className = '', ...props }) {
  return <div {...props} aria-hidden="true" className={`bg-surface-muted motion-safe:animate-pulse ${shapes[shape] || shapes.text} ${className}`} />
}
