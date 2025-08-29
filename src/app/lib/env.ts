'use client'

import { QueryClient } from '@tanstack/react-query'

export type Env = {
  ALCHEMY_API_KEY: string
  WALLETCONNECT_PROJECT_ID: string
}

export const fetchOptions = {
  queryKey: ['env'],
  queryFn: doFetch,
  staleTime: Infinity,
  gcTime: 24 * 60 * 60 * 1000,
}

async function doFetch(): Promise<Env> {
  const res = await fetch('/api/env')
  if (!res.ok) throw new Error('Failed to load env vars')
  return res.json()
}

export function getEnv(queryClient: QueryClient) {
  return queryClient.ensureQueryData(fetchOptions)
}
