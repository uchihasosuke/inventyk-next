import Link from 'next/link';
import Image from 'next/image';
import InventykLogoAsset from '@/components/icons/inventyk-logo.svg'; // Import the SVG asset

interface LogoProps {
  size?: 'default' | 'large';
}

export function Logo({ size = 'default' }: LogoProps) {
  // Target rendered height for the SVG logo based on size
  const displayHeight = size === 'large' ? 48 : 32; // 48px for large, 32px for default
  const asset = InventykLogoAsset as { src: string; width?: number; height?: number };

  // Helper function to render the name part, now stacked vertically
  const renderName = (isFallback: boolean = false) => (
    <div className={`flex flex-col justify-center ${isFallback ? '' : 'ml-2'}`}>
      <span className={`font-bold text-primary whitespace-nowrap ${size === 'large' ? 'text-2xl' : 'text-lg'} leading-tight`}>
        INVENTYK
      </span>
      <span className={`leading-tight text-foreground/70 hidden sm:block whitespace-nowrap tracking-tight ${size === 'large' ? 'text-sm' : 'text-[0.65rem]'}`}>
        AI Powered Solution & Services
      </span>
    </div>
  );

  // Check if the asset is valid for next/image
  if (!asset || typeof asset.src !== 'string') {
    console.warn(
      "InventykLogoAsset: Invalid asset object or missing 'src' property. Falling back to text logo. " +
      "Ensure inventyk-logo.svg is correctly imported and processed by Next.js asset pipeline."
    );
    return (
      <Link
        href="/"
        className="flex items-center hover:opacity-80 transition-opacity"
        aria-label="Inventyk - AI Powered Solution & Services, Home"
      >
        {renderName(true)}
      </Link>
    );
  }

  let displayWidth: number;
  if (typeof asset.width === 'number' && asset.width > 0 && typeof asset.height === 'number' && asset.height > 0) {
    displayWidth = Math.round((asset.width / asset.height) * displayHeight);
  } else {
    // Fallback if SVG has no dimensions or invalid dimensions, assume a default aspect ratio (e.g., 150:40)
    displayWidth = Math.round((150 / 40) * displayHeight); 
    console.warn(
      "InventykLogoAsset: Using default aspect ratio as SVG dimensions are missing or invalid in the imported asset. " +
      "Ensure your inventyk-logo.svg file has valid 'width' and 'height' attributes on its root <svg> tag."
    );
  }
  
  // Ensure displayWidth is positive, otherwise use a sensible default
  if (displayWidth <= 0) {
    displayWidth = displayHeight * (150/40); // Default based on aspect ratio if calculation fails
  }

  return (
    <Link
      href="/"
      className="flex items-center hover:opacity-80 transition-opacity"
      aria-label="Inventyk - AI Powered Solution & Services, Home"
    >
      <Image
        src={asset.src} 
        alt="Inventyk Logo"
        width={displayWidth} 
        height={displayHeight}
        className="shrink-0 [filter:brightness(0.85)]" // Increased brightness for better visibility
        priority // Consider adding priority if it's above the fold
      />
      {renderName()}
    </Link>
  );
}
