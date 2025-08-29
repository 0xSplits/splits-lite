'use client'

import '@0xsplits/splits-kit/styles.css'
import '@rainbow-me/rainbowkit/styles.css'

import React, { ReactNode, Suspense, useEffect, useState } from 'react'

import { SplitsProvider } from '@0xsplits/splits-kit'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

import { Env, getEnv } from '~/app/lib/env'
import LoadingIndicator from '~/components/LoadingIndicator'
import { RainbowProvider, WagmiProviderWrapper } from '~/context/externalContext'

const queryClient = new QueryClient()

export default function App({ children }: { children: ReactNode }): JSX.Element {
  const [env, setEnv] = useState<Env | undefined>(undefined)
  const [error, setError] = useState<unknown>(null)

  useEffect(() => {
    if (!env) {
      getEnv(queryClient).then(setEnv).catch(setError)
    }
  }, [env])

  if (error) return <div>Failed to load config</div>
  if (!env) return <LoadingIndicator />

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <WagmiProviderWrapper env={env}>
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
