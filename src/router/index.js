import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/home.vue'
import User from '../components/user.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/account',
    name: 'Account',
    component: User
  }
]

const router = new VueRouter({
  routes
})

export default router
