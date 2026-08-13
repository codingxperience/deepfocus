type ProgressRingProps = {
  value: number
  size?: number
  label?: string
}

export function ProgressRing({ value, size = 52, label }: ProgressRingProps) {
  const radius = 20
  const circumference = 2 * Math.PI * radius
  const offset = circumference - (value / 100) * circumference

  return (
    <span className="progress-ring" style={{ width: size, height: size }} aria-label={label ?? `${value}% complete`}>
      <svg viewBox="0 0 48 48" role="img">
        <circle className="progress-ring__track" cx="24" cy="24" r={radius} />
        <circle
          className="progress-ring__value"
          cx="24"
          cy="24"
          r={radius}
          strokeDasharray={circumference}
          strokeDashoffset={offset}
        />
      </svg>
      <strong>{value}%</strong>
    </span>
  )
}
