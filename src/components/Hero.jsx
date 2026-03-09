import React, { useEffect, useRef } from 'react'
import styles from './Hero.module.css'
import { ARTIST } from '../utils/constants'

export default function Hero() {
  const parallaxRef = useRef(null)

  useEffect(() => {
    const onScroll = () => {
      if (parallaxRef.current) {
        parallaxRef.current.style.transform = `translateY(${window.scrollY * 0.35}px)`
      }
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollToBooking = () => {
    document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' })
  }
  const scrollToPortfolio = () => {
    document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="hero" className={styles.hero}>
      {/* Background */}
      <div className={styles.bgWrap}>
        <div ref={parallaxRef} className={styles.bgImage} />
        <div className={styles.overlay} />
        <div className={styles.grain} />
      </div>

      {/* Decorative lines */}
      <div className={styles.vertLine} />

      {/* Content */}
      <div className={styles.content}>

        <h1 className={styles.title}>
          <span className={styles.titleSmall}>The</span>
          <span className={styles.titleBig}>Velvet</span>
          <span className={styles.titleBig}>Studio</span>
        </h1>
        <p className={styles.subtitle}>Salon & Academy</p>

        <p className={styles.tagline}>{ARTIST.tagline}</p>

        <div className={styles.ctas}>
          <button className={styles.primaryCta} onClick={scrollToBooking}>
            Book Bridal Consultation
          </button>
          
        </div>

        <a
          href={ARTIST.instagram}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.igLink}
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
            <circle cx="12" cy="12" r="4"/>
            <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor"/>
          </svg>
          {ARTIST.instagramHandle}
        </a>
      </div>

      {/* Scroll indicator */}
      

      {/* Stats bar */}
      <div className={styles.statsBar}>
        <div className={styles.stat}>
          <span className={styles.statNum}>500+</span>
          <span className={styles.statLabel}>Brides Made Beautiful</span>
        </div>
        <div className={styles.statDivider} />
        <div className={styles.stat}>
          <span className={styles.statNum}>{ARTIST.experiencetime}</span>
          <span className={styles.statLabel}>Years of Artistry</span>
        </div>
        <div className={styles.statDivider} />
        <div className={styles.stat}>
          <span className={styles.statNum}>2</span>
          <span className={styles.statLabel}>Cities · Mumbai & Nagpur</span>
        </div>
        <div className={styles.statDivider} />
        <div className={styles.stat}>
          <span className={styles.statNum}>100%</span>
          <span className={styles.statLabel}>Certified Professional</span>
        </div>
      </div>
    </section>
  )
}
