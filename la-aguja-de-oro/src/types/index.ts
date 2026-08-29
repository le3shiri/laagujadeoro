export interface ServiceCategory {
  id: string;
  title: string;
  slug: string;
  description: string;
  icon: string;
  examples: string[];
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

export interface BeforeAfterItem {
  id: string;
  label: string;
  beforeSrc: string;
  afterSrc: string;
  beforeAlt: string;
  afterAlt: string;
}

export interface GalleryItem {
  id: string;
  src: string;
  alt: string;
  category: 'trabajo' | 'taller' | 'detalle' | 'proceso';
}
