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
import InternshipsView from "../views/Home/InternshipsView";
import FullTimeView from "../views/Home/FullTimeView";
import RemoteWorkView from "../views/Home/RemoteWorkView";

const routes = [
  {
    path: "/SignUp",
    name: "SignUP",
    component: SignUp,
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
    path: "/PostuleCv",
    name: "PostuleCv",
    component: PostuleCv,
  },
  {
    path: "/",
    name: "HomeView",
    component: HomeView,
    meta: {
      secure: true,
    },
  },
  {
    path: "/internships",
    name: "internships",
    component: InternshipsView,
    meta: {
      secure: true,
    },
  },
  {
    path: "/fulltime",
    name: "fulltime",
    component: FullTimeView,
    meta: {
      secure: true,
    },
  },
  {
    path: "/remotework",
    name: "remotework",
    component: RemoteWorkView,
    meta: {
      secure: true,
    },
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
