/*
 * @Description:
 * @Date: 2023-01-06 17:04:16
 * @LastEditors: cfb
 * @LastEditTime: 2023-07-26 20:23:45
 * @FilePath: /von-ui/vue.config.js
 */
const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,
  pages: {
    index: {
      entry: "examples/main.js",
      template: "public/index.html",
      filename: "index.html",
    },
  },
  chainWebpack: (config) => {
    config.module
      .rule("js")
      .include.add("/packages")
      .end()
      .use("babel")
      .loader("babel-loader");
  },
});
