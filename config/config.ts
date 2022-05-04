import { defineConfig } from 'umi';
import routes from './routes';
export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  fastRefresh: {},
  base: '/',
  favicon: '/static/favicon.ico',
  // links: [{ rel: 'icon', href: '/static/aa.ico' }],
  // publicPath: '/static/',
  routes: routes,
  // publicPath: '/static/',
  hash: false,
  // mountElementId: 'app',
  history: {
    type: 'browser',
  },
  qiankun: {
    slave: {},
  },
});
