/**
 * Shop videos — Zouk reels with Instagram links.
 * Single source for home "Shop videos", header reels, and PDP reel strip.
 */
export const MUUN_SHOP_VIDEO_CLIPS = [
  {
    url: 'https://zouk.co.in/cdn/shop/files/quinn_dv4aloh3rosdcj7n94rrtbah.mp4?v=1',
    title: 'Elegant designs for everyday',
    instagramUrl: 'https://www.instagram.com/p/Dcqkkzuzg_2/?hl=en',
  },
  {
    url: 'https://zouk.co.in/cdn/shop/files/quinn_y4k4fmuc54vsojb1dzj9i9l5.mp4',
    title: 'Crafted with care',
    instagramUrl: 'https://www.instagram.com/p/Dci6k7DDdfi/?hl=en&img_index=1',
  },
  {
    url: 'https://zouk.co.in/cdn/shop/files/quinn_ado6wy5ew00xv66rj6kno1qk.mp4',
    title: 'Style meets function',
    instagramUrl: 'https://www.instagram.com/p/DcjOB5vuRYo/?hl=en',
  },
  {
    url: 'https://zouk.co.in/cdn/shop/files/quinn_ado6wy5ew00xv66rj6kno1qk.mp4',
    title: 'Timeless pieces',
    instagramUrl: 'https://www.instagram.com/p/DcbYgHQqR3J/?hl=en',
  },
  {
    url: 'https://zouk.co.in/cdn/shop/files/quinn_ecwqewi797xa05hinp93ve0i.mp4',
    title: 'Modern aesthetics',
    instagramUrl: 'https://www.instagram.com/p/DcWJeKZMfai/?hl=en',
  },
  {
    url: 'https://zouk.co.in/cdn/shop/files/quinn_m8zp2x2n3e3grcurmovp1b51.mp4',
    title: 'Everyday essentials',
    instagramUrl: 'https://www.instagram.com/p/DcGoSdCDbZG/?hl=en&img_index=1',
  },
  {
    url: 'https://zouk.co.in/cdn/shop/files/quinn_izd04gg8mcm9n3bd0q5ua1th.mp4',
    title: 'Statement looks',
    instagramUrl: 'https://www.instagram.com/p/Db8NNloRo7Y/?hl=en',
  },
  {
    url: 'https://zouk.co.in/cdn/shop/files/quinn_spcntobuz9veamgoc6tui5yj.mp4?v=1',
    title: 'On the go',
    instagramUrl: 'https://www.instagram.com/p/Db2_KCmNFjy/?hl=en',
  },
  {
    url: 'https://zouk.co.in/cdn/shop/files/quinn_zp6xnwm9maa6vo2ke1j853i7.mp4',
    title: 'Handcrafted details',
    instagramUrl: 'https://www.instagram.com/p/DbhlM4VscGG/?hl=en',
  },
  {
    url: 'https://zouk.co.in/cdn/shop/files/quinn_uirianhtxdfwlou8pexm3tbn.mp4',
    title: 'New season favourites',
    instagramUrl: 'https://www.instagram.com/p/DbVpvqHjYEo/?hl=en&img_index=1',
  },
];

/** @deprecated Prefer `MUUN_SHOP_VIDEO_CLIPS` — kept for existing imports (URL list only) */
export const SCRAPSHALA_SHOP_VIDEOS = MUUN_SHOP_VIDEO_CLIPS.map((c) => c.url);

/** Floating draggable reel on the product (PDP) page */
export const PDP_DRAGGABLE_VIDEO = SCRAPSHALA_SHOP_VIDEOS[3];
