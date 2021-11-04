// 在使用webpack进行打包时候，对于依赖的第三方库，比如vue，vuex等这些不会修改的依赖，我们可以让它和我们自己编写的代码分开打包，
// 这样做的好处是每次更改我本地代码的文件的时候，webpack只需要打包我项目本身的文件代码，而不会再去编译第三方库，那么第三方库在第一次打包的时候只打/包一次，
// 以后只要我们不升级第三方包的时候，那么webpack就不会对这些库去打包，这样的可以快速的提高打包的速度。
// 因此为了解决这个问题，DllPlugin 和 DllReferencePlugin插件就产生了。
// DLLPlugin 它能把第三方库代码分离开，并且每次文件更改的时候，它只会打包该项目自身的代码。所以打包速度会更快。

// DLLPlugin 这个插件是在一个额外独立的webpack设置中创建一个只有dll的bundle，也就是说我们在项目根目录下除了有webpack.config.js，还会新建一个webpack.dll.config.js文件。
// webpack.dll.config.js作用是把所有的第三方库依赖打包到一个bundle的dll文件里面，还会生成一个名为 manifest.json文件。
// 该manifest.json的作用是用来让 DllReferencePlugin 映射到相关的依赖上去的。

// DllReferencePlugin 这个插件是在webpack.config.js中使用的，该插件的作用是把刚刚在webpack.dll.config.js中打包生成的dll文件引用到需要的预编译的依赖上来。
// 什么意思呢？就是说在webpack.dll.config.js中打包后比如会生成 vendor.dll.js文件和vendor-manifest.json文件，vendor.dll.js文件包含所有的第三方库文件，
// vendor-manifest.json文件会包含所有库代码的一个索引，当在使用webpack.config.js文件打包DllReferencePlugin插件的时候，
// 会使用该DllReferencePlugin插件读取vendor-manifest.json文件，看看是否有该第三方库。vendor-manifest.json文件就是有一个第三方库的一个映射而已。

// 所以说 第一次使用 webpack.dll.config.js 文件会对第三方库打包，打包完成后就不会再打包它了，然后每次运行 webpack.config.js文件的时候，
// 都会打包项目中本身的文件代码，当需要使用第三方依赖的时候，会使用 DllReferencePlugin插件去读取第三方依赖库。所以说它的打包速度会得到一个很大的提升。
// webpack.dll.config.js
const path = require("path");
const webpack = require("webpack");
module.exports = {
  mode:"production",
  // 你想要打包的模块的数组
  entry: {
    vendor: ['react','react-dom', 'redux', 'react-redux','react-router'] 
  },
  output: {
    path: path.resolve(__dirname, '../static/js'), // 打包后文件输出的位置
    filename: '[name].dll.js',
     /*
     存放相关的dll文件的全局变量名称，比如对于jquery来说的话就是 _dll_jquery, 在前面加 _dll
     是为了防止全局变量冲突。
    */
    library: '[name]_library' 
     // 这里需要和webpack.DllPlugin中的`name: '[name]_library',`保持一致。
  },
  plugins: [
    new webpack.DllPlugin({
      path: path.resolve(__dirname, '../static','[name]-manifest.json'),
      /*
       该插件的name属性值需要和 output.library保存一致，该字段值，也就是输出的 manifest.json文件中name字段的值。
       比如在jquery.manifest文件中有 name: '_dll_jquery'
      */
      name: '[name]_library', 
      context: path.resolve(__dirname)
    })
  ]
};
// DllPlugin 插件有三个配置项参数如下：
// context(可选)： manifest文件中请求的上下文，默认为该webpack文件上下文。
// name: 公开的dll函数的名称，和 output.library保持一致。
// path: manifest.json 生成文件的位置和文件名称。