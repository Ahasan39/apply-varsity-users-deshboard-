import { BadgeCheck, BookOpen, Building2, CalendarDays, CheckSquare, FileCheck, FileText, GraduationCap, Handshake, House, Image, Landmark, Megaphone, MessageCircle, PanelTop, Search, Settings, UserRound, Users, Wallet, Wrench } from 'lucide-react'

// Presentation only. Future entries deliberately have no destination or permission logic.
const future = (label, icon) => ({ label, icon, disabled: true })
const main = role => ({ label: 'Main', items: [{ label: 'Dashboard', icon: House, to: `/${role}` }] })

export const dashboardNavigation = {
  admin: {
    label: 'Admin',
    groups: [
      main('admin'),
      { label: 'CRM', items: [future('Leads', Users), future('Client', UserRound), future('Task', CheckSquare), future('Team', Users)] },
      { label: 'Operations', items: [future('Branches', Building2), future('Scholarships', GraduationCap), future('Course Finder', Search), future('Appointments', CalendarDays)] },
      { label: 'Marketing', items: [future('Marketing', Megaphone), future('Events', CalendarDays), future('Media Library', Image), future('Homepage Hero', PanelTop), future('Study Abroad', GraduationCap), future('Marketing Tools', Wrench)] },
      { label: 'Finance', items: [future('Accounts', Wallet), future('Finance', Landmark)] },
      { label: 'System & Other', items: [future('Agreements', Handshake), future('Chat with Support', MessageCircle), future('Blog', BookOpen), future('Settings', Settings)] },
    ],
  },
  counsellor: {
    label: 'Counsellor',
    groups: [main('counsellor'), { label: 'My workspace', items: [future('My Leads', Users), future('Follow-ups', CheckSquare), future('Students', GraduationCap), future('Applications', FileText), future('Appointments', CalendarDays), future('Tasks', CheckSquare)] }],
  },
  student: {
    label: 'Student',
    groups: [main('student'), { label: 'My journey', items: [future('My Profile', UserRound), future('Documents', FileCheck), future('Applications', FileText), future('Offers', BadgeCheck), future('Appointments', CalendarDays)] }],
  },
}
