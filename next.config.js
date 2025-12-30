const withMDX = require("@next/mdx")();

/** @type {import('next').NextConfig} */
const nextConfig = {
  // 1. 强制开启静态导出模式，这会生成 Cloudflare Pages 所需的 "out" 文件夹
  output: 'export', 

  pageExtensions: ["ts", "tsx", "js", "jsx", "md", "mdx"],
  experimental: {
    mdxRs: true,
  },

  images: {
    // 2. 必须关闭图片优化，因为静态导出不支持 Next.js 默认的图片处理服务
    unoptimized: true, 
    minimumCacheTTL: 2678400,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "pbs.twimg.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "abs.twimg.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "m.media-amazon.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "images-na.ssl-images-amazon.com",
        port: "",
        pathname: "/**",
        search: "",
      },
    ],
  },

  // 3. 注意：静态导出 (output: 'export') 模式下不支持 redirects() 函数。
  // 如果你需要重定向，建议在 Cloudflare 控制台或通过 _redirects 文件配置。
  /* redirects() {
    return [
      {
        source: "/essays/:nested*",
        destination: "/",
        permanent: true,
      },
      {
        source: "/slackin/:nested*",
        destination: "https://github.com/rauchg/slackin",
        permanent: true,
      },
    ];
  },
  */
};

module.exports = withMDX(nextConfig);
