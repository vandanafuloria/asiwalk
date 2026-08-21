/**
 * Saada Designs — Local video assets with Instagram links.
 * Single source for home "Shop videos", header reels, and PDP reel strip.
 */
export const MUUN_SHOP_VIDEO_CLIPS = [
  {
    url: 'https://kruthikajewellery.com/cdn/shop/videos/c/vp/562ee5d4dbc24ebca53706e886a03f05/562ee5d4dbc24ebca53706e886a03f05.HD-1080p-4.8Mbps-56671200.mp4?v=0',
    title: 'Elegant designs for everyday',
    instagramUrl: 'https://www.instagram.com/p/DcShHhHhq2L/'
  },
  {
    url: 'https://kruthikajewellery.com/cdn/shop/videos/c/vp/73a8236b639145cba991b4c4360c3782/73a8236b639145cba991b4c4360c3782.HD-1080p-2.5Mbps-54813077.mp4?v=0',
    title: 'Crafted with care',
    instagramUrl: 'https://www.instagram.com/p/DcQ58j7huqP/'
  },
  {
    url: 'https://kruthikajewellery.com/cdn/shop/videos/c/vp/acc16b8e9dd04545872da55eb29e8a3b/acc16b8e9dd04545872da55eb29e8a3b.HD-1080p-2.5Mbps-54813076.mp4?v=0',
    title: 'Style meets function',
    instagramUrl: 'https://www.instagram.com/p/DcQTa3Zhqwv/'
  },
  {
    url: 'https://kruthikajewellery.com/cdn/shop/videos/c/vp/86b5e4fa4609430a85a90dbd75a3aa7a/86b5e4fa4609430a85a90dbd75a3aa7a.HD-1080p-2.5Mbps-54813083.mp4?v=0',
    title: 'Timeless pieces',
    instagramUrl: 'https://www.instagram.com/p/DcP888-BNDl/'
  },
  {
    url: 'https://kruthikajewellery.com/cdn/shop/videos/c/vp/34028910391244cbb5c0df753c432926/34028910391244cbb5c0df753c432926.HD-1080p-2.5Mbps-54813590.mp4?v=0',
    title: 'Modern aesthetics',
    instagramUrl: 'https://www.instagram.com/p/DcQTa3Zhqwv/'
  },
];

/** @deprecated Prefer `MUUN_SHOP_VIDEO_CLIPS` — kept for existing imports (URL list only) */
export const SCRAPSHALA_SHOP_VIDEOS = MUUN_SHOP_VIDEO_CLIPS.map((c) => c.url);

/** Floating draggable reel on the product (PDP) page */
export const PDP_DRAGGABLE_VIDEO = SCRAPSHALA_SHOP_VIDEOS[3];
