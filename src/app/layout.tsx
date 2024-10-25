import React from 'react'

import App from '~/app/app'

import type { Metadata } from 'next'
import '~/app/globals.css'

const TITLE = 'Splits Lite'
const DESCRIPTION = 'A minimal app for creating and distributing Splits'

const OG_IMAGE_SIZE = {
  width: 1200,
  height: 630,
}

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    siteName: 'lite.splits.org',
    type: 'website',
    images: [
      {
        url: '/cover_social.png',
        ...OG_IMAGE_SIZE,
        alt: TITLE,
      },
    ],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>
        <App>{children}</App>
      </body>
    </html>
  )
}
