<template>
  <navbar-view />
  <div>
    <v-row>
      <v-col cols="12" md="4">
        <v-col>
          <p class="font-weight-bold">
            <v-icon color="green">mdi-briefcase-outline</v-icon> Emploi
            recherché
          </p>
          <v-text-field
            label="intitulé du poste,mots-clés"
            @keyup="rechercheoffre"
            v-model="recherche"
            variant="outlined"
            style="width: 350px"
          ></v-text-field>

          <p class="font-weight-bold">
            <v-icon color="green">mdi-map-marker</v-icon>Localité
          </p>
          <v-text-field
            label="intitulé du poste,mots-clés"
            @keyup="rechercheoffrelocalite"
            v-model="rechercheloc"
            variant="outlined"
            style="width: 350px"
          ></v-text-field>
        </v-col>
        <v-layout>
          <v-col>
            <p>
              <v-icon color="green">mdi-file-document-edit-outline</v-icon>Type
              de contrat
            </p>
            <router-link
              to="#"
              style="text-decoration: none"
              @click.prevent="getoffrebytype(this.cdin)"
            >
              <p>
                Contrat à durée indéterminée(CDI)({{ this.cdi }})
              </p></router-link
            >
            <router-link
              to="#"
              style="text-decoration: none"
              @click.prevent="getoffrebytype(this.cddn)"
            >
              <p>
                Contrat à durée déterminée(CDD)({{ this.cdd }})
              </p></router-link
            >
            <router-link
              to="#"
              style="text-decoration: none"
              @click.prevent="getoffrebytype(this.contratn)"
            >
              <p>Contrat({{ this.contrat }})</p></router-link
            >
            <router-link
              to="#"
              style="text-decoration: none"
              @click.prevent="getoffrebytype(this.stagen)"
            >
              <p>Stage({{ this.stage }})</p></router-link
            >
            <router-link
              to="#"
              style="text-decoration: none"
              @click.prevent="getoffrebytype(this.volontariatn)"
            >
              <p>Volontariat({{ this.volontariat }})</p></router-link
            >
            <p>
              <v-icon color="green">mdi-file-document-edit-outline</v-icon>Temps
              de travail
            </p>
            <router-link
              to="#"
              style="text-decoration: none"
              @click.prevent="getoffrebytemps(this.temps_pleinn)"
            >
              <p>Temps-plein({{ this.temps_plein }})</p></router-link
            >
            <router-link
              to="#"
              style="text-decoration: none"
              @click.prevent="getoffrebytemps(this.temps_partieln)"
            >
              <p>Temps-partiel({{ this.temps_partiel }})</p></router-link
            >
            <p>
              <v-icon color="green">mdi-city-variant-outline</v-icon>Entreprise
            </p>
            <div v-for="company in companys" :key="company.id">
              <router-link
                to="#"
                style="text-decoration: none"
                @click.prevent="getoffrebycompany(company.id)"
              >
                <v-icon color="blue">mdi-home-city-outline</v-icon>
                {{ company.name }}</router-link
              >
            </div>
          </v-col>
          <v-main style="height: 750px"></v-main>
        </v-layout>
      </v-col>
      <v-col cols="12" md="8">
        <br /><br />
        <v-row>
          <v-col cols="12" md="12">
            <h5 class="font-weight-bold">Offres d'emploi en Tunisie</h5>
          </v-col>
          <v-col cols="12" md="8">
            <v-btn
              flat
              rounded="pill"
              color="#DCE775"
              @click.prevent="toutoffres"
            >
              Tous
            </v-btn>
            <v-btn
              flat
              rounded="pill"
              color="#7CB342"
              @click.prevent="offresaujordhui"
            >
              Nouveaux
            </v-btn>
          </v-col>
        </v-row>
        <v-divider></v-divider>
        <v-col cols="12" md="12">
          <v-row v-for="offre in offres" :key="offre.id">
            <v-col cols="12" md="8">
              <h5 class="font-italic" style="color: blue">
                <router-link
                  :to="{ name: 'detailpost', params: { id: offre.id } }"
                  style="text-decoration: none"
                  ><h5>{{ offre.poste }}</h5>
                </router-link>
              </h5>
              <p>
                <v-icon color="blue">mdi-home-city-outline</v-icon>
                &nbsp;
                <router-link
                  :to="{
                    name: 'companypage',
                    params: { id: offre.id_company },
                  }"
                  style="text-decoration: none"
                  >{{ offre.name }}
                </router-link>
              </p>
              <v-row>
                <v-row>
                  <v-col cols="10" md="2"></v-col>
                  <p>
                    <v-icon color="blue">mdi-map-marker</v-icon>
                    {{ offre.lieu_travail }}
                  </p>
                  &nbsp;&nbsp;&nbsp;
                  <p>
                    <v-icon color="blue">mdi-file-document-outline</v-icon>
                    {{ offre.contrat }}
                  </p>
                  &nbsp;&nbsp;&nbsp;
                  <p>
                    <v-icon color="blue">mdi-clock-outline</v-icon>
                    {{ offre.temps_travail }}
                  </p>
                  &nbsp;&nbsp;&nbsp;
                  <p>
                    <v-icon color="blue">mdi-currency-usd</v-icon>
                    {{ offre.salaire }}&nbsp;{{ offre.monnaie }}
                  </p>
                  &nbsp;&nbsp;&nbsp;
                </v-row>
              </v-row>
            </v-col>
            <v-col cols="12" md="4">
              <v-tooltip v-model="show" top>
                <template v-slot:activator="{ props }">
                  <v-icon v-bind="props" @click.prevent="addfavoris(offre.id)">
                    mdi-content-save-outline</v-icon
                  >
                </template>
              </v-tooltip>
            </v-col>
            <v-col cols="12">
              <p v-if="offre.description.length > 5">
                {{
                  showAll
                    ? offre.description
                    : offre.description.slice(0, 60) + "..."
                }}
              </p>
              <v-chip class="ma-2" color="success" variant="outlined">
                <v-icon start icon="mdi-progress-clock"></v-icon>
                {{ offre.added }}
              </v-chip>

              <v-chip class="ma-2" color="blue" variant="outlined">
                <v-icon end icon="mdi-face"></v-icon>
                <router-link
                  :to="{ name: 'detailpost', params: { id: offre.id } }"
                  style="text-decoration: none"
                  >postuler maintenant
                </router-link>
              </v-chip>
              <v-chip
                class="ma-2"
                color="#4dd3bd"
                variant="outlined"
                v-if="offre.nb_candidat > 0"
              >
                <v-icon start icon="mdi-counter"></v-icon>
                {{ offre.nb_candidat }} Candidat demandé
              </v-chip>
              <v-chip
                class="ma-2"
                color="danger"
                variant="outlined"
                v-if="offre.nb_candidat == 0"
              >
                <v-icon start icon="mdi-counter"></v-icon>
                nombre des candidatures épuisé
              </v-chip>
              <v-chip
                class="ma-2"
                color="success"
                variant="outlined"
                v-if="offre.validation == 1"
              >
                <v-icon start icon="mdi-check-circle"></v-icon>
                Validé
              </v-chip>
              <v-chip
                class="ma-2"
                color="danger"
                variant="outlined"
                v-if="offre.validation == 0"
              >
                <v-icon start icon="mdi-clock-alert"></v-icon>
                expiré
              </v-chip>
            </v-col>
            <v-divider></v-divider>
          </v-row>
          <v-pagination
            v-if="offres != ''"
            v-model="pagination.current"
            :length="pagination.total"
            @input="onPageChange"
          ></v-pagination>
          <v-container align="center" v-if="offres == ''">
            <img
              src="https://www.pngall.com/wp-content/uploads/8/Vector-Warning-PNG-Clipart.png"
              style="width: 200px; height: 200px"
            />
            <h5 class="text-h4 font-italic" style="color: black">
              Désolé Aucune Offre
            </h5>
          </v-container>
        </v-col>
      </v-col>
    </v-row>
  </div>
  <a class="gotopbtn" href="#"> <v-icon>mdi-arrow-up</v-icon> </a>
  <v-divider></v-divider>
  <footer-view />
