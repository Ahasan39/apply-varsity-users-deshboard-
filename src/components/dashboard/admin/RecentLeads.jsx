import { Badge, CompactList, CompactListItem, Table, TableBody, TableCaption, TableCell, TableContainer, TableHead, TableHeader, TableRow } from '../../ui'
import DashboardSection from './DashboardSection'

export default function RecentLeads({ items = [], loading = false }) {
  return <DashboardSection id="recent-leads" title="Recent leads" description="Latest updates · Ownership and exceptions" className="admin-leads" loading={loading} empty={!items.length}
    action={<Badge size="sm">{items.length} records</Badge>}>
    <div className="admin-record-table"><TableContainer label="Recent lead comparison"><Table density="compact" className="min-w-[42rem]">
      <TableCaption className="sr-only">Synthetic leads as of 11 October 2026, 09:00 Bangladesh time</TableCaption>
      <TableHeader><TableRow><TableHead>Lead / source</TableHead><TableHead>Interest</TableHead><TableHead>Ownership</TableHead><TableHead>Stage / attention</TableHead><TableHead>Updated</TableHead></TableRow></TableHeader>
      <TableBody>{items.map(item => <TableRow key={item.id} hover>
        <TableHead scope="row"><span className="block">{item.name}</span><span className="mt-1 block text-caption font-normal text-text-secondary">{item.id} · {item.source}</span></TableHead>
        <TableCell>{item.interest}</TableCell>
        <TableCell><span className="block">{item.owner || 'Unassigned'}</span><span className="mt-1 block text-caption text-text-secondary">{item.branch}</span></TableCell>
        <TableCell><Badge size="sm" variant={item.tone}>{item.stage}</Badge><span className="mt-1 block text-caption text-text-secondary">{item.signal}</span></TableCell>
        <TableCell muted className="whitespace-nowrap text-caption">{item.updated}</TableCell>
      </TableRow>)}</TableBody>
    </Table></TableContainer></div>
    <div className="admin-record-list"><CompactList className="[&>li]:py-3" aria-label="Recent lead records">{items.map(item => <CompactListItem key={item.id}
      primary={<div className="flex flex-wrap items-center justify-between gap-2"><span>{item.name}</span><Badge size="sm" variant={item.tone}>{item.stage}</Badge></div>}
      secondary={`${item.interest} · ${item.source}`}
      metadata={<div className="space-y-1 text-caption text-text-secondary"><p>{item.owner || 'Unassigned'} · {item.branch}</p><p className="font-semibold">{item.signal}</p><p>{item.id} · Updated {item.updated}</p></div>} />)}</CompactList></div>
    <p className="mt-3 text-caption text-text-secondary">First-contact SLA and follow-up lateness are separate signals.</p>
  </DashboardSection>
}
