# Hướng dẫn chỉnh sửa nội dung Rainy Band

Toàn bộ nội dung hiển thị trên site (trừ text tĩnh trong component) đều nằm trong các file tại thư mục này. Sửa ở đây, không cần đụng code khác, trang web sẽ tự cập nhật.

## Thêm/sửa Vocalist
File: `vocalists.ts`
- Thêm 1 vocalist mới: copy 1 object trong mảng, đổi toàn bộ giá trị, đảm bảo `slug` là duy nhất (không trùng vocalist khác), dùng chữ thường không dấu, cách nhau bằng dấu gạch ngang (VD: "thu-huong").
- `posterImageUrl`, `avatarImageUrl`: dán link ảnh thật (khuyến khích upload lên Cloudinary hoặc dùng ảnh trong thư mục `src/assets/` và import trực tiếp — hỏi lại nếu cần hướng dẫn chi tiết).
- `videos`: mỗi video cần `thumbnailUrl` (ảnh đại diện) và `videoUrl` (link YouTube/Cloudinary thật). Để trống `videoUrl` nếu chưa có video.

## Thêm/sửa Nhạc công
File: `musicians.ts`
- Quy tắc tương tự Vocalist. Có thể thêm/sửa video demo trong mảng `videos`.

## Thêm/sửa Dịch vụ
File: `services.ts`
- Quy tắc tương tự. Thay đổi nội dung các field để cập nhật thông tin dịch vụ trên toàn site.

## Thêm/sửa Đội ngũ nòng cốt
File: `coreTeam.ts`
- Quy tắc tương tự, lưu ý field `phone`, `email` là thông tin liên hệ thật của từng người, cần cẩn thận khi cập nhật để khách hàng có thể liên lạc.

## Lưu ý chung
- **KHÔNG** xóa hoặc đổi tên field (key) trong object, chỉ đổi giá trị của field.
- Sau khi sửa file, lưu lại — trang dev sẽ tự reload.
- Nếu thêm field mới hoặc đổi cấu trúc, cần nhờ dev/agent cập nhật lại component tương ứng để tránh lỗi hiển thị.

## Cấu hình Booking Form
Dữ liệu gửi từ Booking Form được chuyển qua một **Astro API Route** chạy trên server **Cloudflare Workers** (tại `src/pages/api/booking.ts`) trước khi gửi lên Google Sheets Web App. Điều này cung cấp 2 lớp bảo vệ:
1. **Validate server-side:** Kiểm tra dữ liệu (regex SĐT, email hợp lệ, ngày hợp lệ...) ở phía server.
2. **Honeypot chống spam:** Một field ẩn được thêm vào form để gài bẫy bot, tự động chặn các request spam.

### Hướng dẫn cấu hình URL đích (Google Sheets)
Vì lý do bảo mật, URL của Google Apps Script Web App **không lộ** ở client, mà được cấu hình dưới dạng biến môi trường của server Cloudflare.

**Khởi chạy ở Local Dev:**
- Tạo file `.dev.vars` ở thư mục gốc của project (đã được đưa vào `.gitignore`).
- Thêm biến `GOOGLE_SHEETS_WEBHOOK_URL=DÁN_URL_CỦA_BẠN_VÀO_ĐÂY`.
- Khi dùng Cloudflare adapter, lệnh `npm run dev` sẽ tự động đọc file này để test API ở máy local mà không cần chạy `wrangler`.

**Khi deploy lên Cloudflare Pages / Workers:**
- Truy cập vào Dashboard của project trên Cloudflare.
- Mở mục **Settings > Variables and secrets** của ứng dụng.
- Thêm biến `GOOGLE_SHEETS_WEBHOOK_URL` và dán URL thật vào (có thể chọn lưu an toàn encrypted).
- Lưu lại và redeploy để server nhận biến mới.

**Test tại Local:**
- Khi chạy wrangler pages dev -- npm run dev, hệ thống dựng lên 2 server:
- - Astro (4321): Chỉ chạy code frontend, không biết thư mục functions/ là gì.
- - Wrangler (8788): Đứng bọc bên ngoài Astro. Khi có request tới /api/booking, nó sẽ bắt lại và chạy file booking.ts. Nếu request trang web bình thường, nó sẽ tự đẩy về Astro (4321) để lấy giao diện.
- Cách khắc phục: Bạn chỉ cần đổi địa chỉ trên trình duyệt từ http://localhost:4321 sang: 👉 http://127.0.0.1:8788 (hoặc http://localhost:8788)