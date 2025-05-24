
// src/components/icons/FirebaseLogo.tsx
import type { SVGProps } from 'react';

export const FirebaseLogo = (props: SVGProps<SVGSVGElement>) => (
  <svg
    aria-label="Firebase logo"
    role="img"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    {...props}
  >
    <title>Firebase</title>
    {/* Paths are intentionally not using currentColor from props for brand accuracy */}
    <path d="M3.242 13.377l.584 3.12L5.73 12.07l-2.488 1.307zm17.401-2.262l-3.535-2.05L13.53 2.16l3.42 6.905 3.693 2.05zm-7.608 9.83L9.5 18.067l2.16-4.687 2.375 7.827zm-5.915-3.405l-1.824 3.89L12.093 24l2.625-9.735-7.79-4.102zM8.31 7.595L3.473 3.888l7.464-2.88L13.29 3.8l-4.98 3.795zM0 11.115l3.078-1.617 2.942 6.137-3.072 1.618L0 11.115z" fill="#FFCA28"/>
    <path d="M17.113 9.065l-3.583-6.905-4.98 3.795L12.093 24l2.625-9.735 6.188-3.253-3.793-1.947z" fill="#FFA000"/>
    <path d="M3.242 13.377l.584 3.12L12.093 24l-2.543-13.188-6.308 2.565z" fill="#F57C00"/>
  </svg>
);
