
// src/components/icons/NextjsLogo.tsx
import type { SVGProps } from 'react';

export const NextjsLogo = (props: SVGProps<SVGSVGElement>) => (
  <svg
    aria-label="Next.js logomark"
    role="img"
    viewBox="0 0 180 180"
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    {...props}
  >
    <title>Next.js</title>
    <mask
      id="a"
      style={{ maskType: 'alpha' }}
      maskUnits="userSpaceOnUse"
      x="0"
      y="0"
      width="180"
      height="180"
    >
      <circle cx="90" cy="90" r="90" fill="#fff"></circle>
    </mask>
    <g mask="url(#a)">
      <circle cx="90" cy="90" r="90" fill="black"></circle>
      <path
        d="M149.508 157.52L69.143 54H54V125.97H66.1136V69.3838L139.999 164.845C143.836 160.801 146.943 159.247 149.508 157.52Z"
        fill="url(#b)"
      ></path>
      <path
        d="M126 126H113.886L126 109.469V126Z"
        fill="url(#c)"
      ></path>
    </g>
    <defs>
      <linearGradient
        id="b"
        x1="115.5"
        y1="54"
        x2="143"
        y2="130"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#fff"></stop>
        <stop offset="1" stopColor="#fff" stopOpacity="0"></stop>
      </linearGradient>
      <linearGradient
        id="c"
        x1="115.5"
        y1="54"
        x2="143"
        y2="130"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#fff"></stop>
        <stop offset="1" stopColor="#fff" stopOpacity="0"></stop>
      </linearGradient>
    </defs>
  </svg>
);
