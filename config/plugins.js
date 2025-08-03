module.exports = ({ env }) => ({
  upload: {
    config: {
      // Mặc định là 1GB (1000000000 bytes). Nếu bạn thấy lỗi, hãy uncomment và đặt lại.
      sizeLimit: 256 * 1024 * 1024 // 256MB tính bằng bytes
      // Các tùy chọn khác cho provider nếu bạn đang dùng S3, Cloudinary...
      // provider: 'aws-s3',
      // providerOptions: {
      //   accessKeyId: env('AWS_ACCESS_KEY_ID'),
      //   secretAccessKey: env('AWS_ACCESS_SECRET'),
      //   region: env('AWS_REGION'),
      //   params: {
      //     Bucket: env('AWS_BUCKET_NAME'),
      //   },
      // },
    }
  }
  // ... các plugin khác của bạn
})
