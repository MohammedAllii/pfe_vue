<template>
  <navbar-view />
  <v-divider></v-divider>
  <v-container>
    <v-row align-content="center">
      <h5>Créer Votre CV</h5>
      <br />
      <p style="margin-left: 850px">
        <v-icon>mdi-eye-check-outline</v-icon> Visualiser Ce CV
      </p>
      <br />
    </v-row>
  </v-container>
  <v-container style="border: 1px solid; max-width: 70%; border-radius: 2%">
    <div align="center" style="width: 100%; height: 20%">
      <v-avatar size="150" style="border-radius: 100%">
        <v-img v-bind:src="'../cvs/' + cvs.avatar"></v-img>
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
                  <v-btn text rounded type="submit">Enregistrer</v-btn>
                </v-card-actions>
              </form>
            </v-card>
          </template>
        </v-dialog>
      </v-col>
      <h4>{{ user.name }}</h4>
      <h5>{{ cvs.poste }}</h5>
      <h5>{{ cvs.localite }}</h5>
      <v-divider></v-divider>
      <h5>{{ cvs.email }}</h5>
    </div>
  </v-container>
  <v-container>
    <h5>Langue du CV</h5>
    <v-row justify="space-around">
      <v-col cols="auto">
        <v-dialog transition="dialog-bottom-transition">
          <template v-slot:activator="{ props }">
            <v-btn rounded color="#EEFF41" v-bind="props"
              >From the bottom</v-btn
            >
          </template>
          <template v-slot:default="{ isActive }">
            <v-card>
              <v-card-text>
                <v-card class="mx-auto" width="400" prepend-icon="mdi-file">
                  <template v-slot:title> Langue CV </template>
                  <v-autocomplete
                    ref="country"
                    v-model="country"
                    :rules="[() => !!country || 'This field is required']"
                    :items="countries"
                    label="Country"
                    placeholder="Select..."
                    required
                  ></v-autocomplete>
                </v-card>
              </v-card-text>
              <v-card-actions class="justify-end">
                <v-btn text @click="isActive.value = false">Annuler</v-btn>
                <v-btn text @click="isActive.value = false">Enregistrer</v-btn>
              </v-card-actions>
            </v-card>
          </template>
        </v-dialog>
      </v-col>
    </v-row>
  </v-container>
  <v-container>
    <div align="center">
      <v-row>
        <v-col>
          <v-row justify="space-around">
            <v-col cols="auto">
              <v-dialog transition="dialog-bottom-transition">
                <template v-slot:activator="{ props }">
                  <v-btn rounded flat v-bind="props">
                    <v-icon>mdi-file-document-edit-outline</v-icon> Résumé
                  </v-btn>
                </template>
                <template v-slot:default="{ isActive }">
                  <v-card align="center">
                    <br />
                    <h5>Your CV Resume Please!</h5>
                    <v-img
                      src="https://static.vecteezy.com/ti/vecteur-libre/p1/2592733-avatar-figure-humaine-dans-cv-document-line-style-icon-gratuit-vectoriel.jpg"
                      style="width: 180px; height: 180px"
                    ></v-img>
                    <v-textarea
                      background-color="grey lighten-2"
                      color="cyan"
                      label="write your résumé "
                      style="border-radius: 30px; width: 600px"
                    ></v-textarea>
                    <v-card-actions class="justify-end">
                      <v-btn text rounded @click="isActive.value = false"
                        >Annuler</v-btn
                      >
                      <v-btn
                        style="background-color: green"
                        text
                        rounded
                        @click="isActive.value = false"
                        >Enregistrer</v-btn
                      >
                    </v-card-actions>
                  </v-card>
                </template>
              </v-dialog>
            </v-col>
          </v-row>
          <br />
          <v-btn rounded flat
            ><v-icon>mdi-briefcase-edit</v-icon> Expériences
            professionnelles</v-btn
          >
          <p><v-icon>mdi-wallpaper</v-icon> Formations et diplômes</p>

          <v-col cols="auto">
            <v-dialog transition="dialog-top-transition">
              <template v-slot:activator="{ props }">
                <v-btn rounded flat v-bind="props"
                  ><v-icon>mdi-parachute</v-icon> Compétences</v-btn
                >
                <br /><br />
              </template>
              <template v-slot:default="{ isActive }">
                <v-card align="center">
                  <br />
                  <v-icon size="40"
                    >mdi-set-left-center
                    <h5>Give us YOUR capacities</h5></v-icon
                  >
                  <p>
                    votre Compétences
                    <v-col cols="12" sm="12">
                      <v-text-field
                        v-model="message4"
                        label="compétences"
                        variant="outlined"
                        clearable
                        clear-icon="mdi-cancel"
                        style="width: 550px"
                      ></v-text-field>
                    </v-col>
                  </p>
                  <p>
                    Expériences

                    <v-select
                      style="border-style: ridge"
                      v-model="select"
                      :items="items"
                      :rules="[(v) => !!v || 'Item is required']"
                      label="Item"
                      required
                    ></v-select>
                  </p>
                  <v-card-actions class="justify-end">
                    <v-btn text rounded @click="isActive.value = false"
                      >Annuler</v-btn
                    >
                    <v-btn
                      text
                      rounded
                      style="background-color: green"
                      @click="isActive.value = false"
                      >Enregistrer</v-btn
                    >
                  </v-card-actions>
                </v-card>
              </template>
            </v-dialog>
          </v-col>

          <v-row justify="space-around">
            <v-col cols="auto">
              <v-dialog transition="dialog-bottom-transition">
                <template v-slot:activator="{ props }">
                  <v-btn rounded flat v-bind="props"
                    ><v-icon>mdi-language-c</v-icon> Langues</v-btn
                  >
                </template>
                <template v-slot:default="{ isActive }">
                  <v-card align="center">
                    <v-icon size="50"
                      >mdi-fountain-pen
                      <h5>Langues</h5></v-icon
                    >
                    <p>
                      Langues
                      <v-col cols="12" sm="12">
                        <v-text-field
                          v-model="message4"
                          label="compétences"
                          variant="outlined"
                          clearable
                          clear-icon="mdi-cancel"
                          style="width: 550px"
                        ></v-text-field>
                      </v-col>
                    </p>
                    <p>
                      Niveau

                      <v-select
                        style="border-style: ridge"
                        v-model="select"
                        :items="items1"
                        :rules="[(v) => !!v || 'Item is required']"
                        label="Item"
                        required
                      ></v-select>
                    </p>
                    <v-card-actions class="justify-end">
                      <v-btn text rounded @click="isActive.value = false"
                        >Annuler</v-btn
                      >
                      <v-btn
                        text
                        rounded
                        style="background-color: green"
                        @click="isActive.value = false"
                        >Enregistrer</v-btn
                      >
                    </v-card-actions>
                  </v-card>
                </template>
              </v-dialog>
            </v-col>
          </v-row>
          <p><v-icon>mdi-file-compare</v-icon> Accréditations</p>
        </v-col>
        <v-col>
          <p><v-icon>mdi-school</v-icon> Distinctions</p>

          <v-row justify="space-around">
            <v-col cols="auto">
              <v-dialog transition="dialog-bottom-transition">
                <template v-slot:activator="{ props }">
                  <v-btn rounded flat v-bind="props"
                    ><v-icon>mdi-link-variant</v-icon> Liens</v-btn
                  ><br /><br />
                </template>
                <template v-slot:default="{ isActive }">
                  <v-card align="center">
                    <v-icon size="50"
                      >mdi-file-document-edit
                      <h6>Liens</h6></v-icon
                    >
                    <p>
                      Titre
                      <v-col cols="12" sm="12">
                        <v-text-field
                          v-model="message4"
                          label="Titre"
                          variant="outlined"
                          clearable
                          clear-icon="mdi-cancel"
                          style="width: 600px"
                        ></v-text-field>
                      </v-col>
                    </p>
                    <p>
                      URL
                      <v-col cols="12" sm="12">
                        <v-text-field
                          v-model="message4"
                          label="URL"
                          variant="outlined"
                          clearable
                          clear-icon="mdi-cancel"
                        ></v-text-field>
                      </v-col>
                    </p>

                    <v-card-actions class="justify-end">
                      <v-btn text rounded @click="isActive.value = false"
                        >Annuler</v-btn
                      >
                      <v-btn
                        text
                        rounded
                        style="background-color: green"
                        @click="isActive.value = false"
                        >Enregistrer</v-btn
                      >
                    </v-card-actions>
                  </v-card>
                </template>
              </v-dialog>
            </v-col>
          </v-row>

          <v-col cols="auto">
            <v-dialog transition="dialog-top-transition">
              <template v-slot:activator="{ props }">
                <v-btn rounded flat v-bind="props"
                  ><v-icon>mdi-script-outline</v-icon> Volontariat</v-btn
                ><br /><br />
              </template>
              <template v-slot:default="{ isActive }">
                <v-card>
                  <v-toolbar color="primary">Opening from the top</v-toolbar>
                  <v-card-text>
                    <div class="text-h2 pa-12">Hello world!</div>
                  </v-card-text>
                  <v-card-actions class="justify-end">
                    <v-btn text @click="isActive.value = false">Close</v-btn>
                  </v-card-actions>
                </v-card>
              </template>
            </v-dialog>
          </v-col>

          <v-row justify="space-around">
            <v-col cols="auto">
              <v-dialog transition="dialog-bottom-transition">
                <template v-slot:activator="{ props }">
                  <v-btn rounded flat v-bind="props"
                    ><v-icon>mdi-lightbulb-on-outline</v-icon> Intérêts</v-btn
                  >
                </template>
                <template v-slot:default="{ isActive }">
                  <v-card align="center">
                    <v-icon size="50"
                      >mdi-account-heart
                      <h6>Intérêts</h6></v-icon
                    >
                    <p>
                      Intérêts
                      <br />
                      <v-textarea
                        background-color="amber lighten-4"
                        color="orange orange-darken-4"
                        label="Ecrire"
                        style="width: 600px; border-style: ridge"
                      ></v-textarea>
                    </p>
                    <v-card-actions class="justify-end">
                      <v-btn text rounded @click="isActive.value = false"
                        >Annuler</v-btn
                      >
                      <v-btn
                        text
                        rounded
                        style="background-color: green"
                        @click="isActive.value = false"
                        >Enregistrer</v-btn
                      >
                    </v-card-actions>
                  </v-card>
                </template>
              </v-dialog>
            </v-col>
          </v-row>

          <p><v-icon>mdi-hand-pointing-up</v-icon> Références</p>
        </v-col>
      </v-row>
    </div>
  </v-container>
  <v-divider></v-divider>
  <footer-view />
