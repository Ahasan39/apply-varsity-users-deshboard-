import { useEffect, useRef } from 'react'
import { X } from 'lucide-react'
import { IconButton } from '../ui'
import Sidebar from './Sidebar'

export default function MobileNavigation({ roleLabel, navigation, onClose, triggerRef, desktopFocusRef }) {
  const dialogRef = useRef(null)
  const closeRef = useRef(null)
  useEffect(() => {
    const dialog = dialogRef.current
    const previousOverflow = document.body.style.overflow
    const trigger = triggerRef.current
    const desktopFocus = desktopFocusRef.current
    document.body.style.overflow = 'hidden'
    dialog.showModal()
    closeRef.current?.focus()
    // Interaction cleanup only: CSS owns layout. Never leave a modal over desktop.
    const desktop = window.matchMedia('(min-width: 64rem)')
    const closeAtDesktop = event => { if (event.matches) onClose() }
    desktop.addEventListener('change', closeAtDesktop)
    return () => {
      desktop.removeEventListener('change', closeAtDesktop)
      dialog.close()
      document.body.style.overflow = previousOverflow
      const target = trigger?.getClientRects().length ? trigger : desktopFocus
      if (target?.isConnected) target.focus({ preventScroll: true })
    }
  }, [onClose, triggerRef, desktopFocusRef])

  function containTab(event) {
    if (event.key !== 'Tab') return
    const controls = [...event.currentTarget.querySelectorAll('a[href], button:not(:disabled), [tabindex="0"]')]
      .filter(element => element.getClientRects().length > 0)
    const first = controls[0]
    const last = controls.at(-1)
    if (event.shiftKey && document.activeElement === first) {
      event.preventDefault()
      last?.focus()
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault()
      first?.focus()
    }
  }

  return (
    <dialog ref={dialogRef} aria-label={`${roleLabel} navigation drawer`} className="shell-drawer" onKeyDown={containTab}
      onCancel={event => { event.preventDefault(); onClose() }}
      onClick={event => { if (event.target === event.currentTarget) onClose() }}>
      <div className="flex h-full w-(--shell-drawer-width) min-w-0 flex-col border-r border-border bg-surface text-text-primary shadow-overlay">
        <Sidebar roleLabel={roleLabel} navigation={navigation} onNavigate={onClose}
          closeControl={<IconButton ref={closeRef} icon={X} aria-label="Close navigation" onClick={onClose}
            className="min-h-(--control-height-touch) min-w-(--control-height-touch)" />} />
      </div>
    </dialog>
  )
}
