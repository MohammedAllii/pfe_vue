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
              <v-btn
                flat
                rounded
                prepend-icon="mdi-card-text-outline"
                title="Candidatures"
                value=" Candidatures"
                to="CandidatureCompany"
                >Candidatures</v-btn
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
        <br />
        <v-row>
          <v-col cols="12" md="6">
            <h5 class="font-weight-bold">Gérez vos Postes</h5>
          </v-col>
          <v-col cols="12" md="6">
            <v-btn
              prepend-icon="mdi-file-download-outline"
              rounded
              flat
              color="blue"
              to="PosteCompany"
              >Publier une nouvelle Poste</v-btn
            >
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12" md="12">
            <v-tabs v-model="tab">
              <v-tab @click.prevent="alloffres" value="one">All Posts</v-tab>
              <v-tab value="two">En attente</v-tab>
              <v-tab value="three">sauvgardés</v-tab>
            </v-tabs>

            <v-card-text>
              <v-window v-model="tab">
                <v-window-item
                  v-for="offre in offres"
                  :key="offre.id"
                  value="one"
                >
                  <v-row>
                    <v-col cols="12" md="12">
                      <v-row>
                        <v-col cols="12" md="12">
                          <h5 class="font-italic" style="color: blue">
                            {{ offre.poste }}
                          </h5>
                          <v-col cols="12">
                            <v-icon color="blue" size="25"
                              >mdi-map-marker</v-icon
                            ><strong style="font-size: 20px">{{
                              offre.lieu_travail
                            }}</strong
                            ><br />
                            <v-icon color="blue" size="25"
                              >mdi-currency-usd</v-icon
                            ><strong style="font-size: 20px">{{
                              offre.salaire
                            }}</strong>
                            <p>
                              {{ offre.description }}
                            </p>
                            <v-chip
                              class="ma-2"
                              color="success"
                              variant="outlined"
                            >
                              <v-icon start icon="mdi-progress-clock"></v-icon>
                              {{ offre.added }}
                            </v-chip>

                            <v-chip
                              class="ma-2"
                              color="primary"
                              variant="outlined"
                            >
                              postuler facilement
                              <v-icon end icon="mdi-face"></v-icon>
                            </v-chip>
                          </v-col>
                        </v-col>
                      </v-row>
                    </v-col>
                  </v-row>
                </v-window-item>
              </v-window>
            </v-card-text>
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
    offres: {},
    tab: null,
  }),
  mounted() {
    this.alloffres();
  },
  methods: {
    async alloffres() {
      let url = "http://localhost:8000/api/auth/alloffres";
      await axios.get(url).then((response) => {
        this.offres = response.data;
      });
    },
  },
};
</script>
<style></style>
