import React from 'react';
import Link from 'next/link';
import Section from '@/components/Section';
import Container from '@/components/Container';
import { getProductsByCategory } from '@/lib/products';

export const metadata = {
  title: 'Agriculture Products — Origin EXIMS',
  description: 'Agricultural commodities exported by Origin EXIMS — small onion, big onion, chilli and more.',
};

export default function AgriculturePage() {
  const products = getProductsByCategory('agriculture');

  return (
    <>
      {/* Hero */}
      <Section background="black" style={{ paddingTop: 'clamp(6rem, 12vw, 9rem)', paddingBottom: 'clamp(2rem, 4vw, 3rem)' }}>
        <Container>
          <div style={{ maxWidth: '600px' }}>
            <Link href="/product" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', color: 'var(--color-bronze)', fontSize: '0.85rem', marginBottom: '1.25rem', textDecoration: 'none' }}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M19 12H5M12 5l-7 7 7 7" />
              </svg>
              All Products
            </Link>
            <span className="text-caption" style={{ color: 'var(--color-bronze)' }}>Agriculture Products</span>
            <h1 style={{
              fontFamily: 'var(--font-serif-title), "Playfair Display", Georgia, serif',
              fontSize: 'clamp(2rem, 4.5vw, 3.5rem)',
              fontWeight: 500, color: '#ffffff',
              letterSpacing: '-0.02em', lineHeight: 1.12,
              margin: '0.5rem 0 1rem',
            }}>
              Agricultural Commodities
            </h1>
            <p style={{
              fontSize: 'clamp(0.9rem, 1.05vw, 1rem)',
              lineHeight: 1.7, color: 'rgba(255,255,255,0.55)',
              maxWidth: '480px', margin: 0,
            }}>
              Agricultural commodities sourced from India for international markets.
            </p>
          </div>
        </Container>
      </Section>

      {/* Product grid */}
      <Section background="black" spacing="none" style={{ paddingBottom: 'clamp(4rem, 8vw, 7rem)' }}>
        <Container>
          <div className="product-grid">
            {products.map(product => (
              <Link key={product.id} href={`/product/agriculture/${product.slug}`} className="product-card">
                <div className="product-card-img-wrap">
                  <img src={product.image} alt={product.imageAlt} className="product-card-img" />
                </div>
                <div className="product-card-body">
                  {product.hsCode && (
                    <span className="product-card-hs">HS {product.hsCode}</span>
                  )}
                  <h3 className="product-card-name">{product.name}</h3>
                  <p className="product-card-tagline">{product.tagline}</p>
                  <span className="product-card-cta">
                    Explore Product
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 12h14M13 5l7 7-7 7" />
                    </svg>
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </Container>
      </Section>
    </>
  );
}

