/** Best sellers — SUPR product imagery */

export const MUUN_HOME_PRODUCT_IMAGES = [
  'https://suprwater.com/cdn/shop/files/4_9c151de2-b385-4df5-9bdd-8d73c302ff1e.png?v=1780224574&width=1000',
  'https://suprwater.com/cdn/shop/files/2_3e0ac42e-e4e3-460c-a4ab-c40262982a78.png?v=1765798939&width=1000',
  'https://suprwater.com/cdn/shop/files/MangoOrange_8428598f-edf1-4fe9-8076-e1e889528608.png?v=1765796746&width=1000',
];

/** Safe index into the product image pool — callers may reference more slots than exist */
export const productImageAt = (i) =>
  MUUN_HOME_PRODUCT_IMAGES[
    ((i % MUUN_HOME_PRODUCT_IMAGES.length) + MUUN_HOME_PRODUCT_IMAGES.length) %
      MUUN_HOME_PRODUCT_IMAGES.length
  ];

export const MUUN_HOME_GALLERY_IMAGES = [...MUUN_HOME_PRODUCT_IMAGES];

export const bestSellerProducts = [
  {
    id: 1,
    image: productImageAt(1),
    galleryImages: [productImageAt(1), productImageAt(2), productImageAt(0)],
    title: 'Mango Orange Protein Water — Pack of 3',
    currentPrice: 999,
    originalPrice: 1199,
    rating: 4.6,
    reviewCount: 548,
  },
  {
    id: 2,
    image: productImageAt(2),
    galleryImages: [productImageAt(2), productImageAt(1), productImageAt(0)],
    title: 'Mango Orange Protein Water — Pack of 12',
    currentPrice: 3599,
    originalPrice: 4796,
    rating: 4.7,
    reviewCount: 512,
  },
  {
    id: 3,
    image: productImageAt(1),
    galleryImages: [productImageAt(1), productImageAt(0), productImageAt(2)],
    title: 'Mango Orange Protein Water — Pack of 24',
    currentPrice: 6999,
    originalPrice: 9592,
    rating: 4.7,
    reviewCount: 586,
  },
  {
    id: 4,
    image: productImageAt(0),
    galleryImages: [productImageAt(0), productImageAt(2), productImageAt(1)],
    title: 'Clear Whey Isolate — Mango, 20 Scoop Pack',
    currentPrice: 1999,
    originalPrice: 2499,
    rating: 4.5,
    reviewCount: 563,
  },
];
