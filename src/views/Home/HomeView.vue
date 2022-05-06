<template>
  <navbar-view />
  <div class="slide">
    <v-container>
      <v-row class="r1">
        <v-col cols="12" xs="12" sm="6" md="6" lg="6">
          <h3 class="test" style="color: black">Welcome to CATCH IT</h3>
          <p style="color: black">
            Hire expert developers & find internships Sign up and post a job or
            create your developer profile. We will find offers / candidates for
            you!.
          </p>
          <v-hover
            ><v-btn style="background-color: #81c784; color: black" to="/SignUp"
              >Create your Profile!</v-btn
            >
          </v-hover>
        </v-col>
        <v-col cols="12" xs="12" sm="6" md="6" lg="6">
          <v-img
            src="https://thumbs.dreamstime.com/b/excited-office-workers-team-successful-managers-happy-professional-work-group-colleagues-rejoicing-together-teamwork-flat-164126598.jpg"
            style="height: 450px"
          ></v-img>
        </v-col>
      </v-row>
    </v-container>
    <br /><br />
  </div>
  <br />
  <br />
  <v-row>
    <v-col cols="12" md="12">
      <div>
        <v-tabs fixed-tabs background-color="#F5F5F5" dark>
          <v-tab> work </v-tab>
          <v-tab> internships </v-tab>
          <v-tab> Freelancer work </v-tab>
          <v-tab> All Jobs </v-tab>
        </v-tabs>
      </div>
    </v-col>
  </v-row>
  <br /><br />
  <v-row justify>
    <v-col cols="12" md="12">
      <div class="boxContainer" style="width: 450px">
        <table class="elementContainer">
          <tr>
            <td>
              <input type="text" placeholder="Search" class="search" />
            </td>
            <td>
              <v-icon class="icon">mdi-search-web</v-icon>
            </td>
          </tr>
        </table>
      </div>
    </v-col>
  </v-row>

  <br />
  <br />
  <v-divider></v-divider>
  <v-row v-for="offre in offres" :key="offre.id">
    <v-col cols="12" md="2"></v-col>
    <v-col cols="12" md="10">
      <v-row>
        <v-col cols="12" md="10">
          <v-col cols="12">
            <h5 class="font-italic" style="color: blue">
              <router-link
                :to="{ name: 'detailpost', params: { id: offre.id } }"
                style="text-decoration: none"
                ><h5>{{ offre.poste }}</h5>
              </router-link>
            </h5>
            <v-icon color="blue" size="25">mdi-home-city-outline</v-icon>
            &nbsp;<strong style="font-size: 20px">{{
              offre.name_company
            }}</strong
            ><br />
            <v-icon color="blue" size="25">mdi-map-marker-outline</v-icon
            ><strong style="font-size: 20px">{{ offre.lieu_travail }}</strong
            ><br />
            <v-icon color="blue" size="25">mdi-currency-usd</v-icon
            ><strong style="font-size: 20px">{{ offre.salaire }}</strong
            >&nbsp;&nbsp;<strong style="font-size: 20px">{{
              offre.monnaie
            }}</strong
            >&nbsp;&nbsp;<strong style="font-size: 20px">{{
              offre.periode
            }}</strong>
            <p v-if="offre.description.length > 100">
              {{
                showAll
                  ? offre.description
                  : offre.description.slice(0, 120) + "..."
              }}
            </p>
            <p v-else>{{ text }}</p>
            <v-chip class="ma-2" color="success" variant="outlined">
              <v-icon start icon="mdi-progress-clock"></v-icon>
              {{ offre.added }}
            </v-chip>

            <v-chip class="ma-2" color="primary" variant="outlined">
              postuler facilement
              <v-icon end icon="mdi-face"></v-icon>
            </v-chip>
          </v-col>
        </v-col>
      </v-row>
    </v-col>
    <br />
    <v-divider></v-divider>
  </v-row>
  <v-container>
    <v-row>
      <v-col cols="12" md="10"> </v-col>
      <v-col cols="12" md="10">
        <v-btn
          variant="outlined"
          color="green"
          prepend-icon="mdi-eye-circle-outline"
        >
          View all Jobs!
        </v-btn>
      </v-col>
    </v-row>
  </v-container>
  <v-container>
    <h4 class="text-center">We take care of everything</h4>
    <br /><br />
    <v-row>
      <v-col
        v-for="about in abouts"
        :key="about.icon"
        class="text-center"
        xs="4"
        md="4"
      >
        <v-icon class="text-center" color="#F4FF81">{{ about.icon }}</v-icon>
        <h5 class="text-center">{{ about.title }}</h5>
        <p>{{ about.text }}</p>
      </v-col>
    </v-row>
  </v-container>
  <br />
  <br />
  <div>
    <v-container>
      <v-row>
        <v-col cols="12" xs="12" md="6" lg="6">
          <v-img
            rounded
            src="https://i0.wp.com/mobility-work.com/wp-content/uploads/2021/02/laptop-features-list.png?fit=600%2C416&ssl=1"
            style="border-radius: 20px"
          ></v-img>
        </v-col>
        <v-col cols="12" xs="12" md="6" lg="6">
          <p style="color: blue">CATCH IT APPLICATION</p>
          <h1>
            Bénéficiez d'un accompagnement <br />
            dans votre téléphone
          </h1>
          <p>
            vous pouvez trouver notre site sur votre téléphone sans avoir <br />
            besoin de vous connecter avec un ordinateur.
          </p>
        </v-col>
      </v-row>
    </v-container>
  </div>
  <br />
  <div class="offer">
    <v-container>
      <p style="color: black; text-align: center">WHAT WE OFFER</p>
      <h2 style="text-align: center" class="best">
        The best standards <br />
        anywhere.
      </h2>
      <br />
      <br />
      <br />
      <v-row>
        <v-col
          v-for="offer in Offers"
          :key="offer.icon"
          class="text-center"
          xs="4"
          md="3"
        >
          <v-icon class="text-center" style="color: yellow">{{
            offer.icon
          }}</v-icon>
          <h5 class="text-center" style="color: black">{{ offer.title }}</h5>
          <p style="color: black">{{ offer.des }}</p>
        </v-col>
      </v-row>
    </v-container>
  </div>
  <br />
  <a class="gotopbtn" href="#"> <v-icon>mdi-arrow-up</v-icon> </a>
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
      offres: {},
      id_offre: "",
      id_user: "",
      cycle: false,
      showAll: false,
      show: false,
      show1: false,
      show2: false,
      show3: false,
      abouts: [
        {
          icon: "mdi-access-point-network",
          title: "opportunités large et variées",
          text: "nous essayons de vous offrir différentes opportunités de travail partout dans le monde et le reste est pour vous, montrez-nous vos capacités",
        },
        {
          icon: "mdi-certificate",
          title: "meilleures entreprises",
          text: "vous trouverez sur notre site les meilleures entreprises dans tous les domaines que vous souhaitez.",
        },
        {
          icon: "mdi-hand-left",
          title: "Respectant votre objectif de stage",
          text: "nous vous proposons différents stages variés dans tous les domaines. donnez-lui une chance copain.",
        },
      ],
      Offers: [
        {
          icon: "mdi-check-underline",
          title: "Recherche",
          des: " Atteignez vos objectifs et profitez de votre temps",
        },
        {
          icon: "mdi-amplifier",
          title: "Publier poste",
          des: "Recevez vos repas chez vous tous les soirs.",
        },
        {
          icon: "mdi-telegram",
          title: "Télécharger CV",
          des: "Atteignez vos objectifs et profitez de votre temps",
        },
        {
          icon: "mdi-book-outline",
          title: "Créer CV",
          des: "Atteignez vos objectifs et profitez de votre temps",
        },
      ],
    };
  },
  computed: {
    user() {
      return this.$store.getters.get_user;
    },
  },
  mounted() {
    this.toutoffres();
  },
  methods: {
    async toutoffres() {
      axios
        .get("http://localhost:8000/api/auth/toutoffres")
        .then((response) => {
          this.offres = response.data;
          console.log(response.data);
        });
    },
  },
  components: { NavbarView, FooterView },
};
</script>

