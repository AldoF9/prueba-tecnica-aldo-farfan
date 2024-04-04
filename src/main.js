import Vue from 'vue';
import 'vuetify/dist/vuetify.min.css';
import axios from 'axios';
import App from './App.vue';

window.axios=require('axios');


import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import router from "./components/router/router";
import vuetify from "./components/vuetify/vuetify";

Vue.prototype.$http = axios.create({
  baseURL: 'https://eshop-deve.herokuapp.com/api/v2',
});

Vue.use(BootstrapVue)

Vue.use(IconsPlugin)

new Vue({
  router,
  vuetify,
  render: h => h(App),
}).$mount('#app');
