FROM node:18.9-alpine  as builder
WORKDIR /code
COPY package.json package-lock.json ./
RUN npm install
COPY . .
