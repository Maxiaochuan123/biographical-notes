// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';
import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
  site: 'https://your-resume.com',
  integrations: [
    mdx({
      optimizeDeps: {
        include: ['react', 'react-dom'],
      },
      remarkPlugins: [],
      rehypePlugins: [],
    }),
    sitemap(),
    tailwind({
      // 启用 JIT 模式
      jit: true,
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
  // 开启类型检查
  typescript: {
    strict: true,
    checkJs: true,
  },
  // 输出配置
  output: 'static',
  build: {
    inlineStylesheets: 'auto',
    assets: 'assets',
  }
});
