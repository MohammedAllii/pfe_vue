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
      <v-col>
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
          <v-col>
            <v-tabs>
              <v-tab @click.prevent="alloffres"> All postes </v-tab>
              <v-tab @click.prevent="enattente"> En Attente </v-tab>
              <v-tab @click.prevent="accepter"> Accepter </v-tab>
            </v-tabs>

            <v-card-text>
              <v-container>
                <v-banner color="grey" v-for="offre in offres" :key="offre.id">
                  <v-banner-text>
                    <router-link
                      :to="{ name: 'modifierpost', params: { id: offre.id } }"
                      style="text-decoration: none; color: blue"
                      ><h5>{{ offre.poste }}</h5>
                    </router-link>
                    <br />
                    <v-col cols="12">
                      <v-row>
                        <v-row>
                          <v-row>
                            <v-col cols="10" md="2"></v-col>
                            <p>
                              <v-icon color="blue">mdi-map-marker</v-icon>
                              <strong>{{ offre.lieu_travail }}</strong>
                            </p>
                            &nbsp;&nbsp;&nbsp;
                            <p>
                              <v-icon color="blue"
                                >mdi-file-document-outline</v-icon
                              >
                              <strong>{{ offre.contrat }}</strong>
                            </p>
                            &nbsp;&nbsp;&nbsp;
                            <p>
                              <v-icon color="blue">mdi-clock-outline</v-icon>
                              <strong>{{ offre.temps_travail }}</strong>
                            </p>
                            &nbsp;&nbsp;&nbsp;
                            <p>
                              <v-icon color="blue">mdi-currency-usd</v-icon>
                              <strong>{{ offre.salaire }}</strong
                              >&nbsp;<strong>{{ offre.monnaie }}</strong>
                            </p>
                            &nbsp;&nbsp;&nbsp;
                          </v-row>
                        </v-row>
                        &nbsp;&nbsp;&nbsp;
                      </v-row>
                      <br />
                      <p v-if="offre.description.length > 5">
                        {{
                          showAll
                            ? offre.description
                            : offre.description.slice(0, 60) + "..."
                        }}
                      </p>
                      <v-chip class="ma-2" color="success" variant="outlined">
                        <v-icon start icon="mdi-progress-clock"></v-icon>
                        {{ offre.added }}
                      </v-chip>

                      <v-chip
                        class="ma-2"
                        color="orange"
                        variant="outlined"
                        v-if="offre.etat == 0"
                      >
                        <v-icon start icon="mdi-progress-clock"></v-icon>
                        En attente
                      </v-chip>
                      <v-chip
                        class="ma-2"
                        color="green"
                        variant="outlined"
                        v-if="offre.etat == 1"
                      >
                        <v-icon start icon="mdi-progress-clock"></v-icon>
                        Accepter
                      </v-chip>
                      <v-chip class="ma-2" color="#4dd3bd" variant="outlined">
                        <v-icon start icon="mdi-counter"></v-icon>
                        {{ offre.nb_candidat }} Candidat demandé
                      </v-chip>
                      <v-chip
                        class="ma-2"
                        color="success"
                        variant="outlined"
                        v-if="offre.validation == 1"
                      >
                        <v-icon start icon="mdi-check-circle"></v-icon>
                        Validé
                      </v-chip>
                      <v-chip
                        class="ma-2"
                        color="danger"
                        variant="outlined"
                        v-if="offre.validation == 0"
                      >
                        <v-icon start icon="mdi-clock-alert"></v-icon>
                        expiré
                      </v-chip>
                    </v-col>
                  </v-banner-text>
                  <template v-slot:actions>
                    <v-col cols="12" class="ma-2">
                      <v-menu>
                        <template v-slot:activator="{ props }">
                          <v-btn dark color="primary" v-bind="props">
                            <v-icon>mdi-format-list-bulleted-type</v-icon>
                          </v-btn>
                        </template>
                        <v-list>
                          <v-list-item>
                            <router-link
                              :to="{
                                name: 'CandidatureCompany',
                                params: { id: offre.id },
                              }"
                              style="text-decoration: none"
                              ><v-btn v-text="'Gérer Candidatures'"></v-btn
                            ></router-link>
                          </v-list-item>
                          <v-list-item>
                            <router-link
                              :to="{
                                name: 'modifierpost',
                                params: { id: offre.id },
                              }"
                              style="text-decoration: none"
                              ><v-btn v-text="'Modifier Offre'"></v-btn
                            ></router-link>
                          </v-list-item>
                          <v-list-item>
                            <v-list-item-title
                              ><v-btn
                                v-text="'supprimer'"
                                @click.prevent="deleteoffre(offre.id)"
                              ></v-btn
                            ></v-list-item-title>
                          </v-list-item>
                        </v-list>
                      </v-menu>
                    </v-col>
                  </template>
                </v-banner>
              </v-container>
              <v-divider></v-divider>
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
    showAll: false,
  }),
  mounted() {
    this.alloffres(), this.enattente(), this.accepter();
  },
  computed: {
    user() {
      return this.$store.getters.get_user;
    },
  },
  created() {
    this.alloffres();
  },
  methods: {
    async alloffres() {
      let url = "http://localhost:8000/api/auth/alloffres/" + this.user.id;
      await axios.get(url).then((response) => {
        this.offres = response.data;
      });
    },
    async enattente() {
      let url = "http://localhost:8000/api/auth/enattente/" + this.user.id;
      await axios.get(url).then((response) => {
        this.offres = response.data;
      });
    },
    async accepter() {
      let url = "http://localhost:8000/api/auth/accepter/" + this.user.id;
      await axios.get(url).then((response) => {
        this.offres = response.data;
      });
    },
    async deleteoffre($id) {
      axios
        .delete("http://localhost:8000/api/auth/deleteoffre/" + $id, {})
        .then((response) => {
          console.log(response);
          this.$router.go(0);
        })
        .catch((err) => {
          this.error = err;
        });
    },
  },
};
</script>
<style></style>
