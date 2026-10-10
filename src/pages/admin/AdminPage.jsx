import DashboardLayout from '../../layouts/DashboardLayout'
import ShellPreview from '../../components/layout/ShellPreview'

export default function AdminPage() {
  return (
    <DashboardLayout role="admin" title="Dashboard" description="Overview of your workspace and operational activity.">
      <ShellPreview roleLabel="Admin" />
    </DashboardLayout>
  )
}
