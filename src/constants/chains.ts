import {
  arbitrum,
  base,
  bsc,
  gnosis,
  mainnet,
  optimism,
  polygon,
  zora,
} from 'viem/chains'

export const SUPPORTED_CHAINS = [
  mainnet,
  polygon,
  optimism,
  arbitrum,
  base,
  bsc,
  gnosis,
  zora,
] as const
