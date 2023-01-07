/*
 * @Description: 
 * @Date: 2023-01-07 12:51:39
 * @LastEditors: cfb
 * @LastEditTime: 2023-01-07 14:53:28
 * @FilePath: /von-ui/theme/gulpfile222.js
 */
const fs = require('fs')
const path = require('path')
const {src, dest, series} = require('gulp')
const sass = require('gulp-sass')(require('sass'))
const cssmin = require('gulp-cssmin')
const autoprefixer = require('gulp-autoprefixer')

function isDirectory(path) {
  return fs.statSync(path).isDirectory()
}

const basePath = path.resolve(__dirname)
const result = fs.readdirSync(path.resolve(basePath))
const themes = []
result.forEach(item => {
  if (isDirectory(path.resolve(basePath, item)) && item !== 'gulpfile.js') {
    themes.push(item)
  }
})

console.log('主题列表: ', themes)
const compileTasks = []
themes.forEach(theme => {
  const compiler = function () {
    return src(`${theme}/*.scss`).
      pipe(sass()).
      pipe(autoprefixer()).
      pipe(cssmin()).
      pipe(dest(`../lib/themes/${theme}`))
  }
  compileTasks.push(compiler)
})

exports.build = series(...compileTasks)
