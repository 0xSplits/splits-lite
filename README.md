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
