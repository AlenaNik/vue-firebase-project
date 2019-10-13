import Vue from 'vue'
import Router from 'vue-router'
import Index from "../components/Index";
import AddADay from "../components/AddADay";
import EditDay from "../components/EditDay";

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/add-a-day',
      name: 'AddADay',
      component: AddADay
    },
    {
      path: '/edit-day/:day_slug',
      name: 'EditDay',
      component: EditDay
    },

  ]
})
