import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import List from '@/components/List'
import TestRouter from '@/components/TestRouter'
import BMap from '@/components/Map'

import TestChild from '@/components/TestChild'

Router.prototype.go  = function () {
  this.isBack = true
  window.history.go(-1)
}

Vue.use(Router)


export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
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
    }
  ]
})
