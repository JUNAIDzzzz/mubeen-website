const common = {
  viewBox: '0 0 48 48',
  fill: 'none',
  stroke: 'var(--ivory)',
  strokeWidth: 2.2,
  strokeLinecap: 'round'
}

export function NihariIcon() {
  return (
    <svg {...common}>
      <path d="M8 24a16 8 0 0 0 32 0" />
      <ellipse cx="24" cy="24" rx="16" ry="8" />
      <path d="M17 14c-1-3 1-5 1-5M24 12c-1-3 1-6 1-6M31 14c-1-3 1-5 1-5" />
    </svg>
  )
}

export function KulchaIcon() {
  return (
    <svg {...common}>
      <path d="M8 24c0-7 7-13 16-13s16 6 16 13-7 9-16 9-16-2-16-9z" />
      <path d="M16 20l2 4M24 18v6M32 20l-2 4" />
    </svg>
  )
}

export function PasandaIcon() {
  return (
    <svg {...common}>
      <path d="M10 12l28 28M10 40l28-28" />
      <rect x="18" y="18" width="12" height="12" rx="2" />
    </svg>
  )
}

export function BiryaniIcon() {
  return (
    <svg {...common}>
      <path d="M9 20h30l-3 16a4 4 0 0 1-4 3H16a4 4 0 0 1-4-3z" />
      <ellipse cx="24" cy="20" rx="15" ry="5" />
    </svg>
  )
}

export function KheerIcon() {
  return (
    <svg {...common}>
      <ellipse cx="24" cy="27" rx="15" ry="9" />
      <path d="M11 27c0 7 6 11 13 11s13-4 13-11" />
      <path d="M18 12c2 2 2 4 0 6M24 10c2 2 2 5 0 7M30 12c2 2 2 4 0 6" />
    </svg>
  )
}

export function SheermalIcon() {
  return (
    <svg {...common}>
      <circle cx="24" cy="24" r="15" />
      <path d="M24 12v24M15 17l18 14M33 17L15 31" strokeWidth="1.4" />
    </svg>
  )
}
