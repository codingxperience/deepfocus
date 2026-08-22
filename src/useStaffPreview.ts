import { useCallback, useEffect, useState } from 'react'

import { loadStaffPreviewState, saveStaffPreviewState, staffPreviewChangeEvent, type StaffPreviewState } from './staffPreview'

export function useStaffPreview() {
  const [state, setState] = useState<StaffPreviewState>(loadStaffPreviewState)

  useEffect(() => {
    const refresh = () => setState(loadStaffPreviewState())
    window.addEventListener(staffPreviewChangeEvent, refresh)
    window.addEventListener('storage', refresh)
    return () => {
      window.removeEventListener(staffPreviewChangeEvent, refresh)
      window.removeEventListener('storage', refresh)
    }
  }, [])

  const commit = useCallback((updater: (current: StaffPreviewState) => StaffPreviewState) => {
    setState((current) => saveStaffPreviewState(updater(current)))
  }, [])

  return { state, commit }
}
