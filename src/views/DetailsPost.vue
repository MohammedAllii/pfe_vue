<template>
  <navbar-view />
  <br />
  <br />
  <v-container>
    <v-row>
      <v-col cols="12" md="2"></v-col>
      <v-col cols="12" md="10">
        <h5 class="text-h5 font-weight-bold">
          {{ offres.poste }}
        </h5>
      </v-col>
      <v-row>
        <v-col cols="12" md="2"></v-col>
        <v-col cols="12" md="2">
          <p>
            <v-icon color="blue">mdi-map-marker</v-icon>
            {{ offres.lieu_travail }}
          </p>
        </v-col>
        <v-col cols="12" md="2">
          <p>
            <v-icon color="blue">mdi-currency-usd</v-icon>
            {{ offres.salaire }}&nbsp;{{ offres.monnaie }}
          </p>
        </v-col>
        <v-col cols="12" md="2">
          <p>
            <v-icon color="blue">mdi-file-document-outline</v-icon>
            {{ offres.contrat }}
          </p>
        </v-col>
        <v-col cols="12" md="2">
          <p>
            <v-icon color="blue">mdi-clock-outline</v-icon>
            {{ offres.temps_travail }}
          </p>
        </v-col>
        <v-col cols="12" md="2">
          <p>
            <v-icon color="blue">mdi-account-clock-outline</v-icon>
            {{ offres.added }}
          </p>
        </v-col>
      </v-row>
    </v-row>
  </v-container>
  <v-divider></v-divider>
  <v-container>
    <p class="font-italic">
      {{ offres.description }}
    </p>
  </v-container>
  <v-row>
    <v-col cols="12" md="4"> </v-col>
    <v-col cols="12" md="8">
      <v-dialog
        v-model="dialog"
        fullscreen
        :scrim="false"
        transition="dialog-bottom-transition"
      >
        <template v-slot:activator="{ props }">
          <v-btn
            style="padding-left: 100px; padding-right: 100px"
            prepend-icon="mdi-file-import"
            rounded
            flat
            variant="outlined"
            color="blue"
            v-bind="props"
          >
            postuler
          </v-btn>
        </template>
        <v-card>
          <v-toolbar dark color="#69F0AE">
            <v-btn icon dark @click="dialog = false">
              <v-icon>mdi-close</v-icon>
            </v-btn>
            <v-toolbar-title>close</v-toolbar-title>
            <v-spacer></v-spacer>
          </v-toolbar>
          <v-container fluid align="center">
            <v-icon size="40"> mdi-account-arrow-right-outline </v-icon>
            <h5 align="center">Postuler -vous!</h5>
          </v-container>
          <v-container fluid align="center">
            <v-card class="mx-auto" max-width="700" max-height="400">
              <v-card-title
                class="text-h6 font-weight-regular justify-space-between"
              >
                <span>{{ currentTitle }}</span>
                <v-avatar color="green" size="24" v-text="step"></v-avatar>
              </v-card-title>
              <form @submit.prevent="submit">
                <v-window v-model="step">
                  <v-window-item :value="1">
                    <v-card-text>
                      <v-row>
                        <v-col cols="12" sm="6">
                          <v-icon>mdi-account-edit</v-icon>
                          <v-text-field
                            color="success"
                            label="Nom"
                            v-model="namee"
                            placeholder="Placeholder"
                            variant="outlined"
                          ></v-text-field>
                        </v-col>
                        <v-col cols="12" sm="6">
                          <v-icon>mdi-account-edit</v-icon>
                          <v-text-field
                            color="success"
                            label="Prénom"
                            v-model="last_name"
                            placeholder="Placeholder"
                            variant="outlined"
                          ></v-text-field>
                        </v-col>
                      </v-row>
                      <v-row>
                        <v-col cols="12" sm="12">
                          <v-icon>mdi-email</v-icon>
                          <v-text-field
                            color="success"
                            v-model="email"
                            label="Email"
                            placeholder="Placeholder"
                            variant="outlined"
                          ></v-text-field>
                        </v-col>
                      </v-row>
                      <v-row>
                        <v-col cols="12" sm="12">
                          <v-icon>mdi-emoticon-outline</v-icon>
                          <v-file-input
                            label="File input"
                            outlined
                            dense
                            @change="onChange"
                          ></v-file-input>
                        </v-col>
                      </v-row>
                    </v-card-text>
                  </v-window-item>

                  <v-window-item :value="2" v-if="offres.question1 != null">
                    <v-card-text>
                      <v-row>
                        <v-col
                          cols="12"
                          sm="12"
                          v-if="offres.question1 != null"
                        >
                          <p>{{ offres.question1 }}</p>
                          <v-text-field
                            v-model="reponse1"
                            color="success"
                            label="Entrer la première réponse:"
                            placeholder="Here"
                            variant="outlined"
                          ></v-text-field>
                        </v-col>
                        <v-col
                          cols="12"
                          sm="12"
                          v-if="offres.question2 != null"
                        >
                          <p>{{ offres.question2 }}</p>
                          <v-text-field
                            v-model="reponse2"
                            color="success"
                            label="Entrer le deuxiéme réponse :"
                            placeholder="Here"
                            variant="outlined"
                          ></v-text-field>
                        </v-col>
                        <v-col
                          cols="12"
                          sm="12"
                          v-if="offres.question3 != null"
                        >
                          <p>{{ offres.question3 }}</p>
                          <v-text-field
                            v-model="reponse3"
                            color="success"
                            label="Entrer la troisiéme réponse :"
                            placeholder="Here"
                            variant="outlined"
                          ></v-text-field>
                        </v-col>
                      </v-row>
                    </v-card-text>
                  </v-window-item>
                </v-window>

                <v-divider></v-divider>

                <v-card-actions>
                  <v-btn v-if="step > 1" text @click="step--"> Back </v-btn>
                  <v-spacer></v-spacer>
                  <v-btn
                    v-if="step < 2 && offres.question1 != null"
                    color="black"
                    depressed
                    @click="step++"
                  >
                    Next
                  </v-btn>
                  <v-btn
                    v-if="offres.question1 == null"
                    color="black"
                    depressed
                    style="background-color: green"
                    type="submit"
                  >
                    Enregistrer
                  </v-btn>
                  <v-btn
                    v-if="step > 1 && offres.question1 != null"
                    color="black"
                    depressed
                    style="background-color: green"
                    type="submit"
                  >
                    Enregistrer
                  </v-btn>
                </v-card-actions>
              </form>
            </v-card>
          </v-container>
        </v-card>
      </v-dialog>
      <br /><br />
      <v-btn
        style="padding-left: 90px; padding-right: 90px"
        prepend-icon="mdi-file-download-outline"
        rounded
        flat
        variant="outlined"
        color="blue"
        @click.prevent="addfavoris"
      >
        Sauvgarder
      </v-btn>
      <br /><br />
      <v-btn
        style="padding-left: 100px; padding-right: 100px"
        prepend-icon="mdi-share-outline"
        rounded
        flat
        variant="outlined"
        color="blue"
      >
        Partager
      </v-btn>
    </v-col>
  </v-row>
  <v-divider></v-divider>
  <v-container v-if="offree != ''">
    <v-row>
      <v-col cols="12" md="2"></v-col>
      <v-col cols="12" md="8">
        <p class="text-h6 font-italic text-decoration-underline">
          Offre Similaire
        </p>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12" md="2"></v-col>
      <v-col cols="12" md="10">
        <v-row>
          <v-col cols="12" md="10">
            <h5 class="font-italic" style="color: blue">
              <router-link
                :to="{ name: 'detailpost', params: { id: offree.id } }"
                style="text-decoration: none"
                ><h5>{{ offree.poste }}</h5>
              </router-link>
            </h5>
          </v-col>
        </v-row>
        <v-row>
          <v-row>
            <v-col cols="10" md="2"></v-col>
            <p>
              <v-icon color="blue">mdi-map-marker</v-icon>
              {{ offree.lieu_travail }}
            </p>
            &nbsp;&nbsp;&nbsp;
            <p>
              <v-icon color="blue">mdi-file-document-outline</v-icon>
              {{ offree.contrat }}
            </p>
            &nbsp;&nbsp;&nbsp;
            <p>
              <v-icon color="blue">mdi-clock-outline</v-icon>
              {{ offree.temps_travail }}
            </p>
            &nbsp;&nbsp;&nbsp;
            <p>
              <v-icon color="blue">mdi-currency-usd</v-icon>
              {{ offree.salaire }}&nbsp;{{ offree.monnaie }}
            </p>
            &nbsp;&nbsp;&nbsp;
            <p>
              <v-icon color="blue">mdi-account-clock-outline</v-icon>
              {{ offree.added }}
            </p>
            &nbsp;&nbsp;&nbsp;
          </v-row>
        </v-row>
        <br />
        <p>
          {{ offree.description }}
        </p>
        <v-divider></v-divider>
      </v-col>
    </v-row>
    <br />
    <v-divider></v-divider>
  </v-container>
  <footer-view />
