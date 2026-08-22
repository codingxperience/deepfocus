import { Navigate, Outlet } from 'react-router-dom'

import { getRoleStartPath, loadPreviewSession, type PreviewRole } from '../auth'

type RequirePreviewRoleProps = {
  role: PreviewRole
}

export function RequirePreviewRole({ role }: RequirePreviewRoleProps) {
  const account = loadPreviewSession()

  if (!account) return <Navigate to="/sign-in" replace />
  if (account.role !== role) return <Navigate to={getRoleStartPath(account)} replace />

  return <Outlet />
}
