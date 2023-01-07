const fs = require('fs')
const path = require('path')

const components = require('../components.json')
const basePath = path.resolve(__dirname, '../theme')

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

const result = fs.readdirSync(path.resolve(basePath))
const themes = ['dark', 'default']
// result.forEach(item => {
//   console.log(item)
//   if (isDirectory(path.resolve(basePath, item)) && item !== 'gulpfile.js') {
//     themes.push(item)
//   }
// })

themes.forEach(theme => {
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
  fs.writeFileSync(path.resolve(basePath, theme, 'index.scss'), content)
});
