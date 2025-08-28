# syntax=docker/dockerfile:1

FROM node:22.15.1-bullseye-slim

# install envsubst (from gettext)
RUN apt-get update && apt-get install -y --no-install-recommends gettext-base

WORKDIR /usr/src/app

# copy your template
COPY .env.template .
COPY entrypoint.sh .

ENTRYPOINT ["/usr/src/app/entrypoint.sh"]
CMD ["node", "-e", "console.log('Container started, .env is ready')"]
