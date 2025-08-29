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
  worldchain,
  plumeMainnet,
  abstract,
  abstractTestnet,
  ronin,
  saigon,
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
  worldchain,
  plumeMainnet,
  abstract,
  abstractTestnet,
  ronin,
  saigon,
] as const

// note: To add support for a new chain please enable the chain on the `splits-lite` app on alchemy.
export const rpcUrl = (key: string) => {
  return {
    [mainnet.id]: {
      chain: mainnet,
      url: `https://eth-mainnet.g.alchemy.com/v2/${key}`,
    },
    [polygon.id]: {
      chain: polygon,
      url: `https://polygon-mainnet.g.alchemy.com/v2/${key}`,
    },
    [optimism.id]: {
      chain: optimism,
      url: `https://opt-mainnet.g.alchemy.com/v2/${key}`,
    },
    [arbitrum.id]: {
      chain: arbitrum,
      url: `https://arb-mainnet.g.alchemy.com/v2/${key}`,
    },
    [base.id]: {
      chain: base,
      url: `https://base-mainnet.g.alchemy.com/v2/${key}`,
    },
    [gnosis.id]: {
      chain: gnosis,
      url: `https://gnosis-mainnet.g.alchemy.com/v2/${key}`,
    },
    [bsc.id]: {
      chain: bsc,
      url: `https://bnb-mainnet.g.alchemy.com/v2/${key}`,
    },
    [shape.id]: {
      chain: shape,
      url: `https://shape-mainnet.g.alchemy.com/v2/${key}`,
    },
    [worldchain.id]: {
      chain: worldchain,
      url: `https://worldchain-mainnet.g.alchemy.com/v2/${key}`,
    },
    [plumeMainnet.id]: {
      chain: plumeMainnet,
      url: `https://phoenix-rpc.plumenetwork.xyz`,
    },
    [abstract.id]: {
      chain: abstract,
      url: `https://abstract-mainnet.g.alchemy.com/v2/${key}`,
    },
    [abstractTestnet.id]: {
      chain: abstractTestnet,
      url: `https://abstract-testnet.g.alchemy.com/v2/${key}`,
    },
    [ronin.id]: {
      chain: ronin,
      url: `https://ronin-mainnet.g.alchemy.com/v2/${key}`,
    },
    [saigon.id]: {
      chain: saigon,
      url: `https://ronin-saigon.g.alchemy.com/v2/${key}`,
    },
  }
}
