import { createRouter, createWebHistory } from "vue-router";

import SignUp from "../views/SignUp";
import CandidateView from "../views/CandidateView";
import CompanyView from "../views/CompanyView";
import DetailsPost from "../views/DetailsPost";
import RechercheOffre from "../views/RechercheOffre";
import AproposPage from "../views/AproposPage";
import ProfilUser from "../views/ProfilUser";
import SignIn from "../views/SignIn";
import CompanyPage from "../views/CompanyPage";
import SideBar from "../components/SideBar";
import DashbordView from "@/views/Admin/DashbordView.vue";
import AdminStatistique from "@/views/Admin/AdminStatistique";
import GestionUser from "@/views/Admin/GestionUser";
import GestionOffresAdmin from "@/views/Admin/GestionOffresAdmin";
import AddAdmin from "@/views/Admin/AddAdmin";
import GestionCompany from "@/views/Admin/GestionCompany";
import ModifierUser from "@/views/Admin/ModifierUser";
import ModifierOffreAdmin from "@/views/Admin/ModifierOffreAdmin";
import PostuleCv from "../views/Candidat/PostuleCv";
import OffresPostuler from "../views/Candidat/OffresPostuler";
import RechercheCv from "../views/Company/RechercheCv";
import InfoCandidat from "../views/Company/InfoCandidat";
import PostuleLettre from "../views/Candidat/PostuleLettre";
import HomeView from "../views/Home/HomeView";
import CVView from "../views/Candidat/CVView";
import CvForm from "../views/Candidat/CvForm";
import LettreForm from "../views/Candidat/LettreForm";
import ModifierLettre from "../views/Candidat/ModifierLettre";
import OffreSave from "../views/Candidat/OffreSave";
import ProfilCandidat from "../views/ProfilCandidat";
import ModifierExperience from "../views/Candidat/ModiferExperience";
import ModifierDiplome from "../views/Candidat/ModifierDiplome";
import PosteCompany from "../views/Company/PosteCompany";
import GerePoste from "../views/Company/GerePoste";
import StatistCompany from "../views/Company/StatistCompany";
import ModifierPost from "../views/Company/ModifierPost";
import CandidatureCompany from "../views/Company/CandidatureCompany";
import SaveCv from "../views/Company/SaveCv";
import store from "@/store";
const routes = [
  {
    path: "/SignUp",
    name: "SignUp",
    component: SignUp,
    meta: {
      guest: true,
    },
  },
  {
    path: "/ProfilUser/:id?",
    name: "ProfilUser",
    component: ProfilUser,
    meta: {
      secure: true,
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
    path: "/StatistAdmin",
    name: "StatistAdmin",
    component: AdminStatistique,
    meta: {
      secure: true,
    },
  },
  {
    path: "/offrepostuler",
    name: "offrepostuler",
    component: OffresPostuler,
    meta: {
      secure: true,
    },
  },
  {
    path: "/CandidatureCompany/:id?",
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
    path: "/modifierlettre/:id?",
    name: "modifierlettre",
    component: ModifierLettre,
    meta: {
      secure: true,
    },
  },
  {
    path: "/companypage/:id?",
    name: "companypage",
    component: CompanyPage,
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
    meta: {
      adminLog: true,
    },
  },
  {
    path: "/ModifierUser/:id?",
    name: "ModifierUser",
    component: ModifierUser,
    meta: {
      adminLog: true,
    },
  },
  {
    path: "/ModifierOffre/:id?",
    name: "ModifierOffre",
    component: ModifierOffreAdmin,
    meta: {
      adminLog: true,
    },
  },
  {
    path: "/AddAdmin",
    name: "AddAdmin",
    component: AddAdmin,
    meta: {
      adminLog: true,
    },
  },
  {
    path: "/detailpost/:id?",
    name: "detailpost",
    component: DetailsPost,
  },
  {
    path: "/GestionUser",
    name: "GestionUser",
    component: GestionUser,
    meta: {
      adminLog: true,
    },
  },
  {
    path: "/GestionOffresAdmin",
    name: "GestionOffresAdmin",
    component: GestionOffresAdmin,
    meta: {
      adminLog: true,
    },
  },
  {
    path: "/GestionCompany",
    name: "GestionCompany",
    component: GestionCompany,
    meta: {
      adminLog: true,
    },
  },
  {
    path: "/rechercheoffre",
    name: "rechercheoffre",
    component: RechercheOffre,
  },
  {
    path: "/Apropos",
    name: "Apropos",
    component: AproposPage,
  },
  {
    path: "/offresave",
    name: "offresave",
    component: OffreSave,
    meta: {
      secure: true,
    },
  },
  {
    path: "/modifierpost/:id?",
    name: "modifierpost",
    component: ModifierPost,
    meta: {
      secure: true,
    },
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
      companyLog: true,
    },
  },
  {
    path: "/postulelettre",
    name: "postulelettre",
    component: PostuleLettre,
    meta: {
      companyLog: true,
    },
  },
  {
    path: "/infocandidat/:id_user?/:id_offre?",
    name: "infocandidat",
    component: InfoCandidat,
    meta: {
      secure: true,
    },
  },
  {
    path: "/cvform/:id?",
    name: "cvform",
    component: CvForm,
    meta: {
      companyLog: true,
    },
  },
  {
    path: "/lettreform/:id?",
    name: "lettreform",
    component: LettreForm,
    meta: {
      companyLog: true,
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
  mode: "history",
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
  }
  if (to.matched.some((record) => record.meta.companyLog)) {
    // if no token
    if (!store.state.loggedUser) {
      //console.log("no token");
      next({
        path: "/PosteCompany",
      });
    } else {
      next();
    }
  }
  if (to.matched.some((record) => record.meta.adminLog)) {
    // if no token
    if (!store.state.loggedAdmin) {
      //console.log("no token");
      next({
        path: "/",
      });
    } else {
      next();
    }
  } else {
    next(); // make sure to always call next()!
  }
});
export default router;
