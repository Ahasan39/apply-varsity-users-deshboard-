import { useState } from 'react'
import { ChevronDown, CircleHelp, FileText, Home, Inbox, MoreHorizontal, Users } from 'lucide-react'
import { Avatar, Badge, Breadcrumbs, Button, Card, CompactList, CompactListItem, DataSummary, DropdownMenu, EmptyState, IconButton, NavGroup, NavItem, Pagination, SectionHeader, Separator, Skeleton, StatusBadge, Table, TableBody, TableCaption, TableCell, TableContainer, TableHead, TableHeader, TableRow, Tabs, Tooltip } from '../components/ui'
import { foundationRecords } from '../data/foundationRecords'

// No callbacks mutate records; action labels are explicitly visual specimens.
const sampleActions = [
  { id: 'view', label: 'View details (sample)' },
  { id: 'assign', label: 'Assign (unavailable)', disabled: true },
  { id: 'divider', separator: true },
  { id: 'delete', label: 'Delete (sample only)', destructive: true },
]

function RecordActions({ name }) {
  return <DropdownMenu label={`Sample actions for ${name}`} items={sampleActions}
    trigger={props => <IconButton {...props} icon={MoreHorizontal} aria-label={`Actions for ${name}`} />} />
}

function RecordTable({ compact = false }) {
  return (
    <TableContainer label={compact ? 'Priority-column record specimen' : 'Scrollable record specimen'}>
      <Table density={compact ? 'compact' : 'normal'} className={compact ? '' : 'min-w-[48rem]'}>
        <TableCaption>{compact ? 'Compact density · Secondary columns appear from lg.' : 'Six synthetic records · Selected and attention rows are visual examples.'}</TableCaption>
        <TableHeader><TableRow>
          <TableHead>Name</TableHead><TableHead className={compact ? 'hidden lg:table-cell' : ''}>Branch</TableHead>
          <TableHead className={compact ? 'hidden lg:table-cell' : ''}>Owner</TableHead><TableHead>Status</TableHead>
          {!compact && <><TableHead>Updated</TableHead><TableHead className="text-right">Action</TableHead></>}
        </TableRow></TableHeader>
        <TableBody>{foundationRecords.map((record, index) => (
          <TableRow key={record.id} state={record.state} aria-selected={record.state === 'selected' ? true : undefined} hover>
            <TableHead scope="row" className="min-w-36">
              {record.name}
              {record.state === 'selected' && <span className="mt-1 block text-caption text-info">Selected specimen</span>}
              {record.state === 'attention' && <span className="mt-1 block text-caption text-warning">Needs attention</span>}
            </TableHead>
            <TableCell className={compact ? 'hidden lg:table-cell' : ''}>{record.branch}</TableCell>
            <TableCell muted className={compact ? 'hidden lg:table-cell' : ''}>{record.owner}</TableCell>
            <TableCell><StatusBadge status={record.status} size="sm" /></TableCell>
            {!compact && <><TableCell muted className="whitespace-nowrap tabular-nums">{record.updated}</TableCell>
              <TableCell className="text-right">{index === 0 ? <RecordActions name={record.name} /> : <span aria-label="No sample action">—</span>}</TableCell></>}
          </TableRow>
        ))}</TableBody>
      </Table>
    </TableContainer>
  )
}

