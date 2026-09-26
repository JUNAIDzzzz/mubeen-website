import { useState } from 'react'

const LINKS = [
  { href: '#legacy', label: 'Our Story' },
  { href: '#gallery', label: 'Gallery' },
  { href: '#menu', label: 'Menu' },
  { href: '#reviews', label: 'Reviews' },
  { href: '#contact', label: 'Contact' }
]

export default function Nav() {
  const [open, setOpen] = useState(false)

  return (
    <nav>
      <div className="wrap navbar">
        <a className="brand" href="#top" onClick={() => setOpen(false)}>
          Mubeen's <em>Kulche Nihari</em>
        </a>
        <button
          className="nav-toggle"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span />
          <span />
          <span />
        </button>
        <ul className={`nav-links ${open ? 'open' : ''}`}>
          {LINKS.map((l) => (
            <li key={l.href}>
              <a href={l.href} onClick={() => setOpen(false)}>
                {l.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}
