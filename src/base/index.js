import Head from './Head.vue';
import Banner from './Banner.vue';
import Notice from './Notice.vue';
import Foot from './Foot.vue';

const myComponts = {
  install: function (Vue) {
    Vue.component('Head', Head);
    Vue.component('Banner', Banner);
    Vue.component('Notice', Notice);
    Vue.component('Foot', Foot);
  }
};

export default myComponts;
