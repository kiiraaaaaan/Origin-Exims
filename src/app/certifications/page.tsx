'use client';

import React from 'react';
import Section from '@/components/Section';

/* ─────────────────────────────────────────────────────────────────────────────
   Registration logos — 7 items, one horizontal row, white cards
───────────────────────────────────────────────────────────────────────────── */
const REGISTRATION_LOGOS = [
  { src: '/images/certs/01_DGFT_IEC.png',    alt: 'DGFT IEC' },
  { src: '/images/certs/02_GST.png',          alt: 'GST' },
  { src: '/images/certs/03_FSSAI.png',        alt: 'FSSAI' },
  { src: '/images/certs/04_APEDA.png',        alt: 'APEDA' },
  { src: '/images/certs/05_COIR_BOARD.png',   alt: 'Coir Board' },
  { src: '/images/certs/06_SPICES_BOARD.png', alt: 'Spices Board' },
  { src: '/images/certs/07_MSME.png',         alt: 'MSME' },
];

/* ─────────────────────────────────────────────────────────────────────────────
   Documentation icons — 9 items, infinite marquee
───────────────────────────────────────────────────────────────────────────── */
const DOC_ICONS = [
  { src: '/images/certs/08_Certificate_of_Origin.png',   alt: 'Certificate of Origin',   label: 'Certificate\nof Origin' },
  { src: '/images/certs/09_Commercial_Invoice.png',      alt: 'Commercial Invoice',       label: 'Commercial\nInvoice' },
  { src: '/images/certs/10_Packing_List.png',            alt: 'Packing List',             label: 'Packing\nList' },
  { src: '/images/certs/11_Bill_of_Lading.png',          alt: 'Bill of Lading',           label: 'Bill of\nLading' },
  { src: '/images/certs/12_Shipping_Bill.png',           alt: 'Shipping Bill',            label: 'Shipping\nBill' },
  { src: '/images/certs/13_Phytosanitary_Certificate.png', alt: 'Phytosanitary Certificate', label: 'Phytosanitary\nCertificate' },
  { src: '/images/certs/14_Fumigation_Certificate.png',  alt: 'Fumigation Certificate',  label: 'Fumigation\nCertificate' },
  { src: '/images/certs/15_Certificate_of_Analysis.png', alt: 'Certificate of Analysis', label: 'Certificate\nof Analysis' },
  { src: '/images/certs/16_Inspection_Certificate.png',  alt: 'Inspection Certificate',  label: 'Inspection\nCertificate' },
];

/* ─── Keyframe injection (runs once on mount via <style>) ─────────────────── */
const MARQUEE_CSS = `
@keyframes marquee-scroll {
  0%   { transform: translateX(0); }
  100% { transform: translateX(-50%); }
}
.marquee-track {
  display: flex;
  width: max-content;
  animation: marquee-scroll 28s linear infinite;
}
.marquee-track:hover {
  animation-play-state: paused;
}
`;

