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
        <br />
        <v-row>
          <v-col cols="12" md="12">
            <h5 class="font-weight-bold">Candidatures</h5>
          </v-col>
        </v-row>
        <v-row>
          <v-banner lines="Three" color="deep-purple-accent-4">
            <v-banner-text>
              <v-row>
                <v-col cols="12" md="10">
                  <router-link to="DetailsPost" style="text-decoration: none"
                    ><h5 class="font-italic">
                      {{ offre.poste }}
                    </h5></router-link
                  >
                </v-col>
              </v-row>
              <v-row>
                <v-col cols="12"></v-col>
                <v-col cols="12" md="2">
                  <p>
                    <v-icon color="blue">mdi-map-marker</v-icon>
                    {{ offre.lieu_travail }}
                  </p>
                </v-col>
                <v-col cols="12" md="2">
                  <p>
                    <v-icon color="blue">mdi-currency-usd</v-icon>
                    {{ offre.salaire }}&nbsp;{{ offre.monnaie }}
                  </p>
                </v-col>
                <v-col cols="12" md="2">
                  <p>
                    <v-icon color="blue">mdi-file-document-outline</v-icon>
                    {{ offre.contrat }}
                  </p>
                </v-col>
                <v-col cols="12" md="2">
                  <p>
                    <v-icon color="blue">mdi-clock-outline</v-icon>
                    {{ offre.temps_travail }}
                  </p>
                </v-col>
                <v-col cols="12" md="2">
                  <p>
                    <v-icon color="blue">mdi-account-clock-outline</v-icon>
                    {{ offre.added }}
                  </p>
                </v-col>
              </v-row>
              <p>
                {{ offre.description }}
              </p>
            </v-banner-text>
            <v-row>
              <v-col cols="12" md="12"> </v-col>
            </v-row>
          </v-banner>
        </v-row>
        <br />
        <v-row>
          <v-dialog v-model="dialog1" scrollable>
            <template v-slot:activator="{ props }">
              <v-btn
                prepend-icon="mdi-filter-outline"
                color="#E3F2FD"
                v-bind="props"
                rounded
                flat
                tranparant
                class="ma-2"
              >
                Sort by
              </v-btn>
            </template>
            <v-card>
              <v-card-title>Sort By</v-card-title>
              <v-divider></v-divider>
              <v-card-text style="height: 200px">
                <v-radio-group v-model="dialogm1" column>
                  <v-radio label="Relevance" value="Relevance"></v-radio>
                  <v-radio label="Date Apply" value="Date Apply"></v-radio>
                  <v-radio label="First Name" value="First Name"></v-radio>
                  <v-radio label="Last Name" value="Last Name"></v-radio>
                </v-radio-group>
              </v-card-text>
              <v-divider></v-divider>
              <v-card-actions>
                <v-btn color="blue-darken-1" text @click="dialog1 = false">
                  Close
                </v-btn>
                <v-btn color="blue-darken-1" text @click="dialog1 = false">
                  Show results
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>
          <v-dialog v-model="dialog2" scrollable>
            <template v-slot:activator="{ props }">
              <v-btn
                prepend-icon="mdi-star-outline"
                color="#E3F2FD"
                v-bind="props"
                rounded
                flat
                tranparant
                class="ma-2"
              >
                Ratings
              </v-btn>
            </template>
            <v-card>
              <v-card-title>Ratings</v-card-title>
              <v-divider></v-divider>
              <v-card-text style="height: 250px">
                <v-checkbox
                  label="Unrated"
                  color="success"
                  value="success"
                  hide-details
                ></v-checkbox>
                <v-checkbox
                  label="Good Fit"
                  color="success"
                  value="success"
                  hide-details
                ></v-checkbox>
                <v-checkbox
                  label="Not a Fit"
                  color="success"
                  value="success"
                  hide-details
                ></v-checkbox>
                <v-checkbox
                  label="Maybe"
                  color="success"
                  value="success"
                  hide-details
                ></v-checkbox>
              </v-card-text>
              <v-divider></v-divider>
              <v-card-actions>
                <v-btn color="blue-darken-1" text @click="dialog2 = false">
                  Close
                </v-btn>
                <v-btn color="blue-darken-1" text @click="dialog2 = false">
                  Show results
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>
          <v-dialog v-model="dialog3" scrollable>
            <template v-slot:activator="{ props }">
              <v-btn
                prepend-icon="mdi-map-marker-radius"
                color="#E3F2FD"
                v-bind="props"
                rounded
                flat
                tranparant
                class="ma-2"
              >
                Location
              </v-btn>
            </template>
            <v-card>
              <v-card-title>Show me Only</v-card-title>
              <v-divider></v-divider>
              <v-card-text style="height: 200px">
                <v-checkbox
                  label="Tunisia"
                  color="success"
                  value="success"
                  hide-details
                ></v-checkbox>
              </v-card-text>
              <v-divider></v-divider>
              <v-card-actions>
                <v-btn color="blue-darken-1" text @click="dialog3 = false">
                  Close
                </v-btn>
                <v-btn color="blue-darken-1" text @click="dialog3 = false">
                  Show results
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>
          <v-dialog v-model="dialog4" scrollable>
            <template v-slot:activator="{ props }">
              <v-btn
                prepend-icon="mdi-account-tie"
                color="#E3F2FD"
                v-bind="props"
                rounded
                flat
                tranparant
                class="ma-2"
              >
                Years Of experience
              </v-btn>
            </template>
            <v-card>
              <v-card-title>Years Of experience</v-card-title>
              <v-divider></v-divider>
              <v-card-text style="height: 300px">
                <v-checkbox
                  label="Less than 1 year"
                  color="success"
                  value="success"
                  hide-details
                ></v-checkbox>
                <v-checkbox
                  label="2 to 3 years"
                  color="success"
                  value="success"
                  hide-details
                ></v-checkbox>
                <v-checkbox
                  label="3 to 5 years"
                  color="success"
                  value="success"
                  hide-details
                ></v-checkbox>
                <v-checkbox
                  label="5 to 10 years"
                  color="success"
                  value="success"
                  hide-details
                ></v-checkbox>
                <v-checkbox
                  label="More than 10 years"
                  color="success"
                  value="success"
                  hide-details
                ></v-checkbox>
              </v-card-text>
              <v-divider></v-divider>
              <v-card-actions>
                <v-btn color="blue-darken-1" text @click="dialog4 = false">
                  Close
                </v-btn>
                <v-btn color="blue-darken-1" text @click="dialog4 = false">
                  Show results
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>
        </v-row>
        <v-row>
          <v-col cols="12" md="12">
            <v-tabs v-model="tab">
              <v-tab value="one">Applicants[{{ this.applicant }}]</v-tab>
            </v-tabs>
            <v-card-text v-for="applic in applicants" :key="applic.id">
              <v-card>
                <v-card-header>
                  <div>
                    <div class="text-overline mb-1">
                      <v-avatar>
                        <v-img
                          v-bind:src="'../images/' + applic.avatar"
                        ></v-img>
                      </v-avatar>
                    </div>
                    <router-link
                      :to="{
                        name: 'infocandidat',
                        query: {
                          id_user: 3,
                          id_offre: 8,
                        },
                      }"
                      style="text-decoration: none"
                      class="text-h6 mb-1"
                      >{{ applic.namee }} {{ applic.last_name }}</router-link
                    >
                    <div class="text-caption">{{ applic.adresse }}</div>
                    <div class="text-caption">
                      {{ applic.phone }}
                    </div>
                    <div class="text-caption">
                      {{ applic.civilite }}
                    </div>
                    <div class="text-caption">
                      {{ applic.email }}
                    </div>
                    <v-chip class="ma-2" color="success" variant="outlined">
                      <v-icon start icon="mdi-account-check"></v-icon>
                      Applied {{ applic.created_att }}
                    </v-chip>

                    <v-chip class="ma-2" color="primary" variant="outlined">
                      1/3 qualified
                      <v-icon end icon="mdi-shield-check-outline"></v-icon>
                    </v-chip>
                    <v-chip class="ma-2" color="primary" variant="outlined">
                      <v-btn
                        to="InfoTest"
                        rounded
                        flat
                        prepend-icon="mdi-marker"
                      >
                        More Details
                      </v-btn>
                      <v-icon end icon="mdi-shield-check-outline"></v-icon>
                    </v-chip>
                  </div>
                </v-card-header>
                <br /><br />
              </v-card>
            </v-card-text>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12" md="6"></v-col>
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
  data() {
    return {
      dialog: false,
      offre: {},
      applicants: {},
      applicant: "",
      notifications: false,
      sound: true,
      widgets: false,
      dialogm1: "",
      dialog1: false,
      dialogm2: "",
      dialog2: false,
      dialogm3: "",
      dialog3: false,
      dialogm4: "",
      dialog4: false,
      items: [
        { title: "Good Fit" },
        { title: "Maybe" },
        { title: "Not a Fit" },
      ],
      items1: [
        { title: "see  your  profil " },
        { title: "MejriHamouda8@gmail.com" },
        { title: "25468975" },
      ],
    };
  },
  components: { NavbarView, FooterView },
  mounted() {
    this.getOffreById(), this.countApplicants(), this.getApplicants();
  },
  methods: {
    async getOffreById() {
      let url =
        "http://localhost:8000/api/auth/afficheoffre/" + this.$route.params.id;
      await axios.get(url).then((response) => {
        this.offre = response.data;
      });
    },
    async countApplicants() {
      let url =
        "http://localhost:8000/api/auth/countoffrescandidat/" +
        this.$route.params.id;
      await axios.get(url).then((response) => {
        this.applicant = response.data;
      });
    },
    async getApplicants() {
      let url =
        "http://localhost:8000/api/auth/getoffrescandidat/" +
        this.$route.params.id;
      await axios.get(url).then((response) => {
        this.applicants = response.data;
      });
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
