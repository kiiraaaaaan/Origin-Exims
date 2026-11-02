import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Container from './Container';

const FOOTER_LINKS = [
  { href: '/', label: 'Home' },
  { href: '/certifications', label: 'Certifications' },
  { href: '/product', label: 'Product' },
  { href: '/contact', label: 'Contact Us' },
];

export default function Footer() {
  return (
    <footer
      style={{
        backgroundColor: 'var(--color-black)',
        color: 'var(--color-titanium)',
        borderTop: '1px solid rgba(255, 255, 255, 0.08)',
        paddingTop: 'clamp(3rem, 6vw, 5rem)',
        paddingBottom: 'clamp(2.5rem, 5vw, 4rem)',
        width: '100%',
      }}
    >
      <Container>
        {/* Top Tier: Logo & Navigation */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '2rem',
            paddingBottom: '2.5rem',
          }}
        >
          {/* Logo */}
          <Link
            href="/"
            aria-label="Origin EXIMS Home"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
            }}
          >
            <Image
              src="/logo/origin-exims-logo.png"
              alt="Origin EXIMS"
              width={160}
              height={53}
              style={{
                height: '38px',
                width: 'auto',
                objectFit: 'contain',
              }}
            />
          </Link>

          {/* Navigation Links */}
          <nav
            aria-label="Footer Navigation"
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: 'clamp(1.25rem, 3vw, 2.25rem)',
            }}
          >
            {FOOTER_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-nav"
                style={{
                  color: 'var(--color-titanium)',
                  transition: 'color var(--transition-normal)',
                }}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        {/* Subtle Accent Divider */}
        <div className="divider-bronze" style={{ opacity: 0.3 }} />

        {/* Bottom Tier: Legal / Attribution */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '1rem',
            paddingTop: '2rem',
            fontSize: '0.8125rem',
            color: 'var(--color-titanium)',
          }}
        >
          <p>© Origin EXIMS. All rights reserved.</p>
          <p style={{ opacity: 0.8 }}>
            International Export Corporate Architecture
          </p>
        </div>
      </Container>
    </footer>
  );
}

