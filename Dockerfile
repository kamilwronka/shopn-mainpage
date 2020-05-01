FROM node:14.1.0-alpine

ARG MAINPAGE_API_URL
ARG PORT

WORKDIR /usr/src/app
COPY package.json yarn.lock ./
RUN yarn
COPY . ./
RUN yarn build

ENV NODE_ENV=production

EXPOSE 3000
ENTRYPOINT [ "yarn", "start" ]