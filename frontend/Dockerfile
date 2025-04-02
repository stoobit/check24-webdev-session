FROM node:20-alpine AS frontend-dev

RUN apk update && apk add --no-cache rsync

WORKDIR /cache

COPY package*.json .
RUN npm install

WORKDIR /tools
COPY --chmod=755 dev-tools/entrypoint.sh .

WORKDIR /app

EXPOSE 3000

ENTRYPOINT [ "/tools/entrypoint.sh" ]
