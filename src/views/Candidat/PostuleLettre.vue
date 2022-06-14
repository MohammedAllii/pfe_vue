<template>
  <navbar-view />
  <br />
  <v-divider></v-divider>
  <div class="text-center" style="padding: 4rem">
    <!--partie telecharger lettre formulaire-->
    <h1>Lettres de Motivations</h1>
    <p>
      Ajouter votre lettre de motivation vous permet de <br />postuler très
      rapidement à de nombreuses offres<br />depuis tous vos appareils
    </p>
  </div>
  <div>
    <v-container class="text-center" fluid>
      <v-row>
        <v-col cols="12" md="4">
          <img
            src=" https://www.hloom.com/images/cle-banner.svg "
            style="width: 180px; height: 180px"
          />
        </v-col>
        <v-col cols="12" md="4">
          <div style="margin-top: 20px">
            <h5 class="text-uppercase" style="color: green">
              Télécharger votre lettre de motivation
            </h5>
            <p>
              Téléchargez votre lettre de motivation au format de votre choix
            </p>
          </div>
        </v-col>
        <v-col cols="12" md="4">
          <v-col cols="auto">
            <v-dialog transition="dialog-bottom-transition">
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
              <template v-slot:default="{ isActive }">
                <v-card>
                  <div>
                    <center>
                      <form
                        style="
                          max-width: 350px;
                          max-height: 390px;
                          margin: 100px;
                        "
                      >
                        <div>
                          <v-img
                            src=" https://www.hloom.com/images/cle-banner.svg "
                            style="width: 100px; height: 50px"
                          >
                          </v-img>
                          <p>
                            Téléchargez votre lettre de motivation au format de
                            votre choix.
                          </p>
                        </div>
                        <form @submit.prevent="submit">
                          <div class="input-icons">
                            <v-file-input
                              label="File input"
                              @change="onChange"
                            ></v-file-input>
                          </div>
                          <div class="input-icons">
                            <v-icon>mdi-account</v-icon>
                            <input
                              class="input-field"
                              type="text"
                              v-model="titre1"
                              placeholder="Entrer Titre"
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
                              v-if="titr1 != '' && this.image != null"
                              type="submit"
                              >go!</v-btn
                            >
                          </v-hover>
                          <br />
                          <v-hover>
                            <v-btn
                              color="blue"
                              rounded
                              flat
                              block
                              tile
                              @click="isActive.value = false"
                              >cancel</v-btn
                            >
                          </v-hover>
                          <br />
                        </form>
                      </form>
                    </center>
                  </div>
                </v-card>
              </template>
            </v-dialog>
          </v-col>
        </v-col>
      </v-row>
      <v-divider></v-divider>
    </v-container>
    <!-- partie creer lettre formulaire-->
    <v-container class="text-center" fluid>
      <v-row align="center">
        <v-col cols="12" md="4">
          <img
            src="https://www.hloom.com/images/banner-cover-letter-format.png"
            style="width: 170px; height: 170px"
          />
        </v-col>
        <v-col cols="12" md="4">
          <div style="margin-top: 20px">
            <h5 class="text-uppercase" style="color: green">
              Créer une lettre de motivation
            </h5>

            <p>Créez un modèle de lettre de motivation de votre choix.</p>
          </div>
        </v-col>
        <v-col cols="12" md="4">
          <v-row justify="center">
            <v-dialog
              v-model="dialog"
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
                  <v-btn icon dark @click="dialog = false">
                    <v-icon>mdi-close</v-icon>
                  </v-btn>
                  <v-toolbar-title>Close</v-toolbar-title>
                  <v-spacer></v-spacer>
                </v-toolbar>
                <v-container fluid align="center">
                  <v-row>
                    <v-col cols="12" md="12">
                      <p class="text-h6">
                        <v-img
                          src="https://www.hloom.com/images/banner-cover-letter-format.png"
                          style="width: 80px; height: 80px"
                        ></v-img
                        >Créer votre lettre
                      </p>
                      <p>
                        Ajouter votre lettre de motivation vous permet de
                        postuler très rapidement
                      </p>
                    </v-col>
                    <v-row>
                      <v-col cols="12" md="6">
                        <v-text-field
                          label="Enter your title"
                          v-model="titre"
                          type="text"
                          variant="outlined"
                          clearable
                          clear-icon="mdi-cancel"
                          prepend-inner-icon="mdi-emoticon-excited-outline"
                        ></v-text-field>
                      </v-col>
                      <v-col cols="12" md="6">
                        <v-text-field
                          label="Enter your profession"
                          v-model="poste"
                          variant="outlined"
                          clearable
                          clear-icon="mdi-cancel"
                          prepend-inner-icon="mdi-brain"
                        ></v-text-field>
                      </v-col>
                    </v-row>
                  </v-row>
                  <v-row>
                    <v-col cols="12" md="6">
                      <v-text-field
                        label="Enter your phone Number"
                        v-model="phone"
                        variant="outlined"
                        clearable
                        clear-icon="mdi-cancel"
                        prepend-inner-icon="mdi-cellphone-android"
                      ></v-text-field>
                    </v-col>
                    <v-col cols="12" md="6">
                      <v-text-field
                        label="Enter your Email"
                        v-model="email"
                        type="email"
                        variant="outlined"
                        clearable
                        clear-icon="mdi-cancel"
                        prepend-inner-icon="mdi-email"
                      ></v-text-field>
                    </v-col>
                  </v-row>
                  <v-row>
                    <v-col cols="12" md="2">
                      <p>Enter your Lettre!</p>
                    </v-col>
                    <v-col cols="12" md="6">
                      <v-textarea
                        v-model="contenu"
                        auto-grow
                        filled
                        color="blue"
                        label="Bio"
                        rows="1"
                      ></v-textarea>
                    </v-col>
                    <v-col cols="12" md="4">
                      <v-btn rounded flat>Annuler</v-btn>
                      <v-btn
                        rounded
                        flat
                        color="green"
                        @click.prevent="lettreRegister"
                        >Enregistrer</v-btn
                      ></v-col
                    >
                  </v-row>
                </v-container>
              </v-card>
            </v-dialog>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
  </div>
  <v-divider></v-divider>
  <v-container>
    <v-banner
      lines="six"
      icon="mdi-account-tie"
      color="grey"
      class="my-4"
      v-for="lettre in lettres"
      :key="lettre.id"
    >
      <v-banner-text>
        <div v-if="lettre.pdf == null">
          <router-link
            :to="{ name: 'lettreform', params: { id: lettre.id } }"
            style="text-decoration: none"
            ><h5>{{ lettre.titre }}</h5>
          </router-link>
        </div>
        <div v-if="lettre.pdf != null">
          <h5>{{ lettre.titre }}</h5>
        </div>
        <div v-if="lettre.pdf == null">
          <h6>
            <v-icon icon="mdi-file-check-outline"></v-icon>CATCH IT LETTRE
          </h6>
        </div>
        <div v-if="lettre.pdf != null">
          <h6>
            <a
              v-bind:href="'../lettres/' + lettre.pdf"
              style="text-decoration: none"
              target="blank"
              ><v-icon icon="mdi-file-pdf-box"></v-icon
              >{{ user.name }} Lettre</a
            >
          </h6>
        </div>
        <v-chip class="ma-2" color="black" variant="outlined">
          {{ lettre.added }}
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
            <div v-if="lettre.pdf == null">
              <v-list>
                <v-list-item>
                  <router-link
                    :to="{ name: 'lettreform', params: { id: lettre.id } }"
                    style="text-decoration: none"
                    ><v-btn v-text="'afficher'"></v-btn
                  ></router-link>
                </v-list-item>
                <v-list-item>
                  <router-link
                    :to="{ name: 'modifierlettre', params: { id: lettre.id } }"
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
                          ><v-icon size="50">mdi-emoticon-cry-outline </v-icon>
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
                            @click.prevent="deletelettre(lettre.id)"
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
            <div v-if="lettre.pdf != null">
              <v-list>
                <v-list-item>
                  <a
                    v-bind:href="'../lettres/' + lettre.pdf"
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
                          ><v-icon size="50">mdi-emoticon-cry-outline </v-icon>
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
                            @click.prevent="deletelettre(lettre.id)"
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
                    v-bind:href="'../lettres/' + lettre.pdf"
                    style="text-decoration: none"
                    target="blank"
                    v-bind:download="lettre.pdf"
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
  <footer-view />
