import React from 'react';
import Link from 'next/link';
import Section from '@/components/Section';
import Container from '@/components/Container';
import Placeholder from '@/components/Placeholder';

export default function HomePage() {
  return (
    <>
      {/* 1. Hero Section — Editorial style with product background */}
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
          paddingBottom: 'clamp(4rem, 8vw, 6rem)',
        }}
      >
        {/* Full-bleed product background image — unchanged */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            zIndex: 0,
            backgroundImage: 'url(/images/hero-farming.jpg)',
            backgroundSize: 'cover',
            backgroundPosition: 'center 60%',
          }}
        />
        {/* Dark overlay for text legibility */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            zIndex: 1,
            background: 'linear-gradient(to right, rgba(0,0,0,0.80) 0%, rgba(0,0,0,0.55) 55%, rgba(0,0,0,0.20) 100%)',
          }}
        />

        {/* Text content — left-aligned, editorial */}
        <Container style={{ position: 'relative', zIndex: 10, width: '100%' }}>
          {/* Top badge: bronze dash + label */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.75rem',
              marginBottom: '1.75rem',
            }}
          >
            <span
              style={{
                display: 'block',
                width: '2rem',
                height: '2px',
                background: 'var(--color-bronze)',
                flexShrink: 0,
              }}
            />
            <span
              style={{
                color: 'var(--color-bronze)',
                fontSize: '0.75rem',
                fontFamily: 'var(--font-inter), sans-serif',
                fontWeight: 500,
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
              }}
            >
              Origin Exims
            </span>
          </div>

          {/* Large headline — 3 lines matching reference */}
          <h1
            style={{
              fontFamily: 'var(--font-inter), sans-serif',
              fontSize: 'clamp(2.4rem, 4vw, 4.2rem)',
              fontWeight: 800,
              lineHeight: 1.08,
              letterSpacing: '-0.03em',
              color: '#ffffff',
              maxWidth: '800px',
              margin: '0 0 1.75rem',
            }}
          >
            Your Trusted
            <br />
            Exporters of Premium
            <br />
            <span
              style={{
                color: 'var(--color-bronze)',
                textShadow: '0 0 32px rgba(180,130,60,0.55), 0 0 8px rgba(180,130,60,0.30)',
              }}
            >
              Coir &amp; Agro Commodities.
            </span>
          </h1>

          {/* Supporting copy */}
          <p
            style={{
              fontSize: 'clamp(0.9rem, 1.1vw, 1.05rem)',
              fontFamily: 'var(--font-inter), sans-serif',
              fontWeight: 400,
              lineHeight: 1.72,
              color: 'rgba(255,255,255,0.68)',
              maxWidth: '460px',
              margin: '0 0 2.5rem',
            }}
          >
            From India&apos;s farms and coir mills, we connect quality assured agricultural and coir commodities to global buyers worldwide.
          </p>

          {/* CTA buttons — pill shaped */}
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <Link
              href="/product"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                padding: '0.875rem 2rem',
                borderRadius: '999px',
                background: '#ffffff',
                color: '#000000',
                fontFamily: 'var(--font-inter), sans-serif',
                fontWeight: 600,
                fontSize: '0.9375rem',
                textDecoration: 'none',
                whiteSpace: 'nowrap',
              }}
            >
              Explore Our Products <span aria-hidden="true">↗</span>
            </Link>
            <Link
              href="/contact"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                padding: '0.875rem 2rem',
                borderRadius: '999px',
                border: '1px solid rgba(255,255,255,0.40)',
                color: '#ffffff',
                fontFamily: 'var(--font-inter), sans-serif',
                fontWeight: 500,
                fontSize: '0.9375rem',
                textDecoration: 'none',
                whiteSpace: 'nowrap',
              }}
            >
              Contact Us
            </Link>
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
