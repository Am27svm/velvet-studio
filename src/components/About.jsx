import React from 'react'
import styles from './About.module.css'
import { ARTIST } from '../utils/constants'
import { useScrollReveal } from '../hooks/useScrollReveal'

export default function About() {
  const [refLeft, visLeft] = useScrollReveal()
  const [refRight, visRight] = useScrollReveal()

  return (
    <section id="about" className={styles.about}>
      <div className={styles.inner}>
        {/* Left – image */}
        <div
          ref={refLeft}
          className={`${styles.imageCol} ${visLeft ? styles.visible : ''}`}
        >
          <div className={styles.imageFrame}>
            <img
              src="gallery/himanshi.jpeg"
              alt="Himanshi Singh – The Velvet Studio"
              className={styles.img}
              loading="lazy"
            />
            <div className={styles.imageOverlay} />
          </div>
          <div className={styles.accentBox}>
            <span className={styles.accentNum}>{ARTIST.experiencetime}</span>
            <span className={styles.accentTxt}>Years of Artistry</span>
          </div>
          
        </div>

        {/* Right – text */}
        <div
          ref={refRight}
          className={`${styles.textCol} ${visRight ? styles.visible : ''}`}
        >
          <span className="section-label">About the Founder</span>
          <h2 className={styles.heading}>
            Himanshi Singh<br />
            <em>Makeup Artist</em>
          </h2>

          <div className="ornament">
            <div className="ornament-diamond" />
          </div>

          <p className={styles.bio}>{ARTIST.bio}</p>

          <div className={styles.credentials}>
            <div className={styles.credItem}>
              <div className={styles.credIcon}>🎓</div>
              <div>
                <p className={styles.credTitle}>Certification</p>
                <p className={styles.credDetail}>{ARTIST.certifications}</p>
              </div>
            </div>
            <div className={styles.credItem}>
              <div className={styles.credIcon}>📍</div>
              <div>
                <p className={styles.credTitle}>Experience</p>
                <p className={styles.credDetail}>{ARTIST.experience}</p>
              </div>
            </div>
            <div className={styles.credItem}>
              <div className={styles.credIcon}> 📞</div>
              <div>
                <p className={styles.credTitle}>contact</p>
                <p className={styles.credDetail}>{ARTIST.contact}</p>
              </div>
            </div>

            <div className={styles.credItem}>
              <div className={styles.credIcon}> 📧</div>
              <div>
                <p className={styles.credTitle}>Email</p>
                <p className={styles.credDetail}>{ARTIST.mail}</p>
              </div>
            </div>
            <div className={styles.credItem}>
              <div className={styles.credIcon}>💼</div>
              <div>
                <p className={styles.credTitle}>Specialization</p>
                <p className={styles.credDetail}>Bridal · Editorial · Glamour</p>
              </div>
            </div>
          </div>

          <div className={styles.signature}>
            <a
              href={ARTIST.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.igButton}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                <circle cx="12" cy="12" r="4"/>
                <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor"/>
              </svg>
              Follow on Instagram
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
