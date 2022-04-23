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
              <v-col>
                <p class="font-weight-bold">En savoir Plus!</p>
              </v-col>
              <v-btn
                flat
                rounded
                prepend-icon="mdi-email-open-outline"
                title="Nous contacter"
                value="Nous contacter"
                to="/ContactCompany"
              >
                Nous contacter!
              </v-btn>
              <br />
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
          <v-col cols="12" md="12">
            <v-tabs v-model="tab">
              <v-tab value="one">Toutes[0]</v-tab>
              <v-tab value="two">Nouvelles[0]</v-tab>
              <v-tab value="three">Préselectionnéess[0]</v-tab>
              <v-tab value="four">Réfusées[1]</v-tab>
            </v-tabs>

            <v-card-text>
              <v-window v-model="tab">
                <v-window-item value="one"> One </v-window-item>

                <v-window-item value="two"> Two </v-window-item>

                <v-window-item value="three"> Three </v-window-item>

                <v-window-item value="four"> Four </v-window-item>
              </v-window>
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
export default {
  components: { NavbarView, FooterView },
};
</script>
<style></style>
