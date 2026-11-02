import React from 'react';

interface SectionProps {
  children: React.ReactNode;
  background?: 'black' | 'porcelain' | 'graphite';
  spacing?: 'default' | 'compact' | 'none';
  id?: string;
  className?: string;
  style?: React.CSSProperties;
}

export default function Section({
  children,
  background = 'porcelain',
  spacing = 'default',
  id,
  className = '',
  style,
}: SectionProps) {
  const bgClass =
    background === 'black'
      ? 'bg-black'
      : background === 'graphite'
      ? 'bg-graphite'
      : 'bg-porcelain';

  const spacingClass =
    spacing === 'compact'
      ? 'section-spacing-sm'
      : spacing === 'none'
      ? ''
      : 'section-spacing';

  return (
    <section
      id={id}
      className={`${bgClass} ${spacingClass} ${className}`}
      style={style}
    >
      {children}
    </section>
  );
}

