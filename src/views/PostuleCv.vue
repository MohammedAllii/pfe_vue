<template>
  <navbar-view />
  <br />
  <v-divider></v-divider>
  <div class="text-center" style="padding: 4rem">
    <h1>POSTULER VOTRE CV</h1>
    <p>
      Ajouter votre CV vous permet de postuler très rapidement <br />
      à de nombreuses opportunités depuis n'importe quel appareil.
    </p>
  </div>
  <div>
    <v-container class="text-center" fluid>
      <v-row>
        <v-col cols="12" md="4">
          <img
            src=" https://icons.iconarchive.com/icons/inipagi/job-seeker/256/cv-icon.png "
            style="width: 110px; height: 110px"
          />
        </v-col>
        <div style="margin-top: 20px">
          <h1>Télécharger votre CV</h1>

          <p>Téléchargez votre CV et postulez en un seul clic!</p>
        </div>
        <v-row justify="center">
          <v-dialog
            v-model="dialog"
            fullscreen
            :scrim="false"
            transition="dialog-bottom-transition"
          >
            <template v-slot:activator="{ props }">
              <v-btn
                rounded
                color="blue"
                style="margin-top: 50px"
                v-bind="props"
              >
                Télecharger !
              </v-btn>
            </template>
            <v-card>
              <v-toolbar dark color="blue">
                <v-btn icon dark @click="dialog = false">
                  <v-icon>mdi-close</v-icon>
                </v-btn>
                <v-toolbar-title>Cancel</v-toolbar-title>
                <v-spacer></v-spacer>
              </v-toolbar>
              <div>
                <center>
                  <form style="max-width: 450px; margin: auto">
                    <div>
                      <v-img
                        src="https://cdn-icons-png.flaticon.com/512/3135/3135800.png"
                        style="width: 100px; height: 100px"
                      >
                      </v-img>
                      <p>
                        Ajouter votre CV vous permet de postuler très rapidement
                        à de nombreuses opportunités depuis n'importe quel
                        appareil.
                      </p>
                    </div>
                    <form @submit.prevent="submit">
                      <div class="input-icons">
                        <v-file-input
                          label="File input"
                          outlined
                          dense
                          @change="onChange"
                        ></v-file-input>
                      </div>
                      <div class="input-icons">
                        <v-icon>mdi-account</v-icon>
                        <input
                          class="input-field"
                          type="email"
                          v-model="email1"
                          placeholder="Entrer Email"
                        />
                      </div>
                      <div class="input-icons">
                        <v-icon>mdi-account-details</v-icon>
                        <input
                          class="input-field"
                          type="text"
                          v-model="poste1"
                          placeholder="Votre poste actuel ou profession"
                        />
                      </div>

                      <div class="input-icons">
                        <v-icon>mdi-map-marker-radius</v-icon>
                        <input
                          class="input-field"
                          type="text"
                          v-model="localite1"
                          placeholder="Votre localité actuelle"
                        />
                      </div>
                      <br />
                      <v-spacer></v-spacer>
                      <v-hover>
                        <v-btn
                          color="blue"
                          rounded
                          flat
                          block
                          tile
                          type="submit"
                          >go!</v-btn
                        >
                      </v-hover>
                      <br />
                      <v-hover>
                        <v-btn color="blue" rounded flat block tile
                          >cancel</v-btn
                        >
                      </v-hover>
                      <br />
                    </form>
                  </form>
                </center>
              </div>
            </v-card>
          </v-dialog>
        </v-row>
      </v-row>
      <v-divider></v-divider>
    </v-container>
    <v-container class="text-center" fluid>
      <v-row align="center">
        <v-col cols="12" md="4">
          <img
            src="https://icons.iconarchive.com/icons/inipagi/job-seeker/256/cv-icon.png"
            style="width: 150px; height: 150px"
          />
        </v-col>
        <div style="margin-top: 20px">
          <h1>Créer votre CV</h1>

          <p>création rapide de CV pour en poster un.!</p>
        </div>
        <v-row justify="center">
          <v-dialog
            v-model="dialog1"
            fullscreen
            :scrim="false"
            transition="dialog-bottom-transition"
          >
            <template v-slot:activator="{ props }">
              <v-btn
                v-bind="props"
                rounded
                color="blue"
                style="margin-top: 50px; margin-left: 80px"
              >
                Créer un !
              </v-btn>
            </template>
            <v-card>
              <v-toolbar dark color="blue">
                <v-btn icon dark @click="dialog1 = false">
                  <v-icon>mdi-close</v-icon>
                </v-btn>
                <v-toolbar-title>Cancel</v-toolbar-title>
                <v-spacer></v-spacer>
              </v-toolbar>
              <div>
                <v-container fluid style="margin-top: 50px">
                  <div>
                    <center>
                      <form style="max-width: 450px; margin: auto">
                        <div>
                          <v-img
                            src="https://cdn-icons-png.flaticon.com/512/3135/3135800.png"
                            style="width: 80px; height: 80px"
                          >
                          </v-img>
                          <p>
                            Ajouter votre CV vous permet de postuler très
                            rapidement à de nombreuses opportunités depuis
                            n'importe quel appareil.
                          </p>
                        </div>
                        <div class="input-icons">
                          <v-icon>mdi-account</v-icon>
                          <input
                            class="input-field"
                            type="email"
                            v-model="email"
                            placeholder="Entrer Email"
                          />
                        </div>
                        <div class="input-icons">
                          <v-icon>mdi-account-details</v-icon>
                          <input
                            class="input-field"
                            type="text"
                            v-model="poste"
                            placeholder="Votre poste actuel ou profession"
                          />
                        </div>

                        <div class="input-icons">
                          <v-icon>mdi-map-marker-radius</v-icon>
                          <v-select
                            v-model="localite"
                            label="Votre localite actuel"
                            :items="[
                              'Ariana',
                              'Béja',
                              'Ben Arous',
                              'Bizerte',
                              'Gabès',
                              'Gafsa',
                              'Jendouba',
                              'Kairouan',
                              'Kasserine',
                              'Kébili',
                              'Kef',
                              'Mahdia',
                              'Manouba',
                              'Médenine',
                              'Monastir',
                              'Nabeul',
                              'Sfax',
                              'Sidi Bouzid',
                              ' Siliana',
                              'Sousse',
                              ' Tataouine',
                              'Tozeur',
                              'Tunis',
                              'Zaghouan',
                            ]"
                          ></v-select>
                        </div>
                        <br />
                        <v-spacer></v-spacer>
                        <v-hover>
                          <v-btn
                            color="blue"
                            rounded
                            flat
                            block
                            tile
                            @click.prevent="cvRegister"
                            >go!</v-btn
                          >
                        </v-hover>
                        <br />
                        <v-hover>
                          <v-btn color="blue" rounded flat block tile
                            >cancel</v-btn
                          >
                        </v-hover>
                        <br />
                      </form>
                    </center>
                  </div>
                </v-container>
                <v-divider></v-divider>
                <footer-view />
              </div>
            </v-card>
          </v-dialog>
        </v-row>
      </v-row>
    </v-container>
  </div>
  <v-divider></v-divider>
  <div>
    <v-container>
      <br />
      <br />
      <v-divider></v-divider>
    </v-container>
    <v-container>
      <v-banner
        lines="six"
        icon="mdi-account-tie"
        color="grey"
        class="my-4"
        v-for="cv in cvs"
        :key="cv.id"
      >
        <v-banner-text>
          <router-link
            :to="{ name: 'cvview', params: { id: cv.id } }"
            style="text-decoration: none"
            ><h5>{{ cv.poste }}</h5>
          </router-link>
          <h6><v-icon icon="mdi-map-marker"></v-icon>{{ cv.localite }}</h6>
          <h6><v-icon icon="mdi-file-check-outline"></v-icon>CATCH IT CV</h6>
          <v-chip class="ma-2" color="black" variant="outlined">
            {{ cv.added }}
            <v-icon end icon="mdi-clock"></v-icon>
          </v-chip>
        </v-banner-text>
        <template v-slot:actions>
          <div class="text-center">
            <v-menu transition="fab-transition">
              <template v-slot:activator="{ props }">
                <v-btn dark color="primary" v-bind="props">
                  <v-icon>mdi-format-list-bulleted-type</v-icon>
                </v-btn>
              </template>
              <v-list>
                <v-list-item>
                  <v-list-item-title v-text="'afficher'"></v-list-item-title>
                </v-list-item>
                <v-list-item>
                  <v-list-item-title v-text="'modifier'"></v-list-item-title>
                </v-list-item>
                <v-list-item>
                  <v-list-item-title v-text="'supprimer'"></v-list-item-title>
                </v-list-item>
                <v-list-item>
                  <v-list-item-title v-text="'Télécharger'"></v-list-item-title>
                </v-list-item>
              </v-list>
            </v-menu>
          </div>
        </template>
      </v-banner>
    </v-container>
  </div>

  <footer-view />
