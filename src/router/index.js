import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from '../views/AHome/index.vue'
// import Directions from '../views/ADirections/index.vue'
// import Docs from '../views/ADocs/index.vue'
// import About from '../views/AAbout/index.vue'
import NotFound from '../views/ANotFound/index.vue'
import Home from '../components/AHomePage/index.vue'
import Login from '../components/APersonalSystem/ALogin/index.vue'
import EditNews from '../components/APersonalSystem/ANewsEdit/index.vue'
import EditEvent from '../components/APersonalSystem/AEventEdit/index.vue'
import Students from '../components/APersonalSystem/AStudents/index.vue'
import Personal from '../components/APersonalSystem/index.vue'
import Directions from '../components/AHomePage/ADirectionsPage/index.vue'
import Docs from '../components/AHomePage/ADocsPage/index.vue'
import About from '../components/AHomePage/AAboutPage/index.vue'
import News from '../components/AHomePage/ANewsPage/index.vue'
import NewsId from '../components/AHomePage/ANewsPage/ANews/index.vue'
import EventId from '../components/AHomePage/AEvents/AEvent/index.vue'
import Events from '../components/AHomePage/AEvents/index.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/home',
    name: 'Home',
    component: Home,
    children: [
      {
        path: 'news',
        component: News,
      },
      {
        path: 'news/:id',
        component: NewsId,
        name: 'NewsId',
      },
      {
        path: 'event/:id',
        component: EventId,
        name: 'EventId',
      },
      {
        path: 'events',
        component: Events
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
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/personal',
    name: 'Personal',
    component: Personal,
    children: [
      {
        path: 'students',
        component: Students
      },
      {
        path: 'edit-news',
        component: EditNews
      },
      {
        path: 'edit-event',
        component: EditEvent
      },
    ],
  },


  { path: "*", component: NotFound },



]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
