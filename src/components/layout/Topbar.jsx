import { useId } from 'react'
import { Bell, Menu, Search } from 'lucide-react'
import { Avatar, Badge, IconButton } from '../ui'

export default function Topbar({ roleLabel, user, onOpenNavigation, menuRef, mobileOpen }) {
  const note = useId()
  return (
    <header className="shell-topbar flex min-w-0 items-center justify-between gap-3 border-b border-border bg-surface px-(--shell-gutter)">
      <div className="flex min-w-0 items-center gap-2">
        <IconButton ref={menuRef} icon={Menu} aria-label="Open navigation" aria-haspopup="dialog" aria-expanded={mobileOpen}
          onClick={onOpenNavigation} className="min-h-(--control-height-touch) min-w-(--control-height-touch) lg:hidden" />
        <p className="truncate text-label">{roleLabel}<span className="hidden sm:inline"> workspace</span></p>
      </div>
      <div className="flex shrink-0 items-center gap-2 sm:gap-3">
        <span id={note} className="sr-only">Search and notifications are unavailable in this shell preview.</span>
        <IconButton icon={Search} aria-label="Search (unavailable)" aria-disabled="true" aria-describedby={note}
          className="min-h-(--control-height-touch) min-w-(--control-height-touch)" />
        <span className="relative mr-1 inline-flex">
          <IconButton icon={Bell} aria-label="Notifications (sample count 99+, unavailable)" aria-disabled="true" aria-describedby={note}
            className="min-h-(--control-height-touch) min-w-(--control-height-touch)" />
          <Badge size="sm" aria-hidden="true" className="pointer-events-none absolute -right-1 -top-1">99+</Badge>
        </span>
        <div className="flex min-w-0 items-center gap-3 border-l border-border pl-3" title={`${user.name} · ${roleLabel} · Fictional profile`}>
          <Avatar name={user.name} size="sm" alt={`${user.name}, ${roleLabel}, fictional profile`} />
          <div className="hidden min-w-0 sm:block" aria-hidden="true">
            <p className="max-w-44 truncate text-label">{user.name}</p>
            <p className="text-caption text-text-secondary">{roleLabel}</p>
          </div>
        </div>
      </div>
    </header>
  )
}
