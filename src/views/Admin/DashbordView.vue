<template>
  <navbar-view />
  <v-container align="center">
    <h5 class="text-h5 font-italic" style="color: blueviolet">
      <img
        src="https://i.pinimg.com/originals/58/54/cc/5854ccbf23126f8d56c0347624f9f312.gif"
        style="width: 100px; height: 100px"
      />
      Welcome to The AdminPanel
    </h5>
  </v-container>
  <v-row>
    <v-col cols="12" md="4">
      <v-card flat class="mx-auto" max-width="300">
        <v-list shaped>
          <v-list-subheader color="green">ADMIN DASHBOARD</v-list-subheader>
          <v-list-item
            v-for="(item, i) in items"
            :key="i"
            :value="item"
            router
            :to="item.route"
            active-color="#00E676"
            rounded="shaped"
          >
            <v-list-item-avatar start>
              <v-icon :icon="item.icon"></v-icon>
            </v-list-item-avatar>
            <v-list-item-title v-text="item.text"></v-list-item-title>
          </v-list-item>
        </v-list>
      </v-card>
    </v-col>
    <v-col cols="12" md="7">
      <v-tabs fixed-tabs theme="dark">
        <v-tab> All Companies: </v-tab>
      </v-tabs>
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
                    src="https://amzsoftware.com/wp-content/uploads/2021/10/AMZ-Software-Logo.jpg"
                  ></v-img>
                  <v-icon
                    v-else
                    :color="message.color"
                    :icon="message.icon"
                  ></v-icon>
                </v-avatar>
              </v-col>

              <v-col class="hidden-xs-only text-left ml-2" sm="5" md="3">
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
              v-text="paragA"
            ></v-card-text>
            <v-card-text
              class="text-body-1 font-italic"
              v-text="paragB"
            ></v-card-text>
            <v-card-text
              class="text-body-1 font-italic"
              v-text="paragC"
            ></v-card-text>
            <v-card-text
              class="text-body-1 font-italic"
              v-text="paragD"
            ></v-card-text>
            <v-card-text class="font-weight-bold" v-text="parag1"></v-card-text>
            <v-card-text class="font-weight-bold" v-text="parag2"></v-card-text>
            <v-card-text class="font-weight-bold" v-text="parag3"></v-card-text>
            <v-card-text class="font-weight-bold" v-text="parag4"></v-card-text>
            <v-card-text class="font-weight-bold" v-text="parag5"></v-card-text>
            <v-card-text class="font-weight-bold" v-text="parag6"></v-card-text>
            <v-card-text class="font-weight-bold" v-text="parag7"></v-card-text>
            <v-card-text class="font-weight-bold" v-text="parag8"></v-card-text>
            <v-card-text class="font-weight-bold" v-text="parag9"></v-card-text>
            <v-card-text
              class="font-weight-bold"
              v-text="parag10"
            ></v-card-text>
            <v-card-text
              class="font-weight-bold"
              v-text="parag11"
            ></v-card-text>
            <v-card-text
              class="font-weight-bold"
              v-text="parag12"
            ></v-card-text>
            <v-card-text
              class="font-weight-bold"
              v-text="parag13"
            ></v-card-text>
            <v-spacer></v-spacer>
            <v-container>
              <p style="color: red">
                Vous acceptez cet offre comme administrateur?
              </p>
              <p>
                <img
                  src="https://i.gifer.com/origin/41/41340ab1a4529c7dd753f03268087e08.gif"
                  style="width: 60px; height: 60px"
                />
                <v-btn transparent flat rounded @click="snackbar = true">
                  Accepter Cette Offre
                </v-btn>

                <v-snackbar v-model="snackbar" multi-line>
                  {{ text }}

                  <template v-slot:actions>
                    <v-btn color="red" variant="text" @click="snackbar = false">
                      Accepter
                    </v-btn>
                    <v-btn color="red" variant="text" @click="snackbar = false">
                      Annuler
                    </v-btn>
                  </template>
                </v-snackbar>
              </p>

              <p>
                <img
                  src="https://c.tenor.com/hmbt9N7tR0gAAAAj/incorrect-nah.gif"
                  style="width: 60px; height: 60px"
                />
                <v-btn transparent flat rounded @click="snackbar1 = true">
                  Réfuser Cette Offre
                </v-btn>

                <v-snackbar v-model="snackbar1" multi-line>
                  {{ text1 }}

                  <template v-slot:actions>
                    <v-btn
                      color="red"
                      variant="text"
                      @click="snackbar1 = false"
                    >
                      Accepter
                    </v-btn>
                    <v-btn
                      color="red"
                      variant="text"
                      @click="snackbar1 = false"
                    >
                      Annuler
                    </v-btn>
                  </template>
                </v-snackbar>
              </p>
            </v-container>
            <router-link to="ModifierOffreAdmin" style="text-decoration: none">
              <v-btn
                class="ma-2"
                rounded="pill"
                color="#F1F8E9"
                prepend-icon="mdi-update"
              >
                <v-tooltip activator="parent" anchor="start"
                  >Modifier Offre</v-tooltip
                >
              </v-btn>
            </router-link>

            <v-btn
              class="ma-2"
              rounded="pill"
              color="#F1F8E9"
              prepend-icon="mdi-delete-empty"
            >
              <v-tooltip activator="parent" anchor="start"
                >Supprimer Offre
              </v-tooltip>
            </v-btn>
          </v-expansion-panel-text>
        </v-expansion-panel>
      </v-expansion-panels>
    </v-col>
  </v-row>
  <footer-view />
</template>

<script>
import NavbarView from "@/components/NavbarView.vue";
import FooterView from "@/components/FooterView.vue";
export default {
  components: { NavbarView, FooterView },
  data: () => ({
    snackbar: false,
    snackbar1: false,
    text: ` Would you like to remove this Company?`,
    text1: ` Would you like to remove this Company?`,
    selectedItem: 1,
    items: [
      {
        text: "Gestion users",
        icon: "mdi-account-check-outline",
        route: "/GestionUsers",
      },
      {
        text: "Gestion Entreprises",
        icon: "mdi-contacts",
        route: "/GestionEntreprise",
      },
      {
        text: "Gestions Offres",
        icon: "mdi-wallet-membership",
        route: "/GestionOffreAdmin",
      },
    ],
    messages: [
      {
        avatar:
          "https://amzsoftware.com/wp-content/uploads/2021/10/AMZ-Software-Logo.jpg",
        name: "Developpeur java ",
        title: "Voir plus de detaills",
      },
    ],
    paragA: "Poste:Developpeur java ",
    paragB: "Lieu de travail:Tunis ",
    paragC: "pays:Tunis ",
    paragD: "Type de contrat: Temps-plein",
    parag1: "Temps de travail: jour ",
    parag2: "Salaire: 2500dt",
    parag3: "Monnaie: DINNAR",
    parag4: "Choisisez la periode: 21-50jours",
    parag5:
      "Description:Le lorem ipsum est, en imprimerie, une suite de mots sans signification utilisée à titre provisoire pour calibrer une mise en page, le texte définitif venant remplacer le faux-texte dès quil est prêt ou que la mise en page est achevéeGénéralementon utilise un texte en faux latinle Lorem ipsum ou Lipsum.",
    parag6: "Nom Société: AMZ software ",
    parag7: "Site Web:",
    parag8: "Nombre d emploi:",
    parag9: "Année foundation:",
    parag10: "Déscription:",
    parag11: "Question1:",
    parag12: "Question2:",
    parag13: "Question3:",
  }),
};
</script>

<style></style>
