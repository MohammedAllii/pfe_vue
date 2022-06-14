<template>
  <navbar-view />
  <v-divider></v-divider>
  <div>
    <v-container align="center">
      <h5>Mon compte</h5>
    </v-container>
    <v-container>
      <div align="center">
        <v-img
          rounded
          style="border-radius: 190px; width: 15%"
          v-bind:src="'../images/' + users.avatar"
        ></v-img>
        <v-col cols="auto">
          <v-dialog transition="dialog-top-transition">
            <template v-slot:activator="{ props }">
              <v-btn flat rounded v-bind="props"
                ><v-icon>mdi-image-edit</v-icon></v-btn
              ><br /><strong>{{ users.name }} {{ users.last_name }}</strong>
            </template>
            <template v-slot:default="{ isActive }">
              <v-card>
                <v-toolbar color="primary">Télécharger votre photo</v-toolbar>
                <v-icon style="margin-left: 200px" size="50">
                  mdi-check-outline
                </v-icon>
                <form @submit.prevent="submit">
                  <input type="file" @change="onChange" />
                  <v-card-actions class="justify-end">
                    <v-btn text rounded @click="isActive.value = false"
                      >Annuler</v-btn
                    >
                    <v-btn text rounded type="submit">ENregistrer</v-btn>
                  </v-card-actions>
                </form>
              </v-card>
            </template>
          </v-dialog>
        </v-col>
      </div>
    </v-container>
    <v-container align="center">
      <v-row justify="center" v-if="user.role == 'company'">
        <v-dialog
          v-model="dialog1"
          fullscreen
          :scrim="false"
          transition="dialog-bottom-transition"
        >
          <template v-slot:activator="{ props }">
            <v-btn flat rounded v-bind="props"><v-icon>mdi-cog</v-icon></v-btn>
          </template>
          <v-card>
            <v-toolbar dark color="primary">
              <v-btn icon dark @click="dialog1 = false">
                <v-icon>mdi-close</v-icon>
              </v-btn>
              <v-toolbar-title>Close</v-toolbar-title>
              <v-spacer></v-spacer>
            </v-toolbar>
            <v-container fluid align="center">
              <h5 class="font-italic" style="color: cornflowerblue">
                <v-icon>mdi-account-group-outline</v-icon> Les Données
                personnelles
              </h5>
              <br />
              <v-row>
                <v-col cols="12" sm="6">
                  <v-text-field
                    v-model="users.name"
                    label="Full Name"
                    variant="outlined"
                    clearable
                    clear-icon="mdi-cancel"
                  ></v-text-field>
                </v-col>
                <v-col cols="12" sm="6">
                  <v-text-field
                    label="ex:1680 "
                    v-model="users.annee_fondation"
                    placeholder="Placeholder"
                    variant="outlined"
                    prepend-inner-icon="mdi-account"
                  ></v-text-field>
                </v-col>
              </v-row>
              <v-row>
                <v-col cols="12" sm="6">
                  <v-text-field
                    label="Le nombre des Employees "
                    v-model="users.nb_employee"
                    placeholder="Placeholder"
                    variant="outlined"
                    prepend-inner-icon="mdi-account"
                  ></v-text-field>
                </v-col>
                <v-col cols="12" sm="6">
                  <v-text-field
                    label="Location "
                    v-model="users.gouvernorat"
                    placeholder="Placeholder"
                    variant="outlined"
                    prepend-inner-icon="mdi-map-marker"
                  ></v-text-field>
                </v-col>
              </v-row>
              <v-row>
                <v-col cols="12" sm="6">
                  <v-text-field
                    label="Le Headquarts "
                    placeholder="Placeholder"
                    v-model="users.adresse"
                    variant="outlined"
                    prepend-inner-icon="mdi-garage"
                  ></v-text-field>
                </v-col>
                <v-col cols="12" md="6">
                  <v-textarea
                    auto-grow
                    filled
                    v-model="users.description_entreprise"
                    color="deep-purple"
                    label="Description de la Société"
                    rows="1"
                    type="textarea"
                  ></v-textarea>
                </v-col>
              </v-row>
              <v-row>
                <v-col cols="12" md="2">
                  <v-text-field
                    color="success"
                    label="LinkedIn"
                    v-model="users.linkedin"
                    prepend-inner-icon="mdi-linkedin"
                    placeholder="Placeholder"
                    variant="outlined"
                  ></v-text-field>
                </v-col>
                <v-col cols="12" md="2">
                  <v-text-field
                    color="success"
                    v-model="users.facebook"
                    label="Facebook"
                    prepend-inner-icon="mdi-facebook"
                    placeholder="Placeholder"
                    variant="outlined"
                  ></v-text-field>
                </v-col>
                <v-col cols="12" md="2">
                  <v-text-field
                    color="success"
                    v-model="users.twitter"
                    label="Twitter"
                    prepend-inner-icon="mdi-twitter"
                    placeholder="Placeholder"
                    variant="outlined"
                  ></v-text-field>
                </v-col>
                <v-col cols="12" md="2">
                  <v-text-field
                    label="ex:https://www.company.com"
                    v-model="users.site_web"
                    type="url"
                    prepend-inner-icon="mdi-web"
                    placeholder="Placeholder"
                    variant="outlined"
                  ></v-text-field>
                </v-col>
              </v-row>
              <v-row>
                <v-btn
                  color="blue"
                  variant="outlined"
                  text
                  class="m-2"
                  rounded
                  flat
                  prepend-icon="mdi-floppy"
                  @click.prevent="updatecompany"
                  style="padding-left: 50px; padding-right: 50px"
                  >Save</v-btn
                >
                <v-btn
                  variant="outlined"
                  color="red"
                  class="m-2"
                  rounded
                  flat
                  prepend-icon="mdi-close-outline"
                  @click="retour"
                  style="padding-left: 50px; padding-right: 50px"
                  >Annuler
                </v-btn>
              </v-row>
            </v-container>
          </v-card>
        </v-dialog>
      </v-row>

      <v-row justify="center" v-if="user.role == 'user'">
        <v-dialog
          v-model="dialog1"
          fullscreen
          :scrim="false"
          transition="dialog-bottom-transition"
        >
          <template v-slot:activator="{ props }">
            <v-btn flat rounded v-bind="props"><v-icon>mdi-cog</v-icon></v-btn>
          </template>
          <v-card>
            <v-toolbar dark color="primary">
              <v-btn icon dark @click="dialog1 = false">
                <v-icon>mdi-close</v-icon>
              </v-btn>
              <v-toolbar-title>Close</v-toolbar-title>
              <v-spacer></v-spacer>
            </v-toolbar>
            <v-container fluid align="center">
              <h5 class="font-italic" style="color: cornflowerblue">
                <v-icon>mdi-account-group-outline</v-icon> Les Données
                personnelles
              </h5>
              <br />
              <v-row>
                <v-col cols="12" sm="6">
                  <v-text-field
                    v-model="users.name"
                    label="Full Name"
                    variant="outlined"
                    clearable
                    clear-icon="mdi-cancel"
                  ></v-text-field>
                </v-col>
                <v-col cols="12" sm="6">
                  <v-text-field
                    v-model="users.last_name"
                    label="Last Name"
                    variant="outlined"
                    clearable
                    clear-icon="mdi-cancel"
                  ></v-text-field>
                </v-col>
              </v-row>
              <v-row>
                <v-col cols="12" md="2">
                  <v-text-field
                    color="success"
                    type="date"
                    label="Date de naissance"
                    v-model="users.date_naissance"
                    prepend-inner-icon="mdi-cake-variant"
                    placeholder="Placeholder"
                    variant="outlined"
                  ></v-text-field>
                </v-col>
                <v-col cols="12" md="2">
                  <v-select
                    label="Civilité"
                    v-model="users.civilite"
                    :items="['Homme', 'Femme', 'Autre']"
                    required
                  ></v-select>
                </v-col>
                <v-col cols="12" md="2">
                  <v-text-field
                    color="success"
                    v-model="users.phone"
                    label="Phone"
                    prepend-inner-icon="mdi-phone"
                    placeholder="Placeholder"
                    variant="outlined"
                  ></v-text-field>
                </v-col>
                <v-col cols="12" sm="6">
                  <v-text-field
                    label="Adresse "
                    placeholder="Placeholder"
                    v-model="users.adresse"
                    variant="outlined"
                    prepend-inner-icon="mdi-garage"
                  ></v-text-field>
                  <v-text-field
                    label="Specialite "
                    placeholder="Placeholder"
                    v-model="users.specialite"
                    variant="outlined"
                    prepend-inner-icon="mdi-garage"
                  ></v-text-field>
                </v-col>
              </v-row>

              <v-row>
                <v-btn
                  color="blue"
                  variant="outlined"
                  text
                  class="m-2"
                  rounded
                  flat
                  prepend-icon="mdi-floppy"
                  @click.prevent="updateuser"
                  style="padding-left: 50px; padding-right: 50px"
                  >Save</v-btn
                >
                <v-btn
                  variant="outlined"
                  color="red"
                  class="m-2"
                  rounded
                  flat
                  prepend-icon="mdi-close-outline"
                  @click="retour"
                  style="padding-left: 50px; padding-right: 50px"
                  >Annuler
                </v-btn>
              </v-row>
            </v-container>
          </v-card>
        </v-dialog>
      </v-row>

      <v-col>
        <h5>Informations professionnelles</h5>
      </v-col>
      <v-divider></v-divider>
      <v-col>
        <h5>Email</h5>
      </v-col>
      <v-col>
        <v-row justify="space-around">
          <v-col cols="auto">
            <v-dialog transition="dialog-bottom-transition">
              <template v-slot:activator="{ props }">
                <v-btn flat rounded v-bind="props">
                  <v-icon right size="20" v-bind="props">mdi-email</v-icon>
                </v-btn>
              </template>
              <template v-slot:default="{ isActive }">
                <v-card>
                  <v-toolbar color="primary"
                    >Changement de votre adresse email sur CATCH IT</v-toolbar
                  >
                  <v-icon style="margin-left: 170px" size="50">
                    mdi-check-outline
                  </v-icon>
                  <v-card-text>
                    <v-form>
                      <v-container>
                        <v-text-field type="email" v-model="users.email">
                        </v-text-field>
                        <div style="color: red" v-if="error">{{ error }}</div>
                      </v-container>
                    </v-form>
                  </v-card-text>
                  <v-card-actions class="justify-end">
                    <v-btn text rounded @click="isActive.value = false"
                      >Annuler</v-btn
                    >
                    <v-btn text rounded @click.prevent="updateemail"
                      >ENregistrer</v-btn
                    >
                  </v-card-actions>
                </v-card>
              </template>
            </v-dialog>
          </v-col>
        </v-row>
      </v-col>
      <h6>{{ users.email }}</h6>
      <v-divider></v-divider>
      <v-col>
        <h5>Mot de passe</h5>
      </v-col>
      <v-col>
        <v-row justify="space-around">
          <v-col cols="auto">
            <v-dialog transition="dialog-bottom-transition">
              <template v-slot:activator="{ props }">
                <v-btn flat rounded v-bind="props">
                  <v-icon right size="20">mdi-lock-reset</v-icon>
                </v-btn>
              </template>
              <template v-slot:default="{ isActive }">
                <v-card>
                  <v-toolbar color="primary"> Changer mot de passe </v-toolbar>
                  <v-icon style="margin-left: 200px" size="50">
                    mdi-check-outline
                  </v-icon>
                  <v-card-text>
                    <v-col cols="12" sm="16">
                      <v-text-field
                        v-model="password"
                        :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
                        :rules="[rules.required, rules.min]"
                        :type="show1 ? 'text' : 'password'"
                        name="input-10-1"
                        label="Nouveau Password"
                        hint="At least 8 characters"
                        counter
                        @click:append="show1 = !show1"
                        style="width: 400px"
                      ></v-text-field>
                    </v-col>
                  </v-card-text>
                  <v-card-actions class="justify-end">
                    <v-btn text rounded @click="isActive.value = false"
                      >Annuler</v-btn
                    >
                    <v-btn text rounded @click.prevent="updatepassword"
                      >ENregistrer</v-btn
                    >
                  </v-card-actions>
                </v-card>
              </template>
            </v-dialog>
          </v-col>
        </v-row>
      </v-col>
      <h6 id="test">* * * * * * * *</h6>
      <br />
      <br />
      <v-btn
        flat
        rounded
        color="blue"
        style="padding-left: 80px; padding-right: 80px"
        @click.prevent="performLogout"
      >
        Se déconnecter
      </v-btn>
      <br />
      <br />
      <br />
      <v-row justify="center">
        <v-dialog v-model="dialog" persistent>
          <template v-slot:activator="{ props }">
            <v-hover
              ><v-btn
                flat
                rounded
                v-bind="props"
                color="grey"
                v-if="user.role != 'admin'"
                style="padding-left: 65px; padding-right: 65px"
              >
                Supprimer ce Compte
              </v-btn>
            </v-hover>
          </template>
          <v-card>
            <v-card-title
              ><v-icon size="50">mdi-emoticon-cry-outline </v-icon>
            </v-card-title>
            <v-card-text
              >Êtes-vous certain de vouloir supprimer votre compte
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
                @click="dialog = false"
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
                @click.prevent="deleteuser"
              >
                Delete
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-row>
    </v-container>
  </div>
  <v-divider></v-divider>
  <footer-view />
