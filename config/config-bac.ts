import { defineConfig } from 'umi';
import routes from './routes';
export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  fastRefresh: {},
  base: '/',
  outputPath: '../preonline',
  favicon: '/static/favicon.ico',
  // links: [{ rel: 'icon', href: '/static/aa.ico' }],
  // publicPath: '/static/',
  routes: routes,
  publicPath: '/',
  // publicPath: process.env.UMI_ENV === 'production' ? '//j1.58cdn.com.cn/sff/jxtreact/' : '//j1.58cdn.com.cn/dist/jxt/react/test/',
  hash: false,
  // mountElementId: 'app',
  history: {
    type: 'browser',
  },
  qiankun: {
    slave: {},
  },
  dva: {
    hmr: true,
    immer: false,
  },
  // mfsu: {},
});
