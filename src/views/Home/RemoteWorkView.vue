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
  <v-container>
    <div>
      <v-tabs fixed-tabs background-color="#F5F5F5" dark>
        <v-tab to="/"> Relevant Jobs </v-tab>
        <v-tab to="/internships"> internships </v-tab>
        <v-tab to="/fulltime"> Full time WORK </v-tab>
        <v-tab to="remotework"> Remote work </v-tab>
      </v-tabs>
    </div>
    <br />
    <br />
    <v-row justify>
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
    </v-row>
  </v-container>
  <br />
  <br />
  <v-container>
    <v-row>
      <v-col cols="12" md="12" lg="12" v-for="cv in cvs" :key="cv.id">
        <v-avatar color="#F4FF81" size="40">
          <v-icon> {{ cv.name }} </v-icon>
        </v-avatar>
        <p>{{ cv.email }}</p>
        <v-btn flat rounded color="#F4FF81" style="margin-right: 20px">
          CHECK THIS!
        </v-btn>
      </v-col>
    </v-row>
  </v-container>

  <v-container>
    <v-btn
      rounded
      flat
      color="green"
      style="margin-top: 20px; margin-left: 500px"
    >
      View all Jobs!
    </v-btn>
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
  <footer-view />
</template>
<script>
import NavbarView from "@/components/NavbarView.vue";
import FooterView from "@/components/FooterView.vue";
import axios from "axios";
export default {
  data() {
    return {
      cvs: {},
    };
  },
  components: { NavbarView, FooterView },
  computed: {
    user() {
      return this.$store.getters.get_user;
    },
  },
  mounted() {
    this.allCv();
  },
  methods: {
    async allCv() {
      axios
        .get("http://localhost:8000/api/auth/allCv/" + this.user.id)
        .then((response) => {
          this.cvs = response.data;
          console.log(response.data);
        });
    },
  },
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
