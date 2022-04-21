FROM node:14.17-alpine AS node
WORKDIR /app
COPY ./package.json ./yarn.lock /app/
RUN --mount=type=cache,target=/root/.yarn YARN_CACHE_FOLDER=/root/.yarn yarn install
ENV PATH /app/node_modules/.bin:$PATH
WORKDIR /app/website

FROM node AS builder
COPY . /app/website
RUN --mount=type=cache,target=./node_modules/.cache/webpack yarn build
