import React from 'react';

interface PlaceholderProps {
  label: string;
  hint?: string;
  theme?: 'dark' | 'light';
  minHeight?: string;
  aspectRatio?: string;
  className?: string;
  children?: React.ReactNode;
  style?: React.CSSProperties;
}

export default function Placeholder({
  label,
  hint,
  theme = 'dark',
  minHeight,
  aspectRatio,
  className = '',
  children,
  style,
}: PlaceholderProps) {
  const themeClass =
    theme === 'light' ? 'arch-placeholder-light' : 'arch-placeholder-dark';

  return (
    <div
      className={`arch-placeholder ${themeClass} ${className}`}
      style={{
        minHeight: minHeight || (aspectRatio ? 'auto' : '220px'),
        aspectRatio: aspectRatio || undefined,
        ...style,
      }}
      role="region"
      aria-label={`Reserved section: ${label}`}
    >
      <div className="arch-placeholder-badge">
        <span
          style={{
            display: 'inline-block',
            width: '6px',
            height: '6px',
            borderRadius: '50%',
            backgroundColor: 'var(--color-bronze)',
          }}
        />
        <span>Architecture Placeholder</span>
      </div>
      <p className="arch-placeholder-label">{label}</p>
      {hint && <p className="arch-placeholder-hint">{hint}</p>}
      {children && <div style={{ marginTop: '1rem', width: '100%' }}>{children}</div>}
    </div>
  );
}
