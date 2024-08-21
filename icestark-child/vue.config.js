const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    port: 3012,
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
  },
  lintOnSave: false,
  publicPath: './', // 指定资源路径
  configureWebpack: {
    output: {
      // 设置模块导出规范为 umd
      libraryTarget: 'umd',
      // 可选，设置模块在 window 上暴露的名称
      library: 'icestark-child',
    }
  }
});
