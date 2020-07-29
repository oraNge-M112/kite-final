import Vue from 'vue'
import App from './App.vue'
import 'leaflet/dist/leaflet.css';
import router from './router'
import { store } from './store/index.js'
import { mapGetters } from 'vuex';

Vue.config.productionTip = false

new Vue({
  router,
  store, 
  render: h => h(App),
  computed: {
    ...mapGetters(['logged'])
  },
}).$mount('#app')
