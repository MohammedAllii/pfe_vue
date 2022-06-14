<template>
  <navbar-view />
  <p style="margin-left: 1050px">
    <v-btn rounded color="blue" @click.prevent="download"
      ><v-icon>mdi-download</v-icon> Télécharger Cette Lettre</v-btn
    >
  </p>
  <v-container fluid id="whats">
    <v-row>
      <v-col cols="12" md="4">
        <h1>{{ user.name }} {{ user.last_name }}</h1>
        <p class="text-h5">
          <br /><strong>{{ lettres.poste }}</strong>
        </p>
        <p>
          <v-icon color="#2E7D32">mdi-cellphone</v-icon
          ><strong>Téléphone:</strong>{{ lettres.phone }}
        </p>
        <p>
          <v-icon color="#2E7D32">mdi-calendar-range</v-icon><strong>Le:</strong
          >{{ lettres.added }}
        </p>
        <p>
          <v-icon color="#2E7D32">mdi-email-check-outline</v-icon
          ><strong>E-mail :</strong>
          {{ lettres.email }}
        </p>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12" md="12">
        <p class="text-left">
          DEAR RECRUITER,<br />

          {{ lettres.contenu }}<br />
        </p>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12" md="4">
        <p class="font-weight-bold"><strong>Best regards,</strong></p>
        <p class="font-italic">
          <strong>{{ lettres.name }}</strong>
        </p>
      </v-col>
    </v-row>
  </v-container>
  <footer-view />
</template>

<script>
import NavbarView from "@/components/NavbarView.vue";
import FooterView from "@/components/FooterView.vue";
import html2pdf from "html2pdf.js";
import axios from "axios";
export default {
  data: () => ({
    lettres: {},
    rating: 1,
    rating1: 1,
    rating2: 1,
    rating3: 1,
    rating4: 1,
    rating5: 1,
  }),
  components: { NavbarView, FooterView },
  mounted() {
    this.getLettreById();
  },
  computed: {
    user() {
      return this.$store.getters.get_user;
    },
  },
  methods: {
    async getLettreById() {
      let url =
        "http://localhost:8000/api/auth/affichelettre/" + this.$route.params.id;
      await axios.get(url).then((response) => {
        this.lettres = response.data;
      });
    },
    download() {
      const element = document.getElementById("whats");
      var opt = {
        margin: [30, 0, 30, 0], //top, left, buttom, right
        filename: this.lettres.name + ".pdf",
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
