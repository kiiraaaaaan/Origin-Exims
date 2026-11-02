import React from 'react';
import Section from '@/components/Section';
import Container from '@/components/Container';
import Placeholder from '@/components/Placeholder';

export default function CertificationsPage() {
  return (
    <Section background="porcelain" style={{ minHeight: '80vh', paddingTop: 'clamp(4rem, 7vw, 6rem)' }}>
      <Container>
        {/* Page Header Area */}
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
              Accreditation & Compliance
            </span>
          </div>

          <h1 className="text-page-title" style={{ color: 'var(--color-graphite)' }}>
            Certifications
          </h1>

          <p
            className="text-body-lg"
            style={{
              color: 'var(--color-titanium)',
              marginTop: '1rem',
              maxWidth: '600px',
            }}
          >
            Architecture reserved for verified international export registrations, statutory accreditations, and quality certifications.
          </p>
        </div>

        {/* Empty, Reusable Content Area Reserved for Future Certifications */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '1.75rem',
            marginBottom: '3rem',
          }}
        >
          {[1, 2, 3, 4, 5, 6].map((item) => (
            <Placeholder
              key={item}
              label={`Reserved: Certification ${String(item).padStart(2, '0')}`}
              hint="Issuing Authority • Scope of Certification • Verification ID"
              theme="light"
              minHeight="200px"
            />
          ))}
        </div>

        {/* Reserved Area for Documentation / Verification Portal */}
        <div style={{ marginTop: '2.5rem' }}>
          <Placeholder
            label="Reserved: Compliance & Document Verification System"
            hint="Digital certificate validation, audit trails, and export documentation downloads"
            theme="light"
            minHeight="160px"
          />
        </div>
      </Container>
    </Section>
  );
}

