import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import wrap from '@/components/telephone'
import Login from '@/components/login'
import places from '@/components/places'
import register from '@/components/register'
import Home from '@/components/Home'
import placeindex from '@/components/place/placeindex'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/home',
      name: 'Home',
      component: Home,
      // home页面并不需要被访问
      redirect: '/places',
      children: [
        {
          path: '/places',
          name: 'places',
          component: places,
          meta: {
            requireAuth: true
          }
        },
        {
          path: '/place',
          name: 'placeindex',
          component: placeindex,
          meta: {
            requireAuth: true
          }
        },
      ]
      
    },
    {
      path:'/telephone',
      name:'telephone',
      component:wrap
    },
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/places',
      name: 'places',
      component: places
    },
    {
      path: '/register',
      name: 'register',
      component: register
    },
    
  ]
})
