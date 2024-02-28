import Vue from 'vue'
import VueRouter from 'vue-router'

import Layout from '@/views/layout'
import Home from '@/views/layout/home.vue'
import Category from '@/views/layout/category.vue'
import Cart from '@/views/layout/cart.vue'
import User from '@/views/layout/user.vue'

import store from '@/store'

// 异步路由改造
const Login = () => import('@/views/login')
const Search = () => import('@/views/search')
const SearchList = () => import('@/views/search/list.vue')
const Pay = () => import('@/views/pay')
const MyOrder = () => import('@/views/myorder')
const Prodetail = () => import('@/views/prodetail')

Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
    { path: '/login', component: Login },
    {
      path: '/',
      component: Layout,
      redirect: '/home',
      children: [
        { path: '/home', component: Home },
        { path: '/category', component: Category },
        { path: '/cart', component: Cart },
        { path: '/user', component: User }
      ]
    },
    { path: '/search', component: Search },
    { path: '/searchlist', component: SearchList },
    { path: '/pay', component: Pay },
    { path: '/myorder', component: MyOrder },
    // 动态路由传参
    { path: '/prodetail/:id', component: Prodetail }
  ]
})

const authUrls = ['/pay', '/myorder']

// 全局前置导航守卫----所有在渲染前都会经过导航守卫
// to : 到哪里去，到哪里去的完整路由参数 ，（路径 ， 参数）
// from : 到哪里去，从哪里去的完整路由参数 ，（路径 ， 参数）
// next（）: 是否放行
// （1） next（） ： 放行
// （2） next（路径 ） ： 进行拦截
router.beforeEach((to, from, next) => {
  // 非权限页面
  if (!authUrls.includes(to.path)) {
    next()
    return
  }
  // 权限页面  判断 token  获取 token
  const token = store.getters.token
  console.log(token)
  if (token) {
    next()
  } else {
    next('/login')
  }
})

export default router
