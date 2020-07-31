import Vue from 'vue'
import VueRouter from 'vue-router'
import Map from '../views/map.vue'
import User from '../components/user.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/map',
    name: 'Home',
    component: Map
  },
  {
    path: '/',
    name: 'Account',
    component: User
  },
  {
    path: '*',
    redirect: '/'
  }
]

const router = new VueRouter({
  routes
})

export default router
