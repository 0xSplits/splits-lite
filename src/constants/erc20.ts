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

export const ERC_20_TOKEN_LIST_BY_CHAIN: { [key: number]: string[] } = {
  [mainnet.id]: [
    '0x6b175474e89094c44da98b954eedeac495271d0f', // DAI
    '0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48', // USDC
    '0xdAC17F958D2ee523a2206206994597C13D831ec7', // USDT
    '0xC18360217D8F7Ab5e7c516566761Ea12Ce7F9D72', // ENS
    '0xD33526068D116cE69F19A9ee46F0bd304F21A51f', // RPL
    '0xB50721BCf8d664c30412Cfbc6cf7a15145234ad1', // ARB
    '0x1f9840a85d5aF5bf1D1762F925BDADdC4201F984', // UNI
    '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2', // WETH
    '0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599', // WBTC
    '0x1aBaEA1f7C830bD89Acc67eC4af516284b1bC33c', // EURC
  ],
  [base.id]: [
    '0x4200000000000000000000000000000000000006', // WETH
    '0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913', // USDC
    '0x60a3E35Cc302bFA44Cb288Bc5a4F316Fdb1adb42', // EURC
    '0x50c5725949a6f0c72e6c4a641f24049a917db0cb', // DAI,
    '0x0578d8A44db98B23BF096A382e016e29a5Ce0ffe', // HIGHER,
    '0x4ed4E862860beD51a9570b96d89aF5E1B0Efefed', // DEGEN,
    '0xfde4C96c8593536E31F229EA8f37b2ADa2699bb2', // USDT
  ],
  [optimism.id]: [
    '0x4200000000000000000000000000000000000042', // OP
    '0xda10009cbd5d07dd0cecc66161fc93d7c9000da1', // DAI
    '0x0b2C639c533813f4Aa9D7837CAf62653d097Ff85', // USDC
    '0x4200000000000000000000000000000000000006', // ETH
    '0x1F32b1c2345538c0c6f582fCB022739c4A194Ebb', // WSTETH,
    '0x94b008aA00579c1307B0EF2c499aD98a8ce58e58', // USDT
  ],
  [arbitrum.id]: [
    '0xda10009cbd5d07dd0cecc66161fc93d7c9000da1', // DAI
    '0xaf88d065e77c8cC2239327C5EDb3A432268e5831', // USDC
    '0xFd086bC7CD5C481DCC9C85ebE478A1C0b69FCbb9', // USDT
  ],
  [polygon.id]: [
    '0x7ceB23fD6bC0adD59E62ac25578270cFf1b9f619', // WETH
    '0x3c499c542cef5e3811e1192ce70d8cc03d5c3359', // USDC
    '0x0d500B1d8E8eF31E21C99d1Db9A6444d3ADf1270', // WMATIC
    '0xc2132D05D31c914a87C6611C10748AEb04B58e8F', // USDT
  ],
  [gnosis.id]: [],
  [bsc.id]: [],
  [zora.id]: [],
}