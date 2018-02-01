import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import GoodsList from '@/components/pages/goods-list'
import Tabber from '@/components/common/tabber'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'tabber',
      component: Tabber
    },{
      path: '/sort',
      name: 'goodsList',
      component: GoodsList
    }
  ]
})
