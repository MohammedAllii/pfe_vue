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
        <v-tab> All Admins: </v-tab>
        <v-col cols="12" md="1">
          <router-link to="AddAdmin" style="text-decoration: none">
            <v-tooltip v-model="show" top>
              <template v-slot:activator="{ props }">
                <v-btn flat icon v-bind="props">
                  <v-icon color="#FF9800">
                    mdi-account-multiple-plus-outline
                  </v-icon>
                </v-btn>
              </template>
              <span>Add Admin</span>
            </v-tooltip>
          </router-link>
        </v-col>
      </v-tabs>
      <v-expansion-panels variant="popout" class="pa-4">
        <v-expansion-panel v-for="admin in admins" :key="admin.id">
          <v-expansion-panel-title>
            <v-row align="center" class="spacer" no-gutters>
              <v-col cols="4" sm="2" md="1">
                <v-avatar size="40px">
                  <v-img
                    alt="Avatar"
                    v-bind:src="'../images/' + admin.avatar"
                  ></v-img>
                </v-avatar>
              </v-col>

              <v-col class="hidden-xs-only text-left ml-2" sm="5" md="3">
                <strong>{{ admin.name }} {{ admin.last_name }}</strong>
                <span class="text-grey"></span>
              </v-col>

              <v-col class="text-no-wrap text-left" cols="5" sm="3">
                <v-chip
                  v-if="admin.date_naissance"
                  class="ml-0 mr-2 text-black"
                  label
                  small
                >
                  {{ admin.role }} new
                </v-chip>
                <strong>An Admin Of the Website</strong>
              </v-col>
            </v-row>
          </v-expansion-panel-title>

          <v-expansion-panel-text>
            <v-card-text
              class="text-body-1 font-italic"
              v-if="admin.name != null"
              ><v-icon color="blue">mdi-account-tie</v-icon
              ><strong>Nom :</strong> {{ admin.name }}</v-card-text
            >
            <v-card-text
              class="text-body-1 font-italic"
              v-if="admin.last_name != null"
              ><v-icon color="blue">mdi-account-tie</v-icon
              ><strong>Prénom :</strong> {{ admin.last_name }}</v-card-text
            >
            <v-card-text
              class="text-body-1 font-italic"
              v-if="admin.civilite != null"
              ><v-icon color="blue">mdi-islam</v-icon
              ><strong>Civilité :</strong> {{ admin.civilite }}</v-card-text
            >
            <v-card-text
              class="text-body-1 font-italic"
              v-if="admin.adresse != null"
              ><v-icon color="blue">mdi-map-marker</v-icon
              ><strong>Adresse :</strong> {{ admin.adresse }}</v-card-text
            >
            <v-card-text
              class="text-body-1 font-italic"
              v-if="admin.phone != null"
              ><v-icon color="blue">mdi-phone</v-icon><strong>Phone :</strong>
              {{ admin.phone }}</v-card-text
            >
            <v-card-text
              class="text-body-1 font-italic"
              v-if="admin.email != null"
              ><v-icon color="blue">mdi-email</v-icon><strong>Email :</strong>
              {{ admin.email }}</v-card-text
            >
            <v-card-text
              class="text-body-1 font-italic"
              v-if="admin.specialite != null"
              ><v-icon color="blue">mdi-card-account-details-star</v-icon
              ><strong>Spécilaité :</strong> {{ admin.specialite }}</v-card-text
            >
            <v-spacer></v-spacer>
            <router-link
              :to="{ name: 'ModifierUser', params: { id: admin.id } }"
              style="text-decoration: none"
            >
              <v-btn
                class="ma-2"
                rounded="pill"
                color="#F1F8E9"
                prepend-icon="mdi-update"
              >
                Modifier Admin
              </v-btn>
            </router-link>

            <v-btn
              @click="snackbar = true"
              class="ma-2"
              rounded="pill"
              v-if="admin.id != user.id"
              color="#F1F8E9"
              prepend-icon="mdi-delete-empty"
            >
              Supprimer Admin
            </v-btn>
            <v-snackbar v-model="snackbar" multi-line>
              <template v-slot:actions>
                <p>{{ this.text }}</p>
                <v-btn
                  color="#FF6F00"
                  variant="text"
                  @click.prevent="deleteuser(admin.id)"
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
    admins: {},
    text: ` Would you like to remove this Admin?`,
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
    this.getAdmins();
  },
  computed: {
    user() {
      return this.$store.getters.get_user;
    },
  },
  methods: {
    async getAdmins() {
      axios.get("http://localhost:8000/api/auth/alladmins").then((response) => {
        this.admins = response.data;
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
