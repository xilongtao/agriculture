import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import TestRouter from '@/components/TestRouter'
import BMap from '@/components/Map'

import TestChild from '@/components/TestChild'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: HelloWorld
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
