/*
 * @Desc:
 * @Author: wringY
 * @Date: 2020-11-26 19:49:33
 * @LastEditTime: 2021-07-03 00:37:29
 * @FilePath: \my-app-ts\build\webpack.dev.js
 */
// 开发环境主要实现的是热更新,不要压缩代码，完整的sourceMap
const webpackMerge = require("webpack-merge");
const Webpack = require('webpack')
const path = require('path')
const baseWebpackConfig = require("./webpack.base.js")
const HtmlWebpackPlugin = require("html-webpack-plugin") // html模板插件
function resolve(relatePath) {
  return path.resolve(__dirname, relatePath)
}
module.exports = webpackMerge.merge(baseWebpackConfig,{
    // 指定构建环境
    mode:"development",
    devtool:'cheap-module-eval-source-map',
    // 开发环境本地启动的服务配置
    devServer: {
        port: 8888,
        hot: true,
        open: true,
        overlay: true,
        historyApiFallback: true,
        contentBase: path.join(__dirname, '../dist'),
        proxy: {
            '/api': {
                target: 'http://localhost:8090/',
                changeOrigin: true, // target是域名的话需要这个
                secure: false, // 设置支持https协议的代理
            }
        }
    },
    plugins:[
        // 定义环境变量为开发环境
        new Webpack.DefinePlugin({
        'process.env.NODE_ENV': JSON.stringify('development'),
        IS_DEVELOPMETN: true,
      }),
        new Webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({
            template: resolve('../public/index.html'),//html模板
            inject: true, // true：默认值，script标签位于html文件的 body 底部
        })
    ]
});
