import { defineConfig } from 'umi';
import routes from './routes';
export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  fastRefresh: {},
  base: '/',
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
