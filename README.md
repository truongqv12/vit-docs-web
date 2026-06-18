# vit-docs-web

Website tài liệu (docs) cho **Vit Engine** — bản dựng tĩnh bằng Astro, **chỉ tiếng Việt**, tự host trên home server qua Docker.

> Nội dung đi theo phiên bản: docs được build cố định tại thời điểm đóng image, không tự cập nhật online. Muốn cập nhật thì `git pull` + build lại.

## Công nghệ
- [Astro](https://astro.build) v6 — `output: static` (HTML tĩnh, không cần Node runtime để phục vụ).
- Tailwind CSS v4, Alpine.js, font nhúng sẵn (`@fontsource`) → chạy offline.
- Phục vụ tĩnh bằng Caddy (alpine) trong container; đứng sau nginx của host.

## Phát triển cục bộ
```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # sinh thư mục dist/
npm run preview  # xem thử bản build
```

## Triển khai (Docker)
Xem chi tiết: [huong-dan-deploy-home-server.md](./huong-dan-deploy-home-server.md).

```bash
# Đổi port host nếu cần (mặc định 8080)
echo "HOST_PORT=8080" > .env
docker compose up -d --build
```
Container phục vụ HTTP nội bộ; nginx trên host trỏ domain + lo HTTPS.

## Cấu trúc
```
src/
├── pages/guides/      # các trang hướng dẫn (chỉ Guides)
├── components/guides/  # component cho từng guide
├── data/guides/        # dữ liệu catalog skill/workflow
├── i18n/vi/            # chuỗi tiếng Việt
└── layouts/            # MainLayout, GuidesLayout
```

## Cập nhật nội dung theo Vit Engine
Catalog skill/agent bám theo repo `vit-engine`. Khi engine ra phiên bản mới, dùng quy trình audit để đồng bộ lại docs (xem kế hoạch `plans/260618-1110-vit-docs-website/phase-07-*`).

## Giấy phép
MIT — xem [LICENSE](./LICENSE).
