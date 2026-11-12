'use client';

import React from 'react';
import Section from '@/components/Section';

/* ─── Registration logos — with sub-labels matching reference ─────────────── */
const REGISTRATION_LOGOS = [
  {
    src: '/images/certs/DGFT_IEC.png',
    alt: 'DGFT IEC',
    label: 'DGFT\n(IEC)',
  },
  {
    src: '/images/certs/GST.png',
    alt: 'GST',
    label: 'Goods and\nServices Tax',
  },
  {
    src: '/images/certs/FSSAI.png',
    alt: 'FSSAI',
    label: 'Food Safety &\nStandards Authority',
  },
  {
    src: '/images/certs/apeda.png',
    alt: 'APEDA',
    label: 'APEDA',
  },
  {
    src: '/images/certs/Coir_Board.png',
    alt: 'Coir Board',
    label: 'COIR BOARD\nMinistry of MSME, Govt. of India',
  },
  {
    src: '/images/certs/Spices_Board_India.png',
    alt: 'Spices Board India',
    label: 'SPICES BOARD\nINDIA',
  },
  {
    src: '/images/certs/MSME.png',
    alt: 'MSME',
    label: 'Ministry of Micro,\nSmall & Medium Enterprises',
  },
];

/* ─── Documentation icons ─────────────────────────────────────────────────── */
const DOC_ICONS = [
  { src: '/images/certs/Certificate_of_Origin.png',    alt: 'Certificate of Origin',    label: 'Certificate\nof Origin' },
  { src: '/images/certs/Commercial_Invoice.png',       alt: 'Commercial Invoice',        label: 'Commercial\nInvoice' },
  { src: '/images/certs/Packing_List.png',             alt: 'Packing List',              label: 'Packing\nList' },
  { src: '/images/certs/Bill_of_Lading.png',           alt: 'Bill of Lading',            label: 'Bill of\nLading' },
  { src: '/images/certs/Shipping_Bill.png',            alt: 'Shipping Bill',             label: 'Shipping\nBill' },
  { src: '/images/certs/Phytosanitary_Certificate.png',alt: 'Phytosanitary Certificate', label: 'Phytosanitary\nCertificate' },
  { src: '/images/certs/Fumigation_Certificate.png',   alt: 'Fumigation Certificate',    label: 'Fumigation\nCertificate' },
  { src: '/images/certs/Certificate_of_Analysis.png',  alt: 'Certificate of Analysis',   label: 'Certificate\nof Analysis' },
  { src: '/images/certs/Inspection_Certificate.png',   alt: 'Inspection Certificate',    label: 'Inspection\nCertificate' },
];

/* ─── CSS ─────────────────────────────────────────────────────────────────── */
const MARQUEE_CSS = `
@keyframes marquee-scroll {
  0%   { transform: translateX(0); }
  100% { transform: translateX(-50%); }
}
.mq-reg {
  display: flex;
  align-items: center;
  width: max-content;
  animation: marquee-scroll 30s linear infinite;
}
.mq-reg:hover { animation-play-state: paused; }

.mq-doc {
  display: flex;
  align-items: center;
  width: max-content;
  animation: marquee-scroll 36s linear infinite;
}
.mq-doc:hover { animation-play-state: paused; }
`;

/* ─── Single registration item ───────────────────────────────────────────── */
function RegItem({ src, alt, label }: { src: string; alt: string; label: string }) {
  return (
    <div
      style={{
        flexShrink: 0,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '0.75rem',
        width: '220px',
        marginRight: '60px',
      }}
    >
      <img
        src={src}
        alt={alt}
        style={{
          height: '100px',
          width: 'auto',
          maxWidth: '210px',
          objectFit: 'contain',
          display: 'block',
        }}
      />
      <span
        style={{
          fontSize: '0.72rem',
          fontWeight: 500,
          color: 'rgba(30,30,30,0.55)',
          textAlign: 'center',
          lineHeight: 1.4,
          whiteSpace: 'pre-line',
          letterSpacing: '0.01em',
        }}
      >
        {label}
      </span>
    </div>
  );
}

/* ─── Single doc item ─────────────────────────────────────────────────────── */
function DocItem({ src, alt, label }: { src: string; alt: string; label: string }) {
  return (
    <div
      style={{
        flexShrink: 0,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '0.75rem',
        width: '180px',
        marginRight: '60px',
      }}
    >
      <img
        src={src}
        alt={alt}
        style={{
          height: '90px',
          width: 'auto',
          maxWidth: '170px',
          objectFit: 'contain',
          display: 'block',
        }}
      />
      <span
        style={{
          fontSize: '0.72rem',
          fontWeight: 500,
          color: 'rgba(30,30,30,0.55)',
          textAlign: 'center',
          lineHeight: 1.4,
          whiteSpace: 'pre-line',
          letterSpacing: '0.01em',
        }}
      >
        {label}
      </span>
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
        {/* ── Page header ── */}
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

        {/* ── Section label: Business & Export Registrations ── */}
        <div
          style={{
            width: '90%',
            maxWidth: '1400px',
            marginLeft: 'auto',
            marginRight: 'auto',
            marginBottom: '1.25rem',
            display: 'flex',
            alignItems: 'center',
            gap: '1rem',
          }}
        >
          <span style={{ fontSize: '0.72rem', fontWeight: 800, letterSpacing: '0.16em', textTransform: 'uppercase' as const, color: 'var(--color-graphite)', whiteSpace: 'nowrap' }}>
            Business &amp; Export Registrations
          </span>
          <div style={{ flex: 1, height: '1px', background: 'rgba(0,0,0,0.10)' }} />
        </div>

        {/* ═══ MARQUEE 1 — Registration Logos ═══ */}
        <div
          style={{
            overflow: 'hidden',
            width: '100vw',
            position: 'relative',
            left: '50%',
            marginLeft: '-50vw',
            paddingTop: '1rem',
            paddingBottom: '1rem',
            marginBottom: 'clamp(3rem, 6vw, 5rem)',
          }}
        >
          <div className="mq-reg">
            {REGISTRATION_LOGOS.map((l) => <RegItem key={`a-${l.alt}`} {...l} />)}
            {REGISTRATION_LOGOS.map((l) => <RegItem key={`b-${l.alt}`} {...l} />)}
          </div>
        </div>

        {/* ── Section label: Export Documentation ── */}
        <div
          style={{
            width: '90%',
            maxWidth: '1400px',
            marginLeft: 'auto',
            marginRight: 'auto',
            marginBottom: '1.25rem',
            display: 'flex',
            alignItems: 'center',
            gap: '1rem',
          }}
        >
          <span style={{ fontSize: '0.72rem', fontWeight: 800, letterSpacing: '0.16em', textTransform: 'uppercase' as const, color: 'var(--color-graphite)', whiteSpace: 'nowrap' }}>
            Export Documentation
          </span>
          <div style={{ flex: 1, height: '1px', background: 'rgba(0,0,0,0.10)' }} />
        </div>

        {/* ═══ MARQUEE 2 — Documentation Icons ═══ */}
        <div
          style={{
            overflow: 'hidden',
            width: '100vw',
            position: 'relative',
            left: '50%',
            marginLeft: '-50vw',
            paddingTop: '1rem',
            paddingBottom: '1rem',
          }}
        >
          <div className="mq-doc">
            {DOC_ICONS.map((d) => <DocItem key={`a-${d.alt}`} {...d} />)}
            {DOC_ICONS.map((d) => <DocItem key={`b-${d.alt}`} {...d} />)}
          </div>
        </div>

      </Section>
    </>
  );
}
