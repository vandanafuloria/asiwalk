import React from 'react';

/** Rotates one keyword pill at a time, sliding bottom-to-top — same motion as MarketplaceBadgeRotator */
export default function KeywordRotator({ tags = [] }) {
  const [idx, setIdx] = React.useState(0);
  const [phase, setPhase] = React.useState('idle');

  React.useEffect(() => {
    if (tags.length < 2) return undefined;
    const id = setInterval(() => {
      setPhase('exit');
      setTimeout(() => {
        setIdx((i) => (i + 1) % tags.length);
        setPhase('enter');
        setTimeout(() => setPhase('idle'), 280);
      }, 280);
    }, 2200);
    return () => clearInterval(id);
  }, [tags.length]);

  if (tags.length === 0) return null;

  const tag = tags[idx];
  const slideStyle = {
    transition: 'transform 280ms cubic-bezier(0.4,0,0.2,1), opacity 280ms ease',
    transform:
      phase === 'exit'  ? 'translateY(-110%)' :
      phase === 'enter' ? 'translateY(110%)'  :
      'translateY(0)',
    opacity: phase === 'idle' ? 1 : 0,
  };

  return (
    <span className="pop-card-tag-rotator" aria-live="polite">
      <span className="pop-card-tag" style={slideStyle}>{tag}</span>
    </span>
  );
}
