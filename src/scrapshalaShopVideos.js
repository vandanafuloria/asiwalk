/**
 * Saada Designs — Local video assets with Instagram links.
 * Single source for home "Shop videos", header reels, and PDP reel strip.
 */
export const MUUN_SHOP_VIDEO_CLIPS = [
  {
    url: 'https://cdn.shopify.com/videos/c/o/v/6420dafa18524ad1845b4af31d67c577.mov',
    title: 'Elegant designs for everyday',
    instagramUrl: 'https://www.instagram.com/p/DDMlJ-4y4Hh/'
  },
  {
    url: 'https://cdn.shopify.com/videos/c/o/v/32c0c509dac34459af2182ab977929f4.mp4',
    title: 'Crafted with care',
    instagramUrl: 'https://www.instagram.com/p/Da2wOm8ALSo/'
  },
  {
    url: 'https://cdn.shopify.com/videos/c/o/v/8116db2e7b3d4b6fb58fc585318e415c.mp4',
    title: 'Style meets function',
    instagramUrl: 'https://www.instagram.com/p/DanmS0OzG8o/'
  },
  {
    url: 'https://cdn.shopify.com/videos/c/o/v/f24efb9ac7d14a42baf0323d539531e8.mp4',
    title: 'Timeless pieces',
    instagramUrl: 'https://www.instagram.com/p/DWbXdBnE7O_/'
  },
  {
    url: 'https://cdn.shopify.com/videos/c/o/v/fab3e8a1531548e3a41d0c70a32bdfaa.mp4',
    title: 'Modern aesthetics',
    instagramUrl: 'https://www.instagram.com/p/DWTfG1Ok-LH/'
  },
  {
    url: 'https://cdn.shopify.com/videos/c/o/v/4df1578f84c6414488281ad46f73b0af.mp4',
    title: 'Quality craftsmanship',
    instagramUrl: 'https://www.instagram.com/p/DWWRECqk3Ej/'
  },
  {
    url: 'https://cdn.shopify.com/videos/c/o/v/c5e4e10d2a2340559e04b41c0e756789.mp4',
    title: 'Designer collections',
    instagramUrl: 'https://www.instagram.com/p/DVtNyAUEkHj/'
  },
  {
    url: 'https://cdn.shopify.com/videos/c/o/v/dc32e0682f524ffeb1e48e5bd95da941.mp4',
    title: 'Made to be worn often',
    instagramUrl: 'https://www.instagram.com/p/DVc6FvHEslp/'
  },
];

/** @deprecated Prefer `MUUN_SHOP_VIDEO_CLIPS` — kept for existing imports (URL list only) */
export const SCRAPSHALA_SHOP_VIDEOS = MUUN_SHOP_VIDEO_CLIPS.map((c) => c.url);

/** Floating draggable reel on the product (PDP) page */
export const PDP_DRAGGABLE_VIDEO = SCRAPSHALA_SHOP_VIDEOS[3];
