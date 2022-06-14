<template>
  <v-toolbar dense app color="transparent">
    <v-toolbar-title class="text-uppercase-title"
      ><router-link to="/"
        ><img src="../favicon.ico" style="width: 130px; height: 70px" />
      </router-link>
    </v-toolbar-title>
    <v-spacer></v-spacer>
    <v-li class="nav-item" v-if="loggedCompany">
      <v-btn right="58em" rounded color="grey" dark to="/rechercheoffre">
        <v-icon color="grey">mdi-clipboard-search</v-icon>
        Recherche Offre
      </v-btn>
    </v-li>
    <v-li class="nav-item" v-if="loggedUser">
      <v-btn right="62em" rounded color="grey" dark to="/rechercheoffre">
        <v-icon color="grey">mdi-clipboard-search</v-icon>
        Recherche Offre
      </v-btn>
    </v-li>
    <v-li class="nav-item" v-if="!loggedIn">
      <v-btn right="60em" rounded color="grey" dark to="/rechercheoffre">
        <v-icon color="grey">mdi-clipboard-search</v-icon>
        Recherche Offre
      </v-btn>
    </v-li>
    <v-li class="nav-item" v-if="loggedUser">
      <v-btn
        right="62em"
        rounded
        color="white"
        style="background-color: grey"
        dark
        to="/Apropos"
      >
        <v-icon color="white">mdi-information</v-icon>
        A propos
      </v-btn>
    </v-li>
    <v-li class="nav-item" v-if="loggedCompany">
      <v-btn
        right="58em"
        rounded
        color="white"
        style="background-color: grey"
        dark
        to="/Apropos"
      >
        <v-icon color="white">mdi-information</v-icon>
        A propos
      </v-btn>
    </v-li>
    <v-li class="nav-item" v-if="!loggedIn">
      <v-btn
        right="60em"
        rounded
        color="white"
        style="background-color: grey"
        dark
        to="/Apropos"
      >
        <v-icon color="white">mdi-information</v-icon>
        A propos
      </v-btn>
    </v-li>
    <v-li class="nav-item" v-if="!loggedIn">
      <v-btn rounded color="green" dark to="/SignIn"> Sign In </v-btn>
    </v-li>
    <v-li class="nav-item" v-if="loggedUser">
      <v-container>
        <v-row>
          <v-menu>
            <template v-slot:activator="{ props }">
              <v-btn right="12em" v-bind="props" rounded color="grey" dark>
                <v-avatar size="30" style="border-radius: 100%">
                  <v-img
                    v-bind:src="'../images/' + users.avatar"
                  ></v-img> </v-avatar
                >{{ users.name }}
              </v-btn>
            </template>
            <v-card>
              <v-card-text>
                <div class="text-center">
                  <v-avatar size="30" style="border-radius: 100%">
                    <v-img v-bind:src="'../images/' + users.avatar"></v-img>
                  </v-avatar>
                  <p class="text-caption mt-1">
                    {{ users.email }}
                  </p>
                </div>
                <div class="text-left">
                  <v-btn
                    rounded
                    variant="text"
                    :to="{ name: 'ProfilUser', params: { id: users.id } }"
                    ><v-icon color="grey">mdi-account-circle</v-icon> Mon
                    Profile </v-btn
                  ><br />
                  <v-divider class="my-3"></v-divider>
                  <v-btn
                    rounded
                    variant="text"
                    :to="{ name: 'profilcandidat', params: { id: users.id } }"
                    ><v-icon color="grey">mdi-cog</v-icon> Paramétres </v-btn
                  ><br />
                  <v-btn rounded variant="text" to="/PostuleCv"
                    ><v-icon color="grey">mdi-file-document-outline</v-icon>
                    Cv </v-btn
                  ><br />
                  <v-btn rounded variant="text" to="/postulelettre"
                    ><br />
                    <v-icon color="grey">mdi-text-box-check</v-icon>Lettre de
                    motivation </v-btn
                  ><br />
                  <v-btn rounded variant="text" to="/offresave"
                    ><br />
                    <v-icon color="grey">mdi-content-save-outline</v-icon>Offres
                    sauvegarder </v-btn
                  ><br />
                  <v-btn rounded variant="text" to="/Offrepostuler"
                    ><br />
                    <v-icon color="grey">mdi-file-import</v-icon>
                    Offres Postuler </v-btn
                  ><br />
                  <v-divider class="my-3"></v-divider>
                  <v-btn
                    rounded
                    variant="text"
                    color="red"
                    @click.prevent="performLogout"
                  >
                    Se déconnecter </v-btn
                  ><br />
                </div>
              </v-card-text>
            </v-card>
          </v-menu>
        </v-row>
      </v-container>
    </v-li>
    <v-li class="nav-item" v-if="loggedCompany">
      <v-container>
        <v-row>
          <v-menu>
            <template v-slot:activator="{ props }">
              <v-btn right="12em" v-bind="props" rounded color="grey" dark>
                <v-avatar size="30" style="border-radius: 100%">
                  <v-img
                    v-bind:src="'../images/' + users.avatar"
                  ></v-img> </v-avatar
                >{{ users.name }}
              </v-btn>
            </template>
            <v-card>
              <v-card-text>
                <div class="text-center">
                  <v-avatar size="30" style="border-radius: 100%">
                    <v-img v-bind:src="'../images/' + users.avatar"></v-img>
                  </v-avatar>
                  <p class="text-caption mt-1">
                    {{ users.email }}
                  </p>
                </div>
                <div class="text-left">
                  <v-divider class="my-3"></v-divider>
                  <v-btn
                    rounded
                    variant="text"
                    :to="{ name: 'profilcandidat', params: { id: users.id } }"
                    ><v-icon color="grey">mdi-cog</v-icon> Paramétres </v-btn
                  ><br />
                  <v-btn rounded variant="text" to="/SaveCv"
                    ><v-icon color="grey">mdi-content-save-outline</v-icon> Cv
                    Sauvegarder </v-btn
                  ><br />
                  <v-btn rounded to="/PosteCompany">
                    <v-icon color="grey">mdi-pen-plus</v-icon>
                    Tableau de board
                  </v-btn>
                  <v-divider class="my-3"></v-divider>
                  <v-btn
                    rounded
                    variant="text"
                    color="red"
                    @click.prevent="performLogout"
                  >
                    Se déconnecter </v-btn
                  ><br />
                </div>
              </v-card-text>
            </v-card>
          </v-menu>
        </v-row>
      </v-container>
    </v-li>
    <v-li class="nav-item" v-if="loggedAdmin">
      <v-container>
        <v-row>
          <v-menu>
            <template v-slot:activator="{ props }">
              <v-btn right="12em" v-bind="props" rounded color="grey" dark>
                <v-avatar size="30" style="border-radius: 100%">
                  <v-img
                    v-bind:src="'../images/' + users.avatar"
                  ></v-img> </v-avatar
                >{{ users.name }}
              </v-btn>
            </template>
            <v-card>
              <v-card-text>
                <div class="text-center">
                  <v-avatar size="30" style="border-radius: 100%">
                    <v-img v-bind:src="'../images/' + users.avatar"></v-img>
                  </v-avatar>
                  <p class="text-caption mt-1">
                    {{ users.email }}
                  </p>
                </div>
                <div class="text-left">
                  <v-divider class="my-3"></v-divider>
                  <v-btn
                    rounded
                    variant="text"
                    :to="{ name: 'profilcandidat', params: { id: users.id } }"
                    ><v-icon color="grey">mdi-cog</v-icon> Paramétres </v-btn
                  ><br />
                  <v-btn rounded variant="text" to="/DashbordView"
                    ><v-icon color="grey">mdi-application-cog</v-icon> Tableau
                    de board </v-btn
                  ><br />
                  <v-divider class="my-3"></v-divider>
                  <v-btn
                    rounded
                    variant="text"
                    color="red"
                    @click.prevent="performLogout"
                  >
                    Se déconnecter </v-btn
                  ><br />
                </div>
              </v-card-text>
            </v-card>
          </v-menu>
        </v-row>
      </v-container>
    </v-li>
    <v-li class="nav-item" v-if="!loggedIn">
      <v-btn class="v-btn-signIn" rounded color="white" dark to="/SignUp">
        Sign Up
      </v-btn>
    </v-li>
  </v-toolbar>
