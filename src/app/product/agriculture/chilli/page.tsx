import { getProductBySlug } from '@/lib/products';
import ProductDetailPage from '@/components/ProductDetailPage';
import { notFound } from 'next/navigation';

export const metadata = {
  title: 'Chilli — Origin EXIMS',
  description: 'Dried red chillies sourced from prime growing regions of India. HS Code: 09042110.',
};

export default function ChilliPage() {
  const product = getProductBySlug('agriculture', 'chilli');
  if (!product) return notFound();
  return (
    <ProductDetailPage
      product={product}
      categoryLabel="Agriculture Products"
      categoryHref="/product/agriculture"
    />
  );
}

