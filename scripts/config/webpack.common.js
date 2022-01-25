// const path = require('path')

// module.exports = {
//   entry: {
//     app: path.resolve(__dirname, '../../src/app.js'),
//   },
//   output: {
//     filename: 'js/[name].[hash:8].js',
//     path: path.resolve(__dirname, '../../dist'),
//   },
// }

// webpack 配置是标准的 Node.js 的 CommonJS 模块，
// 它通过 require 来引入其他模块，通过 module.exports 导出模块，由 webpack 根据对象定义的属性进行解析。

// 这段代码的意思就是告诉 webpack，入口文件是根目录下的 src 下的 app.js 文件，
// 打包输出的文件位置为根目录下的 dist 中，注意到 filename 为 js/[name].[hash:8].js ，
// 那么就会在 dist 目录下再建一个 js 文件夹，其中放了命名与入口文件命名一致，并带有 hash 值的打包之后的 js 文件。

// path.resolve ：node 的官方 api，可以将路径或者路径片段解析成绝对路径。
// __dirname ：其总是指向被执行 js 文件的绝对路径，比如在我们 webpack 文件中访问了 __dirname ，那么它的值就是在电脑系统上的绝对路径
// path.resolve 把根据当前文件的执行路径下而找到的想要访问到的文件相对路径转换成了：该文件在系统中的绝对路径！

const { resolve } = require('path')
const { isDev, PROJECT_PATH } = require('../constant')

module.exports = {
  entry: {
    app: resolve(PROJECT_PATH, './src/app.js'),
  },
  output: {
    // filename: 'js/[name].[hash:8].js',
    filename: `js/[name]${isDev ? '' : '.[hash:8]'}.js`,
    path: resolve(PROJECT_PATH, './dist'),
  },
}
