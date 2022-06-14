import { createStore } from "vuex";
import VuexPersistence from "vuex-persist";
import axios from "axios";

const store = createStore({
  state: {
    loggedIn: false,
    loggedCompany: false,
    loggedUser: false,
    loggedAdmin: false,
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
    SET_loggedCompany(state, payload) {
      state.loggedCompany = payload;
    },
    SET_loggedUser(state, payload) {
      state.loggedUser = payload;
    },
    SET_loggedAdmin(state, payload) {
      state.loggedAdmin = payload;
    },
    SET_cv(state, payload) {
      state.cvRegisterAction = payload;
    },
    SET_lettre(state, payload) {
      state.lettreRegisterAction = payload;
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
            if (res.data.user.role == "company") {
              commit("SET_loggedCompany", true);
              commit("SET_loggedUser", false);
            }
            if (res.data.user.role == "user") {
              commit("SET_loggedCompany", false);
              commit("SET_loggedUser", true);
            }
            if (res.data.user.role == "admin") {
              commit("SET_loggedCompany", false);
              commit("SET_loggedUser", false);
              commit("SET_loggedAdmin", true);
            }
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
          })
          .then((res) => {
            commit("SET_token", res.data.access_token);
            commit("SET_user", res.data.user);
            commit("SET_loggedIn", true);
            commit("SET_loggedUser", true);
            commit("SET_loggedCompany", false);
            commit("SET_loggedAdmin", false);
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
            role: payload.role,
          })
          .then((res) => {
            commit("SET_token", res.data.access_token);
            commit("SET_user", res.data.user);
            commit("SET_loggedIn", true);
            commit("SET_loggedCompany", true);
            commit("SET_loggedAdmin", false);
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
            commit("SET_loggedCompany", false);
            commit("SET_loggedUser", false);
            commit("SET_loggedAdmin", false);
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
            adresse: payload.adresse,
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
    lettreRegisterAction({ commit }, payload) {
      return new Promise((resolve, reject) => {
        axios
          .post("http://localhost:8000/api/auth/registerlettre", {
            name: payload.name,
            email: payload.email,
            poste: payload.poste,
            titre: payload.titre,
            contenu: payload.contenu,
            phone: payload.phone,
            id_user: payload.id_user,
          })
          .then((res) => {
            commit("SET_lettre", res.data.user);
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
    get_loggedCompany(state) {
      return state.loggedCompany;
    },
    get_loggedUser(state) {
      return state.loggedUser;
    },
    get_user(state) {
      return state.user;
    },
    get_loggedAdmin(state) {
      return state.loggedAdmin;
    },
  },
});
export default store;
