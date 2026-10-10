import DashboardShell from '../components/layout/DashboardShell'
import { dashboardNavigation } from '../config/dashboardNavigation'
import { shellUsers } from '../data/shellUsers'

export default function DashboardLayout({ role, user = shellUsers[role], navigation, title, description, breadcrumbs, actions, children }) {
  const configuration = dashboardNavigation[role]
  if (!configuration) throw new Error(`Unsupported dashboard role: ${role}`)
  return <DashboardShell roleLabel={configuration.label} user={user} navigation={navigation ?? configuration.groups}
    title={title} description={description} actions={actions}
    breadcrumbs={breadcrumbs ?? [{ label: 'Foundation', href: '/' }, { label: `${configuration.label} dashboard` }]}>
    {children}
  </DashboardShell>
}
