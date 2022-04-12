import { createStore } from "vuex";
import VuexPersistence from "vuex-persist";
import axios from "axios";

const store = createStore({
  state: {
    loggedIn: false,
    user: null,
    token: null,
  },
  plugins: [new VuexPersistence().plugin],
  mutations: {
    SET_user(state, payload) {
      state.user = payload;
    },
    SET_token(state, payload) {
      state.token = payload;
    },
    SET_loggedIn(state, payload) {
      state.loggedIn = payload;
    },
    SET_cv(state, payload) {
      state.cvRegisterAction = payload;
    },
  },
  actions: {
    performLoginAction({ commit }, payload) {
      return new Promise((resolve, reject) => {
        axios
          .post("http://localhost:8000/api/auth/login", {
            email: payload.email,
            password: payload.password,
          })
          .then((res) => {
            commit("SET_token", res.data.access_token);
            commit("SET_user", res.data.user);
            commit("SET_loggedIn", true);
            resolve(res);
          })
          .catch((err) => {
            reject(err);
          });
      });
    },
    performRegisterAction({ commit }, payload) {
      return new Promise((resolve, reject) => {
        axios
          .post("http://localhost:8000/api/auth/register", {
            name: payload.name,
            email: payload.email,
            password: payload.password,
            role: payload.role,
            civilite: payload.civilite,
            date_naissance: payload.date_naissance,
          })
          .then((res) => {
            commit("SET_token", res.data.access_token);
            commit("SET_user", res.data.user);
            commit("SET_loggedIn", true);
            resolve(res);
          })
          .catch((err) => {
            reject(err);
          });
      });
    },
    performRegisterActions({ commit }, payload) {
      return new Promise((resolve, reject) => {
        axios
          .post("http://localhost:8000/api/auth/register", {
            name: payload.name,
            email: payload.email,
            password: payload.password,
            adresse: payload.adresse,
            role: payload.role,
            site_web: payload.site_web,
          })
          .then((res) => {
            commit("SET_token", res.data.access_token);
            commit("SET_user", res.data.user);
            commit("SET_loggedIn", true);
            resolve(res);
          })
          .catch((err) => {
            reject(err);
          });
      });
    },
    performLogoutAction({ commit, state }) {
      return new Promise((resolve, reject) => {
        axios
          .post("http://localhost:8000/api/auth/logout", {
            token: state.token,
          })

          .then((res) => {
            commit("SET_token", null);

            commit("SET_loggedIn", false);
            commit("SET_user", null);
            resolve(res);
          })
          .catch((err) => {
            reject(err);
          });
      });
    },
    cvRegisterAction({ commit }, payload) {
      return new Promise((resolve, reject) => {
        axios
          .post("http://localhost:8000/api/auth/registercv", {
            name: payload.name,
            email: payload.email,
            poste: payload.poste,
            github: payload.github,
            linkedin: payload.linkedin,
            description: payload.description,
            interet: payload.interet,
            phone: payload.phone,
            id_user: payload.id_user,
          })
          .then((res) => {
            commit("SET_cv", res.data.user);
            resolve(res);
          })
          .catch((err) => {
            reject(err);
          });
      });
    },
    updateUserProfileAction({ commit, state }, payload) {
      return new Promise((resolve, reject) => {
        axios
          .patch("http://localhost:8000/api/auth/update", {
            name: payload.name,
            email: payload.email,
            token: state.token,
          })
          .then((res) => {
            commit("SET_user", res.data.user);

            resolve(res);
          })
          .catch((err) => {
            reject(err);
          });
      });
    },
  },
  getters: {
    get_loggedIn(state) {
      return state.loggedIn;
    },
    get_user(state) {
      return state.user;
    },
  },
});
export default store;
