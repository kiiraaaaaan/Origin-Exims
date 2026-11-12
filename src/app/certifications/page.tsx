import React from 'react';
import Section from '@/components/Section';
import Container from '@/components/Container';

export const metadata = {
  title: 'Certifications & Compliance — Origin Exims',
  description:
    'Key registrations and certifications that enable Origin Exims to export high-quality coir and agricultural commodities to global markets.',
};

/* ─── Shared card ─────────────────────────────────────────────────────────── */
function CertCard({
  src,
  alt,
  label,
  imgHeight = 72,
  cardHeight = 110,
}: {
  src: string;
  alt: string;
  label?: string;
  imgHeight?: number;
  cardHeight?: number;
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
        gap: '0.65rem',
        padding: '1.25rem 1rem',
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
      {label && (
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
        marginBottom: '1rem',
      }}
    >
      <span
        style={{
          fontSize: '0.7rem',
          fontWeight: 700,
          letterSpacing: '0.13em',
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
      <Container>

        {/* ── Page header ── */}
        <div style={{ marginBottom: 'clamp(2.5rem, 5vw, 4rem)', maxWidth: '660px' }}>
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

        {/* ── Section 1: Export Registrations — 5 cards ── */}
        <div style={{ marginBottom: 'clamp(2rem, 4vw, 3.5rem)' }}>
          <CertSectionLabel>Export Registrations</CertSectionLabel>
          <div style={{ display: 'flex', gap: '0.875rem' }}>
            <CertCard src="/images/certs/DGFT_IEC.png"   alt="DGFT IEC"   imgHeight={68} cardHeight={110} />
            <CertCard src="/images/certs/GST.png"         alt="GST"         imgHeight={68} cardHeight={110} />
            <CertCard src="/images/certs/fssai.png"       alt="FSSAI"       imgHeight={68} cardHeight={110} />
            <CertCard src="/images/certs/apeda.png"       alt="APEDA"       imgHeight={68} cardHeight={110} />
            <CertCard src="/images/certs/Coir_Board.png"  alt="Coir Board"  imgHeight={68} cardHeight={110} />
          </div>
        </div>

        {/* ── Section 2: Quality & Product Certifications — 3 cards ── */}
        <div style={{ marginBottom: 'clamp(2rem, 4vw, 3.5rem)' }}>
          <CertSectionLabel>Quality &amp; Product Certifications</CertSectionLabel>
          <div style={{ display: 'flex', gap: '0.875rem' }}>
            <CertCard src="/images/certs/ISO_9001_2015.png" alt="ISO 9001:2015"   imgHeight={90} cardHeight={130} />
            <CertCard src="/images/certs/haccp.png"          alt="HACCP Certified" imgHeight={90} cardHeight={130} />
            <CertCard src="/images/certs/globalgap.png"      alt="GLOBALG.A.P."   imgHeight={90} cardHeight={130} />
          </div>
        </div>

        {/* ── Section 3: Key Export Documentation — 5 cards with labels ── */}
        <div>
          <CertSectionLabel>Key Export Documentation</CertSectionLabel>
          <div style={{ display: 'flex', gap: '0.875rem' }}>
            <CertCard
              src="/images/certs/Certificate_of_Origin.png"
              alt="Certificate of Origin"
              imgHeight={56}
              cardHeight={130}
              label={"Certificate\nof Origin"}
            />
            <CertCard
              src="/images/certs/Commercial_Invoice.png"
              alt="Commercial Invoice"
              imgHeight={56}
              cardHeight={130}
              label={"Commercial\nInvoice"}
            />
            <CertCard
              src="/images/certs/Packing_List.png"
              alt="Packing List"
              imgHeight={56}
              cardHeight={130}
              label={"Packing\nList"}
            />
            <CertCard
              src="/images/certs/Bill_of_Lading.png"
              alt="Bill of Lading"
              imgHeight={56}
              cardHeight={130}
              label={"Bill of\nLading"}
            />
            <CertCard
              src="/images/certs/Phytosanitary_Certificate.png"
              alt="Phytosanitary Certificate"
              imgHeight={56}
              cardHeight={130}
              label={"Phytosanitary\nCertificate"}
            />
          </div>
        </div>

      </Container>
    </Section>
  );
}
