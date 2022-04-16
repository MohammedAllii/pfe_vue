<template>
  <navbar-view />
  <v-divider></v-divider>
  <div>
    <v-container align="center">
      <h5>Mon compte</h5>
    </v-container>
    <v-container>
      <div align="center">
        <v-avatar size="200" style="border-radius: 100%">
          <v-img v-bind:src="'../images/' + users.avatar"></v-img>
        </v-avatar>
        <v-col cols="auto">
          <v-dialog transition="dialog-top-transition">
            <template v-slot:activator="{ props }">
              <v-btn flat rounded v-bind="props"
                ><v-icon>mdi-marker</v-icon></v-btn
              >
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
      <v-col>
        <h5>Informations professionnelles</h5>
      </v-col>
      <v-col>
        <v-row justify="space-around">
          <v-col cols="auto">
            <v-dialog transition="dialog-bottom-transition">
              <template v-slot:activator="{ props }">
                <v-btn flat rounded v-bind="props">
                  <v-icon right size="20">mdi-briefcase-edit-outline</v-icon>
                </v-btn>
              </template>
              <template v-slot:default="{ isActive }">
                <v-card>
                  <v-toolbar color="primary"
                    >Informations personnelles</v-toolbar
                  >
                  <v-icon style="margin-left: 200px" size="50">
                    mdi-check-outline
                  </v-icon>
                  <v-card-text>
                    <v-col cols="12" sm="12">
                      <v-text-field
                        v-model="name"
                        label="Full Name"
                        variant="outlined"
                        clearable
                        clear-icon="mdi-cancel"
                        style="width: 400px"
                      ></v-text-field>
                    </v-col>
                  </v-card-text>
                  <v-card-actions class="justify-end">
                    <v-btn text rounded @click="isActive.value = false"
                      >Annuler</v-btn
                    >
                    <v-btn text rounded @click.prevent="updatename"
                      >ENregistrer</v-btn
                    >
                  </v-card-actions>
                </v-card>
              </template>
            </v-dialog>
          </v-col>
        </v-row>
      </v-col>
      <h6>{{ users.name }}</h6>
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
                        <v-text-field type="email" v-model="email">
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
      <h6>* * * * * * * *</h6>
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
      users: {},
      error: "",
      idc: this.$route.params.id,
      dialog: false,
      show1: false,
      message4: "Hey!",
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
          this.$store.commit("SET_token", null);
          this.$store.commit("SET_user", null);
          this.$store.commit("SET_loggedIn", false);
          this.$router.go(0);
          this.$router.push("/SignIn");
        });
    },
    async updatename() {
      axios
        .post("http://localhost:8000/api/auth/updatename/" + this.user.id, {
          name: this.name,
        })
        .then((response) => {
          console.log(response);
          this.$router.go(0);
        });
    },
    async updateemail() {
      axios
        .post("http://localhost:8000/api/auth/updateemail/" + this.user.id, {
          email: this.email,
        })
        .then((response) => {
          console.log(response);
          this.$router.go(0);
        })
        .catch((err) => {
          this.isLoading = false;
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
          this.$router.go(0);
        })
        .catch((err) => console.log(err));
    },
  },
  mounted() {},
};
</script>

<style></style>
