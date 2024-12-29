import type { NextConfig } from "next";
import stylexPlugin from "@stylexswc/nextjs-plugin";

const nextConfig: NextConfig = stylexPlugin()({
  /* config options here */
});

export default nextConfig;
