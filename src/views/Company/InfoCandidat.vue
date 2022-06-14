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
          <p>
            <v-icon color="green">mdi-human-male-female</v-icon
            >{{ info.civilite }}
          </p>
        </v-col>
        <v-col cols="12" md="2" v-if="info.date_naissance != null">
          <p>
            <v-icon color="green">mdi-account</v-icon>{{ info.date_naissance }}
          </p>
        </v-col>
      </v-row>
      <br /><br />
      <v-row>
        <v-btn
          variant="outlined"
          color="green"
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
          color="red"
          rounded
          flat
          prepend-icon="mdi-emoticon-dead-outline"
          class="ma-2"
          href="mailto:?subject=désolé, vous n'êtes pas assez qualifié pour ce travail, bonne chance pour la prochaine fois "
        >
          Candidate réfusé
        </v-btn>
        <v-container v-if="info.valide == 0">
          <p style="color: red">Vous acceptez ce Candidat?</p>
          <p>
            <img
              src="https://i.gifer.com/origin/41/41340ab1a4529c7dd753f03268087e08.gif"
              style="width: 60px; height: 60px"
            />
            <v-btn transparent flat rounded @click="snackbar = true">
              Accepter Ce Candidat
            </v-btn>

            <v-snackbar v-model="snackbar" multi-line>
              {{ text }}

              <template v-slot:actions>
                <v-btn
                  color="red"
                  variant="text"
                  @click.prevent="acceptercandidat"
                >
                  Accepter
                </v-btn>
                <v-btn color="red" variant="text" @click="snackbar = false">
                  Annuler
                </v-btn>
              </template>
            </v-snackbar>
          </p>

          <p>
            <img
              src="https://c.tenor.com/hmbt9N7tR0gAAAAj/incorrect-nah.gif"
              style="width: 60px; height: 60px"
            />
            <v-btn transparent flat rounded @click="snackbar1 = true">
              Réfuser Ce Candidat
            </v-btn>

            <v-snackbar v-model="snackbar1" multi-line>
              {{ text1 }}

              <template v-slot:actions>
                <v-btn
                  color="red"
                  variant="text"
                  @click.prevent="refusercandidat"
                >
                  Accepter
                </v-btn>
                <v-btn color="red" variant="text" @click="snackbar1 = false">
                  Annuler
                </v-btn>
              </template>
            </v-snackbar>
          </p>
        </v-container>
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
      <v-container align="center">
        <h5 style="color: #0277bd">
          <v-icon color="#01579B">mdi-folder-account-outline</v-icon>Insights
          from profile
        </h5>
      </v-container>
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
      snackbar1: false,
      snackbar: false,
      etat_accepter: 1,
      etat_refuser: -1,
      valide: "",
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
      });
    },
    async acceptercandidat() {
      if (this.info.nb_candidat > 0) {
        axios
          .post(
            "http://localhost:8000/api/auth/acceptercandidat/" +
              this.$route.query.id_user +
              "/" +
              this.$route.query.id_offre,
            {
              valide: this.etat_accepter,
            }
          )
          .then((response) => {
            console.log(response);
            this.$toast.success(" Candidat accepter.", {
              position: "top-right",
            });
            this.$router.go(0);
          })
          .catch((err) => {
            this.error = err;
          });
      } else {
        this.$toast.error("nombre des candidatures épuisé.", {
          position: "top-right",
        });
      }
    },
    async refusercandidat() {
      axios
        .post(
          "http://localhost:8000/api/auth/refusercandidat/" +
            this.$route.query.id_user,
          {
            valide: this.etat_refuser,
          }
        )
        .then((response) => {
          console.log(response);
          this.$toast.success(" Candidat refuser.", {
            position: "top-right",
          });
          this.$router.go(0);
        })
        .catch((err) => {
          this.error = err;
          this.$toast.error(" Candidat refuser.", {
            position: "top-right",
          });
        });
    },
  },
};
</script>

<style></style>
