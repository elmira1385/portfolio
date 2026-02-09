import type { NextConfig } from "next";
import createNextPWA from "@ducanh2912/next-pwa";

const withPWA = createNextPWA({
  dest: "public",
});

const nextConfig: NextConfig = {
  reactStrictMode: true,
  reactCompiler: true,
  turbopack:{
    resolveAlias:{},
  },
};

export default withPWA(nextConfig);
