<template>
  <v-row justify="center">
    <v-dialog v-model="dialog" fullscreen>
      <v-card>
        <v-toolbar dark color="green">
          <v-btn icon dark @click.prevent="retour">
            <v-icon>mdi-close</v-icon>
          </v-btn>
          <v-toolbar-title>close</v-toolbar-title>
          <v-spacer></v-spacer>
        </v-toolbar>
        <v-container fluid align="center">
          <h5>Expériences professionnelles</h5>
          <v-icon size="50">mdi-clipboard-check-outline</v-icon>
          <v-row>
            <v-col cols="12" sm="6">
              <v-text-field
                v-model="experiences.poste"
                label="Poste"
                variant="underlined"
                clearable
              ></v-text-field>
            </v-col>

            <v-col cols="12" sm="6">
              <v-text-field
                v-model="experiences.name_company"
                label="Nom de société"
                variant="underlined"
                clearable
              ></v-text-field>
            </v-col>
          </v-row>
          <v-col cols="12" sm="6">
            <v-select
              v-model="experiences.country"
              label="Country?"
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
          <v-row>
            <v-col cols="12" sm="6">
              <v-text-field
                v-model="experiences.debut"
                label="Date Début"
                variant="underlined"
                type="date"
                clearable
              ></v-text-field>
            </v-col>
            <v-col cols="12" sm="6">
              <v-text-field
                v-model="experiences.fin"
                label="Date Fin"
                type="date"
                variant="underlined"
                clearable
              ></v-text-field>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="12" sm="6">
              <v-textarea
                filled
                auto-grow
                rows="2"
                v-model="experiences.description"
                row-height="20"
              ></v-textarea>
            </v-col>
          </v-row>

          <v-row>
            <v-btn text rounded @click="isActive.value = false">Annuler</v-btn>
            <v-spacer></v-spacer>
            <v-btn
              text
              rounded
              style="background-color: green"
              @click.prevent="updateexperience"
              >Enregistrer</v-btn
            >
          </v-row>
        </v-container>
      </v-card>
    </v-dialog>
  </v-row>
</template>
<script>
import axios from "axios";
export default {
  data() {
    return {
      experiences: {},
      poste: "",
      name_company: "",
      country: "",
      debut: "",
      fin: "",
      description: "",
      idc: this.$route.params.id,
      dialog: true,
    };
  },
  created() {
    this.getExpById();
  },
  mounted() {
    this.getExpById();
  },
  methods: {
    async getExpById() {
      let url = "http://localhost:8000/api/auth/afficheexperience/" + this.idc;
      await axios.get(url).then((response) => {
        this.experiences = response.data;
        console.log(response.data);
      });
    },
    async updateexperience() {
      axios
        .post("http://localhost:8000/api/auth/modifierexperience/" + this.idc, {
          poste: this.experiences.poste,
          name_company: this.experiences.name_company,
          country: this.experiences.country,
          debut: this.experiences.debut,
          fin: this.experiences.fin,
          description: this.experiences.description,
        })
        .then((response) => {
          console.log(response);
          this.$toast.success(" Expérience modifié avec succés.", {
            position: "top-right",
          });
          this.$router.back();
        })
        .catch((err) => {
          this.error = " impossible de changer info personnels";
          console.log(err.message);
        });
    },
    retour() {
      this.$router.back();
    },
  },
};
</script>

<style>
.dialog-bottom-transition-enter-active,
.dialog-bottom-transition-leave-active {
  transition: transform 0.2s ease-in-out;
}
</style>
