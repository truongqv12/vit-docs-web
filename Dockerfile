# Dockerfile đa tầng: build site Astro tĩnh rồi phục vụ bằng Caddy alpine.
# Tầng build dùng Node, tầng runtime chỉ giữ Caddy + thư mục dist (image nhỏ).

# --- Tầng build: biên dịch Astro ra HTML tĩnh ---
FROM node:22-alpine AS build
WORKDIR /app

# Cài deps trước để tận dụng cache layer khi mã nguồn đổi nhưng deps không đổi
COPY package.json package-lock.json ./
RUN npm ci

# Sao chép mã nguồn và build (output: static → /app/dist)
COPY . .
# URL công khai để bake vào canonical/sitemap/robots khi build. Đặt qua build-arg:
#   docker compose build --build-arg PUBLIC_SITE_URL=https://docs.example.com
ARG PUBLIC_SITE_URL=http://localhost
ENV PUBLIC_SITE_URL=$PUBLIC_SITE_URL
RUN npm run build

# --- Tầng runtime: Caddy phục vụ tĩnh, chỉ HTTP nội bộ (TLS do nginx host lo) ---
FROM caddy:2-alpine
COPY --from=build /app/dist /srv
COPY Caddyfile /etc/caddy/Caddyfile
EXPOSE 80
