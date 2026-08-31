import React, { useRef, useState } from 'react';
import MarketplaceBadgeRotator from './MarketplaceBadgeRotator';
import './PopularCollections.css';

function formatInr(amount) {
  return `₹ ${Number(amount).toLocaleString('en-IN')}`;
}

export function ProductCollectionCard({ product, onClick }) {
  const [wishlisted, setWishlisted] = useState(false);
  if (!product) return null;

  return (
    <div className="zouk-card" onClick={() => onClick && onClick(product)}>
      <div className="zouk-card-img-wrap">
        <div className="zouk-card-market-overlay" onClick={(e) => e.stopPropagation()}>
          <MarketplaceBadgeRotator />
        </div>
        <img src={product.image} alt={product.title} loading="lazy" className="zouk-card-img" />
        <button
          type="button"
          className={`zouk-card-heart${wishlisted ? ' is-on' : ''}`}
          aria-label={wishlisted ? 'Remove from wishlist' : 'Add to wishlist'}
          onClick={(e) => {
            e.stopPropagation();
            setWishlisted((w) => !w);
          }}
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill={wishlisted ? '#1F4E5F' : 'none'} stroke={wishlisted ? '#1F4E5F' : '#9ca3af'} strokeWidth="1.7">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"
            />
          </svg>
        </button>
      </div>

      <div className="zouk-card-body">
        <h3 className="zouk-card-title">{product.title}</h3>
        <div className="zouk-card-footer">
          <div className="zouk-card-prices">
            <span className="zouk-card-price">{formatInr(product.currentPrice)}</span>
            {product.originalPrice > product.currentPrice && (
              <span className="zouk-card-mrp">
                MRP: <s>{formatInr(product.originalPrice)}</s>
              </span>
            )}
          </div>
          <button
            type="button"
            className="zouk-card-add"
            onClick={(e) => {
              e.stopPropagation();
              onClick && onClick(product);
            }}
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
}

const PopularCollections = ({ products = [], onProductClick }) => {
  const scrollerRef = useRef(null);

  const scrollByCards = (dir) => {
    const el = scrollerRef.current;
    if (!el) return;
    const card = el.querySelector('.zouk-card');
    const step = card ? card.getBoundingClientRect().width + 16 : 280;
    el.scrollBy({ left: dir * step, behavior: 'smooth' });
  };

  return (
    <section className="zouk-bestsellers">
      <div className="zouk-bestsellers-head">
        <h2>Explore Bestsellers</h2>
        <a href="https://zouk.co.in/" target="_blank" rel="noopener noreferrer">
          View All
        </a>
      </div>

      <div className="zouk-bestsellers-wrap">
        <button type="button" className="zouk-nav zouk-nav--prev" aria-label="Previous products" onClick={() => scrollByCards(-1)}>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        <div className="zouk-bestsellers-scroller" ref={scrollerRef}>
          {products.map((product) => (
            <ProductCollectionCard key={product.id} product={product} onClick={onProductClick} />
          ))}
        </div>

        <button type="button" className="zouk-nav zouk-nav--next" aria-label="Next products" onClick={() => scrollByCards(1)}>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </section>
  );
};

export default PopularCollections;
