import nextMDX from "@next/mdx";

const withMDX = nextMDX({
  extension: /\.(md|mdx)$/,
});

const nextConfig = withMDX({
  pageExtensions: ["ts", "tsx", "md", "mdx"],
});

export default nextConfig;
