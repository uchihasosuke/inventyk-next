// src/components/icons/FlutterLogo.tsx
import type { SVGProps } from 'react';

export const FlutterLogo = (props: SVGProps<SVGSVGElement>) => (
  <svg
    aria-label="Flutter logo"
    role="img"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    {...props}
  >
    <title>Flutter</title>
    {/* Paths are intentionally not using currentColor from props for brand accuracy */}
    <path d="M13.514 0L4.158 9.324l4.632 4.632L23.368 4.368 13.514 0z" fill="#027DFD"/>
    <path d="M13.514 14.52L8.79 9.798l-4.632 4.632L8.79 19.158l4.724-4.638z" fill="#027DFD"/>
    <path d="M8.79 9.798l4.725-4.722 4.566 4.566-4.656 4.656-4.635-4.498z" fill="#02569B"/>
  </svg>
);