export default function DataDisplayPreview() {
  const [page, setPage] = useState(2)
  const [tab, setTab] = useState('overview')
  return (
    <section aria-labelledby="data-preview-title" className="mx-auto mt-12 max-w-[160rem] border-t border-border pt-8">
      <SectionHeader id="data-preview-title" title="07 / Data display & navigation primitives"
        description="Design QA only · Six fictional records, local interaction state, no live operations."
        action={<Badge variant="primary">Sprint 1.3</Badge>} />

      <div className="mt-6 grid items-start gap-6 xl:grid-cols-2">
        <Card className="space-y-4">
          <SectionHeader as="h3" title="A / Preserve column comparison" description="Scroll inside the bordered table to see every column. Tab into the region and use arrow keys." />
          <RecordTable />
          <DataSummary from={1} to={6} total={6} label="sample records" />
        </Card>
        <Card className="space-y-4">
          <SectionHeader as="h3" title="B + C / Choose the mobile presentation" description="Below 768px: compact list. Tablet and desktop: compact table with priority columns." />
          <div className="hidden md:block"><RecordTable compact /></div>
          <div className="md:hidden">
            <CompactList aria-label="Mobile sample records">
              {foundationRecords.map((record, index) => <CompactListItem key={record.id}
                primary={record.name} secondary={`${record.branch} · ${record.owner}`}
                leading={<Avatar name={record.name} size="sm" />}
                metadata={<><StatusBadge status={record.status} size="sm" /><span className="text-caption text-text-secondary">{record.updated}</span></>}
                trailing={index === 0 ? <RecordActions name={`${record.name} in compact list`} /> : undefined} />)}
            </CompactList>
          </div>
        </Card>
      </div>

      <div className="mt-6 grid grid-cols-[repeat(auto-fit,minmax(min(100%,24rem),1fr))] items-start gap-6">
        <Card className="space-y-4">
          <SectionHeader as="h3" title="Pagination & result context" description="Independent 131-result specimen. Changing pages updates the summary only; no fetch or table filtering." />
          <DataSummary from={(page - 1) * 20 + 1} to={page * 20} total={131} aria-live="polite" />
          <Pagination page={page} totalPages={7} onPageChange={setPage} aria-label="Result specimen pagination" />
          <Separator />
          <p className="text-body-sm text-text-secondary">Large range · Disabled static specimen</p>
          <Pagination page={50} totalPages={100} disabled aria-label="Large range specimen" />
        </Card>

        <Card className="space-y-4">
          <SectionHeader as="h3" title="Breadcrumbs & tabs" description="Hierarchy links are navigation. Tabs switch local content." />
          <Breadcrumbs items={[{ label: 'Foundation', href: '#colors-heading' }, { label: 'Primitives', href: '#primitives-title' }, { label: 'Sample record details' }]} />
          <Tabs label="Sample record sections" value={tab} onValueChange={setTab} items={[
            { value: 'overview', label: 'Overview', content: 'Overview specimen. No student or CRM record is open.' },
            { value: 'activity', label: 'Activity', count: 3, content: 'Activity specimen. Use Left/Right, Home or End to explore tabs.' },
            { value: 'documents', label: 'Documents', disabled: true, content: 'Unavailable specimen.' },
            { value: 'notes', label: 'Notes', content: 'Notes specimen. Tab moves naturally out of the tab list.' },
          ]} />
        </Card>

        <Card className="space-y-4">
          <SectionHeader as="h3" title="Navigation specimens" description="Static building blocks, not a sidebar or authorized route tree." />
          <nav aria-label="Specimen navigation">
            <NavGroup label="Sample group">
              <NavItem icon={Home} label="Foundation" href="#data-preview-title" active />
              <NavItem icon={Users} label="Record examples" href="#data-preview-title" badge={<Badge size="sm">6</Badge>} />
              <NavItem icon={FileText} label="Unavailable destination" disabled />
            </NavGroup>
          </nav>
          <Separator />
          <div className="flex items-center gap-3">
            <NavItem icon={Home} label="Foundation specimen, collapsed" href="#data-preview-title" collapsed />
            <Separator orientation="vertical" className="min-h-6" />
            <span className="text-body-sm text-text-secondary">Icon-only specimen retains its name.</span>
          </div>
        </Card>

        <Card className="space-y-4">
          <SectionHeader as="h3" title="Actions & supplemental help" description="Native action disclosure: Tab between actions, Escape to dismiss." />
          <div className="flex flex-wrap items-center gap-4">
            <DropdownMenu align="start" label="Standalone sample actions" items={sampleActions}
              trigger={props => <Button {...props} variant="outline" trailingIcon={ChevronDown}>Sample actions</Button>} />
            <Tooltip content="Specimen actions do not modify records." align="end">
              {props => <IconButton {...props} icon={CircleHelp} aria-label="About sample actions" variant="outline" />}
            </Tooltip>
          </div>
          <p className="text-body-sm text-text-secondary">Actions have no data effects. Help remains supplemental; the control has its own accessible label.</p>
        </Card>

        <Card className="space-y-4">
          <SectionHeader as="h3" title="Empty table composition" description="A full-width cell can contain an existing EmptyState." />
          <TableContainer label="Empty table specimen"><Table>
            <TableCaption>No sample results</TableCaption>
            <TableHeader><TableRow><TableHead>Name</TableHead><TableHead>Status</TableHead></TableRow></TableHeader>
            <TableBody><TableRow><TableCell colSpan={2}><EmptyState icon={Inbox} title="No records to show" description="This is an empty-state specimen." /></TableCell></TableRow></TableBody>
          </Table></TableContainer>
        </Card>

        <Card className="space-y-4">
          <SectionHeader as="h3" title="Loading table composition" description="Existing Skeleton shapes retain column structure." />
          <p role="status" className="text-body-sm text-text-secondary">Loading specimen only; no request is running.</p>
          <TableContainer label="Loading table specimen"><Table aria-busy="true">
            <TableCaption>Loading presentation</TableCaption>
            <TableHeader><TableRow><TableHead>Name</TableHead><TableHead>Status</TableHead></TableRow></TableHeader>
            <TableBody>{[0, 1, 2].map(index => <TableRow key={index}><TableCell><Skeleton /></TableCell><TableCell><Skeleton className="max-w-20" /></TableCell></TableRow>)}</TableBody>
          </Table></TableContainer>
        </Card>
      </div>
    </section>
  )
}
