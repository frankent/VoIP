FROM node:10

WORKDIR /app

COPY . /app

RUN npm ci && npm run build