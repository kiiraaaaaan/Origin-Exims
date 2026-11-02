import React from 'react';
import Section from '@/components/Section';
import Container from '@/components/Container';
import Placeholder from '@/components/Placeholder';

export default function ContactPage() {
  return (
    <Section background="porcelain" style={{ minHeight: '85vh', paddingTop: 'clamp(4rem, 7vw, 6rem)' }}>
      <Container>
        {/* Page Header */}
        <div style={{ maxWidth: '720px', marginBottom: 'clamp(3rem, 6vw, 5rem)' }}>
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              padding: '0.25rem 0.75rem',
              borderRadius: 'var(--radius-pill)',
              backgroundColor: 'rgba(0, 0, 0, 0.05)',
              border: '1px solid rgba(0, 0, 0, 0.08)',
              marginBottom: '1rem',
            }}
          >
            <span
              style={{
                width: '6px',
                height: '6px',
                borderRadius: '50%',
                backgroundColor: 'var(--color-bronze)',
              }}
            />
            <span className="text-caption" style={{ color: 'var(--color-graphite)' }}>
              Direct Communication
            </span>
          </div>

          <h1 className="text-page-title" style={{ color: 'var(--color-graphite)' }}>
            Contact Us
          </h1>

          <p
            className="text-body-lg"
            style={{
              color: 'var(--color-titanium)',
              marginTop: '1rem',
              maxWidth: '600px',
            }}
          >
            Structural channels reserved for global trade correspondence, corporate communication, and export inquiries.
          </p>
        </div>

        {/* Dual-Column Layout: Contact Information (Left) + Enquiry Form (Right) */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: 'clamp(2rem, 5vw, 4rem)',
            alignItems: 'start',
          }}
        >
          {/* Left Column: Reserved Contact Information Areas */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <h2 className="text-subsection-title" style={{ color: 'var(--color-graphite)' }}>
              Corporate Offices & Channels
            </h2>

            <Placeholder
              label="Reserved: Registered Office Location"
              hint="Corporate headquarters • India business address"
              theme="light"
              minHeight="140px"
            />

            <Placeholder
              label="Reserved: Telecommunication Channels"
              hint="Official business phone • Corporate facsimile • Direct desk"
              theme="light"
              minHeight="140px"
            />

            <Placeholder
              label="Reserved: Electronic Mail Directory"
              hint="General export desk • Commercial trade inquiries • Compliance office"
              theme="light"
              minHeight="140px"
            />

            <Placeholder
              label="Reserved: Operating Hours & Timezone"
              hint="Standard operating hours • International trade coordination schedule"
              theme="light"
              minHeight="120px"
            />
          </div>

          {/* Right Column: Reserved Enquiry Form Area */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <h2 className="text-subsection-title" style={{ color: 'var(--color-graphite)' }}>
              Trade Enquiry Architecture
            </h2>

            <div
              style={{
                backgroundColor: 'rgba(255, 255, 255, 0.7)',
                border: '1px solid rgba(29, 29, 31, 0.12)',
                borderRadius: 'var(--radius-md)',
                padding: 'clamp(1.75rem, 4vw, 2.5rem)',
                display: 'flex',
                flexDirection: 'column',
                gap: '1.25rem',
                backdropFilter: 'blur(10px)',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderBottom: '1px solid rgba(29, 29, 31, 0.08)', paddingBottom: '1rem' }}>
                <span className="text-caption" style={{ color: 'var(--color-graphite)' }}>
                  Reserved Form Structure
                </span>
                <span
                  style={{
                    fontSize: '0.6875rem',
                    fontWeight: 600,
                    padding: '0.2rem 0.5rem',
                    borderRadius: 'var(--radius-pill)',
                    backgroundColor: 'rgba(169, 138, 101, 0.15)',
                    color: '#7b6140',
                  }}
                >
                  Phase 2 Integration
                </span>
              </div>

              {/* Form Input Structural Placeholders */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                <span style={{ fontSize: '0.8125rem', fontWeight: 500, color: 'var(--color-graphite)' }}>
                  Name / Organization
                </span>
                <div
                  style={{
                    height: '46px',
                    borderRadius: 'var(--radius-sm)',
                    border: '1px dashed rgba(29, 29, 31, 0.2)',
                    backgroundColor: 'rgba(0, 0, 0, 0.02)',
                    display: 'flex',
                    alignItems: 'center',
                    padding: '0 1rem',
                    color: 'var(--color-titanium)',
                    fontSize: '0.875rem',
                  }}
                >
                  [ Reserved Input: Full Name or Business Entity ]
                </div>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                <span style={{ fontSize: '0.8125rem', fontWeight: 500, color: 'var(--color-graphite)' }}>
                  Business Email
                </span>
                <div
                  style={{
                    height: '46px',
                    borderRadius: 'var(--radius-sm)',
                    border: '1px dashed rgba(29, 29, 31, 0.2)',
                    backgroundColor: 'rgba(0, 0, 0, 0.02)',
                    display: 'flex',
                    alignItems: 'center',
                    padding: '0 1rem',
                    color: 'var(--color-titanium)',
                    fontSize: '0.875rem',
                  }}
                >
                  [ Reserved Input: Corporate Email Address ]
                </div>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                <span style={{ fontSize: '0.8125rem', fontWeight: 500, color: 'var(--color-graphite)' }}>
                  Destination Country / Port of Discharge
                </span>
                <div
                  style={{
                    height: '46px',
                    borderRadius: 'var(--radius-sm)',
                    border: '1px dashed rgba(29, 29, 31, 0.2)',
                    backgroundColor: 'rgba(0, 0, 0, 0.02)',
                    display: 'flex',
                    alignItems: 'center',
                    padding: '0 1rem',
                    color: 'var(--color-titanium)',
                    fontSize: '0.875rem',
                  }}
                >
                  [ Reserved Input: Target Destination / Port ]
                </div>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                <span style={{ fontSize: '0.8125rem', fontWeight: 500, color: 'var(--color-graphite)' }}>
                  Enquiry Specification
                </span>
                <div
                  style={{
                    height: '110px',
                    borderRadius: 'var(--radius-sm)',
                    border: '1px dashed rgba(29, 29, 31, 0.2)',
                    backgroundColor: 'rgba(0, 0, 0, 0.02)',
                    display: 'flex',
                    alignItems: 'flex-start',
                    padding: '0.875rem 1rem',
                    color: 'var(--color-titanium)',
                    fontSize: '0.875rem',
                  }}
                >
                  [ Reserved Area: Product Requirements, Volumes & Incoterms ]
                </div>
              </div>

              <div style={{ paddingTop: '0.5rem' }}>
                <span className="btn btn-secondary" style={{ width: '100%', cursor: 'not-allowed', opacity: 0.8 }}>
                  [ Submit Inquiry — Ready for Phase 2 ]
                </span>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}

