import Vue from 'vue'
import App from './App.vue'
import Router from '../router/router.js'
import Store  from '../store/store.js'
import VueAxios from 'vue-axios'
import { securedAxiosInstance, plainAxiosInstance } from '../backend/axios/axios.js'
import * as Jquery from 'jquery';
import * as Popper from 'popper.js'
import * as Bootstrap from 'bootstrap';
import 'bootstrap/dist/css/bootstrap';

Vue.use(Jquery);
Vue.use(Popper);
Vue.use(Bootstrap);

Vue.config.productionTip = false
Vue.use(VueAxios, {
  secured: securedAxiosInstance,
  plain: plainAxiosInstance
})

const app = new Vue({
   el: '#app',
   router: Router,
   store: Store,
   securedAxiosInstance,
   plainAxiosInstance,
   render: h => h(App)
})