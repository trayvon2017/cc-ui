/*
 * @Description: 
 * @Date: 2023-01-07 14:10:34
 * @LastEditors: cfb
 * @LastEditTime: 2023-01-07 14:41:45
 * @FilePath: /von-ui/theme/gulpfile.js/index.js
 */
const { series } = require('gulp')
const {generate} = require('./generate')
const {compile} = require('./compile')

exports.build = series(generate, compile)