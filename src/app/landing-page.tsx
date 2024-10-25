'use client'

import React from 'react'

import { ConnectButton } from '@rainbow-me/rainbowkit'
import { useAccount } from 'wagmi'

import LoadingIndicator from '~/components/LoadingIndicator'

export default function Home() {
  const { address, isConnecting } = useAccount()

  if (isConnecting) return <LoadingIndicator />

  return (
    <div className="p-4">
      <div className="flex items-end justify-end">
        <ConnectButton showBalance={false} chainStatus={'icon'} />
      </div>
      <div className="items-center justify-items-center p-8 pb-20 sm:p-20">
        {address ? <ConnectedPage /> : <LandingPage />}
      </div>
    </div>
  )
}

const LandingPage = () => {
  return (
    <main className="flex flex-col items-center space-y-4 sm:items-start">
      <div className="text-xl">Splits Lite</div>
      <div className="text-md">
        A minimal app for creating and distributing Splits. Connect your wallet
        to continue.
      </div>
    </main>
  )
}

const ConnectedPage = () => {
  return <div>You are connected!</div>
}
