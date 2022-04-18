<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
    <button @click="onSignOut">Login</button>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import { mapActions } from "vuex";

export default {
  name: "HomeView",
  components: {
    HelloWorld,
  },
  methods: {
    ...mapActions(["logOut"]),
    onSignOut() {
      this.logOut();
    },
  },
};
</script>
