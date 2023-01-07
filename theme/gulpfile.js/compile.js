/*
 * @Description: 
 * @Date: 2023-01-07 12:51:39
 * @LastEditors: cfb
 * @LastEditTime: 2023-01-07 15:04:21
 * @FilePath: /von-ui/theme/gulpfile.js/compile.js
 */
const {src, dest, series} = require('gulp')
const sass = require('gulp-sass')(require('sass'))
const cssmin = require('gulp-cssmin')
const autoprefixer = require('gulp-autoprefixer')
const {themes} = require('./util')

const compileTasks = []
themes.forEach(theme => {
  const compiler = function () {
    // separare模式 package.json中gulp build --gulpfile theme/gulpfile.js/index.js 需要指定到index.js 否则相对路径会找不到
    return src(`../${theme}/*.scss`).
      pipe(sass()).
      pipe(autoprefixer()).
      pipe(cssmin()).
      pipe(dest(`../../lib/themes/${theme}`))
  }
  compileTasks.push(compiler)
})

exports.compile = series(...compileTasks)
