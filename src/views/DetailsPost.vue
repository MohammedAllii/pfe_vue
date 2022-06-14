<template>
  <navbar-view />
  <br />
  <br />
  <v-container>
    <v-row>
      <v-col cols="12" md="10">
        <h5 class="text-h5 font-weight-bold">
          {{ offres.poste }}
        </h5>
      </v-col>
      <v-row>
        <v-col cols="12" md="2">
          <p>
            <v-icon color="blue">mdi-home</v-icon>
            {{ offres.name }}
          </p>
        </v-col>

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
            v-if="
              this.$store.state.loggedCompany == false &&
              this.$store.state.loggedAdmin == false &&
              offres.validation == 1 &&
              offres.nb_candidat != 0
            "
          >
            postuler
          </v-btn>
          <v-chip
            style="padding-left: 130px; padding-right: 110px"
            rounded
            flat
            variant="outlined"
            color="red"
            v-if="offres.validation == 0"
            ><v-icon>mdi-clock-alert</v-icon>
            expiré
          </v-chip>
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
                <v-avatar color="green" size="24" v-text="step"></v-avatar>
              </v-card-title>
              <form @submit.prevent="submit">
                <v-window v-model="step">
                  <v-window-item :value="1">
                    <p v-if="offres.question1 != null" style="color: red">
                      Cette offre contient des questions
                    </p>
                    <v-card-text>
                      <v-row>
                        <v-col cols="12" sm="6">
                          <v-icon>mdi-account-edit</v-icon>
                          <v-text-field
                            color="success"
                            label="Nom"
                            v-model="user.name"
                            placeholder="Placeholder"
                            variant="outlined"
                          ></v-text-field>
                        </v-col>
                        <v-col cols="12" sm="6">
                          <v-icon>mdi-account-edit</v-icon>
                          <v-text-field
                            color="success"
                            label="Prénom"
                            v-model="user.last_name"
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
                            v-model="user.email"
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
                            label="Put your cv"
                            outlined
                            dense
                            @change="onChange"
                          ></v-file-input>
                        </v-col>
                      </v-row>
                      <v-row>
                        <v-col cols="12" sm="12">
                          <v-icon>mdi-emoticon-outline</v-icon>
                          <v-file-input
                            label="Put your lettre"
                            outlined
                            dense
                            @change="onChange2"
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
                            type="number"
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
                            type="number"
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
                            type="number"
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
                  <v-btn v-if="step > 1" text @click="step--"> Retour </v-btn>
                  <v-spacer></v-spacer>
                  <v-btn
                    v-if="step < 2 && offres.question1 != null"
                    color="black"
                    style="background-color: green"
                    depressed
                    @click="step++"
                  >
                    La Partie Questions
                  </v-btn>
                  <v-btn
                    v-if="offres.question1 == null"
                    color="black"
                    depressed
                    style="background-color: green"
                    type="submit"
                  >
                    Postuler
                  </v-btn>
                  <v-btn
                    v-if="step > 1 && offres.question1 != null"
                    color="black"
                    depressed
                    style="background-color: green"
                    type="submit"
                  >
                    Postuler
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
        v-if="
          this.$store.state.loggedCompany == false &&
          this.$store.state.loggedAdmin == false
        "
      >
        Sauvgarder
      </v-btn>
      <br /><br />
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
    <v-row v-if="offree != ''">
      <v-col cols="12" md="2"></v-col>
      <v-col cols="12" md="10">
        <v-row>
          <v-col cols="12" md="10">
            <h5 class="font-italic" style="color: blue">
              <a
                :href="
                  $router.resolve({
                    name: 'detailpost',
                    params: { id: offree.id },
                  }).href
                "
                style="text-decoration: none"
                >{{ offree.poste }}</a
              >
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
      name_candidat: "",
      last_name_candidat: "",
      email: "",
      reponse1: "",
      reponse2: "",
      reponse3: "",
      similaire: "",
      image: null,
      image1: null,
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
        this.similaire = this.offres.lieu_travail;
        console.log(this.similaire);
      });
    },
    getSimilaire() {
      if (this.offres.poste != "") {
        axios
          .get(
            "http://localhost:8000/api/auth/afficheoffresimilaire/" + "Ariana"
          )
          .then((response) => {
            this.offree = response.data;
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
    onChange2(f) {
      console.log("selected file", f.target.files[0]);
      this.image1 = f.target.files[0];
      if (!this.image1) {
        f.target.files[0] == null;
      }
    },
    submit() {
      let fd = new FormData();
      fd.append("img", this.image);
      fd.append("lettre", this.image1);
      fd.append("name_candidat", this.user.name);
      fd.append("email", this.user.email);
      fd.append("last_name_candidat", this.user.last_name);
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
