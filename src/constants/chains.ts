import {
  arbitrum,
  base,
  bsc,
  gnosis,
  mainnet,
  optimism,
  polygon,
  zora,
  shape,
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
  shape,
] as const

export const RPC_URLS_MAP = process.env.ALCHEMY_API_KEY
  ? {
      [mainnet.id]: {
        chain: mainnet,
        url: `https://eth-mainnet.g.alchemy.com/v2/${process.env.ALCHEMY_API_KEY}`,
      },
      [polygon.id]: {
        chain: polygon,
        url: `https://polygon-mainnet.g.alchemy.com/v2/${process.env.ALCHEMY_API_KEY}`,
      },
      [optimism.id]: {
        chain: optimism,
        url: `https://opt-mainnet.g.alchemy.com/v2/${process.env.ALCHEMY_API_KEY}`,
      },
      [arbitrum.id]: {
        chain: arbitrum,
        url: `https://arb-mainnet.g.alchemy.com/v2/${process.env.ALCHEMY_API_KEY}`,
      },
      [base.id]: {
        chain: base,
        url: `https://base-mainnet.g.alchemy.com/v2/${process.env.ALCHEMY_API_KEY}`,
      },
      [gnosis.id]: {
        chain: gnosis,
        url: `https://gnosis-mainnet.g.alchemy.com/v2/${process.env.ALCHEMY_API_KEY}`,
      },
      [bsc.id]: {
        chain: bsc,
        url: `https://bnb-mainnet.g.alchemy.com/v2/${process.env.ALCHEMY_API_KEY}`,
      },
      [shape.id]: {
        chain: shape,
        url: `https://shape-mainnet.g.alchemy.com/v2/${process.env.ALCHEMY_API_KEY}`,
      },
    }
  : ({} as const)
