import DashboardLayout from '../../layouts/DashboardLayout'
import { Badge } from '../../components/ui'
import AdminMetrics from '../../components/dashboard/admin/AdminMetrics'
import AttentionCenter from '../../components/dashboard/admin/AttentionCenter'
import FollowUpQueue from '../../components/dashboard/admin/FollowUpQueue'
import LeadPipeline from '../../components/dashboard/admin/LeadPipeline'
import ApplicationSnapshot from '../../components/dashboard/admin/ApplicationSnapshot'
import LeadTrendChart from '../../components/dashboard/admin/LeadTrendChart'
import AcquisitionPerformance from '../../components/dashboard/admin/AcquisitionPerformance'
import BranchPerformance from '../../components/dashboard/admin/BranchPerformance'
import RecentLeads from '../../components/dashboard/admin/RecentLeads'
import RecentApplications from '../../components/dashboard/admin/RecentApplications'
import { UpcomingDeadlines, TasksApprovals, OperationalNotifications } from '../../components/dashboard/admin/OperationalUpdates'
import { acquisitionSources, applicationSnapshot, attentionItems, branches, businessMetrics, dashboardContext, deadlines, followUps, leadPipeline, leadTrend, marketingMetrics, operationalMetrics, operationalNotifications, recentApplications, recentLeads, tasksApprovals } from '../../data/adminDashboardData'
import { shellUsers } from '../../data/shellUsers'

export default function AdminPage() {
  return (
    <DashboardLayout role="admin" title={`Welcome back, ${shellUsers.admin.name.split(' ')[0]}`}
      description="Here's what needs attention across your consultancy operations."
      actions={<Badge variant="primary">Synthetic preview</Badge>}>
      <div className="mb-5 flex flex-wrap items-center justify-between gap-2 text-body-sm text-text-secondary">
        <p>{dashboardContext.scope} <span aria-hidden="true">·</span> Fixed snapshot</p>
        <p>{dashboardContext.date} <span aria-hidden="true">·</span> {dashboardContext.time}</p>
      </div>
      <div className="admin-workspace">
        <AdminMetrics title="Operational exceptions" metrics={operationalMetrics} className="admin-operational-metrics" />
        <AttentionCenter items={attentionItems} />
        <FollowUpQueue items={followUps} dueCount={operationalMetrics[1].value} overdueCount={operationalMetrics[2].value} />
        <LeadPipeline data={leadPipeline} />
        <AdminMetrics title="Business overview" metrics={businessMetrics} className="admin-business-metrics" />
        <ApplicationSnapshot items={applicationSnapshot} studentCount={businessMetrics[1].value} />
        <RecentLeads items={recentLeads} />
        <RecentApplications items={recentApplications} />
        <UpcomingDeadlines items={deadlines} />
        <TasksApprovals items={tasksApprovals} />
        <BranchPerformance items={branches} />
        <LeadTrendChart items={leadTrend} period={dashboardContext.period} />
        <AcquisitionPerformance sources={acquisitionSources} website={marketingMetrics} period={dashboardContext.period} />
        <OperationalNotifications items={operationalNotifications} />
      </div>
    </DashboardLayout>
  )
}
