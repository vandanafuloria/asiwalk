/** Best sellers — Kruthika Jewellery product imagery */

export const MUUN_HOME_PRODUCT_IMAGES = [
  'https://kruthikajewellery.com/cdn/shop/files/IMG_0122copy_4c69a9e5-77d0-4067-9914-9c59cddca330_360x.jpg?v=1742124924',
  'https://kruthikajewellery.com/cdn/shop/files/IMG_0110_copy_360x.jpg?v=1753261680',
  'https://kruthikajewellery.com/cdn/shop/files/IMG_0182copy_fab95a13-f545-4288-bfc3-31410eaed09e_360x.jpg?v=1753434364',
  'https://kruthikajewellery.com/cdn/shop/files/IMG_8121copy_51844252-1c6f-420d-84eb-2083f124524c_360x.jpg?v=1761136700',
];

/** Safe index into the product image pool — callers may reference more slots than exist */
export const productImageAt = (i) =>
  MUUN_HOME_PRODUCT_IMAGES[
    ((i % MUUN_HOME_PRODUCT_IMAGES.length) + MUUN_HOME_PRODUCT_IMAGES.length) %
      MUUN_HOME_PRODUCT_IMAGES.length
  ];

export const MUUN_HOME_GALLERY_IMAGES = [...MUUN_HOME_PRODUCT_IMAGES];

/** Full-resolution PDP gallery for the Grand AD Peacock Emerald Necklace */
const NC1781_GALLERY_IMAGES = [
  'https://kruthikajewellery.com/cdn/shop/files/IMG_0122copy_4c69a9e5-77d0-4067-9914-9c59cddca330.jpg?v=1742124924&width=1206',
  'https://kruthikajewellery.com/cdn/shop/files/IMG_0123copy_14d52bb7-437e-4620-a9ee-3f579cca9b9c.jpg?v=1742124924&width=1206',
  'https://kruthikajewellery.com/cdn/shop/files/IMG_0274copy_ee1bf86c-2e0e-42fe-999b-c15af7db5a74.jpg?v=1786704611&width=1206',
  'https://kruthikajewellery.com/cdn/shop/files/IMG_0124copy_8e4d128c-9a41-4ec5-9813-d21a336112ec.jpg?v=1742124924&width=1206',
  'https://kruthikajewellery.com/cdn/shop/files/IMG_0125copy_00f235ef-af3c-4863-8b3f-c3a112586ce9.jpg?v=1742124924&width=1206',
  'https://kruthikajewellery.com/cdn/shop/files/IMG_0270copy_ef2a26b8-b7c3-4f53-8ded-b96249aa6093.jpg?v=1786704611&width=1206',
  'https://kruthikajewellery.com/cdn/shop/files/IMG_0271copy_465f761d-7581-4a83-b47c-fd1812dad101.jpg?v=1786704611&width=1206',
  'https://kruthikajewellery.com/cdn/shop/files/IMG_0272copy_11ed0351-78bc-43fe-9515-df61c87e042a.jpg?v=1786704611&width=1206',
  'https://kruthikajewellery.com/cdn/shop/files/IMG_0273copy_aa92a5e6-9094-4106-b46d-51a537e3f1b6.jpg?v=1786704611&width=1206',
];

export const bestSellerProducts = [
  {
    id: 1,
    image: productImageAt(0),
    galleryImages: NC1781_GALLERY_IMAGES,
    productUrl: 'https://kruthikajewellery.com/products/grand-ad-peacock-emerald-necklace-nc1781',
    title: 'Grand AD Peacock Emerald Necklace NC1781',
    currentPrice: 4280,
    originalPrice: 4700,
    salePercent: 9,
    rating: 4.7,
    reviewCount: 268,
    tags: ['Anti-Tarnish', 'Hypoallergenic', 'Gold Polished', 'Lightweight', 'Skin Friendly', 'Premium Finish'],
  },
  {
    id: 2,
    image: productImageAt(1),
    galleryImages: [productImageAt(1)],
    title: 'Beautiful Victorian AD Stone Chandelier Earrings E513 (Available In 6 Colours)',
    currentPrice: 1940,
    originalPrice: 2130,
    salePercent: 9,
    rating: 4.6,
    reviewCount: 194,
    tags: ['Hypoallergenic', 'Lightweight', 'Nickel-Free', 'Anti-Tarnish', 'Skin Friendly', 'Gold Polished'],
  },
  {
    id: 3,
    image: productImageAt(2),
    galleryImages: [productImageAt(2)],
    title: 'Beautiful Antique Lakshmi Coin/Bottu Bangles B194 (Available In 3 Colour)',
    currentPrice: 780,
    originalPrice: 860,
    salePercent: 9,
    rating: 4.8,
    reviewCount: 321,
    tags: ['Anti-Tarnish', 'Skin Friendly', 'Gold Polished', 'Adjustable Fit', 'Hypoallergenic', 'Premium Finish'],
  },
  {
    id: 4,
    image: productImageAt(3),
    galleryImages: [productImageAt(3)],
    title: 'Beautiful CZ Sparking Floral Blossom Bangles (Set Of Four) B213',
    currentPrice: 1310,
    originalPrice: 1510,
    salePercent: 13,
    rating: 4.7,
    reviewCount: 402,
    tags: ['Nickel-Free', 'Skin Friendly', 'Anti-Tarnish', 'Lightweight', 'Adjustable Fit', 'Hypoallergenic'],
  },
];
