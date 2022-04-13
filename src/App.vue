<template>
  <div id="app">
    <b-navbar type="dark" variant="dark">
      <b-navbar-brand tag="h1" class="mb-0">Alfa-web</b-navbar-brand>
    </b-navbar>
    <b-button @click="signIn">Click me</b-button>
    <router-view></router-view>
  </div>
</template>
<script>
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";
export default {
  created() {
    this.logIn();
  },
  methods: {
    async logIn() {
      const auth = getAuth();
      signInWithEmailAndPassword(auth, "jeyker.salinas13@gmail.com", "123456")
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          console.log(user);
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          console.log(errorCode);
        });
    },
    async signIn() {
      const auth = getAuth();
      createUserWithEmailAndPassword(auth, "rebeca@gmail.com", "jeykerteamo")
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          console.log(user);
          // ...
        })
        .catch((error) => {
          console.log(error);
          // ..
        });
    },
  },
};
</script>
<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
