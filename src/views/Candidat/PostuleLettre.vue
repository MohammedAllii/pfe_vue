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
                  <v-row>
                    <v-col cols="12" md="12">
                      <p class="text-h6">
                        <v-img
                          src=" https://www.hloom.com/images/cle-banner.svg "
                          style="width: 80px; height: 80px"
                        ></v-img
                        >Télécharger votre lettre
                      </p>
                      <p>
                        Téléchargez votre lettre de motivation au format de
                        votre choix et soyez fin prêt pour postuler.
                      </p>
                    </v-col>
                  </v-row>
                  <v-card-text>
                    <v-row>
                      <v-col cols="12" md="12">
                        <v-file-input
                          accept="image/*"
                          label="File input"
                        ></v-file-input>
                      </v-col>
                    </v-row>
                  </v-card-text>
                  <v-card-actions class="justify-end">
                    <v-btn
                      text
                      rounded
                      flat
                      color="red"
                      @click="isActive.value = false"
                      >Annuler</v-btn
                    >
                    <v-btn
                      text
                      rounded
                      flat
                      color="green"
                      @click="isActive.value = false"
                      >Enregistrer</v-btn
                    >
                  </v-card-actions>
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
                <v-list lines="15" subheader>
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
                      <v-col cols="12" md="4">
                        <v-text-field
                          label="Enter your name"
                          variant="outlined"
                          clearable
                          clear-icon="mdi-cancel"
                          prepend-inner-icon="mdi-emoticon-excited-outline"
                        ></v-text-field>
                      </v-col>
                      <v-col cols="12" md="4">
                        <v-text-field
                          label="Enter your profession"
                          variant="outlined"
                          clearable
                          clear-icon="mdi-cancel"
                          prepend-inner-icon="mdi-brain"
                        ></v-text-field>
                      </v-col>
                    </v-row>
                  </v-row>
                  <v-row>
                    <v-col cols="12" md="4">
                      <v-text-field
                        label="Enter your phone Number"
                        variant="outlined"
                        clearable
                        clear-icon="mdi-cancel"
                        prepend-inner-icon="mdi-cellphone-android"
                      ></v-text-field>
                    </v-col>
                    <v-col cols="12" md="4">
                      <v-text-field
                        label="Enter your Email"
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
                        auto-grow
                        filled
                        color="blue"
                        label="Bio"
                        rows="1"
                      ></v-textarea>
                    </v-col>
                    <v-col cols="12" md="4">
                      <v-btn rounded flat>Annuler</v-btn>
                      <v-btn rounded flat color="green"
                        >Enregistrer</v-btn
                      ></v-col
                    >
                  </v-row>
                </v-list>
              </v-card>
            </v-dialog>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
  </div>
  <v-divider></v-divider>
  <footer-view />
</template>
<script>
import NavbarView from "@/components/NavbarView.vue";
import FooterView from "@/components/FooterView";
export default {
  data() {
    return {
      dialog: false,
      notifications: false,
      sound: true,
      widgets: false,
    };
  },
  components: { NavbarView, FooterView },
};
</script>
<style>
.dialog-bottom-transition-enter-active,
.dialog-bottom-transition-leave-active {
  transition: transform 0.2s ease-in-out;
}
</style>
