import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import Common from '@/components/Common'
import CommonIndex from '@/components/CommonIndex'
import List from '@/components/List'
import SaleList from '@/components/SaleList'
import TestRouter from '@/components/TestRouter'
import BMap from '@/components/Map'

import TestChild from '@/components/TestChild'

// Router.prototype.go  = function () {
//   this.isBack = true
//   window.history.go(-1)
// }

Vue.use(Router)


export default new Router({
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
          component: CommonIndex,
          meta: {
            progress: {
              func: [
                {call: 'color', modifier: 'temp', argument: '#ffb000'},
                {call: 'fail', modifier: 'temp', argument: '#6e0000'},
                {call: 'location', modifier: 'temp', argument: 'top'},
                {call: 'transition', modifier: 'temp', argument: {speed: '1.5s', opacity: '0.6s', termination: 400}}
              ]
            }
          }
        },
        {
          path: 'sale-list',
          name: 'Index-Sale-List',
          component: SaleList,
          meta: {
            progress: {
              func: [
                {call: 'color', modifier: 'temp', argument: '#ffb000'},
                {call: 'fail', modifier: 'temp', argument: '#6e0000'},
                {call: 'location', modifier: 'temp', argument: 'top'},
                {call: 'transition', modifier: 'temp', argument: {speed: '1.5s', opacity: '0.6s', termination: 400}}
              ]
            }
          }
        }
      ],
      meta: {
        progress: {
          func: [
            {call: 'color', modifier: 'temp', argument: '#ffb000'},
            {call: 'fail', modifier: 'temp', argument: '#6e0000'},
            {call: 'location', modifier: 'temp', argument: 'top'},
            {call: 'transition', modifier: 'temp', argument: {speed: '1.5s', opacity: '0.6s', termination: 400}}
          ]
        }
      }
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
