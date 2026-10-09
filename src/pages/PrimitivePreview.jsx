import { useRef, useState } from 'react'
import { ArrowRight, Check, Inbox, Plus, RotateCcw, Search, Trash2, X } from 'lucide-react'
import { Avatar, Badge, Button, Card, Checkbox, EmptyState, IconButton, Input, SearchInput, SectionHeader, Select, Skeleton, StatusBadge } from '../components/ui'

// Preview-only state; no business records or simulated requests.
export default function PrimitivePreview() {
  const [search, setSearch] = useState('')
  const [selection, setSelection] = useState('')
  const [checked, setChecked] = useState(false)
  const [mixed, setMixed] = useState(true)
  const inputRef = useRef(null)

  return (
    <section aria-labelledby="primitives-title" className="mx-auto mt-12 max-w-[160rem] border-t border-border pt-8">
      <SectionHeader id="primitives-title" title="06 / Core UI primitives"
        description="Shared controls and surfaces. Interactive examples use local preview state only."
        action={<Badge variant="primary">Sprint 1.2</Badge>} />
      <div className="mt-6 grid grid-cols-[repeat(auto-fit,minmax(min(100%,22rem),1fr))] items-start gap-6">
        <Card className="space-y-5">
          <SectionHeader as="h3" title="Buttons" description="Blue for primary actions; red for destructive intent." />
          <div className="flex flex-wrap items-center gap-3">
            {['primary', 'secondary', 'outline', 'ghost', 'danger'].map(variant => <Button key={variant} variant={variant}>{variant[0].toUpperCase() + variant.slice(1)}</Button>)}
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <Button size="sm">Small</Button><Button size="md">Medium</Button><Button size="lg">Large</Button>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <Button disabled>Disabled</Button><Button loading>Save example</Button>
            <Button leadingIcon={Plus}>Leading icon</Button><Button trailingIcon={ArrowRight} variant="outline">Trailing icon</Button>
          </div>
          <p className="text-body-sm text-text-secondary">Action specimens only; no records are created or deleted.</p>
        </Card>

        <Card className="space-y-5">
          <SectionHeader as="h3" title="Icon buttons" description="Every icon-only action has an accessible name." />
          <div className="flex flex-wrap items-center gap-3">
            <IconButton icon={Search} aria-label="Search specimen" size="sm" />
            <IconButton icon={Plus} aria-label="Add specimen" variant="outline" />
            <IconButton icon={Check} aria-label="Confirm specimen" variant="primary" size="lg" />
            <IconButton icon={Trash2} aria-label="Delete specimen" variant="danger" />
            <IconButton icon={X} aria-label="Disabled close specimen" disabled />
          </div>
          <p className="text-body-sm text-text-secondary">Small, medium and large. No tooltip or menu system.</p>
        </Card>

        <Card className="space-y-4">
          <SectionHeader as="h3" title="Cards" description="Flexible composition without fixed dimensions." />
          <Card><p className="text-card">Default surface</p><p className="mt-1 text-body-sm text-text-secondary">A quiet border and readable spacing.</p></Card>
          <Card variant="subtle"><p className="text-card">Subtle surface</p><p className="mt-1 text-body-sm text-text-secondary">Secondary grouping within a workspace.</p></Card>
          <Card as="a" href="#primitive-forms" variant="interactive" className="block">
            <span className="flex items-center justify-between gap-2 text-label">Explore form controls <ArrowRight aria-hidden="true" className="size-4 shrink-0" /></span>
            <span className="mt-1 block text-body-sm text-text-secondary">A real link with hover and keyboard focus.</span>
          </Card>
        </Card>

        <Card className="space-y-5">
          <SectionHeader as="h3" title="Badges & statuses" description="Compact, labeled meaning across roles." />
          <div className="flex flex-wrap gap-2">
            {['neutral', 'primary', 'success', 'warning', 'danger', 'info'].map(variant => <Badge key={variant} variant={variant}>{variant}</Badge>)}
            <Badge size="sm" icon={Check} variant="success">Small with icon</Badge><Badge dot>With dot</Badge>
          </div>
          <div className="flex flex-wrap gap-2">
            {['healthy', 'warning', 'critical', 'contacted', 'inactive', 'unverified'].map(status => <StatusBadge key={status} status={status} />)}
          </div>
          <Badge>Long labels wrap deliberately instead of breaking a narrow layout</Badge>
        </Card>

        <Card className="space-y-5">
          <SectionHeader as="h3" title="Avatars" description="Stable shapes with local, deterministic initials." />
          <div className="flex flex-wrap items-center gap-4">
            <Avatar name="Rajib Ahamed Raju" size="sm" /><Avatar name="Mahdi Hasan" /><Avatar name="Nusrat" size="lg" /><Avatar />
          </div>
          <p className="text-body-sm text-text-secondary">Synthetic name examples · No external image service.</p>
        </Card>

        <Card id="primitive-forms" className="space-y-5">
          <SectionHeader as="h3" title="Text inputs" description="Native controls with associated labels and feedback." />
          <Input ref={inputRef} label="Example name" name="exampleName" placeholder="Enter a sample name" />
          <Input label="Reference" helperText="Use a short label for this preview." leadingIcon={Check} placeholder="Example reference" />
          <Input label="Email example" type="email" defaultValue="incomplete" error="Enter a complete email address." required />
          <Input label="Disabled field" value="Unavailable example" disabled />
        </Card>

        <Card className="space-y-5">
          <SectionHeader as="h3" title="Search, select & checkbox" description="Use the keyboard or pointer to try each control."
            action={<IconButton icon={RotateCcw} aria-label="Reset control examples" onClick={() => { setSearch(''); setSelection(''); setChecked(false); setMixed(true) }} />} />
          <SearchInput label="Search examples" value={search} onChange={event => setSearch(event.target.value)} />
          <p className="text-body-sm text-text-secondary [overflow-wrap:anywhere]">Entered text: {search || 'None'}</p>
          <Select label="Example category" placeholder="Choose a category" value={selection}
            onChange={event => setSelection(event.target.value)} helperText="Selection stays in this preview."
            options={[{ value: 'foundation', label: 'Foundation' }, { value: 'primitives', label: 'Primitives' }]} />
          <Select label="Disabled category" defaultValue="foundation" disabled options={[{ value: 'foundation', label: 'Foundation' }]} />
          <Checkbox label="Enable example" description="A clickable label and comfortable touch area." checked={checked} onChange={event => setChecked(event.target.checked)} />
          <Checkbox label="Mixed selection example" indeterminate={mixed} checked={!mixed}
            onChange={event => setMixed(!event.target.checked)} description={mixed ? 'Partially selected. Activate to select.' : 'Selected. Reset examples to restore the mixed state.'} />
          <Checkbox label="Disabled checkbox" disabled defaultChecked />
        </Card>

        <Card className="space-y-5">
          <SectionHeader as="h3" title="Section header" description="Actions reflow below the heading on small screens."
            action={<Button variant="outline" size="sm" onClick={() => inputRef.current?.focus()}>Try a field</Button>} />
          <EmptyState icon={Inbox} title="No examples selected" description="Choose a category or try entering a sample name."
            action={<Button variant="secondary" onClick={() => inputRef.current?.focus()}>Explore inputs</Button>} />
        </Card>

        <Card className="space-y-5">
          <SectionHeader as="h3" title="Skeletons" description="Lightweight placeholders; motion respects your preferences." />
          <div role="status" aria-label="Loading specimen">
            <div className="mb-4 flex items-center gap-3"><Skeleton shape="circle" /><div className="min-w-0 flex-1 space-y-2"><Skeleton /><Skeleton className="max-w-32" /></div></div>
            <Skeleton shape="rectangle" />
          </div>
          <p className="text-body-sm text-text-secondary">Static loading demonstration; no request is running.</p>
        </Card>
      </div>
    </section>
  )
}
