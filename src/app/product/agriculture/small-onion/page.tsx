import { getProductBySlug } from '@/lib/products';
import ProductDetailPage from '@/components/ProductDetailPage';
import { notFound } from 'next/navigation';

export const metadata = {
  title: 'Small Onion — Origin EXIMS',
  description: 'Premium small onions (shallots) sourced from South Indian farms. HS Code: 07031011.',
};

export default function SmallOnionPage() {
  const product = getProductBySlug('agriculture', 'small-onion');
  if (!product) return notFound();
  return (
    <ProductDetailPage
      product={product}
      categoryLabel="Agriculture Products"
      categoryHref="/product/agriculture"
    />
  );
}

