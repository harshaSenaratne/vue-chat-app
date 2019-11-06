import Vue from 'vue'
import Router from 'vue-router'
import PrivateChat from '@/components/PrivateChat'
import Login from '@/components/Login'

Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
    {
      path: '/',
      name: 'PrivateChat',
      component: PrivateChat 
    },
    {
      path: '/login',
      name: 'Login',
      component: Login 
    }
  ] 
})
