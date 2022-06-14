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
              <router-link
                :to="{
                  name: 'PosteCompany',
                }"
                style="text-decoration: none; color: black"
                ><v-btn
                  flat
                  rounded
                  prepend-icon=" mdi-publish"
                  title="  Publiez vos offres"
                  value="  Publiez vos offres"
                  >Publiez vos offres</v-btn
                ></router-link
              >
              <br /><br />
              <router-link
                :to="{
                  name: 'GerePoste',
                }"
                style="text-decoration: none; color: black"
                ><v-btn
                  flat
                  rounded
                  prepend-icon="mdi-content-paste"
                  title=" gérer vos offres"
                  value=" gérer vos offres"
                  >gérer vos offres</v-btn
                ></router-link
              >
              <br /><br />
              <router-link
                :to="{
                  name: 'StatistCompany',
                }"
                style="text-decoration: none; color: black"
                ><v-btn
                  flat
                  rounded
                  prepend-icon="mdi-forum"
                  title="Statistiques"
                  value="Statistiques"
                  >Statistiques</v-btn
                ></router-link
              >
              <br /><br />
              <v-col>
                <p class="font-weight-bold">Accès à la CVthèque</p>
              </v-col>
              <router-link
                :to="{
                  name: 'RechercheCv',
                }"
                style="text-decoration: none; color: black"
                ><v-btn
                  flat
                  rounded
                  prepend-icon="mdi-magnify"
                  title=" Rechercher des CV's"
                  value="Rechercher des CV's"
                  >Rechercher des CV's</v-btn
                ></router-link
              >
              <br /><br />
              <router-link
                :to="{
                  name: 'SaveCv',
                }"
                style="text-decoration: none; color: black"
                ><v-btn
                  flat
                  rounded
                  prepend-icon=" mdi-briefcase-download-outline"
                  title="CV's sauvgardés"
                  value="CV's sauvgardés"
                  >CV's sauvgardés</v-btn
                ></router-link
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
                        name: 'ProfilUser',
                        params: {
                          id: applic.id_user,
                        },
                      }"
                      style="text-decoration: none"
                      class="text-h6 mb-1"
                      >{{ applic.name_candidat }}
                      {{ applic.last_name_candidat }}</router-link
                    >
                    <div class="text-caption">
                      <strong>{{ applic.specialite }}</strong>
                    </div>
                    <div class="text-caption">
                      {{ applic.email }}
                    </div>
                    <v-chip class="ma-2" color="success" variant="outlined">
                      <v-icon start icon="mdi-account-check"></v-icon>
                      Applied {{ applic.created_at }}
                    </v-chip>

                    <v-chip
                      class="ma-2"
                      color="primary"
                      variant="outlined"
                      v-if="
                        applic.reponse1 != null &&
                        applic.reponse2 != null &&
                        applic.reponse3 != null
                      "
                    >
                      3/3 qualified
                      <v-icon end icon="mdi-shield-check-outline"></v-icon>
                    </v-chip>
                    <v-chip
                      class="ma-2"
                      color="primary"
                      variant="outlined"
                      v-if="applic.reponse1 != null && applic.reponse2 != null"
                    >
                      2/3 qualified
                      <v-icon end icon="mdi-shield-check-outline"></v-icon>
                    </v-chip>
                    <v-chip
                      class="ma-2"
                      color="primary"
                      variant="outlined"
                      v-if="applic.reponse1 != null && applic.reponse2 == null"
                    >
                      1/3 qualified
                      <v-icon end icon="mdi-shield-check-outline"></v-icon>
                    </v-chip>
                    <v-chip class="ma-2" color="primary" variant="outlined">
                      <router-link
                        :to="{
                          name: 'infocandidat',
                          query: {
                            id_user: applic.id_user,
                            id_offre: applic.id_offre,
                          },
                        }"
                        style="text-decoration: none"
                        ><v-btn rounded flat prepend-icon="mdi-marker">
                          More Details
                        </v-btn></router-link
                      >
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
            <router-link
              :to="{
                name: 'PosteCompany',
              }"
              style="text-decoration: none"
              class="text-h6 mb-1"
              ><v-btn
                prepend-icon="mdi-file-download-outline"
                rounded
                flat
                color="blue"
                >Publier une nouvelle Poste</v-btn
              ></router-link
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
      nb: 0,
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
