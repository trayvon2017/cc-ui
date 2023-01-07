/*
 * @Description: 
 * @Date: 2023-01-07 14:10:11
 * @LastEditors: cfb
 * @LastEditTime: 2023-01-07 14:31:52
 * @FilePath: /von-ui/theme/gulpfile.js/generate.js
 */
const fs = require('fs')
const path = require('path')
const {series} = require('gulp')
const {fileExists, themes, basePath} = require('./util')

const components = require('../../components.json')
const generateTasks = []
themes.forEach(theme => {
  const generator = function (cb) {
    let content = '@import "./base.scss";\n'
    Object.keys(components).forEach(component => {
      content += `@import "./${component}.scss";\n`
      const fileName = component + '.scss'
      const filePath = path.resolve(basePath, theme, fileName)
      if (!fileExists(filePath)) {
        fs.writeFileSync(filePath, '', 'utf8')
        console.log(`${theme}: 创建遗漏的样式文件 ${fileName}`)
      }
    })
    // fs.writeFileSync(path.resolve(basePath, theme, 'index.scss'), content)
    fs.writeFile(path.resolve(basePath, theme, 'index.scss'), content, cb)
  }
  generateTasks.push(generator)
});

exports.generate = series(...generateTasks)
