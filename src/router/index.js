import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import TestRouter from '@/components/TestRouter'
import BMap from '@/components/Map'

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
      component: TestRouter
    },
    {
      path: '/map',
      name: 'map',
      component: BMap
    }
  ]
})
