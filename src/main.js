// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';
import Vant from 'vant';
import {Toast, Dialog, Loading} from 'vant';
import myComponts from './base';
import store from './store';
import 'vant/lib/index.css';
import 'iview/dist/styles/iview.css';
import '../static/css/index.less';
import {DatePicker, Page, Spin} from 'iview';
import MinXin from './components/mixins.js';

Vue.mixin(MinXin);
Vue.component('DatePicker', DatePicker);
Vue.component('Page', Page);
Vue.component('Spin', Spin);
Vue.use(Vant);
Vue.use(Toast);
Vue.use(Dialog);
Vue.use(Loading);
Vue.use(myComponts);
Vue.config.productionTip = false;


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: {App},
  template: '<App/>'
});

router.beforeEach((to, from, next) => {
  if (to.path === '/core') {
    if (Object.keys(store._modules.root.state.userinfo).length == 0) {
      Dialog.alert({
        title: '重要提醒',
        message: '请先登陆',
        lockScroll: false,
      });
      setTimeout(() => {
        Dialog.close();
        router.go(-1);
      }, 2000);
    } else {
      next();
    }
  } else {
    next();
  }
});
