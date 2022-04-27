import { createRouter, createWebHistory } from "vue-router";

import SignUp from "../views/SignUp";
import CandidateView from "../views/CandidateView";
import CompanyView from "../views/CompanyView";
import SignIn from "../views/SignIn";
import SideBar from "../components/SideBar";
import DashbordView from "@/views/Admin/DashbordView.vue";
import GestionUser from "@/views/Admin/GestionUser";
import PostuleCv from "../views/Candidat/PostuleCv";
import RechercheCv from "../views/Company/RechercheCv";
import PostuleLettre from "../views/Candidat/PostuleLettre";
import HomeView from "../views/Home/HomeView";
import CVView from "../views/Candidat/CVView";
import CvForm from "../views/Candidat/CvForm";
import LettreForm from "../views/Candidat/LettreForm";
import ProfilCandidat from "../views/ProfilCandidat";
import ModifierExperience from "../views/Candidat/ModiferExperience";
import ModifierDiplome from "../views/Candidat/ModifierDiplome";
import CompanyDashboard from "../views/Company/CompanyDashboard";
import PosteCompany from "../views/Company/PosteCompany";
import GerePoste from "../views/Company/GerePoste";
import StatistCompany from "../views/Company/StatistCompany";
import CandidatureCompany from "../views/Company/CandidatureCompany";
import SaveCv from "../views/Company/SaveCv";
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
    path: "/companydash",
    name: "companydash",
    component: CompanyDashboard,
    meta: {
      secure: true,
    },
  },
  {
    path: "/PosteCompany",
    name: "PosteCompany",
    component: PosteCompany,
    meta: {
      secure: true,
    },
  },
  {
    path: "/GerePoste",
    name: "GerePoste",
    component: GerePoste,
    meta: {
      secure: true,
    },
  },
  {
    path: "/StatistCompany",
    name: "StatistCompany",
    component: StatistCompany,
    meta: {
      secure: true,
    },
  },
  {
    path: "/CandidatureCompany",
    name: "CandidatureCompany",
    component: CandidatureCompany,
    meta: {
      secure: true,
    },
  },
  {
    path: "/SaveCv",
    name: "SaveCv",
    component: SaveCv,
    meta: {
      secure: true,
    },
  },
  {
    path: "/RechercheCv",
    name: "RechercheCv",
    component: RechercheCv,
    meta: {
      secure: true,
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
    path: "/postulelettre",
    name: "postulelettre",
    component: PostuleLettre,
    meta: {
      secure: true,
    },
  },
  {
    path: "/cvform/:id?",
    name: "cvform",
    component: CvForm,
    meta: {
      secure: true,
    },
  },
  {
    path: "/lettreform/:id?",
    name: "lettreform",
    component: LettreForm,
    meta: {
      secure: true,
    },
  },
  {
    path: "/modifierexperience/:id?",
    name: "modifierexperience",
    component: ModifierExperience,
    meta: {
      secure: true,
    },
  },
  {
    path: "/modifierdiplome/:id?",
    name: "modifierdiplome",
    component: ModifierDiplome,
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
