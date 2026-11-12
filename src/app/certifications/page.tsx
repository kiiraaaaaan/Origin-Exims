import React from 'react';
import Section from '@/components/Section';
import Container from '@/components/Container';

export const metadata = {
  title: 'Certifications & Compliance — Origin Exims',
  description:
    'Key registrations and certifications that enable Origin Exims to export high-quality coir and agricultural commodities to global markets.',
};

/* ─── Shared card wrapper ──────────────────────────────────────────────────── */
function CertCard({
  children,
  label,
  wide,
}: {
  children: React.ReactNode;
  label?: string;
  wide?: boolean;
}) {
  return (
    <div
      style={{
        background: '#ffffff',
        border: '1px solid rgba(0,0,0,0.07)',
        borderRadius: '14px',
        boxShadow: '0 2px 12px rgba(0,0,0,0.055), 0 1px 3px rgba(0,0,0,0.04)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '0.5rem',
        padding: wide ? '1.75rem 2rem' : '1.5rem 1.25rem',
        minHeight: '110px',
        flex: 1,
        minWidth: 0,
      }}
    >
      {children}
      {label && (
        <span
          style={{
            fontSize: '0.72rem',
            color: 'rgba(0,0,0,0.42)',
            textAlign: 'center',
            lineHeight: 1.4,
            marginTop: '0.25rem',
          }}
        >
          {label}
        </span>
      )}
    </div>
  );
}

/* ─── Section header row ───────────────────────────────────────────────────── */
function CertSectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: '1rem',
        marginBottom: '1.25rem',
      }}
    >
      <span
        style={{
          fontSize: '0.7rem',
          fontWeight: 700,
          letterSpacing: '0.12em',
          textTransform: 'uppercase',
          color: 'var(--color-graphite)',
          whiteSpace: 'nowrap',
        }}
      >
        {children}
      </span>
      <div style={{ flex: 1, height: '1px', background: 'rgba(0,0,0,0.10)' }} />
    </div>
  );
}

/* ─── LOGO SVGs ─────────────────────────────────────────────────────────────
   Each is a faithful inline SVG reproduction of the official cert mark.
   To use a real logo file, replace the <svg> block with:
     <img src="/images/certs/dgft.png" alt="DGFT" style={{ height: '64px', objectFit: 'contain' }} />
   ─────────────────────────────────────────────────────────────────────────── */

const DgftLogo = () => (
  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '4px' }}>
    {/* Ashoka Pillar simplified */}
    <svg width="44" height="44" viewBox="0 0 44 44" fill="none">
      <circle cx="22" cy="22" r="21" stroke="#8B6914" strokeWidth="1.5" fill="none" />
      <rect x="17" y="10" width="10" height="3" rx="1" fill="#8B6914" />
      <rect x="20" y="13" width="4" height="14" fill="#8B6914" />
      <rect x="13" y="27" width="18" height="2.5" rx="1" fill="#8B6914" />
      <rect x="10" y="30" width="24" height="1.5" rx="0.75" fill="#8B6914" />
      <circle cx="22" cy="11" r="2.5" fill="#8B6914" opacity="0.5" />
    </svg>
    <div style={{ textAlign: 'center', lineHeight: 1.2 }}>
      <div style={{ fontSize: '0.5rem', fontWeight: 600, color: '#555', letterSpacing: '0.03em' }}>DIRECTORATE GENERAL OF</div>
      <div style={{ fontSize: '0.5rem', fontWeight: 600, color: '#555', letterSpacing: '0.03em' }}>FOREIGN TRADE</div>
      <div style={{ fontSize: '1.1rem', fontWeight: 800, color: '#1a1a2e', letterSpacing: '-0.01em' }}>DGFT</div>
      <div style={{ fontSize: '0.6rem', color: '#777' }}>(IEC)</div>
    </div>
  </div>
);

const GstLogo = () => (
  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '6px' }}>
    <div style={{ position: 'relative' }}>
      <span
        style={{
          fontSize: '2.4rem',
          fontWeight: 900,
          letterSpacing: '-0.04em',
          background: 'linear-gradient(135deg, #1565C0 0%, #0D47A1 50%, #1976D2 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
          lineHeight: 1,
          display: 'block',
        }}
      >
        GST
      </span>
      {/* Indian tricolor stripe */}
      <div style={{ display: 'flex', height: '3px', borderRadius: '2px', overflow: 'hidden', marginTop: '2px' }}>
        <div style={{ flex: 1, background: '#FF9933' }} />
        <div style={{ flex: 1, background: '#ffffff', border: '0.5px solid #ddd' }} />
        <div style={{ flex: 1, background: '#138808' }} />
      </div>
    </div>
    <div style={{ fontSize: '0.6rem', color: '#555', textAlign: 'center' }}>Goods and Services Tax</div>
  </div>
);

