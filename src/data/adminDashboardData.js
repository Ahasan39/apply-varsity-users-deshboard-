// Entirely fictional review fixture, frozen at 11 Oct 2026, 09:00 Asia/Dhaka.
// Aggregates are illustrative inventories, never API contracts or live calculations.
export const dashboardContext = {
  date: '11 Oct 2026', time: '09:00 BST (UTC+6)', period: '05–11 Oct 2026',
  scope: 'All 4 demo branches',
}

export const operationalMetrics = [
  { label: 'Unassigned leads', value: 11, detail: 'Awaiting an owner', tone: 'warning', icon: 'assignment' },
  { label: 'Follow-ups due', value: 6, detail: 'Today · excluding overdue', tone: 'warning', icon: 'clock' },
  { label: 'Overdue follow-ups', value: 2, detail: 'Management attention', tone: 'danger', icon: 'alert' },
  { label: 'Incomplete profiles', value: 49, detail: 'Lead profiles to complete', tone: 'neutral', icon: 'profile' },
]
export const businessMetrics = [
  { label: 'Total leads', value: 1248, detail: 'Across all demo branches', icon: 'leads' },
  { label: 'Active students', value: 842, detail: 'Ongoing consultancy records', icon: 'students' },
  { label: 'Applications', value: 436, detail: 'University / program records', icon: 'applications' },
  { label: 'Offers received', value: 128, detail: '76 admissions confirmed', icon: 'offers' },
]
export const attentionItems = [
  { id: 'sla', title: 'First-contact SLA', count: 5, tone: 'danger', severity: 'Critical', context: '2 red (≥48h) · 3 warning (24–48h)' },
  { id: 'overdue', title: 'Overdue follow-ups', count: 2, tone: 'danger', severity: 'Overdue', context: 'Owners need to confirm next steps' },
  { id: 'unassigned', title: 'Unassigned leads', count: 11, tone: 'warning', severity: 'Assign', context: 'No accountable counsellor yet' },
  { id: 'documents', title: 'Application documents', count: 36, tone: 'warning', severity: 'Review', context: 'Required documents outstanding' },
]
export const followUps = [
  { id: 'f1', name: 'Tanvir Ahmed', interest: 'Masters · United Kingdom', owner: 'Nadia Sultana', branch: 'Dhaka', due: '10 Oct · 10:00', state: 'Overdue', tone: 'danger' },
  { id: 'f2', name: 'Rafiul Islam', interest: 'Undergraduate · Australia', owner: 'Farhan Ahmed', branch: 'Chattogram', due: '10 Oct · 14:00', state: 'Overdue', tone: 'danger' },
  { id: 'f3', name: 'Nusrat Jahan', interest: 'Masters · Canada', owner: 'Nadia Sultana', branch: 'Dhaka', due: '11 Oct · 11:30', state: 'Due today', tone: 'warning' },
  { id: 'f4', name: 'Ayesha Rahman', interest: 'Visa guidance', owner: 'Rahat Karim', branch: 'Sylhet', due: '12 Oct · 16:30', state: 'Upcoming', tone: 'info' },
]
export const leadPipeline = {
  total: 1248,
  stages: [
    { label: 'New', count: 84 }, { label: 'Assigned', count: 160 },
    { label: 'Contacted', count: 208 }, { label: 'Follow-up', count: 240 },
    { label: 'Qualified', count: 168 }, { label: 'Agreement', count: 112, detail: '72 pending · 40 completed' },
    { label: 'Converted', count: 176 },
  ],
  secondary: [{ label: 'Lost', count: 60 }, { label: 'Unqualified', count: 28 }, { label: 'Duplicate review', count: 12 }],
}
export const applicationSnapshot = [
  { label: 'Submitted', count: 100, tone: 'info' },
  { label: 'Under review', count: 172, tone: 'neutral' },
  { label: 'Documents required', count: 36, tone: 'warning' },
  { label: 'Offer received', count: 52, tone: 'success' },
  { label: 'Admission confirmed', count: 76, tone: 'success' },
]
export const leadTrend = [
  { day: '05', leads: 18, contacted: 12 }, { day: '06', leads: 22, contacted: 16 },
  { day: '07', leads: 20, contacted: 17 }, { day: '08', leads: 28, contacted: 20 },
  { day: '09', leads: 24, contacted: 19 }, { day: '10', leads: 26, contacted: 23 },
  { day: '11', leads: 30, contacted: 25 },
]
export const acquisitionSources = [
  { label: 'Website', count: 72 }, { label: 'Facebook / Meta', count: 40 },
  { label: 'Google', count: 24 }, { label: 'Referral', count: 20 },
  { label: 'Events', count: 8 }, { label: 'Other', count: 4 },
]
export const marketingMetrics = [
  { label: 'Unique visitors', value: 3840 }, { label: 'Sessions', value: 4620 },
  { label: 'Page views', value: 9280 }, { label: 'Converted sessions', value: 96 },
  { label: 'Attributed leads', value: 72 },
]
export const branches = [
  { name: 'Dhaka', leads: 520, students: 340, applications: 182, admissions: 32 },
  { name: 'Chattogram', leads: 408, students: 282, applications: 146, admissions: 26 },
  { name: 'Sylhet', leads: 196, students: 140, applications: 68, admissions: 12 },
  { name: 'Cumilla', leads: 124, students: 80, applications: 40, admissions: 6 },
]
export const recentLeads = [
  { id: 'L-1248', name: 'Mahdi Hasan', source: 'Website', interest: 'MSc Business · UK', branch: 'Dhaka', owner: null, stage: 'New', signal: 'Unassigned', tone: 'warning', sla: 'warning', updated: '11 Oct · 08:45' },
  { id: 'L-1247', name: 'Samira Noor', source: 'Referral', interest: 'BSc Computing · Canada', branch: 'Chattogram', owner: 'Farhan Ahmed', stage: 'Assigned', signal: 'SLA red', tone: 'danger', sla: 'red', updated: '11 Oct · 08:30' },
  { id: 'L-1246', name: 'Arif Hossain', source: 'Google', interest: 'MBA · Australia', branch: 'Sylhet', owner: 'Rahat Karim', stage: 'Contacted', signal: 'Contact confirmed', tone: 'info', sla: 'contacted', updated: '11 Oct · 08:10' },
  { id: 'L-1245', name: 'Nusrat Jahan', source: 'Facebook / Meta', interest: 'MSc Finance · Canada', branch: 'Dhaka', owner: 'Nadia Sultana', stage: 'Follow-up', signal: 'Follow-up due', tone: 'warning', sla: 'contacted', updated: '10 Oct · 17:40' },
  { id: 'L-1244', name: 'Tania Akter', source: 'Events', interest: 'BSc Psychology · UK', branch: 'Cumilla', owner: 'Sadia Islam', stage: 'Qualified', signal: 'Incomplete profile', tone: 'neutral', sla: 'legacy_unverified', updated: '10 Oct · 16:15' },
]
export const recentApplications = [
  { id: 'A-436', name: 'Mehedi Hasan', university: 'University of Portsmouth', program: 'MSc International Business', stage: 'Documents required', tone: 'warning', updated: '11 Oct · 08:35' },
  { id: 'A-435', name: 'Ayesha Rahman', university: 'University of Adelaide', program: 'Master of Public Health', stage: 'Under review', tone: 'neutral', updated: '11 Oct · 08:20' },
  { id: 'A-434', name: 'Samiul Islam', university: 'University of Manitoba', program: 'BSc Computer Science', stage: 'Submitted', tone: 'info', updated: '10 Oct · 16:50' },
  { id: 'A-433', name: 'Nabila Ahmed', university: 'University of Greenwich', program: 'MSc Accounting & Finance', stage: 'Offer received', tone: 'success', updated: '10 Oct · 15:30' },
]
export const deadlines = [
  { id: 'd1', day: '12', month: 'OCT', title: 'Application document deadline', type: 'Deadline', detail: '14:00 · Dhaka · Sample application', tone: 'warning' },
  { id: 'd2', day: '13', month: 'OCT', title: 'Study in UK counselling session', type: 'Event', detail: '11:00 · Chattogram', tone: 'info' },
  { id: 'd3', day: '15', month: 'OCT', title: 'Visa preparation briefing', type: 'Session', detail: '16:00 · Online · All demo branches', tone: 'neutral' },
]
export const tasksApprovals = [
  { id: 't1', title: 'Lead ownership assignment', count: 11, type: 'Task', detail: 'Branch managers · Today', tone: 'warning' },
  { id: 't2', title: 'Student document verification', count: 8, type: 'Task', detail: 'Admissions team · 12 Oct', tone: 'neutral' },
  { id: 't3', title: 'Application review sign-off', count: 3, type: 'Approval', detail: 'Admin · 12 Oct', tone: 'info' },
]
export const operationalNotifications = [
  { id: 'n1', title: 'First-contact escalation', detail: 'Two leads reached the red SLA state.', age: '10 min ago', tone: 'danger' },
  { id: 'n2', title: 'Application status updated', detail: 'A-435 marked Under review.', age: '40 min ago', tone: 'info' },
  { id: 'n3', title: 'Student documents uploaded', detail: 'Admissions team review is pending.', age: '45 min ago', tone: 'info' },
  { id: 'n4', title: 'Branch summary prepared', detail: 'Cumilla operational snapshot is ready.', age: '1 hour ago', tone: 'neutral' },
]
