'use client'

import '@rainbow-me/rainbowkit/styles.css'

import React, { ReactNode, Suspense } from 'react'

import { SplitsProvider } from '@0xsplits/splits-kit'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

import LoadingIndicator from '~/components/LoadingIndicator'
import { RainbowProvider, WagmiProviderWrapper } from '~/context/externalContext'

import '@0xsplits/splits-kit/styles.css'

const queryClient = new QueryClient()

export default function App({ children }: { children: ReactNode }): JSX.Element {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <WagmiProviderWrapper>
          <RainbowProvider>
            <SplitsProvider>
              <AppContainer>{children}</AppContainer>
            </SplitsProvider>
          </RainbowProvider>
        </WagmiProviderWrapper>
      </QueryClientProvider>
    </>
  )
}

const AppContainer = ({ children }: { children: ReactNode }): JSX.Element => {
  return <Suspense fallback={<LoadingIndicator />}>{children}</Suspense>
}
