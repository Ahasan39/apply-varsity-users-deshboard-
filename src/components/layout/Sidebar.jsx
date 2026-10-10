import { Link, useLocation } from 'react-router-dom'
import { Palette, PanelLeftClose, PanelLeftOpen } from 'lucide-react'
import { Badge, IconButton, NavGroup, NavItem } from '../ui'

export default function Sidebar({ roleLabel, navigation, collapsed = false, onCollapse, collapseRef, onNavigate, closeControl }) {
  const { pathname } = useLocation()
  return (
    <>
      <div className={`flex min-h-(--shell-topbar-height) shrink-0 items-center gap-3 border-b border-border px-4 ${collapsed ? 'justify-center' : ''}`}>
        <span aria-hidden="true" className="flex size-10 shrink-0 items-center justify-center rounded-md bg-brand-navy text-label text-text-inverse">AV</span>
        <div className={collapsed ? 'sr-only' : 'min-w-0 flex-1'}>
          <p className="text-card text-brand-navy">Apply Varsity</p>
          <p className="text-caption text-text-secondary">{roleLabel} workspace</p>
        </div>
        {closeControl}
      </div>
      <nav aria-label={`${roleLabel} navigation`} className="min-h-0 flex-1 space-y-5 overflow-y-auto overscroll-contain p-3">
        {navigation.map(group => (
          <NavGroup key={group.label} label={collapsed ? undefined : group.label} aria-label={collapsed ? group.label : undefined}
            className={collapsed ? 'border-b border-border-subtle pb-3 last:border-0' : ''}>
            {group.items.map(item => (
              <div key={item.label} title={collapsed ? `${item.label}${item.disabled ? ' — unavailable' : ''}` : undefined}>
                <NavItem as={item.to ? Link : 'a'} to={item.to} href={item.href} icon={item.icon} label={item.label}
                  active={!item.disabled && pathname === (item.to ?? item.href)} disabled={item.disabled}
                  collapsed={collapsed} onClick={onNavigate} className={collapsed ? 'justify-center px-0' : ''}
                  badge={item.badge != null ? <Badge size="sm">{item.badge}</Badge> : undefined} />
              </div>
            ))}
          </NavGroup>
        ))}
      </nav>
      <div className="shrink-0 border-t border-border p-3">
        <NavItem as={Link} to="/" icon={Palette} label="Design foundation" collapsed={collapsed}
          className={collapsed ? 'justify-center px-0' : ''} onClick={onNavigate} title="Design foundation" />
        <div className={`mt-2 flex items-center gap-2 ${collapsed ? 'justify-center' : 'justify-between'}`}>
          <p className={collapsed ? 'sr-only' : 'min-w-0 pl-3 text-caption text-text-secondary'}>Shell preview<br />Other modules unavailable</p>
          {onCollapse && <IconButton ref={collapseRef} icon={collapsed ? PanelLeftOpen : PanelLeftClose}
            aria-label={collapsed ? 'Expand sidebar' : 'Collapse sidebar'} aria-expanded={!collapsed}
            onClick={onCollapse} className="min-h-(--control-height-touch) min-w-(--control-height-touch)" />}
        </div>
      </div>
    </>
  )
}
