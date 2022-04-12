<template>
  <side-bar />

  <v-card
    style="background: linear-gradient(87deg, #2dce89, #2dcecc) !important"
    height="500px"
    tile
    flat
    class="d-flex align-center"
  >
    <v-row>
      <v-col
        cols="12"
        xs="12"
        sm="6"
        md="4"
        lg="3"
        v-for="stat in Statistics"
        :key="stat.title"
      >
        <v-card class="mx-auto" max-width="250" max-height="300" outlined>
          <v-list-item three-line>
            <v-list-item-content>
              <div class="text-overline mb-4">
                {{ stat.title }}
              </div>
              <v-icon>{{ stat.icon }}</v-icon>
              <v-list-item-subtitle
                >Greyhound divisely hello coldly
                fonwderfully</v-list-item-subtitle
              >
            </v-list-item-content>
          </v-list-item>
        </v-card>
      </v-col>
    </v-row>
  </v-card>
  <div class="card-body">
    <v-table class="table table-dark">
      <thead>
        <tr>
          <th scope="col">Name</th>
          <th scope="col">Email</th>
          <th scope="col">Poste</th>
          <th scope="col">Github</th>
          <th scope="col">LinkedIn</th>
          <th scope="col">Phone</th>
          <th scope="col">Description</th>
          <th scope="col">Interet</th>
        </tr>
      </thead>
      <tbody v-for="cv in cvs" :key="cv.id">
        <tr>
          <td>{{ cv.name }}</td>
          <td>{{ cv.email }}</td>
          <td>{{ cv.poste }}</td>
          <td>{{ cv.github }}</td>
          <td>{{ cv.linkedin }}</td>
          <td>{{ cv.phone }}</td>
          <td>{{ cv.description }}</td>
          <td>{{ cv.interet }}</td>
          <td></td>
        </tr>
      </tbody>
    </v-table>
  </div>
</template>

<script>
import SideBar from "@/components/SideBar.vue";
import axios from "axios";
export default {
  data() {
    return {
      cvs: {},
    };
  },
  components: { SideBar },
  computed: {
    user() {
      return this.$store.getters.get_user;
    },
  },
  mounted() {
    this.allCv();
  },
  methods: {
    updateProfile() {
      this.$store
        .dispatch("updateUserProfileAction", {
          name: this.user.name,
          email: this.user.email,
        })
        .then((res) => {
          console.log(res);
          console.log("profile was update");
        })
        .catch((err) => {
          console.log(err);
        });
    },
    async allCv() {
      axios
        .get("http://localhost:8000/api/auth/allCv/" + this.user.id)
        .then((response) => {
          this.cvs = response.data;
          console.log(response.data);
        });
    },
    go(id) {
      axios
        .get("http://localhost:8000/api/auth/affichecv/" + id)
        .then((response) => {
          this.cvs = response.data;
          console.log(response.data);
        });
      this.$router.push("/affiche");
    },
  },
};
</script>
