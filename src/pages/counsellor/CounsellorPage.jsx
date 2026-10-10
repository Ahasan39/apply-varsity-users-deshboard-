import DashboardLayout from '../../layouts/DashboardLayout'
import ShellPreview from '../../components/layout/ShellPreview'

export default function CounsellorPage() {
  return (
    <DashboardLayout role="counsellor" title="Counsellor Dashboard" description="A shared workspace foundation for your daily work.">
      <ShellPreview roleLabel="Counsellor" />
    </DashboardLayout>
  )
}