const FssaiLogo = () => (
  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '4px' }}>
    <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
      {/* Flame/leaf icon */}
      <svg width="22" height="28" viewBox="0 0 22 28" fill="none">
        <path d="M11 2C11 2 4 8 4 15C4 19.4 7.1 23 11 24C14.9 23 18 19.4 18 15C18 8 11 2 11 2Z" fill="#2E7D32" />
        <path d="M11 10C11 10 7 14 7 17C7 19.2 8.8 21 11 21C13.2 21 15 19.2 15 17C15 14 11 10 11 10Z" fill="#66BB6A" />
        <path d="M11 14C11 14 9 16 9 17.5C9 18.6 9.9 19.5 11 19.5C12.1 19.5 13 18.6 13 17.5C13 16 11 14 11 14Z" fill="#ffffff" />
      </svg>
      <span
        style={{
          fontSize: '1.6rem',
          fontWeight: 800,
          fontStyle: 'italic',
          color: '#2E7D32',
          letterSpacing: '-0.02em',
          lineHeight: 1,
        }}
      >
        fssai
      </span>
    </div>
  </div>
);

const ApedaLogo = () => (
  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '4px' }}>
    <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
      {/* Leaf icon */}
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <path d="M14 4C14 4 6 10 6 18C6 22.4 9.6 26 14 26C18.4 26 22 22.4 22 18C22 10 14 4 14 4Z" fill="#2E7D32" />
        <path d="M14 10C14 10 10 14 10 18C10 20.2 11.8 22 14 22C16.2 22 18 20.2 18 18C18 14 14 10 14 10Z" fill="#66BB6A" />
        <line x1="14" y1="12" x2="14" y2="24" stroke="#ffffff" strokeWidth="1" opacity="0.7" />
        <line x1="14" y1="16" x2="17" y2="13" stroke="#ffffff" strokeWidth="1" opacity="0.7" />
      </svg>
      <div style={{ lineHeight: 1.1 }}>
        <div style={{ fontSize: '0.65rem', color: '#2E7D32', fontWeight: 600 }}>एपीडा</div>
        <div style={{ fontSize: '1.2rem', fontWeight: 800, color: '#2E7D32', letterSpacing: '0.02em' }}>APEDA</div>
      </div>
    </div>
  </div>
);

const CoirBoardLogo = () => (
  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '4px' }}>
    <svg width="52" height="52" viewBox="0 0 52 52" fill="none">
      <circle cx="26" cy="26" r="24" stroke="#795548" strokeWidth="2" fill="none" />
      <circle cx="26" cy="26" r="20" stroke="#795548" strokeWidth="1" fill="none" />
      <circle cx="26" cy="26" r="4" fill="#795548" />
      {/* Radiating lines like a coir fiber pattern */}
      {[0,30,60,90,120,150,180,210,240,270,300,330].map((angle, i) => {
        const rad = (angle * Math.PI) / 180;
        const x1 = 26 + 6 * Math.cos(rad);
        const y1 = 26 + 6 * Math.sin(rad);
        const x2 = 26 + 18 * Math.cos(rad);
        const y2 = 26 + 18 * Math.sin(rad);
        return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke="#795548" strokeWidth="1.5" />;
      })}
      <text x="26" y="45" textAnchor="middle" fontSize="4.5" fill="#795548" fontWeight="700">COIR BOARD</text>
    </svg>
    <div style={{ fontSize: '0.55rem', color: '#795548', fontWeight: 700, letterSpacing: '0.08em', textAlign: 'center', lineHeight: 1.3 }}>
      <div>COIR BOARD</div>
      <div style={{ fontWeight: 400, color: '#999', fontSize: '0.5rem' }}>Ministry of MSME, Govt. of India</div>
    </div>
  </div>
);

const IsoLogo = () => (
  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '4px' }}>
    <div
      style={{
        background: '#1565C0',
        borderRadius: '8px',
        padding: '8px 14px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        lineHeight: 1.1,
      }}
    >
      <span style={{ fontSize: '1.6rem', fontWeight: 900, color: '#ffffff', letterSpacing: '0.02em' }}>ISO</span>
      <span style={{ fontSize: '0.75rem', fontWeight: 700, color: '#90CAF9', letterSpacing: '0.04em' }}>9001:2015</span>
    </div>
    <span style={{ fontSize: '0.6rem', color: '#555', textAlign: 'center' }}>Quality Management System</span>
  </div>
);

