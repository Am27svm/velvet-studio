import React, { useState, useEffect } from 'react'
import styles from './Navbar.module.css'
import { NAV_LINKS, ARTIST } from '../utils/constants'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('hero')

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 60)
      // Detect active section
      const sections = NAV_LINKS.map(l => l.href)
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i])
        if (el && window.scrollY >= el.offsetTop - 120) {
          setActiveSection(sections[i])
          break
        }
      }
    }
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollTo = (id) => {
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
    setMenuOpen(false)
  }

  return (
    <nav className={`${styles.nav} ${scrolled ? styles.scrolled : ''}`}>
      <div className={styles.inner}>
        {/* Logo */}
        <button className={styles.logo} onClick={() => scrollTo('hero')} aria-label="Go to top">
          <img src="./logov.png" alt="The Velvet Studio" className={styles.logoImg} />
        </button>

        {/* Desktop Nav */}
        <ul className={styles.links}>
          {NAV_LINKS.map(link => (
            <li key={link.href}>
              <button
                className={`${styles.link} ${link.cta ? styles.ctaLink : ''} ${activeSection === link.href ? styles.active : ''}`}
                onClick={() => scrollTo(link.href)}
              >
                {link.label}
              </button>
            </li>
          ))}
        </ul>

        {/* Hamburger */}
        <button
          className={`${styles.hamburger} ${menuOpen ? styles.open : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span /><span /><span />
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`${styles.mobileMenu} ${menuOpen ? styles.mobileOpen : ''}`}>
        {NAV_LINKS.map(link => (
          <button
            key={link.href}
            className={`${styles.mobileLink} ${link.cta ? styles.mobileCta : ''}`}
            onClick={() => scrollTo(link.href)}
          >
            {link.label}
          </button>
        ))}
        <a href={ARTIST.instagram} target="_blank" rel="noopener noreferrer" className={styles.mobileIg}>
          {ARTIST.instagramHandle}
        </a>
      </div>
    </nav>
  )
}
