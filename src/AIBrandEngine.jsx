import React, { useId, useState } from 'react';
import './AIBrandEngine.css';

const SHOP_URL = 'https://suprwater.com/';
const INSTAGRAM_URL = 'https://www.instagram.com/suprwater/';

function PremiumAIIcon({ gradientId, className, style, size = 40 }) {
  return (
    <svg
      className={className}
      style={style}
      width={size}
      height={size}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      focusable="false"
    >
      <defs>
        <linearGradient id={gradientId} x1="12" y1="12" x2="36" y2="36" gradientUnits="userSpaceOnUse">
          <stop stopColor="#fbbf24" />
          <stop offset="0.45" stopColor="#f59e0b" />
          <stop offset="1" stopColor="#b45309" />
        </linearGradient>
      </defs>
      <path
        d="M24 12C25.6 18.3 29.7 22.4 36 24C29.7 25.6 25.6 29.7 24 36C22.4 29.7 18.3 25.6 12 24C18.3 22.4 22.4 18.3 24 12Z"
        fill={`url(#${gradientId})`}
      />
      <path
        d="M16.3 28.7C16.8 30.5 18 31.7 19.8 32.2C18 32.7 16.8 33.9 16.3 35.7C15.8 33.9 14.6 32.7 12.8 32.2C14.6 31.7 15.8 30.5 16.3 28.7Z"
        fill="#FFFFFF"
        opacity="0.9"
      />
    </svg>
  );
}