</template>
<script>
import axios from "axios";
import NavbarView from "@/components/NavbarView.vue";
export default {
  name: "AddLettre",
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
      titre: "",
      titre1: "",
      id_user: "",
      error: "",
      dialog: false,
      dialog2: false,
      lettres: {},
      image: null,
      contenu: "",
      phone: "",
      imgs: {},
    };
  },
  mounted() {
    this.allLettres();
  },
  methods: {
    lettreRegister() {
      this.$store
        .dispatch("lettreRegisterAction", {
          name: this.user.name,
          titre: this.titre,
          email: this.email,
          poste: this.poste,
          contenu: this.contenu,
          phone: this.phone,
          id_user: this.user.id,
        })
        .then((result) => {
          console.log(result);
          this.$toast.success(" Lettre Ajouter avec succés.", {
            position: "top-right",
          });
          this.$router.go(0);
        })
        .catch((err) => {
          this.error = " Registration faild";
          console.log(err.message);
        });
    },
    async allLettres() {
      axios
        .get("http://localhost:8000/api/auth/allLettres/" + this.user.id)
        .then((response) => {
          this.lettres = response.data;
        });
    },
    onChange(e) {
      console.log("selected file", e.target.files[0]);
      this.image = e.target.files[0];
    },
    submit() {
      let fd = new FormData();
      fd.append("img", this.image);
      fd.append("titre", this.titre1);
      fd.append("id_user", this.user.id);
      axios
        .post("http://localhost:8000/api/auth/downloadlettre", fd, {})
        .then((res) => {
          console.log("response", res.data);
          this.$router.go(0);
        })
        .catch((err) => console.log(err));
    },
    async deletelettre($id) {
      axios
        .delete("http://localhost:8000/api/auth/deletelettre/" + $id, {})
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
<style>
.dialog-bottom-transition-enter-active,
.dialog-bottom-transition-leave-active {
  transition: transform 0.2s ease-in-out;
}
</style>
