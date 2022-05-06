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
                prepend-icon="mdi-magnify"
                single-line
                style="width: 600px"
              ></v-text-field>
            </v-toolbar>
          </v-col>
          <v-row>
            <v-col cols="12" md="10">
              <v-expansion-panels variant="popout" class="pa-4">
                <v-expansion-panel
                  v-for="(message, i) in messages"
                  :key="i"
                  hide-actions
                >
                  <v-expansion-panel-title>
                    <v-row align="center" class="spacer" no-gutters>
                      <v-col cols="4" sm="2" md="1">
                        <v-avatar size="40px">
                          <v-img
                            v-if="message.avatar"
                            alt="Avatar"
                            src="https://cdn.icon-icons.com/icons2/1378/PNG/512/avatardefault_92824.png"
                          ></v-img>
                          <v-icon
                            v-else
                            :color="message.color"
                            :icon="message.icon"
                          ></v-icon>
                        </v-avatar>
                      </v-col>

                      <v-col
                        class="hidden-xs-only text-left ml-2"
                        sm="5"
                        md="3"
                      >
                        <strong v-html="message.name"></strong>
                        <span v-if="message.total" class="text-grey">
                          &nbsp;({{ message.total }})
                        </span>
                      </v-col>

                      <v-col class="text-no-wrap text-left" cols="5" sm="3">
                        <v-chip
                          v-if="message.new"
                          :color="`${message.color}-lighten-1`"
                          class="ml-0 mr-2 text-black"
                          label
                          small
                        >
                          {{ message.new }} new
                        </v-chip>
                        <strong v-html="message.title"></strong>
                      </v-col>

                      <v-col
                        v-if="message.excerpt"
                        class="text-grey text-truncate hidden-sm-and-down"
                      >
                        &mdash;
                      </v-col>
                    </v-row>
                  </v-expansion-panel-title>

                  <v-expansion-panel-text>
                    <v-card-text
                      class="text-body-1 font-italic"
                      v-text="parag"
                    ></v-card-text>
                    <v-card-text
                      class="font-weight-bold"
                      v-text="parag1"
                    ></v-card-text>
                    <v-card-text
                      class="font-weight-bold"
                      v-text="parag2"
                    ></v-card-text>
                    <v-card-text
                      class="font-weight-bold"
                      v-text="parag3"
                    ></v-card-text>
                  </v-expansion-panel-text>
                </v-expansion-panel>
              </v-expansion-panels>
            </v-col>
          </v-row>
        </v-row>
      </v-col>

      <v-container>
        <v-row>
          <v-menu>
            <template v-slot:activator="{ props }">
              <v-btn v-bind="props">oui </v-btn>
            </template>
            <v-card>
              <v-card-text>
                <div class="mx-auto text-center">
                  <v-avatar color="green">
                    <span class="white--text text-h5">{{ user.initials }}</span>
                  </v-avatar>
                  <h5>{{ user.fullName }}</h5>
                  <p class="text-caption mt-1">
                    {{ user.email }}
                  </p>
                  <v-divider class="my-3"></v-divider>
                  <v-btn rounded variant="text"> Edit Account </v-btn>
                  <v-divider class="my-3"></v-divider>
                  <v-btn rounded variant="text"> Disconnect </v-btn>
                </div>
              </v-card-text>
            </v-card>
          </v-menu>
        </v-row>
      </v-container>
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
  data: () => ({
    messages: [
      {
        avatar:
          "https://cdn.icon-icons.com/icons2/1378/PNG/512/avatardefault_92824.png",
        name: "Farah weslati",
        title: "Vue js developer",
      },
    ],
    parag:
      "je suis un developer vue js j ai 5 ans d expéerience .J ai un diplome en informatique.Je souhaite me spécialiser dans le domaine de Développement Web .Je suis assidue ,ambitieuse et Prête a mettre mes compétences et ma passion en pratique ",
    parag1: "Contact: Télephone:52214491 ",
    parag2: "Email:farahweslati@gmail.com ",
    parag3: "linkedin :https://www.linkedin.com/in/farah-weslati-52a5571bb/",
    user: {
      initials: "FW",
      fullName: "Farah weslati",
      email: "Farahweslati1919@gmail.com",
    },
  }),
};
</script>
<style></style>
