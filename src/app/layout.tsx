import React from 'react'

import App from '~/app/app'
import '~/app/globals.css'

import type { Metadata } from 'next'

const TITLE = 'Splits Lite (Fancy Feature Branch)'
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
      <body className="bg-blue-300">
        <App>{children}</App>
      </body>
    </html>
  )
}
