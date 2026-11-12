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

export default function CertMarquees() {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: MARQUEE_CSS }} />

      {/* ═══ MARQUEE — Registration Logos ═══ */}
      <div style={{ overflow: 'hidden', width: '100vw', position: 'relative', left: '50%', marginLeft: '-50vw', paddingTop: '0.5rem', paddingBottom: '0.5rem' }}>
        <div className="mq-reg">
          <div style={{ flexShrink: 0, width: '3vw' }} />
          {REGISTRATION_LOGOS.map((l) => <RegCard key={`a-${l.alt}`} {...l} />)}
          {REGISTRATION_LOGOS.map((l) => <RegCard key={`b-${l.alt}`} {...l} />)}
        </div>
      </div>
    </>
  );
}
