import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'
import VeeValidate from 'vee-validate'
import VueRouter from 'vue-router'
Vue.use(VeeValidate)
// add these before Vue is instantiated
const router = new VueRouter({

})

Vue.use(VueRouter)
window.axios = axios
axios.defaults.baseURL = 'http://localhost:3333'
Vue.config.productionTip = false
new Vue({
  render: h => h(App),
  router
}).$mount('#app')