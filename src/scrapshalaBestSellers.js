/** Best sellers — Zouk product imagery */

export const MUUN_HOME_PRODUCT_IMAGES = [
  'https://zouk.co.in/cdn/shop/files/WOB_LL_04_a94640db-2897-4ea0-91ab-0419df1b7f8a.jpg?v=1777025154&width=1000',
  'https://zouk.co.in/cdn/shop/files/MulticolorMandalaPrint_NawabiCoutureFlapSlingBagCombo.png?v=1786971604&width=1000',
  'https://zouk.co.in/cdn/shop/files/WOB_GO_04_334e51f2-c2f5-4f10-b0d9-a3e64755ed46.jpg?v=1774261757&width=700',
  'https://zouk.co.in/cdn/shop/files/WOB_GO_04_334e51f2-c2f5-4f10-b0d9-a3e64755ed46.jpg?v=1774261757&width=700',
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
    image: productImageAt(0),
    galleryImages: [productImageAt(0), productImageAt(1), productImageAt(2)],
    productUrl: 'https://zouk.co.in/',
    title: 'Lattice Lace Amalia Daypack',
    currentPrice: 1399,
    originalPrice: 2299,
    salePercent: 39,
    rating: 4.7,
    reviewCount: 10000,
    tags: ['Bold Prints', '100% Vegan', 'Handcrafted', 'Travel Ready', 'Proudly Indian', 'Premium Finish'],
  },
  {
    id: 2,
    image: productImageAt(1),
    galleryImages: [productImageAt(1)],
    title: 'Nawabi Couture Flap Sling Bag Combo',
    currentPrice: 1899,
    originalPrice: 2699,
    salePercent: 30,
    rating: 4.6,
    reviewCount: 12000,
    tags: ['Bold Prints', '100% Vegan', 'Handcrafted', 'Travel Ready', 'Proudly Indian', 'Premium Finish'],
  },
  {
    id: 3,
    image: productImageAt(2),
    galleryImages: [productImageAt(2)],
    title: "GeoOptics Women's Office Bag",
    currentPrice: 1499,
    originalPrice: 1999,
    salePercent: 25,
    rating: 4.8,
    reviewCount: 20000,
    tags: ['Bold Prints', '100% Vegan', 'Handcrafted', 'Travel Ready', 'Proudly Indian', 'Premium Finish'],
  },
  {
    id: 4,
    image: productImageAt(3),
    galleryImages: [productImageAt(3)],
    title: 'FloMotif Office Backpack',
    currentPrice: 1599,
    originalPrice: 2199,
    salePercent: 27,
    rating: 4.7,
    reviewCount: 15000,
    tags: ['Bold Prints', '100% Vegan', 'Handcrafted', 'Travel Ready', 'Proudly Indian', 'Premium Finish'],
  },
];
