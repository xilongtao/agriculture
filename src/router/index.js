import Vue from 'vue'
import Router from 'vue-router'


import NProgress from 'nprogress'
import 'nprogress/nprogress.css'

import Common from '@/components/Common'
import CommonIndex from '@/components/CommonIndex'
import SaleList from '@/components/SaleList'
import BuyList from '@/components/BuyList'
import Login from '@/components/account/Login'
import UserCenterHome from '@/components/account/UserCenterHome'

// Router.prototype.go  = function () {
//   this.isBack = true
//   window.history.go(-1)
// }



Vue.use(Router)

const MyRouter = new Router({
  routes: [
    /*页面的*/
    {
      path: '/',
      name: 'index',
      redirect: '/index',
      component: Common,
      children: [
        {
          path: 'index',
          name: 'index-index',
          component: CommonIndex
        },
        {
          path: 'sale-list',
          name: 'index-sale-list',
          component: SaleList
        },
        {
          path: 'buy-list',
          name: 'index-buy-list',
          component: BuyList
        },
        /*登录的*/
        {
          path: '/login',
          name: 'login',
          component: Login
        },
      ]
    },
    /*用户中心首页*/
    {
      path: '/user',
      name: 'user-center-home',
      component: UserCenterHome
    }
  ]
})
MyRouter.beforeEach((to, from, next) => {
  NProgress.start();
  next();
});
MyRouter.afterEach((to, from, next) => {
  NProgress.done();
});

export default MyRouter