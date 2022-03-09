<template>
  <div>
    <b-nav class="navbar">
      <b-nav-item class="h1" active>
        <router-link to="/">Habit Tracker</router-link></b-nav-item
      >
      <div class="d-flex justify-content-end">
        <b-nav-item>
          <router-link :to="{name: 'profile'}">User</router-link>
        </b-nav-item>
        <b-nav-item>
          <router-link to="/contact">Contact</router-link>
        </b-nav-item>
        <b-nav-item>
          <router-link to="/learn">Learn More</router-link>
        </b-nav-item>
        <b-nav-item>
          <router-link :to="{name: 'userhabits'}">UserTest</router-link>
        </b-nav-item>
        <b-nav-item>
          <router-link :to="{name: 'bhabitform'}">FormBad</router-link>
        </b-nav-item>
        <b-nav-item>
          <router-link :to="{name: 'ghabitform'}">FormGood</router-link>
        </b-nav-item>
        <b-nav-item>
          <router-link :to="{name: 'login'}">Login</router-link>
        </b-nav-item>
         <b-nav-item>
          <router-link :to="{name: 'register'}">Register</router-link>
        </b-nav-item>
        <b-nav-item>
         <button v-if="$store.state.loggedIn" @click="logout" class="btn btn-outline-light my-2 my-sm-0 pulled-right" type="submit">Logout</button>
        </b-nav-item>
      </div>
    </b-nav>
  </div>
</template>

<script>
export default {
  name: "MyNavBar",
    methods:{
    logout(){
      this.$store.dispatch('logout')
    }
  }
};
</script>

<style scoped>
.navbar {
  padding: 10px;
  text-decoration-line: none;
  background-color: #f0ead2;
}

.h1 {
  font-size: 36px;
}
.links {
  align-content: flex-end;
}

ul.nav li a,
ul.nav li a:visited {
  color: #000 !important;
  text-decoration-line: none;
}

ul.nav li a:hover,
ul.nav li a:active {
  color: #000 !important;
  text-decoration-line: none;
}

ul.nav li.active a {
  color: #000 !important;
  text-decoration-line: none;
}
</style>

