type BrandProps = {
  compact?: boolean
  light?: boolean
}

export function CircleMark({ light = false }: { light?: boolean }) {
  return (
    <span className={`circle-mark${light ? ' circle-mark--light' : ''}`} aria-hidden="true">
      <svg viewBox="0 0 40 40" focusable="false">
        <circle cx="20" cy="20" r="13.5" fill="none" stroke="currentColor" strokeWidth="5" />
      </svg>
    </span>
  )
}

export function Brand({ compact = false, light = false }: BrandProps) {
  return (
    <span className={`brand${compact ? ' brand--compact' : ''}${light ? ' brand--light' : ''}`} aria-label="DeepFocus revision">
      <CircleMark light={light} />
      {!compact && (
        <span className="brand__type">
          <strong>DeepFocus</strong>
          <span>revision</span>
        </span>
      )}
    </span>
  )
}
