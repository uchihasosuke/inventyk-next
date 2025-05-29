'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

interface LogoProps {
  size?: 'default' | 'large';
}

export function Logo({ size = 'default' }: LogoProps) {
  const [imageError, setImageError] = useState(false);
  // Target rendered height for the SVG logo based on size
  const displayHeight = size === 'large' ? 42 : 32; // Increased from 36/24 to 42/32
  const displayWidth = displayHeight * (501/498); // Using actual SVG aspect ratio

  // Helper function to render the name part, now stacked vertically
  const renderName = (isFallback: boolean = false) => (
    <div className={`flex flex-col justify-center ${isFallback ? '' : 'ml-2'}`}>
      <span className={`font-bold text-primary whitespace-nowrap ${size === 'large' ? 'text-2xl' : 'text-lg'} leading-tight`}>
        INVENTYK
      </span>
      <span className={`leading-tight text-foreground/70 hidden sm:block whitespace-nowrap tracking-tight ${size === 'large' ? 'text-sm' : 'text-xs'}`}>
        AI Powered Solution & Services
      </span>
    </div>
  );

  return (
    <Link
      href="/"
      className="flex items-center hover:opacity-80 transition-opacity"
      aria-label="Inventyk - AI Powered Solution & Services, Home"
    >
      {!imageError ? (
        <Image
          src="/icons/inventyk-logo.svg"
          alt="Inventyk Logo"
          width={displayWidth}
          height={displayHeight}
          className="shrink-0 [filter:brightness(0.85)]"
          priority
          onError={() => setImageError(true)}
        />
      ) : null}
      {renderName(imageError)}
    </Link>
  );
}
