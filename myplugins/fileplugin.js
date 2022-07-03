/**
 webpack 插件由以下组成：

一个 JavaScript 命名函数。
在插件函数的 prototype 上定义一个 apply 方法。
指定一个绑定到 webpack 自身的事件钩子。
处理 webpack 内部实例的特定数据。
功能完成后调用 webpack 提供的回调。
*/

function FileListPlugin() {}

FileListPlugin.prototype.apply = function (compiler) {
  compiler.plugin('emit', function (compilation, callback) {
    // 在生成文件中，创建一个头部字符串：
    console.log(888888888);
    let filelist = 'In this build:\n\n';

    // 遍历所有编译过的资源文件，
    // 对于每个文件名称，都添加一行内容。
    for (let filename in compilation.assets) {
      filelist += '- ' + filename + '\n';
    }

    // 将这个列表作为一个新的文件资源，插入到 webpack 构建中：
    compilation.assets['filelist.md'] = {
      source: function () {
        return filelist;
      },
      size: function () {
        return filelist.length;
      },
    };

    callback();
  });
};

module.exports = FileListPlugin;
