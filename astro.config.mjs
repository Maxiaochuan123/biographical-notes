// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';
import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
  site: 'https://your-resume.com',
  server: {
    host: true, // 启用所有网络接口访问
    port: 3321  // 指定端口
  },
  integrations: [
    mdx(),
    sitemap(),
    tailwind({
      // 配置 Tailwind 编译器
      applyBaseStyles: false,
    }),
    react(),
  ],
  markdown: {
    shikiConfig: {
      theme: 'github-dark',
      wrap: true
    }
  },
  vite: {
    ssr: {
      noExternal: ['react-icons']
    },
    build: {
      rollupOptions: {
        output: {
          manualChunks: {
            'chart': ['chart.js'],
          }
        }
      }
    },
    // 优化构建
    optimizeDeps: {
      exclude: ['@astrojs/image', 'sharp']
    }
  },
  output: 'static',
  build: {
    inlineStylesheets: 'auto',
    assets: 'assets',
  }
});
