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
// window.onload = function(){
  // let encrypt = new Object();
  // encrypt.account= 'pjj001';
  // encrypt.password= '123456';
  // let userInfo=JSON.stringify(encrypt);
  // let encryptAfter=encryptAES(userInfo);
  // location.href = 'http://www.baidu.com/?para='+encryptAfter;
  // console.log(1111);
// };
