import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import fs from 'fs';
import {defineConfig} from 'vite';

export default defineConfig(() => {
  return {
    plugins: [
      {
        name: 'serve-seo-files',
        configureServer(server) {
          server.middlewares.use((req, res, next) => {
            if (req.url === '/robots.txt' || req.url?.startsWith('/robots.txt?')) {
              const file = path.resolve(__dirname, 'public/robots.txt');
              if (fs.existsSync(file)) {
                res.setHeader('Content-Type', 'text/plain; charset=utf-8');
                return res.end(fs.readFileSync(file));
              }
            }
            if (req.url === '/sitemap.xml' || req.url?.startsWith('/sitemap.xml?')) {
              const file = path.resolve(__dirname, 'public/sitemap.xml');
              if (fs.existsSync(file)) {
                res.setHeader('Content-Type', 'application/xml; charset=utf-8');
                return res.end(fs.readFileSync(file));
              }
            }
            next();
          });
        },
      },
      react(),
      tailwindcss(),
    ],
    resolve: {
      alias: [
        { find: '@/components', replacement: path.resolve(__dirname, 'src/components') },
        { find: '@', replacement: path.resolve(__dirname, 'src') },
        { find: '~', replacement: path.resolve(__dirname, '.') },
      ],
    },
    server: {
      // HMR is disabled in AI Studio via DISABLE_HMR env var.
      // Do not modifyâfile watching is disabled to prevent flickering during agent edits.
      hmr: process.env.DISABLE_HMR !== 'true',
      // Disable file watching when DISABLE_HMR is true to save CPU during agent edits.
      watch: process.env.DISABLE_HMR === 'true' ? null : {},
    },
  };
});
