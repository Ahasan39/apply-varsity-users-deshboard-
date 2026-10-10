export default function Separator({ orientation = 'horizontal', className = '', ...props }) {
  return <div {...props} role="separator" aria-orientation={orientation} className={`${orientation === 'vertical' ? 'self-stretch border-l' : 'w-full border-t'} border-border ${className}`} />
}
