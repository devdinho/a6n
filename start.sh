#!/bin/bash
export NODE_ENV=production
export PORT=3001
export PATH=/root/.nvm/versions/node/v22.17.0/bin:$PATH

yarn build
yarn start
