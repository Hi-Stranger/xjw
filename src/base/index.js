import Head from './Head.vue';
import Banner from './Banner.vue';
import Banner1 from './Banner1.vue';
import Notice from './Notice.vue';
import Foot from './Foot.vue';

const myComponts = {
  install: function (Vue) {
    Vue.component('Head', Head);
    Vue.component('Banner', Banner);
    Vue.component('Banner1', Banner1);
    Vue.component('Notice', Notice);
    Vue.component('Foot', Foot);
  }
};

export default myComponts;
