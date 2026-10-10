import DashboardLayout from '../../layouts/DashboardLayout'
import ShellPreview from '../../components/layout/ShellPreview'

export default function StudentPage() {
  return (
    <DashboardLayout role="student" title="Student Dashboard" description="A shared workspace foundation for your study-abroad journey.">
      <ShellPreview roleLabel="Student" />
    </DashboardLayout>
  )
}
