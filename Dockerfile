FROM node:14.1.0-alpine

ARG MAINPAGE_API_URL

ENV PORT=80
ENV MAINPAGE_API_URL=${MAINPAGE_API_URL}

WORKDIR /usr/src/app
COPY package.json yarn.lock ./
RUN yarn
COPY . ./

ENV NODE_ENV=production

RUN yarn build

EXPOSE 80
ENTRYPOINT [ "yarn", "start" ]