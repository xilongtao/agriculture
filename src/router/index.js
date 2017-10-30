import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import Common from '@/components/Common'
import CommonIndex from '@/components/CommonIndex'
import SaleList from '@/components/SaleList'
import BuyList from '@/components/BuyList'
import Login from '@/components/account/Login'

import NProgress from 'nprogress'
import 'nprogress/nprogress.css'


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
      name: 'Index',
      redirect: '/index',
      component: Common,
      children: [
        {
          path: 'index',
          name: 'Index-Index',
          component: CommonIndex
        },
        {
          path: 'sale-list',
          name: 'Index-Sale-List',
          component: SaleList
        },
        {
          path: 'buy-list',
          name: 'Index-Buy-List',
          component: BuyList
        }
      ]
    },
    /*登录的*/
    {
      path: '/login',
      name: 'Login',
      component: Login
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