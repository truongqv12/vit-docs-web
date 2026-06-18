# Hướng dẫn deploy vit-docs-web lên home server

Web tài liệu tĩnh (Astro build sẵn), phục vụ trong container bằng Caddy, **đứng sau nginx có sẵn trên host** (nginx lo domain + HTTPS).

## Yêu cầu
- Docker + Docker Compose trên home server.
- nginx đang chạy trên host (đã có sẵn).

## Chạy nhanh

```bash
# 1. Lấy mã nguồn
git clone git@github.com:truongqv12/vit-docs-web.git
cd vit-docs-web

# 2. (Tùy chọn) đổi port host — mặc định 8080
echo "HOST_PORT=8080" > .env

# 3. Build + chạy nền
docker compose up -d --build

# 4. Kiểm tra
curl -I http://127.0.0.1:8080/
```

Container phục vụ HTTP tại `http://127.0.0.1:${HOST_PORT}` (chỉ nội bộ, không TLS).

## Đổi port
Sửa `.env`:
```
HOST_PORT=9000
```
Rồi `docker compose up -d` lại (không cần build lại image).

## Trỏ nginx host vào container

Thêm server block trên nginx của host (ví dụ domain `docs.example.com`):

```nginx
server {
    listen 80;
    server_name docs.example.com;

    location / {
        proxy_pass http://127.0.0.1:8080;
        proxy_set_header Host              $host;
        proxy_set_header X-Real-IP         $remote_addr;
        proxy_set_header X-Forwarded-For   $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }
}
```

TLS/HTTPS để nginx host lo (vd Certbot/Let's Encrypt). Container không cần biết domain.

## Cập nhật nội dung (doc đi theo phiên bản)
Nội dung cố định tại thời điểm build image. Khi muốn cập nhật:

```bash
git pull
docker compose up -d --build
```

## Ghi chú
- `Caddyfile` xử lý route dạng thư mục của Astro (`/guides/cli/` → `index.html`) và trang `404.html`.
- Không cần `astro preview`; container tự phục vụ thư mục `dist/`.
