import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify'

//import axios from 'axios'
//import VueAxios from 'vue-axios'

//Vue.use(VueAxios,axios)
//axios.defaults.baseURL = 'http://localhost:5000/'//Url base de nuestra API (servidor)

Vue.config.productionTip = false

new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
