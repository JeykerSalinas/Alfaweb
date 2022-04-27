<template>
  <div id="app">
    <div>
      <b-navbar
        toggleable="lg"
        class="px-5 border-bottom shadow-sm mb-3 bg-white"
        fixed="top"
      >
        <b-navbar-brand tag="h1" class="mb-0">Alfaweb</b-navbar-brand>
        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
          <!-- Right aligned nav items -->
          <b-navbar-nav class="ml-auto w-100 justify-content-end">
            <b-nav-item>
              <router-link to="/administration" style="text-decoration: none">
                Administración</router-link
              >
            </b-nav-item>
            <b-nav-item>
              <router-link to="/home" style="text-decoration: none"
                >Home</router-link
              >
            </b-nav-item>
            <b-nav-item>
              {{ currentUser.email }}
              <b-icon-box-arrow-in-right
                @click="signOut"
              ></b-icon-box-arrow-in-right>
            </b-nav-item>
          </b-navbar-nav>
        </b-collapse>
      </b-navbar>
    </div>
    <transition>
      <router-view :key="$route.path"></router-view>
    </transition>
  </div>
</template>
<script>
import { mapState, mapActions } from "vuex";
export default {
  name: "App",
  computed: {
    ...mapState(["currentUser"]),
  },
  mounted() {
    this.getCourses();
  },
  methods: {
    ...mapActions(["logOut", "getCourses"]),
    signOut() {
      this.logOut();
    },
  },
};
</script>
<style>
#app {
  font-family: "Verdana", sans-serif;
  color: #05194e;
  box-sizing: border-box;
  text-align: center;
}
</style>
