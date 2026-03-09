import React, { useState } from "react";
import styles from "./Portfolio.module.css";
import { ARTIST } from "../utils/constants";
import { useScrollReveal } from "../hooks/useScrollReveal";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";

const images = Object.values(
  import.meta.glob("../assets/works/**/*.{png,jpg,jpeg,webp}", { eager: true }),
).map((img) => img.default);

export default function Portfolio() {
  const [lightbox, setLightbox] = useState(null);
  const [headerRef, headerVisible] = useScrollReveal();

  return (
    <section id="portfolio" className={styles.portfolio}>
      <div className={styles.inner}>
        <div
          ref={headerRef}
          className={`${styles.header} ${headerVisible ? styles.visible : ""}`}
        >
          <span className="section-label">Our Work</span>

          <h2 className={styles.heading}>
            The Art of <br />
            <em>Transformation</em>
          </h2>

          <div className="ornament">
            <div className="ornament-diamond"></div>
          </div>

          <p className={styles.sub}>
            Each face is a canvas. Each look, a masterpiece.
          </p>
        </div>

        {/* SLIDER */}
        <Swiper
          modules={[Autoplay]}
          spaceBetween={20}
          slidesPerView={3}
          centeredSlides={true}
          loop={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          grabCursor={true}
          breakpoints={{
            0: { slidesPerView: 1.2 },
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className={styles.slider}
        >
          {images.map((src, i) => (
            <SwiperSlide key={i}>
              <div className={styles.item} onClick={() => setLightbox(src)}>
                <img src={src} alt="Makeup Work" className={styles.img} />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Instagram CTA */}
        <div className={styles.igCta}>
          <p className={styles.igText}>See more of our work on Instagram</p>

          <a
            href={ARTIST.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.igBtn}
          >
            {ARTIST.instagramHandle}
          </a>
        </div>
      </div>

      {/* LIGHTBOX */}
      {lightbox && (
        <div className={styles.lightbox} onClick={() => setLightbox(null)}>
          <button
            className={styles.lightboxClose}
            onClick={() => setLightbox(null)}
          >
            ×
          </button>

          <div
            className={styles.lightboxContent}
            onClick={(e) => e.stopPropagation()}
          >
            <img src={lightbox} className={styles.lightboxImg} />
          </div>
        </div>
      )}
    </section>
  );
}
