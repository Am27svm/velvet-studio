import React, { useState, useEffect } from "react";
import styles from "./Testimonials.module.css";
import { TESTIMONIALS } from "../utils/constants";
import { useScrollReveal } from "../hooks/useScrollReveal";

export default function Testimonials() {
  const [active, setActive] = useState(0);
  const [ref, visible] = useScrollReveal();

  useEffect(() => {
    const timer = setInterval(() => {
      setActive((a) => (a + 1) % TESTIMONIALS.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className={styles.testimonials}>
      <div className={styles.inner}>
        <div
          ref={ref}
          className={`${styles.header} ${visible ? styles.visible : ""}`}
        >
          <span className="section-label">Kind Words</span>
          <h2 className={styles.heading}>
            Love from
            <br />
            <em>Our Clints</em>
          </h2>
        </div>

        <div className={styles.carousel}>
          <div className={styles.quoteIcon}>"</div>
          {TESTIMONIALS.map((t, i) => (
            <div
              key={t.id}
              className={`${styles.slide} ${i === active ? styles.slideActive : ""}`}
            >
              <div className={styles.stars}>{"★".repeat(t.stars)}</div>
              <blockquote className={styles.quote}>{t.text}</blockquote>
              <div className={styles.author}>
                <div className={styles.authorDot} >
                  <p>{t.name[0]}</p>
                </div>
                <div>
                  <p className={styles.authorName}>{t.name}</p>
                  <p className={styles.authorRole}>{t.role}</p>
                </div>
              </div>
            </div>
          ))}

          <div className={styles.dots}>
            {TESTIMONIALS.map((_, i) => (
              <button
                key={i}
                className={`${styles.dot} ${i === active ? styles.dotActive : ""}`}
                onClick={() => setActive(i)}
                aria-label={`Testimonial ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
