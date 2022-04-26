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
        <v-row>
          <v-col cols="12" md="12">
            <br /><br />
            <v-icon color="green" size="40">mdi-signal-cellular-outline</v-icon>
            <h5 class="font-weight-bold">Statistiques Postes</h5>
          </v-col>
          <v-col cols="12" md="4">
            <v-card class="mx-auto" max-width="344" variant="outlined">
              <v-card-header>
                <div>
                  <div>
                    <v-icon color="green" size="55">mdi-file-compare</v-icon>
                  </div>
                  <div class="text-h4 mb-1">0</div>
                  <div class="text-h5 mb-1">All Postes</div>
                </div>
              </v-card-header>
            </v-card>
          </v-col>
          <v-col cols="12" md="4">
            <v-card class="mx-auto" max-width="344" variant="outlined">
              <v-card-header>
                <div>
                  <div>
                    <v-icon color="green" size="55">mdi-timer-sand</v-icon>
                  </div>
                  <div class="text-h4 mb-1">0</div>
                  <div class="text-h5 mb-1">EN attente</div>
                </div>
              </v-card-header>
            </v-card>
          </v-col>
          <v-col cols="12" md="4">
            <v-card class="mx-auto" max-width="344" variant="outlined">
              <v-card-header>
                <div>
                  <div>
                    <v-icon color="green" size="55"
                      >mdi-content-save-all</v-icon
                    >
                  </div>
                  <div class="text-h4 mb-1">0</div>
                  <div class="text-h5 mb-1">Posts sauvgardés</div>
                </div>
              </v-card-header>
            </v-card>
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
export default {
  components: { NavbarView, FooterView },
  data() {
    return {
      desserts: [
        {
          name: "Frozen Yogurt",
          calories: 159,
        },
        {
          name: "Ice cream sandwich",
          calories: 237,
        },
        {
          name: "Eclair",
          calories: 262,
        },
        {
          name: "Cupcake",
          calories: 305,
        },
        {
          name: "Gingerbread",
          calories: 356,
        },
        {
          name: "Jelly bean",
          calories: 375,
        },
        {
          name: "Lollipop",
          calories: 392,
        },
        {
          name: "Honeycomb",
          calories: 408,
        },
        {
          name: "Donut",
          calories: 452,
        },
        {
          name: "KitKat",
          calories: 518,
        },
      ],
    };
  },
};
</script>
<style></style>
