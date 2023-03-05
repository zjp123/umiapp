import { defineConfig } from 'umi';
// import defaultSettings from './defaultSettings'
import routes from './routes';
// import path from 'path'
// import fs from 'fs'

const isEnvProduction = process.env.UMI_ENV === 'production';
const isDevCom = Boolean(process.env.DEV_COM);
// 获取组件库相对于项目的文件路径要确保组件库目录和项目库目录在同一文件夹下
// const jxtComPath = path.join(path.join(__dirname, '../../../jxt-components-test'))

// if (isDevCom) {
//     // 组件库开发模式下
//     if (!fs.existsSync(jxtComPath)) {
//         // 如果返回true，说明找到组件库，否则路径不对
//         throw new Error('没有找到组件库文件夹，需要确保组件库目录 和 项目库目录 在同一文件夹下')
//     }
// }

const assetDir = 'static';
// const assetDir = './'

const config = defineConfig({
  define: {
    'process.env.API_ENV': process.env.API_ENV,
  },
  base: '/',
  // outputPath: './preonline',
  history: {
    type: 'browser',
  },
  nodeModulesTransform: {
    type: 'none',
    exclude: [],
  },
  fastRefresh: {},
  // publicPath: '/static/',
  // publicPath: process.env.UMI_ENV === 'production' ? '//j1.58cdn.com.cn/sff/jxtreact/' : process.env.UMI_ENV === 'test' ? '//j1.58cdn.com.cn/dist/jxt/react/test/' : '/',
  hash: true,
  antd: {},
  dva: {
    hmr: true,
    immer: false,
  },
  qiankun: { slave: {} },
  chainWebpack(config) {
    // if (isDevCom) {
    //     // 开发模式下并且 需要调试组件库时
    //     config.resolve.alias.set('jxt-components', `${jxtComPath}/index.js`)
    //     config.module.rule('js').include.add(jxtComPath)
    // }
    // 修改js，js chunk文件输出目录
    config.output
      .filename(`${assetDir}/js/[id].[hash:8].js`)
      .chunkFilename(`${assetDir}/js/[id].[contenthash:8].chunk.js`)
      // .sourceMapFilename('[id].[contenthash:8].map.js')
      .library('react-app')
      .libraryTarget('umd')
      .jsonpFunction('webpackJsonp_react-app');
    // .devtoolModuleFilenameTemplate('../[resource-path]')

    // 修改css输出目录
    config.plugin('extract-css').tap(() => [
      {
        filename: `${assetDir}/css/[id].[contenthash:8].css`,
        chunkFilename: `${assetDir}/css/[id].[contenthash:8].chunk.css`,
        ignoreOrder: true,
      },
    ]);
    config.merge({
      optimization: {
        splitChunks: {
          chunks: 'all',
          minSize: 30000,
          minChunks: 3,
          automaticNameDelimiter: '.',
          cacheGroups: {
            vendor: {
              name: 'vendors',
              test({ resource }) {
                return /[\\/]node_modules[\\/]/.test(resource);
              },
              priority: 10,
            },
          },
        },
      },
    });
    // config.merge({ devtool: 'source-map' })
    // config.devtool('eval-source-map')
  },
  devtool: 'cheap-module-source-map',
  // devtool: 'eval-nosources-cheap-source-map',
  // 生产环境去除console日志打印
  terserOptions: {
    compress: {
      drop_console: isEnvProduction,
    },
  },
  locale: {
    default: 'zh-CN',
    antd: true,
    baseNavigator: false,
  },
  targets: {
    chrome: 49,
    firefox: 64,
    ie: 10,
  },
  devServer: {
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
  },

  routes,
  // theme: {
  //     'primary-color': defaultSettings.primaryColor,
  //     '@input-placeholder-color': '#999999',
  //     // '@border-color-base': '#BFBFBF',
  //     '@table-header-bg': '#F5F5F5', // 头部首行
  // },
  // title: defaultSettings.title,
  ignoreMomentLocale: true,
  manifest: false,
});

export default config;
