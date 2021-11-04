const path = require('path')
const webpackConfig = require('./webpack.base.js')
const WebpackMerge = require('webpack-merge')
const CopyWebpackPlugin = require('copy-webpack-plugin') // 拷贝静态资源
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin') // 压缩css
// webpack mode设置production的时候会自动压缩js代码。
// 原则上不需要引入uglifyjs-webpack-plugin进行重复工作。但是optimize-css-assets-webpack-plugin压缩css的同时会破坏原有的js压缩，所以这里我们引入uglifyjs进行压缩
// const UglifyJsPlugin = require('uglifyjs-webpack-plugin') // 压缩js
const HtmlWebpackPlugin = require("html-webpack-plugin") // html模板插件
const TerserJSPlugin = require("terser-webpack-plugin");
module.exports = WebpackMerge.merge(webpackConfig,{
  mode:'production',
  devtool:'cheap-module-source-map',
  plugins:[
    new CopyWebpackPlugin(
      {
        patterns: [{
          from:path.resolve(__dirname,'../public'),
          to:path.resolve(__dirname,'../dist')
        }]
      }),
      new HtmlWebpackPlugin ({
        template: path.resolve(__dirname,'../public/index.html'),//html模板
        filename: path.resolve(__dirname,'../dist/index.html'), // html模板的生成路径
        inject: true, // true：默认值，script标签位于html文件的 body 底部
        hash: true, // 在打包的资源插入html会加上hash
      })
  ],
  optimization:{
    minimizer:[
      new TerserJSPlugin({ // 多进程压缩
        // 设置缓存目录
        cache: path.resolve('.cache'),
        parallel: 4,// 开启多进程压缩
        // sourceMap,
        terserOptions: {
          compress: {
            // 删除所有的 `console` 语句
            drop_console: true,
          },
        },
      }),
      new OptimizeCssAssetsPlugin({})
    ],
  }
})
