/*
 * @Description: 
 * @Date: 2023-01-06 17:04:16
 * @LastEditors: cfb
 * @LastEditTime: 2023-01-06 17:18:52
 * @FilePath: /von-ui/packages/Button/index.js
 */
// 导入组件，组件必须声明 name
import VonButton from './src'

// 为组件提供 install 安装方法，供按需引入
VonButton.install = function (Vue) {
  Vue.component(VonButton.name, VonButton)
}

// 导出组件
export default VonButton
