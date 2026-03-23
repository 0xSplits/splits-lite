import {
  arbitrum,
  avalanche,
  base,
  bsc,
  gnosis,
  hoodi,
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
  celo,
  tempo,
  tempoModerato,
} from 'viem/chains'

const shapeWithIcon = {
  ...shape,
  iconUrl: '/chain-icons/shape.svg',
}

const worldchainWithIcon = {
  ...worldchain,
  iconUrl: '/chain-icons/worldchain.svg',
}

const plumeMainnetWithIcon = {
  ...plumeMainnet,
  iconUrl: '/chain-icons/plume.svg',
}

const abstractWithIcon = {
  ...abstract,
  iconUrl: '/chain-icons/abstract.svg',
}

const abstractTestnetWithIcon = {
  ...abstractTestnet,
  iconUrl: '/chain-icons/abstract.svg',
}

const roninWithIcon = {
  ...ronin,
  iconUrl: '/chain-icons/ronin.svg',
}

const saigonWithIcon = {
  ...saigon,
  iconUrl: '/chain-icons/ronin.svg',
}

const tempoWithMulticall = {
  ...tempo,
  iconUrl: '/chain-icons/tempo.svg',
  contracts: {
    ...(tempo.contracts ?? {}),
    multicall3: {
      address: '0xca11bde05977b3631167028862be2a173976ca11' as const,
    },
  },
}

const tempoModeratoWithMulticall = {
  ...tempoModerato,
  iconUrl: '/chain-icons/tempo.svg',
  contracts: {
    ...(tempoModerato.contracts ?? {}),
    multicall3: {
      address: '0xca11bde05977b3631167028862be2a173976ca11' as const,
    },
  },
}

const hoodiWithIcon = {
  ...hoodi,
  iconUrl: '/chain-icons/hoodi.svg',
}

export const SUPPORTED_CHAINS = [
  mainnet,
  polygon,
  optimism,
  arbitrum,
  base,
  bsc,
  gnosis,
  zora,
  shapeWithIcon,
  worldchainWithIcon,
  plumeMainnetWithIcon,
  abstractWithIcon,
  abstractTestnetWithIcon,
  roninWithIcon,
  saigonWithIcon,
  celo,
  tempoWithMulticall,
  tempoModeratoWithMulticall,
  avalanche,
  hoodiWithIcon,
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
      chain: shapeWithIcon,
      url: `https://shape-mainnet.g.alchemy.com/v2/${key}`,
    },
    [worldchain.id]: {
      chain: worldchainWithIcon,
      url: `https://worldchain-mainnet.g.alchemy.com/v2/${key}`,
    },
    [plumeMainnet.id]: {
      chain: plumeMainnetWithIcon,
      url: `https://phoenix-rpc.plumenetwork.xyz`,
    },
    [abstract.id]: {
      chain: abstractWithIcon,
      url: `https://abstract-mainnet.g.alchemy.com/v2/${key}`,
    },
    [abstractTestnet.id]: {
      chain: abstractTestnetWithIcon,
      url: `https://abstract-testnet.g.alchemy.com/v2/${key}`,
    },
    [ronin.id]: {
      chain: roninWithIcon,
      url: `https://ronin-mainnet.g.alchemy.com/v2/${key}`,
    },
    [saigon.id]: {
      chain: saigonWithIcon,
      url: `https://ronin-saigon.g.alchemy.com/v2/${key}`,
    },
    [celo.id]: {
      chain: celo,
      url: `https://celo-mainnet.g.alchemy.com/v2/${key}`,
    },
    [tempo.id]: {
      chain: tempoWithMulticall,
      url: `https://tempo-mainnet.g.alchemy.com/v2/${key}`,
    },
    [tempoModerato.id]: {
      chain: tempoModeratoWithMulticall,
      url: `https://tempo-moderato.g.alchemy.com/v2/${key}`,
    },
    [avalanche.id]: {
      chain: avalanche,
      url: `https://avax-mainnet.g.alchemy.com/v2/${key}`,
    },
    [hoodi.id]: {
      chain: hoodiWithIcon,
      url: `https://eth-hoodi.g.alchemy.com/v2/${key}`,
    },
  }
}
