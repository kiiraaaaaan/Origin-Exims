import React from 'react';
import Link from 'next/link';
import Section from '@/components/Section';
import Container from '@/components/Container';
import { CATEGORIES, getProductsByCategory } from '@/lib/products';

export const metadata = {
  title: 'Products — Origin EXIMS',
  description: 'Explore our export portfolio of Agriculture and Coir products from Origin EXIMS.',
};

export default function ProductsPage() {
  return (
    <>
      {/* Hero */}
      <Section
        background="porcelain"
        style={{
          paddingTop: 'clamp(6rem, 12vw, 9rem)',
          paddingBottom: 'clamp(3rem, 5vw, 4rem)',
        }}
      >
        <Container>
          <div style={{ maxWidth: '640px' }}>
            <span className="text-caption" style={{ color: 'var(--color-bronze)' }}>
              Export Portfolio
            </span>
            <h1
              style={{
                fontFamily: 'var(--font-inter), sans-serif',
                fontSize: 'clamp(2.25rem, 5vw, 3.75rem)',
                fontWeight: 800,
                color: 'var(--color-graphite)',
                letterSpacing: '-0.03em',
                lineHeight: 1.08,
                margin: '0.5rem 0 1rem',
              }}
            >
              Our Products
            </h1>
            <p style={{
              fontSize: 'clamp(0.95rem, 1.1vw, 1.0625rem)',
              lineHeight: 1.7,
              color: 'rgba(30,30,30,0.58)',
              maxWidth: '520px',
              margin: 0,
            }}>
              Origin EXIMS exports two core product categories — agricultural commodities and coconut coir products — sourced from South India and delivered to global markets.
            </p>
          </div>
        </Container>
      </Section>

      {/* Category cards */}
      <Section background="porcelain" spacing="none" style={{ paddingBottom: 'clamp(4rem, 8vw, 7rem)' }}>
        <Container>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'clamp(4rem, 7vw, 6rem)' }}>
            {CATEGORIES.map((cat, i) => {
              const products = getProductsByCategory(cat.id);
              const isReverse = i % 2 === 1;
              return (
                <div key={cat.id} className={`cat-showcase ${isReverse ? 'cat-showcase-reverse' : ''}`}>
                  {/* Banner image */}
                  <Link href={cat.slug} className="cat-img-wrap" aria-label={`Browse ${cat.name}`}>
                    <img src={cat.image} alt={cat.imageAlt} className="cat-img" />
                    <div className="cat-img-overlay" />
                  </Link>

                  {/* Info panel */}
                  <div className="cat-info">
                    <span className="phase-label">{cat.id === 'coir' ? 'Category 01' : 'Category 02'}</span>
                    <h2 className="cat-name">{cat.name}</h2>
                    <p className="cat-intro">{cat.intro}</p>

                    {/* Product list preview */}
                    <ul className="cat-product-list">
                      {products.map(p => (
                        <li key={p.id}>
                          <Link href={`${cat.slug}/${p.slug}`} className="cat-product-link">
                            <span>{p.name}</span>
                            {p.hsCode && <span className="cat-hs">HS {p.hsCode}</span>}
                          </Link>
                        </li>
                      ))}
                    </ul>

                    <Link href={cat.slug} className="cat-explore-btn">
                      Explore {cat.name}
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none"
                        stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M5 12h14M13 5l7 7-7 7" />
                      </svg>
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </Container>
      </Section>
    </>
  );
}