const HaccpLogo = () => (
  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
    <svg width="80" height="80" viewBox="0 0 80 80" fill="none">
      <circle cx="40" cy="40" r="37" stroke="#1565C0" strokeWidth="3" fill="none" strokeDasharray="4 2" />
      <circle cx="40" cy="40" r="30" stroke="#1565C0" strokeWidth="1.5" fill="none" />
      <text x="40" y="22" textAnchor="middle" fontSize="6" fill="#1565C0" fontWeight="700" letterSpacing="2">CERTIFIED</text>
      <text x="40" y="44" textAnchor="middle" fontSize="14" fill="#1565C0" fontWeight="900" letterSpacing="1">HACCP</text>
      <text x="40" y="58" textAnchor="middle" fontSize="6" fill="#1565C0" fontWeight="700" letterSpacing="2">CERTIFIED</text>
      {/* Checkmark */}
      <path d="M28 40 L36 48 L52 32" stroke="#1565C0" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
    </svg>
  </div>
);

const GlobalGapLogo = () => (
  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '2px' }}>
    <svg width="52" height="52" viewBox="0 0 52 52" fill="none">
      <circle cx="26" cy="26" r="24" fill="#2E7D32" />
      <text x="26" y="34" textAnchor="middle" fontSize="22" fontWeight="900" fill="#ffffff" fontFamily="Arial, sans-serif">G</text>
    </svg>
    <div style={{ textAlign: 'center', lineHeight: 1.2 }}>
      <span style={{ fontSize: '0.95rem', fontWeight: 800, color: '#2E7D32', letterSpacing: '-0.01em' }}>GLOBALG.A.P.</span>
      <span style={{ color: '#2E7D32', fontSize: '0.7rem' }}>®</span>
    </div>
  </div>
);

/* ─── Documentation icon SVGs ───────────────────────────────────────────── */
const DocIcon = ({ type }: { type: 'origin' | 'invoice' | 'packing' | 'lading' | 'phyto' }) => {
  const color = '#2E7D32';
  const stroke = color;
  const icons: Record<string, React.ReactNode> = {
    origin: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
        <rect x="6" y="4" width="22" height="28" rx="3" stroke={stroke} strokeWidth="1.75" />
        <path d="M28 4v8h6" stroke={stroke} strokeWidth="1.75" strokeLinecap="round" />
        <line x1="10" y1="16" x2="24" y2="16" stroke={stroke} strokeWidth="1.5" strokeLinecap="round" />
        <line x1="10" y1="20" x2="24" y2="20" stroke={stroke} strokeWidth="1.5" strokeLinecap="round" />
        <line x1="10" y1="24" x2="18" y2="24" stroke={stroke} strokeWidth="1.5" strokeLinecap="round" />
        <circle cx="31" cy="29" r="6" stroke={stroke} strokeWidth="1.5" fill="none" />
        <path d="M28 29 l2 2 l3.5-3.5" stroke={stroke} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    invoice: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
        <rect x="6" y="4" width="28" height="32" rx="3" stroke={stroke} strokeWidth="1.75" />
        <line x1="11" y1="13" x2="29" y2="13" stroke={stroke} strokeWidth="1.5" strokeLinecap="round" />
        <line x1="11" y1="18" x2="29" y2="18" stroke={stroke} strokeWidth="1.5" strokeLinecap="round" />
        <line x1="11" y1="23" x2="22" y2="23" stroke={stroke} strokeWidth="1.5" strokeLinecap="round" />
        <line x1="11" y1="28" x2="22" y2="28" stroke={stroke} strokeWidth="1.5" strokeLinecap="round" />
        <line x1="25" y1="23" x2="29" y2="23" stroke={stroke} strokeWidth="1.5" strokeLinecap="round" />
        <line x1="25" y1="28" x2="29" y2="28" stroke={stroke} strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
    packing: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
        <path d="M20 5 L34 12 L34 28 L20 35 L6 28 L6 12 Z" stroke={stroke} strokeWidth="1.75" strokeLinejoin="round" />
        <path d="M20 5 L20 35" stroke={stroke} strokeWidth="1.5" />
        <path d="M6 12 L20 19 L34 12" stroke={stroke} strokeWidth="1.5" />
        <line x1="13" y1="8.5" x2="27" y2="15.5" stroke={stroke} strokeWidth="1.25" strokeDasharray="2 1.5" />
      </svg>
    ),
    lading: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
        <path d="M4 28 Q20 20 36 28" stroke={stroke} strokeWidth="1.75" strokeLinecap="round" />
        <path d="M7 32 L33 32" stroke={stroke} strokeWidth="1.75" strokeLinecap="round" />
        <path d="M20 28 L20 10" stroke={stroke} strokeWidth="1.75" strokeLinecap="round" />
        <path d="M20 10 L32 18 Q20 24 20 10" fill="none" stroke={stroke} strokeWidth="1.5" strokeLinejoin="round" />
        <path d="M4 36 L36 36" stroke={stroke} strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
    phyto: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
        <path d="M20 4 L33 10 L33 22 C33 29 27 35 20 37 C13 35 7 29 7 22 L7 10 Z" stroke={stroke} strokeWidth="1.75" strokeLinejoin="round" />
        <path d="M20 20 Q17 15 12 14 Q14 20 20 20 Q23 14 28 14 Q26 20 20 20 L20 30" stroke={stroke} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  };
  return <>{icons[type]}</>;
};

