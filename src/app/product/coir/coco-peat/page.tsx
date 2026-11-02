import { getProductBySlug } from '@/lib/products';
import ProductDetailPage from '@/components/ProductDetailPage';
import { notFound } from 'next/navigation';

export const metadata = {
  title: 'Coco Peat — Origin EXIMS',
  description: 'Natural, sustainable coconut coir peat growing medium for horticulture and soilless cultivation.',
};

export default function CocoPeatPage() {
  const product = getProductBySlug('coir', 'coco-peat');
  if (!product) return notFound();
  return (
    <ProductDetailPage
      product={product}
      categoryLabel="Coir Products"
      categoryHref="/product/coir"
    />
  );
}

