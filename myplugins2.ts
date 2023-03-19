const path2 = require('path');
class AddFileWatchPlugin3 {
  // eslint-disable-next-line @typescript-eslint/explicit-member-accessibility
  apply(compiler) {
    compiler.hooks.emit.tapAsync('AddFileWatchPlugin3', (compilation, cb) => {
      // 可遍历出所有的资源名
      // for (var filename in compilation.assets) {
      //     console.log('name==', filename)
      // }
      compilation.chunks.forEach((chunk) => {
        chunk.files.forEach((filename) => {
          if (/\.js$/.test(filename) && !filename.includes('hot-update')) {
            // compilation.assets 存放当前所有即将输出的资源
            // 调用一个输出资源的 source() 方法能获取到输出资源的内容
            let source = compilation.assets[filename].source();
            const strUrlIndex = filename.lastIndexOf('/');
            const strUrl = filename.substring(strUrlIndex + 1);
            console.log(
              filename,
              strUrl,
              compilation.assets[filename].existsAt,
              path2.basename(filename),
              '>>>>>>>>>',
            );
            // source = '/*这是我通过webpack plugin 插八的一行代码*/\n' + source
            source = source.replace(
              `//# sourceMappingURL=http://localhost:8001/${strUrl}.map`,
              `//# sourceMappingURL=${strUrl}.map`,
            );

            compilation.assets[filename] = {
              source: function () {
                return source;
              },
              size: function () {
                return source.length;
              },
            };
          }
        });
      });
      cb();
    });
    compiler.hooks.done.tap('AddFileWatchPlugin3', () => {
      console.log('webpack 构建完毕！');
    });
  }
}

module.exports = AddFileWatchPlugin3;
