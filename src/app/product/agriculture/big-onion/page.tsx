import { getProductBySlug } from '@/lib/products';
import ProductDetailPage from '@/components/ProductDetailPage';
import { notFound } from 'next/navigation';

export const metadata = {
  title: 'Big Onion / Rose Onion — Origin EXIMS',
  description: 'Large-bulb onions and rose onions exported to global markets. HS Code: 07031020.',
};

export default function BigOnionPage() {
  const product = getProductBySlug('agriculture', 'big-onion');
  if (!product) return notFound();
  return (
    <ProductDetailPage
      product={product}
      categoryLabel="Agriculture Products"
      categoryHref="/product/agriculture"
    />
  );
}

