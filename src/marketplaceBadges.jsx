import React from 'react';

export const MARKETPLACE_BADGES = [
  {
    label: 'Amazon',
    rating: '4.5',
    count: '14K+',
    quote: 'Smells premium and the bottle feels sturdy. Ordered a second one as a gift.',
    logo: (
      <img
        src="https://techdocs.akamai.com/identity-cloud/img/social-login/identity-providers/amazon-logo.png"
        alt="Amazon"
        style={{ height: 13, width: 'auto', flexShrink: 0 }}
      />
    ),
  },
  {
    label: 'Myntra',
    rating: '4.4',
    count: '11K+',
    quote: 'Longevity is real — still noticeable by the end of the day.',
    logo: (
      <img
        src="https://cdn.worldvectorlogo.com/logos/myntra-2.svg"
        alt="Myntra"
        style={{ height: 14, width: 'auto', flexShrink: 0, objectFit: 'contain' }}
      />
    ),
  },
  {
    label: 'Flipkart',
    rating: '4.3',
    count: '8K+',
    quote: 'Delivery was quick and the scent isn\'t overpowering — perfect for office.',
    logo: (
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxggIt5CPQqUxKi3eW4QhNIKv5eH5LdhRwMA&s"
        alt="Flipkart"
        style={{ height: 14, width: 'auto', flexShrink: 0, objectFit: 'contain' }}
      />
    ),
  },
];
