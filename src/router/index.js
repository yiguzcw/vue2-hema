import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    name: '首页',
    component: Index
  }, {
    path: '/category',
    name: '分类页',
    redirect: '/category/all',
    component: Category,
    children: [{
      path: '/category/:tab',
      component:CategoryMain
    }]
  }, {
    path: '/car',
    name: '购物车页',
    component: Car
  }, {
    path: '/car/pay',
    name: '支付页',
    component: Pay
  },
  {
    path: '/user',
    name: '用户页',
    component: User,
    meta: {
         requireAuth: true,  // 添加该字段，表示进入这个路由是需要登录才能进入的
     },
  }, {
    path: '/detail',
    name: '详情页',
    component: Detail
  }, {
    path: '/search',
    name: '搜索页',
    component: Search
  },{
    path: '/login',
    name: '登录页',
    component: Login
  }
]
})
