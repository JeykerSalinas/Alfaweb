import Vue from "vue";
import Vuex from "vuex";
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import router from "../router";
// import auth from "./auth";
Vue.use(Vuex);

export default new Vuex.Store({
  state: { isAuth: false, currentUser: { email: "", id: "" } },
  getters: {},
  mutations: {
    SET_AUTH(state, payload) {
      state.isAuth = payload;
    },
    SET_CURRENT_USER(state, payload) {
      state.currentUser = payload;
    },
  },
  actions: {
    async signIn({ commit }, payload) {
      const auth = getAuth();
      createUserWithEmailAndPassword(auth, payload.email, payload.password)
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          console.log(user);
          commit("SET_AUTH", true);
          commit("SET_CURRENT_USER", { email: "hola", id: "chao" });
          // ...
        })
        .catch((error) => {
          console.log(error);
          // ..
        });
    },
    async logIn({ commit }, payload) {
      console.log(payload.email);
      const auth = getAuth();
      signInWithEmailAndPassword(auth, payload.email, payload.password)
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          console.log(user);
          commit("SET_AUTH", true);
          commit("SET_CURRENT_USER", { email: user.email, id: user.uid });
          router.push("/");
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          console.log(errorCode);
        });
    },
    async logOut({ commit }) {
      const auth = getAuth();
      signOut(auth)
        .then(() => {
          commit("SET_AUTH", false);
          router.push("/login");
          console.log(auth);
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
  modules: {},
});
