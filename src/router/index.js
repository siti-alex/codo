import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from '../views/AHome/index.vue'
// import Directions from '../views/ADirections/index.vue'
// import Docs from '../views/ADocs/index.vue'
// import About from '../views/AAbout/index.vue'
import Home from '../components/AHomePage/index.vue'
import Directions from '../components/AHomePage/ADirectionsPage/index.vue'
import Docs from '../components/AHomePage/ADocsPage/index.vue'
import About from '../components/AHomePage/AAboutPage/index.vue'
import News from '../components/AHomePage/ANewsPage/index.vue'
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

  {
    path: '/home',
    name: 'Home',
    component: Home,
    children: [
      {
        path: 'news',
        component: News
      },
      {
        path: 'directions',
        component: Directions
      },
      {
        path: 'docs',
        component: Docs
      },
      {
        path: 'about',
        component: About
      },
    ],
  }


]

const router = new VueRouter({
  routes
})

export default router
