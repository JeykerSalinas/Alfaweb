import Vue from "vue";
import Vuex from "vuex";
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import {
  collection,
  getDocs,
  deleteDoc,
  doc,
  addDoc,
  updateDoc,
} from "firebase/firestore";
import { db } from "@/helpers/firebase";
import router from "../router";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    isAuth: true,
    currentUser: { email: "", id: "" },
    courses: [],
    currentCourse: {},
  },
  getters: {
    getCodes(state) {
      return state.courses.map((course) => course.codigo);
    },
    getInfo(state) {
      const info = {
        allowed: state.courses
          .map((course) => course.cupos)
          .reduce((a, b) => a + b, 0),
        subscribed: state.courses
          .map((course) => course.inscritos)
          .reduce((a, b) => a + b, 0),
        avaible:
          state.courses
            .map((course) => course.cupos)
            .reduce((a, b) => a + b, 0) -
          state.courses
            .map((course) => course.inscritos)
            .reduce((a, b) => a + b, 0),
        finished: state.courses.filter((course) => !course.estado).length,
        active: state.courses.filter((course) => course.estado).length,
        totalCourses: state.courses.length,
      };
      return info;
    },
  },
  mutations: {
    SET_AUTH(state, payload) {
      state.isAuth = payload;
    },
    SET_CURRENT_USER(state, payload) {
      state.currentUser = payload;
    },
    SET_COURSES(state, payload) {
      state.courses.push(payload);
    },
    SET_CURRENT_COURSE(state, payload) {
      state.currentCourse = { ...payload };
    },
    DELETE_COURSE(state, payload) {
      state.courses = state.courses.filter((course) => course.id !== payload);
    },
    ADD_COURSE(state, payload) {
      state.courses.push(payload);
    },
  },
  actions: {
    async signUp({ commit }, payload) {
      const auth = getAuth();
      createUserWithEmailAndPassword(auth, payload.email, payload.password)
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          commit("SET_AUTH", true);
          commit("SET_CURRENT_USER", { email: user.email, id: user.uid });
          router.push("/");
          // ...
        })
        .catch((error) => {
          console.log(error);
          // ..
        });
    },
    async logIn({ commit }, payload) {
      const auth = getAuth();
      signInWithEmailAndPassword(auth, payload.email, payload.password)
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
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
          commit("SET_CURRENT_USER", { email: "", id: "" });
          router.push("/login");
        })
        .catch((error) => {
          console.log(error);
        });
    },
    async getCourses({ commit }) {
      const querySnapshot = await getDocs(collection(db, "Cursos"));
      querySnapshot.docs.map((doc) => {
        commit("SET_COURSES", { ...doc.data(), id: doc.id });
      });
    },
    async deleteCourse({ commit }, payload) {
      await deleteDoc(doc(db, "Cursos", payload));
      commit("DELETE_COURSE", payload);
    },
    async addCourse({ commit }, payload) {
      try {
        const docRef = await addDoc(collection(db, "Cursos"), payload);
        console.log(docRef.id);
        commit("ADD_COURSE", { ...payload, id: docRef.id });
      } catch (error) {
        console.log(error);
      }
    },
    async updateCourse({ commit }, payload) {
      try {
        await updateDoc(doc(db, "Cursos", payload.id), payload);
        commit("DELETE_COURSE", payload.id);
        commit("ADD_COURSE", payload);
      } catch (error) {
        console.log(error);
      }
    },
  },
  modules: {},
});