function AIBrandEngine({ showExtras = true, compact = false }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [activeTab, setActiveTab] = useState('metrics');
  const [activeMetric, setActiveMetric] = useState('satisfaction');
  const baseId = useId().replace(/:/g, '');

  if (!showExtras) return null;

  const getIcon = (type) => {
    const icons = {
      collection: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path d="M4 7h16M4 12h16M4 17h10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          <path d="M16 15l2 2 4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
      style: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path d="M12 3l2.2 4.4L19 8.2l-3.5 3.4.8 4.9L12 14.3 7.7 16.5l.8-4.9L5 8.2l4.8-.8L12 3z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
        </svg>
      ),
      craft: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path d="M12 3v3M12 18v3M3 12h3M18 12h3M5.6 5.6l2.1 2.1M16.3 16.3l2.1 2.1M5.6 18.4l2.1-2.1M16.3 7.7l2.1-2.1" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          <circle cx="12" cy="12" r="3.5" stroke="currentColor" strokeWidth="2" />
        </svg>
      ),
      occasion: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <rect x="3" y="5" width="18" height="16" rx="2" stroke="currentColor" strokeWidth="2" />
          <path d="M3 10h18M8 3v4M16 3v4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        </svg>
      ),
      shipping: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path d="M1 3H17L22 8L17 13H1V3Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          <circle cx="5.5" cy="18.5" r="2.5" stroke="currentColor" strokeWidth="2" />
          <circle cx="18.5" cy="18.5" r="2.5" stroke="currentColor" strokeWidth="2" />
        </svg>
      ),
      brand: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M8 12L10.5 14.5L16 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
      metrics: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path d="M3 3V21H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M7 16L12 11L16 15L21 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M21 10V3H14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
    };
    return icons[type] || icons.metrics;
  };

  const brandInfo = {
    collection: {
      title: 'Flavours & Packs',
      iconType: 'collection',
      content: [
        {
          label: 'Ready To Drink',
          value: 'Mango Orange 330ml',
          description:
            'Clear whey isolate protein water with 24g of protein and 7g of BCAA in a sealed 330ml bottle — chill it and go.',
        },
        {
          label: 'Multi Packs',
          value: 'Packs of 3 · 12 · 24',
          description:
            'Start with a 3-pack to try the flavour, then stock the fridge with 12 or 24 as the per-bottle price drops.',
        },
        {
          label: 'Powder',
          value: '20 Scoop Tub',
          description:
            'Clear whey isolate powder with electrolytes — 15g protein and 3g BCAA per scoop, mixed in cold water.',
        },
      ],
      highlights: [
        'Every format is clear whey isolate — never a milky concentrate.',
        'Zero added sugar and zero carbs across the entire range.',
        'Mango Orange leads the line-up, with more flavours in development.',
      ],
    },
    style: {
      title: 'How It Drinks',
      iconType: 'style',
      content: [
        {
          label: 'Juice, Not Shake',
          value: 'Light & Refreshing',
          description:
            'Clear, fruity, and crisp to the last sip — far closer to a chilled juice than a thick protein shake.',
        },
        {
          label: 'Zero Bloating',
          value: 'Easy On The Stomach',
          description:
            'Isolate filters out most of the lactose and fat, so nothing sits heavy in your gut afterwards.',
        },
        {
          label: 'Mixes Clear',
          value: 'No Clumps, No Foam',
          description:
            'Ten seconds of shaking in cold water and the powder disappears — no chalky residue at the bottom.',
        },
      ],
      highlights: [
        'Made for people who could never finish a milky shake.',
        'Served chilled it works as hydration, not just supplementation.',
        'No chalky aftertaste — the most repeated line in customer reviews.',
      ],
    },
    craft: {
      title: 'Inside The Bottle',
      iconType: 'craft',
      content: [
        {
          label: 'Protein',
          value: '24g Per Bottle',
          description:
            '100% clear whey isolate — the cleanest and purest form of whey, with 7g of BCAA to support recovery.',
        },
        {
          label: 'Calories',
          value: '130 Per Serve',
          description:
            'All of the protein and none of the sugar or carbs — 130 calories that fit a cut as easily as a bulk.',
        },
        {
          label: 'Electrolytes',
          value: 'Hydration Built In',
          description:
            'Added electrolytes replace what you sweat out, so one bottle covers protein and rehydration together.',
        },
      ],
      highlights: [
        'Formulated in the US to a clean, short ingredient list.',
        'Zero added sugar, zero carbs, and no artificial colours.',
        'Suits lactose-sensitive drinkers who react badly to concentrate.',
      ],
    },
    occasion: {
      title: 'When To Drink It',
      iconType: 'occasion',
      content: [
        {
          label: 'Post-Workout',
          value: 'Recovery Window',
          description:
            'Twenty-four grams within reach the moment you rack the weights — no shaker, no blender, no milk.',
        },
        {
          label: 'On The Go',
          value: 'Desk, Commute, Travel',
          description:
            'Sealed and ready to drink, so it travels in a gym bag or a car door without any mess to clean up.',
        },
        {
          label: 'Between Meals',
          value: 'Protein Without A Meal',
          description:
            'Bridges the gap when lunch runs late — protein that will not leave you too full for dinner.',
        },
      ],
      highlights: [
        'One bottle a day makes a daily protein target far easier to hit.',
        'Light enough to drink before a run without anything sloshing around.',
        'Chilled in Indian heat it doubles as a genuine refresher.',
      ],
    },
    shipping: {
      title: 'Delivery & Support',
      iconType: 'shipping',
      content: [
        {
          label: 'Fast Dispatch',
          value: 'Ships Quickly',
          description:
            'Orders move fast and travel in protective cartons, so bottles arrive sealed and intact.',
        },
        {
          label: 'COD Available',
          value: 'Pay On Delivery',
          description:
            'Cash on delivery and secure checkout options so a first order feels low risk.',
        },
        {
          label: 'Free Shipping',
          value: 'Packs Of 12 & Above',
          description:
            'Bulk packs ship free — comfortably the cheapest way to keep the fridge stocked.',
        },
      ],
      highlights: [
        'Damaged or leaking packs are replaced free within 48 hours.',
        'Friendly support over WhatsApp, phone, and email.',
        'Secure checkout with genuine quality assurance.',
      ],
    },
    brand: {
      title: 'SUPR Water',
      iconType: 'brand',
      content: [
        {
          label: 'Brand Promise',
          value: 'Protein You Actually Enjoy',
          description:
            'Clear whey isolate that drinks like juice — built for everyone who gave up on chalky, milky shakes.',
        },
        {
          label: 'Formulated In The US',
          value: 'Clean Label',
          description:
            'The cleanest and purest form of protein, with nothing in the bottle that does not need to be there.',
        },
        {
          label: 'Community',
          value: '@suprwater',
          description:
            'Training clips, recipes, and real customer reviews — hydration with SUPR goodness.',
        },
      ],
      highlights: [
        'Ready-to-drink nutrition for people who are moving all day.',
        '24g of protein and SUPR goodness in just 130 calories.',
        'Loved for the taste first and the macros second.',
      ],
    },
  };

  const graphData = {
    satisfaction: {
      label: 'Taste love',
      data: [84, 86, 88, 90, 91, 93, 95],
      color: '#b45309',
    },
    results: {
      label: 'Digests easy',
      data: [78, 80, 83, 85, 87, 90, 92],
      color: '#f59e0b',
    },
    repeat: {
      label: 'Repeat buyers',
      data: [62, 65, 68, 72, 75, 78, 82],
      color: '#78350f',
    },
    delivery: {
      label: 'Delivery experience',
      data: [86, 87, 89, 90, 92, 93, 95],
      color: '#b45309',
    },
    rating: {
      label: 'Avg. product rating',
      data: [4.3, 4.4, 4.5, 4.6, 4.7, 4.7, 4.8],
      color: '#f59e0b',
    },
    recommend: {
      label: 'Would recommend',
      data: [81, 83, 85, 88, 90, 92, 94],
      color: '#78350f',
    },
  };

  const metrics = [
    { id: 'satisfaction', label: 'Taste' },
    { id: 'results', label: 'Gut' },
    { id: 'repeat', label: 'Repeat' },
    { id: 'delivery', label: 'Ship' },
    { id: 'rating', label: 'Stars' },
    { id: 'recommend', label: 'Refer' },
  ];

  const currentMetric = graphData[activeMetric];
  const currentValue = currentMetric.data[currentMetric.data.length - 1];
  const percentage = typeof currentValue === 'number' ? currentValue.toFixed(1) : currentValue;
  const displayValue =
    activeMetric === 'rating' && typeof currentValue === 'number' && currentValue < 10
      ? `${currentValue.toFixed(1)}/5`
      : `${percentage}%`;

  const renderChart = () => {
    const data = currentMetric.data;
    const maxValue = Math.max(...data) * 1.1;
    const minValue = Math.min(...data) * 0.9;
    const range = maxValue - minValue || 1;
    const width = 340;
    const height = 160;
    const padding = { top: 15, right: 15, bottom: 35, left: 45 };
    const gradId = `${baseId}-chart-${activeMetric}`;

    const points = data.map((value, index) => {
      const x = padding.left + (index / (data.length - 1)) * (width - padding.left - padding.right);
      const y =
        padding.top +
        (height - padding.top - padding.bottom) -
        ((value - minValue) / range) * (height - padding.top - padding.bottom);
      return { x, y, value };
    });

    const linePath = points.map((point, index) => `${index === 0 ? 'M' : 'L'} ${point.x} ${point.y}`).join(' ');
    const areaPath = `${linePath} L ${points[points.length - 1].x} ${height - padding.bottom} L ${points[0].x} ${height - padding.bottom} Z`;

    return (
      <div className="chart-container">
        <div className="chart-header">
          <h5 className="chart-title">SUPR nutrition snapshot</h5>
          <div className="chart-value">{displayValue}</div>
        </div>
        <svg width="100%" height={height} viewBox={`0 0 ${width} ${height}`} className="chart-svg" preserveAspectRatio="xMidYMid meet">
          <defs>
            <linearGradient id={gradId} x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor={currentMetric.color} stopOpacity="0.45" />
              <stop offset="100%" stopColor={currentMetric.color} stopOpacity="0.08" />
            </linearGradient>
          </defs>
          <path d={areaPath} fill={`url(#${gradId})`} opacity="0.35" />
          {[0, 1, 2, 3, 4].map((i) => {
            const y = padding.top + (i / 4) * (height - padding.top - padding.bottom);
            return (
              <line
                key={i}
                x1={padding.left}
                y1={y}
                x2={width - padding.right}
                y2={y}
                stroke="#e8eaed"
                strokeWidth="1"
                strokeDasharray="2,2"
              />
            );
          })}
          <path
            d={linePath}
            fill="none"
            stroke={currentMetric.color}
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          {points.map((point, index) => (
            <circle
              key={index}
              cx={point.x}
              cy={point.y}
              r="4"
              fill={currentMetric.color}
              stroke="white"
              strokeWidth="2"
            />
          ))}
          {points.map((point, index) => (
            <text
              key={`lbl-${index}`}
              x={point.x}
              y={height - padding.bottom + 20}
              textAnchor="middle"
              fill="#666"
              fontSize="10"
              fontWeight="500"
            >
              W{index + 1}
            </text>
          ))}
        </svg>
        <div className="metric-filters">
          {metrics.map((metric) => (
            <button
              key={metric.id}
              type="button"
              className={`metric-filter-btn ${activeMetric === metric.id ? 'active' : ''}`}
              onClick={() => setActiveMetric(metric.id)}
            >
              {metric.label}
            </button>
          ))}
        </div>
        <p className="chart-footnote">
          Illustrative trend only. Based on customer themes: taste, digestion, repeat orders, and delivery.
        </p>
      </div>
    );
  };

  const tabs = [
    { id: 'metrics', label: 'Signals', iconType: 'metrics' },
    { id: 'collection', label: 'Range', iconType: 'collection' },
    { id: 'style', label: 'Taste', iconType: 'style' },
    { id: 'craft', label: 'Formula', iconType: 'craft' },
    { id: 'occasion', label: 'When', iconType: 'occasion' },
    { id: 'shipping', label: 'Ship', iconType: 'shipping' },
    { id: 'brand', label: 'Brand', iconType: 'brand' },
  ];

  const currentInfo = brandInfo[activeTab];
  const sparkleGrad = `${baseId}-sparkle`;

  return (
    <div className={`ai-brand-engine ${isExpanded ? 'expanded' : ''}`}>
      {!isExpanded ? (
        <div className="ai-brand-engine-trigger-wrap">
          <button
            type="button"
            className={`ai-brand-engine-trigger${compact ? ' abe-compact' : ''}`}
            onClick={() => setIsExpanded(true)}
            aria-label="Open nutrition insights for SUPR Water"
          >
            <div className="trigger-icon">
              <span className="ai-gemini-rotator" aria-hidden="true">
                <PremiumAIIcon gradientId={sparkleGrad} className="ai-gemini-icon" size={36} />
              </span>
            </div>
            {!compact && (
              <div className="trigger-text">
                <span className="trigger-label">Nutrition insights</span>
                <span className="trigger-sublabel">SUPR Water</span>
              </div>
            )}
            <span className="trigger-badge">AI</span>
          </button>
          {!compact && (
            <div className="ai-brand-engine-tooltip" role="note">
              Formula, flavours & how it drinks — tap to explore
              <span className="ai-brand-engine-tooltip__arrow" aria-hidden />
            </div>
          )}
        </div>
      ) : (
        <div className="ai-brand-engine-panel" role="dialog" aria-label="SUPR Water nutrition insights">
          <div className="panel-header">
            <div className="header-left">
              <div className="header-icon">
                <PremiumAIIcon gradientId={`${baseId}-head`} style={{ width: 36, height: 36 }} size={36} />
              </div>
              <div>
                <h3 className="panel-title">AI Nutrition Engine</h3>
                <p className="panel-subtitle">SUPR Water · Clear Whey Protein Water</p>
              </div>
            </div>
            <button type="button" className="panel-close-btn" onClick={() => setIsExpanded(false)} aria-label="Close">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </button>
          </div>

          <div className="panel-tabs" role="tablist">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                type="button"
                role="tab"
                aria-selected={activeTab === tab.id}
                className={`tab-btn ${activeTab === tab.id ? 'active' : ''}`}
                onClick={() => setActiveTab(tab.id)}
              >
                <span className="tab-icon">{getIcon(tab.iconType)}</span>
                <span className="tab-label">{tab.label}</span>
              </button>
            ))}
          </div>

          <div className="panel-content">
            {activeTab === 'metrics' ? (
              renderChart()
            ) : currentInfo ? (
              <>
                <div className="content-header">
                  <div className="content-icon">{getIcon(currentInfo.iconType)}</div>
                  <h4 className="content-title">{currentInfo.title}</h4>
                </div>
                <div className="stats-grid">
                  {currentInfo.content.map((item) => (
                    <div key={item.label} className="stat-card">
                      <div className="stat-value">{item.value}</div>
                      <div className="stat-label">{item.label}</div>
                      <div className="stat-description">{item.description}</div>
                    </div>
                  ))}
                </div>
                <div className="highlights-section">
                  <h5 className="highlights-title">Why it matters</h5>
                  <ul className="highlights-list">
                    {currentInfo.highlights.map((highlight) => (
                      <li key={highlight} className="highlight-item">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="highlight-icon">
                          <path
                            d="M20 6L9 17L4 12"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="panel-content-cta">
                  <a href={SHOP_URL} target="_blank" rel="noopener noreferrer" className="abe-cta abe-cta--primary">
                    Shop SUPR Water
                  </a>
                  <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className="abe-cta abe-cta--ghost">
                    Instagram
                  </a>
                </div>
              </>
            ) : null}
          </div>

          <div className="panel-footer">
            <div className="footer-badge">
              <span className="footer-badge-icon" aria-hidden>
                <PremiumAIIcon gradientId={`${baseId}-foot`} size={18} />
              </span>
              <span>Clear Whey · Zero Sugar · Ready To Drink</span>
            </div>
            <p className="footer-note">
              Nutrition notes are for general guidance. Check the full ingredient and nutrition panel on{' '}
              <a href={SHOP_URL} target="_blank" rel="noopener noreferrer">
                suprwater.com
              </a>{' '}
              before you buy, and speak to a doctor if you have a medical condition.
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

export default AIBrandEngine;
