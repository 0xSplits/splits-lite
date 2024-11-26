# splits-lite

A minimal app for creating and distributing Splits

## Getting Started

Install all dependencies and then run the development server:

```bash
pnpm install
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Contributions

### ERC20

To add a new ERC20 to Splits Lite, open a pull request with the following information:

- Add the address to the [erc20.ts](/src/constants/erc20.ts) file. Make sure it's under the correct
network. Include the token symbol as a comment next to it.
- Include a short description of the token in the PR description
- Include a link to etherscan (or the appropriate block explorer for that network) in the PR description
- Include any other relevant links (to project website, listing on coingecko, etc.) in the PR description

View example pull request [here](https://github.com/0xSplits/splits-lite/pull/9)

### Chain

To add a new Chain to Splits Lite, please follow these steps:

1. Ensure the following requirements are met:
    - [CreateX](https://createx.rocks/) support.
    - Complete OP code compatibility with evm version `Shanghai`.
    - Chain should be supported by [viem](https://viem.sh/docs/chains/introduction#chains).
    - Alchemy support is recommended for a better user experience. Without an Alchemy or its equivalent RPC support indexing can be slow leading to degraded user experience.
2. Send the minimum amount of native gas token to `0x60C65c9a8674DA22e89C7d09e839908B9f0ecC3a`
    - Please refer to the gas cost of [this](https://etherscan.io/tx/0x20e8da208491560c658a25dcaa2bf37f94f26ccb4d5caaac4a346b2152818513) transaction to calculate the minimum amount of native gas required.
3. Please open an issue on github and include the following information:
    - Primary chain explorer. Ex. [Etherscan](https://etherscan.io)
    - Public RPC endpoint.
    - Chain ID.
    - Any docs referencing the Chain. Ex [Base](https://docs.base.org/docs/)

If you have any questions or need any help with any of the steps above feel free to open an issue or reach out to us at `support@splits.org`.
