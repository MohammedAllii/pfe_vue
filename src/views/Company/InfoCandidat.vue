<template>
  <navbar-view />
  <v-container>
    <h5 class="text-h4" style="color: #66bb6a">
      <v-icon color="black">mdi-marker</v-icon>You want More Details?!
    </h5>
    <p>here we are:</p>
    <v-container>
      <v-row>
        <v-col cols="12" md="4">
          <img
            src="https://scontent.ftun16-1.fna.fbcdn.net/v/t39.30808-6/277557695_1903909926471236_8967778533381054765_n.jpg?_nc_cat=106&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=2SSdKduan0sAX8rZd4m&tn=1clkvO9iF4USnNVX&_nc_ht=scontent.ftun16-1.fna&oh=00_AT_1xDS06EjLLsotLkgXmPedIey9Ob-hqm0HtzzYCoYODQ&oe=62764667"
            style="width: 150px; height: 150px"
          />
        </v-col>
        <v-col cols="12">
          <h5>{{ info.namee }} {{ info.last_name }}</h5>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12" md="2">
          <p>
            <v-icon color="green">mdi-map-marker</v-icon>{{ info.gouvernorat }}
          </p>
        </v-col>
        <v-col cols="12" md="3">
          <p><v-icon color="green">mdi-email-box</v-icon>{{ info.email }}</p>
        </v-col>
        <v-col cols="12" md="2">
          <p>
            <v-icon color="green">mdi-cellphone-basic</v-icon>{{ info.phone }}
          </p>
        </v-col>
        <v-col cols="12" md="2">
          <p><v-icon color="green">mdi-flag</v-icon>{{ info.civilite }}</p>
        </v-col>
        <v-col cols="12" md="2">
          <p>
            <v-icon color="green">mdi-account</v-icon>{{ info.date_naissance }}
          </p>
        </v-col>
      </v-row>
      <v-chip class="ma-2" color="success" variant="outlined">
        <v-icon start icon="mdi-account-check"></v-icon>
        {{ info.created_att }}
      </v-chip>
      <br /><br />
      <v-row>
        <v-btn
          variant="outlined"
          color="primary"
          rounded
          flat
          prepend-icon="mdi-emoticon-excited-outline"
          class="ma-2"
        >
          Candidate validé
        </v-btn>
        <v-btn
          variant="outlined"
          color="#EF5350"
          rounded
          flat
          prepend-icon="mdi-emoticon-dead-outline"
          class="ma-2"
        >
          Candidate réfusé
        </v-btn>
        <v-menu transition="slide-y-transition">
          <template v-slot:activator="{ props }">
            <v-btn
              color="#43A047"
              v-bind="props"
              rounded
              flat
              class="ma-2"
              style="padding-left: 50px; padding-right: 50px"
            >
              More..
            </v-btn>
          </template>
          <v-list>
            <v-list-item>
              <v-list-item-title>{{ info.adresse }}</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
      </v-row>
    </v-container>
    <v-divider></v-divider>
    <iframe v-bind:src="'../cvs/' + info.cv" height="600" width="500"></iframe>
    <v-container align="center">
      <h5 style="color: #0277bd">
        <v-icon color="#01579B">mdi-folder-account-outline</v-icon>Insights from
        profile
      </h5>
      <v-row>
        <v-col cols="12" md="4">
          <p>Expérience:</p>
          <p>stage d'initiation<br />CNTE<br />2020-2020</p>
        </v-col>
        <v-col cols="12" md="4">
          <p>Formation academique:</p>
          <p>stage d'initiation<br />CNTE<br />2020-2020</p>
        </v-col>
        <v-col cols="12" md="4">
          <p>Formation academique:</p>
          <p>stage d'initiation<br />CNTE<br />2020-2020</p>
        </v-col>
      </v-row>
      <v-container align="center">
        <v-row>
          <v-col cols="12" md="6">
            <h5 style="color: #0277bd">
              <v-icon color="#01579B">mdi-account-box-multiple</v-icon>The CV:
            </h5>
          </v-col>
          <v-col cols="12" md="6">
            <h5 style="color: #0277bd">
              <v-icon color="#01579B">mdi-account-box-multiple</v-icon>The
              motivation lettre:
            </h5>
          </v-col>
        </v-row>
      </v-container>
      <h5 style="color: #0277bd">
        <v-icon color="#01579B">mdi-check-underline-circle-outline</v-icon
        >Partie:Question/Réponse
      </h5>
      <v-row>
        <v-col cols="12" md="8">
          <p>
            <v-icon color="#01579B">mdi-account-check-outline</v-icon> you have
            a valid driver's license?
          </p>
        </v-col>
        <v-col cols="12" md="4">
          <p>yes</p>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12" md="8">
          <p>
            <v-icon color="#01579B">mdi-account-check-outline</v-icon> you have
            a valid driver's license?
          </p>
        </v-col>
        <v-col cols="12" md="4">
          <p>NO</p>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12" md="8">
          <p>
            <v-icon color="#01579B">mdi-account-check-outline</v-icon> you have
            a valid driver's license?
          </p>
        </v-col>
        <v-col cols="12" md="4">
          <p>yes</p>
        </v-col>
      </v-row>
    </v-container>
  </v-container>
  <footer-view />
</template>

<script>
import NavbarView from "@/components/NavbarView.vue";
import FooterView from "@/components/FooterView.vue";
import axios from "axios";
export default {
  data() {
    return {
      info: {},
      items: [
        { title: "Good Fit" },
        { title: "Maybe" },
        { title: "Not a Fit" },
      ],
      items1: [{ title: "MejriHamouda8@gmail.com" }, { title: "25468975" }],
    };
  },
  components: { NavbarView, FooterView },
  created() {
    this.getInfo();
  },
  methods: {
    async getInfo() {
      let url =
        "http://localhost:8000/api/auth/getcandidatdetails/" +
        this.$route.query.id_user +
        "/" +
        this.$route.query.id_offre;
      await axios.get(url).then((response) => {
        this.info = response.data;
        console.log(response.data);
      });
    },
  },
};
</script>

<style></style>
