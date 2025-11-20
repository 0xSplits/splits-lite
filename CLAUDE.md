# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Splits Lite is a minimal React application for creating and distributing Splits (payment splitters) on multiple EVM chains. Built with Next.js 14, it uses the @0xsplits/splits-kit SDK and wagmi/viem for blockchain interactions.

## Development Commands

### Setup and Running
```bash
# Install dependencies (requires bun)
bun install

# Run development server (http://localhost:3000)
bun dev

# Build for production
bun build

# Start production server
bun start

# Lint code
bun lint
```

### Environment Setup
Create `.env.local` from `.env.sample`:
- `ALCHEMY_API_KEY`: Required for RPC connections to all supported chains
- `WALLETCONNECT_PROJECT_ID`: Required for wallet connection functionality

## Architecture

### Web3 Provider Hierarchy
The app uses a nested provider structure (outer to inner):
1. **QueryClientProvider** (Tanstack Query) - Data fetching/caching
2. **WagmiProviderWrapper** - Blockchain state and wallet connections
3. **RainbowProvider** - Wallet UI and connection
4. **SplitsProvider** (@0xsplits/splits-kit) - Splits SDK context

Environment variables are fetched client-side via `/api/env` route and passed down through providers.

### Multi-Chain Support
- **Chain Configuration**: `src/constants/chains.ts` exports `SUPPORTED_CHAINS` array and `rpcUrl()` function
- **Token Lists**: `src/constants/erc20.ts` maps chain IDs to supported ERC20 token addresses
- **Adding New Chains**: When adding a chain to `SUPPORTED_CHAINS`, you must also:
  1. Add the chain to the `rpcUrl()` object with Alchemy endpoint
  2. Enable the chain on the `splits-lite` app in Alchemy dashboard
  3. Add a token list entry to `ERC_20_TOKEN_LIST_BY_CHAIN` (can be empty array)

### Application Flow
1. User connects wallet via RainbowKit
2. App detects connected chain and validates against `SUPPORTED_CHAINS`
3. Two main tabs: "Create" (CreateSplit component) and "Search" (DisplaySplitViaProvider)
4. Split creation uses v2 Push splits with zero address owner and 0% distributor fee
5. On successful creation, app auto-switches to Search tab with new split address

### Splits SDK Integration
The app uses `useSplitsClient` hook with:
- Current chain's public client (from wagmi)
- Wallet client (for transactions)
- Pre-initialized public clients for all supported chains (for cross-chain balance checks)

## Code Style and Conventions

### Import Paths
- Always use `~/` prefix for internal imports (enforced by eslint)
- Example: `import { Env } from '~/app/lib/env'`
- Never use relative paths like `../` or `./`

### TypeScript Configuration
- Path alias `~/*` maps to `src/*` (configured in tsconfig.json)
- Strict mode enabled
- Unknown in catch variables is disabled

### ESLint Rules
- No loops allowed (use array methods instead)
- Strict import ordering: external → internal → types
- React imports should come first
- Prettier formatting enforced

## Docker Deployment

The Dockerfile uses a multi-stage build optimized for Bun:
1. Base layer with Node 22 and corepack
2. Deps layer with Bun binary and build tools
3. Install layer with frozen lockfile
4. Build layer for Next.js compilation
5. Runtime layer with standalone output

The app runs in standalone mode (configured in next.config.js) to minimize production image size.

## Contributing Tokens and Chains

### Adding ERC20 Tokens
Open a PR modifying `src/constants/erc20.ts`:
- Add address under correct chain with symbol comment
- Include token description, block explorer link, and project links in PR description

### Adding Chains
Requirements:
- CreateX support (https://createx.rocks/)
- OP code compatibility with EVM version `Shanghai`
- Must be supported by viem
- Send minimum gas to deployer address: `0x60C65c9a8674DA22e89C7d09e839908B9f0ecC3a`

Open a GitHub issue with: primary explorer, public RPC endpoint, chain ID, and chain docs.
