<template>
  <navbar-view />
  <v-divider></v-divider>
  <div>
    <v-row>
      <v-col cols="12" md="4">
        <v-col>
          <p class="font-weight-bold">Vos offres d'emploi</p>
        </v-col>
        <v-layout>
          <v-navigation-drawer floating permanent>
            <v-list density="compact" nav>
              <v-btn
                flat
                rounded
                prepend-icon=" mdi-publish"
                title="  Publiez vos offres"
                value="  Publiez vos offres"
                to="PosteCompany"
                >Publiez vos offres</v-btn
              >
              <br /><br />
              <v-btn
                flat
                rounded
                prepend-icon="mdi-content-paste"
                title=" gérer vos offres"
                value=" gérer vos offres"
                to="GerePoste"
                >gérer vos offres</v-btn
              >
              <br /><br />
              <v-btn
                flat
                rounded
                prepend-icon="mdi-forum"
                title="Statistiques"
                value="Statistiques"
                to="StatistCompany"
                >Statistiques</v-btn
              >
              <br /><br />
              <v-col>
                <p class="font-weight-bold">Accès à la CVthèque</p>
              </v-col>
              <v-btn
                flat
                rounded
                prepend-icon="mdi-magnify"
                title=" Rechercher des CV's"
                value="Rechercher des CV's"
                to="RechercheCv"
                >Rechercher des CV's</v-btn
              >
              <br /><br />
              <v-btn
                flat
                rounded
                prepend-icon=" mdi-briefcase-download-outline"
                title="CV's sauvgardés"
                value="CV's sauvgardés"
                to="SaveCv"
                >CV's sauvgardés</v-btn
              >
              <br /><br />
            </v-list>
          </v-navigation-drawer>
          <v-main style="height: 750px"></v-main>
        </v-layout>
      </v-col>
      <v-col cols="12" md="8">
        <h5 class="font-weight-bold">Publier vos Postes</h5>
        <v-col cols="12" md="12">
          <p>Poste *</p>
          <v-text-field
            label="ex:developeur Web"
            v-model="poste"
            prepend-inner-icon="mdi-account-network"
            placeholder="Placeholder"
            variant="outlined"
          ></v-text-field>
        </v-col>
        <v-row>
          <v-col cols="12" md="6">
            <p>Lieu de Travail *</p>
            <v-select
              v-model="lieu_travail"
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
            <p>Date d'expiration offre *</p>
            <v-text-field
              v-model="date_expiration"
              type="date"
              variant="outlined"
              prepend-inner-icon="mdi-clock"
            ></v-text-field>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12" md="6">
            <p>Type de Contrat *</p>
            <v-select
              v-model="contrat"
              label="Type de Contrat"
              :items="['CDI', 'CDD', 'Contrat', 'Stage', 'Volontariat']"
            ></v-select>
          </v-col>
          <v-col cols="12" md="6">
            <p>Temps du travail *</p>
            <v-select
              v-model="temps_travail"
              label="Temp du travail "
              :items="['Temps-partiel', 'Temps-plein']"
            ></v-select>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12" md="6">
            <p>Salaire *</p>
            <v-text-field
              v-model="salaire"
              type="number"
              onkeyup="if(this.value<0){this.value= this.value * -1}"
              label="max/min tout les deux "
              placeholder="Placeholder"
              variant="outlined"
              prepend-inner-icon="mdi-cash-usd"
            ></v-text-field>
          </v-col>
          <v-col cols="12" md="3">
            <p>Monnaie *</p>
            <v-select
              v-model="monnaie"
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
            <p>Choisissez la période *</p>
            <v-select
              v-model="periode"
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
          <v-col cols="12" md="6">
            <p>Nombre des Candidats demander *</p>
            <v-text-field
              v-model="nb_candidat"
              type="number"
              onkeyup="if(this.value<0){this.value= this.value * -1}"
              label="Nombre des candidats demander pour cette poste "
              placeholder="Placeholder"
              variant="outlined"
              prepend-inner-icon="mdi-cash-usd"
            ></v-text-field>
          </v-col>
        </v-row>
        <v-row>
          <p>Description de l'offre d'emploi *</p>
          <v-col cols="12" md="12">
            <v-textarea
              v-model="description"
              prepend-inner-icon="mdi-file-document-edit-outline"
              background-color="grey lighten-2"
              color="cyan"
              label="Votre message"
            ></v-textarea>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12" md="12">
            <p>Allez-nous a la partie questionnaires?</p>
            <v-col cols="12" sm="12">
              <v-icon>mdi-account-edit</v-icon>
              <v-text-field
                v-model="question1"
                color="success"
                label="Entrer Votre Premiére Question:"
                placeholder="Placeholder"
                variant="outlined"
              ></v-text-field>
            </v-col>
            <v-col cols="12" sm="12" v-if="this.question1 != ''">
              <v-icon>mdi-account-edit</v-icon>
              <v-text-field
                v-model="question2"
                color="success"
                label="Entrer Votre Deuxiéme Question:"
                placeholder="Placeholder"
                variant="outlined"
              ></v-text-field>
            </v-col>
            <v-col cols="12" sm="12" v-if="this.question2 != ''">
              <v-icon>mdi-account-edit</v-icon>
              <v-text-field
                v-model="question3"
                color="success"
                label="Entrer Votre Troisiéme Question:"
                placeholder="Placeholder"
                variant="outlined"
              ></v-text-field>
            </v-col>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12" md="12">
            <p>* : Ce sont les champs obligatoires</p>
          </v-col></v-row
        >
        <v-row>
          <v-col cols="12" md="4"> </v-col>
          <v-col cols="12" md="8">
            <v-btn
              prepend-icon=" mdi-truck-check"
              variant="outlined"
              color="green"
              @click.prevent="addposte"
            >
              Valider le contenu!
            </v-btn>
          </v-col>
          <v-alert type="error" v-if="error">{{ error }}</v-alert>
        </v-row>
      </v-col>
    </v-row>
  </div>
  <v-divider></v-divider>
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
      radios: "oui",
      poste: "",
      lieu_travail: "",
      date_expiration: "",
      contrat: "",
      temps_travail: "",
      salaire: "",
      monnaie: "",
      periode: "",
      nb_candidat: "",
      description: "",
      question1: "",
      question2: "",
      question3: "",
      id_company: "",
      error: "",
      success: "",
    };
  },
  computed: {
    user() {
      return this.$store.getters.get_user;
    },
  },
  methods: {
    async addposte() {
      if (this.poste == "") {
        this.$toast.error(" Champ poste vide.", {
          position: "top-right",
        });
      } else if (this.lieu_travail == "") {
        this.$toast.error(" Champ Lieu vide.", {
          position: "top-right",
        });
      } else if (this.date_expiration == "") {
        this.$toast.error(" Champ Date d'expiration vide.", {
          position: "top-right",
        });
      } else if (this.contrat == "") {
        this.$toast.error(" Champ contrat vide.", {
          position: "top-right",
        });
      } else if (this.temps_travail == "") {
        this.$toast.error(" Champ temp du travail vide.", {
          position: "top-right",
        });
      } else if (this.salaire == "") {
        this.$toast.error(" Champ salaire vide.", {
          position: "top-right",
        });
      } else if (this.monnaie == "") {
        this.$toast.error(" Champ monnaie vide.", {
          position: "top-right",
        });
      } else if (this.periode == "") {
        this.$toast.error(" Champ periode vide.", {
          position: "top-right",
        });
      } else if (this.description == "") {
        this.$toast.error(" Champ description vide.", {
          position: "top-right",
        });
      } else if (this.nb_candidat == "") {
        this.$toast.error(" Champ nombre de candidat vide.", {
          position: "top-right",
        });
      }
      axios
        .post("http://localhost:8000/api/auth/registeroffre", {
          poste: this.poste,
          lieu_travail: this.lieu_travail,
          date_expiration: this.date_expiration,
          contrat: this.contrat,
          temps_travail: this.temps_travail,
          salaire: this.salaire,
          monnaie: this.monnaie,
          nb_candidat: this.nb_candidat,
          periode: this.periode,
          description: this.description,
          question1: this.question1,
          question2: this.question2,
          question3: this.question3,
          id_company: this.user.id,
        })
        .then((response) => {
          console.log(response);
          this.$toast.success(" Bravo.", {
            position: "top-right",
          });
          this.$router.go(0);
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>
<style></style>
