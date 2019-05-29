import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/components/Home'; //首页
import Register from '@/components/Register'; //注册
import Entertainment from '@/components/Entertainment'; //真人娱乐
import Preferential from '@/components/Preferential'; //优惠活动
import Core from '@/components/Core'; //会员中心
Vue.use(Router);

function getAbsolutePath() {
  let path = location.pathname
  return path.substring(0, path.lastIndexOf('/') + 1)
}

export default new Router({
  mode: 'history',
  base: getAbsolutePath(),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
      children: [
        {
          path: '/register',
          name: 'Register',
          component: Register,
        }, {
          path: '/entertainment',
          name: 'Entertainment',
          component: Entertainment,
        }, {
          path: '/preferential',
          name: 'Preferential',
          component: Preferential,
        }, {
          path: '/core',
          name: 'Core',
          component: Core,
        }
      ],
    },
    {
      path: '*',
      redirect: '/',
    }
  ]
})
