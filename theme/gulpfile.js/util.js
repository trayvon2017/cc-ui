/*
 * @Description: 
 * @Date: 2023-01-07 14:11:26
 * @LastEditors: cfb
 * @LastEditTime: 2023-01-07 14:40:40
 * @FilePath: /von-ui/theme/gulpfile.js/util.js
 */
const fs = require('fs')
const path = require('path')

function isDirectory(path) {
  return fs.statSync(path).isDirectory()
}

function fileExists(filepath) {
  try {
    return fs.statSync(filepath).isFile()
  } catch (err) {
    return false
  }
}

const basePath = path.resolve(__dirname, '../')
const result = fs.readdirSync(path.resolve(basePath))
const themes = []
result.forEach(item => {
  if (isDirectory(path.resolve(basePath, item)) && item !== 'gulpfile.js') {
    themes.push(item)
  }
})
console.log('主题列表: ', themes)
module.exports = {
  themes,
  fileExists,
  basePath
}