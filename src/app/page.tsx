import React from 'react';
import dynamic from 'next/dynamic';
import Link from 'next/link';
import Section from '@/components/Section';
import Container from '@/components/Container';
import Placeholder from '@/components/Placeholder';

const HeroGlobeScene = dynamic(() => import('@/components/HeroGlobeScene'), {
  ssr: false,
});

export default function HomePage() {
  return (
    <>
      {/* 1. Immersive Hero Section with Animated Rotating Globe Scene */}
      <Section
        background="black"
        spacing="none"
        style={{
          position: 'relative',
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          overflow: 'hidden',
          paddingTop: 'var(--nav-height)',
          paddingBottom: 'clamp(3rem, 6vw, 5rem)',
        }}
      >
        {/* Full-Screen Animated Globe & Port Background */}
        <HeroGlobeScene />

        {/* Hero Content Overlay — Apple Vibrancy Card */}
        <Container style={{ position: 'relative', zIndex: 10, width: '100%' }}>
          {/* Frosted glass vibrancy card — Apple material design */}
          <div
            style={{
              display: 'inline-flex',
              flexDirection: 'column',
              alignItems: 'flex-start',
              gap: 'clamp(1.25rem, 2vw, 1.75rem)',
              padding: 'clamp(2rem, 3.2vw, 2.75rem) clamp(2rem, 3.2vw, 3rem)',
              borderRadius: '24px',
              /* Apple-style glass: dark translucent base + top-edge highlight */
              background: 'linear-gradient(145deg, rgba(22, 20, 18, 0.62) 0%, rgba(10, 9, 8, 0.54) 100%)',
              backdropFilter: 'blur(40px) saturate(180%) brightness(0.92)',
              WebkitBackdropFilter: 'blur(40px) saturate(180%) brightness(0.92)',
              /* Layered borders: bright top edge + subtle full border — Apple vibrancy */
              border: '1px solid rgba(255, 255, 255, 0.13)',
              boxShadow: [
                '0 0 0 0.5px rgba(255,255,255,0.06)',
                'inset 0 1px 0 rgba(255,255,255,0.14)',
                'inset 0 -1px 0 rgba(0,0,0,0.30)',
                '0 8px 64px rgba(0, 0, 0, 0.38)',
                '0 2px 12px rgba(0, 0, 0, 0.22)',
              ].join(', '),
              maxWidth: 'min(620px, 100%)',
            }}
          >
            {/* Headline */}
            <h1
              style={{
                fontFamily:
                  'var(--font-serif-title), "Playfair Display", "Cormorant Garamond", "Didot", "Bodoni MT", Georgia, serif',
                fontSize: 'clamp(1.85rem, 4.2vw, 3.65rem)',
                fontWeight: 500,
                lineHeight: 1.13,
                letterSpacing: '-0.02em',
                color: '#ffffff',
                margin: 0,
                wordBreak: 'break-word',
              }}
            >
              Every trade begins
              <br />
              <span className="hero-headline-line2">
                with the right{' '}
                {/* "Origin" — capital O, premium bronze with metallic shimmer */}
                <span className="hero-origin-word">
                  Origin.
                </span>
              </span>
            </h1>

            {/* Supporting Paragraph */}
            <p
              style={{
                fontSize: 'clamp(0.9rem, 1.1vw, 1.0625rem)',
                fontWeight: 400,
                lineHeight: 1.68,
                letterSpacing: '-0.005em',
                color: 'rgba(255, 255, 255, 0.76)',
                maxWidth: '440px',
                margin: 0,
              }}
            >
              Origin Exims is a Coimbatore based merchant export company connecting quality Indian products to global markets.
            </p>

            {/* CTA — two Apple-style pill buttons side by side */}
            <div style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '0.75rem',
              paddingTop: '0.25rem',
            }}>
              <Link href="/product" className="hero-cta-btn hero-cta-primary">
                <span>View Our Products</span>
                <span className="cta-arrow" aria-hidden="true">&rarr;</span>
              </Link>
              <Link href="/contact" className="hero-cta-btn hero-cta-secondary">
                <span>Contact Us</span>
              </Link>
            </div>
          </div>
        </Container>
      </Section>

      {/* 2. Our Core Values */}
      <Section background="porcelain">
        <Container>
          <div style={{ maxWidth: '640px', marginBottom: 'clamp(2.5rem, 5vw, 4rem)' }}>
            <span className="text-caption">What We Stand For</span>
            <h2 className="text-section-title" style={{ marginTop: '0.5rem', color: 'var(--color-graphite)' }}>
              Our Core Values
            </h2>
            <p className="text-supporting" style={{ marginTop: '0.75rem' }}>
              The principles that drive every partnership and shipment at Origin Exims.
            </p>
          </div>

          {/* 3-Column Values Grid with real photos */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '1.75rem',
            }}
          >
            {/* Card 1: Compliance & Documentation */}
            <div className="core-value-card">
              <div className="core-value-img-wrap">
                <img
                  src="/images/core-compliance.jpg"
                  alt="Documents and financial records on a desk"
                  className="core-value-img"
                />
              </div>
              <div className="core-value-content">
                <h3 className="core-value-title">Compliance &amp; Documentation</h3>
                <p className="core-value-desc">
                  Ensuring every shipment meets the required certifications, regulatory standards, and documentation requirements.
                </p>
              </div>
            </div>

            {/* Card 2: Quality & Reliability */}
            <div className="core-value-card">
              <div className="core-value-img-wrap">
                <img
                  src="/images/core-quality.jpg"
                  alt="Warehouse with carefully packaged goods ready for export"
                  className="core-value-img"
                />
              </div>
              <div className="core-value-content">
                <h3 className="core-value-title">Quality &amp; Reliability</h3>
                <p className="core-value-desc">
                  Sourcing quality products and maintaining consistent standards to deliver what we promise.
                </p>
              </div>
            </div>

            {/* Card 3: Trust & Transparency */}
            <div className="core-value-card">
              <div className="core-value-img-wrap">
                <img
                  src="/images/core-trust.jpg"
                  alt="Business handshake representing partnership and trust"
                  className="core-value-img"
                />
              </div>
              <div className="core-value-content">
                <h3 className="core-value-title">Trust &amp; Transparency</h3>
                <p className="core-value-desc">
                  Building lasting partnerships through honest communication, transparent processes, and dependable business practices.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* 3. Quality & Export Assurance — Dark section with phases */}
      <Section background="black">
        <Container>
          <div style={{
            maxWidth: '640px',
            marginBottom: 'clamp(2.5rem, 5vw, 4rem)',
          }}>
            <span className="text-caption" style={{ color: 'var(--color-bronze)' }}>Our Process</span>
            <h2 className="text-section-title" style={{ marginTop: '0.5rem', color: '#ffffff' }}>
              Quality &amp; Export Assurance
            </h2>
          </div>

          {/* 4-Phase Grid with arrows */}
          <div className="phase-grid">
            {/* Phase 01 */}
            <div className="phase-card">
              <div className="phase-img-wrap">
                <img src="/images/phase-supplier.jpg" alt="Supplier evaluation and factory visit" className="phase-img" />
              </div>
              <div className="phase-content">
                <span className="phase-label">Phase 01</span>
                <h3 className="phase-title">Supplier Verification</h3>
                <p className="phase-desc">
                  Responsible sourcing and supplier evaluation to establish product quality and reliability.
                </p>
              </div>
            </div>

            <div className="phase-arrow" aria-hidden="true">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.25)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M13 5l7 7-7 7" />
              </svg>
            </div>

            {/* Phase 02 */}
            <div className="phase-card">
              <div className="phase-img-wrap">
                <img src="/images/phase-inspection.jpg" alt="Quality inspection and product testing" className="phase-img" />
              </div>
              <div className="phase-content">
                <span className="phase-label">Phase 02</span>
                <h3 className="phase-title">Quality Inspection</h3>
                <p className="phase-desc">
                  Product checks, batch inspection, grading, and testing based on product requirements.
                </p>
              </div>
            </div>

            <div className="phase-arrow" aria-hidden="true">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.25)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M13 5l7 7-7 7" />
              </svg>
            </div>

            {/* Phase 03 */}
            <div className="phase-card">
              <div className="phase-img-wrap">
                <img src="/images/phase-packaging.jpg" alt="Export packaging and labelling" className="phase-img" />
              </div>
              <div className="phase-content">
                <span className="phase-label">Phase 03</span>
                <h3 className="phase-title">Export Packaging</h3>
                <p className="phase-desc">
                  Appropriate packaging, labelling, and handling to meet destination-market requirements.
                </p>
              </div>
            </div>

            <div className="phase-arrow" aria-hidden="true">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.25)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M13 5l7 7-7 7" />
              </svg>
            </div>

            {/* Phase 04 */}
            <div className="phase-card">
              <div className="phase-img-wrap">
                <img src="/images/phase-dispatch.jpg" alt="Shipping containers at port for dispatch" className="phase-img" />
              </div>
              <div className="phase-content">
                <span className="phase-label">Phase 04</span>
                <h3 className="phase-title">Documentation &amp; Dispatch</h3>
                <p className="phase-desc">
                  Export documentation, applicable certifications, customs procedures, and shipment coordination.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
