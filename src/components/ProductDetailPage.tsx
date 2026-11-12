'use client';

import React from 'react';
import Link from 'next/link';
import { Product } from '@/lib/products';

interface ProductDetailPageProps {
  product: Product;
  categoryLabel: string;
  categoryHref: string;
}

// These sections get prominent card treatment with heading repeated inside
const CARD_SECTIONS = new Set([
  'Product Introduction',
  'Product Specifications',
  'Available Grades & Varieties',
  'Available Grades & Variants',
]);

export default function ProductDetailPage({
  product,
  categoryLabel,
  categoryHref,
}: ProductDetailPageProps) {
  return (
    <div style={{ background: '#F5F5F7', minHeight: '100vh' }}>

      {/* ── Full-width hero image ── */}
      <div style={{
        position: 'relative',
        width: '100%',
        aspectRatio: '21 / 8',
        overflow: 'hidden',
        background: '#0a0a0a',
        marginTop: 'var(--nav-height, 64px)',
      }}>
        <img
          src={product.image}
          alt={product.imageAlt}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            display: 'block',
            opacity: 0.88,
          }}
        />
        <div style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(to top, rgba(0,0,0,0.82) 0%, rgba(0,0,0,0.08) 55%, transparent 100%)',
        }} />
        <div style={{
          position: 'absolute',
          bottom: 'clamp(1.5rem, 4vw, 3rem)',
          left: 0, right: 0,
          padding: '0 clamp(1.5rem, 5vw, 4rem)',
        }}>
          {product.hsCode && (
            <div style={{
              display: 'inline-block',
              fontSize: '0.68rem',
              fontWeight: 600,
              textTransform: 'uppercase' as const,
              letterSpacing: '0.12em',
              color: '#d4a96a',
              background: 'rgba(145,109,72,0.18)',
              border: '1px solid rgba(145,109,72,0.40)',
              borderRadius: '4px',
              padding: '0.25rem 0.6rem',
              marginBottom: '0.75rem',
            }}>
              HS {product.hsCode}
            </div>
          )}
          <h1 style={{
            fontFamily: 'var(--font-inter), sans-serif',
            fontSize: 'clamp(2rem, 5vw, 4rem)',
            fontWeight: 800,
            color: '#fff',
            letterSpacing: '-0.03em',
            lineHeight: 1.05,
            margin: 0,
          }}>
            {product.name}
          </h1>
          <p style={{
            marginTop: '0.75rem',
            fontSize: 'clamp(0.9rem, 1.1vw, 1.0625rem)',
            lineHeight: 1.65,
            color: 'rgba(255,255,255,0.72)',
            maxWidth: '580px',
          }}>
            {product.tagline}
          </p>
        </div>
      </div>

      {/* ── Main content on light background ── */}
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: 'clamp(2.5rem, 5vw, 4rem) clamp(1.25rem, 4vw, 3rem)',
      }}>

        {/* Back link */}
        <Link href={categoryHref} style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '0.4rem',
          color: 'var(--color-bronze)',
          fontSize: '0.875rem',
          textDecoration: 'none',
          marginBottom: '2.5rem',
          fontWeight: 500,
        }}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none"
            stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M19 12H5M11 5l-7 7 7 7" />
          </svg>
          {categoryLabel}
        </Link>

        {/* ── Photo gallery ── */}
        {product.gallery.length > 0 && (
          <div style={{ marginBottom: 'clamp(2.5rem, 5vw, 4rem)' }}>
            <p style={{
              fontSize: '0.68rem',
              fontWeight: 700,
              textTransform: 'uppercase' as const,
              letterSpacing: '0.12em',
              color: 'var(--color-bronze)',
              marginBottom: '1rem',
            }}>
              Product Gallery
            </p>
            <div className="pd-gallery-light">
              {product.gallery.map((src, i) => (
                <div key={i} className="pd-gallery-item-light">
                  <img
                    src={src}
                    alt={`${product.name} — view ${i + 2}`}
                    className="pd-gallery-img-light"
                  />
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ── Content sections as cards ── */}
        <div className="pd-sections-grid">
          {product.sections.map((section, i) => {
            const isCard = CARD_SECTIONS.has(section.heading);
            return (
              <div
                key={i}
                className={isCard ? 'pd-card pd-card-prominent' : 'pd-card pd-card-full'}
              >
                <p className="pd-card-label">{section.heading}</p>

                {isCard && (
                  <h2 className="pd-card-heading">{section.heading}</h2>
                )}

                <div className={isCard ? 'pd-placeholder-light' : 'pd-placeholder-dashed'}>
                  <p className={isCard ? 'pd-placeholder-text' : 'pd-placeholder-text-muted'}>
                    {section.placeholder}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* ── Enquiry CTA ── */}
        <div style={{
          display: 'flex',
          flexDirection: 'column' as const,
          alignItems: 'center',
          textAlign: 'center' as const,
          gap: '1.25rem',
          padding: 'clamp(3rem, 6vw, 5rem) 0',
          borderTop: '1px solid rgba(0,0,0,0.08)',
        }}>
          <h2 style={{
            fontFamily: 'var(--font-inter), sans-serif',
            fontSize: 'clamp(1.5rem, 3vw, 2.25rem)',
            fontWeight: 800,
            color: '#1d1d1f',
            letterSpacing: '-0.03em',
            margin: 0,
          }}>
            Interested in {product.name}?
          </h2>
          <p style={{
            fontSize: 'clamp(0.875rem, 1vw, 1rem)',
            color: '#86868b',
            maxWidth: '440px',
            lineHeight: 1.65,
            margin: 0,
          }}>
            Contact our export team for pricing, specifications, and sample requests.
          </p>
          <Link href="/contact" style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.5rem',
            padding: '0.9rem 2.25rem',
            background: 'var(--color-bronze)',
            color: '#fff',
            fontSize: '0.9375rem',
            fontWeight: 500,
            textDecoration: 'none',
            borderRadius: '980px',
          }}>
            Get in Touch
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none"
              stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M13 5l7 7-7 7" />
            </svg>
          </Link>
        </div>

      </div>
    </div>
  );
}
