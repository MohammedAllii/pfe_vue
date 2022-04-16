import { createRouter, createWebHistory } from "vue-router";

import SignUp from "../views/SignUp";
import CandidateView from "../views/CandidateView";
import CompanyView from "../views/CompanyView";
import SignIn from "../views/SignIn";
import SideBar from "../components/SideBar";
import DashbordView from "@/views/Admin/DashbordView.vue";
import GestionUser from "@/views/Admin/GestionUser";
import PostuleCv from "../views/PostuleCv";
import HomeView from "../views/Home/HomeView";
import CVView from "../views/CVView";
import Exemple from "../views/ExempleView";
import ProfilCandidat from "../views/ProfilCandidat";
import store from "@/store";
const routes = [
  {
    path: "/SignUp",
    name: "SignUP",
    component: SignUp,
    meta: {
      guest: true,
    },
  },
  {
    path: "/CandidateView",
    name: "CandidateView",
    component: CandidateView,
    meta: {
      guest: true,
    },
  },
  {
    path: "/cvview/:id?",
    name: "cvview",
    component: CVView,
    meta: {
      secure: true,
    },
  },
  {
    path: "/CompanyView",
    name: "CompanyView",
    component: CompanyView,
    meta: {
      guest: true,
    },
  },
  {
    path: "/SignIn",
    name: "SignIn",
    component: SignIn,
    meta: {
      guest: true,
    },
  },
  {
    path: "/SideBar",
    name: "SideBar",
    component: SideBar,
  },
  {
    path: "/DashbordView",
    name: "DashbordView",
    component: DashbordView,
  },
  {
    path: "/GestionUser",
    name: "GestionUser",
    component: GestionUser,
  },
  {
    path: "/example",
    name: "example",
    component: Exemple,
  },
  {
    path: "/profilcandidat/:id?",
    name: "profilcandidat",
    component: ProfilCandidat,
    meta: {
      secure: true,
    },
  },
  {
    path: "/PostuleCv",
    name: "PostuleCv",
    component: PostuleCv,
    meta: {
      secure: true,
    },
  },
  {
    path: "/",
    name: "HomeView",
    component: HomeView,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});
router.beforeEach((to, from, next) => {
  if (to.matched.some((record) => record.meta.secure)) {
    // if no token
    if (!store.state.loggedIn) {
      //console.log("no token");
      next({
        path: "/SignIn",
      });
    } else {
      next();
    }
  } else if (to.matched.some((record) => record.meta.guest)) {
    if (!store.state.loggedIn) {
      next();
    } else {
      //console.log("no token");
      next({
        path: "/",
      });
    }
  } else {
    next();
  }
});
export default router;
