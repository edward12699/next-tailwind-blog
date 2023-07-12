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
  },
  pwa: {
    dest: 'public',
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
          cacheName: 'nextjs',
        },
      },
    ],
  },
}

const withMDX = nextMDX({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [rehypePrism],
  },
})

export default withPWA(withMDX(nextConfig))
