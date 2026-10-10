import { useCallback, useId, useRef, useState } from 'react'
import Sidebar from './Sidebar'
import Topbar from './Topbar'
import MobileNavigation from './MobileNavigation'
import PageHeader from './PageHeader'

export default function DashboardShell({ roleLabel, user, navigation, title, description, breadcrumbs, actions, children }) {
  const [collapsed, setCollapsed] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const menuRef = useRef(null)
  const collapseRef = useRef(null)
  const mainId = useId()
  const closeNavigation = useCallback(() => setMobileOpen(false), [])
  return (
    <div className="dashboard-shell" data-collapsed={collapsed}>
      <a href={`#${mainId}`} className="shell-skip-link" onClick={() => document.getElementById(mainId)?.focus()}>Skip to workspace</a>
      <aside className="shell-sidebar" aria-label="Workspace sidebar">
        <Sidebar roleLabel={roleLabel} navigation={navigation} collapsed={collapsed}
          onCollapse={() => setCollapsed(value => !value)} collapseRef={collapseRef} />
      </aside>
      <div className="min-w-0">
        <Topbar roleLabel={roleLabel} user={user} menuRef={menuRef} mobileOpen={mobileOpen} onOpenNavigation={() => setMobileOpen(true)} />
        <main id={mainId} tabIndex={-1} className="shell-workspace">
          <PageHeader title={title} description={description} breadcrumbs={breadcrumbs} actions={actions} />
          {children}
        </main>
      </div>
      {mobileOpen && <MobileNavigation roleLabel={roleLabel} navigation={navigation} onClose={closeNavigation}
        triggerRef={menuRef} desktopFocusRef={collapseRef} />}
    </div>
  )
}
