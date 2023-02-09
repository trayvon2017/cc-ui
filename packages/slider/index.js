/*
 * @Description: 
 * @Date: 2023-02-09 10:23:51
 * @LastEditors: cfb
 * @LastEditTime: 2023-02-09 10:27:01
 * @FilePath: /von-ui/packages/slider/index.js
 */
// 导入组件，组件必须声明 name
import VonSlider from './src/slider.vue'

// 为组件提供 install 安装方法，供按需引入
VonSlider.install = function (Vue) {
  Vue.component(VonSlider.name, VonSlider)
}

// 导出组件
export default VonSlider
