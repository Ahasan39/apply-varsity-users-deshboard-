import { AlertCircle, Clock3, FileText, GraduationCap, Medal, UserRoundCheck, UserRoundPlus, Users } from 'lucide-react'
import MetricCard from '../MetricCard'

const icons = { assignment: UserRoundPlus, clock: Clock3, alert: AlertCircle, profile: UserRoundCheck, leads: Users, students: GraduationCap, applications: FileText, offers: Medal }

export default function AdminMetrics({ title, metrics, className = '' }) {
  return <section aria-label={title} className={`admin-metrics ${className}`}>
    <h2 className="sr-only">{title}</h2>
    {metrics.map(metric => <MetricCard key={metric.label} {...metric} icon={icons[metric.icon]} />)}
  </section>
}
