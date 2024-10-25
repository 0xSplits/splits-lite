module.exports = {
  swcMinify: true,
  trailingSlash: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
  onDemandEntries: {
    // period (in ms) where the server will keep pages in the buffer
    maxInactiveAge: 120 * 1000,
    // number of pages that should be kept simultaneously without being disposed
    pagesBufferLength: 3,
  },
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          // Prevents the page from being loaded in an iframe (clickjacking prevention)
          { key: 'Content-Security-Policy', value: `frame-ancestors 'none';` },
        ],
      },
    ]
  },
  webpack: (config) => {
    // https://github.com/rainbow-me/rainbowkit/blob/main/examples/with-next-app/next.config.js
    // https://github.com/WalletConnect/walletconnect-monorepo/issues/1908

    config.resolve.fallback = { fs: false, net: false, tls: false }
    config.externals.push('pino-pretty', 'lokijs', 'encoding')
    return config
  },
}
