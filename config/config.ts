import { defineConfig } from 'umi';
const path = require('path');
import routes from './routes';
export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  // urlLoaderExcludes: [/.lock$/],
  // urlLoaderExcludes:[/.svg$/],
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
  chainWebpack: function (config, { webpack }) {
    config.resolve.extensions.add('.lock');
    // config.module.rule('lock').include.add('../').end();
    // config.module.rule('compile').test(/\.lock$/).use('babel').loader('../src/loader/yalc.js')
    config.module
      .rule('compile')
      .test(/\.lock$/)
      .include.add(path.join(__dirname, '../'))
      .end()
      .use('babel')
      .loader(require.resolve('../src/loader/yalc.js'));
  },
});
