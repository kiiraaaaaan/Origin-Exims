'use client';

import React from 'react';
import Section from '@/components/Section';

/* ─── Assets ─────────────────────────────────────────────────────────────── */
const REGISTRATION_LOGOS = [
  { src: '/images/certs/01_DGFT_IEC.png',    alt: 'DGFT IEC' },
  { src: '/images/certs/02_GST.png',          alt: 'GST' },
  { src: '/images/certs/03_FSSAI.png',        alt: 'FSSAI' },
  { src: '/images/certs/04_APEDA.png',        alt: 'APEDA' },
  { src: '/images/certs/05_COIR_BOARD.png',   alt: 'Coir Board' },
  { src: '/images/certs/06_SPICES_BOARD.png', alt: 'Spices Board' },
  { src: '/images/certs/07_MSME.png',         alt: 'MSME' },
];

const DOC_ICONS = [
  { src: '/images/certs/08_Certificate_of_Origin.png',    alt: 'Certificate of Origin' },
  { src: '/images/certs/09_Commercial_Invoice.png',       alt: 'Commercial Invoice' },
  { src: '/images/certs/10_Packing_List.png',             alt: 'Packing List' },
  { src: '/images/certs/11_Bill_of_Lading.png',           alt: 'Bill of Lading' },
  { src: '/images/certs/12_Shipping_Bill.png',            alt: 'Shipping Bill' },
  { src: '/images/certs/13_Phytosanitary_Certificate.png',alt: 'Phytosanitary Certificate' },
  { src: '/images/certs/14_Fumigation_Certificate.png',   alt: 'Fumigation Certificate' },
  { src: '/images/certs/15_Certificate_of_Analysis.png',  alt: 'Certificate of Analysis' },
  { src: '/images/certs/16_Inspection_Certificate.png',   alt: 'Inspection Certificate' },
];

/* ─── Injected CSS ───────────────────────────────────────────────────────── */
const MARQUEE_CSS = `
@keyframes marquee-ltr {
  0%   { transform: translateX(0); }
  100% { transform: translateX(-50%); }
}
.marquee-track-reg {
  display: flex;
  align-items: center;
  width: max-content;
  animation: marquee-ltr 22s linear infinite;
}
.marquee-track-reg:hover {
  animation-play-state: paused;
}
.marquee-track-doc {
  display: flex;
  align-items: center;
  width: max-content;
  animation: marquee-ltr 26s linear infinite;
}
.marquee-track-doc:hover {
  animation-play-state: paused;
}
`;

/* ─── Marquee logo item ───────────────────────────────────────────────────── */
function RegLogo({ src, alt }: { src: string; alt: string }) {
  return (
    <div
      style={{
        flexShrink: 0,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: '100px',
      }}
    >
      <img
        src={src}
        alt={alt}
        style={{
          height: '65px',
          width: 'auto',
          maxWidth: '170px',
          objectFit: 'contain',
          display: 'block',
        }}
      />
    </div>
  );
}

/* ─── Marquee doc item ────────────────────────────────────────────────────── */
function DocIcon({ src, alt }: { src: string; alt: string }) {
  return (
    <div
      style={{
        flexShrink: 0,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: '80px',
      }}
    >
      <img
        src={src}
        alt={alt}
        style={{
          height: '82px',
          width: 'auto',
          maxWidth: '130px',
          objectFit: 'contain',
          display: 'block',
        }}
      />
    </div>
  );
}

/* ─── Page ───────────────────────────────────────────────────────────────── */
export default function CertificationsPage() {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: MARQUEE_CSS }} />

      <Section
        background="porcelain"
        style={{
          paddingTop: 'clamp(5rem, 10vw, 8rem)',
          paddingBottom: 'clamp(4rem, 8vw, 7rem)',
        }}
      >
        {/* ── Page header (90 vw wrapper) ── */}
        <div
          style={{
            width: '90%',
            maxWidth: '1400px',
            marginLeft: 'auto',
            marginRight: 'auto',
            marginBottom: 'clamp(3rem, 6vw, 5rem)',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.9rem' }}>
            <span style={{ display: 'block', width: '1.75rem', height: '1.5px', background: 'var(--color-bronze)' }} />
            <span style={{ fontSize: '0.7rem', fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase' as const, color: 'var(--color-bronze)' }}>
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

        {/* ═══════════════════════════════════════════════════════════
            MARQUEE 1 — Registration Logos
        ══════════════════════════════════════════════════════════════ */}
        <div
          style={{
            overflow: 'hidden',
            width: '100%',
            height: '180px',
            display: 'flex',
            alignItems: 'center',
            marginBottom: 'clamp(3rem, 6vw, 5rem)',
          }}
        >
          <div className="marquee-track-reg">
            {/* Set A */}
            {REGISTRATION_LOGOS.map((logo) => (
              <RegLogo key={`a-${logo.alt}`} src={logo.src} alt={logo.alt} />
            ))}
            {/* Set B — duplicate for seamless loop */}
            {REGISTRATION_LOGOS.map((logo) => (
              <RegLogo key={`b-${logo.alt}`} src={logo.src} alt={logo.alt} />
            ))}
          </div>
        </div>

        {/* ═══════════════════════════════════════════════════════════
            MARQUEE 2 — Export Documentation Icons
        ══════════════════════════════════════════════════════════════ */}
        <div
          style={{
            overflow: 'hidden',
            width: '100%',
            height: '180px',
            display: 'flex',
            alignItems: 'center',
          }}
        >
          <div className="marquee-track-doc">
            {/* Set A */}
            {DOC_ICONS.map((icon) => (
              <DocIcon key={`a-${icon.alt}`} src={icon.src} alt={icon.alt} />
            ))}
            {/* Set B — duplicate for seamless loop */}
            {DOC_ICONS.map((icon) => (
              <DocIcon key={`b-${icon.alt}`} src={icon.src} alt={icon.alt} />
            ))}
          </div>
        </div>

      </Section>
    </>
  );
}
