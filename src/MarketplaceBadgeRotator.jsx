import React from 'react';
import { MARKETPLACE_BADGES } from './marketplaceBadges';

function MarketplaceChip({ badge }) {
  return (
    <span className="inline-flex items-center gap-1 rounded-full border border-gray-200 bg-white px-2 py-0.5">
      {badge.logo}
      <svg width="10" height="10" viewBox="0 0 24 24" style={{ flexShrink: 0 }}>
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" fill="#f97316" />
      </svg>
      <span className="text-xs font-bold text-gray-800">{badge.rating}</span>
      <span className="text-[11px] text-gray-400">({badge.count})</span>
    </span>
  );
}

export function MarketplaceBadgeRow() {
  const rowBadges = MARKETPLACE_BADGES.filter((b) => b.label === 'Amazon' || b.label === 'Myntra');
  return (
    <span className="inline-flex flex-wrap items-center gap-1.5" aria-label="Amazon and Myntra ratings">
      {rowBadges.map((badge) => (
        <MarketplaceChip key={badge.label} badge={badge} />
      ))}
    </span>
  );
}

export default function MarketplaceBadgeRotator() {
  const [idx, setIdx] = React.useState(0);
  const [phase, setPhase] = React.useState('idle');

  React.useEffect(() => {
    const id = setInterval(() => {
      setPhase('exit');
      setTimeout(() => {
        setIdx((i) => (i + 1) % MARKETPLACE_BADGES.length);
        setPhase('enter');
        setTimeout(() => setPhase('idle'), 280);
      }, 280);
    }, 2800);
    return () => clearInterval(id);
  }, []);

  const badge = MARKETPLACE_BADGES[idx];
  const slideStyle = {
    transition: 'transform 280ms cubic-bezier(0.4,0,0.2,1), opacity 280ms ease',
    transform:
      phase === 'exit'  ? 'translateY(-110%)' :
      phase === 'enter' ? 'translateY(110%)'  :
      'translateY(0)',
    opacity: phase === 'idle' ? 1 : 0,
  };

  return (
    <span
      className="flex items-center overflow-hidden px-1 py-0.5"
      style={{ minWidth: 110, maxHeight: 28 }}
      aria-live="polite"
      aria-label={`${badge.label} rating`}
    >
      <span className="flex items-center gap-1" style={slideStyle}>
        {badge.logo}
        <svg width="10" height="10" viewBox="0 0 24 24" style={{ flexShrink: 0, marginLeft: 3 }}>
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" fill="#f97316" />
        </svg>
        <span className="text-xs font-bold text-gray-800">{badge.rating}</span>
        <span className="text-xs text-gray-400">({badge.count})</span>
      </span>
    </span>
  );
}
