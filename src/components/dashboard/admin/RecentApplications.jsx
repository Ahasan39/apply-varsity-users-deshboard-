import { Badge, CompactList, CompactListItem, Table, TableBody, TableCaption, TableCell, TableContainer, TableHead, TableHeader, TableRow } from '../../ui'
import DashboardSection from './DashboardSection'

export default function RecentApplications({ items = [], loading = false }) {
  return <DashboardSection title="Recent applications" description="Sample stages · University and program context" className="admin-applications" loading={loading} empty={!items.length}
    action={<Badge size="sm">{items.length} records</Badge>}>
    <div className="admin-record-table"><TableContainer label="Recent application comparison"><Table density="compact" className="min-w-[40rem]">
      <TableCaption className="sr-only">Synthetic application presentation; not live university outcomes</TableCaption>
      <TableHeader><TableRow><TableHead>Student</TableHead><TableHead>University / program</TableHead><TableHead>Stage</TableHead><TableHead>Updated</TableHead></TableRow></TableHeader>
      <TableBody>{items.map(item => <TableRow key={item.id} hover>
        <TableHead scope="row">{item.name}<span className="mt-1 block text-caption font-normal text-text-secondary">{item.id}</span></TableHead>
        <TableCell>{item.university}<span className="mt-1 block text-caption text-text-secondary">{item.program}</span></TableCell>
        <TableCell><Badge size="sm" variant={item.tone}>{item.stage}</Badge></TableCell>
        <TableCell muted className="whitespace-nowrap text-caption">{item.updated}</TableCell>
      </TableRow>)}</TableBody>
    </Table></TableContainer></div>
    <div className="admin-record-list"><CompactList className="[&>li]:py-3" aria-label="Recent application records">{items.map(item => <CompactListItem key={item.id}
      primary={item.name} secondary={<>{item.university}<br />{item.program}</>}
      metadata={<><Badge size="sm" variant={item.tone}>{item.stage}</Badge><span className="text-caption text-text-secondary">{item.id} · {item.updated}</span></>} />)}</CompactList></div>
  </DashboardSection>
}
