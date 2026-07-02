import React, { useId } from 'react';

interface GlobeLogoProps {
  size?: number;
  className?: string;
}

/**
 * Premium globe SVG logo — dark navy base with gold continents & grid lines.
 * Inspired by the uploaded globe silhouette icon.
 */
export function GlobeLogo({ size = 64, className = '' }: GlobeLogoProps) {
  const uid = useId().replace(/:/g, '');
  const sphereId = `sphereGrad-${uid}`;
  const glowId   = `glowGrad-${uid}`;
  const clipId   = `globeClip-${uid}`;

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      role="img"
      aria-label="Globe Extent logo"
    >
      <defs>
        <radialGradient id={sphereId} cx="38%" cy="35%" r="60%">
          <stop offset="0%" stopColor="#1A3560" />
          <stop offset="100%" stopColor="#0D1F3C" />
        </radialGradient>
        <radialGradient id={glowId} cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#C9A84C" stopOpacity="0.18" />
          <stop offset="100%" stopColor="#C9A84C" stopOpacity="0" />
        </radialGradient>
        <clipPath id={clipId}>
          <circle cx="50" cy="50" r="44" />
        </clipPath>
      </defs>

      {/* Outer glow ring */}
      <circle cx="50" cy="50" r="49" fill={`url(#${glowId})`} />

      {/* Globe sphere */}
      <circle cx="50" cy="50" r="44" fill={`url(#${sphereId})`} />

      {/* ── Grid lines (clipped to sphere) ── */}
      <g clipPath={`url(#${clipId})`} stroke="#C9A84C" strokeOpacity="0.35" strokeWidth="0.7" fill="none">
        {/* Latitude lines */}
        <ellipse cx="50" cy="50" rx="44" ry="12" />
        <ellipse cx="50" cy="50" rx="44" ry="26" />
        <ellipse cx="50" cy="50" rx="44" ry="38" />
        {/* Equator — slightly bolder */}
        <line x1="6" y1="50" x2="94" y2="50" stroke="#C9A84C" strokeOpacity="0.5" strokeWidth="0.8" />
        {/* Longitude lines */}
        <ellipse cx="50" cy="50" rx="14" ry="44" />
        <ellipse cx="50" cy="50" rx="28" ry="44" />
        <ellipse cx="50" cy="50" rx="40" ry="44" />
        {/* Prime meridian */}
        <line x1="50" y1="6" x2="50" y2="94" strokeOpacity="0.5" strokeWidth="0.8" />
      </g>

      {/* ── Continents (clipped to sphere) ── */}
      <g clipPath={`url(#${clipId})`} fill="#C9A84C" fillOpacity="0.88">
        {/* Europe */}
        <path d="M46 24 L50 22 L54 24 L56 28 L53 31 L50 30 L47 31 L44 28 Z" />

        {/* Africa */}
        <path d="M45 33 L52 32 L56 36 L57 43 L55 52 L51 58 L48 57 L44 51 L42 43 L43 36 Z" />

        {/* Asia — large landmass right */}
        <path d="M56 22 L64 20 L72 23 L76 28 L78 35 L74 40 L70 42 L65 40 L60 38 L57 34 L55 28 Z" />

        {/* South Asia peninsula */}
        <path d="M62 40 L68 42 L66 50 L62 48 Z" />

        {/* Americas — left side */}
        <path d="M22 26 L30 24 L34 28 L33 34 L28 36 L24 34 L21 30 Z" />
        {/* South America */}
        <path d="M26 40 L33 38 L36 44 L34 54 L30 60 L25 58 L22 50 L22 44 Z" />

        {/* Australia */}
        <path d="M67 58 L76 56 L80 60 L79 66 L73 68 L66 65 L64 60 Z" />

        {/* Greenland */}
        <path d="M36 14 L42 13 L44 17 L41 20 L36 19 Z" />
      </g>

      {/* Outer border ring */}
      <circle cx="50" cy="50" r="44" stroke="#C9A84C" strokeWidth="1.4" fill="none" strokeOpacity="0.9" />

      {/* Thin outer decorative ring */}
      <circle cx="50" cy="50" r="47.5" stroke="#C9A84C" strokeWidth="0.5" fill="none" strokeOpacity="0.4" />
    </svg>
  );
}