export default function CertificationsPage() {
  return (
    <>
      {/* Inject marquee keyframes — avoids any build-tool dependency */}
      <style dangerouslySetInnerHTML={{ __html: MARQUEE_CSS }} />

      <Section
        background="porcelain"
        style={{
          paddingTop: 'clamp(5rem, 10vw, 8rem)',
          paddingBottom: 'clamp(4rem, 8vw, 7rem)',
        }}
      >
        {/* ── Outer wrapper: 90 vw, capped 1400 px ── */}
        <div
          style={{
            width: '90%',
            maxWidth: '1400px',
            marginLeft: 'auto',
            marginRight: 'auto',
          }}
        >

          {/* ── Page header ── */}
          <div style={{ marginBottom: 'clamp(2rem, 4vw, 3.5rem)', maxWidth: '660px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.9rem' }}>
              <span style={{ display: 'block', width: '1.75rem', height: '1.5px', background: 'var(--color-bronze)' }} />
              <span style={{ fontSize: '0.7rem', fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--color-bronze)' }}>
                Origin Exims
              </span>
            </div>
            <h1
              style={{
                fontFamily: 'var(--font-inter), sans-serif',
                fontSize: 'clamp(2rem, 4vw, 3rem)',
                fontWeight: 800,
                color: 'var(--color-graphite)',
                letterSpacing: '-0.03em',
                lineHeight: 1.08,
                margin: '0 0 0.9rem',
              }}
            >
              Certifications &amp; Compliance
            </h1>
            <p style={{ fontSize: 'clamp(0.9rem, 1.05vw, 1rem)', lineHeight: 1.7, color: 'rgba(30,30,30,0.55)', margin: 0, maxWidth: '500px' }}>
              Key registrations and certifications that enable us to export high-quality
              coir and agricultural commodities to global markets.
            </p>
          </div>

          {/* ═══════════════════════════════════════════════════════════════
              SECTION 1 — Business & Export Registration Logos (7 cards)
          ════════════════════════════════════════════════════════════════ */}
          <div style={{ marginBottom: 'clamp(2rem, 4vw, 3rem)' }}>
            <div style={{ display: 'flex', gap: '1rem' }}>
              {REGISTRATION_LOGOS.map((logo) => (
                <div
                  key={logo.alt}
                  style={{
                    flex: 1,
                    minWidth: 0,
                    background: '#ffffff',
                    border: '1px solid rgba(0,0,0,0.07)',
                    borderRadius: '14px',
                    boxShadow: '0 2px 14px rgba(0,0,0,0.055), 0 1px 3px rgba(0,0,0,0.04)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    padding: '1.25rem 1rem',
                    minHeight: '130px',
                  }}
                >
                  <img
                    src={logo.src}
                    alt={logo.alt}
                    style={{ height: '72px', width: 'auto', maxWidth: '100%', objectFit: 'contain', display: 'block' }}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* ═══════════════════════════════════════════════════════════════
              SECTION 2 — Export Documentation Infinite Marquee (9 icons)
          ════════════════════════════════════════════════════════════════ */}
          <div>
            {/* Clip overflow so only the visible strip shows */}
            <div style={{ overflow: 'hidden', width: '100%' }}>
              {/* Track contains two identical sets — when first set scrolls fully left,
                  the second set is in exactly the same position → seamless loop */}
              <div className="marquee-track">
                {/* Set A */}
                {DOC_ICONS.map((icon) => (
                  <div
                    key={`a-${icon.alt}`}
                    style={{
                      flexShrink: 0,
                      width: '170px',
                      background: '#ffffff',
                      border: '1px solid rgba(0,0,0,0.07)',
                      borderRadius: '14px',
                      boxShadow: '0 2px 14px rgba(0,0,0,0.055), 0 1px 3px rgba(0,0,0,0.04)',
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '0.65rem',
                      padding: '1.4rem 1rem',
                      minHeight: '140px',
                      marginRight: '1rem',
                    }}
                  >
                    <img
                      src={icon.src}
                      alt={icon.alt}
                      style={{ height: '52px', width: 'auto', maxWidth: '56px', objectFit: 'contain', display: 'block' }}
                    />
                    <span
                      style={{
                        fontSize: '0.78rem',
                        fontWeight: 500,
                        color: 'var(--color-graphite)',
                        textAlign: 'center',
                        lineHeight: 1.4,
                        whiteSpace: 'pre-line',
                      }}
                    >
                      {icon.label}
                    </span>
                  </div>
                ))}
                {/* Set B — exact duplicate for seamless loop */}
                {DOC_ICONS.map((icon) => (
                  <div
                    key={`b-${icon.alt}`}
                    style={{
                      flexShrink: 0,
                      width: '170px',
                      background: '#ffffff',
                      border: '1px solid rgba(0,0,0,0.07)',
                      borderRadius: '14px',
                      boxShadow: '0 2px 14px rgba(0,0,0,0.055), 0 1px 3px rgba(0,0,0,0.04)',
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '0.65rem',
                      padding: '1.4rem 1rem',
                      minHeight: '140px',
                      marginRight: '1rem',
                    }}
                  >
                    <img
                      src={icon.src}
                      alt={icon.alt}
                      style={{ height: '52px', width: 'auto', maxWidth: '56px', objectFit: 'contain', display: 'block' }}
                    />
                    <span
                      style={{
                        fontSize: '0.78rem',
                        fontWeight: 500,
                        color: 'var(--color-graphite)',
                        textAlign: 'center',
                        lineHeight: 1.4,
                        whiteSpace: 'pre-line',
                      }}
                    >
                      {icon.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </Section>
    </>
  );
}