</template>
<script>
import axios from "axios";
import NavbarView from "@/components/NavbarView.vue";
export default {
  name: "AddCv",
  computed: {
    user() {
      return this.$store.getters.get_user;
    },
  },
  components: { NavbarView },
  data() {
    return {
      name: "",
      email: "",
      poste: "",
      localite: "",
      id_user: "",
      error: "",
      isLoading: false,
      dialog: false,
      cvs: {},
      dialog1: false,
      image: null,
      imgs: {},
    };
  },
  mounted() {
    this.allCv();
  },
  methods: {
    cvRegister() {
      this.isLoading = true;
      this.$store
        .dispatch("cvRegisterAction", {
          name: this.user.name,
          email: this.email,
          poste: this.poste,
          localite: this.localite,
          id_user: this.user.id,
        })
        .then((result) => {
          console.log(result);
          this.isLoading = false;
          this.$router.go(0);
        })
        .catch((err) => {
          this.isLoading = false;
          this.error = " Registration faild";
          console.log(err.message);
        });
    },
    async allCv() {
      axios
        .get("http://localhost:8000/api/auth/allCv/" + this.user.id)
        .then((response) => {
          this.cvs = response.data;
        });
    },
    onChange(e) {
      console.log("selected file", e.target.files[0]);
      this.image = e.target.files[0];
    },
    submit() {
      let fd = new FormData();
      fd.append("img", this.image);
      fd.append("name", this.user.name);
      fd.append("email", this.email1);
      fd.append("poste", this.poste1);
      fd.append("localite", this.localite1);
      axios
        .post("http://localhost:8000/api/auth/uploadcv", fd, {})
        .then((res) => {
          console.log("response", res.data);
          this.$router.go(0);
        })
        .catch((err) => console.log(err));
    },
  },
};
</script>
