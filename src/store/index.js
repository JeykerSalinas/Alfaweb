import Vue from "vue";
import Vuex from "vuex";
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";
Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  getters: {},
  mutations: {},
  actions: {
    async signIn(payload) {
      const auth = getAuth();
      createUserWithEmailAndPassword(auth, payload.email, payload.password)
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
    async logIn(payload) {
      const auth = getAuth();
      signInWithEmailAndPassword(auth, payload.email, payload.password)
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
  },
  modules: {},
});
