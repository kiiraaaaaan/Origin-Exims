'use client';

import React from 'react';

/* ─── Assets ─────────────────────────────────────────────────────────────── */
const REGISTRATION_LOGOS = [
  { src: '/images/certs/DGFT_IEC.png',          alt: 'DGFT IEC' },
  { src: '/images/certs/GST.png',                alt: 'GST' },
  { src: '/images/certs/fssai.png',              alt: 'FSSAI' },
  { src: '/images/certs/apeda.png',              alt: 'APEDA' },
  { src: '/images/certs/Coir_Board.png',         alt: 'Coir Board' },
  { src: '/images/certs/Spices_Board_India.png', alt: 'Spices Board India' },
  { src: '/images/certs/MSME.png',               alt: 'MSME' },
];

const DOC_ICONS = [
  { src: '/images/certs/Certificate_of_Origin.png',    alt: 'Certificate of Origin' },
  { src: '/images/certs/Commercial_Invoice.png',       alt: 'Commercial Invoice' },
  { src: '/images/certs/Packing_List.png',             alt: 'Packing List' },
  { src: '/images/certs/Bill_of_Lading.png',           alt: 'Bill of Lading' },
  { src: '/images/certs/Shipping_Bill.png',            alt: 'Shipping Bill' },
  { src: '/images/certs/Phytosanitary_Certificate.png',alt: 'Phytosanitary Certificate' },
  { src: '/images/certs/Fumigation_Certificate.png',   alt: 'Fumigation Certificate' },
  { src: '/images/certs/Certificate_of_Analysis.png',  alt: 'Certificate of Analysis' },
  { src: '/images/certs/Inspection_Certificate.png',   alt: 'Inspection Certificate' },
];

const MARQUEE_CSS = `
@keyframes mq-scroll {
  0%   { transform: translateX(0); }
  100% { transform: translateX(-50%); }
}
.mq-reg {
  display: flex; align-items: center; width: max-content;
  animation: mq-scroll 32s linear infinite;
}
.mq-reg:hover { animation-play-state: paused; }
.mq-doc {
  display: flex; align-items: center; width: max-content;
  animation: mq-scroll 38s linear infinite;
}
.mq-doc:hover { animation-play-state: paused; }
`;

function RegCard({ src, alt }: { src: string; alt: string }) {
  return (
    <div style={{
      flexShrink: 0, width: '320px', height: '215px', marginRight: '20px',
      background: '#ffffff', border: '1px solid rgba(0,0,0,0.07)',
      borderRadius: '18px', boxShadow: '0 2px 16px rgba(0,0,0,0.06), 0 1px 4px rgba(0,0,0,0.04)',
      padding: '1.75rem', boxSizing: 'border-box' as const,
    }}>
      <img src={src} alt={alt} style={{ width: '100%', height: '100%', objectFit: 'contain', objectPosition: 'center center', display: 'block' }} />
    </div>
  );
}

function DocCard({ src, alt }: { src: string; alt: string }) {
  return (
    <div style={{
      flexShrink: 0, width: '270px', height: '215px', marginRight: '20px',
      background: '#ffffff', border: '1px solid rgba(0,0,0,0.07)',
      borderRadius: '18px', boxShadow: '0 2px 16px rgba(0,0,0,0.06), 0 1px 4px rgba(0,0,0,0.04)',
      padding: '1.75rem', boxSizing: 'border-box' as const, overflow: 'hidden',
    }}>
      <img src={src} alt={alt} style={{ width: '100%', height: '100%', objectFit: 'contain', objectPosition: 'center center', display: 'block' }} />
    </div>
  );
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ width: '90%', maxWidth: '1400px', marginLeft: 'auto', marginRight: 'auto', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '1rem' }}>
      <span style={{ fontSize: '0.72rem', fontWeight: 800, letterSpacing: '0.16em', textTransform: 'uppercase' as const, color: 'var(--color-graphite)', whiteSpace: 'nowrap' }}>
        {children}
      </span>
      <div style={{ flex: 1, height: '1px', background: 'rgba(0,0,0,0.10)' }} />
    </div>
  );
}

export default function CertMarquees() {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: MARQUEE_CSS }} />

      {/* ── Label 1 ── */}
      <SectionLabel>Business &amp; Export Registrations</SectionLabel>

      {/* ═══ MARQUEE 1 — Registration Logos ═══ */}
      <div style={{ overflow: 'hidden', width: '100vw', position: 'relative', left: '50%', marginLeft: '-50vw', paddingTop: '0.5rem', paddingBottom: '0.5rem', marginBottom: 'clamp(3rem, 5vw, 4.5rem)' }}>
        <div className="mq-reg">
          <div style={{ flexShrink: 0, width: '3vw' }} />
          {REGISTRATION_LOGOS.map((l) => <RegCard key={`a-${l.alt}`} {...l} />)}
          {REGISTRATION_LOGOS.map((l) => <RegCard key={`b-${l.alt}`} {...l} />)}
        </div>
      </div>

      {/* ── Label 2 ── */}
      <SectionLabel>Export Documentation</SectionLabel>

      {/* ═══ MARQUEE 2 — Documentation Icons ═══ */}
      <div style={{ overflow: 'hidden', width: '100vw', position: 'relative', left: '50%', marginLeft: '-50vw', paddingTop: '0.5rem', paddingBottom: '0.5rem' }}>
        <div className="mq-doc">
          <div style={{ flexShrink: 0, width: '3vw' }} />
          {DOC_ICONS.map((d) => <DocCard key={`a-${d.alt}`} {...d} />)}
          {DOC_ICONS.map((d) => <DocCard key={`b-${d.alt}`} {...d} />)}
        </div>
      </div>
    </>
  );
}