</template>
<script>
import NavbarView from "@/components/NavbarView.vue";
import FooterView from "@/components/FooterView.vue";
import axios from "axios";
export default {
  components: { NavbarView, FooterView },
  data: () => ({
    offres: {},
    cdi: "",
    show: false,
    volontariat: "",
    stage: "",
    cdd: "",
    contrat: "",
    cdin: "CDI",
    cddn: "CDD",
    stagen: "Stage",
    contratn: "Contrat",
    volontariatn: "Volontariat",
    temps_plein: "",
    temps_pleinn: "Temps-plein",
    temps_partiel: "",
    temps_partieln: "Temps-partiel",
    companys: {},
    showAll: false,
    snackbar: false,
    snackbar2: false,
    text: `Your alert is  created`,
    select: null,
    alert: false,
    recherche: "",
    rechercheloc: "",
    pagination: {
      current: 1,
      total: 0,
    },
    id_user: "",
    id_offre: "",
  }),
  mounted() {
    this.toutoffres(), this.offresaujordhui();
  },
  created() {
    this.toutoffres(),
      this.counttypecdi(),
      this.counttypecdd(),
      this.counttypecontrat(),
      this.counttypestage(),
      this.entreprises(),
      this.counttypevolontariat(),
      this.counttempsplein(),
      this.counttempspartiel();
  },
  computed: {
    user() {
      return this.$store.getters.get_user;
    },
  },
  methods: {
    async toutoffres() {
      axios
        .get(
          "http://localhost:8000/api/auth/toutoffres?page" +
            this.pagination.current
        )
        .then((response) => {
          this.offres = response.data.data;
          this.pagination.current = response.data.current_page;
          this.pagination.total = response.data.last_page;
        });
    },
    onPageChange() {
      this.toutoffres();
    },
    async offresaujordhui() {
      axios
        .get("http://localhost:8000/api/auth/offresaujordhui")
        .then((response) => {
          this.offres = response.data;
          console.log(response.data);
        });
    },
    async entreprises() {
      axios
        .get("http://localhost:8000/api/auth/getcompany")
        .then((response) => {
          this.companys = response.data;
          console.log(response.data);
        });
    },
    async getoffrebycompany($id) {
      axios
        .get("http://localhost:8000/api/auth/getoffrebycompany/" + $id)
        .then((response) => {
          this.offres = response.data;
        });
    },
    async counttypecdi() {
      axios
        .get("http://localhost:8000/api/auth/counttypecdi")
        .then((response) => {
          this.cdi = response.data;
        });
    },
    async counttypecdd() {
      axios
        .get("http://localhost:8000/api/auth/counttypecdd")
        .then((response) => {
          this.cdd = response.data;
        });
    },
    async counttypecontrat() {
      axios
        .get("http://localhost:8000/api/auth/counttypecontrat")
        .then((response) => {
          this.contrat = response.data;
        });
    },
    async counttypestage() {
      axios
        .get("http://localhost:8000/api/auth/counttypestage")
        .then((response) => {
          this.stage = response.data;
        });
    },
    async counttypevolontariat() {
      axios
        .get("http://localhost:8000/api/auth/counttypevolontariat")
        .then((response) => {
          this.volontariat = response.data;
        });
    },
    async getoffrebytype($type) {
      axios
        .get("http://localhost:8000/api/auth/getoffrebytype/" + $type)
        .then((response) => {
          this.offres = response.data;
        });
    },
    async counttempsplein() {
      axios
        .get("http://localhost:8000/api/auth/counttempsplein")
        .then((response) => {
          this.temps_plein = response.data;
        });
    },
    async counttempspartiel() {
      axios
        .get("http://localhost:8000/api/auth/counttempspartiel")
        .then((response) => {
          this.temps_partiel = response.data;
        });
    },
    async getoffrebytemps($type) {
      axios
        .get("http://localhost:8000/api/auth/getoffrebytemps/" + $type)
        .then((response) => {
          this.offres = response.data;
        });
    },
    async addfavoris($id) {
      axios
        .post(
          "http://localhost:8000/api/auth/addfavoris/" +
            this.user.id +
            "/" +
            $id,
          {
            id_offre: $id,
            id_user: this.user.id,
          }
        )
        .then((response) => {
          console.log(response);
          this.$toast.success(" Offre Sauvegarder avec success.", {
            position: "top-right",
          });
        })
        .catch((err) => {
          this.$toast.error(" Offre Sauvegarder déja.", {
            position: "top-right",
          });
          console.log(err);
        });
    },
    rechercheoffre() {
      if (this.recherche.length > 1) {
        axios
          .get(
            "http://localhost:8000/api/auth/rechercheposte/" + this.recherche
          )
          .then((response) => {
            this.offres = response.data;
          });
      } else {
        axios
          .get(
            "http://localhost:8000/api/auth/toutoffres?page" +
              this.pagination.current
          )
          .then((response) => {
            this.offres = response.data.data;
            this.pagination.current = response.data.current_page;
            this.pagination.total = response.data.last_page;
          });
      }
    },
    rechercheoffrelocalite() {
      if (this.rechercheloc.length > 1) {
        axios
          .get(
            "http://localhost:8000/api/auth/rechercheposteloc/" +
              this.rechercheloc
          )
          .then((response) => {
            this.offres = response.data;
          });
      } else {
        axios
          .get(
            "http://localhost:8000/api/auth/toutoffres?page" +
              this.pagination.current
          )
          .then((response) => {
            this.offres = response.data.data;
            this.pagination.current = response.data.current_page;
            this.pagination.total = response.data.last_page;
          });
      }
    },
  },
};
</script>
<style>
.gotopbtn {
  position: fixed;
  width: 50px;
  height: 50px;
  background: #8c9eff;
  bottom: 40px;
  right: 50px;
  line-height: 50px;
  color: white;
}
</style>