<style>
html {
  scroll-behavior: smooth;
}
.gotopbtn {
  position: fixed;
  width: 50px;
  height: 50px;
  background: gray;
  bottom: 40px;
  right: 50px;
  text-decoration: none;
  text-align: center;
  line-height: 50px;
  color: white;
  font-size: 22px;
}
.container {
  width: 90%;
  max-width: 1000px;
  margin: 50px auto;
  display: flex;
  align-items: center;
}
@media only screen and (max-width: 768px) {
  .container {
    flex-direction: column;
    width: 100%;
    margin: 0 20px;
  }
  .left {
    width: 100%;
    height: 400px;
  }
  .right {
    width: 70%;
    margin: 0;
    margin-top: -100px;
  }
}
.offer {
  background-color: transparent;
  min-height: 75vh;
}
.slide {
  min-height: 75vh;
  min-width: 57vh;
  background-size: cover !important;
  background-position: center !important;
  padding: 2rem 9%;
  display: flex;
  align-items: center;
  background-color: transparent;
}
h3 {
  font-size: 60px;
  font-weight: bold;
  font-family: cursive;
  color: #444;
}
h4 {
  font-size: 40px;
  font-weight: bold;
  font-family: cursive;
  color: #444;
}
p {
  font-size: 19;
  font-family: cursive;
  margin: 25px 0px;
}
.boxContainer {
  margin: auto;
  position: relative;
  border: 4px solid #2980b9;
  padding: 0px 10px;
  border-radius: 50px;
}
.elementContainer {
  width: 100%;
  height: 100%;
  padding: 0px 5px;
  border-radius: 50px;
  font-size: 18px;
  font-family: "Nunito";
  color: #424242;
  font-weight: 500;
}
.search:focus {
  outline: none;
}
.icon {
  font-size: 25;
  color: #2980b9;
}
.article {
  border-style: solid;
  color: #444;
  border-width: 1px;
}
</style>
