export type RecentActivity = {
  id: string
  path: string
  label: string
  context?: string
  visitedAt: number
}

const activityKey = 'deepfocus-recent-activity'
const maxEntries = 12

function isBrowser() {
  return typeof window !== 'undefined'
}

export function getRecentActivity(): RecentActivity[] {
  if (!isBrowser()) return []
  try {
    const stored = JSON.parse(window.localStorage.getItem(activityKey) ?? '[]') as RecentActivity[]
    return stored.filter((entry) => entry && typeof entry.path === 'string' && typeof entry.label === 'string')
  } catch {
    return []
  }
}

export function recordRecentActivity(entry: Omit<RecentActivity, 'id' | 'visitedAt'>) {
  if (!isBrowser()) return
  const previous = getRecentActivity()
  const withoutCurrentPath = previous.filter((item) => item.path !== entry.path)
  const next: RecentActivity[] = [
    { ...entry, id: `${entry.path}-${Date.now()}`, visitedAt: Date.now() },
    ...withoutCurrentPath,
  ].slice(0, maxEntries)
  window.localStorage.setItem(activityKey, JSON.stringify(next))
  window.dispatchEvent(new Event('deepfocus-activity-change'))
}

export function relativeActivityTime(timestamp: number) {
  const elapsed = Math.max(0, Date.now() - timestamp)
  const minutes = Math.floor(elapsed / 60000)
  if (minutes < 1) return 'Just now'
  if (minutes < 60) return `${minutes} min ago`
  const hours = Math.floor(minutes / 60)
  if (hours < 24) return `${hours} hr ago`
  const days = Math.floor(hours / 24)
  return days === 1 ? 'Yesterday' : `${days} days ago`
}
