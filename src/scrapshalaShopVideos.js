import asiwalkClip1 from './assets/videos/asiwalk.in_1790336137_3993950693000742262_79522519501.mp4';
import asiwalkClip2 from './assets/videos/asiwalk.in_1792065003_4008451641672783861_79522519501.mp4';
import asiwalkClip3 from './assets/videos/asiwalk.in_1792681151_4013622612218299177_79522519501.mp4';
import asiwalkClip4 from './assets/videos/asiwalk.in_1794657287_4030198418470693106_79522519501.mp4';
import rohanGuptaClip from './assets/videos/byrohan.gupta_1792083702_4008607618627483212_63905253478.mp4';
import styledByHemsClip from './assets/videos/styledbyhems_1795009959_4032417754286492518_28467797908.mp4';

/**
 * Shop videos — asiwalk reels with Instagram links.
 * Single source for home "Shop videos", header reels, and PDP reel strip.
 */
export const MUUN_SHOP_VIDEO_CLIPS = [
  {
    url: asiwalkClip1,
    title: 'Elegant designs for everyday',
    instagramUrl: 'https://www.instagram.com/asiwalk.in/',
  },
  {
    url: asiwalkClip2,
    title: 'Crafted with care',
    instagramUrl: 'https://www.instagram.com/asiwalk.in/',
  },
  {
    url: asiwalkClip3,
    title: 'Style meets function',
    instagramUrl: 'https://www.instagram.com/asiwalk.in/',
  },
  {
    url: asiwalkClip4,
    title: 'Timeless pieces',
    instagramUrl: 'https://www.instagram.com/asiwalk.in/',
  },
  {
    url: rohanGuptaClip,
    title: 'Statement looks',
    instagramUrl: 'https://www.instagram.com/byrohan.gupta/',
  },
  {
    url: styledByHemsClip,
    title: 'Modern aesthetics',
    instagramUrl: 'https://www.instagram.com/styledbyhems/',
  },
];

/** @deprecated Prefer `MUUN_SHOP_VIDEO_CLIPS` — kept for existing imports (URL list only) */
export const SCRAPSHALA_SHOP_VIDEOS = MUUN_SHOP_VIDEO_CLIPS.map((c) => c.url);

/** Floating draggable reel on the product (PDP) page */
export const PDP_DRAGGABLE_VIDEO = SCRAPSHALA_SHOP_VIDEOS[3];
