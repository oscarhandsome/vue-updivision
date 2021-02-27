import Vue from 'vue'
import App from './App.vue'
import router from './router'
import 'vue-awesome/icons'
import Icon from 'vue-awesome/components/Icon'

Vue.config.productionTip = false

Vue.component('v-icon', Icon)

new Vue({
  render: h => h(App),
  router,
}).$mount('#app')
