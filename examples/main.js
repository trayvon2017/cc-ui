/*
 * @Description: 
 * @Date: 2023-01-06 17:04:16
 * @LastEditors: cfb
 * @LastEditTime: 2023-01-07 13:54:10
 * @FilePath: /von-ui/examples/main.js
 */
import Vue from 'vue'
import App from './App.vue'

import VonUi from '../src'
import '../theme/default/index.scss'
Vue.config.productionTip = false
Vue.use(VonUi)

new Vue({
  render: h => h(App),
}).$mount('#app')
