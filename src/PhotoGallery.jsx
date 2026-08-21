import React, { useState, useEffect, useCallback } from 'react';
import './PhotoGallery.css';

import { bestSellerProducts } from './scrapshalaBestSellers';

import galleryPhoto1 from './assets/photos/kruthika-review-01.png';
import galleryPhoto2 from './assets/photos/kruthika-review-02.png';
import galleryPhoto3 from './assets/photos/kruthika-review-03.png';
import galleryPhoto4 from './assets/photos/kruthika-review-04.png';
import galleryPhoto5 from './assets/photos/kruthika-review-05.png';
import galleryPhoto6 from './assets/photos/kruthika-review-06.png';
import galleryPhoto7 from './assets/photos/kruthika-review-07.png';
import galleryPhoto8 from './assets/photos/kruthika-review-08.png';
import galleryPhoto9 from './assets/photos/kruthika-review-09.png';
import galleryPhoto10 from './assets/photos/kruthika-review-10.png';
import galleryPhoto11 from './assets/photos/kruthika-review-11.png';
import galleryPhoto12 from './assets/photos/kruthika-review-12.png';
import galleryPhoto13 from './assets/photos/kruthika-review-13.png';
import galleryPhoto14 from './assets/photos/kruthika-review-14.png';

/** Customer gallery — Kruthika Jewellery photos, ascending by capture time */
export const GALLERY_IMAGES = [
  galleryPhoto1,
  galleryPhoto2,
  galleryPhoto3,
  galleryPhoto4,
  galleryPhoto5,
  galleryPhoto6,
  galleryPhoto7,
  galleryPhoto8,
  galleryPhoto9,
  galleryPhoto10,
  galleryPhoto11,
  galleryPhoto12,
  galleryPhoto13,
  galleryPhoto14,
];

const INITIAL_SHOW = 12;

const inr = (n) =>
  new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0,
  }).format(n);

/** Dummy PDP-style copy per gallery index (cycles product catalog). */
function getGalleryProductDetail(index) {
  const p = bestSellerProducts[index % bestSellerProducts.length];
  const pct = Math.round((1 - p.currentPrice / p.originalPrice) * 100);
  return {
    title: p.title,
    currentPrice: p.currentPrice,
    originalPrice: p.originalPrice,
    pctOff: pct,
    rating: p.rating,
    reviewCount: p.reviewCount,
  };
}

export default function PhotoGallery({
  title = 'Our Gallery',
  subtitle = 'Real moments from the SUPR community — protein, hydration, and everyday training.',
}) {
  const [lightbox, setLightbox] = useState(null); // index or null
  const [showAll, setShowAll] = useState(false);

  const images = showAll ? GALLERY_IMAGES : GALLERY_IMAGES.slice(0, INITIAL_SHOW);

  const close = useCallback(() => setLightbox(null), []);

  const prev = useCallback(() =>
    setLightbox(i => (i - 1 + GALLERY_IMAGES.length) % GALLERY_IMAGES.length), []);

  const next = useCallback(() =>
    setLightbox(i => (i + 1) % GALLERY_IMAGES.length), []);

  useEffect(() => {
    if (lightbox === null) return;
    const onKey = (e) => {
      if (e.key === 'Escape') close();
      if (e.key === 'ArrowLeft') prev();
      if (e.key === 'ArrowRight') next();
    };
    window.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [lightbox, close, prev, next]);

  return (
    <section className="pg-section">
      <div className="pg-header">
        <h2 className="pg-title">{title}</h2>
        {subtitle && <p className="pg-subtitle">{subtitle}</p>}
      </div>

      <div className="pg-grid">
        {images.map((src, i) => (
          <button
            key={src}
            type="button"
            className="pg-cell"
            onClick={() => setLightbox(i)}
            aria-label={`Open gallery photo ${i + 1}`}
          >
            <img src={src} alt={`SUPR moment ${i + 1}`} loading="lazy" />
          </button>
        ))}
      </div>

      {GALLERY_IMAGES.length > INITIAL_SHOW && (
        <div className="pg-more">
          <button type="button" className="pg-more-btn" onClick={() => setShowAll(v => !v)}>
            {showAll ? 'Show Less' : `View All ${GALLERY_IMAGES.length} Photos`}
          </button>
        </div>
      )}

      {lightbox !== null && (
        <div className="pg-lightbox" role="dialog" aria-modal="true" onClick={close}>
          <button type="button" className="pg-lb-close" onClick={close} aria-label="Close">×</button>
          <button type="button" className="pg-lb-nav pg-lb-prev" onClick={(e) => { e.stopPropagation(); prev(); }} aria-label="Previous">‹</button>
          <button type="button" className="pg-lb-nav pg-lb-next" onClick={(e) => { e.stopPropagation(); next(); }} aria-label="Next">›</button>
          <div className="pg-lb-inner" onClick={(e) => e.stopPropagation()}>
            <img src={GALLERY_IMAGES[lightbox]} alt={`SUPR moment ${lightbox + 1}`} />
            {(() => {
              const detail = getGalleryProductDetail(lightbox);
              return (
                <div className="pg-lb-meta">
                  <p className="pg-lb-counter">{lightbox + 1} / {GALLERY_IMAGES.length}</p>
                  <h3 className="pg-lb-title">{detail.title}</h3>
                  <p className="pg-lb-price">
                    <span className="pg-lb-now">{inr(detail.currentPrice)}</span>
                    <span className="pg-lb-mrp">{inr(detail.originalPrice)}</span>
                    <span className="pg-lb-off">{detail.pctOff}% off</span>
                  </p>
                  <p className="pg-lb-rating">{detail.rating} · {detail.reviewCount}+ reviews</p>
                </div>
              );
            })()}
          </div>
        </div>
      )}
    </section>
  );
}
