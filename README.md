# Mebipha E-commerce Website

Trang web thương mại điện tử chuyên về thuốc thú y, thủy sản và sản phẩm chăn nuôi.

## Tính năng

- ✅ Trang chủ với sản phẩm nổi bật
- ✅ Danh sách sản phẩm với bộ lọc thông minh
- ✅ Giỏ hàng và quản lý đơn hàng
- ✅ Tra cứu bệnh theo từng loại vật nuôi
- ✅ Trang tin tức
- ✅ Liên hệ và hỗ trợ

## Công nghệ

- HTML5
- CSS3 (Vanilla CSS)
- JavaScript (ES6+)
- LocalStorage cho dữ liệu client-side

## Chạy với Docker

### Yêu cầu
- Docker Desktop đã cài đặt

### Cách 1: Sử dụng Docker Compose (Khuyến nghị)

```bash
# Build và chạy container
docker-compose up -d

# Truy cập website
# Mở trình duyệt: http://localhost:8080

# Dừng container
docker-compose down
```

### Cách 2: Sử dụng Docker trực tiếp

```bash
# Build Docker image
docker build -t mebipha-ecommerce .

# Chạy container
docker run -d -p 8080:80 --name mebipha mebipha-ecommerce

# Truy cập website
# Mở trình duyệt: http://localhost:8080

# Dừng container
docker stop mebipha

# Xóa container
docker rm mebipha
```

## Chạy trực tiếp (không cần Docker)

Mở file `index.html` bằng trình duyệt hoặc sử dụng Live Server extension trong VS Code.

## Cấu trúc thư mục

```
mebipha-ecommerce/
├── index.html              # Trang chủ
├── products.html           # Danh sách sản phẩm
├── cart.html              # Giỏ hàng
├── contact.html           # Liên hệ
├── diseases.html          # Tra cứu bệnh
├── styles.css             # CSS chính
├── components.css         # CSS components
├── layout.css             # CSS layout
├── utils.js               # Utility functions
├── main.js                # JavaScript chính
├── data/
│   ├── products.js        # Dữ liệu sản phẩm
│   ├── news.js           # Dữ liệu tin tức
│   └── diseases.js       # Dữ liệu bệnh
└── images/                # Hình ảnh
```

## Ghi chú

- Đây là prototype với dữ liệu mẫu (mock data)
- Tất cả dữ liệu được lưu trong LocalStorage
- Không có backend thực tế
- Các tính năng thanh toán và đăng nhập là UI mockup

## License

Copyright © 2024 Mebipha. All rights reserved.
