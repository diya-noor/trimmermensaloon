export const services = {
  cuttings: [
    { id: 'haircut', name: 'Haircut', price: 1000 },
    { id: 'child-cut', name: 'Child Cut', price: 800 },
    { id: 'beard', name: 'Beard', price: 600 },
    { id: 'hair-colour', name: 'Hair Colour', price: 2000 },
    { id: 'beard-colour', name: 'Beard Colour', price: 500 },
    { id: 'hair-colour-service', name: 'Hair Colour Service', price: 500 },
    { id: 'beard-colour-service', name: 'Beard Colour Service', price: 300 },
    { id: 'hair-shiner', name: 'Hair Shiner', price: 2000 },
    { id: 'full-face-wax', name: 'Full Face Wax', price: 1000 },
    { id: 'face-wax', name: 'Face Wax', price: 500 },
    { id: 'face-threading', name: 'Face Threading', price: 300 },
    { id: 'hair-styling', name: 'Hair Styling', price: 500 },
    { id: 'hair-styling-fiber', name: 'Hair Styling With Fiber', price: 800 },
  ],

  cleansing: [
    { id: 'normal-cleansing', name: 'Normal Cleansing', price: 1000 },
    { id: 'gold-cleansing', name: 'Gold Cleansing', price: 1500 },
    { id: 'hi-lift-cleansing', name: 'Hi Lift Cleansing', price: 2000 },
    { id: 'darma-cous-cleansing', name: 'Darma Cous Cleansing', price: 2500 },
    { id: 'be-cute-cleansing', name: 'BE Cute Cleansing', price: 3000 },
    { id: 'janssen-cleansing', name: 'Janssen Cleansing', price: 3500 },
  ],

  facials: [
    { id: 'hydra-facial', name: 'Hydra Facial', price: 9000 },
    { id: 'janssen-facial', name: 'Janssen Facial', price: 8000 },
    { id: 'be-cute-facial', name: 'BE Cute Facial', price: 7000 },
    { id: 'darma-cous-facial', name: 'Darma Cous Facial', price: 6000 },
    { id: 'hi-lift-facial', name: 'Hi Lift Facial', price: 5000 },
    { id: 'gold-facial', name: 'Gold Facial', price: 4000 },
  ],

  facilities: [
    { id: 'full-body-massage-30', name: 'Full Body Massage (30 Min)', price: 2500 },
    { id: 'full-body-massage-60', name: 'Full Body Massage (1 Hour)', price: 3500 },
    { id: 'massaging-chair', name: 'Massaging Chair (15 Min)', price: 500 },
    { id: 'head-massage', name: 'Head Massage', price: 500 },
    { id: 'manicure', name: 'Manicure', price: 1500 },
    { id: 'manicure-pedicure-basic', name: 'Manicure Pedicure Basic', price: 2500 },
    { id: 'manicure-pedicure-whitening', name: 'Manicure Pedicure Whitening', price: 3500 },
    { id: 'protein-treatment', name: 'Protein Treatment & Hair Glossing', price: 2000 },
    { id: 'keratin-long', name: 'Keratin (Long Hair)', price: 9000 },
    { id: 'keratin-short', name: 'Keratin (Short Hair)', price: 7000 },
    { id: 'perming', name: 'Perming', price: 8000 },
    { id: 'hair-straightener', name: 'Hair Straightener', price: 4500 },
    { id: 'head-wash', name: 'Head Wash', price: 300 },
  ],
};

export const deals = [
  {
    id: 'deal-1',
    name: 'Deal 1',
    price: 3000,
    services: [
      'Hair Cutting',
      'Beard',
      'Double Action & Scrub',
      'Wash & Styling'
    ]
  },
  {
    id: 'deal-2',
    name: 'Deal 2',
    price: 4000,
    services: [
      'Hair Cutting',
      'Beard',
      'Hair & Beard Shiner',
      'With Scrub'
    ]
  },
  {
    id: 'deal-3',
    name: 'Deal 3',
    price: 7000,
    services: [
      'Hair Cutting',
      'Beard',
      'Hair Glossing',
      'Normal Facial',
      'Dry & Styling'
    ]
  },
  {
    id: 'nikkah-deal',
    name: 'Nikkah Deal',
    price: 9000,
    services: [
      'Hair Cutting',
      'Beard',
      'Hair Shiner',
      'BE Cute Cleansing',
      'Makeover & Hair Styling'
    ]
  }
];

export const packages = [
  {
    id: 'grooming-4-day',
    name: 'Grooming 4 Day Package',
    price: 35000,
    duration: '4 Days',
    days: [
      {
        day: 1,
        services: ['Manicure', 'Pedicure', 'Cleansing', 'Beard', 'Styling & Makeup']
      },
      {
        day: 2,
        services: ['Cleansing', 'Styling', 'Makeup', 'Hair Shiner']
      },
      {
        day: 3,
        services: ['Cleansing', 'Beard', 'Styling', 'Makeup']
      },
      {
        day: 4,
        services: ['Haircutting', 'Beard', 'Whitening Facial', 'Hair Shiner', 'Styling']
      }
    ]
  },
  {
    id: 'grooming-3-day-premium',
    name: 'Grooming 3 Day Package (Premium)',
    price: 25000,
    duration: '3 Days',
    days: [
      {
        day: 1,
        services: ['Manicure', 'Pedicure', 'Cleansing', 'Beard', 'Styling & Makeup']
      },
      {
        day: 2,
        services: ['Cleansing', 'Styling', 'Makeup']
      },
      {
        day: 3,
        services: ['Haircutting', 'Beard', 'Whitening Facial', 'Hair Shiner', 'Styling']
      }
    ]
  },
  {
    id: 'normal-grooming-3-day',
    name: 'Normal Grooming 3 Day Package',
    price: 20000,
    duration: '3 Days',
    days: [
      {
        day: 1,
        services: ['Manicure', 'Pedicure', 'Hi Lift Cleansing', 'Makeup & Styling']
      },
      {
        day: 2,
        services: ['Hi Lift Cleansing', 'Styling', 'Makeup']
      },
      {
        day: 3,
        services: ['Haircutting', 'Beard', 'Hi Lift Facial', 'Styling']
      }
    ]
  },
  {
    id: 'grooming-3-day-basic',
    name: 'Grooming 3 Day Package (Basic)',
    price: 15000,
    duration: '3 Days',
    days: [
      {
        day: 1,
        services: ['Manicure', 'Pedicure', 'Cleansing', 'Styling & Makeup']
      },
      {
        day: 2,
        services: ['Cleansing', 'Styling', 'Makeup']
      },
      {
        day: 3,
        services: ['Haircutting', 'Beard', 'Cleansing', 'Styling']
      }
    ]
  }
];
