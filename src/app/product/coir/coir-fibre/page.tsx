import { getProductBySlug } from '@/lib/products';
import ProductDetailPage from '@/components/ProductDetailPage';
import { notFound } from 'next/navigation';

export const metadata = {
  title: 'Coir Fibre — Origin EXIMS',
  description: 'Strong, durable natural coconut coir fibre for mattress manufacturing, geotextiles, and erosion control.',
};

export default function CoirFibrePage() {
  const product = getProductBySlug('coir', 'coir-fibre');
  if (!product) return notFound();
  return (
    <ProductDetailPage
      product={product}
      categoryLabel="Coir Products"
      categoryHref="/product/coir"
    />
  );
}

