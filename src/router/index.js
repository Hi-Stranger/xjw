import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/components/Home'; //首页
import Register from '@/components/Register'; //注册
Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
    }, {
      path: '/register',
      name: 'Register',
      component: Register,
    }
  ]
})
