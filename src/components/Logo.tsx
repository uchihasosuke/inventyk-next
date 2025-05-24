
import Link from 'next/link';
import Image from 'next/image';
import InventykLogoAsset from '@/components/icons/inventyk-logo.svg'; 

export function Logo() {
  const displayHeight = 32; // Target rendered height for the SVG logo (Tailwind h-8)
  const asset = InventykLogoAsset as { src: string; width?: number; height?: number };

  // Helper function to render the name part, so it can be reused in fallback
  const renderName = (isFallback: boolean = false) => (
    <>
      <span className={`font-bold text-primary ${isFallback ? '' : 'ml-2'} text-lg whitespace-nowrap`}>
        INVENTYK
      </span>
      <span className="ml-1.5 text-[0.7rem] leading-none text-foreground/70 hidden sm:inline whitespace-nowrap tracking-tight">
        AI Powered Solution & Services
      </span>
    </>
  );

  if (
    !asset || typeof asset.src !== 'string' ||
    typeof asset.width !== 'number' || asset.width <= 0 ||
    typeof asset.height !== 'number' || asset.height <= 0
  ) {
    console.warn(
      "InventykLogoAsset: Invalid or missing dimensions from inventyk-logo.svg import. " +
      "Falling back to text logo. Ensure your SVG file has valid 'width' and 'height' attributes on its root <svg> tag."
    );
    return (
      <Link 
        href="/" 
        className="flex items-center hover:opacity-80 transition-opacity" 
        aria-label="Inventyk - AI Powered Solution & Services Home"
      >
        {renderName(true)}
      </Link>
    );
  }

  // Calculate display width to maintain aspect ratio based on intrinsic dimensions
  const displayWidth = Math.round((asset.width / asset.height) * displayHeight);

  if (displayWidth <= 0) { // Additional guard for the calculated width
    console.warn("InventykLogoAsset: Calculated displayWidth is invalid (<=0). Falling back to text logo.");
    return (
      <Link 
        href="/" 
        className="flex items-center hover:opacity-80 transition-opacity" 
        aria-label="Inventyk - AI Powered Solution & Services Home"
      >
        {renderName(true)}
      </Link>
    );
  }

  return (
    <Link
      href="/"
      className="flex items-center hover:opacity-80 transition-opacity"
      aria-label="Inventyk - AI Powered Solution & Services Home"
    >
      <Image
        src={asset.src}
        alt="Inventyk Logo" 
        width={displayWidth}
        height={displayHeight}
        // priority // Consider if LCP, but unlikely for a small header logo
      />
      {renderName()}
    </Link>
  );
}
