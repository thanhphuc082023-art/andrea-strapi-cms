module.exports = [
  "strapi::errors",
  {
    name: "strapi::security",
    config: {
      contentSecurityPolicy: {
        useDefaults: true,
        directives: {
          "connect-src": ["'self'", "https:"],
          "img-src": ["'self'", "data:", "blob:", "res.cloudinary.com"],
          "media-src": ["'self'", "data:", "blob:"]
        }
      }
    }
  },
  {
    name: "strapi::cors",
    config: {
      origin: ["http://localhost:3000", "http://localhost:3001", "http://localhost:3002", "https://andrea-landing.vercel.app"],
      methods: ["GET", "POST", "PUT", "DELETE", "HEAD", "OPTIONS"],
      headers: ["Content-Type", "Authorization", "Origin", "Accept"]
    }
  },
  "strapi::poweredBy",
  "strapi::logger",
  "strapi::query",
  {
    name: "strapi::body",
    config: {
      formLimit: "256mb", // Tăng giới hạn cho dữ liệu form (ví dụ: lên 256MB)
      jsonLimit: "256mb", // Tăng giới hạn cho dữ liệu JSON
      textLimit: "256mb", // Tăng giới hạn cho dữ liệu văn bản
      multipart: true, // Đảm bảo đã bật multipart cho việc upload file
      formidable: {
        maxFileSize: 256 * 1024 * 1024 // Tăng giới hạn kích thước file tối đa (256MB tính bằng bytes)
      }
    }
  },
  "strapi::session",
  "strapi::favicon",
  "strapi::public"
]
