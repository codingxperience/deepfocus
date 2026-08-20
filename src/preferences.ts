export type InterfacePreference = 'highContrast' | 'dyslexiaFont' | 'largeType' | 'reducedMotion'

const preferenceKey = 'deepfocus-interface-preferences'
export const preferenceEvent = 'deepfocus-interface-preference-change'

const classByPreference: Record<InterfacePreference, string> = {
  highContrast: 'high-contrast',
  dyslexiaFont: 'dyslexia-font',
  largeType: 'large-type',
  reducedMotion: 'reduce-motion',
}

function readAll(): Record<InterfacePreference, boolean> {
  const defaults: Record<InterfacePreference, boolean> = {
    highContrast: false,
    dyslexiaFont: false,
    largeType: false,
    reducedMotion: false,
  }
  if (typeof window === 'undefined') return defaults
  try {
    return { ...defaults, ...(JSON.parse(window.localStorage.getItem(preferenceKey) ?? '{}') as Partial<Record<InterfacePreference, boolean>>) }
  } catch {
    return defaults
  }
}

export function getInterfacePreference(preference: InterfacePreference) {
  return readAll()[preference]
}

export function applyInterfacePreference(preference: InterfacePreference, active: boolean) {
  if (typeof window === 'undefined') return
  const next = { ...readAll(), [preference]: active }
  window.localStorage.setItem(preferenceKey, JSON.stringify(next))
  document.documentElement.classList.toggle(classByPreference[preference], active)
  window.dispatchEvent(new CustomEvent(preferenceEvent, { detail: { preference, active } }))
}
