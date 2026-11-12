import React from 'react';
import Section from '@/components/Section';

export const metadata = {
  title: 'Certifications & Compliance — Origin Exims',
  description:
    'Key registrations and certifications that enable Origin Exims to export high-quality coir and agricultural commodities to global markets.',
};

/* ─── Cert card (rows 1 & 2 — logo only) ────────────────────────────────── */
function LogoCard({
  src,
  alt,
  imgHeight,
  cardHeight,
}: {
  src: string;
  alt: string;
  imgHeight: number;
  cardHeight: number;
}) {
  return (
    <div
      style={{
        background: '#ffffff',
        border: '1px solid rgba(0,0,0,0.07)',
        borderRadius: '14px',
        boxShadow: '0 2px 14px rgba(0,0,0,0.055), 0 1px 3px rgba(0,0,0,0.04)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '1.25rem 1.5rem',
        minHeight: `${cardHeight}px`,
        flex: 1,
        minWidth: 0,
      }}
    >
      <img
        src={src}
        alt={alt}
        style={{
          height: `${imgHeight}px`,
          width: 'auto',
          maxWidth: '100%',
          objectFit: 'contain',
          display: 'block',
        }}
      />
    </div>
  );
}

/* ─── Doc card (row 3 — icon + label below) ──────────────────────────────── */
function DocCard({
  src,
  alt,
  label,
}: {
  src: string;
  alt: string;
  label: string;
}) {
  return (
    <div
      style={{
        background: '#ffffff',
        border: '1px solid rgba(0,0,0,0.07)',
        borderRadius: '14px',
        boxShadow: '0 2px 14px rgba(0,0,0,0.055), 0 1px 3px rgba(0,0,0,0.04)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '0.7rem',
        padding: '1.5rem 1rem',
        minHeight: '145px',
        flex: 1,
        minWidth: 0,
      }}
    >
      <img
        src={src}
        alt={alt}
        style={{
          height: '52px',
          width: 'auto',
          maxWidth: '60px',
          objectFit: 'contain',
          display: 'block',
        }}
      />
      <span
        style={{
          fontSize: '0.8rem',
          fontWeight: 500,
          color: 'var(--color-graphite)',
          textAlign: 'center',
          lineHeight: 1.4,
          whiteSpace: 'pre-line',
        }}
      >
        {label}
      </span>
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
        gap: '1.25rem',
        marginBottom: '1rem',
      }}
    >
      <span
        style={{
          fontSize: '0.75rem',
          fontWeight: 800,
          letterSpacing: '0.16em',
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
      {/* Wide wrapper — 90 vw, capped at 1400 px */}
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
              margin: '0 0 0.9rem',
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

        {/* ── Section 1: Export Registrations — 5 cards ── */}
        <div style={{ marginBottom: 'clamp(1.5rem, 3vw, 2.5rem)' }}>
          <CertSectionLabel>Export Registrations</CertSectionLabel>
          <div style={{ display: 'flex', gap: '1rem' }}>
            <LogoCard src="/images/certs/DGFT_IEC.png"  alt="DGFT IEC"  imgHeight={82} cardHeight={145} />
            <LogoCard src="/images/certs/GST.png"        alt="GST"        imgHeight={82} cardHeight={145} />
            <LogoCard src="/images/certs/fssai.png"      alt="FSSAI"      imgHeight={82} cardHeight={145} />
            <LogoCard src="/images/certs/apeda.png"      alt="APEDA"      imgHeight={82} cardHeight={145} />
            <LogoCard src="/images/certs/Coir_Board.png" alt="Coir Board" imgHeight={82} cardHeight={145} />
          </div>
        </div>

        {/* ── Section 2: Quality & Product Certifications — 3 cards ── */}
        <div style={{ marginBottom: 'clamp(1.5rem, 3vw, 2.5rem)' }}>
          <CertSectionLabel>Quality &amp; Product Certifications</CertSectionLabel>
          <div style={{ display: 'flex', gap: '1rem' }}>
            <LogoCard src="/images/certs/ISO_9001_2015.png" alt="ISO 9001:2015"   imgHeight={100} cardHeight={160} />
            <LogoCard src="/images/certs/haccp.png"          alt="HACCP Certified" imgHeight={100} cardHeight={160} />
            <LogoCard src="/images/certs/globalgap.png"      alt="GLOBALG.A.P."   imgHeight={100} cardHeight={160} />
          </div>
        </div>

        {/* ── Section 3: Key Export Documentation — 5 cards ── */}
        <div>
          <CertSectionLabel>Key Export Documentation</CertSectionLabel>
          <div style={{ display: 'flex', gap: '1rem' }}>
            <DocCard
              src="/images/certs/Certificate_of_Origin.png"
              alt="Certificate of Origin icon"
              label={"Certificate\nof Origin"}
            />
            <DocCard
              src="/images/certs/Commercial_Invoice.png"
              alt="Commercial Invoice icon"
              label={"Commercial\nInvoice"}
            />
            <DocCard
              src="/images/certs/Packing_List.png"
              alt="Packing List icon"
              label={"Packing\nList"}
            />
            <DocCard
              src="/images/certs/Bill_of_Lading.png"
              alt="Bill of Lading icon"
              label={"Bill of\nLading"}
            />
            <DocCard
              src="/images/certs/Phytosanitary_Certificate.png"
              alt="Phytosanitary Certificate icon"
              label={"Phytosanitary\nCertificate"}
            />
          </div>
        </div>

      </div>
    </Section>
  );
}
