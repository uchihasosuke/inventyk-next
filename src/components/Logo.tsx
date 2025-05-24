
import Link from 'next/link';
import Image from 'next/image';
import InventykLogoAsset from '@/components/icons/inventyk-logo.svg'; 

export function Logo() {
  const displayHeight = 32; // Target rendered height (Tailwind h-8)

  // Type assertion for the imported SVG asset
  const asset = InventykLogoAsset as { src: string; width?: number; height?: number };

  // Check if the asset is valid and has numeric width/height properties
  if (
    !asset ||
    typeof asset.src !== 'string' ||
    typeof asset.width !== 'number' || asset.width <= 0 ||
    typeof asset.height !== 'number' || asset.height <= 0
  ) {
    // Fallback: If intrinsic dimensions are not available or invalid from the SVG import.
    // This can happen if the SVG file doesn't have width/height attributes on its root tag.
    console.warn(
      "InventykLogoAsset: Intrinsic dimensions (width/height) not found or invalid from inventyk-logo.svg import. " +
      "Falling back to text logo. To fix, ensure your inventyk-logo.svg file has valid 'width' and 'height' attributes on its root <svg> tag."
    );
    return (
      <Link href="/" className="flex items-center text-xl font-bold text-primary hover:opacity-80 transition-opacity" aria-label="Inventyk Home">
        Inventyk
      </Link>
    );
  }

  // Calculate display width to maintain aspect ratio based on intrinsic dimensions
  const displayWidth = Math.round((asset.width / asset.height) * displayHeight);

  if (displayWidth <= 0) { // Additional guard for the calculated width
    console.warn("InventykLogoAsset: Calculated displayWidth is invalid (<=0). Falling back to text logo.");
    return (
      <Link href="/" className="flex items-center text-xl font-bold text-primary hover:opacity-80 transition-opacity" aria-label="Inventyk Home">
        Inventyk
      </Link>
    );
  }

  return (
    <Link href="/" className="flex items-center hover:opacity-80 transition-opacity" aria-label="Inventyk Home">
      <Image
        src={asset.src}
        alt="Inventyk Logo"
        width={displayWidth}
        height={displayHeight}
        // priority={true} // Consider if LCP, but unlikely for a small header logo
      />
    </Link>
  );
}
