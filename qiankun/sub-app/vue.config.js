 module.exports = {
  lintOnSave: false, // 关闭eslint检测
  devServer: {
    port: 8083, // 运行端口号
    headers: {
      'Access-Control-Allow-Origin': '*' // 因为qiankun内部请求都是fetch来请求资源，所以子应用必须允许跨域,防止加载时跨域
    }
  },
  // chainWebpack: config => config.resolve.symlinks(false),
  configureWebpack: {
    output: {
      //资源打包路径
      library: 'vueApp',
      libraryTarget: 'umd'
    }
  }
}