import { Badge, Card } from '../ui'

const sections = ['Primary section', 'Supporting section', 'Context section', 'Secondary section', 'Additional section', 'Detail section']

export default function ShellPreview({ roleLabel }) {
  return (
    <div className="space-y-6">
      <Card as="section" aria-label={`${roleLabel} workspace foundation`} className="max-w-4xl">
        <Badge variant="primary" size="sm">Shell preview</Badge>
        <h2 className="mt-4 text-section">{roleLabel} workspace foundation</h2>
        <p className="mt-2 max-w-prose text-body-sm text-text-secondary">Your workspace frame is ready. Dashboard content will be added in a later implementation phase. These surfaces demonstrate layout only.</p>
        <p className="mt-3 max-w-prose text-body-sm text-text-secondary">Profiles and the notification count are fictional. Search, notifications and future navigation entries are unavailable.</p>
      </Card>
      <section aria-label="Workspace layout specimens" className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,22rem),1fr))] gap-6">
        {sections.map(title => <Card key={title} variant="subtle" className="min-h-40 border-dashed">
          <p className="text-caption text-text-secondary">Layout placeholder</p>
          <h2 className="mt-3 text-card">{title}</h2>
          <p className="mt-2 max-w-prose text-body-sm text-text-secondary">Reserved for future workspace content.</p>
        </Card>)}
      </section>
    </div>
  )
}
