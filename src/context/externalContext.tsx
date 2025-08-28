import React from 'react'

import {
  RainbowKitProvider,
  darkTheme,
  lightTheme,
  DisclaimerComponent,
  Theme,
  getDefaultConfig,
} from '@rainbow-me/rainbowkit'
import {
  injectedWallet,
  metaMaskWallet,
  coinbaseWallet,
  rainbowWallet,
  walletConnectWallet,
  safeWallet,
} from '@rainbow-me/rainbowkit/wallets'
import { merge } from 'lodash'
import { WagmiProvider } from 'wagmi'

import { Env } from '~/app/lib/env'
import { SUPPORTED_CHAINS } from '~/constants/chains'

export const WagmiProviderWrapper = ({ children, env }: { children: JSX.Element; env: Env }) => {
  const config = getDefaultConfig({
    // Rainbow settings
    appName: 'Splits Lite',
    appDescription: 'A minimal app for creating and distributing Splits',
    appUrl: 'https://lite.splits.org',
    appIcon: 'https://lite.splits.org/favicon.ico',
    wallets: [
      {
        groupName: 'Wallets',
        wallets: [injectedWallet, metaMaskWallet, coinbaseWallet, walletConnectWallet, rainbowWallet, safeWallet],
      },
    ],
    projectId: env.WALLETCONNECT_PROJECT_ID,
    // Wagmi settings
    ssr: true, // TODO: cookie storage? https://wagmi.sh/react/guides/ssr
    chains: SUPPORTED_CHAINS,
    pollingInterval: 20_000,
  })

  return <WagmiProvider config={config}>{children}</WagmiProvider>
}

const RainbowDisclaimer: DisclaimerComponent = ({
  Text,
  Link,
}: {
  Text: React.FunctionComponent<{
    children: React.ReactNode
  }>
  Link: React.FunctionComponent<{
    children: React.ReactNode
    href: string
  }>
}) => {
  return (
    <Text>
      <span>
        <span className="font-semibold">Using a Gnosis Safe? </span> Use the{' '}
        <Link href="https://app.safe.global/welcome/accounts">0xSplits Gnosis app</Link> or connect using{' '}
        <Link href="https://help.safe.global/en/articles/108235-how-to-connect-a-safe-to-a-dapp-using-walletconnect">
          WalletConnect
        </Link>
        .
      </span>
    </Text>
  )
}

const customLightTheme = merge(
  lightTheme({
    accentColor: '#3B82F6',
    borderRadius: 'medium',
    fontStack: 'system',
  }),
  {
    fonts: {
      body: 'Arial, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif',
    },
  } as Theme,
)
const customDarkTheme = merge(
  darkTheme({
    accentColor: '#3B82F6',
    borderRadius: 'medium',
    fontStack: 'system',
  }),
  {
    fonts: {
      body: 'Arial, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif',
    },
  } as Theme,
)

export const RainbowProvider = ({ children }: { children: JSX.Element }) => {
  return (
    <RainbowKitProvider
      modalSize={'compact'}
      theme={{
        lightMode: customLightTheme,
        darkMode: customDarkTheme,
      }}
      appInfo={{
        appName: 'Splits',
        disclaimer: RainbowDisclaimer,
      }}
    >
      {children}
    </RainbowKitProvider>
  )
}
