import React, { useEffect, useMemo, useState } from 'react';

const AMAZON_LOGO =
  'https://static.vecteezy.com/system/resources/previews/014/018/561/non_2x/amazon-logo-on-transparent-background-free-vector.jpg';
const FLIPKART_LOGO =
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxggIt5CPQqUxKi3eW4QhNIKv5eH5LdhRwMA&s';

const InstaRealIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" className="h-4 w-4 shrink-0" aria-hidden>
    <defs>
      <linearGradient id="igTrustGrad" x1="0%" y1="100%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#f09433" />
        <stop offset="50%" stopColor="#dc2743" />
        <stop offset="100%" stopColor="#bc1888" />
      </linearGradient>
    </defs>
    <path
      fill="url(#igTrustGrad)"
      d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"
    />
  </svg>
);

const StarRow = () => (
  <div className="flex items-center gap-0.5">
    {[1, 2, 3, 4, 5].map((i) => (
      <svg key={i} width="12" height="12" viewBox="0 0 24 24" fill="#FF9500">
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
      </svg>
    ))}
  </div>
);

const ComfortIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="#1F4E5F" aria-hidden>
    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 6 4 4 6.5 4c1.74 0 3.41 1.01 4.22 2.44C11.09 5.01 12.76 4 14.5 4 17 4 19 6 19 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
  </svg>
);

function RatingBadge({ value }) {
  return (
    <div
      className="flex items-center gap-0.5 px-1.5 py-0.5 rounded shrink-0"
      style={{ backgroundColor: '#111111' }}
    >
      <svg width="8" height="8" viewBox="0 0 24 24" fill="#FFEA00" aria-hidden>
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
      </svg>
      <span className="font-bold text-white" style={{ fontSize: '9px' }}>
        {value}
      </span>
    </div>
  );
}

/**
 * Right-edge trust strip — rotated 270deg, slides star / love / Amazon / Flipkart / overall.
 */
export default function InstagramTrustCarousel({
  instagramUrl = 'https://www.instagram.com/asiwalk.in/',
  followersLabel = '5K',
  shopUrl = 'https://asiwalk.com/',
  amazonUrl = 'https://www.amazon.in/',
  flipkartUrl = 'https://www.flipkart.com/',
}) {
  const trustSlides = useMemo(
    () => [
      {
        key: 'stars',
        href: shopUrl,
        ariaLabel: '4.8 star product rating',
        icon: <StarRow />,
        text: '4.8 star rating on this product',
        badge: '4.8',
      },
      {
        key: 'loved-product',
        href: shopUrl,
        ariaLabel: 'Customers who loved this product',
        icon: <ComfortIcon />,
        text: '10,000+ customers loved this product',
        badge: null,
      },
      {
        key: 'loved-brand',
        href: instagramUrl,
        ariaLabel: 'Customers who love asiwalk',
        icon: <InstaRealIcon />,
        text: `${followersLabel} love asiwalk`,
        badge: null,
      },
      {
        key: 'amazon',
        href: amazonUrl,
        ariaLabel: 'asiwalk on Amazon India',
        icon: (
          <img src={AMAZON_LOGO} alt="" className="h-4 w-auto object-contain" style={{ maxHeight: '16px' }} />
        ),
        text: '14K+ ratings · Amazon',
        badge: '4.5',
      },
      {
        key: 'flipkart',
        href: flipkartUrl,
        ariaLabel: 'asiwalk on Flipkart',
        icon: (
          <img src={FLIPKART_LOGO} alt="" className="h-4 w-auto object-contain" style={{ maxHeight: '16px' }} />
        ),
        text: '8K+ ratings · Flipkart',
        badge: '4.3',
      },
      {
        key: 'overall',
        href: shopUrl,
        ariaLabel: 'Overall marketplace rating',
        icon: <StarRow />,
        text: '4.6 overall across marketplaces',
        badge: '4.6',
      },
    ],
    [followersLabel, instagramUrl, shopUrl, amazonUrl, flipkartUrl]
  );

  const [trustIdx, setTrustIdx] = useState(0);
  const [animKey, setAnimKey] = useState(0);

  useEffect(() => {
    const n = trustSlides.length;
    const t = setInterval(() => {
      setTrustIdx((i) => (i + 1) % n);
      setAnimKey((k) => k + 1);
    }, 2500);
    return () => clearInterval(t);
  }, [trustSlides.length]);

  const slide = trustSlides[trustIdx];

  const row = (
    <>
      <span className="shrink-0 flex items-center scale-90">{slide.icon}</span>
      <span className="text-[10px] font-semibold text-gray-900">{slide.text}</span>
      {slide.badge ? <RatingBadge value={slide.badge} /> : null}
    </>
  );

  return (
    <>
      <style>{`
        @keyframes instaTrustSlideIn {
          0%   { transform: translateX(-100%); opacity: 0; }
          100% { transform: translateX(0);     opacity: 1; }
        }
        .insta-trust-slide {
          animation: instaTrustSlideIn 0.45s cubic-bezier(0.22, 1, 0.36, 1) both;
        }
      `}</style>
      <div
        className="fixed right-4 rounded-none px-2.5 py-1.5 shadow-lg z-30 overflow-hidden border border-gray-200/80 bg-white"
        style={{
          top: '226px',
          transform: 'rotate(270deg)',
          transformOrigin: 'right center',
          minWidth: '200px',
          height: '26px',
        }}
        role="region"
        aria-label="Trust highlights carousel"
      >
        <a
          key={animKey}
          href={slide.href}
          target="_blank"
          rel="noopener noreferrer"
          className="insta-trust-slide flex items-center gap-2 whitespace-nowrap h-full text-inherit no-underline focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1F4E5F] focus-visible:ring-offset-1 rounded"
          aria-label={slide.ariaLabel}
        >
          {row}
        </a>
      </div>
    </>
  );
}
