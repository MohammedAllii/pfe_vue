<template>
  <navbar-view />
  <p style="margin-left: 1050px">
    <v-btn rounded color="blue" @click.prevent="download"
      ><v-icon>mdi-download</v-icon> Télécharger Ce CV</v-btn
    >
  </p>
  <v-container id="whats">
    <v-row>
      <v-col cols="12" md="4" style="background-color: #ede7f6">
        <v-img
          v-bind:src="'../cvs/' + cvs.avatar_cv"
          style="width: 150px; height: 150px"
        ></v-img>
        <p>{{ cvs.name }} {{ cvs.last_name }}</p>
        <p>{{ cvs.poste }}</p>
        <h6 class="text-uppercase" style="color: #2e7d32">Profil personnel</h6>
        <p>
          {{ cvs.resume }}
        </p>
        <h6 class="text-uppercase" style="color: #2e7d32">
          Coordonnées de contact
        </h6>
        <p><v-icon>mdi-map-marker</v-icon>Adresse : {{ cvs.adresse }}</p>
        <p>
          <v-icon>mdi-email-check-outline</v-icon>E-mail :
          {{ cvs.email }}
        </p>
        <p><v-icon>mdi-cellphone</v-icon>Téléphone:{{ cvs.phone }}</p>
        <div v-for="lien in liens" :key="lien.id">
          <p>
            <strong>{{ lien.titre }}:</strong>{{ lien.url }}
          </p>
        </div>
      </v-col>
      <v-col cols="12" md="8">
        <v-row>
          <v-col cols="12" md="12">
            <h6 class="text-uppercase" style="background-color: #ede7f6">
              <v-icon color="green" size="25">mdi-clipboard-text-outline</v-icon
              >Expérience professionnelle
            </h6>
            <div v-for="experience in experiences" :key="experience.id">
              <p class="text font-weight-bold" style="color: #2e7d32">
                {{ experience.poste }}
              </p>
              <p>
                <strong
                  >{{ experience.name_company }} | {{ experience.debut }}/{{
                    experience.fin
                  }}
                  - {{ experience.country }}</strong
                >
              </p>
              <p>
                {{ experience.description }}
              </p>
            </div>
            <h6 class="text-uppercase" style="background-color: #ede7f6">
              <v-icon color="green" size="25">mdi-clipboard-text-outline</v-icon
              >FORMATIONS ACADEMIQUE
            </h6>
            <div v-for="diplome in diplomes" :key="diplome.id">
              <p class="text font-weight-bold" style="color: #2e7d32">
                {{ diplome.diplome }}|{{ diplome.debut }}-{{ diplome.fin }}:
              </p>
              <p>
                <strong>{{ diplome.etablissement }}</strong>
              </p>
            </div>
            <h6 class="text-uppercase" style="background-color: #ede7f6">
              <v-icon color="green" size="25">mdi-clipboard-text-outline</v-icon
              >COMPETENCES
            </h6>
            <div v-for="competence in competences" :key="competence.id">
              <p>
                <strong>{{ competence.competence }} :</strong>
                {{ competence.experience }}
              </p>
            </div>
            <h6 class="text-uppercase" style="background-color: #ede7f6">
              <v-icon color="green" size="25">mdi-clipboard-text-outline</v-icon
              >COMPETENCES LANGOUSTIQUE
            </h6>
            <div v-for="langue in langues" :key="langue.id">
              <p>
                <strong>{{ langue.langue }} :</strong> {{ langue.niveau }}
              </p>
            </div>
            <h6 class="text-uppercase" style="background-color: #ede7f6">
              <v-icon color="green" size="25">mdi-clipboard-text-outline</v-icon
              >CENTRE D'INTERETS:
            </h6>
            <div v-for="interet in interets" :key="interet.id">
              <p>
                {{ interet.interet }}
              </p>
            </div>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
  <v-divider></v-divider>
  <footer-view />
</template>

<script>
import NavbarView from "@/components/NavbarView.vue";
import FooterView from "@/components/FooterView.vue";
import html2pdf from "html2pdf.js";
import axios from "axios";
export default {
  data: () => ({
    cvs: {},
    experiences: {},
    diplomes: {},
    competences: {},
    liens: {},
    langues: {},
    interets: {},
    rating: 1,
    rating1: 1,
    rating2: 1,
    rating3: 1,
    rating4: 1,
    rating5: 1,
  }),
  components: { NavbarView, FooterView },
  mounted() {
    this.getCvById(),
      this.getCompetence(),
      this.getLien(),
      this.getExperience(),
      this.getDiplome(),
      this.getLangue(),
      this.getInterets();
  },
  methods: {
    async getCvById() {
      let url =
        "http://localhost:8000/api/auth/affichecv/" + this.$route.params.id;
      await axios.get(url).then((response) => {
        this.cvs = response.data;
      });
    },
    async getInterets() {
      let url =
        "http://localhost:8000/api/auth/getinteret/" + this.$route.params.id;
      await axios.get(url).then((response) => {
        this.interets = response.data;
      });
    },
    async getCompetence() {
      let url =
        "http://localhost:8000/api/auth/getcompetence/" + this.$route.params.id;
      await axios.get(url).then((response) => {
        this.competences = response.data;
      });
    },
    async getLien() {
      let url =
        "http://localhost:8000/api/auth/getlien/" + this.$route.params.id;
      await axios.get(url).then((response) => {
        this.liens = response.data;
      });
    },
    async getExperience() {
      let url =
        "http://localhost:8000/api/auth/getexperience/" + this.$route.params.id;
      await axios.get(url).then((response) => {
        this.experiences = response.data;
      });
    },
    async getDiplome() {
      let url =
        "http://localhost:8000/api/auth/getdiplome/" + this.$route.params.id;
      await axios.get(url).then((response) => {
        this.diplomes = response.data;
      });
    },
    async getLangue() {
      let url =
        "http://localhost:8000/api/auth/getlangue/" + this.$route.params.id;
      await axios.get(url).then((response) => {
        this.langues = response.data;
      });
    },
    download() {
      const element = document.getElementById("whats");
      var opt = {
        margin: [30, 0, 30, 0], //top, left, buttom, right
        filename: this.cvs.name + ".pdf",
        image: { type: "jpeg", quality: 0.98 },
        html2canvas: { dpi: 192, scale: 2, letterRendering: true },
        jsPDF: { unit: "pt", format: "a4", orientation: "portrait" },
        pageBreak: { mode: "css", after: ".break-page" },
      };
      html2pdf().set(opt).from(element).save();
    },
  },
};
</script>

<style></style>
