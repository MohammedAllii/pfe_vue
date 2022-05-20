<template>
  <navbar-view />
  <v-container>
    <h5 class="text-h4" style="color: #66bb6a">
      <v-icon color="black">mdi-more</v-icon> You want More Details?!
    </h5>
    <v-container>
      <v-row>
        <v-col cols="12" md="4">
          <img
            v-bind:src="'../images/' + info.avatar"
            style="width: 150px; height: 150px"
          />
        </v-col>
        <v-col cols="12">
          <h5>{{ info.name_candidat }} {{ info.last_name_candidat }}</h5>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12" md="2" v-if="info.gouvernorat != null">
          <p>
            <v-icon color="green">mdi-map-marker</v-icon>{{ info.gouvernorat }}
          </p>
        </v-col>
        <v-col cols="12" md="3" v-if="info.email != null">
          <p><v-icon color="green">mdi-email-box</v-icon>{{ info.email }}</p>
        </v-col>
        <v-col cols="12" md="2" v-if="info.phone != null">
          <p>
            <v-icon color="green">mdi-cellphone-basic</v-icon>{{ info.phone }}
          </p>
        </v-col>
        <v-col cols="12" md="2" v-if="info.civilite != null">
          <p><v-icon color="green">mdi-flag</v-icon>{{ info.civilite }}</p>
        </v-col>
        <v-col cols="12" md="2" v-if="info.date_naissance != null">
          <p>
            <v-icon color="green">mdi-account</v-icon>{{ info.date_naissance }}
          </p>
        </v-col>
      </v-row>
      <v-chip class="ma-2" color="success" variant="outlined">
        <v-icon start icon="mdi-account-check"></v-icon>
        {{ info.created_at }}
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
          href="mailto:?subject=bonjour monsieur/madame, nous tenons à vous annoncer que vous êtes qualifié pour passer un entretien avec nous 
voici le lien de la réunion : 
 bonne chance pour le travail "
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
          href="mailto:?subject=désolé, vous n'êtes pas assez qualifié pour ce travail, bonne chance pour la prochaine fois "
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
              v-if="info.adresse != null"
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
    <v-container align="center">
      <v-container align="center" v-if="diplomes == ''">
        <v-icon style="width: 100px; height: 100px">mdi-alert-octagon</v-icon>
        <h5 class="text-h6 font-italic" style="color: green">
          Aucune Cv Créer dans notre site
        </h5>
      </v-container>
      <v-container align="center" v-if="diplomes != ''">
        <h5 style="color: #0277bd">
          <v-icon color="#01579B">mdi-folder-account-outline</v-icon>Insights
          from profile
        </h5>
      </v-container>
      <div v-if="diplomes != ''">
        <h5 align="left"><strong>Formations & Diplomes:</strong></h5>
        <v-container v-for="diplome in diplomes" :key="diplome.id" align="left">
          <v-banner
            lines="six"
            icon="mdi-file-compare"
            color="grey"
            class="my-4"
          >
            <h5 style="color: green">{{ diplome.etablissement }}</h5>
            <h6>{{ diplome.diplome }}</h6>
            <h6>
              <strong>{{ diplome.country }}</strong>
            </h6>
            <h6>
              {{ diplome.debut }}<strong style="color: red">/</strong
              >{{ diplome.fin }}
            </h6>
            <h6>
              <strong>{{ diplome.description }}</strong>
            </h6>
          </v-banner>
        </v-container>
      </div>
      <v-container align="center">
        <v-row>
          <v-col cols="12" md="6">
            <h5 style="color: #0277bd">
              <v-icon color="#01579B">mdi-account-box-multiple</v-icon>The CV:
              <iframe
                v-bind:src="'../cvs/' + info.cv"
                height="650"
                width="550"
              ></iframe>
            </h5>
          </v-col>
          <v-col cols="12" md="6">
            <h5 style="color: #0277bd">
              <v-icon color="#01579B">mdi-account-box-multiple</v-icon> Lettre:
              <iframe
                v-bind:src="'../lettres/' + info.lettre"
                height="650"
                width="550"
              ></iframe>
            </h5>
          </v-col>
        </v-row>
      </v-container>
      <h5
        style="color: #0277bd"
        v-if="
          info.question1 != null ||
          info.question2 != null ||
          info.question3 != null
        "
      >
        <v-icon color="#01579B">mdi-check-underline-circle-outline</v-icon
        >Partie:Question/Réponse
      </h5>
      <v-row>
        <v-col cols="12" md="8" v-if="info.question1 != null">
          <strong>Questions</strong>
          <p>
            <v-icon color="#01579B">mdi-account-check-outline</v-icon>
            {{ info.question1 }}
          </p>
        </v-col>
        <v-col cols="12" md="4" v-if="info.reponse1 != null">
          <strong>Réponses</strong>
          <p>{{ info.reponse1 }}</p>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12" md="8" v-if="info.question2 != null">
          <p>
            <v-icon color="#01579B">mdi-account-check-outline</v-icon
            >{{ info.question2 }}
          </p>
        </v-col>
        <v-col cols="12" md="4">
          <p>{{ info.reponse2 }}</p>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12" md="8" v-if="info.question3 != null">
          <p>
            <v-icon color="#01579B">mdi-account-check-outline</v-icon>
            {{ info.question3 }}
          </p>
        </v-col>
        <v-col cols="12" md="4">
          <p>{{ info.reponse3 }}</p>
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
      diplomes: {},
    };
  },
  components: { NavbarView, FooterView },
  mounted() {
    this.getDiplomes();
  },
  created() {
    this.getInfo(), this.getDiplomes();
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
      });
    },
    async getDiplomes() {
      let url =
        "http://localhost:8000/api/auth/getcandidatinfo/" +
        this.$route.query.id_user;
      await axios.get(url).then((response) => {
        this.diplomes = response.data;
      });
    },
  },
};
</script>

<style></style>
