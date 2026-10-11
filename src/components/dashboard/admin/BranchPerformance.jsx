import { CompactList, CompactListItem, Table, TableBody, TableCaption, TableCell, TableContainer, TableHead, TableHeader, TableRow } from '../../ui'
import DashboardSection from './DashboardSection'

const columns = [{ key: 'leads', label: 'Leads' }, { key: 'students', label: 'Students' }, { key: 'applications', label: 'Applications' }, { key: 'admissions', label: 'Admissions' }]
export default function BranchPerformance({ items = [], loading = false }) {
  return <DashboardSection title="Branch performance" description={`Current inventories · ${items.length} branches`} className="admin-branches" loading={loading} empty={!items.length}>
    <div className="admin-record-table"><TableContainer label="Branch comparison"><Table density="compact" className="min-w-[31rem]">
      <TableCaption className="sr-only">Separate lead, active student, application and confirmed admission counts</TableCaption>
      <TableHeader><TableRow><TableHead>Branch</TableHead>{columns.map(column => <TableHead key={column.key} className="text-right">{column.label}</TableHead>)}</TableRow></TableHeader>
      <TableBody>{items.map(item => <TableRow key={item.name} hover><TableHead scope="row">{item.name}</TableHead>{columns.map(column => <TableCell key={column.key} className="text-right tabular-nums">{item[column.key]}</TableCell>)}</TableRow>)}</TableBody>
    </Table></TableContainer></div>
    <div className="admin-record-list"><CompactList className="[&>li]:py-3" aria-label="Branch records">{items.map(item => <CompactListItem key={item.name} primary={item.name}
      metadata={<dl className="grid w-full grid-cols-2 gap-x-6 gap-y-2">{columns.map(column => <div key={column.key}><dt className="text-caption text-text-secondary">{column.label}</dt><dd className="text-label tabular-nums">{item[column.key]}</dd></div>)}</dl>} />)}</CompactList></div>
    <p className="mt-3 text-caption text-text-secondary">Distinct record types; these counts are not a conversion funnel.</p>
  </DashboardSection>
}
