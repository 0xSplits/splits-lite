#!/bin/sh
set -e

echo "Generating .env from template..."
envsubst < /usr/src/app/.env.template > /usr/src/app/.env

echo "Resulting .env:"
cat /usr/src/app/.env

exec "$@"
