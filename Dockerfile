# syntax=docker/dockerfile:1.6        # enables cache mounts etc.



# The base image is the first cache layer. It is rarely changing.
FROM node:25.0.0-bullseye-slim AS base

RUN corepack enable



# The deps image is the second cache layer. It separates the final runtime from
# the build layer.
FROM base AS deps

COPY --from=oven/bun:1.2.21-debian /usr/local/bin/bun /usr/local/bin/bun
RUN apt-get update && \
    apt-get install -y --no-install-recommends python3 build-essential && \
    ln -s /usr/bin/python3 /usr/bin/python



# The install image is the third cache layer. It only changes when lock files
# change.
FROM deps AS install
WORKDIR /usr/src/app

COPY package.json bun.lock .
RUN --mount=type=cache,target=/root/.bun bun install --frozen-lockfile



# The build image is the fourth image layer. It always changes with any source
# code changes.
FROM install AS build

COPY . .
RUN --mount=type=cache,target=/root/.bun bun run build



# The runtime image is the fifth image layer. It contains all runtime
# dependencies to execute the NodeJs process.
FROM base AS runtime
WORKDIR /usr/src/app

COPY --from=build /usr/src/app/.next/standalone ./
COPY --from=build /usr/src/app/.next/static ./.next/static
COPY --from=build /usr/src/app/public ./public

CMD ["node", "server.js"]
