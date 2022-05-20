<template>
  <navbar-view />
  <v-container align="center">
    <h5 class="font-italic" style="color: #3e2723">
      <v-icon>mdi-border-color</v-icon> Modifier Les informations de l'Offre
    </h5>
    <v-container fluid align="center">
      <v-row>
        <v-col cols="12" md="12">
          <v-col cols="12" md="12">
            <p>Poste</p>
            <v-text-field
              label="ex:developeur Web"
              v-model="offre.poste"
              prepend-inner-icon="mdi-account-network"
              placeholder="Placeholder"
              variant="outlined"
            ></v-text-field>
          </v-col>
          <v-row>
            <v-col cols="12" md="6">
              <p>Lieu de Travail</p>
              <v-select
                v-model="offre.lieu_travail"
                label="Votre Lieu de travail"
                :items="[
                  'Ariana',
                  'Béja',
                  'Ben Arous',
                  'Bizerte',
                  'Gabès',
                  'Gafsa',
                  'Jendouba',
                  'Kairouan',
                  'Kasserine',
                  'Kébili',
                  'Kef',
                  'Mahdia',
                  'Manouba',
                  'Médenine',
                  'Monastir',
                  'Nabeul',
                  'Sfax',
                  'Sidi Bouzid',
                  ' Siliana',
                  'Sousse',
                  ' Tataouine',
                  'Tozeur',
                  'Tunis',
                  'Zaghouan',
                ]"
              ></v-select>
            </v-col>
            <v-col cols="12" md="6">
              <p>Pays</p>
              <v-select
                v-model="offre.pays"
                label="Votre pays ..."
                :items="[
                  'Tunisie',
                  'Algérie',
                  'Argentine',
                  'Belgique',
                  'Brésil',
                  'Bulgarie',
                  'Canada',
                  'Chine',
                  'Croatie',
                  'Danemark',
                  'Égypte',
                  'France',
                  'Allemagne',
                  'Italie',
                  'Japon',
                  'Koweït',
                  'Libye',
                  'Mauritanie',
                  'Maroc',
                  'Norvège',
                  'Qatar',
                  'Russie',
                  'Arabie Saoudite',
                  'Suède',
                  'Suisse',
                  'Turquie',
                  'Ukraine',
                  'États-Unis',
                  'Émirats Arabes Unis',
                  'Yémen',
                ]"
              ></v-select>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="12" md="6">
              <p>Type de Contrat</p>
              <v-select
                v-model="offre.contrat"
                label="Type de Contrat"
                :items="['CDI', 'CDD', 'Contrat', 'Stage', 'Volontariat']"
              ></v-select>
            </v-col>
            <v-col cols="12" md="6">
              <p>Temps du travail</p>
              <v-select
                v-model="offre.temps_travail"
                label="Temp du travail "
                :items="['Temps-partiel', 'Temps-plein']"
              ></v-select>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="12" md="6">
              <p>Salaire</p>
              <v-text-field
                label="max/min tout les deux "
                v-model="offre.salaire"
                placeholder="Placeholder"
                variant="outlined"
                prepend-inner-icon="mdi-cash-usd"
              ></v-text-field>
            </v-col>
            <v-col cols="12" md="3">
              <p>Monnaie</p>
              <v-select
                v-model="offre.monnaie"
                label="Monnaie"
                :items="[
                  'DT',
                  'EUR',
                  'RUB',
                  'QAR',
                  'USD',
                  'LYD',
                  'KWD',
                  'JPY',
                  'DZD',
                ]"
              ></v-select>
            </v-col>
            <v-col cols="12" md="3">
              <p>Choisissez la période</p>
              <v-select
                v-model="offre.periode"
                label="Période"
                :items="[
                  'Par heure',
                  'Par jour',
                  'Par semaine',
                  'Par mois',
                  'Par an',
                ]"
              ></v-select>
            </v-col>
          </v-row>
          <v-row>
            <p>Description de l'offre d'emploi *</p>
            <v-col cols="12" md="12">
              <v-textarea
                v-model="offre.description"
                prepend-inner-icon="mdi-file-document-edit-outline"
                background-color="grey lighten-2"
                color="cyan"
                label="Votre message"
              ></v-textarea>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="12" md="2"> </v-col>
            <v-col cols="12" md="8">
              <v-btn
                prepend-icon=" mdi-truck-check"
                variant="outlined"
                color="green"
                @click.prevent="updatepost"
              >
                Valider le contenu!
              </v-btn>
            </v-col>
          </v-row>
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
  components: { NavbarView, FooterView },
  data: () => ({
    offre: {},
    poste: "",
    lieu_travail: "",
    pays: "",
    contrat: "",
    temps_travail: "",
    salaire: "",
    monnaie: "",
    periode: "",
    description: "",
    question1: "",
    question2: "",
    question3: "",
  }),
  mounted() {
    this.getOffreById();
  },
  methods: {
    async getOffreById() {
      let url =
        "http://localhost:8000/api/auth/afficheoffre/" + this.$route.params.id;
      await axios.get(url).then((response) => {
        this.offre = response.data;
      });
    },
    async updatepost() {
      if (this.offre.poste == "") {
        this.$toast.error(" Champ poste vide.", {
          position: "top-right",
        });
      } else if (this.offre.lieu_travail == "") {
        this.$toast.error(" Champ Lieu vide.", {
          position: "top-right",
        });
      } else if (this.offre.pays == "") {
        this.$toast.error(" Champ pays vide.", {
          position: "top-right",
        });
      } else if (this.offre.contrat == "") {
        this.$toast.error(" Champ contrat vide.", {
          position: "top-right",
        });
      } else if (this.offre.temps_travail == "") {
        this.$toast.error(" Champ temp du travail vide.", {
          position: "top-right",
        });
      } else if (this.offre.salaire == "") {
        this.$toast.error(" Champ salaire vide.", {
          position: "top-right",
        });
      } else if (this.offre.monnaie == "") {
        this.$toast.error(" Champ monnaie vide.", {
          position: "top-right",
        });
      } else if (this.offre.periode == "") {
        this.$toast.error(" Champ periode vide.", {
          position: "top-right",
        });
      } else if (this.offre.description == "") {
        this.$toast.error(" Champ description vide.", {
          position: "top-right",
        });
      }
      axios
        .post(
          "http://localhost:8000/api/auth/updatepost/" + this.$route.params.id,
          {
            poste: this.offre.poste,
            lieu_travail: this.offre.lieu_travail,
            pays: this.offre.pays,
            contrat: this.offre.contrat,
            temps_travail: this.offre.temps_travail,
            salaire: this.offre.salaire,
            monnaie: this.offre.monnaie,
            periode: this.offre.periode,
            description: this.offre.description,
            question1: this.offre.question1,
            question2: this.offre.question2,
            question3: this.offre.question3,
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

<style></style>
