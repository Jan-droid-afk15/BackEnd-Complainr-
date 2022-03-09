import Vue from 'vue'
import Router from 'vue-router'
import Home from '../views/Home.vue'

import GHabitForm from '../views/GHabitForm.vue'
import BHabitForm from '../views/BHabitForm.vue'
import UserHabits from '../views/UserHabits.vue'

import About from '../views/About.vue'

Vue.use(Router);



export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "Home",
      component: Home
    },
    {
      path: "/register",
      name: "register",
      component: () => import("../views/Register.vue")
    },
    {
      path: "/login",
      name: "login",
      component: () => import("../views/Login.vue")
    },
    {
      path: "/about",
      name: "about",
      component: About
    },
    {
      path: "/ghabitform",
      name: "ghabitform",
      component: GHabitForm
    },
    {
      path: "/bhabitform",
      name: "bhabitform",
      component: BHabitForm
    },
    {
      path: "/habit",
      name: "userhabits",
      component: UserHabits
    },
    {
      path: "/todos",
      name: "todos",
      component: () => import("../views/UserTodos.vue")
    },
    {
      path: "/profile",
      name: "profile",
      component: () => import("../views/Profile.vue")
    },
    {
      path: "/habit/:id",
      name: "single_habit",
      component: () => import("../views/SingleHabit.vue")
    },
    {
      path: "/habit/edit/:id",
      name: "edit_habit",
      component: () => import("../views/EditHabit.vue")
    },
  ]
  
  
})

