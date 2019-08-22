import Vue from 'vue';
import axios from 'axios';

import 'vue-cirrus/dist/vue-cirrus.css';
import 'vue-cirrus/dist/vue-cirrus.common';

import { library } from '@fortawesome/fontawesome-svg-core';
import { faUserSecret } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

import App from './App';
import router from './router';
import store from './store';

if (!process.env.IS_WEB) Vue.use(require('vue-electron'));
Vue.http = Vue.prototype.$http = axios;
Vue.config.productionTip = false;

library.add(faUserSecret);

Vue.component('fa-icon', FontAwesomeIcon);

/* eslint-disable no-new */
new Vue({
  components: { App },
  router,
  store,
  template: '<App/>',
}).$mount('#app');
