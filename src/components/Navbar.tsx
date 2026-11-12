'use client';

import React, { useState, useEffect, useRef, useCallback } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

interface DropdownItem {
  href: string;
  label: string;
}

interface NavLink {
  href: string;
  label: string;
  dropdown?: DropdownItem[];
}

const NAV_LINKS: NavLink[] = [
  { href: '/', label: 'Home' },
  { href: '/certifications', label: 'Certifications' },
  {
    href: '/product',
    label: 'Products',
    dropdown: [
      { href: '/product/coir', label: 'Coir Products' },
      { href: '/product/agriculture', label: 'Agriculture Products' },
    ],
  },
  { href: '/contact', label: 'Contact Us' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const hoverTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const pathname = usePathname();

  // Only home page has dark hero background — all other pages are light
  const isDark = pathname === '/';

  // ── Sliding liquid glass pill ───────────────────────────────────────────
  const navRef = useRef<HTMLElement>(null);
  const [pill, setPill] = useState({ left: 0, width: 0, ready: false });
  const isFirstMeasure = useRef(true);

  const measurePill = useCallback(() => {
    const nav = navRef.current;
    if (!nav) return;
    const activeEl = nav.querySelector<HTMLAnchorElement | HTMLButtonElement>('[data-active="true"]');
    if (!activeEl) return;

    const navRect = nav.getBoundingClientRect();
    const linkRect = activeEl.getBoundingClientRect();

    setPill({
      left: linkRect.left - navRect.left,
      width: linkRect.width,
      ready: true,
    });
    isFirstMeasure.current = false;
  }, []);

  useEffect(() => {
    const t = setTimeout(measurePill, 60);
    return () => clearTimeout(t);
  }, [pathname, measurePill]);

  useEffect(() => {
    window.addEventListener('resize', measurePill);
    return () => window.removeEventListener('resize', measurePill);
  }, [measurePill]);

  // Close mobile menu on route change
  useEffect(() => { setIsOpen(false); setDropdownOpen(false); }, [pathname]);

  // Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') { setIsOpen(false); setDropdownOpen(false); }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Close dropdown on outside click
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, []);

  // Lock scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  // ── Header — transparent, seamless ──────────────────────────────────────
  const headerStyle: React.CSSProperties = {
    position: 'absolute',
    top: 0, left: 0, right: 0,
    zIndex: 100,
    width: '100%',
    backgroundColor: 'transparent',
    borderBottom: 'none',
    boxShadow: 'none',
  };

  const hPad = 14;
  const vPad = 6;

  // ── Theme-aware colours ─────────────────────────────────────────────────
  const textColor = isDark ? 'rgba(255, 255, 255, 0.60)' : 'rgba(0, 0, 0, 0.50)';
  const textActiveColor = isDark ? '#ffffff' : '#1d1d1f';

  const pillBg = isDark ? 'rgba(255, 255, 255, 0.10)' : 'rgba(0, 0, 0, 0.06)';
  const pillBorder = isDark ? '0.5px solid rgba(255, 255, 255, 0.18)' : '0.5px solid rgba(0, 0, 0, 0.10)';
  const pillShadow = isDark
    ? 'inset 0 0.5px 0 rgba(255,255,255,0.22), inset 0 -0.5px 0 rgba(0,0,0,0.18), 0 2px 8px rgba(0,0,0,0.22), 0 0.5px 2px rgba(0,0,0,0.12)'
    : 'inset 0 0.5px 0 rgba(255,255,255,0.80), inset 0 -0.5px 0 rgba(0,0,0,0.06), 0 2px 8px rgba(0,0,0,0.08), 0 0.5px 2px rgba(0,0,0,0.04)';

  const logoFilter = isDark
    ? 'brightness(1.15) drop-shadow(0 2px 10px rgba(0, 0, 0, 0.55))'
    : 'brightness(0.85) drop-shadow(0 1px 4px rgba(0, 0, 0, 0.15))';

  return (
    <header style={headerStyle}>
      <div
        className="container"
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          height: 'var(--nav-height)',
        }}
      >
        {/* Brand Logo */}
        <Link
          href="/"
          aria-label="Origin EXIMS - Home"
          style={{
            display: 'flex',
            alignItems: 'center',
            height: '100%',
            padding: '4px 0',
          }}
        >
          <Image
            src="/images/origin-exims-logo-bronze.png"
            alt="Origin EXIMS"
            width={180}
            height={60}
            priority
            style={{
              height: '42px',
              width: 'auto',
              objectFit: 'contain',
              display: 'block',
              filter: logoFilter,
            }}
          />
        </Link>

        {/* Desktop Navigation — with sliding liquid glass pill */}
        <nav
          ref={navRef}
          aria-label="Primary Navigation"
          className="desktop-nav"
          style={{ position: 'relative' }}
        >
          {/* Sliding liquid glass pill */}
          {pill.ready && (
            <div
              aria-hidden="true"
              style={{
                position: 'absolute',
                top: '50%',
                left: pill.left - hPad,
                width: pill.width + hPad * 2,
                height: `calc(1em + ${vPad * 2 + 16}px)`,
                transform: 'translateY(-50%)',
                borderRadius: '980px',
                background: pillBg,
                backdropFilter: 'blur(24px) saturate(180%)',
                WebkitBackdropFilter: 'blur(24px) saturate(180%)',
                border: pillBorder,
                boxShadow: pillShadow,
                pointerEvents: 'none',
                zIndex: 0,
                transition: isFirstMeasure.current
                  ? 'none'
                  : 'left 0.5s cubic-bezier(0.4, 0, 0.12, 1), width 0.5s cubic-bezier(0.4, 0, 0.12, 1)',
              }}
            />
          )}

          {NAV_LINKS.map((link) => {
            const isActive = link.dropdown
              ? pathname.startsWith('/product')
              : pathname === link.href;

            if (link.dropdown) {
              return (
                <div
                  key={link.href}
                  ref={dropdownRef}
                  style={{ position: 'relative', display: 'inline-block' }}
                  onMouseEnter={() => {
                    if (hoverTimerRef.current) clearTimeout(hoverTimerRef.current);
                    setDropdownOpen(true);
                  }}
                  onMouseLeave={() => {
                    hoverTimerRef.current = setTimeout(() => setDropdownOpen(false), 150);
                  }}
                >
                  {/* Clicking "Products" navigates to /product */}
                  <Link
                    href={link.href}
                    data-active={isActive ? 'true' : 'false'}
                    className="text-nav"
                    style={{
                      position: 'relative',
                      padding: '0.5rem 0',
                      color: isActive ? textActiveColor : textColor,
                      fontWeight: isActive ? 600 : 400,
                      zIndex: 1,
                      transition: 'color 0.4s ease',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.3rem',
                      textDecoration: 'none',
                    }}
                  >
                    {link.label}
                    <svg
                      width="11" height="11"
                      viewBox="0 0 24 24" fill="none"
                      stroke="currentColor" strokeWidth="2"
                      strokeLinecap="round" strokeLinejoin="round"
                      style={{
                        transition: 'transform 0.25s ease',
                        transform: dropdownOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                        opacity: 0.6,
                      }}
                    >
                      <polyline points="6 9 12 15 18 9" />
                    </svg>
                  </Link>

                  {/* Dropdown panel — appears on hover */}
                  {dropdownOpen && (
                    <div
                      style={{
                        position: 'absolute',
                        top: 'calc(100% + 10px)',
                        left: '50%',
                        transform: 'translateX(-50%)',
                        minWidth: '220px',
                        background: 'rgba(15, 15, 15, 0.90)',
                        backdropFilter: 'blur(32px) saturate(180%)',
                        WebkitBackdropFilter: 'blur(32px) saturate(180%)',
                        border: '1px solid rgba(255, 255, 255, 0.10)',
                        borderRadius: '14px',
                        padding: '0.5rem',
                        boxShadow: '0 20px 60px rgba(0,0,0,0.55), 0 4px 16px rgba(0,0,0,0.30)',
                        zIndex: 200,
                      }}
                    >
                      {/* Arrow tip */}
                      <div style={{
                        position: 'absolute',
                        top: '-5px',
                        left: '50%',
                        transform: 'translateX(-50%) rotate(45deg)',
                        width: '10px',
                        height: '10px',
                        background: 'rgba(15, 15, 15, 0.90)',
                        border: '1px solid rgba(255,255,255,0.10)',
                        borderRight: 'none',
                        borderBottom: 'none',
                        borderRadius: '2px 0 0 0',
                      }} />
                      {link.dropdown.map((item) => (
                        <Link
                          key={item.href}
                          href={item.href}
                          style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '0.5rem',
                            padding: '0.65rem 1rem',
                            borderRadius: '10px',
                            color: pathname.startsWith(item.href)
                              ? 'var(--color-bronze)'
                              : 'rgba(255,255,255,0.75)',
                            textDecoration: 'none',
                            fontSize: '0.9rem',
                            fontWeight: pathname.startsWith(item.href) ? 500 : 400,
                            background: pathname.startsWith(item.href)
                              ? 'rgba(145,109,72,0.12)'
                              : 'transparent',
                            transition: 'background 0.2s ease, color 0.2s ease',
                          }}
                          onMouseEnter={e => {
                            (e.currentTarget as HTMLElement).style.background = 'rgba(255,255,255,0.06)';
                          }}
                          onMouseLeave={e => {
                            (e.currentTarget as HTMLElement).style.background = pathname.startsWith(item.href)
                              ? 'rgba(145,109,72,0.12)'
                              : 'transparent';
                          }}
                        >
                          <svg width="14" height="14" viewBox="0 0 24 24" fill="none"
                            stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"
                            style={{ opacity: 0.45 }}>
                            <path d="M5 12h14M13 5l7 7-7 7" />
                          </svg>
                          {item.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              );
            }

            return (
              <Link
                key={link.href}
                href={link.href}
                data-active={isActive ? 'true' : 'false'}
                className="text-nav"
                style={{
                  position: 'relative',
                  padding: '0.5rem 0',
                  color: isActive ? textActiveColor : textColor,
                  fontWeight: isActive ? 600 : 400,
                  zIndex: 1,
                  transition: 'color 0.4s ease',
                }}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          type="button"
          className="mobile-menu-btn"
          onClick={() => setIsOpen(!isOpen)}
          aria-expanded={isOpen}
          aria-controls="mobile-navigation"
          aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
          style={{
            width: '40px', height: '40px', padding: '8px',
            color: isDark ? 'var(--color-white)' : 'var(--color-graphite)',
          }}
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none"
            stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
            {isOpen ? (
              <>
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </>
            ) : (
              <>
                <line x1="4" y1="7" x2="20" y2="7" />
                <line x1="4" y1="17" x2="20" y2="17" />
              </>
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Navigation Drawer */}
      <div
        id="mobile-navigation"
        className={`mobile-nav-drawer ${isOpen ? 'is-open' : ''}`}
        aria-hidden={!isOpen}
        style={{
          position: 'fixed',
          top: 'var(--nav-height)', left: 0, right: 0, bottom: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.92)',
          backdropFilter: 'blur(40px) saturate(180%)',
          WebkitBackdropFilter: 'blur(40px) saturate(180%)',
          display: isOpen ? 'flex' : 'none',
          flexDirection: 'column',
          justifyContent: 'flex-start',
          padding: '2rem 1.5rem',
          zIndex: 99,
          borderTop: '1px solid rgba(255, 255, 255, 0.10)',
        }}
      >
        <nav style={{ display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
          {NAV_LINKS.map((link) => {
            if (link.dropdown) {
              return (
                <div key={link.href}>
                  <Link
                    href={link.href}
                    style={{
                      fontSize: '1.25rem',
                      fontWeight: pathname.startsWith('/product') ? 600 : 400,
                      color: pathname.startsWith('/product') ? 'var(--color-bronze)' : 'var(--color-white)',
                      padding: '0.75rem 0',
                      borderBottom: '1px solid rgba(255, 255, 255, 0.06)',
                      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                    }}
                  >
                    <span>{link.label}</span>
                  </Link>
                  {/* Sub-links */}
                  <div style={{ display: 'flex', flexDirection: 'column', paddingLeft: '1rem', gap: '0.25rem', marginBottom: '0.5rem' }}>
                    {link.dropdown.map(item => (
                      <Link
                        key={item.href}
                        href={item.href}
                        style={{
                          fontSize: '1rem',
                          color: pathname.startsWith(item.href) ? 'var(--color-bronze)' : 'rgba(255,255,255,0.55)',
                          padding: '0.5rem 0',
                          textDecoration: 'none',
                          display: 'flex', alignItems: 'center', gap: '0.4rem',
                        }}
                      >
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none"
                          stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M5 12h14M13 5l7 7-7 7" />
                        </svg>
                        {item.label}
                      </Link>
                    ))}
                  </div>
                </div>
              );
            }

            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className="text-nav-mobile"
                style={{
                  fontSize: '1.25rem',
                  fontWeight: isActive ? 600 : 400,
                  color: isActive ? 'var(--color-bronze)' : 'var(--color-white)',
                  padding: '0.75rem 0',
                  borderBottom: '1px solid rgba(255, 255, 255, 0.06)',
                  display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                }}
              >
                <span>{link.label}</span>
                {isActive && (
                  <span style={{
                    width: '6px', height: '6px', borderRadius: '50%',
                    backgroundColor: 'var(--color-bronze)',
                  }} />
                )}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
