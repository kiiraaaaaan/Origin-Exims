import React from 'react';

interface ContainerProps {
  children: React.ReactNode;
  variant?: 'default' | 'narrow' | 'wide';
  className?: string;
  style?: React.CSSProperties;
}

export default function Container({
  children,
  variant = 'default',
  className = '',
  style,
}: ContainerProps) {
  const variantClass =
    variant === 'narrow'
      ? 'container-narrow'
      : variant === 'wide'
      ? 'container-wide'
      : 'container';

  return (
    <div className={`${variantClass} ${className}`} style={style}>
      {children}
    </div>
  );
}

