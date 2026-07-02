import React from 'react';

interface BrandLockupProps {
  /**
   * Controls the size tier of the lockup.
   * - 'sm'  → navbar / footer
   * - 'md'  → hero (default)
   * - 'lg'  → large hero / standalone display
   */
  size?: 'sm' | 'md' | 'lg';
  /** Override text colour; defaults to white */
  color?: string;
  /** Gold accent colour for "Extent" */
  accentColor?: string;
  className?: string;
}

/**
 * Official Globe Extent LLP brand lockup.
 *
 * Renders "GLOBE EXTENT" in Manrope with generous letter-spacing, followed by
 * "LLP" on the same baseline — noticeably smaller, baseline-aligned, with
 * a small gap so it reads as a unit without competing with the main name.
 *
 * Usage:
 *   <BrandLockup size="sm" />   — navbar / footer
 *   <BrandLockup size="md" />   — hero
 *   <BrandLockup size="lg" />   — standalone large display
 */
export function BrandLockup({
  size = 'md',
  color = '#FFFFFF',
  accentColor = '#C9A84C',
  className = '',
}: BrandLockupProps) {
  const configs = {
    sm: {
      nameFontSize: '1.125rem',   // 18px
      llpFontSize:  '0.55rem',    // ~9px
      llpOffset:    '0.12em',     // baseline nudge
      letterSpacing: '0.22em',
      gap: '0.45em',
    },
    md: {
      nameFontSize: '2rem',       // 32px
      llpFontSize:  '0.7rem',     // ~11px
      llpOffset:    '0.1em',
      letterSpacing: '0.25em',
      gap: '0.5em',
    },
    lg: {
      nameFontSize: '2.75rem',    // 44px
      llpFontSize:  '0.85rem',    // ~14px
      llpOffset:    '0.08em',
      letterSpacing: '0.28em',
      gap: '0.55em',
    },
  };

  const cfg = configs[size];

  return (
    <span
      className={className}
      style={{
        fontFamily: 'var(--app-font-brand, "Manrope", sans-serif)',
        display: 'inline-flex',
        alignItems: 'baseline',
        gap: cfg.gap,
        lineHeight: 1,
      }}
    >
      {/* GLOBE EXTENT */}
      <span
        style={{
          fontSize: cfg.nameFontSize,
          fontWeight: 600,
          letterSpacing: cfg.letterSpacing,
          color,
          textTransform: 'uppercase',
          lineHeight: 1,
          whiteSpace: 'nowrap',
        }}
      >
        GLOBE{' '}
        <span style={{ color: accentColor }}>EXTENT</span>
      </span>

      {/* LLP — baseline-aligned, noticeably smaller */}
      <span
        style={{
          fontSize: cfg.llpFontSize,
          fontWeight: 500,
          letterSpacing: '0.18em',
          color: `${color}99`, // 60% opacity
          textTransform: 'uppercase',
          lineHeight: 1,
          position: 'relative',
          top: `-${cfg.llpOffset}`,   // pull up slightly for optical baseline alignment
          whiteSpace: 'nowrap',
        }}
      >
        LLP
      </span>
    </span>
  );
}
