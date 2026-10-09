export const fieldControl = 'min-h-(--control-height-touch) w-full min-w-0 rounded-md border bg-surface px-3 py-2 text-body text-text-primary placeholder:text-text-muted disabled:cursor-not-allowed disabled:bg-surface-muted disabled:text-text-secondary disabled:opacity-60'
export function fieldDescription(id, helperText, error, describedBy) {
  return [describedBy, helperText && `${id}-help`, error && `${id}-error`].filter(Boolean).join(' ') || undefined
}
