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
            src=" https://www.mastersbooking.fr/sites/default/files/styles/img_blog/public/field/image/resume-2296951_1920_1_0.png?itok=ESjYBHbn "
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
                        src="https://www.mastersbooking.fr/sites/default/files/styles/img_blog/public/field/image/resume-2296951_1920_1_0.png?itok=ESjYBHbn"
                        style="width: 100px; height: 50px"
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

                      <div>
                        <v-select
                          v-model="localite1"
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
            src="https://media.istockphoto.com/vectors/resume-vector-icon-vector-id1220384194?k=20&m=1220384194&s=612x612&w=0&h=DjJfjjxoQb6xqDcYfkTWVQlbkbUGwg4ys09JEy9YCPg="
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
                            style="width: 80px; height: 40px"
                          >
                          </v-img>
                          <p>
                            Ajouter votre CV vous permet de postuler très
                            rapidement à de nombreuses opportunités depuis
                            n'importe quel appareil.
                          </p>
                        </div>
                        <div class="input-icons">
                          <v-icon>mdi-account-details</v-icon>
                          <input
                            class="input-field"
                            type="text"
                            v-model="user.specialite"
                            placeholder="Votre poste actuel ou profession"
                          />
                        </div>

                        <div>
                          <v-select
                            v-model="user.gouvernorat"
                            label="Votre Adresse actuel"
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
          <div v-if="cv.pdf == null">
            <router-link
              :to="{ name: 'cvview', params: { id: cv.id } }"
              style="text-decoration: none"
              ><h5>{{ cv.poste }}</h5>
            </router-link>
          </div>
          <div v-if="cv.pdf != null">
            <h5>{{ cv.poste }}</h5>
          </div>
          <h6><v-icon icon="mdi-map-marker"></v-icon>{{ cv.adresse }}</h6>
          <div v-if="cv.pdf == null">
            <h6><v-icon icon="mdi-file-check-outline"></v-icon>CATCH IT CV</h6>
          </div>
          <div v-if="cv.pdf != null">
            <h6>
              <a
                v-bind:href="'../cvs/' + cv.pdf"
                style="text-decoration: none"
                target="blank"
                ><v-icon icon="mdi-file-pdf-box"></v-icon>{{ user.name }} CV</a
              >
            </h6>
          </div>
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
              <div v-if="cv.pdf == null">
                <v-list>
                  <v-list-item>
                    <router-link
                      :to="{ name: 'cvform', params: { id: cv.id } }"
                      style="text-decoration: none"
                      ><v-btn v-text="'afficher'"></v-btn
                    ></router-link>
                  </v-list-item>
                  <v-list-item>
                    <router-link
                      :to="{ name: 'cvview', params: { id: cv.id } }"
                      style="text-decoration: none"
                      ><v-btn v-text="'modifier'"></v-btn
                    ></router-link>
                  </v-list-item>
                  <v-list-item>
                    <v-row justify="center">
                      <v-dialog v-model="dialog2" persistent>
                        <template v-slot:activator="{ props }">
                          <v-hover>
                            <v-btn v-bind="props" v-text="'supprimer'"></v-btn>
                          </v-hover>
                        </template>
                        <v-card>
                          <v-card-title
                            ><v-icon size="50"
                              >mdi-emoticon-cry-outline
                            </v-icon>
                          </v-card-title>
                          <v-card-text
                            >Êtes-vous certain de vouloir supprimer ce cv
                            ?</v-card-text
                          >
                          <v-card-actions>
                            <v-spacer></v-spacer>
                            <v-btn
                              rounded
                              flat
                              style="
                                background-color: green;
                                padding-left: 40px;
                                padding-right: 50px;
                              "
                              color="white"
                              text
                              @click="dialog2 = false"
                            >
                              Annuler
                            </v-btn>
                            <v-btn
                              rounded
                              flat
                              style="
                                background-color: red;
                                padding-left: 40px;
                                padding-right: 50px;
                              "
                              color="white"
                              text
                              @click.prevent="deletecv(cv.id)"
                            >
                              Delete
                            </v-btn>
                          </v-card-actions>
                        </v-card>
                      </v-dialog>
                    </v-row>
                  </v-list-item>
                </v-list>
              </div>
              <div v-if="cv.pdf != null">
                <v-list>
                  <v-list-item>
                    <a
                      v-bind:href="'../cvs/' + cv.pdf"
                      style="text-decoration: none"
                      target="blank"
                      ><v-btn v-text="'afficher'"></v-btn
                    ></a>
                  </v-list-item>
                  <v-list-item>
                    <v-row justify="center">
                      <v-dialog v-model="dialog2" persistent>
                        <template v-slot:activator="{ props }">
                          <v-hover>
                            <v-btn v-bind="props" v-text="'supprimer'"></v-btn>
                          </v-hover>
                        </template>
                        <v-card>
                          <v-card-title
                            ><v-icon size="50"
                              >mdi-emoticon-cry-outline
                            </v-icon>
                          </v-card-title>
                          <v-card-text
                            >Êtes-vous certain de vouloir supprimer ce cv
                            ?</v-card-text
                          >
                          <v-card-actions>
                            <v-spacer></v-spacer>
                            <v-btn
                              rounded
                              flat
                              style="
                                background-color: green;
                                padding-left: 40px;
                                padding-right: 50px;
                              "
                              color="white"
                              text
                              @click="dialog2 = false"
                            >
                              Annuler
                            </v-btn>
                            <v-btn
                              rounded
                              flat
                              style="
                                background-color: red;
                                padding-left: 40px;
                                padding-right: 50px;
                              "
                              color="white"
                              text
                              @click.prevent="deletecv(cv.id)"
                            >
                              Delete
                            </v-btn>
                          </v-card-actions>
                        </v-card>
                      </v-dialog>
                    </v-row>
                  </v-list-item>
                  <v-list-item>
                    <a
                      v-bind:href="'../cvs/' + cv.pdf"
                      style="text-decoration: none"
                      target="blank"
                      v-bind:download="cv.pdf"
                      ><v-btn v-text="'Télécharger'"></v-btn
                    ></a>
                  </v-list-item>
                </v-list>
              </div>
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
      adresse: "",
      email1: "",
      poste1: "",
      localite1: "",
      id_user: "",
      error: "",
      dialog: false,
      dialog2: false,
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
      this.$store
        .dispatch("cvRegisterAction", {
          name: this.user.name,
          email: this.user.email,
          poste: this.user.specialite,
          adresse: this.user.gouvernorat,
          id_user: this.user.id,
        })
        .then((result) => {
          console.log(result);
          this.$router.go(0);
          this.$toast.success(" Cv Ajouter avec succés.", {
            position: "top-right",
          });
        })
        .catch((err) => {
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
      fd.append("id_user", this.user.id);
      axios
        .post("http://localhost:8000/api/auth/downloadcv", fd, {})
        .then((res) => {
          console.log("response", res.data);
          this.$toast.success(" Cv Télecharger avec success.", {
            position: "top-right",
          });
          this.$router.go(0);
        })
        .catch((err) => console.log(err));
    },
    async deletecv($id) {
      axios
        .delete("http://localhost:8000/api/auth/deletecv/" + $id, {})
        .then((response) => {
          console.log(response);
          this.$toast.error(" Cv Deleted.", {
            position: "top-right",
          });
          this.$router.go(0);
        })
        .catch((err) => {
          this.error = err;
        });
    },
  },
};
</script>
<style>
.dialog-bottom-transition-enter-active,
.dialog-bottom-transition-leave-active {
  transition: transform 0.2s ease-in-out;
}
</style>
