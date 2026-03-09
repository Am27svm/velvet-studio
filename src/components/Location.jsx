import React from 'react'
import styles from './Location.module.css'
import { ARTIST } from '../utils/constants'
import { useScrollReveal } from '../hooks/useScrollReveal'

export default function Location() {
  const [ref, visible] = useScrollReveal()

  return (
    <section id="location" className={styles.location}>
      <div className={styles.inner}>
        <div ref={ref} className={`${styles.content} ${visible ? styles.visible : ''}`}>
          <span className="section-label">Find Us</span>
          <h2 className={styles.heading}>
            Visit the<br /><em>Studio</em>
          </h2>
          <div className="ornament"><div className="ornament-diamond" /></div>

          <div className={styles.infoCards}>
            <div className={styles.infoCard}>
              <span className={styles.infoIcon}>📍</span>
              <div>
                <p className={styles.infoLabel}>Studio Address</p>
                <p className={styles.infoVal}>{ARTIST.address}</p>
              </div>
            </div>
            <div className={styles.infoCard}>
              <span className={styles.infoIcon}>🕐</span>
              <div>
                <p className={styles.infoLabel}>Studio Hours</p>
                <p className={styles.infoVal}>Mon – Sat: 9:00 AM – 7:00 PM</p>
                <p className={styles.infoVal}>Sunday: By Appointment</p>
              </div>
            </div>
            <div className={styles.infoCard}>
              <span className={styles.infoIcon}>📱</span>
              <div>
                <p className={styles.infoLabel}>Book via Instagram</p>
                <a
                  href={ARTIST.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.infoLink}
                >
                  {ARTIST.instagramHandle}
                </a>
              </div>
            </div>
            <div className={styles.infoCard}>
              <span className={styles.infoIcon}>✈️</span>
              <div>
                <p className={styles.infoLabel}>On-Location Available</p>
                <p className={styles.infoVal}>Deoria Region</p>
              </div>
            </div>
          </div>

          <a
            href="https://maps.app.goo.gl/CpHSjrgPaPjqi7xr8?g_st=aw"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.dirBtn}
          >
            Get Directions →
          </a>
        </div>

        {/* Map */}
        <div className={`${styles.mapWrap} ${visible ? styles.mapVisible : ''}`}>
          <div className={styles.mapFrame}>
            <iframe
              title="The Velvet Studio Location"
              src="https://www.google.com/maps?q=The%20Velvet%20Studio%20Deoria&z=17&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg) saturate(0.8)' }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
          <div className={styles.mapTag}>
            <span className={styles.mapDot} />
            The Velvet Studio
          </div>
        </div>
      </div>
    </section>
  )
}