</template>
<script>
import axios from "axios";
export default {
  data() {
    return {
      token: null,
      users: {},
    };
  },
  mounted() {
    this.checkUserStatus();
    this.getUser();
  },
  computed: {
    loggedIn() {
      return this.$store.getters.get_loggedIn;
    },
    user() {
      return this.$store.getters.get_user;
    },
    loggedCompany() {
      return this.$store.getters.get_loggedCompany;
    },
    loggedUser() {
      return this.$store.getters.get_loggedUser;
    },
    loggedAdmin() {
      return this.$store.getters.get_loggedAdmin;
    },
  },
  methods: {
    checkUserStatus() {
      if (localStorage.getItem("token") != null) {
        this.token = localStorage.getItem("token");
      }
    },
    performLogout() {
      this.$store
        .dispatch("performLogoutAction")
        .then((res) => {
          console.log(res);
          this.$router.push("/SignIn");
        })
        .catch((err) => {
          console.log(err);
        });
    },
    async getUser() {
      axios
        .get("http://localhost:8000/api/auth/getUser/" + this.user.id)
        .then((response) => {
          this.users = response.data;
        });
    },
  },
};
</script>
<style>
.text-uppercase-title {
  background-color: transparent;
}
.v-btn-signIn {
  background-color: rgb(11, 155, 11);
}
p {
  font-size: 19;
  font-family: cursive;
  margin: 25px 0px;
}
.fixedbutton {
  position: fixed;
}
</style>
