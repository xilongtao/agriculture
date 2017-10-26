import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import Common from '@/components/Common'
import CommonIndex from '@/components/CommonIndex'
import List from '@/components/List'
import SaleList from '@/components/SaleList'
import TestRouter from '@/components/TestRouter'

import NProgress from 'NProgress'
import 'nprogress/nprogress.css'

import TestChild from '@/components/TestChild'

// Router.prototype.go  = function () {
//   this.isBack = true
//   window.history.go(-1)
// }



Vue.use(Router)

const MyRouter = new Router({
  routes: [
    /*{
      path: '/',
      name: 'Index',
      component: Index
    },*/
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
        }
      ]
    }
    /*
    {
      path: '/sale-list',
      name: 'sale-list',
      component: List
    },
    {
      path: '/testrouter',
      name: 'testrouter',
      component: TestRouter,
      children: [
        {
          path: 'child',
          name: 'child',
          component: TestChild
        }
      ]
    },
    {
      path: '/map',
      name: 'map',
      component: BMap
    }*/
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