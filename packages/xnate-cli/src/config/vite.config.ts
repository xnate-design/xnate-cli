import { SITE_OUTPUT_PATH } from './../shared/constant';
import { get } from 'lodash';
import react from '@vitejs/plugin-react';
import md from '@xnate-plugin/vite-react-md';
import { createHtmlPlugin } from 'vite-plugin-html';

import { InlineConfig, PluginOption } from 'vite';
import {
  SITE_DIR,
  VITE_RESOLVE_EXTENSIONS,
  SITE_CONFIG,
  SITE_PC_ROUTES,
  SITE_MOBILE_ROUTES,
  SITE_PUBLIC_PATH,
} from '../shared/constant';
import { resolve } from 'path';

export const getDevConfig = (xnateConfig: Record<string, any>): InlineConfig => {
  const defaultLanguage = get(xnateConfig, 'defaultLanguage');
  const host = get(xnateConfig, 'host');

  return {
    root: SITE_DIR,
    resolve: {
      extensions: VITE_RESOLVE_EXTENSIONS,
      alias: {
        '@config': SITE_CONFIG,
        '@pc-routes': SITE_PC_ROUTES,
        '@mobile-routes': SITE_MOBILE_ROUTES,
      },
    },
    server: {
      port: get(xnateConfig, 'port'),
      host: host === 'localhost' ? '0.0.0.0' : host,
    },
    publicDir: SITE_PUBLIC_PATH,
    plugins: [
      react(),
      md({}),
      createHtmlPlugin({
        inject: {
          data: {
            pcTitle: get(xnateConfig, `pc.title['${defaultLanguage}]`),
            mobileTitle: get(xnateConfig, `mobile.title['${defaultLanguage}']`),
            logo: get(xnateConfig, `logo`),
          },
        },
      }),
    ],
    build: {
      rollupOptions: {
        input: {
          main: resolve(SITE_DIR, 'index.html'),
          mobile: resolve(SITE_DIR, 'mobile.html'),
        },
      },
    },
  };
};


export const getBuildConfig = (xnateConfig: Record<string, any>): InlineConfig => {
  const devConfig = getDevConfig(xnateConfig);

  return {
    ...devConfig,
    base: '/',
    build: {
      outDir: SITE_OUTPUT_PATH,
      reportCompressedSize: false,
      emptyOutDir: true,
      cssTarget: 'chrome61',
      rollupOptions: {
        input: {
          main: resolve(SITE_DIR, 'index.html'),
          mobile: resolve(SITE_DIR, 'mobile.html'),
        }
      }
    }
  }
}