FROM node:23-alpine AS base
WORKDIR /app
RUN corepack enable && corepack prepare pnpm@latest --activate
ENV NODE_ENV=production \
	HUSKY=0

COPY package.json pnpm-lock.yaml ./
RUN pnpm install --frozen-lockfile
COPY . .
RUN pnpm prisma generate --no-hints
RUN pnpm build
EXPOSE 3000
CMD ["node", "build/index.js"]
