import React, { useState, useEffect, useCallback } from 'react';
import './PhotoGallery.css';

import { bestSellerProducts } from './scrapshalaBestSellers';

/** Unsplash CDN — 4:5 crop keeps the masonry columns even */
const unsplash = (id) => `https://images.unsplash.com/${id}?w=800&h=1000&fit=crop&q=80`;

/** Customer gallery — protein drinks, hydration & training moments */
export const GALLERY_IMAGES = [
  unsplash('photo-1600271886742-f049cd451bba'), // orange juice, tall glass
  unsplash('photo-1621263764928-df1444c5e859'), // citrus & mint cooler
  unsplash('photo-1548839140-29a749e1cf4d'),    // water poured into a glass
  unsplash('photo-1622597467836-f3285f2131b8'), // fruit smoothies in jars
  unsplash('photo-1571019613454-1cb2f99b2d8b'), // core workout
  unsplash('photo-1553530666-ba11a7da3888'),    // berry protein smoothies
  unsplash('photo-1559839914-17aae19cec71'),    // bottle & glass, minimal
  unsplash('photo-1544367567-0f2fcb009e0b'),    // yoga at sunset
  unsplash('photo-1610970881699-44a5587cabec'), // green smoothie
  unsplash('photo-1613478223719-2ab802602423'), // fresh citrus juice
  unsplash('photo-1550505095-81378a674395'),    // chilled water bottle
  unsplash('photo-1594737625785-a6cbdabd333c'), // dumbbell training
  unsplash('photo-1502741224143-90386d7f8c82'), // strawberry shake, overhead
  unsplash('photo-1579722820308-d74e571900a9'), // mixing a post-workout drink
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
