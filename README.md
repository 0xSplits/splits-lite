# splits-lite

A minimal react app for creating and distributing Splits.

## Getting Started

Create your own `.env.local` based on `.env.sample`, and then install [bun] and
all dependencies in order to run the development server reachable at
[http://localhost:3000](http://localhost:3000).

```bash
bun install
bun dev
```

## Supporting New Tokens and Chains

### Tokens

To add a new ERC20 to Splits Lite, open a pull request with the following information:

- Add the address to the [erc20.ts](/src/constants/erc20.ts) file. Make sure it's under the correct
  network. Include the token symbol as a comment next to it.
- Include a short description of the token in the PR description
- Include a link to etherscan (or the appropriate block explorer for that network) in the PR description
- Include any other relevant links (to project website, listing on coingecko, etc.) in the PR description

View example pull request [here](https://github.com/0xSplits/splits-lite/pull/9)

### Chains

To add a new Chain to Splits Lite, please follow these steps:

1. Ensure the following requirements are met:
   - [CreateX](https://createx.rocks/) support.
   - Complete OP code compatibility with evm version `Shanghai`.
   - Chain should be supported by [viem](https://viem.sh/docs/chains/introduction#chains).
2. Send the minimum amount of native gas token to `0x60C65c9a8674DA22e89C7d09e839908B9f0ecC3a`
   - Please refer to the gas cost of [this](https://etherscan.io/tx/0x7b08cac91ec61887ba6ba3b0541fb63efd369e328cc68963bf878c9cf23df923) transaction to calculate the minimum amount of native gas required.
3. Please open an issue on github and include the following information:
   - Primary chain explorer. Ex. [Etherscan](https://etherscan.io)
   - Public RPC endpoint.
   - Chain ID.
   - Any docs referencing the Chain. Ex [Base](https://docs.base.org/docs/)

If you have any questions or need any help with any of the steps above feel free to open an issue or reach out to us at `support@splits.org`.

[bun]: https://bun.sh/docs/installation
