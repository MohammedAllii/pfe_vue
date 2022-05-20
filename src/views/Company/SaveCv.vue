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
        <v-icon size="40" color="green">mdi-file-document</v-icon>
        <h5 class="font-weight-medium">Enregistrement des CV's</h5>
        <v-divider></v-divider>

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

                    <v-col class="hidden-xs-only text-left ml-2" sm="5" md="3">
                      <span v-if="cv.name" class="text-grey">
                        &nbsp;{{ cv.name }} {{ cv.last_name }}
                      </span>
                    </v-col>
                    <strong v-html="cv.poste"></strong>
                  </v-row>
                </v-expansion-panel-title>

                <v-expansion-panel-text>
                  <v-card-text
                    class="text-body-1 font-italic"
                    v-text="cv.resume"
                  ></v-card-text>
                  <v-card-text
                    class="text-body-1 font-italic"
                    v-text="cv.date_naissance"
                  ></v-card-text>
                  <v-card-text
                    class="text-body-1 font-italic"
                    v-text="cv.phone"
                  ></v-card-text>
                  <v-card-text
                    class="text-body-1 font-italic"
                    v-text="cv.email"
                  ></v-card-text>
                  <v-card-text
                    class="font-weight-bold"
                    v-text="cv.interet"
                  ></v-card-text>
                  <v-card-text
                    class="font-weight-bold"
                    v-text="cv.skills"
                  ></v-card-text>
                  <v-card-text
                    class="font-weight-bold"
                    v-text="parag3"
                  ></v-card-text>
                  <v-col>
                    <v-hover v-slot="{ isHovering, props }" open-delay="200">
                      <v-btn
                        :elevation="isHovering ? 16 : 2"
                        :class="{ 'on-hover': isHovering }"
                        v-bind="props"
                        variant="outlined"
                        @click.prevent="deletecvsave(cv.id)"
                        rounded
                        prepend-icon="mdi-content-save"
                        >Delete Cv</v-btn
                      >
                    </v-hover>
                  </v-col>
                </v-expansion-panel-text>
              </v-expansion-panel>
              <br />
            </v-expansion-panels>
            <br />
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12" md="4"></v-col>
          <v-col cols="12" md="6">
            <v-btn
              flat
              rounded
              color="#B2FF59"
              style="padding-left: 100px; padding-right: 100px"
              @click="snackbar = true"
              ><v-icon>mdi-delete-circle-outline</v-icon> tous les CV</v-btn
            >
            <v-snackbar v-model="snackbar" multi-line>
              {{ text }}

              <template v-slot:actions>
                <v-btn
                  color="red"
                  variant="text"
                  @click.prevent="deleteallcvsave"
                >
                  Supprimer
                </v-btn>
                <v-btn color="red" variant="text" @click="snackbar = false">
                  Annuler
                </v-btn>
              </template>
            </v-snackbar>
          </v-col>
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
    snackbar: false,
    text: "would you like to delete all CVs?",
  }),
  computed: {
    user() {
      return this.$store.getters.get_user;
    },
  },
  mounted() {
    this.getcvs();
  },
  methods: {
    async getcvs() {
      let url = "http://localhost:8000/api/auth/getcvs/" + this.user.id;
      await axios.get(url).then((response) => {
        this.cvs = response.data;
      });
    },
    async deletecvsave($id) {
      axios
        .delete(
          "http://localhost:8000/api/auth/deletecvsave/" +
            $id +
            "/" +
            this.user.id,
          {}
        )
        .then((response) => {
          console.log(response);
          this.$toast.success(" Cv Deleted.", {
            position: "top-right",
          });
          this.$router.go(0);
        })
        .catch((err) => {
          this.error = err;
          this.$toast.error(" Cv non Deleted.", {
            position: "top-right",
          });
        });
    },
    async deleteallcvsave() {
      axios
        .delete(
          "http://localhost:8000/api/auth/deleteallcvsave/" + +this.user.id,
          {}
        )
        .then((response) => {
          console.log(response);
          this.$toast.success("All Cvs Deleted.", {
            position: "top-right",
          });
          this.$router.go(0);
        })
        .catch((err) => {
          this.error = err;
          this.$toast.error(" Cvs non Deleted.", {
            position: "top-right",
          });
        });
    },
  },
};
</script>
<style></style>
