const path = require('path')
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const {CleanWebpackPlugin} = require('clean-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin') // 拷贝静态资源
// 使用HappyPack开启多进程Loader转换
const HappyPack = require('happypack')
const webpack = require("webpack");
const os = require('os')
const happyThreadPool = HappyPack.ThreadPool({ size: os.cpus().length })
const devMode = process.env.NODE_ENV !== 'production'
function resolve(relatePath) {
    return path.resolve(__dirname, relatePath)
}
const ESLintPlugin = require('eslint-webpack-plugin');
module.exports = {
    entry: {
        main: resolve('../src/main.tsx')
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js', '.jsx', '.json'],
        alias: {
            '@': resolve('../src'),
            'react-dom': devMode ? '@hot-loader/react-dom' : 'react-dom', // react-hot-loader需要
            'antd': resolve('../node_modules/antd')
        }
    },
    optimization: {
      usedExports: true,
      runtimeChunk: {
        name: 'runtime'
      },
      splitChunks: {
        chunks: "all", // 共有三个值可选：initial(初始模块)、async(按需加载模块)和all(全部模块)
        minSize: 30000, // 模块超过30k自动被抽离成公共模块
        minChunks: 1, // 模块被引用>=1次，便分割
        name: true, // 默认由模块名+hash命名，名称相同时多个模块将合并为1个，可以设置为function
        automaticNameDelimiter: '~', // 命名分隔符
        cacheGroups: {
          default: { // 模块缓存规则，设置为false，默认缓存组将禁用
            minChunks: 2, // 模块被引用>=2次，拆分至vendors公共模块
            priority: -20, // 优先级
            reuseExistingChunk: true, // 默认使用已有的模块
          },
          vendor: {
            // 过滤需要打入的模块
            // test: module => {
            //   if (module.resource) {
            //     const include = [/[\\/]node_modules[\\/]/].every(reg => {
            //       return reg.test(module.resource);
            //     });
            //     const exclude = [/[\\/]node_modules[\\/](react|redux|antd|react-dom|react-router)/].some(reg => {
            //       return reg.test(module.resource);
            //     });
            //     return include && !exclude;
            //   }
            //   return false;
            // },
            test: /[\\/]node_modules[\\/]/,
            name: 'vendor',
            // minChunks: 1,
            priority: -10,// 确定模块打入的优先级
            reuseExistingChunk: true,// 使用复用已经存在的模块
            enforce: true,
          },
        }
      },
    },
    output: {
        publicPath: '/',
        path: resolve('../dist'),
        filename: devMode ? 'js/[name].[hash:8].js' : 'js/[name].[contenthash:8].js',
        chunkFilename: devMode ? 'js/[name].[hash:8].js' : 'js/[name].[contenthash:8].js', // 未放在entry的文件，但需要打包的， 异步按需加载模块的时候
    },
    module: {
        rules: [
            {
                test: /\.(t|j)s[x]?$/,
                exclude: /node_modules/, // 排除 node_modules 文件夹
                include: [resolve('../src')],
                 //把对.js 的文件处理交给id为happyBabel 的HappyPack 的实例执行
                loader: 'happypack/loader?id=happyBabel',
            },
            // antd 与cssmodule不能混用, 所以单独写一条rules
            {
              test: /\.(css|less)$/,
              include: [resolve('../node_modules')],
              use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader']
            },
            {
              test: /\.(css|less)$/,
                include: [resolve('../src')],
                use: [
                  {
                    loader: MiniCssExtractPlugin.loader,
                  },
                  'happypack/loader?id=happyStyle',
                ]
            },
            {
                test: /\.(png|jpe?g|gif|webp)(\?.*)?$/,
                exclude: /node_modules/,
                include: [resolve('../src')],
                loader: 'url-loader',
                options: {
                  limit: 8192,
                  name: '[name].[hash:4].[ext]',
                  outputPath: '/img'
                }
              },
            {
                test: /\.(woff|eot|ttf|gif)$/,
                loader: 'url-loader',
                options: {
                  limit: 8192,
                  name: 'font/[name].[hash:4].[ext]'
                }
            },
            {
              test: /\.svg$/,
              use: ['@svgr/webpack'],
            }
        ]
    },
    plugins: [
        new ESLintPlugin({
            fix: false,
            extensions: ['tsx', 'js', 'json', 'coffee'],
            exclude: '/node_modules/'
        }),
        new MiniCssExtractPlugin({
            filename: "[name].[hash].css",
            chunkFilename: "[id].css",
        }),
        new CleanWebpackPlugin(),
        new HappyPack({
            //用id来标识 happypack处理那里类文件
            id: 'happyBabel',
            //如何处理  用法和loader 的配置一样
            loaders: [
              {
                loader: 'babel-loader',
                options: {
                  // babelrc: true,
                  cacheDirectory: true // 启用缓存
                }
              }
            ],
            //代表共享进程池，即多个 HappyPack 实例都使用同一个共享进程池中的子进程去处理任务，以防止资源占用过多。
            threadPool: happyThreadPool,
            //允许 HappyPack 输出日志
            verbose: false,
          }),
        new HappyPack({
            //用id来标识 happypack处理那里类文件
            id: 'happyStyle',
            //如何处理  用法和loader 的配置一样
            loaders: [
              {
                loader: 'css-loader',
                options: {
                  importLoaders: 2, // 之前有2个loaders
                  modules: {
                  localIdentName: devMode ? '[local]-[hash:base64:5]' : '[hase:base64:8]'
                  }, // 启用cssModules
                  sourceMap: true,
                  // localIdentName
                },
              },
              {
                loader: 'postcss-loader',
                options: {
                  sourceMap: true,//为true,在样式追溯时，显示的是编写时的样式，为false，则为编译后的样式
                }
              },
              {
                loader: 'less-loader',
                options: {
                  sourceMap: true,
                  javascriptEnabled: true
                }
              }
            ],
            //代表共享进程池，即多个 HappyPack 实例都使用同一个共享进程池中的子进程去处理任务，以防止资源占用过多。
            threadPool: happyThreadPool,
            //允许 HappyPack 输出日志
            verbose: false,
          }),
        // 告诉webpack使用了哪些第三方库代码
        new webpack.DllReferencePlugin({
            manifest: require(path.resolve(__dirname, '../static', './vendor-manifest.json'))
        }),
        new CopyWebpackPlugin(
          {
            patterns: [{
              from:path.resolve(__dirname,'../public'),
              to:path.resolve(__dirname,'../dist')
            }]
          }),
    ]
}
// DllReferencePlugin项的参数有如下：

// context: manifest文件中请求的上下文。
// manifest: 编译时的一个用于加载的JSON的manifest的绝对路径。
// context: 请求到模块id的映射(默认值为 manifest.content)
// name: dll暴露的地方的名称(默认值为manifest.name)
// scope: dll中内容的前缀。
// sourceType: dll是如何暴露的libraryTarget。