</template>

<script>
import NavbarView from "@/components/NavbarView.vue";
import FooterView from "@/components/FooterView.vue";
import axios from "axios";
export default {
  components: { NavbarView, FooterView },
  data() {
    return {
      showAll: false,
      dialog: false,
      notifications: false,
      sound: true,
      widgets: false,
      step: 1,
      offres: {},
      offree: {},
      id_offre: "",
      id_user: "",
      namee: "",
      last_name: "",
      email: "",
      reponse1: "",
      reponse2: "",
      reponse3: "",
      image: null,
      imgs: {},
    };
  },
  computed: {
    currentTitle() {
      switch (this.step) {
        case 1:
          return "Les Questions";
        default:
          return "Postuler Maintenant";
      }
    },
    user() {
      return this.$store.getters.get_user;
    },
  },
  created() {
    this.getOffreById(), this.getSimilaire();
  },

  methods: {
    async getOffreById() {
      let url =
        "http://localhost:8000/api/auth/afficheoffre/" + this.$route.params.id;
      await axios.get(url).then((response) => {
        this.offres = response.data;
      });
    },
    getSimilaire() {
      if (this.offres.poste != "") {
        axios
          .get("http://localhost:8000/api/auth/afficheoffresimilaire/" + "web")
          .then((response) => {
            this.offree = response.data;
            console.log(response.data);
          });
      }
    },
    async addfavoris() {
      axios
        .post(
          "http://localhost:8000/api/auth/addfavoris/" +
            this.user.id +
            "/" +
            this.offres.id,
          {
            id_offre: this.offres.id,
            id_user: this.user.id,
          }
        )
        .then((response) => {
          console.log(response);
          this.$toast.success(" Offre Sauvegarder avec success.", {
            position: "top-right",
          });
        })
        .catch((err) => {
          this.$toast.error(" Offre Sauvegarder déja.", {
            position: "top-right",
          });
          console.log(err);
        });
    },
    onChange(e) {
      console.log("selected file", e.target.files[0]);
      this.image = e.target.files[0];
    },
    submit() {
      let fd = new FormData();
      fd.append("img", this.image);
      fd.append("name", this.namee);
      fd.append("email", this.email);
      fd.append("last_name", this.last_name);
      fd.append("reponse1", this.reponse1);
      fd.append("reponse2", this.reponse2);
      fd.append("reponse3", this.reponse3);
      fd.append("id_offre", this.$route.params.id);
      fd.append("id_user", this.user.id);
      axios
        .post(
          "http://localhost:8000/api/auth/postule/" +
            this.user.id +
            "/" +
            this.$route.params.id,
          fd,
          {}
        )
        .then((res) => {
          console.log("response", res.data);
          this.$toast.success(" Postulation avec success.", {
            position: "top-right",
          });
          this.$router.go(0);
        })
        .catch((err) => {
          this.$toast.error(" Vous ete postuler déja dans cette offre .", {
            position: "top-right",
          });
          console.log(err);
        });
    },
  },
  mounted() {
    this.getSimilaire();
  },
};
</script>

<style>
.dialog-bottom-transition-enter-active,
.dialog-bottom-transition-leave-active {
  transition: transform 0.2s ease-in-out;
}
</style>
