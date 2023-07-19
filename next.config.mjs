import nextMDX from '@next/mdx'
import remarkGfm from 'remark-gfm'
import rehypePrism from '@mapbox/rehype-prism'
import withPWA from 'next-pwa'

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ['jsx', 'mdx'],
  reactStrictMode: true,
  experimental: {
    newNextLinkBehavior: true,
    scrollRestoration: true,
    images: {
      allowFutureImage: true,
    },
  }
}

const pwaConfig = {
  dest: 'public',
  dynamicStartUrlRedirect: true,
  runtimeCaching: [
    {
      urlPattern: /^https:\/\/fonts\.gstatic\.com/,
      handler: 'StaleWhileRevalidate',
      options: {
        cacheName: 'google-fonts-webfonts',
      },
    },
    {
      urlPattern: /\.\/_next\//,
      handler: 'StaleWhileRevalidate',
      options: {
        cacheName: 'nextjs1',
      },
    },
    {
      urlPattern: /\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,
      handler: 'StaleWhileRevalidate',
      options: {
        cacheName: 'static-image-assets',
        expiration: {
          maxAgeSeconds: 24 * 60 * 60 // 24 hours
        }
      }
    },
    {
      urlPattern: /\.(?:json|xml|csv)$/i,
      handler: 'NetworkFirst',
      options: {
        cacheName: 'static-data-assets',
        expiration: {
          maxEntries: 32,
          maxAgeSeconds: 24 * 60 * 60 // 24 hours
        }
      }
    },
  ],
}


const withMDX = nextMDX({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [rehypePrism],
  },
})

export default withMDX(withPWA(pwaConfig)(nextConfig))
