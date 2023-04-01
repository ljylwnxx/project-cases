import Vue from 'vue'
import App from './App.vue'
import './qiankun'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
