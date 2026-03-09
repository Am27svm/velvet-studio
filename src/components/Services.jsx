import React, { useState } from 'react'
import styles from './Services.module.css'
import { SERVICES } from '../utils/constants'
import { useScrollReveal } from '../hooks/useScrollReveal'

export default function Services() {
  const [hovered, setHovered] = useState(null)
  const [ref, visible] = useScrollReveal()

  return (
    <section id="services" className={styles.services}>
      <div className={styles.inner}>
        <div ref={ref} className={`${styles.header} ${visible ? styles.visible : ''}`}>
          <span className="section-label">Our Offerings</span>
          <h2 className={styles.heading}>
            Crafted for Every<br />
            <em>Beautiful Moment</em>
          </h2>
          <div className="ornament"><div className="ornament-diamond" /></div>
          <p className={styles.sub}>
            From intimate mehendi ceremonies to grand reception nights,
            every look is a bespoke creation — tailored to you.
          </p>
        </div>

        <div className={styles.grid}>
          {SERVICES.map((service, i) => (
            <div
              key={service.id}
              className={`${styles.card} ${hovered === service.id ? styles.cardHovered : ''}`}
              onMouseEnter={() => setHovered(service.id)}
              onMouseLeave={() => setHovered(null)}
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <div className={styles.cardTop}>
                <span className={styles.icon}>{service.icon}</span>
                <span className={styles.number}>0{service.id}</span>
              </div>
              <h3 className={styles.cardTitle}>{service.title}</h3>
              <p className={styles.cardDesc}>{service.description}</p>
              <ul className={styles.highlights}>
                {service.highlights.map((h, j) => (
                  <li key={j} className={styles.highlight}>
                    <span className={styles.dot} />
                    {h}
                  </li>
                ))}
              </ul>
              <div className={styles.cardFooter}>
                <span className={styles.price}>{service.price}</span>
                <button
                  className={styles.bookBtn}
                  onClick={() => document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Book →
                </button>
              </div>
              <div className={styles.cardGlow} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
