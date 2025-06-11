FROM node:24-alpine AS base
WORKDIR /app
ENV NODE_ENV=production

FROM base AS pre-base
RUN corepack enable && corepack prepare pnpm@10.12.1 --activate
ENV HUSKY=0

FROM pre-base AS deps
COPY package.json pnpm-lock.yaml ./
RUN pnpm install --frozen-lockfile --prod=false

FROM pre-base AS builder
COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN pnpm prisma generate --no-hints && pnpm build

FROM base AS production
COPY --from=builder /app/build ./build
COPY --from=builder /app/node_modules ./node_modules
COPY package.json ./
EXPOSE 3000
CMD ["node", "build/index.js"]
