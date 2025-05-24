
import type {NextConfig} from 'next';

const nextConfig: NextConfig = {
  /* config options here */
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'placehold.co',
        port: '',
        pathname: '/**',
      },
    ],
  },
  experimental: {
    serverActions: {
      bodySizeLimit: '2mb', // example, adjust if needed
    },
  },
  webpack(config, { isServer }) {
    // Find and remove existing SVG rule(s) to avoid conflicts
    const SvgModuleRule = config.module.rules.find((rule: any) => rule.test?.test?.(".svg"));
    if (SvgModuleRule) {
      config.module.rules = config.module.rules.filter((rule: any) => !rule.test?.test?.(".svg"));
    }

    // Add new rule for SVG handling using oneOf
    config.module.rules.push({
      test: /\.svg$/i,
      oneOf: [
        {
          // For imports like `import PublicImage from './image.svg?url'`
          resourceQuery: /url/, // *.svg?url
          type: 'asset/resource',
          // Next.js default asset handling is usually sufficient for path resolution
        },
        {
          // For imports like `import MyIcon from './icon.svg'` when imported from JS/TSX
          issuer: /\.[jt]sx?$/,
          resourceQuery: { not: /url/ }, // Ensure it's not a ?url import
          use: [
            {
              loader: '@svgr/webpack',
              options: {
                svgoConfig: {
                  plugins: [
                    {
                      name: 'preset-default',
                      params: {
                        overrides: {
                          removeViewBox: false, // Keep viewBox for better scaling control
                        },
                      },
                    },
                  ],
                },
                // titleProp: true, // Useful for accessibility if you want titles
                // ref: true, // Enable if you need to forward refs to the SVG
              },
            },
          ],
        },
        {
          // Fallback for SVGs not matching above (e.g. imported from CSS or other contexts)
          // This will use the default asset/resource loader.
          type: 'asset/resource',
        }
      ],
    });

    return config;
  },
};

export default nextConfig;
