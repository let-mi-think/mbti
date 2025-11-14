/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // 优化构建性能
  swcMinify: true,
  // 增加构建超时时间（如果 Vercel 支持）
  typescript: {
    // 在构建时忽略类型错误（不推荐，但可以临时使用）
    // ignoreBuildErrors: false,
  },
  // 优化输出
  compress: true,
}

module.exports = nextConfig
