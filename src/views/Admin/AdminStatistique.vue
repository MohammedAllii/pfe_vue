<template>
  <navbar-view />
  <br />
  <v-row>
    <v-col cols="12" md="6"></v-col>
    <v-col cols="12" md="4">
      <v-text-field
        label="Search with a name"
        prepend-inner-icon="mdi-magnify-minus-outline"
        variant="outlined"
      ></v-text-field>
    </v-col>
    <v-col cols="12" md="2">
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
  </v-row>
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
        <v-tab class="text-h5 font-italic" color="#64DD17">
          All statestiques:
        </v-tab>
      </v-tabs>
      <v-row>
        <v-col cols="12" md="12">
          <v-card style="background-color: #a5d6a7">
            <v-card-text>
              <p class="text-h4 text--primary font-italic">
                <v-icon>mdi-account-check-outline</v-icon> le nombre
                d'administrateurs:
              </p>
              <div class="text--primary">
                ici on affiche le nombre d'administrateurs dans notre site
                <br />
                clique sur voir plus pour avoir le resultat"
              </div>
            </v-card-text>
            <v-card-actions>
              <v-btn variant="text" color="black" @click="reveal = true">
                VOIR PLUS
              </v-btn>
            </v-card-actions>

            <v-expand-transition>
              <v-card
                v-if="reveal"
                class="transition-fast-in-fast-out v-card--reveal"
                style="height: 100%; background-color: #a5d6a7"
              >
                <v-card-text class="pb-0">
                  <p class="text-h4 text--primary">
                    <v-icon color="#F1F8E9">mdi-sticker-emoji</v-icon><br />{{
                      alladmin
                    }}
                    administrateurs
                  </p>
                </v-card-text>
                <v-card-actions class="pt-0">
                  <v-btn variant="text" color="black" @click="reveal = false">
                    Close
                  </v-btn>
                </v-card-actions>
              </v-card>
            </v-expand-transition>
          </v-card>
          <br />
          <v-card style="background-color: #84ffff">
            <v-card-text>
              <p class="text-h4 text--primary font-italic">
                <v-icon>mdi-face-profile</v-icon> le nombre d'utilisateurs:
              </p>
              <div class="text--primary">
                ici on affiche le nombre d'utilisateurs trouvés dans notre site
                <br />
                clique sur voir plus pour avoir le resultat"
              </div>
            </v-card-text>
            <v-card-actions>
              <v-btn variant="text" color="black" @click="reveal1 = true">
                VOIR PLUS
              </v-btn>
            </v-card-actions>

            <v-expand-transition>
              <v-card
                v-if="reveal1"
                class="transition-fast-in-fast-out v-card--reveal"
                style="height: 100%; background-color: #84ffff"
              >
                <v-card-text class="pb-0">
                  <p class="text-h4 text--primary">
                    <v-icon color="#0097A7">mdi-face-profile</v-icon><br />{{
                      allusers
                    }}
                    utilisateurs
                  </p>
                </v-card-text>
                <v-card-actions class="pt-0">
                  <v-btn variant="text" color="black" @click="reveal1 = false">
                    Close
                  </v-btn>
                </v-card-actions>
              </v-card>
            </v-expand-transition>
          </v-card>
          <br />
          <v-card style="background-color: #a1887f">
            <v-card-text>
              <p class="text-h4 text--primary font-italic">
                <v-icon>mdi-office-building</v-icon> le nombre d'entreprises:
              </p>
              <div class="text--primary">
                ici on affiche le nombre d'entreprises trouvés dans notre site
                <br />
                clique sur voir plus pour avoir le resultat"
              </div>
            </v-card-text>
            <v-card-actions>
              <v-btn variant="text" color="black" @click="reveal2 = true">
                VOIR PLUS
              </v-btn>
            </v-card-actions>

            <v-expand-transition>
              <v-card
                v-if="reveal2"
                class="transition-fast-in-fast-out v-card--reveal"
                style="height: 100%; background-color: #a1887f"
              >
                <v-card-text class="pb-0">
                  <p class="text-h4 text--primary">
                    <v-icon color="#EFEBE9">mdi-office-building</v-icon><br />{{
                      allentreprise
                    }}
                    entreprises
                  </p>
                </v-card-text>
                <v-card-actions class="pt-0">
                  <v-btn variant="text" color="black" @click="reveal2 = false">
                    Close
                  </v-btn>
                </v-card-actions>
              </v-card>
            </v-expand-transition>
          </v-card>
          <br />
          <v-card style="background-color: #039be5">
            <v-card-text>
              <p class="text-h4 text--primary font-italic">
                <v-icon>mdi-vector-arrange-below</v-icon> le nombre d'offers:
              </p>
              <div class="text--primary">
                ici on affiche le nombre d'offres postées dans notre site <br />
                clique sur voir plus pour avoir le resultat"
              </div>
            </v-card-text>
            <v-card-actions>
              <v-btn variant="text" color="black" @click="reveal3 = true">
                VOIR PLUS
              </v-btn>
            </v-card-actions>

            <v-expand-transition>
              <v-card
                v-if="reveal3"
                class="transition-fast-in-fast-out v-card--reveal"
                style="height: 100%; background-color: #039be5"
              >
                <v-card-text class="pb-0">
                  <p class="text-h4 text--primary">
                    <v-icon color="#EFEBE9">mdi-vector-arrange-below</v-icon
                    ><br />{{ alloffre }} offres
                  </p>
                </v-card-text>
                <v-card-actions class="pt-0">
                  <v-btn variant="text" color="black" @click="reveal3 = false">
                    Close
                  </v-btn>
                </v-card-actions>
              </v-card>
            </v-expand-transition>
          </v-card>
          <br />
          <v-card style="background-color: #e6ee9c">
            <v-card-text>
              <p class="text-h4 text--primary font-italic">
                <v-icon>mdi-checkbook</v-icon> le nombre de CV:
              </p>
              <div class="text--primary">
                ici on affiche le nombre de CV crés dans notre site <br />
                clique sur voir plus pour avoir le resultat"
              </div>
            </v-card-text>
            <v-card-actions>
              <v-btn variant="text" color="black" @click="reveal4 = true">
                VOIR PLUS
              </v-btn>
            </v-card-actions>

            <v-expand-transition>
              <v-card
                v-if="reveal4"
                class="transition-fast-in-fast-out v-card--reveal"
                style="height: 100%; background-color: #e6ee9c"
              >
                <v-card-text class="pb-0">
                  <p class="text-h4 text--primary">
                    <v-icon color="white">mdi-checkbook</v-icon><br />{{
                      allcv
                    }}CV crés
                  </p>
                </v-card-text>
                <v-card-actions class="pt-0">
                  <v-btn variant="text" color="black" @click="reveal4 = false">
                    Close
                  </v-btn>
                </v-card-actions>
              </v-card>
            </v-expand-transition>
          </v-card>
          <br />
          <v-card style="background-color: #ffb74d">
            <v-card-text>
              <p class="text-h4 text--primary font-italic">
                <v-icon>mdi-checkbook</v-icon> le nombre de lettre de
                motivation:
              </p>
              <div class="text--primary">
                ici on affiche le nombre de lettre de motivation crées dans
                notre site <br />
                clique sur voir plus pour avoir le resultat"
              </div>
            </v-card-text>
            <v-card-actions>
              <v-btn variant="text" color="black" @click="reveal5 = true">
                VOIR PLUS
              </v-btn>
            </v-card-actions>

            <v-expand-transition>
              <v-card
                v-if="reveal5"
                class="transition-fast-in-fast-out v-card--reveal"
                style="height: 100%; background-color: #ffb74d"
              >
                <v-card-text class="pb-0">
                  <p class="text-h4 text--primary">
                    <v-icon color="white">mdi-checkbook</v-icon><br />{{
                      alllettres
                    }}
                    lettres crées
                  </p>
                </v-card-text>
                <v-card-actions class="pt-0">
                  <v-btn variant="text" color="black" @click="reveal5 = false">
                    Close
                  </v-btn>
                </v-card-actions>
              </v-card>
            </v-expand-transition>
          </v-card>
        </v-col>
      </v-row>
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
    reveal: false,
    reveal1: false,
    reveal2: false,
    reveal3: false,
    reveal4: false,
    reveal5: false,
    snackbar: false,
    text: ` Would you like to remove this user?`,
    selectedItem: 1,
    alladmin: "",
    alluser: "",
    allentreprise: "",
    allcvs: "",
    alllettres: "",
    alloffre: "",
    items: [
      {
        text: "Gestion Admins",
        icon: "mdi-account-check-outline",
        route: "/GestionAdmins",
      },
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
      {
        text: "Les statestiques",
        icon: "mdi-chart-line",
        route: "/GestionStatistiqueAdmin",
      },
    ],
    messages: [
      {
        avatar:
          "https://cdn.icon-icons.com/icons2/1378/PNG/512/avatardefault_92824.png",
        name: "Farah weslati",
        title: "Vue js developer",
      },
    ],
  }),
  mounted() {
    this.alladmins(),
      this.alluserr(),
      this.allentreprisess(),
      this.allcvss(),
      this.alllettress(),
      this.alloffress();
  },
  methods: {
    async alladmins() {
      let url = "http://localhost:8000/api/auth/countadmin";
      await axios.get(url).then((response) => {
        this.alladmin = response.data;
        console.log(this.alladmin);
      });
    },
    async alluserr() {
      let url = "http://localhost:8000/api/auth/countusers";
      await axios.get(url).then((response) => {
        this.allusers = response.data;
      });
    },
    async allentreprisess() {
      let url = "http://localhost:8000/api/auth/countentreprise";
      await axios.get(url).then((response) => {
        this.allentreprise = response.data;
      });
    },
    async alloffress() {
      let url = "http://localhost:8000/api/auth/countoffres";
      await axios.get(url).then((response) => {
        this.alloffre = response.data;
      });
    },
    async allcvss() {
      let url = "http://localhost:8000/api/auth/countcv";
      await axios.get(url).then((response) => {
        this.allcv = response.data;
      });
    },
    async alllettress() {
      let url = "http://localhost:8000/api/auth/countlettre";
      await axios.get(url).then((response) => {
        this.alllettres = response.data;
      });
    },
  },
};
</script>

<style>
.v-card--reveal {
  bottom: 0;
  opacity: 1 !important;
  position: absolute;
  width: 100%;
}
</style>
