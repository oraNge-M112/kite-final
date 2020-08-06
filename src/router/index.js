import Vue from 'vue'
import VueRouter from 'vue-router'
import Map from '../views/map.vue'
import User from '../views/user.vue'
import SignUpForm from '../components/signupform.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Map
  },  
  {
    path: '/login',
    name: 'Account',
    component: User
  },
  {
    path: '/signup',
    name: 'Sign Up',
    component: SignUpForm
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
