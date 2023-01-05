import Vue from 'vue'
import App from './App.vue'

import DcUi from '../packages'

Vue.config.productionTip = false
Vue.use(DcUi)

new Vue({
  render: h => h(App),
}).$mount('#app')