</template>
<script>
import axios from "axios";
import NavbarView from "@/components/NavbarView.vue";
import FooterView from "@/components/FooterView.vue";
export default {
  components: {
    NavbarView,
    FooterView,
  },
  data() {
    return {
      image: null,
      imgs: {},
      cvs: {},
      idc: this.$route.params.id,
      value: 10,
      bufferValue: 20,
      interval: 0,
      countries: [
        "Anglais",
        "Arabe",
        "Chinois",
        "Espagnol",
        "Français",
        "Russe",
        "Albanais",
        "Allemand",
        "Amazigh",
        "Arménien",
        "Aymara",
        "Bengali",
        "Catalan",
        "Coréen",
        "Croate",
        "Danois",
        "Guarani",
        "Grec",
        "Hongrois",
        "Italien",
        "Japonais",
        "Kikongo",
        "Kiswahili",
        "Lingala",
        "Malais",
        "Mongol",
        "Néerlandais",
        "Occitan",
        "Ourdou",
        "Persan",
        "Portugais",
        "Quechua",
        "Roumain",
        "Samoan",
        "Serbe",
        "Sesotho",
        "Slovaque",
        "Slovène",
        "Suédois",
        "Tamoul",
        "Turc",
        "Afrikaans",
        "Araona",
        "Azéri",
        "Baure",
        "Bésiro",
        "Bichelamar",
        "Biélorusse",
        "Birman",
        "Bulgare",
        "Canichana",
        "Cavineña",
        "Cayubaba",
        "Chácobo",
        "Chichewa",
        "Chimane",
        "Créole de Guinée-Bissau",
        "Créole Antillais",
        "Créole seychellois",
        "Divehi",
        "Dzongkha",
        "Ese ejja",
        "Estonien",
      ],
      country: this.country,
      select: null,
      items: [
        "0.5an",
        "1 an",
        "2 an ",
        "3 an ",
        "4 an ",
        "5 an",
        "6 an ",
        "7 an",
        "8 an ",
        "9 an ",
        "10 an ",
        "11 an",
        "12 an ",
        "13 an",
        "14 an ",
        "15 an ",
        "16 an ",
        "17 an",
        "18 an ",
        "19 an",
        "20 an ",
        "i dont know exactly",
      ],
      items1: ["Débutant", "Courant", "Avancé", "Langue Maternelle"],
    };
  },
  computed: {
    user() {
      return this.$store.getters.get_user;
    },
  },
  created() {
    this.getCvById();
  },
  methods: {
    async getCvById() {
      let url = "http://localhost:8000/api/auth/affichecv/" + this.idc;
      await axios.get(url).then((response) => {
        this.cvs = response.data;
        console.log(response.data);
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
        .post("http://localhost:8000/api/auth/uploadcv/" + this.idc, fd)
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
