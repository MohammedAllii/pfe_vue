<template>
  <navbar-view />
  <v-container align="center">
    <img
      v-bind:src="'../images/' + users.avatar"
      style="height:200px; width:200px border:bold"
    />
    <p
      class="text-h6 font-italic"
      style="color: white; background-color: dodgerblue"
    >
      Welcome to {{ users.name }} profil!
    </p>
  </v-container>
  <v-container>
    <h6 style="color: brown">
      <v-icon>mdi-pencil-outline</v-icon> to know us more:
    </h6>
    <p>
      {{ users.description_entreprise }}
    </p>
  </v-container>
  <v-container>
    <h6 style="color: brown">
      <v-icon>mdi-comment-processing-outline</v-icon> Here you can find more
      details:
    </h6>
    <v-row>
      <v-col cols="12" md="3"></v-col>
      <v-col cols="12" md="4">
        <p>
          <v-icon color="green">mdi-web</v-icon
          ><a
            v-bind:href="users.site_web"
            target="blank"
            style="text-decoration: none"
            >{{ users.site_web }}</a
          >
        </p>
        <p><v-icon color="green">mdi-teach</v-icon>catchit foundation</p>
      </v-col>
      <v-col cols="12" md="4">
        <p>
          <v-icon color="green">mdi-account-tie</v-icon
          >{{ users.nb_employee }} Employees
        </p>
        <p>
          <v-icon color="green">mdi-map</v-icon>our Headquarts is in
          {{ users.adresse }}
        </p>
      </v-col>
      <v-row>
        <v-col cols="12" md="5"> </v-col>
        <v-col cols="12" md="6">
          <p>
            <v-icon color="green">mdi-map-marker</v-icon>Our Location is in
            {{ users.gouvernorat }}
          </p>
        </v-col>
      </v-row>
    </v-row>
  </v-container>
  <v-container>
    <h6
      style="color: brown"
      v-if="
        users.faebook != null || users.twitter != null || users.linkedin != null
      "
    >
      <v-icon>mdi-webpack</v-icon> Here are our social Media Pages:
    </h6>
    <v-row>
      <v-col cols="12" md="4" v-if="users.linkedin != null">
        <p><v-icon color="green">mdi-linkedin</v-icon>{{ users.linkedin }}</p>
      </v-col>
      <v-col cols="12" md="4" v-if="users.facebook != null">
        <p><v-icon color="green">mdi-facebook</v-icon>{{ users.facebook }}</p>
      </v-col>
      <v-col cols="12" md="4" v-if="users.twitter != null">
        <p><v-icon color="green">mdi-twitter</v-icon>{{ users.twitter }}</p>
      </v-col>
    </v-row>
  </v-container>
  <v-divider></v-divider>
  <footer-view />
</template>

<script>
import NavbarView from "@/components/NavbarView.vue";
import FooterView from "@/components/FooterView.vue";
import axios from "axios";
export default {
  components: { NavbarView, FooterView },
  data: () => ({
    users: {},
  }),
  computed: {
    user() {
      return this.$store.getters.get_user;
    },
  },
  mounted() {
    this.getUserById();
  },
  methods: {
    async getUserById() {
      let url =
        "http://localhost:8000/api/auth/afficheuser/" + this.$route.params.id;
      await axios.get(url).then((response) => {
        this.users = response.data;
        console.log(response.data);
      });
    },
  },
};
</script>
<style></style>
