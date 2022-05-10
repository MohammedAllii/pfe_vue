<template>
  <v-card>
    <v-toolbar dark color="blue">
      <router-link
        to="/postulelettre"
        style="text-decoration: none; color: black"
        ><v-btn icon dark>
          <v-icon>mdi-close</v-icon>
        </v-btn></router-link
      >
      <v-toolbar-title>Close</v-toolbar-title>
      <v-spacer></v-spacer>
    </v-toolbar>
    <v-container fluid align="center">
      <v-row>
        <v-col cols="12" md="12">
          <p class="text-h6">
            <v-img
              src="https://www.hloom.com/images/banner-cover-letter-format.png"
              style="width: 80px; height: 80px"
            ></v-img
            >Créer votre lettre
          </p>
          <p>
            Ajouter votre lettre de motivation vous permet de postuler très
            rapidement
          </p>
        </v-col>
        <v-row>
          <v-col cols="12" md="6">
            <v-text-field
              label="Enter your title"
              v-model="lettre.titre"
              type="text"
              variant="outlined"
              clearable
              clear-icon="mdi-cancel"
              prepend-inner-icon="mdi-emoticon-excited-outline"
            ></v-text-field>
          </v-col>
          <v-col cols="12" md="6">
            <v-text-field
              label="Enter your profession"
              v-model="lettre.poste"
              variant="outlined"
              clearable
              clear-icon="mdi-cancel"
              prepend-inner-icon="mdi-brain"
            ></v-text-field>
          </v-col>
        </v-row>
      </v-row>
      <v-row>
        <v-col cols="12" md="6">
          <v-text-field
            label="Enter your phone Number"
            v-model="lettre.phone"
            variant="outlined"
            clearable
            clear-icon="mdi-cancel"
            prepend-inner-icon="mdi-cellphone-android"
          ></v-text-field>
        </v-col>
        <v-col cols="12" md="6">
          <v-text-field
            label="Enter your Email"
            v-model="lettre.email"
            type="email"
            variant="outlined"
            clearable
            clear-icon="mdi-cancel"
            prepend-inner-icon="mdi-email"
          ></v-text-field>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12" md="2">
          <p>Enter your Lettre!</p>
        </v-col>
        <v-col cols="12" md="6">
          <v-textarea
            v-model="lettre.contenu"
            auto-grow
            filled
            color="blue"
            label="Bio"
            rows="1"
          ></v-textarea>
        </v-col>
        <v-col cols="12" md="4">
          <v-btn rounded flat>Annuler</v-btn>
          <v-btn rounded flat color="green" @click.prevent="updatelettre"
            >Enregistrer</v-btn
          ></v-col
        >
      </v-row>
    </v-container>
  </v-card>
</template>
<script>
import axios from "axios";
export default {
  data() {
    return {
      lettre: {},
      email: "",
      poste: "",
      phone: "",
      titre: "",
      contenu: "",
    };
  },
  computed: {
    user() {
      return this.$store.getters.get_user;
    },
  },
  mounted() {
    this.getLettreById();
  },
  methods: {
    async getLettreById() {
      let url =
        "http://localhost:8000/api/auth/getlettre/" + this.$route.params.id;
      await axios.get(url).then((response) => {
        this.lettre = response.data;
      });
    },
    async updatelettre() {
      axios
        .post(
          "http://localhost:8000/api/auth/modifierlettre/" +
            this.$route.params.id,
          {
            email: this.lettre.email,
            poste: this.lettre.poste,
            phone: this.lettre.phone,
            titre: this.lettre.titre,
            contenu: this.lettre.contenu,
          }
        )
        .then((response) => {
          console.log(response);
          this.$toast.success(" Modification réussite.", {
            position: "top-right",
          });
          this.$router.go(-1);
        })
        .catch((err) => {
          this.error = err;
        });
    },
  },
};
</script>
