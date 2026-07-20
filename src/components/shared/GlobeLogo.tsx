import React from "react";
import logo from "@/assets/globe-extent-logo.png";

interface GlobeLogoProps {
  size?: number;
  className?: string;
}

export function GlobeLogo({
  size = 64,
  className = "",
}: GlobeLogoProps) {
  return (
    <img
      src={logo}
      alt="Globe Extent Logo"
      width={size}
      height={size}
      className={`object-contain ${className}`}
    />
  );
}