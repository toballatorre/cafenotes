import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  experimental: {
    // Configuración para desarrollo en Docker
    webpackBuildWorker: true,
  },
  // Configuración para aceptar conexiones desde cualquier IP en desarrollo
  ...(process.env.NODE_ENV === 'development' && {
    async rewrites() {
      return []
    },
  }),
};

export default nextConfig;
