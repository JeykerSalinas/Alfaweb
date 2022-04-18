<template>
  <div id="app">
    <b-navbar type="ligth" class="px-5 border-bottom shadow-sm">
      <b-navbar-brand tag="h1" class="mb-0">Alfaweb</b-navbar-brand>
      <b-navbar-nav class="ms-auto">
        <b-nav-item>
          {{ currentUser.email }}
        </b-nav-item>
      </b-navbar-nav>
    </b-navbar>
    <router-view></router-view>
  </div>
</template>
<script>
import { mapState } from "vuex";
export default {
  name: "App",
  computed: {
    ...mapState(["currentUser"]),
  },
};
</script>
<style lang="scss">
#app {
  font-family: "Montserrat", sans-serif;
  color: #05194e;
  box-sizing: border-box;
  text-align: center;
}
</style>
