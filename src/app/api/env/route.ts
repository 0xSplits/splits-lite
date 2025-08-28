import { NextResponse } from 'next/server'

// Ensure runtime evaluation without any env vars being baked in at buildtime.
export const dynamic = 'force-dynamic'

export function GET() {
  return NextResponse.json({
    ALCHEMY_API_KEY: process.env.ALCHEMY_API_KEY ?? '',
    WALLETCONNECT_PROJECT_ID: process.env.WALLETCONNECT_PROJECT_ID ?? '',
  })
}
