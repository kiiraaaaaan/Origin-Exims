'use client';

import React, { useState } from 'react';

const FIELD_STYLE: React.CSSProperties = {
  width: '100%',
  background: 'transparent',
  border: 'none',
  borderBottom: '1px solid rgba(0,0,0,0.15)',
  padding: '0.5rem 0',
  fontSize: '0.9375rem',
  color: 'var(--color-graphite)',
  outline: 'none',
  fontFamily: 'var(--font-inter), sans-serif',
};

const LABEL_STYLE: React.CSSProperties = {
  fontSize: '0.65rem',
  fontWeight: 700,
  letterSpacing: '0.12em',
  textTransform: 'uppercase' as const,
  color: 'var(--color-bronze)',
  display: 'block',
  marginBottom: '0.35rem',
};

function FieldGroup({ label, placeholder, type = 'text' }: { label: string; placeholder?: string; type?: string }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column' as const }}>
      <label style={LABEL_STYLE}>{label}</label>
      <input
        type={type}
        placeholder={placeholder}
        style={FIELD_STYLE}
      />
    </div>
  );
}

function TextAreaGroup({ label, placeholder }: { label: string; placeholder?: string }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column' as const }}>
      <label style={LABEL_STYLE}>{label}</label>
      <textarea
        placeholder={placeholder}
        rows={3}
        style={{ ...FIELD_STYLE, resize: 'none', paddingTop: '0.5rem' }}
      />
    </div>
  );
}

function ContactRow({ label, value, href }: { label: string; value: string; href?: string }) {
  return (
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', padding: '1.1rem 0', borderBottom: '1px solid rgba(0,0,0,0.09)' }}>
      <span style={{ fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase' as const, color: 'var(--color-bronze)', paddingTop: '0.15rem', minWidth: '90px' }}>
        {label}
      </span>
      {href ? (
        <a href={href} style={{ fontSize: '0.9375rem', color: 'var(--color-graphite)', textDecoration: 'none', textAlign: 'right' as const, lineHeight: 1.6, whiteSpace: 'pre-line' as const }}>
          {value}
        </a>
      ) : (
        <span style={{ fontSize: '0.9375rem', color: 'var(--color-graphite)', textAlign: 'right' as const, lineHeight: 1.6, maxWidth: '60%', whiteSpace: 'pre-line' as const }}>
          {value}
        </span>
      )}
    </div>
  );
}

export default function ContactSection() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
        gap: 'clamp(3rem, 6vw, 6rem)',
        alignItems: 'start',
      }}
    >
      {/* ── LEFT: Contact info ── */}
      <div>
        {/* Badge */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1.5rem' }}>
          <span style={{ display: 'block', width: '1.5rem', height: '1.5px', background: 'var(--color-bronze)' }} />
          <span style={{ fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase' as const, color: 'var(--color-bronze)' }}>
            Trade Desk
          </span>
        </div>

        {/* Large heading */}
        <h2
          style={{
            fontFamily: 'var(--font-inter), sans-serif',
            fontSize: 'clamp(2.2rem, 4vw, 3.25rem)',
            fontWeight: 800,
            lineHeight: 1.1,
            letterSpacing: '-0.03em',
            color: 'var(--color-graphite)',
            margin: '0 0 1.5rem',
          }}
        >
          Direct communication.<br />
          No intermediaries<span style={{ color: 'var(--color-bronze)' }}>.</span>
        </h2>

        {/* Sub-copy */}
        <p style={{ fontSize: '0.9375rem', lineHeight: 1.7, color: 'rgba(30,30,30,0.58)', margin: '0 0 2.5rem', maxWidth: '380px' }}>
          When you reach out, you speak directly with the team managing the sourcing and logistics. We prioritise clarity and quick turnarounds for all international inquiries.
        </p>

        {/* Divider */}
        <div style={{ borderTop: '1px solid rgba(0,0,0,0.09)' }} />

        {/* Contact rows */}
        <ContactRow
          label="Email"
          value="sales@originexims.com"
          href="mailto:sales@originexims.com"
        />
        <ContactRow
          label="WhatsApp"
          value="+91 98439 02682"
          href="https://wa.me/919843902682"
        />
        <ContactRow
          label="Head Office"
          value={"Uppilipalyam,\nCoimbatore – 641015,\nTamil Nadu, India"}
        />
      </div>

      {/* ── RIGHT: Sourcing inquiry form ── */}
      <div
        style={{
          background: '#F7F5F2',
          borderRadius: '20px',
          padding: 'clamp(2rem, 4vw, 2.75rem)',
        }}
      >
        {submitted ? (
          <div style={{ textAlign: 'center', padding: '3rem 0' }}>
            <div style={{ fontSize: '2rem', marginBottom: '1rem' }}>✓</div>
            <h3 style={{ fontFamily: 'var(--font-inter), sans-serif', fontWeight: 700, color: 'var(--color-graphite)', margin: '0 0 0.5rem' }}>Inquiry received</h3>
            <p style={{ color: 'rgba(30,30,30,0.55)', fontSize: '0.9rem' }}>We'll be in touch within 24 hours.</p>
          </div>
        ) : (
          <form onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}>
            <h3 style={{ fontFamily: 'var(--font-inter), sans-serif', fontSize: '1.35rem', fontWeight: 700, color: 'var(--color-graphite)', margin: '0 0 0.3rem', letterSpacing: '-0.02em' }}>
              Sourcing Inquiry<span style={{ color: 'var(--color-bronze)' }}>.</span>
            </h3>
            <p style={{ fontSize: '0.875rem', color: 'rgba(30,30,30,0.5)', margin: '0 0 2rem', lineHeight: 1.5 }}>
              Please provide as much detail as possible to help us expedite your quote.
            </p>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem 1.5rem', marginBottom: '1.5rem' }}>
              <FieldGroup label="Full Name *" />
              <FieldGroup label="Company *" />
              <FieldGroup label="Email Address *" type="email" />
              <FieldGroup label="Phone Number *" placeholder="e.g. +1 415 555 2671" type="tel" />
              <FieldGroup label="Destination Port" placeholder="e.g. Rotterdam, Dubai" />
              <FieldGroup label="Product & Grade" placeholder="e.g. Coco Peat, Grade A" />
            </div>

            <div style={{ display: 'flex', flexDirection: 'column' as const, gap: '1.5rem', marginBottom: '2rem' }}>
              <FieldGroup label="Volume" placeholder="e.g. 20 Metric Tons" />
              <TextAreaGroup label="Additional Notes" placeholder="Mention any specific packaging, certification or Incoterm requirements…" />
            </div>

            <button
              type="submit"
              style={{
                width: '100%',
                padding: '0.9rem',
                borderRadius: '999px',
                background: 'var(--color-graphite)',
                color: '#fff',
                fontFamily: 'var(--font-inter), sans-serif',
                fontWeight: 600,
                fontSize: '0.9375rem',
                border: 'none',
                cursor: 'pointer',
                letterSpacing: '0.01em',
              }}
            >
              Send Inquiry
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
