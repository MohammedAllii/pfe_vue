<template>
  <navbar-view />
  <br />
  <v-container align="center">
    <h5 class="text-h5 font-italic" style="color: black">
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
          <router-link to="AdminDashboard" style="text-decoration: none">
            <v-list-subheader color="green"
              >ADMIN DASHBOARD</v-list-subheader
            ></router-link
          >
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
        <v-tab> All Offres: </v-tab>
      </v-tabs>
      <v-expansion-panels variant="popout" class="pa-4">
        <v-expansion-panel v-for="offre in offres" :key="offre.id">
          <v-expansion-panel-title>
            <v-row align="center" class="spacer" no-gutters>
              <v-col cols="4" sm="2" md="1">
                <v-avatar size="40px">
                  <v-img
                    alt="Avatar"
                    v-bind:src="'../images/' + offre.avatar"
                  ></v-img>
                </v-avatar>
              </v-col>

              <v-col class="hidden-xs-only text-left ml-2" sm="5" md="3">
                <strong>{{ offre.poste }}</strong>
                <span class="text-grey"></span>
              </v-col>
              <v-col class="text-no-wrap text-left" cols="5" sm="3">
                <v-chip class="ma-2" color="blue" variant="outlined">
                  <v-icon start icon="mdi-home-city"></v-icon>
                  {{ offre.name }}
                </v-chip>
              </v-col>
              <v-col
                class="text-no-wrap text-left"
                cols="5"
                sm="3"
                v-if="offre.etat == 0"
              >
                <v-chip class="ma-2" color="orange" variant="outlined">
                  <v-icon start icon="mdi-progress-clock"></v-icon>
                  En Attente
                </v-chip>
              </v-col>
              <v-col
                class="text-no-wrap text-left"
                cols="5"
                sm="3"
                v-if="offre.etat == 1"
              >
                <v-chip class="ma-2" color="green" variant="outlined">
                  <v-icon start icon="mdi-progress-clock"></v-icon>
                  Accepter
                </v-chip>
              </v-col>
            </v-row>
          </v-expansion-panel-title>

          <v-expansion-panel-text>
            <v-card-text
              class="text-body-1 font-italic"
              v-if="offre.description != null"
              ><v-icon color="blue">mdi-clipboard-text</v-icon
              ><strong>Description entreprise :</strong>
              {{ offre.description }}</v-card-text
            >
            <v-card-text
              class="text-body-1 font-italic"
              v-if="offre.temps_travail != null"
              ><v-icon color="blue">mdi-clock-outline</v-icon
              ><strong>Temp du travail :</strong>
              {{ offre.temps_travail }}</v-card-text
            >
            <v-card-text
              class="text-body-1 font-italic"
              v-if="offre.salaire != null"
              ><v-icon color="blue">mdi-currency-usd</v-icon
              ><strong>Salaire :</strong> {{ offre.salaire }}
              {{ offre.monnaie }} {{ offre.periode }}</v-card-text
            >
            <v-card-text
              class="text-body-1 font-italic"
              v-if="offre.contrat != null"
              ><v-icon color="blue">mdi-draw</v-icon><strong>Contrat :</strong>
              {{ offre.contrat }}</v-card-text
            >
            <v-card-text
              class="text-body-1 font-italic"
              v-if="offre.pays != null"
              ><v-icon color="blue">mdi-islam</v-icon><strong>Pays :</strong>
              {{ offre.pays }}</v-card-text
            >
            <v-card-text
              class="text-body-1 font-italic"
              v-if="offre.lieu_travail != null"
              ><v-icon color="blue">mdi-google-maps</v-icon
              ><strong>Lieu du travail :</strong>
              {{ offre.lieu_travail }}</v-card-text
            >
            <v-card-text
              class="text-body-1 font-italic"
              v-if="offre.question1 != null"
              ><v-icon color="blue">mdi-calendar-range</v-icon
              ><strong>Question 1 :</strong> {{ offre.question1 }}</v-card-text
            >
            <v-card-text
              class="text-body-1 font-italic"
              v-if="offre.question2 != null"
              ><v-icon color="blue">mdi-facebook</v-icon
              ><strong>Question 2 :</strong> {{ offre.question2 }}</v-card-text
            >
            <v-card-text
              class="text-body-1 font-italic"
              v-if="offre.question3 != null"
              ><v-icon color="blue">mdi-linkedin</v-icon
              ><strong>Question 3 :</strong> {{ offre.question3 }}</v-card-text
            >
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
                    <v-btn
                      color="red"
                      variant="text"
                      @click.prevent="accepteroffre(offre.id)"
                    >
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
                      @click.prevent="refuseroffre(offre.id)"
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
            <router-link
              :to="{ name: 'ModifierOffre', params: { id: offre.id } }"
              style="text-decoration: none"
            >
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
              @click.prevent="deleteoffre(offre.id)"
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
import axios from "axios";
export default {
  components: { NavbarView, FooterView },
  data: () => ({
    snackbar: false,
    snackbar1: false,
    offres: {},
    etat_accepter: 1,
    etat_refuser: 0,
    text: ` Would you like to Accept this Company?`,
    text1: ` Would you like to Refuse this Company?`,
    selectedItem: 1,
    items: [
      {
        text: "Gestion Admins",
        icon: "mdi-account-check-outline",
        route: "/DashbordView",
      },
      {
        text: "Gestion users",
        icon: "mdi-account-check-outline",
        route: "/GestionUser",
      },
      {
        text: "Gestion Entreprises",
        icon: "mdi-contacts",
        route: "/GestionCompany",
      },
      {
        text: "Gestions Offres",
        icon: "mdi-wallet-membership",
        route: "/GestionOffresAdmin",
      },
      {
        text: "Les statestiques",
        icon: "mdi-chart-line",
        route: "/StatistAdmin",
      },
    ],
  }),
  mounted() {
    this.toutoffres();
  },
  computed: {
    user() {
      return this.$store.getters.get_user;
    },
  },
  methods: {
    async toutoffres() {
      axios
        .get("http://localhost:8000/api/auth/toutoffresadmin")
        .then((response) => {
          this.offres = response.data;
        });
    },
    async accepteroffre($id) {
      axios
        .post("http://localhost:8000/api/auth/accepteroffre/" + $id, {
          etat: this.etat_accepter,
        })
        .then((response) => {
          console.log(response);
          this.$toast.success(" Offre accepter.", {
            position: "top-right",
          });
          this.$router.go(0);
        });
    },
    async refuseroffre($id) {
      axios
        .post("http://localhost:8000/api/auth/accepteroffre/" + $id, {
          etat: this.etat_refuser,
        })
        .then((response) => {
          console.log(response);
          this.$toast.success(" Offre Refuser.", {
            position: "top-right",
          });
          this.$router.go(0);
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
