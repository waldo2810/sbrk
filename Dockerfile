FROM node:18-alpine
RUN npm install -g corepack pnpm

WORKDIR /app

COPY package.json pnpm-lock.yaml .

RUN corepack enable pnpm && pnpm i --frozen-lockfile

COPY . .

RUN corepack enable pnpm && pnpm run build

EXPOSE 3000

CMD [ "pnpm", "run", "preview" ]
