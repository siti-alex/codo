import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/AHome/index.vue'
import Directions from '../views/ADirections/index.vue'
import Docs from '../views/ADocs/index.vue'
import About from '../views/AAbout/index.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/news',
    name: 'Home',
    component: Home
  },
  {
    path: '/directions',
    name: 'Directions',
    component: Directions,
  },
  {
    path: '/docs',
    name: 'Docs',
    component: Docs,
  },
  {
    path: '/about',
    name: 'About',
    component: About,
  },


]

const router = new VueRouter({
  routes
})

export default router
