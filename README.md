### Create next app with command `create-next-app`

First, run the development server:

```bash
npm run dev
```

## **NextJS Basic**

- What is NextJS ?

  > Next.js là một open-source React front-end framework. Next.js được xây dựng dựa trên thư viện React có nghĩa là Next.js lấy những lợi thế của React và bổ sung các tính năng.

- Why use NextJS ?

  > - Được nâng cấp và hổ trợ nhiều tính năng hơn so với React.
  > - Hiệu năng tốt hơn so với ứng dụng `CSR` (Client site rendering).
  > - Mang lại khả năng SEO tốt hơn mà `CSR` không có.

- When to use NextJS ?
  > - Xây dựng `E-commerce Websites `(trang thương mại điện tử).
  > - Xây dựng `Landing Page` | `SPA` (Single-Page Application) (Trang đích).
  > - Xây dựng trang web tĩnh (tiktok...).
  > - Khi `SEO` (Search Engine Optimization) được chú trọng.

### Some features of NextJS:

### loading="lazy" Observer onError

- Image Optimization (optional | NOT recommended | `nex.config.js` allowed origins):
  > Tự động tối ưu hóa hình ảnh, cho phép thay đổi kích thước. Tối ưu hóa hình ảnh theo yêu cầu, điều này không làm giảm tốc độ tải của website.
- Zero Config:
  > Tự động thực hiện biên dịch và đóng gói tự động. Tối ưu hóa cho sản phẩm ngay từ đầu.
- TypeScript Support:
  > Tự động hỗ trợ cấu hình TypeScript và biên dịch.
- Fast Refresh:
  > Cho phép phản hồi tức thời về các chỉnh sửa được thực hiện đối với các thành phần trên dự án của bạn. Đỉnh điểm là chỉnh sửa các hiển thị nhanh trong vòng một đến hai giây mà không làm mất trạng thái hiện tại.
- File-system Routing:
  > Cung cấp một bộ định tuyến dựa trên hệ thống các tệp được xây dựng trong folder pages. Khi tệp được thêm vào thư mục pages, nó sẽ được tạo dựng sẳn dưới dạng một tuyến.
- API Routes:
  > Có thể tạo điểm cuối API trong ứng dụng Nextjs. Các tuyến API hoạt động dưới dạng `/pages/api/` trong thư mục và được hướng tới api điểm cuối thư mục.
- Hybrid `SSG`(Static site generator) và `SSR`(Severside rendering):
  > Sử dụng cơ chế `Pre-render` để `buil-time` và `request time` ở trong dự án SSR.
   <!-- - Code-splitting and Bundling: -->
   <!-- - Built-In CSS Support: -->
   <!-- - Incremental Static Regeneration: -->
   <!-- - Internationalization: -->
   <!-- - Next.JS Analytics: -->

<!--
file `pages/404.js` truy cập khi NextJS không tìm thấy route muốn truy cập

route `/about` => `pages/about.js`

route `/user` => `pages/user/index.js`

      `/user/id` => `pages/user/[id].js` (dynamic route)

      // file-based routing

function : getStaticProps, 

// _app.js | _document.js

// ssr (server-side rendering)

// ssg (static site generation)

// api
 -->
