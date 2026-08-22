export type PreviewRole = 'learner' | 'instructor' | 'admin'

export type PreviewAccount = {
  id: string
  name: string
  email: string
  role: PreviewRole
  title: string
  initials: string
}

type PreviewAccountRecord = PreviewAccount & { password: string }

const previewAccounts: PreviewAccountRecord[] = [
  { id: 'learner-fred', name: 'Fred Okorio', email: 'fred.okorio@deepfocus.preview', password: 'deepfocus-preview', role: 'learner', title: 'Certificate in Nursing learner', initials: 'FO' },
  { id: 'instructor-grace', name: 'Grace Nalubega', email: 'grace.nalubega@deepfocus.preview', password: 'deepfocus-preview', role: 'instructor', title: 'Clinical instructor', initials: 'GN' },
  { id: 'admin-amara', name: 'Amara Kato', email: 'amara.kato@deepfocus.preview', password: 'deepfocus-preview', role: 'admin', title: 'Academic operations', initials: 'AK' },
]

const sessionStorageKey = 'deepfocus-preview-session-v1'

function withoutPassword(account: PreviewAccountRecord): PreviewAccount {
  return {
    id: account.id,
    name: account.name,
    email: account.email,
    role: account.role,
    title: account.title,
    initials: account.initials,
  }
}

export function authenticatePreview(email: string, password: string): PreviewAccount | undefined {
  const match = previewAccounts.find((account) => account.email === email.trim().toLowerCase() && account.password === password)
  if (!match) return undefined
  return withoutPassword(match)
}

export function getPreviewAccount(accountId: string): PreviewAccount | undefined {
  const account = previewAccounts.find((item) => item.id === accountId)
  return account ? withoutPassword(account) : undefined
}

export function getPreviewAccounts(): PreviewAccount[] {
  return previewAccounts.map(withoutPassword)
}

export function getRoleStartPath(account: PreviewAccount): string {
  if (account.role === 'instructor') return '/instructor'
  if (account.role === 'admin') return '/admin'
  return '/learner'
}

export function loadPreviewSession(): PreviewAccount | undefined {
  try {
    const accountId = localStorage.getItem(sessionStorageKey)
    return accountId ? getPreviewAccount(accountId) : undefined
  } catch {
    return undefined
  }
}

export function startPreviewSession(account: PreviewAccount): PreviewAccount {
  localStorage.setItem(sessionStorageKey, account.id)
  window.dispatchEvent(new CustomEvent('deepfocus-preview-session-change'))
  return account
}

export function endPreviewSession(): void {
  localStorage.removeItem(sessionStorageKey)
  window.dispatchEvent(new CustomEvent('deepfocus-preview-session-change'))
}
