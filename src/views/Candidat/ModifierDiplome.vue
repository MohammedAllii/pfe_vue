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
          <h5>Formations et diplômes</h5>
          <v-icon size="50">mdi-paper-cut-vertical</v-icon>
          <v-row>
            <v-col cols="12" sm="6">
              <v-text-field
                v-model="diplomes.etablissement"
                label="Établissement"
                variant="underlined"
                clearable
              ></v-text-field>
            </v-col>

            <v-col cols="12" sm="6">
              <v-text-field
                v-model="diplomes.diplome"
                label="Diplôme"
                variant="underlined"
                clearable
              ></v-text-field>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="12" sm="6">
              <v-select
                v-model="diplomes.country"
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
            <v-col cols="12" sm="6">
              <v-text-field
                v-model="diplomes.discipline"
                label="Discipline"
                variant="underlined"
                clearable
              ></v-text-field>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="12" sm="6">
              <v-text-field
                v-model="diplomes.debut"
                label="Date Début"
                type="date"
                variant="underlined"
                clearable
              ></v-text-field>
            </v-col>
            <v-col cols="12" sm="6">
              <v-text-field
                v-model="diplomes.fin"
                type="date"
                label="Date Fin"
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
                v-model="diplomes.description"
                label="Describe"
                rows="2"
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
              @click.prevent="updatediplome"
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
      diplomes: {},
      etablissement: "",
      diplome: "",
      country: "",
      debut: "",
      fin: "",
      discipline: "",
      description: "",
      idc: this.$route.params.id,
      dialog: true,
    };
  },
  created() {
    this.getDipById();
  },
  mounted() {
    this.getDipById();
  },
  methods: {
    async getDipById() {
      let url = "http://localhost:8000/api/auth/affichediplome/" + this.idc;
      await axios.get(url).then((response) => {
        this.diplomes = response.data;
        console.log(response.data);
      });
    },
    async updatediplome() {
      axios
        .post("http://localhost:8000/api/auth/modifierdiplome/" + this.idc, {
          etablissement: this.diplomes.etablissement,
          diplome: this.diplomes.diplome,
          country: this.diplomes.country,
          discipline: this.diplomes.discipline,
          debut: this.diplomes.debut,
          fin: this.diplomes.fin,
          description: this.diplomes.description,
        })
        .then((response) => {
          console.log(response);
          this.$toast.success(" Diplome modifié avec succés.", {
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
