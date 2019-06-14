import Vue from 'vue';

import BootstrapVue from 'bootstrap-vue';

import { library } from '@fortawesome/fontawesome-svg-core';
import { faPlus, faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

import App from './App.vue';
import store from './store';
import router from './router';


library.add(faArrowLeft, faPlus, faArrowRight);

Vue.component('fa-icon', FontAwesomeIcon);


Vue.config.productionTip = false;
Vue.use(BootstrapVue);

new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app');
