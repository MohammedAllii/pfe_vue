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
        <v-tab> All Company: </v-tab>
      </v-tabs>
      <v-expansion-panels variant="popout" class="pa-4">
        <v-expansion-panel v-for="company in companys" :key="company.id">
          <v-expansion-panel-title>
            <v-row align="center" class="spacer" no-gutters>
              <v-col cols="4" sm="2" md="1">
                <v-avatar size="40px">
                  <v-img
                    alt="Avatar"
                    v-bind:src="'../images/' + company.avatar"
                  ></v-img>
                </v-avatar>
              </v-col>

              <v-col class="hidden-xs-only text-left ml-2" sm="5" md="3">
                <strong>{{ company.name }} {{ company.last_name }}</strong>
                <span class="text-grey"></span>
              </v-col>

              <v-col class="text-no-wrap text-left" cols="5" sm="3">
                <v-chip
                  v-if="company.date_naissance"
                  class="ml-0 mr-2 text-black"
                  label
                  small
                >
                  {{ company.role }} new
                </v-chip>
                <strong>{{ company.site_web }}</strong>
              </v-col>
            </v-row>
          </v-expansion-panel-title>

          <v-expansion-panel-text>
            <v-card-text
              class="text-body-1 font-italic"
              v-if="company.description_entreprise != null"
              ><v-icon color="blue">mdi-clipboard-text</v-icon
              ><strong>Description entreprise :</strong>
              {{ company.description_entreprise }}</v-card-text
            >
            <v-card-text
              class="text-body-1 font-italic"
              v-if="company.nb_employee != null"
              ><v-icon color="blue">mdi-counter</v-icon
              ><strong>Nombre des Employées :</strong>
              {{ company.nb_employee }}</v-card-text
            >
            <v-card-text
              class="text-body-1 font-italic"
              v-if="company.adresse != null"
              ><v-icon color="blue">mdi-map-marker-radius</v-icon
              ><strong>Adresse :</strong> {{ company.adresse }}</v-card-text
            >
            <v-card-text
              class="text-body-1 font-italic"
              v-if="company.gouvernorat != null"
              ><v-icon color="blue">mdi-map-marker</v-icon
              ><strong>Gouvernorat :</strong>
              {{ company.gouvernorat }}</v-card-text
            >
            <v-card-text
              class="text-body-1 font-italic"
              v-if="company.phone != null"
              ><v-icon color="blue">mdi-phone</v-icon><strong>Phone :</strong>
              {{ company.phone }}</v-card-text
            >
            <v-card-text
              class="text-body-1 font-italic"
              v-if="company.email != null"
              ><v-icon color="blue">mdi-email</v-icon><strong>Email :</strong>
              {{ company.email }}</v-card-text
            >
            <v-card-text
              class="text-body-1 font-italic"
              v-if="company.annee_fondation != null"
              ><v-icon color="blue">mdi-calendar-range</v-icon
              ><strong>Année de foundation :</strong>
              {{ company.annee_fondation }}</v-card-text
            >
            <v-card-text
              class="text-body-1 font-italic"
              v-if="company.facebook != null"
              ><v-icon color="blue">mdi-facebook</v-icon
              ><strong>Facebook :</strong> {{ company.facebook }}</v-card-text
            >
            <v-card-text
              class="text-body-1 font-italic"
              v-if="company.linkedin != null"
              ><v-icon color="blue">mdi-linkedin</v-icon
              ><strong>Linkedin :</strong> {{ company.linkedin }}</v-card-text
            >
            <v-card-text
              class="text-body-1 font-italic"
              v-if="company.twitter != null"
              ><v-icon color="blue">mdi-twitter</v-icon
              ><strong>Twitter :</strong> {{ company.twitter }}</v-card-text
            >
            <v-spacer></v-spacer>
            <router-link
              :to="{ name: 'ModifierUser', params: { id: company.id } }"
              style="text-decoration: none"
            >
              <v-btn
                class="ma-2"
                rounded="pill"
                color="#F1F8E9"
                prepend-icon="mdi-update"
              >
                Modifier Entreprise
              </v-btn>
            </router-link>

            <v-btn
              @click="snackbar = true"
              class="ma-2"
              rounded="pill"
              color="#F1F8E9"
              prepend-icon="mdi-delete-empty"
            >
              Supprimer Entreprise
            </v-btn>
            <v-snackbar v-model="snackbar" multi-line>
              <template v-slot:actions>
                <p>{{ this.text }}</p>
                <v-btn
                  color="#FF6F00"
                  variant="text"
                  @click.prevent="deleteuser(company.id)"
                >
                  Supprimer
                </v-btn>
                <v-btn color="#FF6F00" variant="text" @click="snackbar = false">
                  Annuler
                </v-btn>
              </template>
            </v-snackbar>
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
    companys: {},
    text: ` Would you like to remove this Company?`,
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
    this.getCompany();
  },
  computed: {
    user() {
      return this.$store.getters.get_user;
    },
  },
  methods: {
    async getCompany() {
      axios
        .get("http://localhost:8000/api/auth/allcompany")
        .then((response) => {
          this.companys = response.data;
        });
    },
    async deleteuser($id) {
      if ($id == this.user.id) {
        axios
          .delete("http://localhost:8000/api/auth/deleteuser/" + $id)
          .then((response) => {
            console.log(response);
            this.$toast.warning(" User deleted.", {
              position: "top-right",
            });
            this.$store.commit("SET_token", null);
            this.$store.commit("SET_user", null);
            this.$store.commit("SET_loggedIn", false);
            this.$store.commit("SET_loggedAdmin", false);
            this.$router.go(0);
            this.$router.push("/SignIn");
          });
      } else {
        axios
          .delete("http://localhost:8000/api/auth/deleteuser/" + $id)
          .then((response) => {
            console.log(response);
            this.$toast.warning(" User deleted.", {
              position: "top-right",
            });
            this.$router.go(0);
            this.$router.push("/SignIn");
          });
      }
    },
  },
};
</script>

<style></style>
