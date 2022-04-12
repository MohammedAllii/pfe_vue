<template>
  <v-toolbar dense app color="transparent">
    <v-toolbar-title class="text-uppercase-title"
      ><router-link to="/"
        ><img src="../favicon.ico" style="width: 130px; height: 75px" />
      </router-link>
    </v-toolbar-title>
    <v-spacer></v-spacer>
    <v-li class="nav-item" v-if="loggedIn">
      <v-btn class="flex-row" right="22em" rounded color="grey" dark to="/">
        <v-icon color="grey">mdi-volume-high</v-icon>
        Publier Poste
      </v-btn>
    </v-li>
    <v-li class="nav-item" v-if="loggedIn">
      <v-btn right="45em" rounded color="grey" dark to="/">
        <v-icon color="grey">mdi-volume-high</v-icon>
        chercher
      </v-btn>
    </v-li>
    <v-li class="nav-item" v-if="loggedIn">
      <v-btn rounded color="green" dark @click.prevent="performLogout">
        Logout
      </v-btn>
    </v-li>
    <v-li class="nav-item" v-if="loggedIn">
      <v-btn rounded color="grey" dark to="/PostuleCv">
        <v-icon color="grey">mdi-tab-plus</v-icon>
        Postuler votre CV
      </v-btn>
    </v-li>
    <v-li class="nav-item" v-if="!loggedIn">
      <v-btn rounded color="green" dark to="/SignIn"> Sign In </v-btn>
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
export default {
  data() {
    return {
      token: null,
    };
  },
  mounted() {
    this.checkUserStatus();
  },
  computed: {
    loggedIn() {
      return this.$store.getters.get_loggedIn;
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
