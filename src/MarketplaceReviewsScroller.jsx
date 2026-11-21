import React from 'react';
import { MARKETPLACE_BADGES } from './marketplaceBadges';

/** Horizontally scrollable row of per-marketplace rating + review cards */
export default function MarketplaceReviewsScroller() {
  return (
    <div className="mb-10">
      <p className="mb-3 text-xs font-bold uppercase tracking-wide text-gray-900">Loved across marketplaces</p>
      <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide">
        {MARKETPLACE_BADGES.map((badge) => (
          <div
            key={badge.label}
            className="w-60 shrink-0 rounded-xl border border-gray-200 bg-white p-4 shadow-sm"
          >
            <div className="mb-2 flex items-center justify-between">
              <span className="flex items-center">{badge.logo}</span>
              <span className="flex items-center gap-1">
                <svg width="12" height="12" viewBox="0 0 24 24" aria-hidden>
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" fill="#f97316" />
                </svg>
                <span className="text-xs font-bold text-gray-800">{badge.rating}</span>
                <span className="text-[11px] text-gray-400">({badge.count})</span>
              </span>
            </div>
            <p className="text-xs leading-relaxed text-gray-600">&ldquo;{badge.quote}&rdquo;</p>
          </div>
        ))}
      </div>
    </div>
  );
}
