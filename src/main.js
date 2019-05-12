// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';
import Vant from 'vant';
import myComponts from './base';
import 'vant/lib/index.css';
import '../static/css/index.less';


Vue.use(Vant);
Vue.use(myComponts);
Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: {App},
  template: '<App/>'
});
