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
        <v-row>
          <v-col cols="12" md="12">
            <br /><br />
            <v-icon color="green" size="40">mdi-magnify</v-icon>
            <h5 class="font-weight-bold">La Recherche des CV's</h5>
          </v-col>
          <v-divider></v-divider>
        </v-row>
        <v-row>
          <v-col cols="12" md="12">
            <v-toolbar dense floating>
              <v-text-field
                hide-details
                @keyup="recherchecv"
                v-model="recherche"
                prepend-icon="mdi-magnify"
                single-line
                style="width: 600px"
              ></v-text-field>
            </v-toolbar>
          </v-col>
          <v-row>
            <v-col cols="12" md="10">
              <v-expansion-panels variant="popout" class="pa-4">
                <v-expansion-panel v-for="cv in cvs" :key="cv.id">
                  <v-expansion-panel-title>
                    <v-row align="center" class="spacer" no-gutters>
                      <v-col cols="4" sm="2" md="1">
                        <v-avatar size="50px">
                          <v-img v-bind:src="'../cvs/' + cv.avatar_cv"></v-img>
                        </v-avatar>
                      </v-col>

                      <v-col
                        class="hidden-xs-only text-left ml-2"
                        sm="5"
                        md="3"
                      >
                        <span v-if="cv.name" class="text-green">
                          &nbsp;{{ cv.name }} {{ cv.last_name }}
                        </span>
                      </v-col>
                      <strong v-html="cv.poste"></strong>
                    </v-row>
                  </v-expansion-panel-title>

                  <v-expansion-panel-text>
                    <p>
                      <v-icon color="blue">mdi-clipboard-text</v-icon>
                      {{ cv.resume }}
                    </p>
                    <p>
                      <v-icon color="blue">mdi-cake-layered</v-icon>
                      {{ cv.date_naissance }}
                    </p>
                    <p>
                      <v-icon color="green">mdi-phone</v-icon>
                      {{ cv.phone }}
                    </p>
                    <p>
                      <v-icon color="blue">mdi-email-open-multiple</v-icon>
                      {{ cv.email }}
                    </p>
                    <p>
                      <v-icon color="blue">mdi-gamepad-variant</v-icon>
                      {{ cv.interet }}
                    </p>
                    <p>
                      <v-icon color="blue">mdi-format-textbox</v-icon>
                      {{ cv.skills }}
                    </p>
                    <v-col>
                      <v-hover v-slot="{ isHovering, props }" open-delay="200">
                        <v-btn
                          :elevation="isHovering ? 16 : 2"
                          :class="{ 'on-hover': isHovering }"
                          v-bind="props"
                          variant="outlined"
                          @click.prevent="addfavoriscv(cv.id)"
                          rounded
                          prepend-icon="mdi-content-save"
                          >Save Cv</v-btn
                        >
                      </v-hover>
                    </v-col>
                  </v-expansion-panel-text>
                  <br />
                </v-expansion-panel>
                <br /><br />
              </v-expansion-panels>
              <br /><br />
            </v-col>
          </v-row>
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
  data: () => ({
    cvs: {},
    recherche: "",
    id_cv: "",
    id_user: "",
  }),
  mounted() {
    this.allCvs();
  },
  computed: {
    user() {
      return this.$store.getters.get_user;
    },
  },
  methods: {
    async allCvs() {
      axios.get("http://localhost:8000/api/auth/allCvs").then((response) => {
        this.cvs = response.data;
        console.log(response.data);
      });
    },
    recherchecv() {
      if (this.recherche.length > 1) {
        axios
          .get("http://localhost:8000/api/auth/recherchecv/" + this.recherche)
          .then((response) => {
            this.cvs = response.data;
          });
      } else {
        axios.get("http://localhost:8000/api/auth/allCvs").then((response) => {
          this.cvs = response.data;
          console.log(response.data);
        });
      }
    },
    async addfavoriscv($id) {
      axios
        .post(
          "http://localhost:8000/api/auth/addfavoriscv/" +
            this.user.id +
            "/" +
            $id,
          {
            id_cv: $id,
            id_user: this.user.id,
          }
        )
        .then((response) => {
          console.log(response);
          this.$toast.success(" Cv Sauvegarder avec success.", {
            position: "top-right",
          });
        })
        .catch((err) => {
          this.$toast.error(" Cv Sauvegarder déja.", {
            position: "top-right",
          });
          console.log(err);
        });
    },
  },
};
</script>
<style></style>
