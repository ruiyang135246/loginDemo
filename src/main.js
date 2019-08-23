import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/index'
import Vconsole from 'vconsole'

import '@/permission'
import 'amfe-flexible/index.js'
// import 'amfe-flexible/index.js'
console.log(process.env)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
let vConsole = new Vconsole()
export default vConsole
