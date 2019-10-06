import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import About from "../components/About";
import VueProfile from "../components/VueProfile";

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/home',
      name: 'Home',
      component: Home
    },
    {
      path: '/about',
      name: 'About',
      component: About
    },
    {
      path: '/profile/:user_id',
      name: 'Profile',
      component: VueProfile
    }
  ]
})
