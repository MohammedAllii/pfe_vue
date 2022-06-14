<template>
  <navbar-view />
  <v-divider></v-divider>
  <v-container>
    <v-icon size="40" color="green">mdi-bookmark-multiple-outline</v-icon>
    <h5 class="font-weight-medium">
      Enregistrement des Offres Préférées Par Utilisateur
    </h5>
    <v-divider></v-divider>
    <br />
    <v-row v-for="offre in offres" :key="offre.id">
      <v-col cols="12" md="2"></v-col>
      <v-col cols="10" md="10">
        <v-row>
          <v-col cols="12" md="10">
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
                <v-col cols="12" md="8"> </v-col>
                <v-col cols="12" md="4">
                  <v-icon
                    color="red"
                    @click.prevent="deleteoffresave(offre.id_offre)"
                  >
                    mdi-delete-empty
                  </v-icon>
                </v-col>
              </v-row>
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
              <p v-if="offre.description.length > 10">
                {{
                  showAll ? offre.description : offre.description.slice(0, 120)
                }}
                <a
                  ><span @click="showAll = true" style="color: blue"
                    >Read more</span
                  ></a
                >
              </p>
              <p v-else>{{ text }}</p>
              <v-chip class="ma-2" color="success" variant="outlined">
                <v-icon start icon="mdi-progress-clock"></v-icon>
                {{ offre.updated_at }}
              </v-chip>

              <v-chip class="ma-2" color="primary" variant="outlined">
                postuler facilement
                <v-icon end icon="mdi-face"></v-icon>
              </v-chip>
            </v-col>
          </v-col>
        </v-row>
      </v-col>
      <br />
      <v-divider></v-divider>
    </v-row>
    <v-container align="center" v-if="offres == ''">
      <img
        src="https://us.123rf.com/450wm/gmast3r/gmast3r1705/gmast3r170501109/79018658-dessin-anim%C3%A9-visage-triste-personnes-n%C3%A9gatives-emotion-ic%C3%B4ne-vector-illustration.jpg?ver=6"
        style="width: 200px; height: 200px"
      />
      <h5 class="text-h4 font-italic" style="color: blue">
        Encore aucune offre dans votre liste
      </h5>
      <p>
        Pour sauvegarder une offre, appuyez sur le bouton <br />"Recherche
        offre" disponible dans la page <br />de description de l'offre.
      </p>
    </v-container>
    <br /><br />
    <div class="text-center" v-if="offres != ''">
      <v-btn
        color="green"
        rounded
        flat
        @click="snackbar = true"
        prepend-icon="mdi-delete-empty"
      >
        Supprimer toute la liste
      </v-btn>

      <v-snackbar v-model="snackbar" vertical>
        <p>Vous etes sur de Supprimer ce contenu?</p>

        <template v-slot:actions>
          <v-btn color="indigo" variant="text" @click="snackbar = false">
            Annuler
          </v-btn>
          <v-btn
            color="indigo"
            variant="text"
            @click.prevent="deletealloffresave()"
          >
            Supprimer
          </v-btn>
        </template>
      </v-snackbar>
    </div>
  </v-container>
  <v-divider></v-divider>
  <br /><br /><br /><br /><br /><br />
  <footer-view />
</template>
<script>
import NavbarView from "@/components/NavbarView.vue";
import FooterView from "@/components/FooterView.vue";
import axios from "axios";
export default {
  components: { NavbarView, FooterView },
  data: () => ({
    snackbar: false,
    offres: {},
    showAll: false,
  }),
  computed: {
    user() {
      return this.$store.getters.get_user;
    },
  },
  mounted() {
    this.getOffres();
  },
  created() {
    this.getOffres();
  },
  methods: {
    async getOffres() {
      let url = "http://localhost:8000/api/auth/getoffres/" + this.user.id;
      await axios.get(url).then((response) => {
        this.offres = response.data;
      });
    },
    async deleteoffresave($id) {
      axios
        .delete(
          "http://localhost:8000/api/auth/deleteoffresave/" +
            $id +
            "/" +
            this.user.id,
          {}
        )
        .then((response) => {
          console.log(response);
          this.$toast.success(" Offre Deleted.", {
            position: "top-right",
          });
          this.$router.go(0);
        })
        .catch((err) => {
          this.error = err;
          this.$toast.error(" Offre non Deleted.", {
            position: "top-right",
          });
        });
    },
    async deletealloffresave() {
      axios
        .delete(
          "http://localhost:8000/api/auth/deletealloffresave/" + +this.user.id,
          {}
        )
        .then((response) => {
          console.log(response);
          this.$toast.success("All Offres Deleted.", {
            position: "top-right",
          });
          this.$router.go(0);
        })
        .catch((err) => {
          this.error = err;
          this.$toast.error(" Offres non Deleted.", {
            position: "top-right",
          });
        });
    },
  },
};
</script>
<style></style>
