import React, { useState } from 'react';
import MarketplaceBadgeRotator from './MarketplaceBadgeRotator';
import KeywordRotator from './KeywordRotator';
import './PopularCollections.css';

const TABS = [
  'Best Sellers',
  'New Arrivals',
  'SALE!',
  'Hair accessories',
  'Earchains',
  'Maang tikkas / Papidi billa',
];

const STAR_PATH = 'M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z';

function formatInr(amount) {
  return `Rs. ${Number(amount).toLocaleString('en-IN')}.00`;
}

export function ProductCollectionCard({ product, onClick }) {
  if (!product) return null;
  const { rating = 0, reviewCount = 0, tags } = product;

  return (
    <div className="pop-card" onClick={() => onClick && onClick(product)}>
      <div className="pop-card-img-wrap">
        {product.salePercent > 0 && (
          <span className="pop-card-badge">-{product.salePercent}% Sale</span>
        )}
        <img
          src={product.image}
          alt={product.title}
          loading="lazy"
          className="pop-card-img"
        />
        <span className="pop-card-watermark">Kruthika</span>
        <div className="pop-card-market-overlay" onClick={(e) => e.stopPropagation()}>
          <MarketplaceBadgeRotator />
        </div>
      </div>

      <h3 className="pop-card-title">{product.title}</h3>

      {rating > 0 && (
        <div className="pop-card-rating">
          <span className="pop-card-stars">
            {[1, 2, 3, 4, 5].map((i) => (
              <svg key={i} width="13" height="13" viewBox="0 0 24 24" aria-hidden>
                <path
                  d={STAR_PATH}
                  fill={i <= Math.round(rating) ? '#c1694f' : 'none'}
                  stroke="#c1694f"
                  strokeWidth="1.4"
                />
              </svg>
            ))}
          </span>
          <span className="pop-card-rating-text">{rating} ({reviewCount})</span>
        </div>
      )}

      {Array.isArray(tags) && tags.length > 0 && (
        <div className="pop-card-tags">
          <KeywordRotator tags={tags} />
        </div>
      )}

      <p className="pop-card-price">{formatInr(product.currentPrice)}</p>

      <button
        type="button"
        className="pop-card-cta"
        onClick={(e) => {
          e.stopPropagation();
          onClick && onClick(product);
        }}
      >
        View Variants
      </button>
    </div>
  );
}

const PopularCollections = ({ products = [], onProductClick }) => {
  const [activeTab, setActiveTab] = useState(TABS[0]);

  return (
    <section className="pop-collections">
      <h2 className="pop-collections-heading">Popular Collections</h2>

      <div className="pop-collections-tabs">
        {TABS.map((tab) => (
          <button
            key={tab}
            type="button"
            className={`pop-collections-tab${tab === activeTab ? ' is-active' : ''}`}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>

      <div className="pop-collections-grid">
        {products.map((product) => (
          <ProductCollectionCard key={product.id} product={product} onClick={onProductClick} />
        ))}
      </div>
    </section>
  );
};

export default PopularCollections;
