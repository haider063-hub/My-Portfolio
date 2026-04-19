import type { NextConfig } from "next";
import path from "node:path";

const nextConfig: NextConfig = {
  transpilePackages: ["three", "@react-three/fiber", "@react-three/drei"],
  images: {
    // Allow `quality={92}` on next/image (default list is only [75] in recent Next.js).
    qualities: [75, 92],
  },
  // Absolute root silences both the lockfile workspace warning and “turbopack.root should be absolute”
  turbopack: {
    root: path.resolve(process.cwd()),
  },
};

export default nextConfig;
