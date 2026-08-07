// Local dummy product data.
//
// This mirrors the FINAL production data shape the client will supply:
// Product -> Color -> Size -> Affiliate URL, with each color and size
// carrying its own name/code/SKU. Nothing here is generated at runtime —
// every variant below is literal, authored data. The dummy set is
// deliberately minimal (up to 2 colors x 2 sizes per product) since the
// real catalog, SKUs, and affiliate URLs will replace this 1:1 later.
// No component should ever need to change when that swap happens.

const img = (seed, n) => `https://picsum.photos/seed/${seed}-${n}/900/900`

export const products = [
  {
    id: 1,
    title: "Air Essentials Pullover Hoodie",
    brand: "Nike",
    category: "hoodies",
    gender: "men",
    description: "A heavyweight cotton-blend hoodie with a relaxed fit, ribbed cuffs, and a soft brushed-fleece interior. Finished with an embroidered logo on the chest.",
    currentPrice: 54.99,
    oldPrice: 74.99,
    discount: 27,
    rating: 4.6,
    reviewCount: 312,
    stock: true,
    material: "Cotton-polyester fleece blend",
    fit: "Relaxed Fit",
    season: "All Season",
    condition: "New with Tags",
    images: [
      img('hoodie-nike', 1),
      img('hoodie-nike', 2),
      img('hoodie-nike', 3),
      img('hoodie-nike', 4)
    ],
    colors: [
      {
        name: "Black",
        code: "#111827",
        sku: "N-HOO-1-BLACK",
        sizes: [
          {
            name: "S",
            code: "S",
            sku: "N-HOO-1-BLACK-S",
            ebayAffiliateUrl: "https://www.ebay.com/itm/aff-nike-hoodie-001-black-s",
            depopAffiliateUrl: "https://www.depop.com/products/aff-nike-hoodie-001-black-s"
          },
          {
            name: "M",
            code: "M",
            sku: "N-HOO-1-BLACK-M",
            ebayAffiliateUrl: "https://www.ebay.com/itm/aff-nike-hoodie-001-black-m",
            depopAffiliateUrl: "https://www.depop.com/products/aff-nike-hoodie-001-black-m"
          }
        ]
      },
      {
        name: "Gray",
        code: "#9CA3AF",
        sku: "N-HOO-1-GRAY",
        sizes: [
          {
            name: "S",
            code: "S",
            sku: "N-HOO-1-GRAY-S",
            ebayAffiliateUrl: "https://www.ebay.com/itm/aff-nike-hoodie-001-gray-s",
            depopAffiliateUrl: "https://www.depop.com/products/aff-nike-hoodie-001-gray-s"
          },
          {
            name: "M",
            code: "M",
            sku: "N-HOO-1-GRAY-M",
            ebayAffiliateUrl: "https://www.ebay.com/itm/aff-nike-hoodie-001-gray-m",
            depopAffiliateUrl: "https://www.depop.com/products/aff-nike-hoodie-001-gray-m"
          }
        ]
      }
    ],
    bestSeller: true
  },
  {
    id: 2,
    title: "Classic Straight Fit Denim Jeans",
    brand: "Levi's",
    category: "pants",
    gender: "men",
    description: "Timeless straight-leg denim crafted from durable cotton denim with a classic five-pocket layout and a mid-rise waist.",
    currentPrice: 42,
    oldPrice: 60,
    discount: 30,
    rating: 4.7,
    reviewCount: 528,
    stock: true,
    material: "Cotton twill",
    fit: "Regular Fit",
    season: "All Season",
    condition: "New with Tags",
    images: [
      img('jeans-levis', 1),
      img('jeans-levis', 2),
      img('jeans-levis', 3),
      img('jeans-levis', 4)
    ],
    colors: [
      {
        name: "Blue",
        code: "#0064D2",
        sku: "L-PAN-2-BLUE",
        sizes: [
          {
            name: "S",
            code: "S",
            sku: "L-PAN-2-BLUE-S",
            ebayAffiliateUrl: "https://www.ebay.com/itm/aff-levis-jeans-002-blue-s",
            depopAffiliateUrl: "https://www.depop.com/products/aff-levis-jeans-002-blue-s"
          },
          {
            name: "M",
            code: "M",
            sku: "L-PAN-2-BLUE-M",
            ebayAffiliateUrl: "https://www.ebay.com/itm/aff-levis-jeans-002-blue-m",
            depopAffiliateUrl: "https://www.depop.com/products/aff-levis-jeans-002-blue-m"
          }
        ]
      },
      {
        name: "Black",
        code: "#111827",
        sku: "L-PAN-2-BLACK",
        sizes: [
          {
            name: "S",
            code: "S",
            sku: "L-PAN-2-BLACK-S",
            ebayAffiliateUrl: "https://www.ebay.com/itm/aff-levis-jeans-002-black-s",
            depopAffiliateUrl: "https://www.depop.com/products/aff-levis-jeans-002-black-s"
          },
          {
            name: "M",
            code: "M",
            sku: "L-PAN-2-BLACK-M",
            ebayAffiliateUrl: "https://www.ebay.com/itm/aff-levis-jeans-002-black-m",
            depopAffiliateUrl: "https://www.depop.com/products/aff-levis-jeans-002-black-m"
          }
        ]
      }
    ],
    bestSeller: true
  },
  {
    id: 3,
    title: "Everyday Crewneck T-Shirt",
    brand: "Champion",
    category: "t-shirts",
    gender: "men",
    description: "A soft, breathable crewneck tee in premium combed cotton. Pre-shrunk for a lasting fit and finished with a taped neckline.",
    currentPrice: 18.5,
    oldPrice: 25,
    discount: 26,
    rating: 4.4,
    reviewCount: 201,
    stock: true,
    material: "100% combed cotton jersey",
    fit: "Regular Fit",
    season: "All Season",
    condition: "New with Tags",
    images: [
      img('tee-champion', 1),
      img('tee-champion', 2),
      img('tee-champion', 3),
      img('tee-champion', 4)
    ],
    colors: [
      {
        name: "White",
        code: "#FFFFFF",
        sku: "C-T-S-3-WHITE",
        sizes: [
          {
            name: "S",
            code: "S",
            sku: "C-T-S-3-WHITE-S",
            ebayAffiliateUrl: "https://www.ebay.com/itm/aff-champion-tee-003-white-s",
            depopAffiliateUrl: "https://www.depop.com/products/aff-champion-tee-003-white-s"
          },
          {
            name: "M",
            code: "M",
            sku: "C-T-S-3-WHITE-M",
            ebayAffiliateUrl: "https://www.ebay.com/itm/aff-champion-tee-003-white-m",
            depopAffiliateUrl: "https://www.depop.com/products/aff-champion-tee-003-white-m"
          }
        ]
      },
      {
        name: "Black",
        code: "#111827",
        sku: "C-T-S-3-BLACK",
        sizes: [
          {
            name: "S",
            code: "S",
            sku: "C-T-S-3-BLACK-S",
            ebayAffiliateUrl: "https://www.ebay.com/itm/aff-champion-tee-003-black-s",
            depopAffiliateUrl: "https://www.depop.com/products/aff-champion-tee-003-black-s"
          },
          {
            name: "M",
            code: "M",
            sku: "C-T-S-3-BLACK-M",
            ebayAffiliateUrl: "https://www.ebay.com/itm/aff-champion-tee-003-black-m",
            depopAffiliateUrl: "https://www.depop.com/products/aff-champion-tee-003-black-m"
          }
        ]
      }
    ],
    bestSeller: true
  },
  {
    id: 4,
    title: "Insulated Mountain Parka Jacket",
    brand: "The North Face",
    category: "jackets",
    gender: "men",
    description: "A weatherproof parka with recycled insulation, an adjustable storm hood, and sealed seams for reliable cold-weather protection.",
    currentPrice: 189.99,
    oldPrice: 260,
    discount: 27,
    rating: 4.8,
    reviewCount: 174,
    stock: true,
    material: "Nylon shell with recycled fill",
    fit: "Regular Fit",
    season: "All Season",
    condition: "New with Tags",
    images: [
      img('parka-tnf', 1),
      img('parka-tnf', 2),
      img('parka-tnf', 3),
      img('parka-tnf', 4)
    ],
    colors: [
      {
        name: "Black",
        code: "#111827",
        sku: "TNF-JAC-4-BLACK",
        sizes: [
          {
            name: "M",
            code: "M",
            sku: "TNF-JAC-4-BLACK-M",
            ebayAffiliateUrl: "https://www.ebay.com/itm/aff-tnf-parka-004-black-m",
            depopAffiliateUrl: "https://www.depop.com/products/aff-tnf-parka-004-black-m"
          },
          {
            name: "L",
            code: "L",
            sku: "TNF-JAC-4-BLACK-L",
            ebayAffiliateUrl: "https://www.ebay.com/itm/aff-tnf-parka-004-black-l",
            depopAffiliateUrl: "https://www.depop.com/products/aff-tnf-parka-004-black-l"
          }
        ]
      },
      {
        name: "Green",
        code: "#10B981",
        sku: "TNF-JAC-4-GREEN",
        sizes: [
          {
            name: "M",
            code: "M",
            sku: "TNF-JAC-4-GREEN-M",
            ebayAffiliateUrl: "https://www.ebay.com/itm/aff-tnf-parka-004-green-m",
            depopAffiliateUrl: "https://www.depop.com/products/aff-tnf-parka-004-green-m"
          },
          {
            name: "L",
            code: "L",
            sku: "TNF-JAC-4-GREEN-L",
            ebayAffiliateUrl: "https://www.ebay.com/itm/aff-tnf-parka-004-green-l",
            depopAffiliateUrl: "https://www.depop.com/products/aff-tnf-parka-004-green-l"
          }
        ]
      }
    ],
    bestSeller: true
  },
  {
    id: 5,
    title: "Relaxed Fit Cargo Shorts",
    brand: "Carhartt WIP",
    category: "shorts",
    gender: "men",
    description: "Durable ripstop cargo shorts with multiple utility pockets, a reinforced waistband, and a relaxed silhouette built for everyday wear.",
    currentPrice: 39,
    oldPrice: 52,
    discount: 25,
    rating: 4.5,
    reviewCount: 96,
    stock: true,
    material: "Cotton twill",
    fit: "Relaxed Fit",
    season: "All Season",
    condition: "New with Tags",
    images: [
      img('shorts-carhartt', 1),
      img('shorts-carhartt', 2),
      img('shorts-carhartt', 3),
      img('shorts-carhartt', 4)
    ],
    colors: [
      {
        name: "Green",
        code: "#10B981",
        sku: "CW-SHO-5-GREEN",
        sizes: [
          {
            name: "S",
            code: "S",
            sku: "CW-SHO-5-GREEN-S",
            ebayAffiliateUrl: "https://www.ebay.com/itm/aff-carhartt-shorts-005-green-s",
            depopAffiliateUrl: "https://www.depop.com/products/aff-carhartt-shorts-005-green-s"
          },
          {
            name: "M",
            code: "M",
            sku: "CW-SHO-5-GREEN-M",
            ebayAffiliateUrl: "https://www.ebay.com/itm/aff-carhartt-shorts-005-green-m",
            depopAffiliateUrl: "https://www.depop.com/products/aff-carhartt-shorts-005-green-m"
          }
        ]
      },
      {
        name: "Black",
        code: "#111827",
        sku: "CW-SHO-5-BLACK",
        sizes: [
          {
            name: "S",
            code: "S",
            sku: "CW-SHO-5-BLACK-S",
            ebayAffiliateUrl: "https://www.ebay.com/itm/aff-carhartt-shorts-005-black-s",
            depopAffiliateUrl: "https://www.depop.com/products/aff-carhartt-shorts-005-black-s"
          },
          {
            name: "M",
            code: "M",
            sku: "CW-SHO-5-BLACK-M",
            ebayAffiliateUrl: "https://www.ebay.com/itm/aff-carhartt-shorts-005-black-m",
            depopAffiliateUrl: "https://www.depop.com/products/aff-carhartt-shorts-005-black-m"
          }
        ]
      }
    ],
    bestSeller: false
  },
  {
    id: 6,
    title: "Oversized Fleece Hoodie",
    brand: "Fear of God Essentials",
    category: "hoodies",
    gender: "women",
    description: "An oversized silhouette in heavyweight fleece with dropped shoulders and a boxy fit, finished with signature rubberized branding.",
    currentPrice: 98,
    oldPrice: 130,
    discount: 25,
    rating: 4.7,
    reviewCount: 402,
    stock: true,
    material: "Cotton-polyester fleece blend",
    fit: "Relaxed Fit",
    season: "All Season",
    condition: "New with Tags",
    images: [
      img('hoodie-fog', 1),
      img('hoodie-fog', 2),
      img('hoodie-fog', 3),
      img('hoodie-fog', 4)
    ],
    colors: [
      {
        name: "Gray",
        code: "#9CA3AF",
        sku: "FOGE-HOO-6-GRAY",
        sizes: [
          {
            name: "S",
            code: "S",
            sku: "FOGE-HOO-6-GRAY-S",
            ebayAffiliateUrl: "https://www.ebay.com/itm/aff-fog-hoodie-006-gray-s",
            depopAffiliateUrl: "https://www.depop.com/products/aff-fog-hoodie-006-gray-s"
          },
          {
            name: "M",
            code: "M",
            sku: "FOGE-HOO-6-GRAY-M",
            ebayAffiliateUrl: "https://www.ebay.com/itm/aff-fog-hoodie-006-gray-m",
            depopAffiliateUrl: "https://www.depop.com/products/aff-fog-hoodie-006-gray-m"
          }
        ]
      },
      {
        name: "Black",
        code: "#111827",
        sku: "FOGE-HOO-6-BLACK",
        sizes: [
          {
            name: "S",
            code: "S",
            sku: "FOGE-HOO-6-BLACK-S",
            ebayAffiliateUrl: "https://www.ebay.com/itm/aff-fog-hoodie-006-black-s",
            depopAffiliateUrl: "https://www.depop.com/products/aff-fog-hoodie-006-black-s"
          },
          {
            name: "M",
            code: "M",
            sku: "FOGE-HOO-6-BLACK-M",
            ebayAffiliateUrl: "https://www.ebay.com/itm/aff-fog-hoodie-006-black-m",
            depopAffiliateUrl: "https://www.depop.com/products/aff-fog-hoodie-006-black-m"
          }
        ]
      }
    ],
    bestSeller: true
  },
  {
    id: 7,
    title: "High-Waist Wide Leg Trousers",
    brand: "Zara",
    category: "pants",
    gender: "women",
    description: "Flowing wide-leg trousers with a tailored high waist and a fluid drape, cut from a soft crepe fabric for a polished silhouette.",
    currentPrice: 45.9,
    oldPrice: 59.9,
    discount: 23,
    rating: 4.3,
    reviewCount: 158,
    stock: true,
    material: "Cotton twill",
    fit: "Regular Fit",
    season: "All Season",
    condition: "New with Tags",
    images: [
      img('trousers-zara', 1),
      img('trousers-zara', 2),
      img('trousers-zara', 3),
      img('trousers-zara', 4)
    ],
    colors: [
      {
        name: "Black",
        code: "#111827",
        sku: "Z-PAN-7-BLACK",
        sizes: [
          {
            name: "S",
            code: "S",
            sku: "Z-PAN-7-BLACK-S",
            ebayAffiliateUrl: "https://www.ebay.com/itm/aff-zara-trousers-007-black-s",
            depopAffiliateUrl: "https://www.depop.com/products/aff-zara-trousers-007-black-s"
          },
          {
            name: "M",
            code: "M",
            sku: "Z-PAN-7-BLACK-M",
            ebayAffiliateUrl: "https://www.ebay.com/itm/aff-zara-trousers-007-black-m",
            depopAffiliateUrl: "https://www.depop.com/products/aff-zara-trousers-007-black-m"
          }
        ]
      },
      {
        name: "Gray",
        code: "#9CA3AF",
        sku: "Z-PAN-7-GRAY",
        sizes: [
          {
            name: "S",
            code: "S",
            sku: "Z-PAN-7-GRAY-S",
            ebayAffiliateUrl: "https://www.ebay.com/itm/aff-zara-trousers-007-gray-s",
            depopAffiliateUrl: "https://www.depop.com/products/aff-zara-trousers-007-gray-s"
          },
          {
            name: "M",
            code: "M",
            sku: "Z-PAN-7-GRAY-M",
            ebayAffiliateUrl: "https://www.ebay.com/itm/aff-zara-trousers-007-gray-m",
            depopAffiliateUrl: "https://www.depop.com/products/aff-zara-trousers-007-gray-m"
          }
        ]
      }
    ],
    bestSeller: false
  },
  {
    id: 8,
    title: "Ribbed Cropped Tank Tee",
    brand: "Stussy",
    category: "t-shirts",
    gender: "women",
    description: "A cropped, ribbed tank in a stretch cotton blend with a fitted silhouette and clean, minimal branding at the hem.",
    currentPrice: 22,
    oldPrice: 30,
    discount: 27,
    rating: 4.5,
    reviewCount: 87,
    stock: true,
    material: "100% combed cotton jersey",
    fit: "Regular Fit",
    season: "All Season",
    condition: "New with Tags",
    images: [
      img('tank-stussy', 1),
      img('tank-stussy', 2),
      img('tank-stussy', 3),
      img('tank-stussy', 4)
    ],
    colors: [
      {
        name: "White",
        code: "#FFFFFF",
        sku: "S-T-S-8-WHITE",
        sizes: [
          {
            name: "S",
            code: "S",
            sku: "S-T-S-8-WHITE-S",
            ebayAffiliateUrl: "https://www.ebay.com/itm/aff-stussy-tank-008-white-s",
            depopAffiliateUrl: "https://www.depop.com/products/aff-stussy-tank-008-white-s"
          },
          {
            name: "M",
            code: "M",
            sku: "S-T-S-8-WHITE-M",
            ebayAffiliateUrl: "https://www.ebay.com/itm/aff-stussy-tank-008-white-m",
            depopAffiliateUrl: "https://www.depop.com/products/aff-stussy-tank-008-white-m"
          }
        ]
      },
      {
        name: "Black",
        code: "#111827",
        sku: "S-T-S-8-BLACK",
        sizes: [
          {
            name: "S",
            code: "S",
            sku: "S-T-S-8-BLACK-S",
            ebayAffiliateUrl: "https://www.ebay.com/itm/aff-stussy-tank-008-black-s",
            depopAffiliateUrl: "https://www.depop.com/products/aff-stussy-tank-008-black-s"
          },
          {
            name: "M",
            code: "M",
            sku: "S-T-S-8-BLACK-M",
            ebayAffiliateUrl: "https://www.ebay.com/itm/aff-stussy-tank-008-black-m",
            depopAffiliateUrl: "https://www.depop.com/products/aff-stussy-tank-008-black-m"
          }
        ]
      }
    ],
    bestSeller: true
  },
  {
    id: 9,
    title: "Windbreaker Track Jacket",
    brand: "Adidas",
    category: "jackets",
    gender: "women",
    description: "A lightweight track jacket with a full front zip, ribbed collar, and iconic three-stripe sleeve detailing.",
    currentPrice: 58,
    oldPrice: 80,
    discount: 28,
    rating: 4.6,
    reviewCount: 233,
    stock: true,
    material: "Nylon shell with recycled fill",
    fit: "Regular Fit",
    season: "All Season",
    condition: "New with Tags",
    images: [
      img('jacket-adidas', 1),
      img('jacket-adidas', 2),
      img('jacket-adidas', 3),
      img('jacket-adidas', 4)
    ],
    colors: [
      {
        name: "Blue",
        code: "#0064D2",
        sku: "A-JAC-9-BLUE",
        sizes: [
          {
            name: "S",
            code: "S",
            sku: "A-JAC-9-BLUE-S",
            ebayAffiliateUrl: "https://www.ebay.com/itm/aff-adidas-jacket-009-blue-s",
            depopAffiliateUrl: "https://www.depop.com/products/aff-adidas-jacket-009-blue-s"
          },
          {
            name: "M",
            code: "M",
            sku: "A-JAC-9-BLUE-M",
            ebayAffiliateUrl: "https://www.ebay.com/itm/aff-adidas-jacket-009-blue-m",
            depopAffiliateUrl: "https://www.depop.com/products/aff-adidas-jacket-009-blue-m"
          }
        ]
      },
      {
        name: "Black",
        code: "#111827",
        sku: "A-JAC-9-BLACK",
        sizes: [
          {
            name: "S",
            code: "S",
            sku: "A-JAC-9-BLACK-S",
            ebayAffiliateUrl: "https://www.ebay.com/itm/aff-adidas-jacket-009-black-s",
            depopAffiliateUrl: "https://www.depop.com/products/aff-adidas-jacket-009-black-s"
          },
          {
            name: "M",
            code: "M",
            sku: "A-JAC-9-BLACK-M",
            ebayAffiliateUrl: "https://www.ebay.com/itm/aff-adidas-jacket-009-black-m",
            depopAffiliateUrl: "https://www.depop.com/products/aff-adidas-jacket-009-black-m"
          }
        ]
      }
    ],
    bestSeller: true
  },
  {
    id: 10,
    title: "Tailored Bermuda Shorts",
    brand: "Ralph Lauren",
    category: "shorts",
    gender: "women",
    description: "Smart tailored bermuda shorts in a structured cotton twill with a clean waistband and side seam pockets.",
    currentPrice: 49,
    oldPrice: 65,
    discount: 25,
    rating: 4.4,
    reviewCount: 64,
    stock: true,
    material: "Cotton twill",
    fit: "Relaxed Fit",
    season: "All Season",
    condition: "New with Tags",
    images: [
      img('shorts-rl', 1),
      img('shorts-rl', 2),
      img('shorts-rl', 3),
      img('shorts-rl', 4)
    ],
    colors: [
      {
        name: "White",
        code: "#FFFFFF",
        sku: "RL-SHO-10-WHITE",
        sizes: [
          {
            name: "S",
            code: "S",
            sku: "RL-SHO-10-WHITE-S",
            ebayAffiliateUrl: "https://www.ebay.com/itm/aff-rl-shorts-010-white-s",
            depopAffiliateUrl: "https://www.depop.com/products/aff-rl-shorts-010-white-s"
          },
          {
            name: "M",
            code: "M",
            sku: "RL-SHO-10-WHITE-M",
            ebayAffiliateUrl: "https://www.ebay.com/itm/aff-rl-shorts-010-white-m",
            depopAffiliateUrl: "https://www.depop.com/products/aff-rl-shorts-010-white-m"
          }
        ]
      },
      {
        name: "Gray",
        code: "#9CA3AF",
        sku: "RL-SHO-10-GRAY",
        sizes: [
          {
            name: "S",
            code: "S",
            sku: "RL-SHO-10-GRAY-S",
            ebayAffiliateUrl: "https://www.ebay.com/itm/aff-rl-shorts-010-gray-s",
            depopAffiliateUrl: "https://www.depop.com/products/aff-rl-shorts-010-gray-s"
          },
          {
            name: "M",
            code: "M",
            sku: "RL-SHO-10-GRAY-M",
            ebayAffiliateUrl: "https://www.ebay.com/itm/aff-rl-shorts-010-gray-m",
            depopAffiliateUrl: "https://www.depop.com/products/aff-rl-shorts-010-gray-m"
          }
        ]
      }
    ],
    bestSeller: false
  },
  {
    id: 11,
    title: "Retro Runner Sneaker Hoodie Set Tee",
    brand: "New Balance",
    category: "t-shirts",
    gender: "men",
    description: "A heavyweight cotton tee featuring a retro-inspired graphic print, ribbed collar, and a true-to-size regular fit.",
    currentPrice: 24.99,
    oldPrice: 32,
    discount: 22,
    rating: 4.2,
    reviewCount: 118,
    stock: true,
    material: "100% combed cotton jersey",
    fit: "Regular Fit",
    season: "All Season",
    condition: "New with Tags",
    images: [
      img('tee-nb', 1),
      img('tee-nb', 2),
      img('tee-nb', 3),
      img('tee-nb', 4)
    ],
    colors: [
      {
        name: "Gray",
        code: "#9CA3AF",
        sku: "NB-T-S-11-GRAY",
        sizes: [
          {
            name: "S",
            code: "S",
            sku: "NB-T-S-11-GRAY-S",
            ebayAffiliateUrl: "https://www.ebay.com/itm/aff-nb-tee-011-gray-s",
            depopAffiliateUrl: "https://www.depop.com/products/aff-nb-tee-011-gray-s"
          },
          {
            name: "M",
            code: "M",
            sku: "NB-T-S-11-GRAY-M",
            ebayAffiliateUrl: "https://www.ebay.com/itm/aff-nb-tee-011-gray-m",
            depopAffiliateUrl: "https://www.depop.com/products/aff-nb-tee-011-gray-m"
          }
        ]
      },
      {
        name: "Black",
        code: "#111827",
        sku: "NB-T-S-11-BLACK",
        sizes: [
          {
            name: "S",
            code: "S",
            sku: "NB-T-S-11-BLACK-S",
            ebayAffiliateUrl: "https://www.ebay.com/itm/aff-nb-tee-011-black-s",
            depopAffiliateUrl: "https://www.depop.com/products/aff-nb-tee-011-black-s"
          },
          {
            name: "M",
            code: "M",
            sku: "NB-T-S-11-BLACK-M",
            ebayAffiliateUrl: "https://www.ebay.com/itm/aff-nb-tee-011-black-m",
            depopAffiliateUrl: "https://www.depop.com/products/aff-nb-tee-011-black-m"
          }
        ]
      }
    ],
    bestSeller: false
  },
  {
    id: 12,
    title: "Quilted Puffer Vest",
    brand: "Patagonia",
    category: "jackets",
    gender: "men",
    description: "A packable, recycled-fill puffer vest with quilted baffles, a stand collar, and zippered hand pockets for cold days.",
    currentPrice: 89,
    oldPrice: 120,
    discount: 26,
    rating: 4.7,
    reviewCount: 145,
    stock: true,
    material: "Nylon shell with recycled fill",
    fit: "Regular Fit",
    season: "All Season",
    condition: "New with Tags",
    images: [
      img('vest-patagonia', 1),
      img('vest-patagonia', 2),
      img('vest-patagonia', 3),
      img('vest-patagonia', 4)
    ],
    colors: [
      {
        name: "Black",
        code: "#111827",
        sku: "P-JAC-12-BLACK",
        sizes: [
          {
            name: "M",
            code: "M",
            sku: "P-JAC-12-BLACK-M",
            ebayAffiliateUrl: "https://www.ebay.com/itm/aff-patagonia-vest-012-black-m",
            depopAffiliateUrl: "https://www.depop.com/products/aff-patagonia-vest-012-black-m"
          },
          {
            name: "L",
            code: "L",
            sku: "P-JAC-12-BLACK-L",
            ebayAffiliateUrl: "https://www.ebay.com/itm/aff-patagonia-vest-012-black-l",
            depopAffiliateUrl: "https://www.depop.com/products/aff-patagonia-vest-012-black-l"
          }
        ]
      },
      {
        name: "Green",
        code: "#10B981",
        sku: "P-JAC-12-GREEN",
        sizes: [
          {
            name: "M",
            code: "M",
            sku: "P-JAC-12-GREEN-M",
            ebayAffiliateUrl: "https://www.ebay.com/itm/aff-patagonia-vest-012-green-m",
            depopAffiliateUrl: "https://www.depop.com/products/aff-patagonia-vest-012-green-m"
          },
          {
            name: "L",
            code: "L",
            sku: "P-JAC-12-GREEN-L",
            ebayAffiliateUrl: "https://www.ebay.com/itm/aff-patagonia-vest-012-green-l",
            depopAffiliateUrl: "https://www.depop.com/products/aff-patagonia-vest-012-green-l"
          }
        ]
      }
    ],
    bestSeller: true
  },
  {
    id: 13,
    title: "Slim Fit Chino Pants",
    brand: "Zara",
    category: "pants",
    gender: "men",
    description: "Slim-fit chinos in a stretch cotton twill, tapered through the leg with a clean flat front for a modern silhouette.",
    currentPrice: 36.9,
    oldPrice: 49.9,
    discount: 26,
    rating: 4.3,
    reviewCount: 92,
    stock: true,
    material: "Cotton twill",
    fit: "Regular Fit",
    season: "All Season",
    condition: "New with Tags",
    images: [
      img('chino-zara', 1),
      img('chino-zara', 2),
      img('chino-zara', 3),
      img('chino-zara', 4)
    ],
    colors: [
      {
        name: "Gray",
        code: "#9CA3AF",
        sku: "Z-PAN-13-GRAY",
        sizes: [
          {
            name: "S",
            code: "S",
            sku: "Z-PAN-13-GRAY-S",
            ebayAffiliateUrl: "https://www.ebay.com/itm/aff-zara-chino-013-gray-s",
            depopAffiliateUrl: "https://www.depop.com/products/aff-zara-chino-013-gray-s"
          },
          {
            name: "M",
            code: "M",
            sku: "Z-PAN-13-GRAY-M",
            ebayAffiliateUrl: "https://www.ebay.com/itm/aff-zara-chino-013-gray-m",
            depopAffiliateUrl: "https://www.depop.com/products/aff-zara-chino-013-gray-m"
          }
        ]
      },
      {
        name: "Black",
        code: "#111827",
        sku: "Z-PAN-13-BLACK",
        sizes: [
          {
            name: "S",
            code: "S",
            sku: "Z-PAN-13-BLACK-S",
            ebayAffiliateUrl: "https://www.ebay.com/itm/aff-zara-chino-013-black-s",
            depopAffiliateUrl: "https://www.depop.com/products/aff-zara-chino-013-black-s"
          },
          {
            name: "M",
            code: "M",
            sku: "Z-PAN-13-BLACK-M",
            ebayAffiliateUrl: "https://www.ebay.com/itm/aff-zara-chino-013-black-m",
            depopAffiliateUrl: "https://www.depop.com/products/aff-zara-chino-013-black-m"
          }
        ]
      }
    ],
    bestSeller: false
  },
  {
    id: 14,
    title: "Cropped Zip-Up Hoodie",
    brand: "Adidas",
    category: "hoodies",
    gender: "women",
    description: "A cropped zip-up hoodie in soft brushed fleece with a relaxed shoulder and ribbed hem for a cinched silhouette.",
    currentPrice: 47,
    oldPrice: 62,
    discount: 24,
    rating: 4.5,
    reviewCount: 176,
    stock: true,
    material: "Cotton-polyester fleece blend",
    fit: "Relaxed Fit",
    season: "All Season",
    condition: "New with Tags",
    images: [
      img('hoodie-adidas', 1),
      img('hoodie-adidas', 2),
      img('hoodie-adidas', 3),
      img('hoodie-adidas', 4)
    ],
    colors: [
      {
        name: "Black",
        code: "#111827",
        sku: "A-HOO-14-BLACK",
        sizes: [
          {
            name: "S",
            code: "S",
            sku: "A-HOO-14-BLACK-S",
            ebayAffiliateUrl: "https://www.ebay.com/itm/aff-adidas-hoodie-014-black-s",
            depopAffiliateUrl: "https://www.depop.com/products/aff-adidas-hoodie-014-black-s"
          },
          {
            name: "M",
            code: "M",
            sku: "A-HOO-14-BLACK-M",
            ebayAffiliateUrl: "https://www.ebay.com/itm/aff-adidas-hoodie-014-black-m",
            depopAffiliateUrl: "https://www.depop.com/products/aff-adidas-hoodie-014-black-m"
          }
        ]
      },
      {
        name: "White",
        code: "#FFFFFF",
        sku: "A-HOO-14-WHITE",
        sizes: [
          {
            name: "S",
            code: "S",
            sku: "A-HOO-14-WHITE-S",
            ebayAffiliateUrl: "https://www.ebay.com/itm/aff-adidas-hoodie-014-white-s",
            depopAffiliateUrl: "https://www.depop.com/products/aff-adidas-hoodie-014-white-s"
          },
          {
            name: "M",
            code: "M",
            sku: "A-HOO-14-WHITE-M",
            ebayAffiliateUrl: "https://www.ebay.com/itm/aff-adidas-hoodie-014-white-m",
            depopAffiliateUrl: "https://www.depop.com/products/aff-adidas-hoodie-014-white-m"
          }
        ]
      }
    ],
    bestSeller: true
  },
  {
    id: 15,
    title: "Vintage Wash Denim Shorts",
    brand: "Levi's",
    category: "shorts",
    gender: "women",
    description: "High-rise denim shorts in a vintage wash with a raw hem finish and a relaxed, easy fit through the leg.",
    currentPrice: 32,
    oldPrice: 44,
    discount: 27,
    rating: 4.4,
    reviewCount: 121,
    stock: true,
    material: "Cotton twill",
    fit: "Relaxed Fit",
    season: "All Season",
    condition: "New with Tags",
    images: [
      img('shorts-levis', 1),
      img('shorts-levis', 2),
      img('shorts-levis', 3),
      img('shorts-levis', 4)
    ],
    colors: [
      {
        name: "Blue",
        code: "#0064D2",
        sku: "L-SHO-15-BLUE",
        sizes: [
          {
            name: "S",
            code: "S",
            sku: "L-SHO-15-BLUE-S",
            ebayAffiliateUrl: "https://www.ebay.com/itm/aff-levis-shorts-015-blue-s",
            depopAffiliateUrl: "https://www.depop.com/products/aff-levis-shorts-015-blue-s"
          },
          {
            name: "M",
            code: "M",
            sku: "L-SHO-15-BLUE-M",
            ebayAffiliateUrl: "https://www.ebay.com/itm/aff-levis-shorts-015-blue-m",
            depopAffiliateUrl: "https://www.depop.com/products/aff-levis-shorts-015-blue-m"
          }
        ]
      },
      {
        name: "White",
        code: "#FFFFFF",
        sku: "L-SHO-15-WHITE",
        sizes: [
          {
            name: "S",
            code: "S",
            sku: "L-SHO-15-WHITE-S",
            ebayAffiliateUrl: "https://www.ebay.com/itm/aff-levis-shorts-015-white-s",
            depopAffiliateUrl: "https://www.depop.com/products/aff-levis-shorts-015-white-s"
          },
          {
            name: "M",
            code: "M",
            sku: "L-SHO-15-WHITE-M",
            ebayAffiliateUrl: "https://www.ebay.com/itm/aff-levis-shorts-015-white-m",
            depopAffiliateUrl: "https://www.depop.com/products/aff-levis-shorts-015-white-m"
          }
        ]
      }
    ],
    bestSeller: false
  },
  {
    id: 16,
    title: "Structured Bomber Jacket",
    brand: "Nike",
    category: "jackets",
    gender: "women",
    description: "A structured bomber with a ribbed collar and cuffs, snap-button placket, and a lightly padded body for year-round layering.",
    currentPrice: 76,
    oldPrice: 100,
    discount: 24,
    rating: 4.6,
    reviewCount: 209,
    stock: true,
    material: "Nylon shell with recycled fill",
    fit: "Regular Fit",
    season: "All Season",
    condition: "New with Tags",
    images: [
      img('bomber-nike', 1),
      img('bomber-nike', 2),
      img('bomber-nike', 3),
      img('bomber-nike', 4)
    ],
    colors: [
      {
        name: "Black",
        code: "#111827",
        sku: "N-JAC-16-BLACK",
        sizes: [
          {
            name: "S",
            code: "S",
            sku: "N-JAC-16-BLACK-S",
            ebayAffiliateUrl: "https://www.ebay.com/itm/aff-nike-bomber-016-black-s",
            depopAffiliateUrl: "https://www.depop.com/products/aff-nike-bomber-016-black-s"
          },
          {
            name: "M",
            code: "M",
            sku: "N-JAC-16-BLACK-M",
            ebayAffiliateUrl: "https://www.ebay.com/itm/aff-nike-bomber-016-black-m",
            depopAffiliateUrl: "https://www.depop.com/products/aff-nike-bomber-016-black-m"
          }
        ]
      },
      {
        name: "Green",
        code: "#10B981",
        sku: "N-JAC-16-GREEN",
        sizes: [
          {
            name: "S",
            code: "S",
            sku: "N-JAC-16-GREEN-S",
            ebayAffiliateUrl: "https://www.ebay.com/itm/aff-nike-bomber-016-green-s",
            depopAffiliateUrl: "https://www.depop.com/products/aff-nike-bomber-016-green-s"
          },
          {
            name: "M",
            code: "M",
            sku: "N-JAC-16-GREEN-M",
            ebayAffiliateUrl: "https://www.ebay.com/itm/aff-nike-bomber-016-green-m",
            depopAffiliateUrl: "https://www.depop.com/products/aff-nike-bomber-016-green-m"
          }
        ]
      }
    ],
    bestSeller: true
  },
  {
    id: 17,
    title: "Heavyweight Graphic Tee",
    brand: "Stussy",
    category: "t-shirts",
    gender: "men",
    description: "A boxy-fit heavyweight tee in 100% cotton jersey with a bold front graphic and a durable ribbed collar.",
    currentPrice: 28,
    oldPrice: 38,
    discount: 26,
    rating: 4.5,
    reviewCount: 267,
    stock: true,
    material: "100% combed cotton jersey",
    fit: "Regular Fit",
    season: "All Season",
    condition: "New with Tags",
    images: [
      img('tee-stussy', 1),
      img('tee-stussy', 2),
      img('tee-stussy', 3),
      img('tee-stussy', 4)
    ],
    colors: [
      {
        name: "White",
        code: "#FFFFFF",
        sku: "S-T-S-17-WHITE",
        sizes: [
          {
            name: "S",
            code: "S",
            sku: "S-T-S-17-WHITE-S",
            ebayAffiliateUrl: "https://www.ebay.com/itm/aff-stussy-tee-017-white-s",
            depopAffiliateUrl: "https://www.depop.com/products/aff-stussy-tee-017-white-s"
          },
          {
            name: "M",
            code: "M",
            sku: "S-T-S-17-WHITE-M",
            ebayAffiliateUrl: "https://www.ebay.com/itm/aff-stussy-tee-017-white-m",
            depopAffiliateUrl: "https://www.depop.com/products/aff-stussy-tee-017-white-m"
          }
        ]
      },
      {
        name: "Black",
        code: "#111827",
        sku: "S-T-S-17-BLACK",
        sizes: [
          {
            name: "S",
            code: "S",
            sku: "S-T-S-17-BLACK-S",
            ebayAffiliateUrl: "https://www.ebay.com/itm/aff-stussy-tee-017-black-s",
            depopAffiliateUrl: "https://www.depop.com/products/aff-stussy-tee-017-black-s"
          },
          {
            name: "M",
            code: "M",
            sku: "S-T-S-17-BLACK-M",
            ebayAffiliateUrl: "https://www.ebay.com/itm/aff-stussy-tee-017-black-m",
            depopAffiliateUrl: "https://www.depop.com/products/aff-stussy-tee-017-black-m"
          }
        ]
      }
    ],
    bestSeller: true
  },
  {
    id: 18,
    title: "Fleece Jogger Sweatpants",
    brand: "Champion",
    category: "pants",
    gender: "men",
    description: "Classic fleece joggers with an elastic drawstring waist, tapered leg, and ribbed cuffs for all-day comfort.",
    currentPrice: 33,
    oldPrice: 45,
    discount: 27,
    rating: 4.4,
    reviewCount: 189,
    stock: true,
    material: "Cotton twill",
    fit: "Regular Fit",
    season: "All Season",
    condition: "New with Tags",
    images: [
      img('joggers-champion', 1),
      img('joggers-champion', 2),
      img('joggers-champion', 3),
      img('joggers-champion', 4)
    ],
    colors: [
      {
        name: "Gray",
        code: "#9CA3AF",
        sku: "C-PAN-18-GRAY",
        sizes: [
          {
            name: "S",
            code: "S",
            sku: "C-PAN-18-GRAY-S",
            ebayAffiliateUrl: "https://www.ebay.com/itm/aff-champion-joggers-018-gray-s",
            depopAffiliateUrl: "https://www.depop.com/products/aff-champion-joggers-018-gray-s"
          },
          {
            name: "M",
            code: "M",
            sku: "C-PAN-18-GRAY-M",
            ebayAffiliateUrl: "https://www.ebay.com/itm/aff-champion-joggers-018-gray-m",
            depopAffiliateUrl: "https://www.depop.com/products/aff-champion-joggers-018-gray-m"
          }
        ]
      },
      {
        name: "Black",
        code: "#111827",
        sku: "C-PAN-18-BLACK",
        sizes: [
          {
            name: "S",
            code: "S",
            sku: "C-PAN-18-BLACK-S",
            ebayAffiliateUrl: "https://www.ebay.com/itm/aff-champion-joggers-018-black-s",
            depopAffiliateUrl: "https://www.depop.com/products/aff-champion-joggers-018-black-s"
          },
          {
            name: "M",
            code: "M",
            sku: "C-PAN-18-BLACK-M",
            ebayAffiliateUrl: "https://www.ebay.com/itm/aff-champion-joggers-018-black-m",
            depopAffiliateUrl: "https://www.depop.com/products/aff-champion-joggers-018-black-m"
          }
        ]
      }
    ],
    bestSeller: false
  },
  {
    id: 19,
    title: "Utility Trail Shorts",
    brand: "The North Face",
    category: "shorts",
    gender: "men",
    description: "Quick-dry utility shorts with a mesh lining, multiple pockets, and an adjustable waistband built for trail days.",
    currentPrice: 41,
    oldPrice: 55,
    discount: 25,
    rating: 4.5,
    reviewCount: 78,
    stock: true,
    material: "Cotton twill",
    fit: "Relaxed Fit",
    season: "All Season",
    condition: "New with Tags",
    images: [
      img('shorts-tnf', 1),
      img('shorts-tnf', 2),
      img('shorts-tnf', 3),
      img('shorts-tnf', 4)
    ],
    colors: [
      {
        name: "Green",
        code: "#10B981",
        sku: "TNF-SHO-19-GREEN",
        sizes: [
          {
            name: "S",
            code: "S",
            sku: "TNF-SHO-19-GREEN-S",
            ebayAffiliateUrl: "https://www.ebay.com/itm/aff-tnf-shorts-019-green-s",
            depopAffiliateUrl: "https://www.depop.com/products/aff-tnf-shorts-019-green-s"
          },
          {
            name: "M",
            code: "M",
            sku: "TNF-SHO-19-GREEN-M",
            ebayAffiliateUrl: "https://www.ebay.com/itm/aff-tnf-shorts-019-green-m",
            depopAffiliateUrl: "https://www.depop.com/products/aff-tnf-shorts-019-green-m"
          }
        ]
      },
      {
        name: "Gray",
        code: "#9CA3AF",
        sku: "TNF-SHO-19-GRAY",
        sizes: [
          {
            name: "S",
            code: "S",
            sku: "TNF-SHO-19-GRAY-S",
            ebayAffiliateUrl: "https://www.ebay.com/itm/aff-tnf-shorts-019-gray-s",
            depopAffiliateUrl: "https://www.depop.com/products/aff-tnf-shorts-019-gray-s"
          },
          {
            name: "M",
            code: "M",
            sku: "TNF-SHO-19-GRAY-M",
            ebayAffiliateUrl: "https://www.ebay.com/itm/aff-tnf-shorts-019-gray-m",
            depopAffiliateUrl: "https://www.depop.com/products/aff-tnf-shorts-019-gray-m"
          }
        ]
      }
    ],
    bestSeller: false
  },
  {
    id: 20,
    title: "Essential Pullover Hoodie",
    brand: "Fear of God Essentials",
    category: "hoodies",
    gender: "men",
    description: "A minimalist pullover hoodie in a mid-weight cotton blend with a relaxed fit and dropped shoulder seams.",
    currentPrice: 92,
    oldPrice: 125,
    discount: 26,
    rating: 4.8,
    reviewCount: 356,
    stock: true,
    material: "Cotton-polyester fleece blend",
    fit: "Relaxed Fit",
    season: "All Season",
    condition: "New with Tags",
    images: [
      img('hoodie-fog2', 1),
      img('hoodie-fog2', 2),
      img('hoodie-fog2', 3),
      img('hoodie-fog2', 4)
    ],
    colors: [
      {
        name: "Gray",
        code: "#9CA3AF",
        sku: "FOGE-HOO-20-GRAY",
        sizes: [
          {
            name: "S",
            code: "S",
            sku: "FOGE-HOO-20-GRAY-S",
            ebayAffiliateUrl: "https://www.ebay.com/itm/aff-fog-hoodie-020-gray-s",
            depopAffiliateUrl: "https://www.depop.com/products/aff-fog-hoodie-020-gray-s"
          },
          {
            name: "M",
            code: "M",
            sku: "FOGE-HOO-20-GRAY-M",
            ebayAffiliateUrl: "https://www.ebay.com/itm/aff-fog-hoodie-020-gray-m",
            depopAffiliateUrl: "https://www.depop.com/products/aff-fog-hoodie-020-gray-m"
          }
        ]
      },
      {
        name: "White",
        code: "#FFFFFF",
        sku: "FOGE-HOO-20-WHITE",
        sizes: [
          {
            name: "S",
            code: "S",
            sku: "FOGE-HOO-20-WHITE-S",
            ebayAffiliateUrl: "https://www.ebay.com/itm/aff-fog-hoodie-020-white-s",
            depopAffiliateUrl: "https://www.depop.com/products/aff-fog-hoodie-020-white-s"
          },
          {
            name: "M",
            code: "M",
            sku: "FOGE-HOO-20-WHITE-M",
            ebayAffiliateUrl: "https://www.ebay.com/itm/aff-fog-hoodie-020-white-m",
            depopAffiliateUrl: "https://www.depop.com/products/aff-fog-hoodie-020-white-m"
          }
        ]
      }
    ],
    bestSeller: true
  },
  {
    id: 21,
    title: "Satin Slip Midi Skirt Pants Set Tee",
    brand: "Zara",
    category: "t-shirts",
    gender: "women",
    description: "A fitted rib-knit tee with a scooped neckline and stretch construction designed to layer cleanly under jackets.",
    currentPrice: 19.9,
    oldPrice: 27.9,
    discount: 29,
    rating: 4.3,
    reviewCount: 143,
    stock: true,
    material: "100% combed cotton jersey",
    fit: "Regular Fit",
    season: "All Season",
    condition: "New with Tags",
    images: [
      img('tee-zara', 1),
      img('tee-zara', 2),
      img('tee-zara', 3),
      img('tee-zara', 4)
    ],
    colors: [
      {
        name: "White",
        code: "#FFFFFF",
        sku: "Z-T-S-21-WHITE",
        sizes: [
          {
            name: "S",
            code: "S",
            sku: "Z-T-S-21-WHITE-S",
            ebayAffiliateUrl: "https://www.ebay.com/itm/aff-zara-tee-021-white-s",
            depopAffiliateUrl: "https://www.depop.com/products/aff-zara-tee-021-white-s"
          },
          {
            name: "M",
            code: "M",
            sku: "Z-T-S-21-WHITE-M",
            ebayAffiliateUrl: "https://www.ebay.com/itm/aff-zara-tee-021-white-m",
            depopAffiliateUrl: "https://www.depop.com/products/aff-zara-tee-021-white-m"
          }
        ]
      },
      {
        name: "Black",
        code: "#111827",
        sku: "Z-T-S-21-BLACK",
        sizes: [
          {
            name: "S",
            code: "S",
            sku: "Z-T-S-21-BLACK-S",
            ebayAffiliateUrl: "https://www.ebay.com/itm/aff-zara-tee-021-black-s",
            depopAffiliateUrl: "https://www.depop.com/products/aff-zara-tee-021-black-s"
          },
          {
            name: "M",
            code: "M",
            sku: "Z-T-S-21-BLACK-M",
            ebayAffiliateUrl: "https://www.ebay.com/itm/aff-zara-tee-021-black-m",
            depopAffiliateUrl: "https://www.depop.com/products/aff-zara-tee-021-black-m"
          }
        ]
      }
    ],
    bestSeller: false
  },
  {
    id: 22,
    title: "Shearling Trim Denim Jacket",
    brand: "Levi's",
    category: "jackets",
    gender: "women",
    description: "A classic trucker jacket in rigid denim with a soft faux-shearling collar for warmth and a vintage-inspired fit.",
    currentPrice: 84,
    oldPrice: 115,
    discount: 27,
    rating: 4.7,
    reviewCount: 198,
    stock: true,
    material: "Nylon shell with recycled fill",
    fit: "Regular Fit",
    season: "All Season",
    condition: "New with Tags",
    images: [
      img('jacket-levis', 1),
      img('jacket-levis', 2),
      img('jacket-levis', 3),
      img('jacket-levis', 4)
    ],
    colors: [
      {
        name: "Blue",
        code: "#0064D2",
        sku: "L-JAC-22-BLUE",
        sizes: [
          {
            name: "S",
            code: "S",
            sku: "L-JAC-22-BLUE-S",
            ebayAffiliateUrl: "https://www.ebay.com/itm/aff-levis-jacket-022-blue-s",
            depopAffiliateUrl: "https://www.depop.com/products/aff-levis-jacket-022-blue-s"
          },
          {
            name: "M",
            code: "M",
            sku: "L-JAC-22-BLUE-M",
            ebayAffiliateUrl: "https://www.ebay.com/itm/aff-levis-jacket-022-blue-m",
            depopAffiliateUrl: "https://www.depop.com/products/aff-levis-jacket-022-blue-m"
          }
        ]
      },
      {
        name: "Black",
        code: "#111827",
        sku: "L-JAC-22-BLACK",
        sizes: [
          {
            name: "S",
            code: "S",
            sku: "L-JAC-22-BLACK-S",
            ebayAffiliateUrl: "https://www.ebay.com/itm/aff-levis-jacket-022-black-s",
            depopAffiliateUrl: "https://www.depop.com/products/aff-levis-jacket-022-black-s"
          },
          {
            name: "M",
            code: "M",
            sku: "L-JAC-22-BLACK-M",
            ebayAffiliateUrl: "https://www.ebay.com/itm/aff-levis-jacket-022-black-m",
            depopAffiliateUrl: "https://www.depop.com/products/aff-levis-jacket-022-black-m"
          }
        ]
      }
    ],
    bestSeller: true
  },
  {
    id: 23,
    title: "Performance Track Pants",
    brand: "Adidas",
    category: "pants",
    gender: "women",
    description: "Stretch performance track pants with a tapered leg, elastic waistband, and moisture-wicking finish for training or lounging.",
    currentPrice: 44,
    oldPrice: 58,
    discount: 24,
    rating: 4.5,
    reviewCount: 132,
    stock: true,
    material: "Cotton twill",
    fit: "Regular Fit",
    season: "All Season",
    condition: "New with Tags",
    images: [
      img('pants-adidas', 1),
      img('pants-adidas', 2),
      img('pants-adidas', 3),
      img('pants-adidas', 4)
    ],
    colors: [
      {
        name: "Black",
        code: "#111827",
        sku: "A-PAN-23-BLACK",
        sizes: [
          {
            name: "S",
            code: "S",
            sku: "A-PAN-23-BLACK-S",
            ebayAffiliateUrl: "https://www.ebay.com/itm/aff-adidas-pants-023-black-s",
            depopAffiliateUrl: "https://www.depop.com/products/aff-adidas-pants-023-black-s"
          },
          {
            name: "M",
            code: "M",
            sku: "A-PAN-23-BLACK-M",
            ebayAffiliateUrl: "https://www.ebay.com/itm/aff-adidas-pants-023-black-m",
            depopAffiliateUrl: "https://www.depop.com/products/aff-adidas-pants-023-black-m"
          }
        ]
      },
      {
        name: "Gray",
        code: "#9CA3AF",
        sku: "A-PAN-23-GRAY",
        sizes: [
          {
            name: "S",
            code: "S",
            sku: "A-PAN-23-GRAY-S",
            ebayAffiliateUrl: "https://www.ebay.com/itm/aff-adidas-pants-023-gray-s",
            depopAffiliateUrl: "https://www.depop.com/products/aff-adidas-pants-023-gray-s"
          },
          {
            name: "M",
            code: "M",
            sku: "A-PAN-23-GRAY-M",
            ebayAffiliateUrl: "https://www.ebay.com/itm/aff-adidas-pants-023-gray-m",
            depopAffiliateUrl: "https://www.depop.com/products/aff-adidas-pants-023-gray-m"
          }
        ]
      }
    ],
    bestSeller: false
  },
  {
    id: 24,
    title: "Cotton Twill Work Shorts",
    brand: "Carhartt WIP",
    category: "shorts",
    gender: "women",
    description: "Durable cotton twill shorts with a relaxed fit, reinforced stitching, and a classic five-pocket work-inspired design.",
    currentPrice: 37,
    oldPrice: 50,
    discount: 26,
    rating: 4.4,
    reviewCount: 71,
    stock: true,
    material: "Cotton twill",
    fit: "Relaxed Fit",
    season: "All Season",
    condition: "New with Tags",
    images: [
      img('shorts-carhartt2', 1),
      img('shorts-carhartt2', 2),
      img('shorts-carhartt2', 3),
      img('shorts-carhartt2', 4)
    ],
    colors: [
      {
        name: "Green",
        code: "#10B981",
        sku: "CW-SHO-24-GREEN",
        sizes: [
          {
            name: "S",
            code: "S",
            sku: "CW-SHO-24-GREEN-S",
            ebayAffiliateUrl: "https://www.ebay.com/itm/aff-carhartt-shorts-024-green-s",
            depopAffiliateUrl: "https://www.depop.com/products/aff-carhartt-shorts-024-green-s"
          },
          {
            name: "M",
            code: "M",
            sku: "CW-SHO-24-GREEN-M",
            ebayAffiliateUrl: "https://www.ebay.com/itm/aff-carhartt-shorts-024-green-m",
            depopAffiliateUrl: "https://www.depop.com/products/aff-carhartt-shorts-024-green-m"
          }
        ]
      },
      {
        name: "Black",
        code: "#111827",
        sku: "CW-SHO-24-BLACK",
        sizes: [
          {
            name: "S",
            code: "S",
            sku: "CW-SHO-24-BLACK-S",
            ebayAffiliateUrl: "https://www.ebay.com/itm/aff-carhartt-shorts-024-black-s",
            depopAffiliateUrl: "https://www.depop.com/products/aff-carhartt-shorts-024-black-s"
          },
          {
            name: "M",
            code: "M",
            sku: "CW-SHO-24-BLACK-M",
            ebayAffiliateUrl: "https://www.ebay.com/itm/aff-carhartt-shorts-024-black-m",
            depopAffiliateUrl: "https://www.depop.com/products/aff-carhartt-shorts-024-black-m"
          }
        ]
      }
    ],
    bestSeller: false
  },
  {
    id: 25,
    title: "Oxford Button-Down Shirt",
    brand: "Ralph Lauren",
    category: "shirts",
    gender: "men",
    description: "A tailored Oxford shirt in soft cotton poplin with a classic collar, button cuffs, and a clean, versatile fit.",
    currentPrice: 46,
    oldPrice: 62,
    discount: 26,
    rating: 4.6,
    reviewCount: 154,
    stock: true,
    material: "Cotton poplin",
    fit: "Tailored Fit",
    season: "All Season",
    condition: "New with Tags",
    images: [
      img('shirt-rl', 1),
      img('shirt-rl', 2),
      img('shirt-rl', 3),
      img('shirt-rl', 4)
    ],
    colors: [
      {
        name: "White",
        code: "#FFFFFF",
        sku: "RL-SHI-25-WHITE",
        sizes: [
          {
            name: "S",
            code: "S",
            sku: "RL-SHI-25-WHITE-S",
            ebayAffiliateUrl: "https://www.ebay.com/itm/aff-rl-shirt-025-white-s",
            depopAffiliateUrl: "https://www.depop.com/products/aff-rl-shirt-025-white-s"
          },
          {
            name: "M",
            code: "M",
            sku: "RL-SHI-25-WHITE-M",
            ebayAffiliateUrl: "https://www.ebay.com/itm/aff-rl-shirt-025-white-m",
            depopAffiliateUrl: "https://www.depop.com/products/aff-rl-shirt-025-white-m"
          }
        ]
      },
      {
        name: "Blue",
        code: "#0064D2",
        sku: "RL-SHI-25-BLUE",
        sizes: [
          {
            name: "S",
            code: "S",
            sku: "RL-SHI-25-BLUE-S",
            ebayAffiliateUrl: "https://www.ebay.com/itm/aff-rl-shirt-025-blue-s",
            depopAffiliateUrl: "https://www.depop.com/products/aff-rl-shirt-025-blue-s"
          },
          {
            name: "M",
            code: "M",
            sku: "RL-SHI-25-BLUE-M",
            ebayAffiliateUrl: "https://www.ebay.com/itm/aff-rl-shirt-025-blue-m",
            depopAffiliateUrl: "https://www.depop.com/products/aff-rl-shirt-025-blue-m"
          }
        ]
      }
    ],
    bestSeller: true
  },
  {
    id: 26,
    title: "Satin Relaxed Fit Shirt",
    brand: "Zara",
    category: "shirts",
    gender: "women",
    description: "A fluid satin shirt with a relaxed silhouette, dropped shoulders, and a curved hem for effortless layering.",
    currentPrice: 39.9,
    oldPrice: 52.9,
    discount: 25,
    rating: 4.3,
    reviewCount: 88,
    stock: true,
    material: "Cotton poplin",
    fit: "Tailored Fit",
    season: "All Season",
    condition: "New with Tags",
    images: [
      img('shirt-zara', 1),
      img('shirt-zara', 2),
      img('shirt-zara', 3),
      img('shirt-zara', 4)
    ],
    colors: [
      {
        name: "White",
        code: "#FFFFFF",
        sku: "Z-SHI-26-WHITE",
        sizes: [
          {
            name: "S",
            code: "S",
            sku: "Z-SHI-26-WHITE-S",
            ebayAffiliateUrl: "https://www.ebay.com/itm/aff-zara-shirt-026-white-s",
            depopAffiliateUrl: "https://www.depop.com/products/aff-zara-shirt-026-white-s"
          },
          {
            name: "M",
            code: "M",
            sku: "Z-SHI-26-WHITE-M",
            ebayAffiliateUrl: "https://www.ebay.com/itm/aff-zara-shirt-026-white-m",
            depopAffiliateUrl: "https://www.depop.com/products/aff-zara-shirt-026-white-m"
          }
        ]
      },
      {
        name: "Black",
        code: "#111827",
        sku: "Z-SHI-26-BLACK",
        sizes: [
          {
            name: "S",
            code: "S",
            sku: "Z-SHI-26-BLACK-S",
            ebayAffiliateUrl: "https://www.ebay.com/itm/aff-zara-shirt-026-black-s",
            depopAffiliateUrl: "https://www.depop.com/products/aff-zara-shirt-026-black-s"
          },
          {
            name: "M",
            code: "M",
            sku: "Z-SHI-26-BLACK-M",
            ebayAffiliateUrl: "https://www.ebay.com/itm/aff-zara-shirt-026-black-m",
            depopAffiliateUrl: "https://www.depop.com/products/aff-zara-shirt-026-black-m"
          }
        ]
      }
    ],
    bestSeller: false
  },
  {
    id: 27,
    title: "990 Series Running Sneakers",
    brand: "New Balance",
    category: "sneakers",
    gender: "men",
    description: "A premium running silhouette with a suede and mesh upper, ENCAP midsole cushioning, and a durable rubber outsole.",
    currentPrice: 129,
    oldPrice: 175,
    discount: 26,
    rating: 4.8,
    reviewCount: 421,
    stock: true,
    material: "Leather and mesh upper",
    fit: "True to Size",
    season: "All Season",
    condition: "New with Tags",
    images: [
      img('sneaker-nb', 1),
      img('sneaker-nb', 2),
      img('sneaker-nb', 3),
      img('sneaker-nb', 4)
    ],
    colors: [
      {
        name: "Gray",
        code: "#9CA3AF",
        sku: "NB-SNE-27-GRAY",
        sizes: [
          {
            name: "S",
            code: "S",
            sku: "NB-SNE-27-GRAY-S",
            ebayAffiliateUrl: "https://www.ebay.com/itm/aff-nb-sneaker-027-gray-s",
            depopAffiliateUrl: "https://www.depop.com/products/aff-nb-sneaker-027-gray-s"
          },
          {
            name: "M",
            code: "M",
            sku: "NB-SNE-27-GRAY-M",
            ebayAffiliateUrl: "https://www.ebay.com/itm/aff-nb-sneaker-027-gray-m",
            depopAffiliateUrl: "https://www.depop.com/products/aff-nb-sneaker-027-gray-m"
          }
        ]
      },
      {
        name: "Black",
        code: "#111827",
        sku: "NB-SNE-27-BLACK",
        sizes: [
          {
            name: "S",
            code: "S",
            sku: "NB-SNE-27-BLACK-S",
            ebayAffiliateUrl: "https://www.ebay.com/itm/aff-nb-sneaker-027-black-s",
            depopAffiliateUrl: "https://www.depop.com/products/aff-nb-sneaker-027-black-s"
          },
          {
            name: "M",
            code: "M",
            sku: "NB-SNE-27-BLACK-M",
            ebayAffiliateUrl: "https://www.ebay.com/itm/aff-nb-sneaker-027-black-m",
            depopAffiliateUrl: "https://www.depop.com/products/aff-nb-sneaker-027-black-m"
          }
        ]
      }
    ],
    bestSeller: true
  },
  {
    id: 28,
    title: "Air Court Low-Top Sneakers",
    brand: "Nike",
    category: "sneakers",
    gender: "women",
    description: "A clean low-top silhouette in premium leather with a cushioned midsole and a durable rubber outsole for everyday wear.",
    currentPrice: 89,
    oldPrice: 120,
    discount: 26,
    rating: 4.7,
    reviewCount: 267,
    stock: true,
    material: "Leather and mesh upper",
    fit: "True to Size",
    season: "All Season",
    condition: "New with Tags",
    images: [
      img('sneaker-nike', 1),
      img('sneaker-nike', 2),
      img('sneaker-nike', 3),
      img('sneaker-nike', 4)
    ],
    colors: [
      {
        name: "White",
        code: "#FFFFFF",
        sku: "N-SNE-28-WHITE",
        sizes: [
          {
            name: "S",
            code: "S",
            sku: "N-SNE-28-WHITE-S",
            ebayAffiliateUrl: "https://www.ebay.com/itm/aff-nike-sneaker-028-white-s",
            depopAffiliateUrl: "https://www.depop.com/products/aff-nike-sneaker-028-white-s"
          },
          {
            name: "M",
            code: "M",
            sku: "N-SNE-28-WHITE-M",
            ebayAffiliateUrl: "https://www.ebay.com/itm/aff-nike-sneaker-028-white-m",
            depopAffiliateUrl: "https://www.depop.com/products/aff-nike-sneaker-028-white-m"
          }
        ]
      },
      {
        name: "Black",
        code: "#111827",
        sku: "N-SNE-28-BLACK",
        sizes: [
          {
            name: "S",
            code: "S",
            sku: "N-SNE-28-BLACK-S",
            ebayAffiliateUrl: "https://www.ebay.com/itm/aff-nike-sneaker-028-black-s",
            depopAffiliateUrl: "https://www.depop.com/products/aff-nike-sneaker-028-black-s"
          },
          {
            name: "M",
            code: "M",
            sku: "N-SNE-28-BLACK-M",
            ebayAffiliateUrl: "https://www.ebay.com/itm/aff-nike-sneaker-028-black-m",
            depopAffiliateUrl: "https://www.depop.com/products/aff-nike-sneaker-028-black-m"
          }
        ]
      }
    ],
    bestSeller: false
  }
]

export const getProductById = (id) => products.find((p) => p.id === Number(id))

export const getBestSellers = () => products.filter((p) => p.bestSeller).slice(0, 10)

export const getRelatedProducts = (product, limit = 8) =>
  products
    .filter((p) => p.id !== product.id && (p.category === product.category || p.brand === product.brand))
    .slice(0, limit)
