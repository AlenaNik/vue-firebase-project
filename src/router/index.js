import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/Index'
import Index from "../components/Index";

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: Index
    }
  ]
})