</template>

<script>
import axios from "axios";
import NavbarView from "@/components/NavbarView.vue";
import FooterView from "@/components/FooterView.vue";
export default {
  components: { NavbarView, FooterView },
  data() {
    return {
      image: null,
      imgs: {},
      name: "",
      email: "",
      password: "",
      last_name: "",
      site_web: "",
      annee_fondation: "",
      description_entreprise: "",
      nb_employee: "",
      adresse: "",
      gouvernorat: "",
      facebook: "",
      phone: "",
      date_naissance: "",
      specialite: "",
      civilite: "",
      linkedin: "",
      twitter: "",
      users: {},
      error: "",
      idc: this.$route.params.id,
      dialog: false,
      dialog1: false,
      show1: false,
      rules: {
        required: (value) => !!value || "Required.",
        min: (v) => v.length >= 8 || "Min 8 characters",
        emailMatch: () => `The email and password you entered don't match`,
      },
    };
  },
  computed: {
    user() {
      return this.$store.getters.get_user;
    },
  },
  created() {
    this.getUserById();
  },
  methods: {
    async getUserById() {
      let url = "http://localhost:8000/api/auth/afficheuser/" + this.idc;
      await axios.get(url).then((response) => {
        this.users = response.data;
        console.log(response.data);
      });
    },
    performLogout() {
      this.$store
        .dispatch("performLogoutAction")
        .then((res) => {
          console.log(res);
          this.$router.push("/SignIn");
        })
        .catch((err) => {
          console.log(err);
        });
    },
    async deleteuser() {
      axios
        .delete("http://localhost:8000/api/auth/deleteuser/" + this.user.id)
        .then((response) => {
          console.log(response);
          this.$toast.warning(" User deleted.", {
            position: "top-right",
          });
          this.$store.commit("SET_token", null);
          this.$store.commit("SET_user", null);
          this.$store.commit("SET_loggedIn", false);
          this.$store.commit("SET_loggedUser", false);
          this.$store.commit("SET_loggedCompany", false);
          this.$router.go(0);
          this.$router.push("/SignIn");
        });
    },
    async updateemail() {
      axios
        .post("http://localhost:8000/api/auth/updateemail/" + this.user.id, {
          email: this.users.email,
        })
        .then((response) => {
          console.log(response);
          this.$toast.success(" Email updated.", {
            position: "top-right",
          });
          this.$router.go(0);
        })
        .catch((err) => {
          this.error = " Email existe déja";
          console.log(err.message);
        });
    },
    async updatepassword() {
      axios
        .post("http://localhost:8000/api/auth/updatepassword/" + this.user.id, {
          password: this.password,
        })
        .then((response) => {
          console.log(response);
          this.$toast.success(" Password updated.", {
            position: "top-right",
          });
          this.$router.go(0);
        })
        .catch((err) => {
          this.isLoading = false;
          this.error = " impossible de changer password";
          console.log(err.message);
        });
    },
    onChange(e) {
      console.log("selected file", e.target.files[0]);
      this.image = e.target.files[0];
    },
    submit() {
      let fd = new FormData();
      fd.append("img", this.image);
      axios
        .post("http://localhost:8000/api/auth/upload/" + this.user.id, fd)
        .then((res) => {
          console.log("response", res.data);
          this.$toast.success(" image updated.", {
            position: "top-right",
          });
          this.$router.go(0);
        })
        .catch((err) => console.log(err));
    },
    async updatecompany() {
      axios
        .post("http://localhost:8000/api/auth/updatecompany/" + this.user.id, {
          site_web: this.users.site_web,
          name: this.users.name,
          annee_fondation: this.users.annee_fondation,
          nb_employee: this.users.nb_employee,
          gouvernorat: this.users.gouvernorat,
          adresse: this.users.adresse,
          description_entreprise: this.users.description_entreprise,
          linkedin: this.users.linkedin,
          facebook: this.users.facebook,
          twitter: this.users.twitter,
        })
        .then((response) => {
          console.log(response);
          this.$toast.success(" Profil updated.", {
            position: "top-right",
          });
          this.$router.go(0);
        });
    },
    async updateuser() {
      axios
        .post("http://localhost:8000/api/auth/updateuser/" + this.user.id, {
          name: this.users.name,
          last_name: this.users.last_name,
          email: this.users.email,
          specialite: this.users.specialite,
          civilite: this.users.civilite,
          role: this.users.role,
          adresse: this.users.adresse,
        })
        .then((response) => {
          console.log(response);
          this.$toast.success(" Profil updated.", {
            position: "top-right",
          });
          this.$router.go(0);
        });
    },
    retour() {
      this.$router.go(0);
    },
  },
  mounted() {},
};
</script>

<style></style>
