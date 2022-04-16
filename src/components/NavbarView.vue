<template>
  <v-toolbar dense app color="transparent">
    <v-toolbar-title class="text-uppercase-title"
      ><router-link to="/"
        ><img src="../favicon.ico" style="width: 130px; height: 75px" />
      </router-link>
    </v-toolbar-title>
    <v-spacer></v-spacer>
    <v-li class="nav-item" v-if="loggedCompany">
      <v-btn class="flex-row" right="22em" rounded color="grey" dark to="/">
        <v-icon color="grey">mdi-volume-high</v-icon>
        Publier Poste
      </v-btn>
    </v-li>
    <v-li class="nav-item" v-if="loggedIn">
      <v-btn right="55em" rounded color="grey" dark to="/">
        <v-icon color="grey">mdi-briefcase-search</v-icon>
        chercher
      </v-btn>
    </v-li>
    <v-li class="nav-item" v-if="loggedIn">
      <v-btn rounded color="green" dark @click.prevent="performLogout">
        Logout
      </v-btn>
    </v-li>
    <v-li class="nav-item" v-if="!loggedCompany">
      <v-btn rounded color="grey" dark to="/PostuleCv">
        <v-icon color="grey">mdi-tab-plus</v-icon>
        Postuler votre CV
      </v-btn>
    </v-li>
    <v-li class="nav-item" v-if="!loggedIn">
      <v-btn rounded color="green" dark to="/SignIn"> Sign In </v-btn>
    </v-li>
    <v-li class="nav-item" v-if="loggedIn">
      <v-btn
        rounded
        color="grey"
        dark
        :to="{ name: 'profilcandidat', params: { id: users.id } }"
      >
        <v-avatar size="30" style="border-radius: 100%">
          <v-img v-bind:src="'../images/' + user.avatar"></v-img> </v-avatar
        >{{ user.name }}
      </v-btn>
    </v-li>
    <v-li class="nav-item" v-if="!loggedIn">
      <v-btn class="v-btn-signIn" rounded color="white" dark to="/SignUp">
        Sign Up
      </v-btn>
    </v-li>
  </v-toolbar>
  <v-img src="#" style="width: 100px"></v-img>
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
</style>
