import React from 'react'
import styles from './Footer.module.css'
import { ARTIST, NAV_LINKS } from '../utils/constants'

export default function Footer() {
  const year = new Date().getFullYear()

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <footer className={styles.footer}>
      <div className={styles.top}>
        <div className={styles.brand}>
          <div className={styles.logo}>
            <img src="./logov.png" alt="The Velvet Studio" className={styles.logoImg} />
          </div>
          <p className={styles.brandDesc}>
            Premium makeup artistry for your most beautiful moments.
            Certified in Mumbai, serving brides across Deoria.
          </p>
          <a
            href={ARTIST.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.igLink}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
              <circle cx="12" cy="12" r="4"/>
              <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor"/>
            </svg>
            {ARTIST.instagramHandle}
          </a>
        </div>

        <div className={styles.col}>
          <h4 className={styles.colTitle}>Quick Links</h4>
          <nav className={styles.navList}>
            {NAV_LINKS.map(link => (
              <button
                key={link.href}
                className={styles.navLink}
                onClick={() => scrollTo(link.href)}
              >
                {link.label}
              </button>
            ))}
          </nav>
        </div>

        <div className={styles.col}>
          <h4 className={styles.colTitle}>Services</h4>
          <div className={styles.serviceList}>
            {['Bridal Makeup', 'Engagement Makeup', 'Party & Event', 'Mehendi Makeup', 'Reception Glam', 'Editorial'].map(s => (
              <span key={s} className={styles.serviceItem}>{s}</span>
            ))}
          </div>
        </div>

        <div className={styles.col}>
          <h4 className={styles.colTitle}>Book Now</h4>
          <p className={styles.bookDesc}>DM on Instagram or send a WhatsApp for fastest response.</p>
          <a
            href={ARTIST.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.bookBtn}
          >
            DM on Instagram
          </a>
          <a
            href={ARTIST.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className={`${styles.bookBtn} ${styles.waBtn}`}
          >
            WhatsApp
          </a>
        </div>
      </div>

      <div className={styles.bottom}>
        <p className={styles.copy}>
          © {year} The Velvet Studio · Himanshi Singh. All rights reserved.
        </p>
        <div className={styles.ornLine} />
        <p className={styles.made}>
          Crafted with ♥ for every beautiful bride
        </p>
      </div>
    </footer>
  )
}
