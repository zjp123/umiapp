/**
 webpack 插件由以下组成：

一个 JavaScript 命名函数。
在插件函数的 prototype 上定义一个 apply 方法。
指定一个绑定到 webpack 自身的事件钩子。
处理 webpack 内部实例的特定数据。
功能完成后调用 webpack 提供的回调。
*/
const path = require('path');
function AddFileWatchPlugin() {}

AddFileWatchPlugin.prototype.apply = function (compiler) {
  // compiler.hooks.beforeCompile.tapAsync('AddFileWatchPlugin', (compilation, callback) => {
  compiler.hooks.afterCompile.tap(
    'AddFileWatchPlugin',
    (compilation, callback) => {
      // compiler.hooks.emit.tap('AddFileWatchPlugin', (compilation, callback) => {
      //   console.log(
      //     '新的插件>>>>>>>>',
      //     Object.prototype.toString.call(compilation.fileDependencies),
      //   );
      // 把 HTML 文件添加到文件依赖列表，好让 Webpack 去监听 HTML 模块文件，在 HTML 模版文件发生变化时重新启动一次编译
      //   compilation.fileDependencies.add(require.resolve('../add-file.lock'));
      // compilation.fileDependencies.add('../add-file.lock')
      // compilation.fileDependencies && compilation.fileDependencies.push('../add-file.lock');
      // console.log(compilation.fileDependencies, 'fileDependenciesfileDependencies')
      // callback()

      const assets = compilation.assets;
      const files: any = [];
      Object.keys(assets).forEach((fileName) => {
        // 我们只care map文件
        if (/\.map$/.test(fileName)) {
          console.log(fileName, 'fileNamefileName');
          // 拧出文件完整路径、文件名、文件内容
          files.push({
            path: assets[fileName].existsAt,
            name: path.basename(fileName),
            // 不用到的时候不要取出来
            get content() {
              return assets[fileName].source();
            },
          });
        }
      });
    },
  );
};

// AddFileWatchPlugin.prototype.apply = function(compiler) {
//   compiler.plugin('after-compile', (compilation, callback) => {
//     console.log('新的插件>>>>>>>>', Object.prototype.toString.call(compilation.fileDependencies))

//     // 把 HTML 文件添加到文件依赖列表，好让 Webpack 去监听 HTML 模块文件，在 HTML 模版文件发生变化时重新启动一次编译
//       compilation.fileDependencies.add('../add-file.lock');
//       callback();
//   })
// }

module.exports = AddFileWatchPlugin;
