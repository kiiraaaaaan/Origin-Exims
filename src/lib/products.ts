// Central product data — all products, categories and routes defined here.
// Update content here; all pages reference this data.

export interface ProductSection {
  heading: string;
  placeholder: string;
}

export interface Product {
  id: string;
  slug: string;
  name: string;
  hsCode?: string;
  tagline: string;
  image: string;        // main card image (1 photo)
  imageAlt: string;
  gallery: string[];    // additional photos for the detail page
  category: 'agriculture' | 'coir';
  sections: ProductSection[];
}

export interface Category {
  id: 'agriculture' | 'coir';
  name: string;
  slug: string;
  intro: string;
  image: string;
  imageAlt: string;
}

// ── Categories ──────────────────────────────────────────────────────────────

export const CATEGORIES: Category[] = [
  {
    id: 'coir',
    name: 'Coir Products',
    slug: '/product/coir',
    intro: 'Natural coconut-based products for horticulture, agriculture, and industrial applications.',
    image: '/images/products/coco-peat/main.png',
    imageAlt: 'Origin EXIMS Coco Peat blocks ready for export',
  },
  {
    id: 'agriculture',
    name: 'Agriculture Products',
    slug: '/product/agriculture',
    intro: 'Agricultural commodities sourced from India for international markets.',
    image: '/images/products/small-onion/main.png',
    imageAlt: 'Fresh onions and agricultural produce ready for export',
  },
];

// ── Shared placeholder sections ──────────────────────────────────────────────

const AGRI_SECTIONS: ProductSection[] = [
  { heading: 'Product Introduction', placeholder: 'A detailed introduction to this product — origin, characteristics, and market relevance — will be added here.' },
  { heading: 'Product Specifications', placeholder: 'Technical specifications including moisture content, size, grade, and quality parameters.' },
  { heading: 'Available Grades & Varieties', placeholder: 'Details of available grades, varieties, and sorting options.' },
  { heading: 'Packaging Options', placeholder: 'Available packaging formats, net weights, and export-grade packaging details.' },
  { heading: 'Applications & Uses', placeholder: 'End-use applications, target markets, and culinary or industrial uses.' },
  { heading: 'Export Information', placeholder: 'HS code, phytosanitary requirements, approved destinations, and logistics details.' },
];

const COIR_SECTIONS: ProductSection[] = [
  { heading: 'Product Introduction', placeholder: 'A detailed introduction to this coir product — origin, processing, and applications — will be added here.' },
  { heading: 'Product Specifications', placeholder: 'Technical specifications including EC, pH, moisture, dimensions, or fibre length as applicable.' },
  { heading: 'Available Grades & Variants', placeholder: 'Details of available product grades, compressed or loose forms, and custom specifications.' },
  { heading: 'Packaging Options', placeholder: 'Packaging formats, bale/block sizes, and palletisation options.' },
  { heading: 'Applications & Uses', placeholder: 'Agricultural, horticultural, industrial, and environmental applications.' },
  { heading: 'Export Information', placeholder: 'HS code, certifications, approved destinations, and shipping logistics.' },
];

// ── Products ─────────────────────────────────────────────────────────────────

export const PRODUCTS: Product[] = [
  // ── Agriculture ──
  {
    id: 'small-onion',
    slug: 'small-onion',
    name: 'Small Onion',
    hsCode: '07031011',
    tagline: 'Premium small onions (shallots) sourced from South Indian farms, exported fresh to international markets.',
    image: '/images/products/small-onion/main.png',
    imageAlt: 'Fresh small onions / shallots for export',
    gallery: [
      '/images/products/small-onion/warehouse.png',
    ],
    category: 'agriculture',
    sections: AGRI_SECTIONS,
  },
  {
    id: 'big-onion',
    slug: 'big-onion',
    name: 'Big Onion / Rose Onion',
    hsCode: '07031020',
    tagline: 'Large-bulb onions and rose onions sourced from major producing belts, packed and exported to global buyers.',
    image: '/images/products/big-onion/main.png',
    imageAlt: 'Fresh big onions / rose onions for export',
    gallery: [
      '/images/products/big-onion/shallots.png',
    ],
    category: 'agriculture',
    sections: AGRI_SECTIONS,
  },
  {
    id: 'chilli',
    slug: 'chilli',
    name: 'Chilli',
    hsCode: '09042110',
    tagline: 'Dried red chillies sourced from prime growing regions of India, exported for culinary and industrial use.',
    image: '/images/products/chilli/main.png',
    imageAlt: 'Dried red chillies for export',
    gallery: [],
    category: 'agriculture',
    sections: AGRI_SECTIONS,
  },
  // ── Coir ──
  {
    id: 'coco-peat',
    slug: 'coco-peat',
    name: 'Coco Peat',
    hsCode: '53050040',
    tagline: 'A natural, sustainable growing medium derived from coconut husk, suitable for horticulture, nurseries, and soilless cultivation.',
    image: '/images/products/coco-peat/main.png',
    imageAlt: 'Origin EXIMS Coco Peat blocks ready for export',
    gallery: [
      '/images/products/coco-peat/packaged.png',
      '/images/products/coco-peat/mill.png',
      '/images/products/coco-peat/workshop.png',
      '/images/products/coco-peat/pexels-1.jpg',
      '/images/products/coco-peat/pexels-2.jpg',
      '/images/products/coco-peat/pexels-3.jpg',
    ],
    category: 'coir',
    sections: COIR_SECTIONS,
  },
  {
    id: 'grow-bags',
    slug: 'grow-bags',
    name: 'Grow Bags',
    hsCode: '53050040',
    tagline: 'Ready-to-use coir grow bags designed for commercial greenhouse cultivation and precision agriculture.',
    image: '/images/products/grow-bags/main.png',
    imageAlt: 'Coir grow bags for greenhouse cultivation',
    gallery: [
      '/images/products/grow-bags/pexels-1.jpg',
    ],
    category: 'coir',
    sections: COIR_SECTIONS,
  },
  {
    id: 'coir-fibre',
    slug: 'coir-fibre',
    name: 'Coir Fibre',
    hsCode: '53050010',
    tagline: 'Strong, durable natural fibre extracted from coconut husks, used in mattress manufacturing, geotextiles, and erosion control.',
    image: '/images/products/coir-fibre/main.png',
    imageAlt: 'Natural coir fibre heap in storage shed',
    gallery: [
      '/images/products/coir-fibre/processing.png',
      '/images/products/coir-fibre/bales.png',
      '/images/products/coir-fibre/pexels-1.jpg',
      '/images/products/coir-fibre/pexels-2.jpg',
    ],
    category: 'coir',
    sections: COIR_SECTIONS,
  },
  {
    id: 'coco-chips',
    slug: 'coco-chips',
    name: 'Coco Chips',
    hsCode: '53050040',
    tagline: 'Chunky coconut husk chips used as a growing medium for orchids, anthuriums, and other specialty horticulture crops.',
    image: '/images/products/coco-chips/main.png',
    imageAlt: 'Origin EXIMS Coco Chips in warehouse packaging',
    gallery: [
      '/images/products/coco-chips/sunlight.png',
    ],
    category: 'coir',
    sections: COIR_SECTIONS,
  },
];

// ── Helpers ──────────────────────────────────────────────────────────────────

export function getProductsByCategory(category: 'agriculture' | 'coir'): Product[] {
  return PRODUCTS.filter(p => p.category === category);
}

export function getProductBySlug(category: string, slug: string): Product | undefined {
  return PRODUCTS.find(p => p.category === category && p.slug === slug);
}