/* ─── Page ───────────────────────────────────────────────────────────────── */
export default function CertificationsPage() {
  return (
    <Section
      background="porcelain"
      style={{
        paddingTop: 'clamp(5rem, 10vw, 8rem)',
        paddingBottom: 'clamp(4rem, 8vw, 7rem)',
      }}
    >
      <Container>

        {/* ── Page header ── */}
        <div style={{ marginBottom: 'clamp(3rem, 6vw, 5rem)', maxWidth: '660px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '1rem' }}>
            <span
              style={{
                display: 'block',
                width: '1.75rem',
                height: '1.5px',
                background: 'var(--color-bronze)',
              }}
            />
            <span
              style={{
                fontSize: '0.7rem',
                fontWeight: 600,
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                color: 'var(--color-bronze)',
              }}
            >
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
              margin: '0 0 1rem',
            }}
          >
            Certifications &amp; Compliance
          </h1>
          <p
            style={{
              fontSize: 'clamp(0.9rem, 1.05vw, 1rem)',
              lineHeight: 1.7,
              color: 'rgba(30,30,30,0.55)',
              margin: 0,
              maxWidth: '500px',
            }}
          >
            Key registrations and certifications that enable us to export high-quality
            coir and agricultural commodities to global markets.
          </p>
        </div>

        {/* ── Section 1: Export Registrations ── */}
        <div style={{ marginBottom: 'clamp(2.5rem, 5vw, 4rem)' }}>
          <CertSectionLabel>Export Registrations</CertSectionLabel>
          <div
            style={{
              display: 'flex',
              gap: '1rem',
              flexWrap: 'wrap',
            }}
          >
            <CertCard><DgftLogo /></CertCard>
            <CertCard><GstLogo /></CertCard>
            <CertCard><FssaiLogo /></CertCard>
            <CertCard><ApedaLogo /></CertCard>
            <CertCard><CoirBoardLogo /></CertCard>
          </div>
        </div>

        {/* ── Section 2: Quality & Product Certifications ── */}
        <div style={{ marginBottom: 'clamp(2.5rem, 5vw, 4rem)' }}>
          <CertSectionLabel>Quality &amp; Product Certifications</CertSectionLabel>
          <div
            style={{
              display: 'flex',
              gap: '1rem',
              flexWrap: 'wrap',
            }}
          >
            <CertCard wide><IsoLogo /></CertCard>
            <CertCard wide><HaccpLogo /></CertCard>
            <CertCard wide><GlobalGapLogo /></CertCard>
          </div>
        </div>

        {/* ── Section 3: Key Export Documentation ── */}
        <div>
          <CertSectionLabel>Key Export Documentation</CertSectionLabel>
          <div
            style={{
              display: 'flex',
              gap: '1rem',
              flexWrap: 'wrap',
            }}
          >
            {(
              [
                { type: 'origin', label: 'Certificate\nof Origin' },
                { type: 'invoice', label: 'Commercial\nInvoice' },
                { type: 'packing', label: 'Packing\nList' },
                { type: 'lading', label: 'Bill of\nLading' },
                { type: 'phyto', label: 'Phytosanitary\nCertificate' },
              ] as const
            ).map(({ type, label }) => (
              <CertCard key={type}>
                <DocIcon type={type} />
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
                  {label}
                </span>
              </CertCard>
            ))}
          </div>
        </div>

      </Container>
    </Section>
  );
}
