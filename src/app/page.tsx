import React from 'react';
import Link from 'next/link';
import Section from '@/components/Section';
import Container from '@/components/Container';
import Placeholder from '@/components/Placeholder';
import CertMarquees from '@/components/CertMarquees';
import ContactSection from '@/components/ContactSection';
import { CATEGORIES, getProductsByCategory } from '@/lib/products';

export default function HomePage() {
  return (
    <>
      {/* ══════════════════════════════════════════════════════════════
          1. HERO — dark full-bleed
      ══════════════════════════════════════════════════════════════ */}
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
        <div style={{ position: 'absolute', inset: 0, zIndex: 0, backgroundImage: 'url(/images/hero-farming.jpg)', backgroundSize: 'cover', backgroundPosition: 'center 60%' }} />
        <div style={{ position: 'absolute', inset: 0, zIndex: 1, background: 'linear-gradient(to right, rgba(0,0,0,0.88) 0%, rgba(0,0,0,0.72) 45%, rgba(0,0,0,0.25) 100%)' }} />
        <Container style={{ position: 'relative', zIndex: 10, width: '100%' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.75rem' }}>
            <span style={{ display: 'block', width: '2rem', height: '2px', background: 'var(--color-bronze)', flexShrink: 0 }} />
            <span style={{ color: 'var(--color-bronze)', fontSize: '0.75rem', fontFamily: 'var(--font-inter), sans-serif', fontWeight: 500, letterSpacing: '0.1em', textTransform: 'uppercase' as const }}>
              Origin Exims
            </span>
          </div>
          <h1 style={{ fontFamily: 'var(--font-inter), sans-serif', fontSize: 'clamp(2.8rem, 5.5vw, 5.5rem)', fontWeight: 800, lineHeight: 1.08, letterSpacing: '-0.03em', color: '#ffffff', margin: '0 0 1.75rem' }}>
            Your Trusted<br />
            Exporter of Premium<br />
            <span className="hero-bronze-glow">Coir &amp; Agro</span>
            <span style={{ color: '#ffffff' }}> Commodities.</span>
          </h1>
          <p style={{ fontSize: 'clamp(0.9rem, 1.1vw, 1.05rem)', fontFamily: 'var(--font-inter), sans-serif', fontWeight: 400, lineHeight: 1.72, color: 'rgba(255,255,255,0.68)', maxWidth: '460px', margin: '0 0 2.5rem' }}>
            From India&apos;s farms and coir mills, we connect quality assured agricultural and coir commodities to global buyers worldwide.
          </p>
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' as const }}>
            <Link href="/product" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', padding: '0.875rem 2rem', borderRadius: '999px', background: '#ffffff', color: '#000000', fontFamily: 'var(--font-inter), sans-serif', fontWeight: 600, fontSize: '0.9375rem', textDecoration: 'none', whiteSpace: 'nowrap' as const }}>
              Explore Our Products <span aria-hidden="true">↗</span>
            </Link>
            <Link href="/contact" style={{ display: 'inline-flex', alignItems: 'center', padding: '0.875rem 2rem', borderRadius: '999px', border: '1px solid rgba(255,255,255,0.40)', color: '#ffffff', fontFamily: 'var(--font-inter), sans-serif', fontWeight: 500, fontSize: '0.9375rem', textDecoration: 'none', whiteSpace: 'nowrap' as const }}>
              Contact Us
            </Link>
          </div>
        </Container>
      </Section>

      {/* ══════════════════════════════════════════════════════════════
          2. CORE VALUES — porcelain #F5F5F0
      ══════════════════════════════════════════════════════════════ */}
      <section style={{ background: '#F7F5F2' }}>
        <div style={{ padding: 'clamp(4rem,8vw,6rem) 0' }}>
        <Container>
          <div style={{ maxWidth: '640px', marginBottom: 'clamp(2.5rem, 5vw, 4rem)' }}>
            <span className="text-caption">What We Stand For</span>
            <h2 style={{ fontFamily: 'var(--font-inter), sans-serif', fontSize: 'clamp(1.75rem, 3.5vw, 2.75rem)', fontWeight: 800, letterSpacing: '-0.03em', lineHeight: 1.08, color: 'var(--color-graphite)', margin: '0.5rem 0 0' }}>Our Core Values</h2>
            <p className="text-supporting" style={{ marginTop: '0.75rem' }}>The principles that drive every partnership and shipment at Origin Exims.</p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.75rem' }}>
            {[
              { img: '/images/core-compliance.jpg', alt: 'Documents and financial records on a desk', title: 'Compliance & Documentation', desc: 'Ensuring every shipment meets the required certifications, regulatory standards, and documentation requirements.' },
              { img: '/images/core-quality.jpg', alt: 'Warehouse with carefully packaged goods ready for export', title: 'Quality & Reliability', desc: 'Sourcing quality products and maintaining consistent standards to deliver what we promise.' },
              { img: '/images/core-trust.jpg', alt: 'Business handshake representing partnership and trust', title: 'Trust & Transparency', desc: 'Building lasting partnerships through honest communication, transparent processes, and dependable business practices.' },
            ].map(({ img, alt, title, desc }) => (
              <div key={title} className="core-value-card">
                <div className="core-value-img-wrap"><img src={img} alt={alt} className="core-value-img" /></div>
                <div className="core-value-content">
                  <h3 className="core-value-title">{title}</h3>
                  <p className="core-value-desc">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </Container>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════
          3. CERTIFICATIONS — white #FFFFFF, slight contrast from porcelain
      ══════════════════════════════════════════════════════════════ */}
      <section id="certifications" style={{ scrollMarginTop: 'var(--nav-height)', background: '#ffffff' }}>
        <div style={{ paddingTop: 'clamp(4rem, 8vw, 6rem)', paddingBottom: 'clamp(4rem, 8vw, 6rem)' }}>
          {/* Header */}
          <div style={{ width: '90%', maxWidth: '1400px', marginLeft: 'auto', marginRight: 'auto', marginBottom: 'clamp(2rem, 4vw, 3rem)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.9rem' }}>
              <span style={{ display: 'block', width: '1.75rem', height: '1.5px', background: 'var(--color-bronze)' }} />
              <span style={{ fontSize: '0.7rem', fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase' as const, color: 'var(--color-bronze)' }}>Certifications</span>
            </div>
            <h2 style={{ fontFamily: 'var(--font-inter), sans-serif', fontSize: 'clamp(1.75rem, 3.5vw, 2.75rem)', fontWeight: 800, color: 'var(--color-graphite)', letterSpacing: '-0.03em', lineHeight: 1.08, margin: 0 }}>
              Certifications &amp; Compliance
            </h2>
          </div>
          {/* Live marquees — same component as /certifications */}
          <CertMarquees />
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════
          4. PRODUCTS — warm off-white #F7F5F2
      ══════════════════════════════════════════════════════════════ */}
      <section id="product" style={{ scrollMarginTop: 'var(--nav-height)', background: '#F7F5F2' }}>
        <div style={{ paddingTop: 'clamp(4rem, 8vw, 6rem)', paddingBottom: 'clamp(4rem, 8vw, 6rem)' }}>
          <Container>
            <div style={{ maxWidth: '640px', marginBottom: 'clamp(2.5rem, 5vw, 4rem)' }}>
              <span className="text-caption" style={{ color: 'var(--color-bronze)' }}>Export Portfolio</span>
              <h2 style={{ fontFamily: 'var(--font-inter), sans-serif', fontSize: 'clamp(1.75rem, 3.5vw, 2.75rem)', fontWeight: 800, color: 'var(--color-graphite)', letterSpacing: '-0.03em', lineHeight: 1.08, margin: '0.5rem 0 1rem' }}>
                Our Products
              </h2>
              <p style={{ fontSize: 'clamp(0.95rem, 1.1vw, 1.0625rem)', lineHeight: 1.7, color: 'rgba(30,30,30,0.58)', maxWidth: '520px', margin: 0 }}>
                Origin EXIMS exports two core product categories — agricultural commodities and coconut coir products — sourced from South India and delivered to global markets.
              </p>
            </div>
            <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap' as const }}>
              {CATEGORIES.map((cat) => {
                const products = getProductsByCategory(cat.id);
                return (
                  <div key={cat.id} style={{ flex: '1 1 340px', background: '#fff', borderRadius: '20px', overflow: 'hidden', border: '1px solid rgba(0,0,0,0.07)', boxShadow: '0 2px 20px rgba(0,0,0,0.055)' }}>
                    <Link href={cat.slug} style={{ display: 'block', textDecoration: 'none' }}>
                      <img src={cat.image} alt={cat.imageAlt} style={{ width: '100%', height: '240px', objectFit: 'cover', display: 'block' }} />
                    </Link>
                    <div style={{ padding: '1.75rem' }}>
                      <span className="phase-label">{cat.id === 'coir' ? 'Category 01' : 'Category 02'}</span>
                      <h3 style={{ fontFamily: 'var(--font-serif-title), serif', fontSize: '1.35rem', fontWeight: 500, color: 'var(--color-graphite)', margin: '0.5rem 0 0.6rem' }}>{cat.name}</h3>
                      <p style={{ fontSize: '0.9rem', lineHeight: 1.65, color: 'rgba(30,30,30,0.58)', margin: '0 0 1.25rem' }}>{cat.intro}</p>
                      <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 1.5rem', display: 'flex', flexDirection: 'column' as const, gap: '0.3rem' }}>
                        {products.map(p => (
                          <li key={p.id}>
                            <Link href={`${cat.slug}/${p.slug}`} style={{ fontSize: '0.85rem', color: 'rgba(30,30,30,0.6)', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                              <span style={{ width: '4px', height: '4px', borderRadius: '50%', background: 'var(--color-bronze)', flexShrink: 0, display: 'block' }} />
                              {p.name}
                            </Link>
                          </li>
                        ))}
                      </ul>
                      <Link href={cat.slug} className="cat-explore-btn">
                        Explore {cat.name}
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M5 12h14M13 5l7 7-7 7" />
                        </svg>
                      </Link>
                    </div>
                  </div>
                );
              })}
            </div>
          </Container>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════
          5. CONTACT — porcelain #F5F5F0 (back to base, clear separation)
      ══════════════════════════════════════════════════════════════ */}
      <section id="contact" style={{ scrollMarginTop: 'var(--nav-height)', background: '#ffffff' }}>
        <div style={{ paddingTop: 'clamp(4rem, 8vw, 6rem)', paddingBottom: 'clamp(5rem, 10vw, 8rem)' }}>
          <Container>
            <ContactSection />
          </Container>
        </div>
      </section>
    </>
  );
}
