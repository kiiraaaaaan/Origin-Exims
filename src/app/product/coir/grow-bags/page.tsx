import { getProductBySlug } from '@/lib/products';
import ProductDetailPage from '@/components/ProductDetailPage';
import { notFound } from 'next/navigation';

export const metadata = {
  title: 'Grow Bags — Origin EXIMS',
  description: 'Ready-to-use coir grow bags for commercial greenhouse and precision agriculture applications.',
};

export default function GrowBagsPage() {
  const product = getProductBySlug('coir', 'grow-bags');
  if (!product) return notFound();
  return (
    <ProductDetailPage
      product={product}
      categoryLabel="Coir Products"
      categoryHref="/product/coir"
    />
  );
}

