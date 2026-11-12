import React from 'react';
import Section from '@/components/Section';
import CertMarquees from '@/components/CertMarquees';

export const metadata = {
  title: 'Certifications & Compliance — Origin Exims',
  description: 'Key registrations and certifications that enable Origin Exims to export high-quality coir and agricultural commodities to global markets.',
};

export default function CertificationsPage() {
  return (
    <Section
      background="porcelain"
      style={{ paddingTop: 'clamp(5rem, 10vw, 8rem)', paddingBottom: 'clamp(4rem, 8vw, 7rem)' }}
    >
      {/* ── Page header ── */}
      <div style={{ width: '90%', maxWidth: '1400px', marginLeft: 'auto', marginRight: 'auto', marginBottom: 'clamp(3rem, 6vw, 5rem)' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.9rem' }}>
          <span style={{ display: 'block', width: '1.75rem', height: '1.5px', background: 'var(--color-bronze)' }} />
          <span style={{ fontSize: '0.7rem', fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase' as const, color: 'var(--color-bronze)' }}>
            Origin Exims
          </span>
        </div>
        <h1 style={{ fontFamily: 'var(--font-inter), sans-serif', fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 800, color: 'var(--color-graphite)', letterSpacing: '-0.03em', lineHeight: 1.08, margin: '0 0 0.9rem' }}>
          Certifications &amp; Compliance
        </h1>
        <p style={{ fontSize: 'clamp(0.9rem, 1.05vw, 1rem)', lineHeight: 1.7, color: 'rgba(30,30,30,0.55)', margin: 0, maxWidth: '500px' }}>
          Key registrations and certifications that enable us to export high-quality coir and agricultural commodities to global markets.
        </p>
      </div>

      {/* ── Both marquees ── */}
      <CertMarquees />
    </Section>
  );
}
