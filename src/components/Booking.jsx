import React from 'react'
import styles from './Booking.module.css'
import { ARTIST } from '../utils/constants'
import { useScrollReveal } from '../hooks/useScrollReveal'

export default function Booking() {
  const [ref, visible] = useScrollReveal()

  return (
    <section id="booking" className={styles.booking}>
      <div className={styles.bgImage} />
      <div className={styles.overlay} />

      <div className={styles.inner}>
        <div ref={ref} className={`${styles.header} ${visible ? styles.visible : ''}`}>
          <span className="section-label">Get In Touch</span>
          <h2 className={styles.heading}>
            Let's Create Your<br /><em>Perfect Look</em>
          </h2>
          <div className="ornament"><div className="ornament-diamond" /></div>
          <p className={styles.sub}>
            Reach out to us via WhatsApp or Instagram to book your appointment.
            We'd love to be part of your most beautiful moments.
          </p>
        </div>

        <div className={`${styles.contactGrid} ${visible ? styles.formVisible : ''}`}>

          <a href={ARTIST.whatsapp} target="_blank" rel="noopener noreferrer"
            className={`${styles.contactCard} ${styles.waCard}`}>
            <div className={styles.cardIcon}>
              <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
              </svg>
            </div>
            <div className={styles.cardContent}>
              <h3 className={styles.cardTitle}>WhatsApp</h3>
              <p className={styles.cardDesc}>Fastest way to book. Send us a message and we'll confirm your appointment.</p>
              <span className={styles.cardAction}>Chat Now →</span>
            </div>
          </a>

          <a href={ARTIST.instagram} target="_blank" rel="noopener noreferrer"
            className={`${styles.contactCard} ${styles.igCard}`}>
            <div className={styles.cardIcon}>
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                <circle cx="12" cy="12" r="4"/>
                <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor"/>
              </svg>
            </div>
            <div className={styles.cardContent}>
              <h3 className={styles.cardTitle}>Instagram DM</h3>
              <p className={styles.cardDesc}>Follow us for the latest looks and slide into our DMs to book a session.</p>
              <span className={styles.cardAction}>{ARTIST.instagramHandle} →</span>
            </div>
          </a>

          <a href="tel:+918303023385" className={`${styles.contactCard} ${styles.phoneCard}`}>
            <div className={styles.cardIcon}>
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.64A2 2 0 012 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 14.92v2z"/>
              </svg>
            </div>
            <div className={styles.cardContent}>
              <h3 className={styles.cardTitle}>Call Us</h3>
              <p className={styles.cardDesc}>Available Mon–Sat, 9 AM to 7 PM. Sunday by appointment only.</p>
              <span className={styles.cardAction}>+91 83030 23385 →</span>
            </div>
          </a>

          <div className={`${styles.contactCard} ${styles.addressCard}`}>
            <div className={styles.cardIcon}>
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/>
                <circle cx="12" cy="10" r="3"/>
              </svg>
            </div>
            <div className={styles.cardContent}>
              <h3 className={styles.cardTitle}>Studio Address</h3>
              <p className={styles.cardDesc}>{ARTIST.address}</p>
              <a href="https://maps.app.goo.gl/CpHSjrgPaPjqi7xr8?g_st=aw" target="_blank"
                rel="noopener noreferrer" className={styles.cardAction}>
                Get Directions →
              </a>
            </div>
          </div>

        </div>

        <div className={`${styles.bigCta} ${visible ? styles.visible : ''}`}>
          <p className={styles.bigCtaText}>Ready to look your most beautiful?</p>
          <a href={ARTIST.whatsapp} target="_blank" rel="noopener noreferrer" className={styles.bigCtaBtn}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
            </svg>
            Book on WhatsApp
          </a>
        </div>

      </div>
    </section>
  )
}
