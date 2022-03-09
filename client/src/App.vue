<template>
  <div>
    <MyNavBar />
    <b-row>
      <transition name="view">
        <router-view />
      </transition>
    </b-row>
    <MyFooter />
  </div>
</template>

<script>
import MyNavBar from '@/components/MyNavbar.vue'
import MyFooter from '@/components/MyFooter.vue'

export default {
  name: 'App',
  components: {
    MyNavBar,
    MyFooter,
  },
  data() {
    return {}
  },
  created() {
    if (localStorage.getItem('token')) {
      this.$store.commit('SET_LOGGED_IN_STATUS', true)
    } else {
      this.$store.commit('SET_LOGGED_IN_STATUS', false)
    }
    if (localStorage.getItem('token')) {
      this.$store.commit('SET_REGISTERED_STATUS', false)
    } else {
      this.$store.commit('SET_REGISTERED_STATUS', true)
    }
  },
}
</script>

<style>
/* google font */
@import url('https://fonts.googleapis.com/css2?family=Be+Vietnam+Pro:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');

#app {
  font-family: 'Be Vietnam', sans-serif;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

.done {
  text-decoration: line-through;
}

/* Vue Transition Animations, animates when a user clicks on a page. */

.view-enter-active,
.view-leave-active {
  transition: opacity 0.5s ease-in-out, transform 0.5s ease;
}

/* Adds a delay to the transition so that the switch is seamless */
.view-enter-active {
  transition-delay: 0.5s;
}

.view-enter {
  opacity: 0;
  transform: translateY(-100px);
}
.view-enter-to {
  opacity: 1;
  transform: translateY(-0px);
}

.view-leave {
  opacity: 1;
  transform: translateY(0px);
}

.view-leave-to {
  opacity: 0;
  transform: translateY(100px);
}
</style>
