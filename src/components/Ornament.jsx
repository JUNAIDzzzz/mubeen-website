export function CornerFlourish({ className = '' }) {
  return (
    <svg
      className={`corner-flourish ${className}`}
      viewBox="0 0 40 40"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M2 2 L2 14 Q2 2 14 2 Z"
        stroke="var(--gold)"
        strokeWidth="1.4"
      />
      <path
        d="M6 2 Q20 2 20 16"
        stroke="var(--gold)"
        strokeWidth="1"
        fill="none"
      />
      <circle cx="6" cy="6" r="1.6" fill="var(--gold)" />
    </svg>
  )
}

export function MenuFrame({ children }) {
  return (
    <div className="menu-frame">
      <CornerFlourish className="tl" />
      <CornerFlourish className="tr" />
      <CornerFlourish className="bl" />
      <CornerFlourish className="br" />
      {children}
    </div>
  )
}

export function ArcadeDivider({ tone = 'ivory' }) {
  return <div className={`arcade arcade--${tone}`} aria-hidden="true" />
}

export function ArchIcon({ children }) {
  return (
    <div className="arch-icon">
      <span>{children}</span>
    </div>
  )
}
