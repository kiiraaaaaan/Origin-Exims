import { getProductBySlug } from '@/lib/products';
import ProductDetailPage from '@/components/ProductDetailPage';
import { notFound } from 'next/navigation';

export const metadata = {
  title: 'Coco Chips — Origin EXIMS',
  description: 'Chunky coconut husk chips for orchid growing, specialty horticulture, and premium substrates.',
};

export default function CocoChipsPage() {
  const product = getProductBySlug('coir', 'coco-chips');
  if (!product) return notFound();
  return (
    <ProductDetailPage
      product={product}
      categoryLabel="Coir Products"
      categoryHref="/product/coir"
    />
  );
}

