<template>
  <navbar-view />
  <v-divider></v-divider>
  <v-container>
    <v-icon size="40" color="#FFE082">mdi-bookmark-multiple-outline</v-icon>
    <h5 class="font-weight-medium font-italic" style="color: #546e7a">
      Enregistrement des Offres deja postulée Par Utilisateur
    </h5>
  </v-container>
  <v-divider></v-divider>
  <v-container>
    <v-row v-for="offre in offres" :key="offre.id">
      <v-col cols="12" md="1"></v-col>
      <v-col cols="10" md="11">
        <v-row>
          <v-col cols="12" md="12">
            <v-col cols="12">
              <h5 class="font-italic" style="color: blue">
                <router-link
                  :to="{ name: 'detailpost', params: { id: offre.id_offre } }"
                  style="text-decoration: none"
                  ><h5>{{ offre.poste }}</h5>
                </router-link>
              </h5>
              <p>
                <v-icon color="blue">mdi-home-city-outline</v-icon>
                &nbsp;
                <router-link
                  :to="{
                    name: 'companypage',
                    params: { id: offre.id_company },
                  }"
                  style="text-decoration: none"
                  >{{ offre.name }}
                </router-link>
              </p>
              <v-row>
                <v-row>
                  <v-col cols="10" md="2"></v-col>
                  <p>
                    <v-icon color="blue">mdi-map-marker</v-icon>
                    {{ offre.lieu_travail }}
                  </p>
                  &nbsp;&nbsp;&nbsp;
                  <p>
                    <v-icon color="blue">mdi-file-document-outline</v-icon>
                    {{ offre.contrat }}
                  </p>
                  &nbsp;&nbsp;&nbsp;
                  <p>
                    <v-icon color="blue">mdi-clock-outline</v-icon>
                    {{ offre.temps_travail }}
                  </p>
                  &nbsp;&nbsp;&nbsp;
                  <p>
                    <v-icon color="blue">mdi-currency-usd</v-icon>
                    {{ offre.salaire }}&nbsp;{{ offre.monnaie }}
                  </p>
                  &nbsp;&nbsp;&nbsp;
                </v-row>
              </v-row>
              <p v-if="offre.description.length > 5">
                {{
                  showAll
                    ? offre.description
                    : offre.description.slice(0, 60) + "..."
                }}
              </p>
              <v-chip class="ma-2" color="#A1887F" variant="outlined">
                <v-icon start icon="mdi-progress-clock"></v-icon>
                {{ offre.created_at }}
              </v-chip>
              <v-chip class="ma-2" color="green" variant="outlined">
                postuler Déja
                <v-icon end icon="mdi-checkbox-marked-circle-outline"></v-icon>
              </v-chip>
              <v-chip
                class="ma-2"
                color="danger"
                variant="outlined"
                v-if="offre.validation == 0"
              >
                <v-icon start icon="mdi-clock-alert"></v-icon>
                expiré
              </v-chip>
              <v-chip class="ma-2" color="red" variant="outlined">
                <v-btn @click.prevent="deleteoffrepostuler(offre.id_offre)">
                  Annuler Postulation à cette poste</v-btn
                >
                <v-icon end icon="mdi-close-box"></v-icon>
              </v-chip>
              <v-chip
                class="ma-2"
                color="orange"
                variant="outlined"
                v-if="offre.valide == 0"
              >
                <v-icon start icon="mdi-timer-sand"></v-icon>
                en attente d'acceptation
              </v-chip>
              <v-chip
                class="ma-2"
                color="success"
                variant="outlined"
                v-if="offre.valide == 1"
              >
                <v-icon start icon="mdi-check-underline-circle"></v-icon>
                Félicitations vous êtes accepter
              </v-chip>
            </v-col>
          </v-col>
        </v-row>
      </v-col>
      <br />
      <v-divider></v-divider>
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
    offres: {},
    snackbar: false,
    text: `êtes-vous sûr de vouloir supprimer l'application dans cette offre?`,
  }),
  computed: {
    user() {
      return this.$store.getters.get_user;
    },
  },
  mounted() {
    this.getoffrepostuler();
  },
  methods: {
    async getoffrepostuler() {
      let url =
        "http://localhost:8000/api/auth/getoffrepostuler/" + this.user.id;
      await axios.get(url).then((response) => {
        this.offres = response.data;
      });
    },
    async deleteoffrepostuler($id) {
      axios
        .delete(
          "http://localhost:8000/api/auth/deleteoffrepostuler/" +
            $id +
            "/" +
            this.user.id,
          {}
        )
        .then((response) => {
          console.log(response);
          this.$toast.success(" Suppression du postulation.", {
            position: "top-right",
          });
          this.$router.go(0);
        })
        .catch((err) => {
          this.error = err;
          this.$toast.error(" Postulation non Deleted.", {
            position: "top-right",
          });
        });
    },
    async deletealloffrepostuler() {
      axios
        .delete(
          "http://localhost:8000/api/auth/deletealloffrepostuler/" +
            this.user.id,
          {}
        )
        .then((response) => {
          console.log(response);
          this.$toast.success("All Offres Postuler Deleted.", {
            position: "top-right",
          });
          this.$router.go(0);
        })
        .catch((err) => {
          this.error = err;
          this.$toast.error(" All offres postuler non Deleted.", {
            position: "top-right",
          });
        });
    },
  },
};
</script>
